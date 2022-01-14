"use strict";(self.webpackChunkpipeline_ui_website=self.webpackChunkpipeline_ui_website||[]).push([[7600],{60180:function(e,a,n){n.r(a),n.d(a,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return p},default:function(){return c}});var t=n(87462),i=n(63366),o=(n(67294),n(3905)),r=["components"],l={},s="Developer API (Sandbox)",d={unversionedId:"api",id:"api",isDocsHomePage:!1,title:"Developer API (Sandbox)",description:'Due to popular demand, we have added developer api (or "sandbox" mode) to Pipeline UI. As the objective of Pipeline UI is to provide rapid Algorand functionality to non-developers, and the sandbox is not easy to use without prior experience, we recommend using this feature only for advanced developers. Furthermore, balance checking via indexer is currently not available in the official Algorand sandbox in many of its modes.',source:"@site/docs/api.mdx",sourceDirName:".",slug:"/api",permalink:"/docs/api",editUrl:"https://github.com/headline-design/pipeline-ui/blob/main/design-site/docs/api.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Why Pipeline?",permalink:"/docs/start"},next:{title:"The Lab",permalink:"/docs/lab"}},p=[{value:"Complete Reference",id:"complete-reference",children:[],level:2}],u={toc:p};function c(e){var a=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,t.Z)({},u,n,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"developer-api-sandbox"},"Developer API (Sandbox)"),(0,o.kt)("p",null,'Due to popular demand, we have added developer api (or "sandbox" mode) to Pipeline UI. As the objective of Pipeline UI is to provide rapid Algorand functionality to non-developers, and the sandbox is not easy to use without prior experience, we recommend using this feature only for advanced developers. Furthermore, balance checking via indexer is currently not available in the official Algorand sandbox in many of its modes.'),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"We are currently working on a major update to Pipeline to incorporate a number of smart contract-related functions. Devoloper API is only guaranteed to work for early versions of Pipeline until this message is removed"))),(0,o.kt)("p",null,"To turn on developer API, add the following lines to your react app below the ",(0,o.kt)("inlineCode",{parentName:"p"},"import")," statements:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const myAlgoWallet = Pipeline.init();\nPipeline.EnableDeveloperAPI = true;\n")),(0,o.kt)("p",null,"The last line above sets the token, servers, genesis hash and id to point to the sandbox devnet."),(0,o.kt)("p",null,"To start up devnet, after installing the sandbox per the Algorand github instructions, in git bash run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ ./sandbox up devnet -v\n")),(0,o.kt)("p",null,"In order to test your Pipeline app, which uses MyAlgo Connect or WalletConnect to sign your transaction, your wallet address must be added to the genesis file for devnet. Changing an addresses changes the genesis hash, so in git bash run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ ./sandbox status\n")),(0,o.kt)("p",null,"Copy the genesis hash, and set your app's genesis hash like below (your gen hash string will not be the same, however):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'Pipeline.devGenHash = "92sOQtim+vfpHlDwDcsGfFLrcTDlnjVHPnr6DSQqcAs=";\n')),(0,o.kt)("h2",{id:"complete-reference"},"Complete Reference"),(0,o.kt)("p",null,"Below is an example of setting properties to fully customize the API. Note: setting Pipeline.main mainNet toggle will have no effect. Also, include only the base url and port numbers for the indexer and algod servers (i.e., do not include /v2/transactions/, etc. in url)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'Pipeline.EnableDeveloperAPI = true;\nPipline.indexer = "http://localhost:8980";\nPipeline.algod = "http://localhost:4001";\nPipeline.token = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";\nPipeline.devGenHash = "sC3P7e2SdbqKJK0tbiCdK9tdSpbe6XeCGKdoNzmlj0E="\nPipeline.devGenId = "devnet-v1.0"\n')))}c.isMDXComponent=!0}}]);