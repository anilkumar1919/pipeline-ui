"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8610],{62896:function(e,t,a){a.d(t,{Z:function(){return E}});var r=a(63366),n=a(67294),l=a(86010),i=a(82069),s=a(92511),o="sidebar_2ahu",c="sidebarItemTitle_2hhb",m="sidebarItemList_2xAf",u="sidebarItem_2UVv",d="sidebarItemLink_1RT6",g="sidebarItemLinkActive_12pM",h=a(66585);function f(e){var t=e.sidebar;return 0===t.items.length?null:n.createElement("nav",{className:(0,l.Z)(o,"thin-scrollbar"),"aria-label":(0,h.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,l.Z)(c,"margin-bottom--md")},t.title),n.createElement("ul",{className:m},t.items.map((function(e){return n.createElement("li",{key:e.permalink,className:u},n.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:g},e.title))}))))}var p=a(5389),v=["sidebar","toc","children"];var E=function(e){var t=e.sidebar,a=e.toc,s=e.children,o=(0,r.Z)(e,v),c=t&&t.items.length>0;return n.createElement(i.Z,o,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},c&&n.createElement("aside",{className:"col col--3"},n.createElement(f,{sidebar:t})),n.createElement("main",{className:(0,l.Z)("col",{"col--7":c,"col--9 col--offset-1":!c}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&n.createElement("div",{className:"col col--2"},n.createElement(p.Z,{toc:a})))))}},38786:function(e,t,a){a.d(t,{Z:function(){return Z}});var r=a(67294),n=a(86010),l=a(3905),i=a(66585),s=a(92511),o=a(79524),c=a(65452),m=a(68e3),u=a(87680),d="blogPostTitle_GeHD",g="blogPostData_291c",h="blogPostDetailsFull_3kfx",f=a(95433),p="image_1yU8";var v=function(e){var t=e.author,a=t.name,n=t.title,l=t.url,i=t.imageURL;return r.createElement("div",{className:"avatar margin-bottom--sm"},i&&r.createElement(s.Z,{className:"avatar__photo-link avatar__photo",href:l},r.createElement("img",{className:p,src:i,alt:a})),a&&r.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.createElement("div",{className:"avatar__name"},r.createElement(s.Z,{href:l,itemProp:"url"},r.createElement("span",{itemProp:"name"},a))),n&&r.createElement("small",{className:"avatar__subtitle",itemProp:"description"},n)))},E="authorCol_1R69";function b(e){var t=e.authors,a=e.assets;return 0===t.length?r.createElement(r.Fragment,null):r.createElement("div",{className:"row margin-top--md margin-bottom--sm"},t.map((function(e,t){var l;return r.createElement("div",{className:(0,n.Z)("col col--6",E),key:t},r.createElement(v,{author:Object.assign({},e,{imageURL:null!=(l=a.authorsImageUrls[t])?l:e.imageURL})}))})))}var Z=function(e){var t,a,p,v,E=(p=(0,c.c2)().selectMessage,function(e){var t=Math.ceil(e);return p(t,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),Z=(0,o.C)().withBaseUrl,_=e.children,N=e.frontMatter,k=e.assets,P=e.metadata,T=e.truncated,L=e.isBlogPostPage,w=void 0!==L&&L,y=P.date,C=P.formattedDate,M=P.permalink,x=P.tags,I=P.readingTime,R=P.title,U=P.editUrl,A=P.authors,B=null!=(t=k.image)?t:N.image;return r.createElement("article",{className:w?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},(v=w?"h1":"h2",r.createElement("header",null,r.createElement(v,{className:d,itemProp:"headline"},w?R:r.createElement(s.Z,{itemProp:"url",to:M},R)),r.createElement("div",{className:(0,n.Z)(g,"margin-vert--md")},r.createElement("time",{dateTime:y,itemProp:"datePublished"},C),void 0!==I&&r.createElement(r.Fragment,null," \xb7 ",E(I))),r.createElement(b,{authors:A,assets:k}))),B&&r.createElement("meta",{itemProp:"image",content:Z(B,{absolute:!0})}),r.createElement("div",{className:"markdown",itemProp:"articleBody"},r.createElement(l.Zo,{components:m.Z},_)),(x.length>0||T)&&r.createElement("footer",{className:(0,n.Z)("row docusaurus-mt-lg",(a={},a[h]=w,a))},x.length>0&&r.createElement("div",{className:(0,n.Z)("col",{"col--9":!w})},r.createElement(f.Z,{tags:x})),w&&U&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(u.Z,{editUrl:U})),!w&&T&&r.createElement("div",{className:"col col--3 text--right"},r.createElement(s.Z,{to:P.permalink,"aria-label":"Read more about "+R},r.createElement("b",null,r.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},93866:function(e,t,a){a.r(t),a.d(t,{default:function(){return c}});var r=a(67294),n=a(92511),l=a(62896),i=a(38786),s=a(66585),o=a(65452);function c(e){var t,a=e.metadata,c=e.items,m=e.sidebar,u=a.allTagsPath,d=a.name,g=a.count,h=(t=(0,o.c2)().selectMessage,function(e){return t(e,(0,s.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))}),f=(0,s.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:h(g),tagName:d});return r.createElement(l.Z,{title:f,wrapperClassName:o.kM.wrapper.blogPages,pageClassName:o.kM.page.blogTagPostListPage,searchMetadatas:{tag:"blog_tags_posts"},sidebar:m},r.createElement("header",{className:"margin-bottom--xl"},r.createElement("h1",null,f),r.createElement(n.Z,{href:u},r.createElement(s.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),c.map((function(e){var t=e.content;return r.createElement(i.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:!0},r.createElement(t,null))})))}},87680:function(e,t,a){a.d(t,{Z:function(){return d}});var r=a(67294),n=a(66585),l=a(87462),i=a(63366),s=a(86010),o="iconEdit_2_ui",c=["className"],m=function(e){var t=e.className,a=(0,i.Z)(e,c);return r.createElement("svg",(0,l.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(o,t),"aria-hidden":"true"},a),r.createElement("g",null,r.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))},u=a(65452);function d(e){var t=e.editUrl;return r.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:u.kM.common.editThisPage},r.createElement(m,null),r.createElement(n.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},5389:function(e,t,a){a.d(t,{r:function(){return g},Z:function(){return h}});var r=a(67294),n=a(86010),l=a(65452);function i(e){var t=e.getBoundingClientRect();return t.top===t.bottom?i(e.parentNode):t}function s(e){var t,a=e.anchorTopOffset,r=Array.from(document.querySelectorAll(".anchor.anchor__h2, .anchor.anchor__h3")),n=r.find((function(e){return i(e).top>=a}));return n?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(i(n))?n:null!=(t=r[r.indexOf(n)-1])?t:null:r[r.length-1]}function o(){var e=(0,r.useRef)(0),t=(0,l.LU)().navbar.hideOnScroll;return(0,r.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}var c=function(e){var t=(0,r.useRef)(void 0),a=o();(0,r.useEffect)((function(){var r=e.linkClassName,n=e.linkActiveClassName;function l(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(r),l=s({anchorTopOffset:a.current}),i=e.find((function(e){return l&&l.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,a){if(a){var r;t.current&&t.current!==e&&(null==(r=t.current)||r.classList.remove(n)),e.classList.add(n),t.current=e}else e.classList.remove(n)}(e,e===i)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),function(){document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,a])},m="tableOfContents_35-E",u="table-of-contents__link",d={linkClassName:u,linkActiveClassName:"table-of-contents__link--active"};function g(e){var t=e.toc,a=e.isChild;return t.length?r.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,className:u,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(g,{isChild:!0,toc:e.children}))}))):null}var h=function(e){var t=e.toc;return c(d),r.createElement("div",{className:(0,n.Z)(m,"thin-scrollbar")},r.createElement(g,{toc:t}))}},52724:function(e,t,a){a.d(t,{Z:function(){return c}});var r=a(67294),n=a(86010),l=a(92511),i="tag_1Okp",s="tagRegular_3MiF",o="tagWithCount_1HU1";var c=function(e){var t,a=e.permalink,c=e.name,m=e.count;return r.createElement(l.Z,{href:a,className:(0,n.Z)(i,(t={},t[s]=!m,t[o]=m,t))},c,m&&r.createElement("span",null,m))}},95433:function(e,t,a){a.d(t,{Z:function(){return c}});var r=a(67294),n=a(86010),l=a(66585),i=a(52724),s="tags_2ga9",o="tag_11ep";function c(e){var t=e.tags;return r.createElement(r.Fragment,null,r.createElement("b",null,r.createElement(l.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),r.createElement("ul",{className:(0,n.Z)(s,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return r.createElement("li",{key:a,className:o},r.createElement(i.Z,{name:t,permalink:a}))}))))}},88263:function(e,t,a){a(10748);var r=a(67294),n=a(48604),l=a(79898),i=a(85205),s=a(42023),o=a(78735),c=a(16441),m=a(99175),u=a(60910),d=a(86837),g=a(97104),h=a(94813),f=a(37639),p=a(64433),v=a(55848),E=a(74854),b=a(78398),Z=a(48914),_=a(8306),N=a(19110),k=a(69446),P=a(66967),T=a(75009),L=a(3168),w=a(99954),y=a(96086),C=a(71637),M=a(80476),x=a(55744),I=a(98158),R=Object.assign({React:r},r,{Button:n.Z,AsaList:l.Z,Blockie:i.Z,Avatar:s.Z,Box:o.Z,Card:c.Z,Checkbox:m.Z,Flash:u.Z,Flex:d.Z,Field:g.Z,Form:h.Z,Heading:f.Z,Icon:p.Z,Image:v.Z,Input:E.Z,Loader:b.Z,Link:Z.Z,Modal:_.Z,Pill:N.Z,Progress:k.Z,QR:P.Z,Radio:T.Z,Select:L.Z,Slider:w.Z,Table:y.Z,Textarea:C.Z,Text:M.Z,ToastMessage:x.Z,PipelineShell:I.Z});t.Z=R}}]);