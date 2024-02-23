"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[20157],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(t),m=o,f=u["".concat(l,".").concat(m)]||u[m]||c[m]||i;return t?r.createElement(f,a(a({ref:n},d),{},{components:t})):r.createElement(f,a({ref:n},d))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},52448:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>p,default:()=>b,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var r=t(67294),o=t(3905);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const l={title:"Inferencer"},p=void 0,d={unversionedId:"ui-integrations/ant-design/components/inferencer/index",id:"ui-integrations/ant-design/components/inferencer/index",title:"Inferencer",description:"You can automatically generate views for your resources using @refinedev/inferencer. Inferencer exports the AntdListInferencer, AntdShowInferencer, AntdEditInferencer, AntdCreateInferencer components and finally the AntdInferencer component, which combines all in one place.",source:"@site/docs/ui-integrations/ant-design/components/inferencer/index.md",sourceDirName:"ui-integrations/ant-design/components/inferencer",slug:"/ui-integrations/ant-design/components/inferencer/",permalink:"/docs/ui-integrations/ant-design/components/inferencer/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/ui-integrations/ant-design/components/inferencer/index.md",tags:[],version:"current",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1708696937,formattedLastUpdatedAt:"Feb 23, 2024",frontMatter:{title:"Inferencer"},sidebar:"mainSidebar",previous:{title:"<AutoSaveIndicator />",permalink:"/docs/ui-integrations/ant-design/components/auto-save-indicator/"},next:{title:"Create",permalink:"/docs/ui-integrations/ant-design/components/basic-views/create/"}},c={},u=[{value:"Usage",id:"usage",level:2},{value:"Views",id:"views",level:2},{value:"List",id:"list",level:3},{value:"Show",id:"show",level:3},{value:"Create",id:"create",level:3},{value:"Edit",id:"edit",level:3},{value:"Example",id:"example",level:2}],m=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",n)},f=m("Tabs"),h=m("TabItem"),v=m("CodeSandboxExample"),g={toc:u};function b(e){var{components:n}=e,t=s(e,["components"]);return(0,o.kt)("wrapper",a(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){i(e,n,t[n])}))}return e}({},g,t),{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You can automatically generate views for your resources using ",(0,o.kt)("inlineCode",{parentName:"p"},"@refinedev/inferencer"),". Inferencer exports the ",(0,o.kt)("inlineCode",{parentName:"p"},"AntdListInferencer"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"AntdShowInferencer"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"AntdEditInferencer"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"AntdCreateInferencer")," components and finally the ",(0,o.kt)("inlineCode",{parentName:"p"},"AntdInferencer")," component, which combines all in one place."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"Inferencer components can be imported from ",(0,o.kt)("inlineCode",{parentName:"p"},"@refinedev/inferencer/antd"),". You can directly use the components in your routes without passing any props. If you use a ",(0,o.kt)("inlineCode",{parentName:"p"},"routerProvider"),", it will infer the ",(0,o.kt)("inlineCode",{parentName:"p"},"resource"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"action")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," from the current route."),(0,o.kt)(f,{defaultValue:"resources",values:[{label:(0,o.kt)(r.Fragment,null,"In",(0,o.kt)("code",{style:{margin:"0 0.7ch"}},"resources"),"prop"),value:"resources"},{label:"In Custom Components",value:"custom"}],mdxType:"Tabs"},(0,o.kt)(h,{value:"resources",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import routerProvider from "@refinedev/react-router-v6";\nimport { BrowserRouter } from "react-router-dom";\n// highlight-next-line\nimport { AntdInferencer } from "@refinedev/inferencer/antd";\n\nconst App = () => {\n  return (\n    <BrowserRouter>\n      <Refine\n        routerProvider={routerProvider}\n        resources={[\n          {\n            name: "samples",\n            list: "/samples",\n          },\n        ]}\n      >\n        <Routes>\n          {/* highlight-next-line */}\n          <Route path="/samples" element={<AntdInferencer />} />\n        </Routes>\n      </Refine>\n    </BrowserRouter>\n  );\n};\n'))),(0,o.kt)(h,{value:"custom",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'// highlight-next-line\nimport { AntdInferencer } from "@refinedev/inferencer/antd";\n\nconst SampleList = () => {\n  return (\n    // highlight-next-line\n    <AntdInferencer resource="samples" action="list" />\n  );\n};\n\nconst SampleShow = () => {\n  return (\n    // highlight-next-line\n    <AntdInferencer resource="samples" action="show" id="1" />\n  );\n};\n\nconst SampleCreate = () => {\n  return (\n    // highlight-next-line\n    <AntdInferencer resource="samples" action="create" />\n  );\n};\n\nconst SampleEdit = () => {\n  return (\n    // highlight-next-line\n    <AntdInferencer resource="samples" action="edit" id="1" />\n  );\n};\n')))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/packages/list-of-packages"},"Inferencer documentation"))),(0,o.kt)("h2",{id:"views"},"Views"),(0,o.kt)("h3",{id:"list"},"List"),(0,o.kt)("p",null,"Generates a sample list view for your resources according to the API response. It uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"List")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Table")," components with the ",(0,o.kt)("inlineCode",{parentName:"p"},"useTable")," hook from ",(0,o.kt)("inlineCode",{parentName:"p"},"@refinedev/antd"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live hideCode previewHeight=600px url=http://localhost:3000/samples",live:!0,hideCode:!0,previewHeight:"600px",url:"http://localhost:3000/samples"},'setInitialRoutes(["/samples"]);\n\n// visible-block-start\nimport { Refine } from "@refinedev/core";\nimport { ThemedLayoutV2, RefineThemes } from "@refinedev/antd";\nimport routerProvider from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\n\nimport { ConfigProvider } from "antd";\n\nimport { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";\n\n// highlight-next-line\nimport { AntdInferencer } from "@refinedev/inferencer/antd";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n  return (\n    <BrowserRouter>\n      <ConfigProvider theme={RefineThemes.Blue}>\n        <Refine\n          routerProvider={routerProvider}\n          dataProvider={dataProvider(API_URL)}\n          resources={[\n            {\n              name: "samples",\n              list: "/samples",\n            },\n          ]}\n        >\n          <Routes>\n            <Route\n              element={\n                <ThemedLayoutV2>\n                  <Outlet />\n                </ThemedLayoutV2>\n              }\n            >\n              {/* highlight-next-line */}\n              <Route path="/samples" element={<AntdInferencer />} />\n            </Route>\n          </Routes>\n        </Refine>\n      </ConfigProvider>\n    </BrowserRouter>\n  );\n};\n\n// visible-block-end\n\nrender(<App />);\n')),(0,o.kt)("h3",{id:"show"},"Show"),(0,o.kt)("p",null,"Generates a sample show view for your resources according to the API response. It uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"Show")," and field components from ",(0,o.kt)("inlineCode",{parentName:"p"},"@refinedev/antd")," with the ",(0,o.kt)("inlineCode",{parentName:"p"},"useShow")," hook from ",(0,o.kt)("inlineCode",{parentName:"p"},"@refinedev/core"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live hideCode previewHeight=600px url=http://localhost:3000/samples/show/123",live:!0,hideCode:!0,previewHeight:"600px",url:"http://localhost:3000/samples/show/123"},'setInitialRoutes(["/samples/show/123"]);\n\n// visible-block-start\nimport { Refine } from "@refinedev/core";\nimport { RefineThemes, ThemedLayoutV2 } from "@refinedev/antd";\nimport routerProvider from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\n\nimport { ConfigProvider } from "antd";\n\nimport { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";\n\n// highlight-next-line\nimport { AntdInferencer } from "@refinedev/inferencer/antd";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n  return (\n    <BrowserRouter>\n      <ConfigProvider theme={RefineThemes.Blue}>\n        <Refine\n          routerProvider={routerProvider}\n          dataProvider={dataProvider(API_URL)}\n          resources={[\n            {\n              name: "samples",\n              show: "/samples/show/:id",\n            },\n          ]}\n        >\n          <Routes>\n            <Route\n              element={\n                <ThemedLayoutV2>\n                  <Outlet />\n                </ThemedLayoutV2>\n              }\n            >\n              {/* highlight-next-line */}\n              <Route path="/samples/show/:id" element={<AntdInferencer />} />\n            </Route>\n          </Routes>\n        </Refine>\n      </ConfigProvider>\n    </BrowserRouter>\n  );\n};\n\n// visible-block-end\n\nrender(<App />);\n')),(0,o.kt)("h3",{id:"create"},"Create"),(0,o.kt)("p",null,"Generates a sample create view for your resources according to the first record in list API response. It uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"Create")," component and the ",(0,o.kt)("inlineCode",{parentName:"p"},"useForm")," hook from ",(0,o.kt)("inlineCode",{parentName:"p"},"@refinedev/antd"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live hideCode previewHeight=600px url=http://localhost:3000/samples/create",live:!0,hideCode:!0,previewHeight:"600px",url:"http://localhost:3000/samples/create"},'setInitialRoutes(["/samples/create"]);\n\n// visible-block-start\nimport { Refine } from "@refinedev/core";\nimport { ThemedLayoutV2, RefineThemes } from "@refinedev/antd";\nimport routerProvider from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\n\nimport { ConfigProvider } from "antd";\n\nimport { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";\n\n// highlight-next-line\nimport { AntdInferencer } from "@refinedev/inferencer/antd";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n  return (\n    <BrowserRouter>\n      <ConfigProvider theme={RefineThemes.Blue}>\n        <Refine\n          routerProvider={routerProvider}\n          dataProvider={dataProvider(API_URL)}\n          resources={[\n            {\n              name: "samples",\n              create: "/samples/create",\n            },\n          ]}\n        >\n          <Routes>\n            <Route\n              element={\n                <ThemedLayoutV2>\n                  <Outlet />\n                </ThemedLayoutV2>\n              }\n            >\n              {/* highlight-next-line */}\n              <Route path="/samples/create" element={<AntdInferencer />} />\n            </Route>\n          </Routes>\n        </Refine>\n      </ConfigProvider>\n    </BrowserRouter>\n  );\n};\n\n// visible-block-end\n\nrender(<App />);\n')),(0,o.kt)("h3",{id:"edit"},"Edit"),(0,o.kt)("p",null,"Generates a sample edit view for your resources according to the API response. It uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"Edit")," component and the ",(0,o.kt)("inlineCode",{parentName:"p"},"useForm")," hook from ",(0,o.kt)("inlineCode",{parentName:"p"},"@refinedev/antd"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live hideCode previewHeight=600px url=http://localhost:3000/samples/edit/123",live:!0,hideCode:!0,previewHeight:"600px",url:"http://localhost:3000/samples/edit/123"},'setInitialRoutes(["/samples/edit/123"]);\n\n// visible-block-start\nimport { Refine } from "@refinedev/core";\nimport { ThemedLayoutV2, RefineThemes } from "@refinedev/antd";\nimport routerProvider from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\n\nimport { ConfigProvider } from "antd";\n\nimport { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";\n\n// highlight-next-line\nimport { AntdInferencer } from "@refinedev/inferencer/antd";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n  return (\n    <BrowserRouter>\n      <ConfigProvider theme={RefineThemes.Blue}>\n        <Refine\n          routerProvider={routerProvider}\n          dataProvider={dataProvider(API_URL)}\n          resources={[\n            {\n              name: "samples",\n              edit: "/samples/edit/:id",\n            },\n          ]}\n        >\n          <Routes>\n            <Route\n              element={\n                <ThemedLayoutV2>\n                  <Outlet />\n                </ThemedLayoutV2>\n              }\n            >\n              {/* highlight-next-line */}\n              <Route path="/samples/edit/:id" element={<AntdInferencer />} />\n            </Route>\n          </Routes>\n        </Refine>\n      </ConfigProvider>\n    </BrowserRouter>\n  );\n};\n\n// visible-block-end\n\nrender(<App />);\n')),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"Below you'll find a Live CodeSandbox Example displaying a fully setup Refine app with the ",(0,o.kt)("inlineCode",{parentName:"p"},"@refinedev/inferencer/antd")," components."),(0,o.kt)(v,{path:"inferencer-antd",mdxType:"CodeSandboxExample"}))}b.isMDXComponent=!0}}]);