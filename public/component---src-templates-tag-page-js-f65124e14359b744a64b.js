webpackJsonp([77653406118394],{843:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.pageQuery=void 0;var r=a(1),n=l(r),u=a(19),d=l(u),o=a(57),f=l(o),c=a(8),m=l(c),i=a(54),s=l(i),p=a(758),g=l(p),E=function(e){var t=e.pathContext,a=e.data,l=t.tag,r='Tagged with "'+l+'"',u="Read some "+t.tag+" articles | "+g.default.shortSiteTitle,o=g.default.siteUrl+"/tags/"+t.tag;return n.default.createElement("div",{className:"Container"},n.default.createElement(f.default,{data:""}),n.default.createElement(s.default,{title:u,meta:[{property:"og:title",content:""+u},{property:"og:url",content:""+o}]}),n.default.createElement(d.default,{to:"../"},"Back"),n.default.createElement("h1",null,r," "),a.allMarkdownRemark.edges.map(function(e){return n.default.createElement("div",{key:e.node.id},n.default.createElement("h3",null,e.node.frontmatter.title),n.default.createElement("small",null,"Published on ",e.node.frontmatter.date," "),n.default.createElement("br",null),n.default.createElement("br",null),n.default.createElement(d.default,{to:e.node.frontmatter.path},"Read More"),n.default.createElement("br",null),n.default.createElement("br",null))}))};E.propTypes={pathContext:m.default.shape({tag:m.default.string.isRequired})},t.default=E;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-tag-page-js-f65124e14359b744a64b.js.map