"use strict";(self.webpackChunkpipeline_ui_website=self.webpackChunkpipeline_ui_website||[]).push([[2254],{2735:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return o}})},79524:function(e,t,n){n.d(t,{C:function(){return a},Z:function(){return i}});var r=n(39962),o=n(2735);function a(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var a=void 0===r?{}:r,i=a.forcePrependBaseUrl,s=void 0!==i&&i,u=a.absolute,l=void 0!==u&&u;if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(s)return t+n;var p=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+p:p}(a,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},76087:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return d},metadata:function(){return f},toc:function(){return m},default:function(){return b}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=n(79524),s=(n(35666),n(80476)),u=n(3168),l=n(79898),p=["components"],c={},d="AsaList",f={unversionedId:"AlgoComponents/AsaList",id:"AlgoComponents/AsaList",isDocsHomePage:!1,title:"AsaList",description:"An array of verified Algorand ASA's and index numbers that can be imported like a component and used to populate dropdown menus.",source:"@site/docs/AlgoComponents/AsaList.mdx",sourceDirName:"AlgoComponents",slug:"/AlgoComponents/AsaList",permalink:"/docs/AlgoComponents/AsaList",editUrl:"https://github.com/headline-design/pipeline-ui/blob/main/design-site/docs/AlgoComponents/AsaList.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AlgoWCButton",permalink:"/docs/AlgoComponents/AlgoWCButton"},next:{title:"SwitchNet",permalink:"/docs/AlgoComponents/switchnet"}},m=[{value:"Usage Example",id:"usage-example",children:[]}],g={toc:m};function b(e){var t=e.components,n=(0,o.Z)(e,p);return(0,a.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"asalist"},"AsaList"),(0,a.kt)("img",{alt:"Docusaurus with Keytar",width:"100%",height:"400px",src:(0,i.Z)("/img/pipeline_vectilla_7.svg")}),(0,a.kt)("p",null,"An array of verified Algorand ASA's and index numbers that can be imported like a component and used to populate dropdown menus."),(0,a.kt)(s.Z,{mdxType:"Text"},"Select a Verified ASA:"),(0,a.kt)("br",null),(0,a.kt)(u.Z,{options:l.Z,mdxType:"Select"}),(0,a.kt)("h2",{id:"usage-example"},"Usage Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import {Select, AsaList,Text} from 'pipeline-ui'\n<Text >Select a Verified ASA:</Text>\n        <Select\n          defaultValue={this.state.value}\n          onChange={this.asaNumbChangeHandler}\n          options={AsaList}\n        />\n")),(0,a.kt)("p",null,"In the above example, the OnChange event calls the function asaNumbChangeHandler, which can be seen below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"asaNumbChangeHandler = (event) => {\n    this.setState({ asaNumb: event.value });\n\n  }\n")))}b.isMDXComponent=!0},80476:function(e,t,n){var r=n(67294),o=n(45697),a=n.n(o),i=n(78735),s=n(77582);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}var d=r.forwardRef((function(e,t){return r.createElement(i.Z,c({ref:t},e))}));d.defaultProps={fontSize:2,fontWeight:2,lineHeight:"copy",theme:s.Z},d.propTypes=l(l({},i.Z.propTypes),{},{theme:a().object}),d.displayName="Text",d.span=function(e){return r.createElement(d,e)},d.span.defaultProps=l(l({},d.defaultProps),{},{as:"span"}),d.p=function(e){return r.createElement(d,e)},d.p.defaultProps=l(l({},d.defaultProps),{},{as:"p"}),d.s=function(e){return r.createElement(d,e)},d.s.defaultProps=l(l({},d.defaultProps),{},{as:"s"}),t.Z=d}}]);