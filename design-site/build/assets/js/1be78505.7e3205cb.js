"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9514,383],{9950:function(e,t,a){a.r(t),a.d(t,{default:function(){return G}});var n=a(7294),i=a(4137),o=a(9962),r=a(7401),l=a(3766),c=a(2122),s=a(9756),d=a(6010),u=a(2433),m=a(9729),b=a(3301),p=a(5717),h=a(2511),f=a(2735),v=a(2827),Z=function(e){return n.createElement("svg",(0,c.Z)({width:"20",height:"20","aria-hidden":"true"},e),n.createElement("g",{fill:"#7a7a7a"},n.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),n.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},E=a(6416),C=a(6681),g=a(7130),k="sidebar_15mo",_="sidebarWithHideableNavbar_267A",S="sidebarHidden_2kNb",I="sidebarLogo_3h0W",N="menu_Bmed",M="menuLinkText_2aKo",x="menuWithAnnouncementBar_2WvA",y="collapseSidebarButton_1CGd",R="collapseSidebarButtonIcon_3E-R",T="sidebarMenuIcon_fgN0",A="sidebarMenuCloseIcon_1lpH",w=["items"],L=["item","onItemClick","collapsible","activePath"],P=["item","onItemClick","activePath","collapsible"],B=function e(t,a){return"link"===t.type?(0,u.Mg)(t.href,a):"category"===t.type&&t.items.some((function(t){return e(t,a)}))},H=(0,n.memo)((function(e){var t=e.items,a=(0,s.Z)(e,w);return t.map((function(e,t){return n.createElement(D,(0,c.Z)({key:t,item:e},a))}))}));function D(e){switch(e.item.type){case"category":return n.createElement(W,e);case"link":default:return n.createElement(F,e)}}function W(e){var t,a=e.item,i=e.onItemClick,o=e.collapsible,r=e.activePath,l=(0,s.Z)(e,L),m=a.items,b=a.label,p=B(a,r),h=(0,u.D9)(p),f=(0,n.useState)((function(){return!!o&&(!p&&a.collapsed)})),v=f[0],Z=f[1],E=(0,n.useRef)(null),C=(0,n.useState)(void 0),g=C[0],k=C[1],_=function(e){var t;void 0===e&&(e=!0),k(e?(null==(t=E.current)?void 0:t.scrollHeight)+"px":void 0)};(0,n.useEffect)((function(){p&&!h&&v&&Z(!1)}),[p,h,v]);var S=(0,n.useCallback)((function(e){e.preventDefault(),g||_(),setTimeout((function(){return Z((function(e){return!e}))}),100)}),[g]);return 0===m.length?null:n.createElement("li",{className:(0,d.Z)("menu__list-item",{"menu__list-item--collapsed":v})},n.createElement("a",(0,c.Z)({className:(0,d.Z)("menu__link",(t={"menu__link--sublist":o,"menu__link--active":o&&p},t[M]=!o,t)),onClick:o?S:void 0,href:o?"#":void 0},l),b),n.createElement("ul",{className:"menu__list",ref:E,style:{height:g},onTransitionEnd:function(){v||_(!1)}},n.createElement(H,{items:m,tabIndex:v?"-1":"0",onItemClick:i,collapsible:o,activePath:r})))}function F(e){var t=e.item,a=e.onItemClick,i=e.activePath,o=(e.collapsible,(0,s.Z)(e,P)),r=t.href,l=t.label,u=B(t,i);return n.createElement("li",{className:"menu__list-item",key:l},n.createElement(h.Z,(0,c.Z)({className:(0,d.Z)("menu__link",{"menu__link--active":u}),to:r},(0,f.Z)(r)&&{isNavLink:!0,exact:!0,onClick:a},o),(0,f.Z)(r)?l:n.createElement("span",null,l,n.createElement(C.Z,null))))}function O(e){var t=e.onClick;return n.createElement("button",{type:"button",title:(0,g.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,g.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,d.Z)("button button--secondary button--outline",y),onClick:t},n.createElement(Z,{className:R}))}function K(e){var t=e.responsiveSidebarOpened,a=e.onClick;return n.createElement("button",{"aria-label":t?(0,g.I)({id:"theme.docs.sidebar.responsiveCloseButtonLabel",message:"Close menu",description:"The ARIA label for close button of mobile doc sidebar"}):(0,g.I)({id:"theme.docs.sidebar.responsiveOpenButtonLabel",message:"Open menu",description:"The ARIA label for open button of mobile doc sidebar"}),"aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:a},t?n.createElement("span",{className:(0,d.Z)(T,A)},"\xd7"):n.createElement(E.Z,{className:T,height:24,width:24}))}var z=function(e){var t,a,i=e.path,o=e.sidebar,r=e.sidebarCollapsible,l=void 0===r||r,c=e.onCollapse,s=e.isHidden,h=function(){var e=(0,u.nT)().isClosed,t=(0,n.useState)(!e),a=t[0],i=t[1];return(0,p.Z)((function(t){var a=t.scrollY;e||i(0===a)})),a}(),f=(0,u.LU)(),Z=f.navbar.hideOnScroll,E=f.hideableSidebar,C=(0,u.nT)().isClosed,M=function(){var e=(0,n.useState)(!1),t=e[0],a=e[1];(0,m.Z)(t);var i=(0,b.Z)();return(0,n.useEffect)((function(){i===b.D.desktop&&a(!1)}),[i]),{showResponsiveSidebar:t,closeResponsiveSidebar:(0,n.useCallback)((function(e){e.target.blur(),a(!1)}),[a]),toggleResponsiveSidebar:(0,n.useCallback)((function(){a((function(e){return!e}))}),[a])}}(),y=M.showResponsiveSidebar,R=M.closeResponsiveSidebar,T=M.toggleResponsiveSidebar;return n.createElement("div",{className:(0,d.Z)(k,(t={},t[_]=Z,t[S]=s,t))},Z&&n.createElement(v.Z,{tabIndex:-1,className:I}),n.createElement("nav",{className:(0,d.Z)("menu","menu--responsive","thin-scrollbar",N,(a={"menu--show":y},a[x]=!C&&h,a)),"aria-label":(0,g.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Sidebar navigation",description:"The ARIA label for documentation menu"})},n.createElement(K,{responsiveSidebarOpened:y,onClick:T}),n.createElement("ul",{className:"menu__list"},n.createElement(H,{items:o,onItemClick:R,collapsible:l,activePath:i}))),E&&n.createElement(O,{onClick:c}))},J=a(3490),Q=a(383),U=a(5977),Y={docPage:"docPage_31aa",docMainContainer:"docMainContainer_3ufF",docMainContainerEnhanced:"docMainContainerEnhanced_3NYZ",docSidebarContainer:"docSidebarContainer_3Kbt",docSidebarContainerHidden:"docSidebarContainerHidden_3pA8",collapsedDocSidebar:"collapsedDocSidebar_2JMH",expandSidebarButtonIcon:"expandSidebarButtonIcon_1naQ",docItemWrapperEnhanced:"docItemWrapperEnhanced_2vyJ"};function j(e){var t,a,r,c,s,m=e.currentDocRoute,b=e.versionMetadata,p=e.children,h=(0,o.Z)(),f=h.siteConfig,v=h.isClient,E=b.pluginId,C=b.version,k=function(e){var t,a=e.versionMetadata,n=e.currentDocRoute,i=a.permalinkToSidebar,o=a.docsSidebars,r=i[n.path]||i[(t=n.path,t.endsWith("/")?t:t+"/")]||i[function(e){return e.endsWith("/")?e.slice(0,-1):e}(n.path)];return{sidebar:o[r],sidebarName:r}}({versionMetadata:b,currentDocRoute:m}),_=k.sidebarName,S=k.sidebar,I=(0,n.useState)(!1),N=I[0],M=I[1],x=(0,n.useState)(!1),y=x[0],R=x[1],T=(0,n.useCallback)((function(){y&&R(!1),M(!N)}),[y]);return n.createElement(l.Z,{key:v,wrapperClassName:u.kM.wrapper.docPages,pageClassName:u.kM.page.docPage,searchMetadatas:{version:C,tag:(0,u.os)(E,C)}},n.createElement("div",{className:Y.docPage},S&&n.createElement("aside",{className:(0,d.Z)(Y.docSidebarContainer,(t={},t[Y.docSidebarContainerHidden]=N,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(Y.docSidebarContainer)&&N&&R(!0)}},n.createElement(z,{key:_,sidebar:S,path:m.path,sidebarCollapsible:null==(a=null==(r=f.themeConfig)?void 0:r.sidebarCollapsible)||a,onCollapse:T,isHidden:y}),y&&n.createElement("div",{className:Y.collapsedDocSidebar,title:(0,g.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,g.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:T,onClick:T},n.createElement(Z,{className:Y.expandSidebarButtonIcon}))),n.createElement("main",{className:(0,d.Z)(Y.docMainContainer,(c={},c[Y.docMainContainerEnhanced]=N||!S,c))},n.createElement("div",{className:(0,d.Z)("container padding-top--md padding-bottom--lg",Y.docItemWrapper,(s={},s[Y.docItemWrapperEnhanced]=N,s))},n.createElement(i.Zo,{components:J.Z},p)))))}var G=function(e){var t=e.route.routes,a=e.versionMetadata,i=e.location,o=t.find((function(e){return(0,U.LX)(i.pathname,e)}));return o?n.createElement(j,{currentDocRoute:o,versionMetadata:a},(0,r.Z)(t,{versionMetadata:a})):n.createElement(Q.default,e)}},383:function(e,t,a){a.r(t);var n=a(7294),i=a(3766);t.default=function(e){var t=e.location;return/^\/\bfeedback\b/.test(t.pathname)?n.createElement(Feedback,null):n.createElement(i.Z,{title:"Page Not Found"},n.createElement("main",{className:"container margin-vert--xl","data-canny":!0},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--6 col--offset-3"},n.createElement("h1",{className:"hero__title"},"Page Not Found"),n.createElement("p",null,"We could not find what you were looking for."),n.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}},8263:function(e,t,a){a(748);var n=a(7294),i=a(8604),o=a(9898),r=a(2023),l=a(8735),c=a(6441),s=a(9175),d=a(910),u=a(6837),m=a(7104),b=a(4813),p=a(7639),h=a(4433),f=a(5848),v=a(4854),Z=a(8398),E=a(8914),C=a(8306),g=a(5605),k=a(9446),_=a(6967),S=a(5009),I=a(2894),N=a(9954),M=a(6086),x=a(1637),y=a(476),R=a(5744),T=Object.assign({React:n},n,{Button:i.Z,AsaList:o.Z,Avatar:r.Z,Box:l.Z,Card:c.Z,Checkbox:s.Z,Flash:d.Z,Flex:u.Z,Field:m.Z,Form:b.Z,Heading:p.Z,Icon:h.Z,Image:f.Z,Input:v.Z,Loader:Z.Z,Link:E.Z,Modal:C.Z,Pill:g.Z,Progress:k.Z,QR:_.Z,Radio:S.Z,Select:I.Z,Slider:N.Z,Table:M.Z,Textarea:x.Z,Text:y.Z,ToastMessage:R.Z});t.Z=T}}]);