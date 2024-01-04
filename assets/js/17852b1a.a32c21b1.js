"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[73802],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},94698:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>u});n(67294);var r=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const s={id:"search",title:"Search"},p=void 0,c={unversionedId:"advanced-tutorials/search/search",id:"advanced-tutorials/search/search",title:"Search",description:"We will create a ` component for your application with Ant Design's ` component.",source:"@site/docs/advanced-tutorials/search/search.md",sourceDirName:"advanced-tutorials/search",slug:"/advanced-tutorials/search/",permalink:"/docs/advanced-tutorials/search/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/advanced-tutorials/search/search.md",tags:[],version:"current",lastUpdatedBy:"Batuhan Wilhelm",lastUpdatedAt:1704368008,formattedLastUpdatedAt:"Jan 4, 2024",frontMatter:{id:"search",title:"Search"},sidebar:"mainSidebar",previous:{title:"List Search",permalink:"/docs/advanced-tutorials/search/list-search"},next:{title:"Table Search",permalink:"/docs/advanced-tutorials/search/table-search"}},l={},u=[{value:"Example",id:"example",level:2}],d=(m="CodeSandboxExample",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var m;const f={toc:u};function h(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},f,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"We will create a ",(0,r.kt)("inlineCode",{parentName:"p"},"<Header>")," component for your application with Ant Design's ",(0,r.kt)("a",{parentName:"p",href:"https://ant.design/components/auto-complete"},(0,r.kt)("inlineCode",{parentName:"a"},"<AutoComplete>"))," component.\nWe will now examine how to search within the application with this component."),(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/search/search.gif",alt:"search"}),(0,r.kt)("br",null),(0,r.kt)("p",null,"To do this, let's first create our ",(0,r.kt)("inlineCode",{parentName:"p"},"<Header>")," component."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/header.tsx"',title:'"src/components/header.tsx"'},'import { Layout, AutoComplete, Input } from "antd";\nimport { SearchOutlined } from "@ant-design/icons";\n\nexport const Header: React.FC = () => {\n  return (\n    <Layout.Header\n      style={{\n        padding: "0px 24px",\n        backgroundColor: "#FFF",\n      }}\n    >\n      <AutoComplete style={{ width: "100%", maxWidth: "550px" }} filterOption={false}>\n        <Input size="large" placeholder="Search posts or categories" suffix={<SearchOutlined />} />\n      </AutoComplete>\n    </Layout.Header>\n  );\n};\n')),(0,r.kt)("p",null,"We created the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Header>")," component as we want it to appear. We have not done anything for any search process at this stage. We just created the UI."),(0,r.kt)("br",null),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Let's not forget to pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Header>")," component to the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Layout>")," component in ",(0,r.kt)("inlineCode",{parentName:"p"},"App.tsx")," as below."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { Refine } from "@refinedev/core";\nimport { Layout } from "@refinedev/antd";\nimport dataProvider from "@refinedev/simple-rest";\n\nimport "@refinedev/antd/dist/reset.css";\n\n// highlight-next-line\nimport { Header } from "components";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n  return (\n    <Refine\n      dataProvider={dataProvider(API_URL)}\n      /* ... */\n    >\n      <Layout Header={Header}>{/* ... */}</Layout>\n    </Refine>\n  );\n};\n\nexport default App;\n'))),(0,r.kt)("p",null,"Now let's get our ",(0,r.kt)("a",{parentName:"p",href:"https://ant.design/components/auto-complete"},(0,r.kt)("inlineCode",{parentName:"a"},"<AutoComplete>"))," input ready to search. So, let's fetch our posts according to the value entered in our input."),(0,r.kt)("p",null,"To fetch more than one record, we will use the ",(0,r.kt)("a",{parentName:"p",href:"/docs/data/hooks/use-list"},(0,r.kt)("inlineCode",{parentName:"a"},"useList"))," data hook, and we will filter and fetch this data according to the search value."),(0,r.kt)("p",null,"Before we start, let's create the interfaces of our ",(0,r.kt)("a",{parentName:"p",href:"https://ant.design/components/auto-complete"},(0,r.kt)("inlineCode",{parentName:"a"},"<AutoComplete>")),"'s ",(0,r.kt)("inlineCode",{parentName:"p"},"options")," property and the post source."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/interfaces/index.d.ts"',title:'"src/interfaces/index.d.ts"'},"export interface IPost {\n  id: number;\n  title: string;\n}\n\nexport interface ICategory {\n  id: number;\n  title: string;\n}\n\nexport interface IOptionGroup {\n  value: string;\n  label: string | React.ReactNode;\n}\n\nexport interface IOptions {\n  label: string | React.ReactNode;\n  options: IOptionGroup[];\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/header.tsx"',title:'"src/components/header.tsx"'},'import { useState, useEffect } from "react";\nimport { useList } from "@refinedev/core";\nimport { Layout, AutoComplete, Input, Icons, Typography } from "antd";\nimport routerProvider from "@refinedev/react-router-v6";\n\nconst { Link } = routerProvider;\nconst { Text } = Typography;\nconst { SearchOutlined } = Icons;\n\nimport { IOptions, IPost } from "interfaces";\n\n// To be able to customize the option title\nconst renderTitle = (title: string) => {\n  return (\n    <Text strong style={{ fontSize: "16px" }}>\n      {title}\n    </Text>\n  );\n};\n\n// To be able to customize the option item\nconst renderItem = (title: string, resource: string, id: number) => {\n  return {\n    value: title,\n    label: (\n      <Link to={`/${resource}/show/${id}`}>\n        <Text>{title}</Text>\n      </Link>\n    ),\n  };\n};\n\nexport const Header: React.FC = () => {\n  const [value, setValue] = useState<string>("");\n  const [options, setOptions] = useState<IOptions[]>([]);\n\n  const { refetch: refetchPosts } = useList<IPost>({\n    resource: "posts",\n    filters: [{ field: "title", operator: "contains", value }],\n    queryOptions: {\n      enabled: false,\n      onSuccess: (data) => {\n        const postOptionGroup = data.data.map((item) => renderItem(item.title, "posts", item.id));\n        if (postOptionGroup.length > 0) {\n          setOptions([\n            {\n              label: renderTitle("Posts"),\n              options: postOptionGroup,\n            },\n          ]);\n        }\n      },\n    },\n  });\n\n  useEffect(() => {\n    setOptions([]);\n    refetchPosts();\n  }, [value]);\n\n  return (\n    <Layout.Header\n      style={{\n        padding: "0px 24px",\n        backgroundColor: "#FFF",\n      }}\n    >\n      <AutoComplete\n        style={{ width: "100%", maxWidth: "550px" }}\n        filterOption={false}\n        options={options}\n        onSearch={(value: string) => setValue(value)}\n      >\n        <Input size="large" placeholder="Search posts or categories" suffix={<SearchOutlined />} />\n      </AutoComplete>\n    </Layout.Header>\n  );\n};\n')),(0,r.kt)("p",null,"We created states to dynamically manage the ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"options")," properties of the ",(0,r.kt)("a",{parentName:"p",href:"https://ant.design/components/auto-complete"},(0,r.kt)("inlineCode",{parentName:"a"},"<AutoComplete>"))," component. The ",(0,r.kt)("a",{parentName:"p",href:"/docs/data/hooks/use-list"},(0,r.kt)("inlineCode",{parentName:"a"},"useList"))," hook is triggered whenever the value changes. Likewise, the filter used to fetch the data is updated each time the value changes."),(0,r.kt)("br",null),(0,r.kt)("p",null,"Search value is currently only searched and fetched inside posts. Let's update our code to search both posts and categories according to the search value."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/header.tsx"',title:'"src/components/header.tsx"'},'...\nexport const Header: React.FC = () => {\n    const [value, setValue] = useState<string>("");\n    const [options, setOptions] = useState<IOptions[]>([]);\n\n    const { refetch: refetchPosts } = useList<IPost>({\n        resource: "posts",\n        filters: [{ field: "title", operator: "contains", value }],\n        queryOptions: {\n            enabled: false,\n            onSuccess: (data) => {\n                const postOptionGroup = data.data.map((item) =>\n                    renderItem(item.title, "posts", item.id),\n                );\n                if (postOptionGroup.length > 0) {\n                    setOptions((prevOptions) => [\n                        ...prevOptions\n                        {\n                            label: renderTitle("Posts"),\n                            options: postOptionGroup,\n                        },\n                    ]);\n                }\n            },\n        },\n    });\n\n    const { refetch: refetchCategories } = useList<ICategory>({\n        resource: "categories",\n        filters: [{ field: "q", operator: "contains", value }],\n        queryOptions: {\n            enabled: false,\n            onSuccess: (data) => {\n                const categoryOptionGroup = data.data.map((item) =>\n                    renderItem(item.title, "categories", item.id),\n                );\n                if (categoryOptionGroup.length > 0) {\n                    setOptions((prevOptions) => [\n                        ...prevOptions,\n                        {\n                            label: renderTitle("Categories"),\n                            options: categoryOptionGroup,\n                        },\n                    ]);\n                }\n            },\n        },\n    });\n\n    useEffect(() => {\n        setOptions([]);\n        refetchPosts();\n        refetchCategories();\n    }, [value]);\n\n    return (\n        <AntdLayout.Header\n            style={{\n                padding: "0px 24px",\n                backgroundColor: "#FFF",\n            }}\n        >\n            ...\n        </AntdLayout.Header>\n    );\n};\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"By doing the same implementation on your other resources, you can search for more than one resource with a value.")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)(d,{path:"search",mdxType:"CodeSandboxExample"}))}h.isMDXComponent=!0}}]);