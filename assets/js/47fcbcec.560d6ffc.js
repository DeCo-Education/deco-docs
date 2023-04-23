"use strict";(self.webpackChunkde_co_docs=self.webpackChunkde_co_docs||[]).push([[2528],{3905:function(t,e,a){a.d(e,{Zo:function(){return p},kt:function(){return g}});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var l=r.createContext({}),c=function(t){var e=r.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},p=function(t){var e=c(t.components);return r.createElement(l.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,l=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),u=c(a),g=n,h=u["".concat(l,".").concat(g)]||u[g]||d[g]||i;return a?r.createElement(h,o(o({ref:e},p),{},{components:a})):r.createElement(h,o({ref:e},p))}));function g(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:n,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5350:function(t,e,a){a.r(e),a.d(e,{assets:function(){return p},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var r=a(7462),n=a(3366),i=(a(7294),a(3905)),o=["components"],s={id:"registers-guardscripts-ergoscript",title:"Lesson 2. Knowledge - Registers, GuardScripts, Ergoscript",sidebar_position:1},l="Lesson 2: Knowledge - Registers, GuardScripts, Ergoscript",c={unversionedId:"into-the-woods/trail1-eutxo-n-nfts/registers-guardscripts-ergoscript",id:"into-the-woods/trail1-eutxo-n-nfts/registers-guardscripts-ergoscript",title:"Lesson 2. Knowledge - Registers, GuardScripts, Ergoscript",description:"What are Registers",source:"@site/docs/into-the-woods/trail1-eutxo-n-nfts/2-k-registers-guardscripts-ergoscript.md",sourceDirName:"into-the-woods/trail1-eutxo-n-nfts",slug:"/into-the-woods/trail1-eutxo-n-nfts/registers-guardscripts-ergoscript",permalink:"/deco-docs/docs/into-the-woods/trail1-eutxo-n-nfts/registers-guardscripts-ergoscript",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"registers-guardscripts-ergoscript",title:"Lesson 2. Knowledge - Registers, GuardScripts, Ergoscript",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Lesson 1. Knowledge - eUTxO, Boxes, Addresses",permalink:"/deco-docs/docs/into-the-woods/trail1-eutxo-n-nfts/eutxo-boxes-addresses"},next:{title:"WIP Lesson 3. Knowledge - Simple Txs vs Real World Txs",permalink:"/deco-docs/docs/into-the-woods/trail1-eutxo-n-nfts/simple-txs-vs-real-world-txs"}},p={},d=[{value:"What are Registers",id:"what-are-registers",level:2},{value:"What kind of data can be stored in Registers?",id:"what-kind-of-data-can-be-stored-in-registers",level:3},{value:"Limitations of Registers and Boxes",id:"limitations-of-registers-and-boxes",level:3},{value:"Guard Scripts",id:"guard-scripts",level:2},{value:"What is ErgoScript?",id:"what-is-ergoscript",level:2},{value:"A great article to facilitate understanding:",id:"a-great-article-to-facilitate-understanding",level:3}],u={toc:d};function g(t){var e=t.components,a=(0,n.Z)(t,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"lesson-2-knowledge---registers-guardscripts-ergoscript"},"Lesson 2: Knowledge - Registers, GuardScripts, Ergoscript"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Completion Status"',title:'"Completion','Status"':!0},"Version: 1st Version\n")),(0,i.kt)("h2",{id:"what-are-registers"},"What are Registers"),(0,i.kt)("p",null,"A register is a storage slot associated with a box (also known as an unspent transaction output or UTXO). Each box can have up to 9 registers, which are used to store additional information or metadata about the box."),(0,i.kt)("p",null,"Registers can hold various types of information, such as tokens, metadata, and other data relevant to the use case of the box. However, the first 4 registers are set to hold specific information regarding the boxes."),(0,i.kt)("p",null,"Below is a table showing what each registers hold. Similar to computer science rules, we start counting from 0 rather than 1."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Register"),(0,i.kt)("th",{parentName:"tr",align:null},"Value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"R0"),(0,i.kt)("td",{parentName:"tr",align:null},"Value (in nanoErgs)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"R1"),(0,i.kt)("td",{parentName:"tr",align:null},"Guard script (aka Smart Contract)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"R2"),(0,i.kt)("td",{parentName:"tr",align:null},"Assets (tokens)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"R3"),(0,i.kt)("td",{parentName:"tr",align:null},"Creation Info")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"R4"),(0,i.kt)("td",{parentName:"tr",align:null},"Available")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"R5"),(0,i.kt)("td",{parentName:"tr",align:null},"Available")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"R6"),(0,i.kt)("td",{parentName:"tr",align:null},"Available")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"R7"),(0,i.kt)("td",{parentName:"tr",align:null},"Available")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"R8"),(0,i.kt)("td",{parentName:"tr",align:null},"Available")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"R9"),(0,i.kt)("td",{parentName:"tr",align:null},"Available")))),(0,i.kt)("p",null,"The available registers starting from R4 can be used to store additional data or metadata about the box. For example, a box might have a string stored in one of its registers indicating the purpose or intended use of the box."),(0,i.kt)("p",null,"Registers in the Ergo blockchain are designed to be flexible and extensible. They can be used to store a wide variety of information, depending on the specific needs of the application or use case. And because they are associated with individual boxes, they can be used to store information in a decentralized and trustless way."),(0,i.kt)("h3",{id:"what-kind-of-data-can-be-stored-in-registers"},"What kind of data can be stored in Registers?"),(0,i.kt)("p",null,"Here's a list of values that can be stored in registers of boxes."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Boolean"),(0,i.kt)("li",{parentName:"ol"},"Integer"),(0,i.kt)("li",{parentName:"ol"},"Long"),(0,i.kt)("li",{parentName:"ol"},"Byte"),(0,i.kt)("li",{parentName:"ol"},"Short"),(0,i.kt)("li",{parentName:"ol"},"BigInt"),(0,i.kt)("li",{parentName:"ol"},"Coll","[Type]")),(0,i.kt)("p",null,"Coll is a special a data structure that is similar to an array. It allows you to store a collection of types, for example, Coll","[Byte]",". Not only that, it also allows you to store Coll's of Colls, thus allowing the power to store Coll[Coll","[Byte]","], which are equivalent to a collection of strings."),(0,i.kt)("h3",{id:"limitations-of-registers-and-boxes"},"Limitations of Registers and Boxes"),(0,i.kt)("p",null,"At the end of the day, these boxes are stored as data. Similar to data in every computer, these data are converted to bytes. The limitation of a box in terms of data store is the size of storage it has. Each box can only have a maximum of 4KB in it. And there is a minimum value of Erg that the box has to have to be able to store that small but large amount of data."),(0,i.kt)("p",null,"The minimum for each box is for it to have 1,000,000 NanoErgs (Note that this is NanoErgs, not ergs. 1 Erg is 1,000,000,000 NanoErgs)."),(0,i.kt)("p",null,"Whereas the minimum cost for the maximum data to be stored (4KB) is based on the formula:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Maximum Box Cost"',title:'"Maximum',Box:!0,'Cost"':!0},"minValuePerByte = 360\n4KB = 4 * 1024\nMaximum Box Cost = (4KB) * minValuePerByte = 1,474,560\n")),(0,i.kt)("h2",{id:"guard-scripts"},"Guard Scripts"),(0,i.kt)("p",null,"A guard script is a type of scripting language that is executed by the Ergo Virtual Machine (EVM) when a transaction attempts to spend the box associated with the script. The guard script specifies the conditions under which the transaction can be executed, and if those conditions are not met, the transaction will be rejected by the EVM."),(0,i.kt)("p",null,"As shown in the table above, these scripts are stored as bytes in R1 of a box. They are written in a language called ErgoScripts and it compiles down to an address which determines the boxes of the address."),(0,i.kt)("p",null,"What this means is that for a scripts that has the exact same logic for proving its spending condition, it will have the exact same address. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text",metastring:'title = "Adam\'s script"',title:!0,"":"","\"Adam's":!0,'script"':!0},"{\n    sigmaProp(adamsPK)\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text",metastring:'title = "Excessive Adam\'s Script"',title:!0,"":"",'"Excessive':!0,"Adam's":!0,'Script"':!0},"{\n    val onePlusOne = 1 + 1\n    sigmaProp(adamsPK)\n}\n")),(0,i.kt)("p",null,"In the two code above, it will compile to the same address, which is Adam's address. The reason being, though there are extra lines in \"Excessive Adam's Script\", that line is not evaluated at the end (Evaluation is done within sigmaProp). The only evaluation that is done is adamsPK, therefore both scripts results into the same address value."),(0,i.kt)("p",null,"This specific guard script that is presented above states that the box can only be spent by Adam (or to be exact, the person with Adam's Private Key that signs it)."),(0,i.kt)("p",null,"There are many kind of guard scripts that can be written, and the complexities are based on the complexity of the logic within the script it self. However, some quick examples of some common guard scripts are:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"PK (Public Key) Scripts - These scripts require the signature of a specific public key to spend the contents of the box. This is a basic form of security that ensures that only the owner of the private key associated with the public key can spend the box.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Threshold Scripts - These scripts require a certain number of signatures from a group of specified public keys to spend the contents of the box. This allows for more complex security arrangements, such as requiring multiple people to sign off on a transaction.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Time Lock Scripts - These scripts enforce a time-based lock on the box, requiring that a certain amount of time pass before the box can be spent. This can be useful for applications such as escrow services, where funds are held in a box until a certain condition is met or a certain amount of time has passed.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Multisig Scripts - These scripts combine the security features of PK and threshold scripts, allowing for multiple signatures from a group of specified public keys to spend the contents of the box."))),(0,i.kt)("h2",{id:"what-is-ergoscript"},"What is ErgoScript?"),(0,i.kt)("p",null,"ErgoScript is a programming language that is used to create smart contracts on the Ergo blockchain. It is a Turing-complete language, meaning that it can express any computation that can be computed by a universal Turing machine."),(0,i.kt)("p",null,"ErgoScript is a highly expressive language that allows for the creation of complex smart contracts with a wide range of functionality. It supports a variety of data types, including integers, booleans, and strings, as well as more advanced types such as lists and maps."),(0,i.kt)("p",null,"In this article, we will not go too deep into ErgoScript. However, the article ",(0,i.kt)("a",{parentName:"p",href:"/deco-docs/docs/into-the-woods/trail2-ergo-coding/t-Ergo%20Syntax"},"Trail 2 - Ergo Syntax")," will dive a lot deeper into the details of ErgoScript. But here's a quick example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text",metastring:'title = "Height 945678"',title:!0,"":"",'"Height':!0,'945678"':!0},"{\n    val isHeight945678 = CONTEXT.HEIGHT == 945678\n    sigmaProp(isHeight945678)\n}\n")),(0,i.kt)("h3",{id:"a-great-article-to-facilitate-understanding"},"A great article to facilitate understanding:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://medium.com/@keitodot/ergo-box-m-f58f444e00d5"},"Ergo Box Modeling")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/ergoplatform/ergo-appkit/blob/develop/appkit/src/test/scala/org/ergoplatform/appkit/ErgoValueTest.java"},"ErgoValue Type Test"))))}g.isMDXComponent=!0}}]);