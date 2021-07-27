(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3708],{3919:function(e,t,n){"use strict";function o(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!o(e)}n.d(t,{b:function(){return o},Z:function(){return i}})},4996:function(e,t,n){"use strict";n.d(t,{C:function(){return r},Z:function(){return a}});var o=n(2263),i=n(3919);function r(){var e=(0,o.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,r=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,o){var r=void 0===o?{}:o,a=r.forcePrependBaseUrl,s=void 0!==a&&a,c=r.absolute,u=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(s)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+l:l}(r,n,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,r().withBaseUrl)(e,t)}},3195:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return d},default:function(){return m}});var o=n(2122),i=n(9756),r=(n(7294),n(3905)),a=n(4996),s=["components"],c={},u="Basics",l={unversionedId:"Tips & Solutions/common",id:"Tips & Solutions/common",isDocsHomePage:!1,title:"Basics",description:"Tips and tricks for common issues.",source:"@site/docs/Tips & Solutions/common.mdx",sourceDirName:"Tips & Solutions",slug:"/Tips & Solutions/common",permalink:"/docs/Tips & Solutions/common",editUrl:"https://github.com/headline-design/pipeline-ui/blob/main/design-site/docs/Tips & Solutions/common.mdx",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Transaction Demo",permalink:"/docs/Demos/transaction"},next:{title:"CSS & Style Guide",permalink:"/docs/css"}},d=[{value:"How do I make a blank React app?",id:"how-do-i-make-a-blank-react-app",children:[]},{value:"setState is not defined",id:"setstate-is-not-defined",children:[]},{value:"How to trigger other actions after connecting to MyAlgo or sending a transaction",id:"how-to-trigger-other-actions-after-connecting-to-myalgo-or-sending-a-transaction",children:[]}],p={toc:d};function m(e){var t=e.components,n=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"basics"},"Basics"),(0,r.kt)("p",null,"Tips and tricks for common issues."),(0,r.kt)("h2",{id:"how-do-i-make-a-blank-react-app"},"How do I make a blank React app?"),(0,r.kt)("p",null,"In command prompt, enter:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-react-app myApp\n")),(0,r.kt)("p",null,'Running this command generates a new folder called "myApp" (or whichever custom name you specify). Inside this folder you will find several pre-configured files. The primary file that you will be working with is App.js that is found in the src folder.'),(0,r.kt)("img",{alt:"Docusaurus with Keytar",width:"100%",height:"400px",src:(0,a.Z)("/img/pipeline_vectilla_5.svg")}),(0,r.kt)("h2",{id:"setstate-is-not-defined"},"setState is not defined"),(0,r.kt)("p",null,"Make sure that your app is written as a class rather than as a function. Your code in App.js should look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import React, {Component} from 'react';\n\nclass myApp extends Component{\n    constructor(props) {\n        super(props);\n        this.state = {\n            myValue: \"\", //your values go here\n\n        };\n    }\n\n    //your function and lifecycle code goes here\n\n    render(){\n        return ( //your jsx code goes between the <div> tags below:\n            <div>\n            </div>\n        )\n    }\n}\n\nexport default App;\n")),(0,r.kt)("h2",{id:"how-to-trigger-other-actions-after-connecting-to-myalgo-or-sending-a-transaction"},"How to trigger other actions after connecting to MyAlgo or sending a transaction"),(0,r.kt)("p",null,"Add the following code just above the ",(0,r.kt)("inlineCode",{parentName:"p"},"render()")," call:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"}," componentDidUpdate(_prevProps, prevState) {\n    if (prevState.address !== this.state.address){ // note: address can be replaced with any state key\n        //do something\n    }\n }\n")),(0,r.kt)("p",null,"In order to avoid an inifinite loop and browser crashing, setState (or functions that setState) should only be called in ",(0,r.kt)("inlineCode",{parentName:"p"},"componentDidUpdate")," in a conditional block."))}m.isMDXComponent=!0}}]);