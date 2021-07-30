"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8610],{2903:function(e,t,a){a.d(t,{Z:function(){return p}});var l=a(7294),r=a(6010),n=a(4137),s=a(7130),i=a(2511),m=a(2433),c=a(3490),o=a(4175),d=a(7680),u="blogPostTitle_GeHD",g="blogPostData_291c",h="blogPostDetailsFull_3kfx";var p=function(e){var t,a,p,b=(a=(0,m.c2)().selectMessage,function(e){var t=Math.ceil(e);return a(t,(0,s.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),Z=e.children,E=e.frontMatter,v=e.metadata,f=e.truncated,_=e.isBlogPostPage,N=void 0!==_&&_,k=v.date,T=v.formattedDate,w=v.permalink,P=v.tags,x=v.readingTime,I=v.title,M=v.editUrl,L=E.author,y=E.image,R=E.keywords,A=E.author_url||E.authorURL,C=E.author_title||E.authorTitle,F=E.author_image_url||E.authorImageURL;return l.createElement(l.Fragment,null,l.createElement(o.Z,{keywords:R,image:y}),l.createElement("article",{className:N?void 0:"margin-bottom--xl"},(p=N?"h1":"h2",l.createElement("header",null,l.createElement(p,{className:u},N?I:l.createElement(i.Z,{to:w},I)),l.createElement("div",{className:(0,r.Z)(g,"margin-vert--md")},l.createElement("time",{dateTime:k},T),x&&l.createElement(l.Fragment,null," \xb7 ",b(x))),l.createElement("div",{className:"avatar margin-vert--md"},F&&l.createElement(i.Z,{className:"avatar__photo-link avatar__photo",href:A},l.createElement("img",{src:F,alt:L})),l.createElement("div",{className:"avatar__intro"},L&&l.createElement(l.Fragment,null,l.createElement("div",{className:"avatar__name"},l.createElement(i.Z,{href:A},L)),l.createElement("small",{className:"avatar__subtitle"},C)))))),l.createElement("div",{className:"markdown"},l.createElement(n.Zo,{components:c.Z},Z)),(P.length>0||f)&&l.createElement("footer",{className:(0,r.Z)("row docusaurus-mt-lg",(t={},t[h]=N,t))},P.length>0&&l.createElement("div",{className:"col"},l.createElement("b",null,l.createElement(s.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),P.map((function(e){var t=e.label,a=e.permalink;return l.createElement(i.Z,{key:a,className:"margin-horiz--sm",to:a},t)}))),N&&M&&l.createElement("div",{className:"col margin-top--sm"},l.createElement(d.Z,{editUrl:M})),!N&&f&&l.createElement("div",{className:"col text--right"},l.createElement(i.Z,{to:v.permalink,"aria-label":"Read more about "+I},l.createElement("b",null,l.createElement(s.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}},4112:function(e,t,a){a.d(t,{Z:function(){return g}});var l=a(7294),r=a(6010),n=a(2511),s="sidebar_2ahu",i="sidebarItemTitle_2hhb",m="sidebarItemList_2xAf",c="sidebarItem_2UVv",o="sidebarItemLink_1RT6",d="sidebarItemLinkActive_12pM",u=a(7130);function g(e){var t=e.sidebar;return 0===t.items.length?null:l.createElement("nav",{className:(0,r.Z)(s,"thin-scrollbar"),"aria-label":(0,u.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,r.Z)(i,"margin-bottom--md")},t.title),l.createElement("ul",{className:m},t.items.map((function(e){return l.createElement("li",{key:e.permalink,className:c},l.createElement(n.Z,{isNavLink:!0,to:e.permalink,className:o,activeClassName:d},e.title))}))))}},3866:function(e,t,a){a.r(t);var l=a(7294),r=a(3766),n=a(2903),s=a(2511),i=a(4112),m=a(7130),c=a(2433);t.default=function(e){var t,a=e.metadata,o=e.items,d=e.sidebar,u=a.allTagsPath,g=a.name,h=a.count,p=(t=(0,c.c2)().selectMessage,function(e){return t(e,(0,m.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))}),b=(0,m.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:p(h),tagName:g});return l.createElement(r.Z,{title:b,wrapperClassName:c.kM.wrapper.blogPages,pageClassName:c.kM.page.blogTagsPostPage,searchMetadatas:{tag:"blog_tags_posts"}},l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement("aside",{className:"col col--3"},l.createElement(i.Z,{sidebar:d})),l.createElement("main",{className:"col col--7"},l.createElement("header",{className:"margin-bottom--xl"},l.createElement("h1",null,b),l.createElement(s.Z,{href:u},l.createElement(m.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),o.map((function(e){var t=e.content;return l.createElement(n.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,metadata:t.metadata,truncated:!0},l.createElement(t,null))}))))))}},7680:function(e,t,a){a.d(t,{Z:function(){return d}});var l=a(7294),r=a(7130),n=a(2122),s=a(9756),i=a(6010),m="iconEdit_2_ui",c=["className"],o=function(e){var t=e.className,a=(0,s.Z)(e,c);return l.createElement("svg",(0,n.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,i.Z)(m,t),"aria-hidden":"true"},a),l.createElement("g",null,l.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function d(e){var t=e.editUrl;return l.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener"},l.createElement(o,null),l.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},8263:function(e,t,a){a(748);var l=a(7294),r=a(8604),n=a(9898),s=a(2023),i=a(8735),m=a(6441),c=a(9175),o=a(910),d=a(6837),u=a(7104),g=a(4813),h=a(7639),p=a(4433),b=a(5848),Z=a(4854),E=a(8398),v=a(8914),f=a(8306),_=a(5605),N=a(9446),k=a(6967),T=a(5009),w=a(2894),P=a(9954),x=a(6086),I=a(1637),M=a(476),L=a(5744),y=Object.assign({React:l},l,{Button:r.Z,AsaList:n.Z,Avatar:s.Z,Box:i.Z,Card:m.Z,Checkbox:c.Z,Flash:o.Z,Flex:d.Z,Field:u.Z,Form:g.Z,Heading:h.Z,Icon:p.Z,Image:b.Z,Input:Z.Z,Loader:E.Z,Link:v.Z,Modal:f.Z,Pill:_.Z,Progress:N.Z,QR:k.Z,Radio:T.Z,Select:w.Z,Slider:P.Z,Table:x.Z,Textarea:I.Z,Text:M.Z,ToastMessage:L.Z});t.Z=y}}]);