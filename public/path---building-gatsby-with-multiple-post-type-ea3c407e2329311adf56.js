webpackJsonp([0xc14446e41c05],{1010:function(e,t){e.exports={data:{markdownRemark:{html:'<p>TLDR: I\'m sharing my way of setting up a multiple post types in GatsbyJS. It works for portfolio setup with blog + projects . </p>\n<p>As a designer with no prior experience in React, starting Gatsby with a starter template is the easiest way. After that, adding bits and pieces by following online tutorials and github threads are the parts that you learn, as you undersstand how to adapt others\' code and review each expression and argument means whenever you encounter errors.</p>\n<h2>Use Case</h2>\n<p>I\'m setting up my Gatsby to support multiple post types, as I want to display my blog articles and projects at the same time. It is useful for personal / agency site setup. Since all posts will be rendered by markdown files, they will be saved in different source folders for simplicity.   </p>\n<h2>What To Do</h2>\n<p>Let me explain the whole process verbally since there are only a few tutorials online. For the record, this have all assume you have an existing Gatsby blog already.  </p>\n<p>Things we need to do:</p>\n<ol>\n<li>Create a new "projects" folder and post under source folder</li>\n<li>Edit <code>gatsby-config.js</code> to include new source folder in <code>gatsby-source-filesystem</code> plugin</li>\n<li>Duplicate <code>blog-post.js</code> to create <code>project-post.js</code> template</li>\n<li>Edit <code>gatsby-node.js</code> CreatePage API to adopt separate template for different post type. </li>\n<li>Create Project Main page to query project post</li>\n<li>Edit Blog Main page not to query project post</li>\n<li>Make sure other functions like Tags, Prev/Next will not mix up in both types</li>\n</ol>\n<h2>1. Create New Projects Folder</h2>\n<p>My source folder setup is like this:</p>\n<pre><code>src\n——blogs\n    —— Blog Post #1\n        ——index.md\n        ——photo1.jpg\n——projects\n    ——Project #1\n        ——index.md\n        ——photo2.jpg    \n——templates\n        ——blog-post.js\n        ——project-post.js\n</code></pre>\n<p>All blog posts and project posts will be grouped in separated folders, with individual project post named <code>index.md</code> and a feature photo. In this scenario, all project files will require a feature photo since it will be displayed on Project Main page. </p>\n<p>For frontmatter of the markdown, I have added a new field called "Posttype", those specified as <code>posttype: project</code> will be queried later in project main page.</p>\n<p>My markdown frontmatter setup is:</p>\n<pre><code>path: "/project-1"\ndate: "2018-09-07"\ntitle: "Project 1"\ntags: ["app", "design"]\nposttype: "project"\nimage: "./project-1.png"\n</code></pre>\n<h2>2. Edit Gatsby-Config.js</h2>\n<p>We will need to edit gatsby-config.js in order to let Gatsby know where to look when create new post page. </p>\n<pre><code>{\n  resolve: \'gatsby-source-filesystem\',\n  options: {\n    path: `${__dirname}/src/projects`,\n    name: \'project\'\n  }\n},\n</code></pre>\n<h2>3. Create Project Post Template</h2>\n<p>Then, we will need to create a Project Post template <code>project-post.js</code>, putting in my template (src/templates) folder together with <code>blog-post.js</code>, so later <code>gatsby-node.js</code> can reference to when creating project pages.</p>\n<p>Let\'s copy everything from <code>blog-post.js</code> and paste it in Project Post. This will ensure everything works accordingly. However, you will only need to rename the GraphQL query name, since all GraphQL query need to have unique name. I changed from "BlogPostByPath" to "ProjectPostByPath". We can come back and edit it later. </p>\n<h2>4. Edit Gatsby-Node.js</h2>\n<p><strong>Being a static site generator, Gatsby-Node.js handles how the site create each page from React into HTML.</strong> Personally speaking, it is a rather confusing part of the whole process. </p>\n<p>CreatePages should be in the file already.\n<code>exports.createPages = ({boundActionCreators, graphql}) => { const { createPage } = boundActionCreators</code></p>\n<p>We will need to import the <code>project-post.js</code>right after the blog template. </p>\n<p><code>const postTemplate = path.resolve(\'src/templates/blog-post.js\'); const projectTemplate = path.resolve(\'src/templates/project-post.js\');</code>\n<br>\nAfter that, we will use our newly created frontmatter field, "posttype" to filter all our markdown pages. Because majority of markdown pages will be blog page, I use the if / else argument. Unless specified post "posttype" is equal to "project" (or any other posttype to be included in the future), or else Gatsby will recognise the post as a blog post. </p>\n<p>Here\'s my <code>gatsby-node.js</code> file:</p>\n<pre><code class="language-Javascript">result.data.allMarkdownRemark.edges.forEach(edge => {\n    if (edge.node.frontmatter.posttype === \'project\') {\n        createPage({\n            path: edge.node.frontmatter.path,\n            component: projectTemplate,\n            cotext: {}\n        });\n    }   \n    else {\n        createPage({\n            path: edge.node.frontmatter.path,\n            component: postTemplate,\n            context: {\n            },\n        })\n    }\n})    \n</code></pre>\n<p>Remember you will need starting the site again with <code>gatsby-develop</code> since hot reload does not include regenerating all posts </p>\n<p>If you have successfully <code>gatsby-develop</code> the site, let\'s go to the project post path to make sure it is working. You should be seeing a blog post with your project cotent. Now you may adjsut the project post template to suit your needs.</p>\n<p>Right now this method is not creating a prefix path in front of the project post. So there might be a chance that project post shares the same path with a blog post. I\'m still looking for a solution, feel free to suggest any. </p>\n<h2>5. Create Project Main Page</h2>\n<p>Now the individual post is done, let\'s work on a Project Main page that will query all project post. </p>\n<p>First, all the standards:</p>\n<pre><code>import React from \'react\'\nimport Link from \'gatsby-link\'\n\nconst ProjectPage = ({data}) => {\n    {data.allMarkdownRemark.edges.map(post => (\n        &#x3C;div key={ post.node.id }>\n                &#x3C;Img sizes={post.node.frontmatter.image.childImageSharp.sizes} />\n                &#x3C;Link to={post.node.frontmatter.path} >\n                    &#x3C;h2>{post.node.frontmatter.title}&#x3C;/h2>\n                &#x3C;/Link>\n                &#x3C;p>{post.node.excerpt}&#x3C;/p>\n        &#x3C;div/>>\n\nreturn (\n)}\nexport const pageQuery = graphql`\n</code></pre>\n<p>Then we will add our GraphQL query at the end, notice I have filtered using the frontmatter, only those markdown files with assigned "project" as a post type will display. </p>\n<pre><code>query ProjectIndex {\n  allMarkdownRemark(\n      sort: {order: DESC, fields: [frontmatter___date]}, \n      filter: {frontmatter: {posttype: {eq: "project"}}}\n    ){\n    edges {\n      node {\n        id\n        excerpt(pruneLength: 250)\n        frontmatter {\n          path\n          title\n          date\n          tags\n          image {\n            childImageSharp {\n              sizes(maxWidth: 1140) {\n                base64\n                aspectRatio\n                src\n                srcSet\n                srcWebp\n                srcSetWebp\n                sizes\n                originalImg\n                originalName\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n</code></pre>\n<p>Remember to add <code>export default ProjectPage</code></p>\n<h2>6. Edit Blog Main</h2>\n<p>Then if you go to Blog Main page, you would still see all the markdown fiels located in project. That is because you will need filter the GraphQL as well. </p>\n<p>Because we use if/else function in <code>gatsby-node.js</code>, stating all post without specifying posttype will be a blog post. We cannot query this page using frontmatter\'s post type,  we will use the filter function that is only available for allMarkdownRemark.</p>\n<pre><code class="language-GraphQL">allMarkdownRemark (\n        sort: { order: DESC, fields: [frontmatter___date] },\n        filter: {fileAbsolutePath: {regex: "\\/blogs/"}}\n    )\n</code></pre>\n<h2>7. Make sure other functions will not mix up in different post types</h2>\n<p>Last but not least, we\'ll need to double check if functions like tags, prev/next will mix up both post type. </p>\n<p>All of these posts should separated under the two post type. I\'m still figuring out how to do that. Will update soon. </p>',excerpt:"TLDR: I'm sharing my way of setting up a multiple post types in GatsbyJS. It works for portfolio setup with blog + projects .  As a designer with no prior experience in React, starting Gatsby with a starter template is the easiest way. After that…",frontmatter:{path:"/building-gatsby-with-multiple-post-type",title:"Building Gatsby With Multiple Post Type",date:"September 07, 2018",tags:["Work-In-Progress","Gatsby"],image:{publicURL:"/static/Gatsby-Multiple-Post-Type-6a30960756ef14aa7a84aab6b38b558a.png",size:36684,childImageSharp:{sizes:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB2klEQVQoz42S208TURCH+/9pYmI00UcTfaiQ1BixMdoENRUjsYrLpShFLm2DLTEEfTAttTGBtY2A0FYEw4u1sOWy9LIKyO72c3fbkgIBmWQyc07O7ztnZo6NmlUqlf2Yza4w/zVDen7B8lTN6/m39CJK+fcBXd1sh4HFQokbTS66Xgzi7fbTIwzRa0Rvp5F3DvPaF+JOyyP8g6PWeU3TTgbmpXXaH/cQi4p8Ty9be9s7OqpuxO2qOBqZwvcycDqgvLmFs8WNw3Gf20aciHwh8CTOB/8c+XzBgo+Pxeh/FTwdsFQsc93u4szZK5y/ZOdZ6wh3z/lovRhmKbXCnqGPx5KMvnlXA+onAzfWN3ng8uC86ebC5WYS0R8E2iYJCyK5XzI7uzrvxz8y4Bs5/oUmrA6UVtdob+tGEEJcu/qQVWmLckHlj9E/E2baRET8fw91vQpUFAVH0z2ct57SbHfT4RmgrzeIt8ucuDHlvrD1+qH+0D6w8evYGsvd+6uSXc6TSS3y3DOM0BFk7G2U6eQc4uQ0iakZEuIMyc+zFEvF4/9hI3Bp4aeVJxMZPsVnyeXWDggkSUaWyyjyLpqqHYEeGUq1/GqvVENglmSuzWnqhpsQ8+KNXMlaH9b+A4VnFwhO2+mCAAAAAElFTkSuQmCC",aspectRatio:1.9047619047619047,src:"/static/Gatsby-Multiple-Post-Type-6a30960756ef14aa7a84aab6b38b558a-93616.png",srcSet:"/static/Gatsby-Multiple-Post-Type-6a30960756ef14aa7a84aab6b38b558a-79678.png 285w,\n/static/Gatsby-Multiple-Post-Type-6a30960756ef14aa7a84aab6b38b558a-bd37c.png 570w,\n/static/Gatsby-Multiple-Post-Type-6a30960756ef14aa7a84aab6b38b558a-93616.png 1140w,\n/static/Gatsby-Multiple-Post-Type-6a30960756ef14aa7a84aab6b38b558a-1cd99.png 1200w",srcWebp:"/static/Gatsby-Multiple-Post-Type-6a30960756ef14aa7a84aab6b38b558a-7e863.webp",srcSetWebp:"/static/Gatsby-Multiple-Post-Type-6a30960756ef14aa7a84aab6b38b558a-54d6b.webp 285w,\n/static/Gatsby-Multiple-Post-Type-6a30960756ef14aa7a84aab6b38b558a-d8e8b.webp 570w,\n/static/Gatsby-Multiple-Post-Type-6a30960756ef14aa7a84aab6b38b558a-7e863.webp 1140w,\n/static/Gatsby-Multiple-Post-Type-6a30960756ef14aa7a84aab6b38b558a-428ea.webp 1200w",sizes:"(max-width: 1140px) 100vw, 1140px"}}}}}},pathContext:{}}}});
//# sourceMappingURL=path---building-gatsby-with-multiple-post-type-ea3c407e2329311adf56.js.map