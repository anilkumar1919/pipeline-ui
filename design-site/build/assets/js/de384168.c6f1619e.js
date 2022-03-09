"use strict";(self.webpackChunkpipeline_ui_website=self.webpackChunkpipeline_ui_website||[]).push([[6112],{86747:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return f}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=n(72157),s=["components"],l={},c="CSS & Style Guide",p={unversionedId:"CSS/css",id:"CSS/css",title:"CSS & Style Guide",description:"Pipeline-UI components are incorporated into a React app via JSX, a language with syntax that resembles familiar html tags (and can include conventional html elements alongside it). However, Pipeline-UI components do not neccesarily have all of the properties of their corresponding html elements (i.e. ` is not exactly equivalent to `). Many of the components are complex and consist of many nested components and elements. Therefore, we recommend setting their properties using their specified React props and Themes. However, there are several ways to use both inline css and css stylesheets, though the resulting styling may not be what is expected.",source:"@site/docs/CSS/css.mdx",sourceDirName:"CSS",slug:"/CSS/",permalink:"/docs/CSS/",editUrl:"https://github.com/headline-design/pipeline-ui/blob/main/design-site/docs/CSS/css.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SwitchNet",permalink:"/docs/AlgoComponents/switchnet"},next:{title:"CSS Class Names and Usage",permalink:"/docs/CSS/cssclasses"}},u=[{value:"Inline CSS &amp; React",id:"inline-css--react",children:[],level:2},{value:"CSS Stylesheets and React",id:"css-stylesheets-and-react",children:[],level:2},{value:"Why CSS is not recommended",id:"why-css-is-not-recommended",children:[],level:2}],d={toc:u};function f(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"css--style-guide"},"CSS & Style Guide"),(0,i.kt)("p",null,"Pipeline-UI components are incorporated into a React app via JSX, a language with syntax that resembles familiar html tags (and can include conventional html elements alongside it). However, Pipeline-UI components do not neccesarily have all of the properties of their corresponding html elements (i.e. ",(0,i.kt)("inlineCode",{parentName:"p"},"<Button>")," is not exactly equivalent to ",(0,i.kt)("inlineCode",{parentName:"p"},"<button>"),"). Many of the components are complex and consist of many nested components and elements. Therefore, we recommend setting their properties using their specified React props and Themes. However, there are several ways to use both inline css and css stylesheets, though the resulting styling may not be what is expected. "),(0,i.kt)("h2",{id:"inline-css--react"},"Inline CSS & React"),(0,i.kt)("p",null,"Changing CSS properties inside React component JSX tags is at times slightly different from conventional CSS:"),(0,i.kt)(a.Z,{borderRadius:"20",mdxType:"Button"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'<Button borderRadius="20" />\n')),(0,i.kt)("p",null,'Note: CSS can only be used like this if the CSS property is also a "prop" of the React component. If it is not, it may be incorporated by using the ',(0,i.kt)("inlineCode",{parentName:"p"},"style")," keyword like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"<Button style={{borderRadius: 20}}/>\n")),(0,i.kt)("p",null,"In JSX, curly braces are used to both specify that the value is JavaScript, and to create a JavaScript object. In addition, dashes are not permitted in object names (the keys that come before colons), so the CSS property is camelCased."),(0,i.kt)("h2",{id:"css-stylesheets-and-react"},"CSS Stylesheets and React"),(0,i.kt)("p",null,"To use a stylesheet in React, the stylesheet must first be imported:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import React, { Component } from 'react';\nimport { Button } from 'pipeline-ui'\nimport styles from './custom.css';\n\nclass App extends Component {\n  render() {\n    // You can use them as regular CSS styles\n    return <Button className={styles.button} />;\n  }\n}\n")),(0,i.kt)("h2",{id:"why-css-is-not-recommended"},"Why CSS is not recommended"),(0,i.kt)("p",null,"The below example graphically illustrates why css is not the preferred way to change the style of a Pipeline-UI component:"),(0,i.kt)(a.Z,{style:{backgroundColor:"red",border:"solid red",borderRadius:20},mdxType:"Button"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"<Button\n    style={{\n      backgroundColor: 'red',\n      border: 'solid red',\n      borderRadius: 20,\n    }}\n  />\n")),(0,i.kt)("p",null,"  In the example, our CSS value for ",(0,i.kt)("inlineCode",{parentName:"p"},"backgroundColor")," is having no visible effect on the Pipeline-Ui component, since the component's background color is actually set by its prop ",(0,i.kt)("inlineCode",{parentName:"p"},"mainColor"),". We can easily change the background color by setting its non-CSS prop:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Button\n    mainColor=\"red\"\n    style={{\n      backgroundColor: 'blue',\n      border: 'solid red',\n      borderRadius: 20,\n    }}\n  />\n")))}f.isMDXComponent=!0},8120:function(e,t,n){n.d(t,{Sn:function(){return m},Rn:function(){return b}});var r=n(67294),o=n(45697),i=n.n(o),a=n(31096),s=n(32016),l=n(89855),c=n(64433);function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}var u=(0,s.bU)({prop:"size",key:"buttonSizes"}),d=(0,s.oB)({prop:"mainColor",cssProperty:"--main-color",key:"colors"}),f=(0,s.oB)({prop:"contrastColor",cssProperty:"--contrast-color",key:"colors"}),m=(0,a.ZP)(l.D).withConfig({displayName:"BaseButton__StyledButton",componentId:"sc-1hj5v8i-0"})(["&{-webkit-font-smoothing:antialiased;appearance:none;user-select:none;white-space:nowrap;text-decoration:none;text-align:center;overflow:hidden;display:inline-flex;align-items:center;justify-content:center;padding:",";}&:hover{cursor:pointer;}&:disabled{opacity:0.5;pointer-events:none;}> span.button-text{display:inline-flex;}"," > div > svg,> span.button-text{position:relative;z-index:1;user-select:none;pointer-events:none;}> div > svg{display:block;}> div:first-child > svg{margin-left:-0.5rem;margin-right:.5rem;}> div:last-child > svg{margin-left:.5rem;margin-right:-0.5rem;}> div:first-child:last-child > svg{margin:0;}"," "," "," ",""],(function(e){return e.icononly?"0":e.p}),"",d,f,s.jn,u);m.defaultProps={as:"button"};var b=function(e){var t=e.children,n=e.icon,o=e.iconpos;return n?r.createElement(r.Fragment,null,n&&!o&&r.createElement(c.Z,{name:n}),n&&"left"==o&&r.createElement(c.Z,{name:n}),t&&r.createElement("span",{className:"button-text",children:t}),n&&"right"==o&&r.createElement(c.Z,{name:n})):r.createElement("span",{className:"button-text",children:t})},h=r.forwardRef((function(e,t){return r.createElement(m,p({className:"pipeline-btn-base"},e,{ref:t}))}));h.defaultProps={position:"relative",height:"3rem",minWidth:"3rem",px:4,py:0,fontSize:"inherit",fontFamily:"sansSerif",fontWeight:3,lineHeight:1,color:"white",bg:"silver",mainColor:"primary",contrastColor:"white",border:"none"},h.propTypes={theme:i().object,mainColor:i().string,contrastColor:i().string,size:i().oneOf(["small","medium","large"]),icon:i().string,iconpos:i().oneOf(["left","right"]),icononly:i().bool},h.displayName="Button",t.ZP=h},72157:function(e,t,n){n.d(t,{Z:function(){return T}});var r=n(8120),o=n(67294),i=n(31096),a=["children","icon","iconpos"];function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=(0,i.ZP)(r.Sn).withConfig({displayName:"TextButton__StyledTextButton",componentId:"sc-1cs5ytp-0"})(["&{color:var(--main-color);border:none;background:none;box-shadow:none;}&:hover{text-decoration:underline;background:none;box-shadow:none;}&:active{text-decoration:none;}&::before{display:none;}"]),f=o.forwardRef((function(e,t){var n=e.children,i=e.icon,s=e.iconpos,l=u(e,a);return o.createElement(d,p({className:"pipeline-btn-text"},l,{ref:t}),o.createElement(r.Rn,{icon:i,iconpos:s,children:n}))}));f.defaultProps=l(l({},r.ZP.defaultProps),{},{px:2});var m=f,b=["children","icon","iconpos"];function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){g(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(){return v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},v.apply(this,arguments)}function O(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var S=(0,i.ZP)(r.Sn).withConfig({displayName:"SolidButton__StyledSolidButton",componentId:"sc-16jeih0-0"})(["&{color:var(--contrast-color);"," background:#FFF;z-index:0;transition:all 0.15s ease;}&:hover{text-decoration:inherit;box-shadow:0px 2px 4px rgba(0,0,0,0.2);}&:hover::before{opacity:0.9;}&:active{box-shadow:none;background:#000;}&::before{content:'';position:absolute;top:0;bottom:0;left:0;right:0;z-index:1;height:100%;width:100%;background:var(--main-color);pointer-events:none;}"],""),w=o.forwardRef((function(e,t){var n=e.children,i=e.icon,a=e.iconpos,s=O(e,b);return o.createElement(S,v({className:"pipeline-btn-solid"},s,{ref:t}),o.createElement(r.Rn,{icon:i,iconpos:a,children:n}))}));w.defaultProps=y(y({},r.ZP.defaultProps),{},{borderRadius:1,boxShadow:1});var j=w,k=["children","icon","iconpos"];function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){C(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function C(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function N(){return N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},N.apply(this,arguments)}function R(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var B=(0,i.ZP)(S).withConfig({displayName:"OutlineButton__StyledOutlineButton",componentId:"sc-1gcz6sz-0"})(["&{color:var(--main-color);background:transparent;}&:hover{border-color:var(--main-color);}&:hover::before{opacity:0;}&:active{background:#fff;}&:active::before{opacity:0.1;}&::before{opacity:0;}"]),E=o.forwardRef((function(e,t){var n=e.children,i=e.icon,a=e.iconpos,s=R(e,k);return o.createElement(B,N({className:"pipeline-btn-outline"},s,{ref:t}),o.createElement(r.Rn,{icon:i,iconpos:a,children:n}))}));E.defaultProps=x(x({},j.defaultProps),{},{border:1,borderColor:"grey",boxShadow:0});var I,Z=E;(I=j).displayName="Button",I.Outline=Z,I.Outline.displayName="Button.Outline",I.Text=m,I.Text.displayName="Button.Text",I.Base=r.ZP,I.Base.displayName="Button.Base";var T=I},64433:function(e,t,n){var r=n(67294),o=n(45697),i=n.n(o),a=n(75044),s=n(89855),l=n(13489),c=["name","size"];function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.forwardRef((function(e,t){var n=e.name,o=e.size,i=u(e,c);return r.createElement(s.Z,p({ref:t},i),r.createElement(a.Z,{className:"pipeline-rmd-icon",name:n,size:o}))}));d.defaultProps={name:"",size:"24px",display:"inline-flex",theme:l.Z},d.propTypes={name:i().string.isRequired,size:i().string,display:i().string,theme:i().object},d.displayName="Icon",t.Z=d}}]);