/* eslint consistent-return: 0, array-callback-return: 0 */ 

const path = require('path');
const _ = require('lodash');
const webpackLodashPlugin = require('lodash-webpack-plugin');

let postNodes = [];
function addSiblingNodes(createNodeField) {
  
  postNodes = postNodes.filter(post => {  if (post.id.indexOf('/blogs/') > 0) return post; });
  
  postNodes.sort(
    ({ frontmatter: { date: date1 } }, { frontmatter: { date: date2 } }) =>
      new Date(date1) - new Date(date2)
  );
  for (let i = 0; i < postNodes.length; i += 1) {
    const nextID = i + 1 < postNodes.length ? i + 1 : 0;
    const prevID = i - 1 > 0 ? i - 1 : postNodes.length - 1;
    const currNode = postNodes[i];
    const nextNode = postNodes[nextID];
    const prevNode = postNodes[prevID];
    createNodeField({
      node: currNode,
      name: 'nextTitle',
      value: nextNode.frontmatter.title
    });
    createNodeField({
      node: currNode,
      name: 'nextSlug',
      value: nextNode.fields.slug
    });
    createNodeField({
      node: currNode,
      name: 'prevTitle',
      value: prevNode.frontmatter.title
    });
    createNodeField({
      node: currNode,
      name: 'prevSlug',
      value: prevNode.fields.slug
    });
  }
}

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators;
  let slug;
  if (node.internal.type === 'MarkdownRemark') {
    const fileNode = getNode(node.parent);
    const parsedFilePath = path.parse(fileNode.relativePath);
    if (
      Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, 'title')
    ) {
      slug = `/${_.kebabCase(node.frontmatter.title)}`;
    } else if (parsedFilePath.name !== 'index' && parsedFilePath.dir !== '') {
      slug = `/${parsedFilePath.dir}/${parsedFilePath.name}/`;
    } else if (parsedFilePath.dir === '') {
      slug = `/${parsedFilePath.name}/`;
    } else {
      slug = `/${parsedFilePath.dir}/`;
    }
    if (
      Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, 'path')
    ) {
      slug = `/${_.kebabCase(node.frontmatter.path)}`;
    }
    createNodeField({ node, name: 'slug', value: slug });
    postNodes.push(node);
  }
};

exports.setFieldsOnGraphQLNodeType = ({ type, boundActionCreators }) => {
  const { name } = type;
  const { createNodeField } = boundActionCreators;
  if (name === 'MarkdownRemark') {
    addSiblingNodes(createNodeField);
  }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    const postPage = path.resolve('src/templates/blog-post.js');
    const workPage = path.resolve('src/templates/project-post.js');
    const tagPage = path.resolve('src/templates/tag-page.js');
    const categoryPage = path.resolve('src/templates/category-page.js');
    resolve(
      graphql(
        `
        {
          allMarkdownRemark {
            edges {
              node {
                id
                frontmatter {
                  path
                  title
                  date
                  tags
                  category
                  subtitle
                  intro
                  url
                  posttype
                }
              }
            }
          }
        }
      `
      ).then(result => {
        if (result.errors) {
          /* eslint no-console: "off" */
          console.log(result.errors);
          reject(result.errors);
        }

        const tagSet = new Set();
        const categorySet = new Set();
        result.data.allMarkdownRemark.edges.forEach(edge => {
          if (edge.node.frontmatter.tags) {
            edge.node.frontmatter.tags.forEach(tag => {
              tagSet.add(tag);
            });
          }

          {if (edge.node.frontmatter.category) {
            categorySet.add(edge.node.frontmatter.category);
          } }
          

          if (edge.node.frontmatter.posttype === 'project') {
            createPage({
              path: `${edge.node.frontmatter.path}`,
              component: workPage,
              context: {
              }
            });
          } else { // blog post
            createPage({
              path: edge.node.frontmatter.path,
              component: postPage,
              context: {
              }
            });
          }
        });

        const tagList = Array.from(tagSet);
        tagList.forEach(tag => {
          createPage({
            path: `/tags/${_.kebabCase(tag)}/`,
            component: tagPage,
            context: {
              tag
            }
          });
        });

        
        const categoryList = Array.from(categorySet);
        categoryList.forEach(category => {
          createPage({
            path: `/categories/${_.kebabCase(category)}/`,
            component: categoryPage,
            context: {
              category: `${_.kebabCase(category)}/`,
            }
          });
        });
            
      })
    );
  });
};

exports.onCreatePage = ({ page }) => {
  if (page.path.startsWith('/404')) {
    page.layout = '404.index';
  }
};

exports.modifyWebpackConfig = ({ config, stage }) => {
  if (stage === 'build-javascript') {
    config.plugin('Lodash', webpackLodashPlugin, null);
  }
};