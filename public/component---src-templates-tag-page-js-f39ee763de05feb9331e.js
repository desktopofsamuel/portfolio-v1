webpackJsonp([77653406118394],{858:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.pageQuery=void 0;var n=a(1),r=l(n),u=a(13),d=l(u),f=a(657),o=l(f),c=a(7),m=l(c),i=a(671),s=l(i),p=a(765),g=l(p),E=function(e){var t=e.pathContext,a=e.data,l=t.tag,n='Tagged with "'+l+'"',u="Read some "+t.tag+" articles | "+g.default.shortSiteTitle,f=g.default.siteUrl+"/tags/"+t.tag;return r.default.createElement("div",{className:"Container"},r.default.createElement(o.default,{data:""}),r.default.createElement(s.default,{title:u,meta:[{property:"og:title",content:""+u},{property:"og:url",content:""+f}]}),r.default.createElement(d.default,{to:"../"},"Back"),r.default.createElement("h1",null,n," "),a.allMarkdownRemark.edges.map(function(e){return r.default.createElement("div",{key:e.node.id},r.default.createElement("br",null),r.default.createElement(d.default,{to:e.node.frontmatter.path},r.default.createElement("h2",null,r.default.createElement("span",{className:"highlight"},e.node.frontmatter.title))),r.default.createElement("p",null,e.node.excerpt),r.default.createElement("small",null,"Published on ",e.node.frontmatter.date," "),r.default.createElement("br",null),r.default.createElement("br",null))}))};E.propTypes={pathContext:m.default.shape({tag:m.default.string.isRequired})},t.default=E;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-tag-page-js-f39ee763de05feb9331e.js.map