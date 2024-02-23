"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[76660],{60522:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>d,metadata:()=>m,toc:()=>c});n(67294);var a=n(3905),r=n(53787),l=n(50551);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const d={title:"Telemetry",sidebar_label:"Telemetry"},s="Telemetry",m={unversionedId:"further-readings/telemetry",id:"further-readings/telemetry",title:"Telemetry",description:"Summary",source:"@site/docs/further-readings/telemetry.md",sourceDirName:"further-readings",slug:"/further-readings/telemetry",permalink:"/docs/further-readings/telemetry",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/further-readings/telemetry.md",tags:[],version:"current",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1708696937,formattedLastUpdatedAt:"Feb 23, 2024",frontMatter:{title:"Telemetry",sidebar_label:"Telemetry"},sidebar:"mainSidebar",previous:{title:"Testing",permalink:"/docs/further-readings/testing"},next:{title:"Comparison",permalink:"/docs/further-readings/comparison"}},u={},c=[{value:"Summary",id:"summary",level:2},{value:"Why do we need this?",id:"why-do-we-need-this",level:2},{value:"How do we collect data?",id:"how-do-we-collect-data",level:2},{value:"What is collected?",id:"what-is-collected",level:2},{value:"How to opt-out?",id:"how-to-opt-out",level:2},{value:"What is collected?",id:"what-is-collected-1",level:2},{value:"How to opt-out?",id:"how-to-opt-out-1",level:2}],k={toc:c};function h(e){var{components:t}=e,n=p(e,["components"]);return(0,a.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){i(e,t,n[t])}))}return e}({},k,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"telemetry"},"Telemetry"),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Refine")," implements a ",(0,a.kt)("strong",{parentName:"p"},"simple")," and ",(0,a.kt)("strong",{parentName:"p"},"transparent")," telemetry module for collecting usage statistics defined in a ",(0,a.kt)("strong",{parentName:"p"},"very limited scope"),"."),(0,a.kt)("p",null,"Tracking is totally ",(0,a.kt)("strong",{parentName:"p"},"secure")," and users can choose to remain ",(0,a.kt)("strong",{parentName:"p"},"anonymous")," without providing any personally identifiable information."),(0,a.kt)("p",null,"When setting up a new project, there is an extra, non-mandatory step where we ask for the developer\u2019s ",(0,a.kt)("strong",{parentName:"p"},"email address"),"."),(0,a.kt)("p",null,"Upon entry, this contact information will be collected and linked to the project. It\u2019s used occasionally to reach out to community members, and we never share it with third parties or engage in spamming."),(0,a.kt)("p",null,"The telemetry system ",(0,a.kt)("strong",{parentName:"p"},"does not use cookies"),". Participation is optional and users may easily ",(0,a.kt)("strong",{parentName:"p"},"opt-out"),"."),(0,a.kt)("h2",{id:"why-do-we-need-this"},"Why do we need this?"),(0,a.kt)("p",null,"We try to answer the question ",(0,a.kt)("strong",{parentName:"p"},"how many users are actively using the Refine framework"),". This information is critical for open-source projects like Refine to better understand their communities and measure their growth metrics."),(0,a.kt)("h2",{id:"how-do-we-collect-data"},"How do we collect data?"),(0,a.kt)(r.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"refine-core",label:"Refine core",default:!0,mdxType:"TabItem"},(0,a.kt)("p",null,"The tracking happens when a Refine application is loaded on the user's browser. On application init, a single HTTP request is sent to \"",(0,a.kt)("a",{parentName:"p",href:"https://telemetry.refine.dev%22"},'https://telemetry.refine.dev"'),". The request body is encoded with Base64 to be decoded on Refine servers."),(0,a.kt)("p",null,"There are no consequent requests for that session, as we do NOT collect any behavioral information such as ",(0,a.kt)("em",{parentName:"p"},"page views"),", ",(0,a.kt)("em",{parentName:"p"},"button clicks"),", etc."),(0,a.kt)("h2",{id:"what-is-collected"},"What is collected?"),(0,a.kt)("p",null,"The HTTP call has a JSON payload having the following application-specific attributes:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Value"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"providers"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"boolean[]")),(0,a.kt)("td",{parentName:"tr",align:null},"List of providers used in the project (auth, data, router, live, notification, auditLog, i18n or accessControl)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"version"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:null},"Version of the Refine package.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"resourceCount"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",{parentName:"tr",align:null},"Number of total resources.")))),(0,a.kt)("p",null,"Additionally, the following information is extracted and collected from the HTTP header:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Value"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"IP Address"),(0,a.kt)("td",{parentName:"tr",align:null},"IP Address of the machine the request is coming from.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Hostname"),(0,a.kt)("td",{parentName:"tr",align:null},"Hostname of the machine the request is coming from.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Browser"),(0,a.kt)("td",{parentName:"tr",align:null},"Browser and browser version.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"OS"),(0,a.kt)("td",{parentName:"tr",align:null},"OS and OS version.")))),(0,a.kt)("p",null,"Lastly, we collect the contact information, ",(0,a.kt)("strong",{parentName:"p"},"if provided")," upon project creation."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Value"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Email Address"),(0,a.kt)("td",{parentName:"tr",align:null},"Developer's Email Address. ","[",(0,a.kt)("strong",{parentName:"td"},"OPTIONAL"),"]")))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"refine.new is the cloud-based alternative to CLI for creating Refine projects.\nIt requires users signing in with an GitHub account and a limited set of public profile information is collected for analytics purposes. The collected data can also be automatically linked to the created project."),(0,a.kt)("p",{parentName:"admonition"},"Projects created with refine.new still can opt-out from telemetry by simply adding ",(0,a.kt)("inlineCode",{parentName:"p"},"disableTelemetry")," prop to the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Refine>")," component's ",(0,a.kt)("inlineCode",{parentName:"p"},"options")," prop.")),(0,a.kt)("h2",{id:"how-to-opt-out"},"How to opt-out?"),(0,a.kt)("p",null,"You can opt out of telemetry by simply adding ",(0,a.kt)("inlineCode",{parentName:"p"},"disableTelemetry")," prop to the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Refine>")," component's ",(0,a.kt)("inlineCode",{parentName:"p"},"options")," prop.")),(0,a.kt)(l.Z,{value:"refine-cli",label:"Refine CLI",mdxType:"TabItem"},(0,a.kt)("p",null,"After running a command with the ",(0,a.kt)("inlineCode",{parentName:"p"},"Refine"),' CLI, a single HTTP request is sent to "',(0,a.kt)("a",{parentName:"p",href:"https://telemetry.refine.dev/cli%22"},'https://telemetry.refine.dev/cli"'),"."),(0,a.kt)("h2",{id:"what-is-collected-1"},"What is collected?"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Value"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"nodeEnv"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:null},"Specifies the environment in which an application is running.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"nodeVersion"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:null},"Installed Node.js version.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"os"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:null},"Operating system name.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"osVersion"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:null},"Operating system version.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"command"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:null},"Running script name.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"packages"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},'{ "name": "string", "version": "string" }[]')),(0,a.kt)("td",{parentName:"tr",align:null},"Installed ",(0,a.kt)("inlineCode",{parentName:"td"},"Refine")," packages.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"projectFramework"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:null},"Installed ",(0,a.kt)("inlineCode",{parentName:"td"},"react")," framework.")))),(0,a.kt)("p",null,"Additionally, the following information is extracted and collected from the HTTP header:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Value"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"IP Address"),(0,a.kt)("td",{parentName:"tr",align:null},"IP Address of the machine the request is coming from.")))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"refine.new is the cloud-based alternative to CLI for creating Refine projects.\nIt requires users signing in with an GitHub account and a limited set of public profile information is collected for analytics purposes. The collected data can also be automatically linked to the created project."),(0,a.kt)("p",{parentName:"admonition"},"Projects created with refine.new still can opt-out from telemetry by simply adding ",(0,a.kt)("inlineCode",{parentName:"p"},"disableTelemetry")," prop to the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Refine>")," component's ",(0,a.kt)("inlineCode",{parentName:"p"},"options")," prop.")),(0,a.kt)("h2",{id:"how-to-opt-out-1"},"How to opt-out?"),(0,a.kt)("p",null,"You can opt out of telemetry by simply adding ",(0,a.kt)("inlineCode",{parentName:"p"},"REFINE_NO_TELEMETRY=true")," to environment variables."))))}h.isMDXComponent=!0}}]);