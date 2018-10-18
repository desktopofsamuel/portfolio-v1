---

path: "/building-gatsby-with-multiple-post-type"

date: "2018-09-07"

title: "Building Gatsby With Multiple Post Type"

tags: ["Work-In-Progress", "Gatsby", ]

image: "./Gatsby-Multiple-Post-Type.png"

intro: "I'm sharing my way of setting up a multiple post types in GatsbyJS. It works for portfolio setup with blog + projects. "

---

TLDR: I'm sharing my way of setting up a multiple post types in GatsbyJS. It works for portfolio setup with blog + projects. 

As a designer with no prior experience in React, starting Gatsby with a starter template is the easiest way. After that, adding bits and pieces by following online tutorials and Github threads are the parts that you learn, as you understand how to adapt others' code and review each expression and argument means whenever you encounter errors.

##Use Case

I'm setting up my Gatsby to support multiple post types, as I want to display my blog articles and projects at the same time. It is useful for personal / agency site setup. Since all posts will be rendered by markdown files, they will be saved in different source folders for simplicity.   

##What To Do

Let me explain the whole process verbally since there are only a few tutorials online. For the record, this assumed you have an existing Gatsby blog already.  

Things we need to do:

1. Create a new "projects" folder and post under source folder
2. Edit `gatsby-config.js` to include new source folder in `gatsby-source-filesystem` plugin
3. Duplicate `blog-post.js` to create `project-post.js` template
3. Edit `gatsby-node.js` CreatePage API to adopt a separate template for different post type. 
4. Create Project Main page to query project post
5. Edit Blog Main page not to query project post
6. Make sure other functions like Tags, Prev/Next will not mix up in both types

##1. Create New Projects Folder
My source folder setup is like this:
```
src
——blogs
    —— Blog Post #1
		——index.md
		——photo1.jpg
——projects
	——Project #1
		——index.md
		——photo2.jpg 	
——templates
		——blog-post.js
		——project-post.js
```
All blog posts and project posts will be grouped in separated folders, with individual project post named `index.md`, together with a feature photo. In this scenario, all project files will require a feature photo since it will be displayed on Project Main page. 

For frontmatter of the markdown, I have added a new field called "Posttype", those specified as `posttype: project` will be queried later in project main page. Those without will be recognized as a blog post.

My markdown frontmatter setup is:

```
path: "/project-1"
date: "2018-09-07"
title: "Project 1"
tags: ["app", "design"]
posttype: "project"
image: "./project-1.png"
```


##2. Edit Gatsby-Config.js
We will need to edit gatsby-config.js in order to let Gatsby know where to look when create a new post page. 
```
{
  resolve: 'gatsby-source-filesystem',
  options: {
    path: `${__dirname}/src/projects`,
    name: 'project'
  }
},
```

##3. Create Project Post Template
Then, we will need to create a Project Post template `project-post.js`, putting in my template (src/templates) folder together with `blog-post.js`, so later `gatsby-node.js` can reference to when creating project pages.
 
Let's copy everything from `blog-post.js` and paste it in Project Post. This will ensure everything works accordingly. However, you will only need to rename the GraphQL query name, since all GraphQL query need to have unique name. I changed from "BlogPostByPath" to "ProjectPostByPath". We can come back and edit it later. 

##4. Edit Gatsby-Node.js
**Being a static site generator, Gatsby-Node.js handles how your site is generated.** Personally speaking, it is a rather confusing part of the whole Gatsby development process.

CreatePages should be in the file already. 
`exports.createPages = ({boundActionCreators, graphql}) => {
    const { createPage } = boundActionCreators`

We will need to import the `project-post.js`right after the blog template. 

`const postTemplate = path.resolve('src/templates/blog-post.js');
        const projectTemplate = path.resolve('src/templates/project-post.js');`
        
After that, we will use our newly created frontmatter field, "posttype" to filter all our markdown pages. Because a majority of markdown pages will be blog page, if / else argument is used here. Unless specified post "posttype" is equal to "project" (or any other posttype to be included in the future), or else Gatsby will recognise the post as a blog post.

Here's my `gatsby-node.js` file:

```Javascript
result.data.allMarkdownRemark.edges.forEach(edge => {
    if (edge.node.frontmatter.posttype === 'project') {
        createPage({
            path: edge.node.frontmatter.path,
            component: projectTemplate,
            cotext: {}
        });
    }   
    else {
        createPage({
            path: edge.node.frontmatter.path,
            component: postTemplate,
            context: {
            },
        })
    }
})    
```

Remember you will need starting the site again with the command `gatsby-develop` at the terminal since hot reload does not cover the gatsby-node.js page.

If you have successfully `gatsby-develop` the site, let's go to the project post path to make sure it is working. You should be seeing a blog post with your project content. Now you may adjust the project post template to suit your needs.


Right now this method is not creating a prefix path in front of the project post. So there might be a chance that project post shares the same path with a blog post. I'm still looking for a solution, feel free to suggest any. 

##5. Create Project Main Page

Now the individual post is done, let's work on a Project Main page that will query all project post. 

First, all the standards:
```
import React from 'react'
import Link from 'gatsby-link'

const ProjectPage = ({data}) => {
    {data.allMarkdownRemark.edges.map(post => (
        <div key={ post.node.id }>
                <Img sizes={post.node.frontmatter.image.childImageSharp.sizes} />
                <Link to={post.node.frontmatter.path} >
                    <h2>{post.node.frontmatter.title}</h2>
                </Link>
                <p>{post.node.excerpt}</p>
        <div/>>

return (
)}
export const pageQuery = graphql`
```

Then we will add our GraphQL query at the end, notice I have filtered using the frontmatter, only those markdown files with assigned "project" as a post type will display. 

```
query ProjectIndex {
  allMarkdownRemark(
      sort: {order: DESC, fields: [frontmatter___date]}, 
      filter: {frontmatter: {posttype: {eq: "project"}}}
    ){
    edges {
      node {
        id
        excerpt(pruneLength: 250)
        frontmatter {
          path
          title
          date
          tags
          image {
            childImageSharp {
              sizes(maxWidth: 1140) {
                base64
                aspectRatio
                src
                srcSet
                srcWebp
                srcSetWebp
                sizes
                originalImg
                originalName
              }
            }
          }
        }
      }
    }
  }
}

```

Remember to add `export default ProjectPage`

##6. Edit Blog Main

Then if you go to Blog Main page, you would still see a mix of blog posts and projects. That is because you will need to filter the GraphQL as well. 

Because we use if/else function in `gatsby-node.js`, stating all post without specifying posttype will be a blog post. We cannot query this page using frontmatter's post type,  we will use the filter function base on the Markdown's path.
  
```GraphQL
allMarkdownRemark (
        sort: { order: DESC, fields: [frontmatter___date] },
        filter: {fileAbsolutePath: {regex: "\/blogs/"}}
    )
```

##7. Make sure other functions will not mix up in different post types

Last but not least, we'll need to double check if functions like tags, prev/next will mix up both post type. I'm still working on this part. Will update soon.
Meanwhile, feel free to share your ways of creating your own personal site using Gatsby. Please let me know if there are any better ways to do so.








