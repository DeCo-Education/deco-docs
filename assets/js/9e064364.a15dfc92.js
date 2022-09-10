"use strict";(self.webpackChunkde_co_docs=self.webpackChunkde_co_docs||[]).push([[9496],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(n),u=a,m=d["".concat(c,".").concat(u)]||d[u]||h[u]||r;return n?o.createElement(m,s(s({ref:t},p),{},{components:n})):o.createElement(m,s({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<r;l++)s[l]=n[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4040:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return h}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),s=["components"],i={id:"dapp-components",title:"DApp Components - Backend",sidebar_position:0},c=void 0,l={unversionedId:"into-the-woods/trail2-ergo-coding/dapp-components",id:"into-the-woods/trail2-ergo-coding/dapp-components",title:"DApp Components - Backend",description:"To build a DApp, we have to first understand what are the different components that exists within a DApp.",source:"@site/docs/into-the-woods/trail2-ergo-coding/0-t-dapp-components.md",sourceDirName:"into-the-woods/trail2-ergo-coding",slug:"/into-the-woods/trail2-ergo-coding/dapp-components",permalink:"/deco-docs/docs/into-the-woods/trail2-ergo-coding/dapp-components",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"dapp-components",title:"DApp Components - Backend",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Trail 2: Ergo dApp Development",permalink:"/deco-docs/docs/category/trail-2-ergo-dapp-development"},next:{title:"Tips - Scala Resources",permalink:"/deco-docs/docs/into-the-woods/trail2-ergo-coding/t-scala-resources"}},p={},h=[{value:"Elaboration of writing to a blockchain",id:"elaboration-of-writing-to-a-blockchain",level:3},{value:"Main Course: Components",id:"main-course-components",level:2},{value:"<strong>Reading the Blockchain</strong>",id:"reading-the-blockchain",level:3},{value:"<strong>User Txs to Blockchain</strong>",id:"user-txs-to-blockchain",level:2},{value:"<strong>Bots - Processing existing boxes towards next stages</strong>",id:"bots---processing-existing-boxes-towards-next-stages",level:2},{value:"Conclusion",id:"conclusion",level:2}],d={toc:h};function u(e){var t=e.components,i=(0,a.Z)(e,s);return(0,r.kt)("wrapper",(0,o.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"To build a DApp, we have to first understand what are the different components that exists within a DApp."),(0,r.kt)("p",null,"In this section, we will only be covering the backend components of a DApp."),(0,r.kt)("h1",{id:"components-in-a-dapp"},"Components in a DApp"),(0,r.kt)("p",null,"A dApp or Decentralized Application is an application that utilizes a blockchain as a main tool of its infrastructure. It may or may not have a centralized component to it. The usage of the blockchain requires it to interact with the blockchain, both via ",(0,r.kt)("strong",{parentName:"p"},"reading the data from it")," and ",(0,r.kt)("strong",{parentName:"p"},"writing to it via sending txs"),"."),(0,r.kt)("p",null,"In an eUTxO based blockchain, there is a third step that is required in this process. Which are bots to process boxes and create txs to move txs towards the next stages (if the txs are a multi stage tx)."),(0,r.kt)("h3",{id:"elaboration-of-writing-to-a-blockchain"},"Elaboration of writing to a blockchain"),(0,r.kt)("p",null,'Before we summarize the 3 steps. Let\'s expand a little on what it means to "write to a blockchain".'),(0,r.kt)("p",null,"A DApp has 3 parties. The User, DApp, Blockchain.\nA DApp essentially acts as a middle man to allow users to interact with the blockchain based on the ",(0,r.kt)("a",{parentName:"p",href:"#what-is-a-decentralized-protocol"},"decentralized protocol")," it works with.\n",(0,r.kt)("img",{alt:"Participants",src:n(4174).Z,width:"960",height:"418"}),'\nWe can describe this "write" tx as a user txs to the blockchain.'),(0,r.kt)("p",null,"Therefore the main functions of the DApp would be to:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Read the Blockchain"),(0,r.kt)("li",{parentName:"ol"},"Make User Txs to the Blockchain"),(0,r.kt)("li",{parentName:"ol"},"Process existing Boxes towards next tx stage")),(0,r.kt)("p",null,"So far so good? Good, there's only one option in this document."),(0,r.kt)("h2",{id:"main-course-components"},"Main Course: Components"),(0,r.kt)("p",null,"Given the three functions of the DApp, we can now describe the Components within a DApp."),(0,r.kt)("h3",{id:"reading-the-blockchain"},(0,r.kt)("strong",{parentName:"h3"},"Reading the Blockchain")),(0,r.kt)("p",null,"In most cases, a DApp provides services via the blockchain, and treats the blockchain as a form of database. It stores necessary information onto the blockchain (without jeopardizing the users privacy, hopefully) so that we have accounting of the information stored."),(0,r.kt)("p",null,"HOWEVER, there are so many txs and boxes on the blockchain, there's no way a normal human being would know what to do and how to get it. Therefore, the first job of a DApp is to gather the data that the user needs and display it to them."),(0,r.kt)("p",null,"You can imagine the process of the DApp talking to the blockchain and asks for information/data. It then process the data into understandable details and place it on a screen for the user so that they are able to understand the information that they requested."),(0,r.kt)("p",null,"In the world of Ergo, this can be done via api calls. ",(0,r.kt)("a",{parentName:"p",href:"https://api.ergoplatform.com/api/v1/docs/"},"Documentation of APIs here")),(0,r.kt)("p",null,"This component is normally referred as an ",(0,r.kt)("strong",{parentName:"p"},'"Explorer"'),"."),(0,r.kt)("p",null,"FOR EXAMPLE:\n",(0,r.kt)("strong",{parentName:"p"}," To be written ")),(0,r.kt)("h2",{id:"user-txs-to-blockchain"},(0,r.kt)("strong",{parentName:"h2"},"User Txs to Blockchain")),(0,r.kt)("p",null,"Other than being able to read. The service of a DApp can also provide users the ability to make certain txs against the blockchain to carry out Txs. "),(0,r.kt)("p",null,"A quick example would be the usage of a DEX. A DEX essentially allows exchanges of currency in a decentralized manner. However, the first step would be for the user to send his available currency to the DEX so that an exchange can be done. In the case of Spectrum (formerly ErgoDex), a user signs a tx to send his desired amount of available currency to an address (smart contract). After the funds are sent to the address, Spectrum will then process the funds at the address and carry out the stages of the txs until you receive your exchanged funds. "),(0,r.kt)("p",null,"This specific component that allows users to sign txs takes inputs from the users to output a txs for the users to sign. In most/all cases, the DApp takes necessary inputs to insert into a tx that will output boxes that are guarded by a smart contract. These txs are then sent to the users to be signed. "),(0,r.kt)("p",null,"These signed txs results in a tx being sent to the blockchain. Most of the time, this would involve funds from the users wallet address to instantiate a multi-stage tx by producing the necessary Input Boxes for the txs to take place. "),(0,r.kt)("h2",{id:"bots---processing-existing-boxes-towards-next-stages"},(0,r.kt)("strong",{parentName:"h2"},"Bots - Processing existing boxes towards next stages")),(0,r.kt)("p",null,"In many of the much complicated DApps are protocols that consists of multi-stage txs. These are essentially services that requires multiple stages of txs to complete."),(0,r.kt)("p",null,"In these cases, a user generated input box from the previous section will not complete the entire process. And many times, there are boxes that are created that requires manual triggers for the next txs to takes place."),(0,r.kt)("p",null,"Therefore, a big part of the DApp component within an eUTxO system are bots."),(0,r.kt)("p",null,"These are components that are run during every block to check if there are existing boxes at a specific address (therefore the boxes would have a specific guard script relating to the protocol) and processes each of them based on its validity to create txs that will move it towards the next stages."),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"The three main components are, Explorer, User transactor, and Bots."),(0,r.kt)("p",null,"You can literally use this as a form of checklist when building a DApp."),(0,r.kt)("h1",{id:"what-is-a-decentralized-protocol"},"What is a Decentralized Protocol"))}u.isMDXComponent=!0},4174:function(e,t,n){t.Z=n.p+"assets/images/participants-in-dapp-a94c7448cdf4fd7c182120cd17dbb141.png"}}]);