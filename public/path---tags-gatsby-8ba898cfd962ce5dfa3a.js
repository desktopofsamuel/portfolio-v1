webpackJsonp([0x7ab76f7a7e61],{992:function(e,a){e.exports={data:{allMarkdownRemark:{edges:[{node:{id:"/Users/samuelisme/Code/blog/src/blog/2018-08-27 Why designers need a personal website/index.md absPath of file >>> MarkdownRemark",html:'<p>TLDR: I\'m summing up the reasons why a designer should build a custom site using Gatsby.JS. </p>\n<p>One of my year resolution for 2018 is to learn front-end coding. I feel that being a designer, learning how to code is the way how I could step up the game in web design, by understanding how every bit and piece fall into places. </p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/Framev2-471f9d78fb751638b8d0fac5e1165b50-2ed49.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 1280px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 66.66666666666666%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAECAwX/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAB07pqGBX/xAAYEAEBAQEBAAAAAAAAAAAAAAABAhEAE//aAAgBAQABBQL3kS5ZHTDmRAA//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAGRAAAwEBAQAAAAAAAAAAAAAAAAERIRIx/9oACAEBAAY/Atw6uFR4SIiP/8QAGRABAAMBAQAAAAAAAAAAAAAAAQARMSGR/9oACAEBAAE/IVwvRrsE0ixWCSCOJFtHksigcqCgAMCf/9oADAMBAAIAAwAAABCsD//EABURAQEAAAAAAAAAAAAAAAAAABAh/9oACAEDAQE/EIf/xAAVEQEBAAAAAAAAAAAAAAAAAAABEP/aAAgBAgEBPxAn/8QAGxABAQEBAAMBAAAAAAAAAAAAAREAITFxofD/2gAIAQEAAT8Qb5EpQYzXkucBe8+OOA1RRN5J+w4U9YLgfy4yTQEDf//Z\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Framev2"\n        title=""\n        src="/static/Framev2-471f9d78fb751638b8d0fac5e1165b50-71e08.jpg"\n        srcset="/static/Framev2-471f9d78fb751638b8d0fac5e1165b50-996a7.jpg 320w,\n/static/Framev2-471f9d78fb751638b8d0fac5e1165b50-06faf.jpg 640w,\n/static/Framev2-471f9d78fb751638b8d0fac5e1165b50-71e08.jpg 1280w,\n/static/Framev2-471f9d78fb751638b8d0fac5e1165b50-2ed49.jpg 1920w"\n        sizes="(max-width: 1280px) 100vw, 1280px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>I had two personal websites, one is my Tumblr and another is my portfolio site, separately hosted and running <a href="https://cargocollective.com/">Cargo Collective</a>. But I was thinking, "Wouldn\'t it be great if both of my portfolio and blog are together?"</p>\n<h2>Why do you need a personal website?</h2>\n<p>It\'s 2018. Online presence is becoming the norm, even in the professional field. Your previous work, your side projects, even your work in progress matter. </p>\n<p>A personal site also means more control over your message and story, whether you\'re looking for new clients, landing a dream job or establishing a personal brand. For sure it takes more time and effort, but I think it is quite a good practice to sharpen your skill and catching up. Needless to say, making a personal site is much easier than a decade ago. </p>\n<p>While platforms like Medium, Facebook Pages are building homogeneous style for coherent browsing / reading experience. Your website should pursue personality instead. I\'m not saying you shouldn\'t post to Medium publications or run a Facebook Page, but just not as the destination but a way to reach your very own website where you deliver your message. </p>\n<h2>What\'re my options?</h2>\n<p>Speaking of the BIG question, which platform should you choose? Wordpress is great for beginners since all settings are visible without dealing with code. But it was developed as a blogging platform, so it requires specific template in order to create a decent looking personal page. </p>\n<p>Website builder like <a href="https://webflow.com/?rfsn=1574887.557b84">Webflow</a> and <a href="http://squarespace.com/">Squarespace</a> is also an elegant option, but they adopt subscription model so the cost would be definitely higher.  </p>\n<p>After taking the <a href="http://designcode.io/">Design+Code\'s</a> React course instructed by Meng To, I was introduced to <a href="https://www.gatsbyjs.org/">Gatsby.JS</a>. After trying it out for few weeks, I genuinely rooting it as the up-and-coming personal website &#x26; blog option. Because:</p>\n<ol>\n<li>A custom personal website allows maximum creativity, a great advantage for designers.</li>\n<li>It\'s blaze-fast. Because all files are generated already. It also adopts modern web technology like React, Webpack and GraphQL. I compared the Lighthouse audit ran on beta site and current site. Performance has insanely improved.</li>\n<li>Gatsby is a static site generator, but dynamic data source is widely supported. Wordpress, Contentful or even Airtable can be used as a database. </li>\n<li>Deploying is as easy as drag-and-drop. <a href="http://netlify.com/">Netlify</a> provides free hosting for static site, and Gatsby is free, meaning the project could be free as long as you have your own domain.</li>\n<li>Personal reason but a good one. <strong>I admit the process of making your own site is empowering.</strong> It\'s nice to not rely on anybody and build a website designed and developed all by yourself. I\'ve been taking some screenshots logging daily progress, will share it later.</li>\n</ol>\n<h2>Last word</h2>\n<p>As Gatsby is quite new since it was first released a year ago. I wouldn\'t say current resources available is sufficient, but it is a strong and growing community. Most users are frontend web developer right now, but I\'m optimistic to see more designers onboard.</p>\n<p>I admit there is indeed a learning curve to React, Gatsby and also GraphQL since I know fundamental HTML and CSS only. There were long nights that I was figuring out causes of errors, which turned out to be some stupid mistakes. </p>\n<p>I\'m writing this also for my own future reference:</p>\n<blockquote>\n<p>A personal website should not only showcase your work, but also speak who you are and how you work.</p>\n</blockquote>\n<p>That\'s why I\'m eager to share my work in progress, hoping to launch the site as soon as possible. </p>\n<h5>Reading List:</h5>\n<h5><a href="https://uxdesign.cc/things-i-honestly-dont-want-to-see-in-your-portfolio-3d3497666ca8">Things I (honestly) don’t want to see in your portfolio</a></h5>',frontmatter:{title:"Why designers need a personal website?",date:"Aug 26, 2018",tags:["personalbrand","process","gatsby"],path:"/why-designers-need-a-personal-website"}}}]}},pathContext:{tag:"gatsby"}}}});
//# sourceMappingURL=path---tags-gatsby-8ba898cfd962ce5dfa3a.js.map