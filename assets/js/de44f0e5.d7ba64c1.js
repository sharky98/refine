"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[75179],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||r;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},78200:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>p});n(67294);var a=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const s={title:"A Quick Start Guide to React Suspense",description:"We will discuss how React Suspense works and common use cases",slug:"react-suspense-guide",authors:"joel_adewole",tags:["react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-23-react-suspense/social.png",hide_table_of_contents:!1},l=void 0,c={permalink:"/blog/react-suspense-guide",source:"@site/blog/2022-09-23-react-suspense.md",title:"A Quick Start Guide to React Suspense",description:"We will discuss how React Suspense works and common use cases",date:"2022-09-23T00:00:00.000Z",formattedDate:"September 23, 2022",tags:[{label:"react",permalink:"/blog/tags/react"}],readingTime:4.55,hasTruncateMarker:!1,authors:[{name:"Joel Adewole",title:"Web Developer",url:"https://github.com/wolz-codelife",github:"https://github.com/wolz-codelife",linkedin:"https://linkedin.com/in/wolz-codelife",imageURL:"https://github.com/wolz-CODElife.png",key:"joel_adewole"}],frontMatter:{title:"A Quick Start Guide to React Suspense",description:"We will discuss how React Suspense works and common use cases",slug:"react-suspense-guide",authors:"joel_adewole",tags:["react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-23-react-suspense/social.png",hide_table_of_contents:!1},prevItem:{title:"How to use the useParams hook in React Router",permalink:"/blog/react-router-useparams"},nextItem:{title:"An article guideline for refine blog posts",permalink:"/blog/article-guideline"},relatedPosts:[{title:"Redirect in React Router V6 with Navigate Component",description:"We'll see how to redirect using Navigate Component in React Router V6",permalink:"/blog/navigate-react-router-redirect",formattedDate:"September 29, 2022",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:3.86,date:"2022-09-29T00:00:00.000Z"},{title:"How to Create Full Stack React/Next.JS Web App in Few Hour",description:"In this article, we will learn how we can create a full-featured customizable Web / B2B application with **refine** in just a few hours.",permalink:"/blog/create-full-stack-app-with-refine",formattedDate:"April 29, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:8.075,date:"2022-04-29T00:00:00.000Z"},{title:"Develop your Own Customizable Invoice Generator with Refine and Strapi | Part I",description:"Looking for an invoice generator? Try out Refine. With our custom interface, you can build your own invoice in minutes! Learn more here.",permalink:"/blog/refine-react-admin-invoice-genarator",formattedDate:"February 22, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:11.195,date:"2022-02-22T00:00:00.000Z"}],authorPosts:[{title:"Understanding the React useRef Hook",description:"We will explain the differences between useRef and React ref",permalink:"/blog/react-useref-hook-and-ref",formattedDate:"October 26, 2022",authors:[{name:"Joel Adewole",title:"Web Developer",url:"https://github.com/wolz-codelife",github:"https://github.com/wolz-codelife",linkedin:"https://linkedin.com/in/wolz-codelife",imageURL:"https://github.com/wolz-CODElife.png",key:"joel_adewole"}],readingTime:8.04,date:"2022-10-26T00:00:00.000Z"},{title:"Neumorphism with CSS - A new design trend",description:"Overview and examples for Neumorphic CSS implementations.",permalink:"/blog/neumorphic-css",formattedDate:"August 20, 2022",authors:[{name:"Joel Adewole",title:"Web Developer",url:"https://github.com/wolz-codelife",github:"https://github.com/wolz-codelife",linkedin:"https://linkedin.com/in/wolz-codelife",imageURL:"https://github.com/wolz-CODElife.png",key:"joel_adewole"}],readingTime:7.4,date:"2022-08-20T00:00:00.000Z"},{title:"React 18 Upgrade Guide and New Features",description:"React 18 was released! Are you looking to upgrade to React 18?  Learn about the new features and changes in this comprehensive guide.",permalink:"/blog/react-18-upgrade-guide",formattedDate:"September 9, 2022",authors:[{name:"Joel Adewole",title:"Web Developer",url:"https://github.com/wolz-codelife",github:"https://github.com/wolz-codelife",linkedin:"https://linkedin.com/in/wolz-codelife",imageURL:"https://github.com/wolz-CODElife.png",key:"joel_adewole"}],readingTime:7.93,date:"2022-09-09T00:00:00.000Z"}]},u={authorsImageUrls:[void 0]},p=[{value:"Introduction",id:"introduction",level:2},{value:"What is Suspense?",id:"what-is-suspense",level:2},{value:"Comparing React Suspense to Transitions",id:"comparing-react-suspense-to-transitions",level:2},{value:"Use cases of Suspense",id:"use-cases-of-suspense",level:2},{value:"Common Mistakes Made When Using Suspense",id:"common-mistakes-made-when-using-suspense",level:2},{value:"Conclusion",id:"conclusion",level:2}],d={toc:p};function m(e){var{components:t}=e,n=i(e,["components"]);return(0,a.kt)("wrapper",r(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){o(e,t,n[t])}))}return e}({},d,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Content delivery and site performance are important factors for web applications to achieve maximum user experience. Content must be delivered to users quickly and effectively. You want your site to function at its best performance to keep a decent dwell time. "),(0,a.kt)("p",null,"Before React 16, React had the ",(0,a.kt)("inlineCode",{parentName:"p"},"React.lazy()"),' method to allow developers to label a component as "lazy," causing it to be downloaded before being rendered. '),(0,a.kt)("p",null,"React 18 has made some changes and modifications to the React library, some of which were additions, removals, or deprecations, and enhancements to what was already there."),(0,a.kt)("p",null,'One of these enhancements involves React\'s "Suspense" functionality. The "Suspense" feature has been part of the library since React 16. With the recent release of React 18, the capability has been enhanced even better. '),(0,a.kt)("p",null,'In this article, we will discuss how "Suspense" works in React and some of its common use cases. '),(0,a.kt)("p",null,"You must have a working knowledge of React and JavaScript to follow along with this post."),(0,a.kt)("p",null,"Steps we'll cover:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#what-is-suspense"},"What is Suspense?")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#comparing-suspense-to-transitions"},"Comparing Suspense to Transitions")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#use-cases-of-suspense"},"Use cases of Suspense")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#common-mistakes-made-when-using-suspense"},"Common Mistakes Made When Using Suspense"))),(0,a.kt)("h2",{id:"what-is-suspense"},"What is Suspense?"),(0,a.kt)("p",null,"The React Suspense API is a low-level interface that tracks a component's lifecycle and delays rendering while data required pends. User experience improves since users won't have to view a partially loaded component before data is eventually fetched and loaded fully. "),(0,a.kt)("p",null,"For instance, if the duration it takes for a table to load its data is not handled properly, users may initially see an empty table before the component rerenders and displays a fully loaded table."),(0,a.kt)("p",null,"The Suspense API acts as a wrapper around a component to be rendered and then provides a fallback that executes first before the main component renders."),(0,a.kt)("p",null,"Let's look at an example.\nWe may use React Suspense to wrap the component that renders an image and specify a spinner loader as the fallback option for the image to prevent viewers from seeing blurry images that gradually change into the original picture when an image is downloaded from a CDN or cloud storage."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"//Logo is a component that fetches an image from a CDN\nimport Logo from '.LoadLogo.js'\n\n<Suspense fallback={<h1>Loading . . .</h1>}>\n    <Logo />\n</Suspense>\n")),(0,a.kt)("p",null,"Let's examine a different scenario in which data loads from a JSON API, and we need to prevent the component from delivering an empty result."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import loadData from './api/loadData.js';\nconst data = loadData('users.json');\n\n<Suspense fallback={<h1>Loading . . .</h1>}>\n    <Users />\n</Suspense>\n\nconst Users = () => {\n    const people = data.read();\n\n    return (\n        <div>\n            {people.map(person => {\n                <p key={person.id}>{person.name}</p>\n            })}\n        </div>\n    );\n};\n")),(0,a.kt)("br",null),(0,a.kt)("div",null,(0,a.kt)("a",{href:"https://github.com/refinedev/refine"},(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/github-support-banner.png",alt:"github support banner"}))),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"comparing-react-suspense-to-transitions"},"Comparing React Suspense to Transitions"),(0,a.kt)("p",null,"Despite their similarities, Suspense and Transition APIs should not be used interchangeably or in the same context. "),(0,a.kt)("p",null,"React Suspense tracks a component's readiness before rendering it and only offers a deferred alternative until the original component prepares for rendering. "),(0,a.kt)("p",null,"Transition, on the other hand, enables you to prioritize one event over another.\nFor instance, when adding a search feature, you might want to show the user what they are entering but wait to start the search until the user finishes typing."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import {startTransition} from 'react';\n\n// Set the input value but don't initiate the search\nsetInputValue(input);\n\nstartTransition(() => {\n    // Set the final search value, then initiate search\n    setSearchQuery(input);\n});\n")),(0,a.kt)("p",null,"States updates tagged as non-urgent inside of ",(0,a.kt)("inlineCode",{parentName:"p"},"startTransition")," are interrupted if an urgent update is made while the non-urgent state is still updating. This process continues until no new urgent updates are made."),(0,a.kt)("h2",{id:"use-cases-of-suspense"},"Use cases of Suspense"),(0,a.kt)("p",null,"As was discussed in the previous section, it is simple to mistake the React Suspense API for Transition and vice versa. Therefore, it's crucial to know when to use and when to forgot them."),(0,a.kt)("p",null,"The following are some notable uses for the React Suspense API:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Rendering media: Inadequate bandwidth could slow media download from an external server to be rendered on the client side. Suspense can provide a fallback option while waiting for the content to download, ensuring a smooth user experience."),(0,a.kt)("li",{parentName:"ul"},"External Data Fetching: This case is similar to media downloading, except that we might be downloading data from databases and may need to tackle race conditions and concurrency issues. In this situation, suspense can be a huge asset."),(0,a.kt)("li",{parentName:"ul"},"Code splitting: Suspense can execute content delivery in parallel or on demand.")),(0,a.kt)("h2",{id:"common-mistakes-made-when-using-suspense"},"Common Mistakes Made When Using Suspense"),(0,a.kt)("p",null,"Developers frequently misuse Suspense because of its similarity to Transition and other APIs. For illustration: "),(0,a.kt)("p",null,"Using components that handle concurrency using ",(0,a.kt)("inlineCode",{parentName:"p"},"useEffect()"),' inside Suspense. The use of "useEffect", which is designed to manage concurrency, inside the Suspense API defeats the purpose of the API. '),(0,a.kt)("p",null,"Relay uses Suspense, however, it doesn't perform the same functions as Relay. Some users mistake Suspense for a server API request tool like Axios or Relay."),(0,a.kt)("p",null,"Another mistake people make is using ",(0,a.kt)("inlineCode",{parentName:"p"},"catch()")," to handle errors. This will cause the component to wait for the promise before rendering. Instead, Error Boundary can be used to handle rendering errors."),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"Although Suspense has been a part of React since version 16, React 18's Concurrency concept makes the Suspense API's concept more effective and improved. "),(0,a.kt)("p",null,"Suspense is rather cheap and easy to switch to; if you're interested in learning more about the API, check the ",(0,a.kt)("a",{parentName:"p",href:"https://17.reactjs.org/docs/concurrent-mode-suspense.html"},"official documentation"),"."),(0,a.kt)("br",null),(0,a.kt)("div",null,(0,a.kt)("a",{href:"https://discord.gg/refine"},(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/discord-banner.png",alt:"discord banner"}))))}m.isMDXComponent=!0}}]);