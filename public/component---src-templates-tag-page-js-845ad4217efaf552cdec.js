webpackJsonp([77653406118394],{909:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.pageQuery=void 0;var n=a(1),r=l(n),d=a(10),u=l(d),f=a(22),o=l(f),c=a(4),i=l(c),m=a(26),s=l(m),p=a(733),g=l(p),E=a(719),h=l(E),y=function(e){var t=e.pathContext,a=e.data,l=t.tag,n='Tagged with "'+l+'"',d=t.tag+" Articles | "+g.default.shortSiteTitle,f=g.default.siteUrl+"/tags/"+(0,h.default)(t.tag);return r.default.createElement("div",{className:"Container Padding-S"},r.default.createElement(o.default,{data:""}),r.default.createElement(s.default,{title:d,meta:[{property:"og:title",content:""+d},{property:"og:url",content:""+f}]}),r.default.createElement("section",{className:"Top-S"},r.default.createElement(u.default,{to:"../"},"Back"),r.default.createElement("h1",{className:"Tax-Title"},n," "),a.allMarkdownRemark.edges.map(function(e){return r.default.createElement("div",{key:e.node.id},r.default.createElement("br",null),r.default.createElement(u.default,{to:e.node.frontmatter.path},r.default.createElement("h2",null,r.default.createElement("span",{className:"highlight"},e.node.frontmatter.title))),r.default.createElement("p",null,e.node.excerpt),r.default.createElement("small",null,"Published on ",e.node.frontmatter.date," "),r.default.createElement("br",null),r.default.createElement("br",null))})))};y.propTypes={pathContext:i.default.shape({tag:i.default.string.isRequired})},t.default=y;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-tag-page-js-845ad4217efaf552cdec.js.map