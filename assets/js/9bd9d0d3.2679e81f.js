"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[59880],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(g,r(r({ref:t},u),{},{components:n})):a.createElement(g,r({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},213:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>p});n(67294);var a=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const l={title:"Using kubectl logs - DevOps Guide",description:"Kubernetes pod logs show container operations and events in real-time. Containers in Kubernetes pods log their stdout and stderr streams. Debugging and monitoring Kubernetes cluster applications requires these logs.",slug:"kubectl-logs",authors:"muhammad_khabbab",tags:["kubernetes","docker"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-12-28-kubectl-logs/social.png",hide_table_of_contents:!1},s=void 0,c={permalink:"/blog/kubectl-logs",source:"@site/blog/2023-12-28-kubectl-logs.md",title:"Using kubectl logs - DevOps Guide",description:"Kubernetes pod logs show container operations and events in real-time. Containers in Kubernetes pods log their stdout and stderr streams. Debugging and monitoring Kubernetes cluster applications requires these logs.",date:"2023-12-28T00:00:00.000Z",formattedDate:"December 28, 2023",tags:[{label:"kubernetes",permalink:"/blog/tags/kubernetes"},{label:"docker",permalink:"/blog/tags/docker"}],readingTime:8.435,hasTruncateMarker:!1,authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],frontMatter:{title:"Using kubectl logs - DevOps Guide",description:"Kubernetes pod logs show container operations and events in real-time. Containers in Kubernetes pods log their stdout and stderr streams. Debugging and monitoring Kubernetes cluster applications requires these logs.",slug:"kubectl-logs",authors:"muhammad_khabbab",tags:["kubernetes","docker"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-12-28-kubectl-logs/social.png",hide_table_of_contents:!1},prevItem:{title:"Top Frameworks for Building Admin Panels and Dashboards in 2024",permalink:"/blog/admin-panels"},nextItem:{title:"How to Edit a crontab",permalink:"/blog/edit-crontab"},relatedPosts:[{title:"Kubernetes Terminated with exit code 1 error",description:'This article will help you troubleshoot the "Terminated with exit code 1" error in Kubernetes.',permalink:"/blog/kubernetes-terminated-with-exit-code-1",formattedDate:"January 31, 2024",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:10.295,date:"2024-01-31T00:00:00.000Z"},{title:"Kubernetes Statefulset vs Deployment with Examples",description:"We'll discuss the practical differences between Deployments and StatefulSets.",permalink:"/blog/kubernetes-statefulset-vs-deployment",formattedDate:"January 4, 2024",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:9.095,date:"2024-01-04T00:00:00.000Z"},{title:"How to deploy Postgres on Kubernetes",description:"This article will serve as a guide for installing PostgreSQL on Kubernetes, covering pre-requisites such as setting up Kubectl, Kubernetes clusters, and Docker.",permalink:"/blog/postgres-on-kubernetes",formattedDate:"January 22, 2024",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:9.045,date:"2024-01-22T00:00:00.000Z"}],authorPosts:[{title:"A Complete Guide to Listing Docker Containers",description:"We'll discuss the importance of listing docker containers, how to list running and stopped containers, listing the latest containers, and how to disable truncation of container names.",permalink:"/blog/docker-list-containers",formattedDate:"June 6, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:9.265,date:"2023-06-06T00:00:00.000Z"},{title:"Docker Swarm vs. Kubernetes - DevOps Guide",description:"We'll present a detailed comparison between both Docker swarm and Kubernetes.",permalink:"/blog/docker-swarm-vs-kubernetes",formattedDate:"February 14, 2024",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:8.645,date:"2024-02-14T00:00:00.000Z"},{title:"Kubectl Cheat Sheet - With Examples",description:"Kubectl is a very handy tool if you want to manage your applications deployed in Kubernetes.",permalink:"/blog/kubectl-cheat-sheet",formattedDate:"December 15, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:9.235,date:"2023-12-15T00:00:00.000Z"}]},u={authorsImageUrls:[void 0]},p=[{value:"Introduction",id:"introduction",level:2},{value:"Understanding Pod Logs",id:"understanding-pod-logs",level:2},{value:"Explanation of pod logs",id:"explanation-of-pod-logs",level:3},{value:"Difference between pod logs and system logs",id:"difference-between-pod-logs-and-system-logs",level:3},{value:"Prerequisites for Kubernetes Logging",id:"prerequisites-for-kubernetes-logging",level:2},{value:"Necessary tools: Kubernetes cluster and kubectl",id:"necessary-tools-kubernetes-cluster-and-kubectl",level:3},{value:"Ensure correct access rights and configuration",id:"ensure-correct-access-rights-and-configuration",level:3},{value:"Deploying a Sample Application",id:"deploying-a-sample-application",level:2},{value:"Deploying an application",id:"deploying-an-application",level:3},{value:"Create a Deployment YAML File",id:"create-a-deployment-yaml-file",level:4},{value:"Deploy using Kubectl",id:"deploy-using-kubectl",level:3},{value:"Basic Log Retrieval with kubectl",id:"basic-log-retrieval-with-kubectl",level:2},{value:"Using kubectl logs for basic log retrieval",id:"using-kubectl-logs-for-basic-log-retrieval",level:3},{value:"Advanced Log Retrieval Techniques",id:"advanced-log-retrieval-techniques",level:2},{value:"Retrieving logs from specific containers in a pod",id:"retrieving-logs-from-specific-containers-in-a-pod",level:3},{value:"Tailing logs",id:"tailing-logs",level:3},{value:"Filtering logs by time",id:"filtering-logs-by-time",level:3},{value:"Conclusion",id:"conclusion",level:2}],d={toc:p};function m(e){var{components:t}=e,n=r(e,["components"]);return(0,a.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){o(e,t,n[t])}))}return e}({},d,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Logging is essential for Kubernetes application monitoring and management. It gives valuable insights into application and Kubernetes infrastructure performance. Pods, nodes, and other system components generate logs in a Kubernetes cluster."),(0,a.kt)("p",null,"The distributed and dynamic Kubernetes environment makes logging difficult. Kubernetes pods can be scheduled on multiple nodes and have ephemeral containers, making centralized logging absolutely critical. Pod logs are retained when a container restarts or a pod is evicted or deleted."),(0,a.kt)("p",null,"Today we will focus on pod-level logs through the command ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl logs"),". This command greatly helps with debugging and monitoring. This article will reveal all the secrets of ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl logs")," through examples and practical use cases. Let's start with pod-level logging basics."),(0,a.kt)("h2",{id:"understanding-pod-logs"},"Understanding Pod Logs"),(0,a.kt)("h3",{id:"explanation-of-pod-logs"},"Explanation of pod logs"),(0,a.kt)("p",null,"Kubernetes pod logs show container operations and events in real-time. Containers in Kubernetes pods log their stdout and stderr streams. Debugging and monitoring Kubernetes cluster applications requires these logs."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Key Points:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Location"),": Pod logs are stored on the node where the pod is running."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Access"),": They can be accessed using the Kubernetes command-line tool ",(0,a.kt)("strong",{parentName:"li"},"kubectl"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Persistence"),": By default, these logs are not persistent; they are deleted when the pod is deleted.")),(0,a.kt)("p",null,"The example command to view pod's log is ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl logs [POD_NAME]"),". We will discuss this in detail in this article."),(0,a.kt)("h3",{id:"difference-between-pod-logs-and-system-logs"},"Difference between pod logs and system logs"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Pod Logs"),":")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Scope"),": Specific to a single pod."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Content"),": Includes output from the application or service running inside the pod."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Use Case"),": Debugging application-level issues, monitoring application performance, and troubleshooting."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Accessed Through"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"kubectl logs"),".")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"System Logs"),":")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Scope"),": Related to the Kubernetes node or the entire Kubernetes system."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Content"),": Includes logs from the kubelet, container runtime, and other system components."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Use Case"),": Diagnosing cluster-level issues, node-level problems, and monitoring the health of the Kubernetes infrastructure."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Accessed Through"),": System tools like ",(0,a.kt)("inlineCode",{parentName:"li"},"journalctl")," or log files in ",(0,a.kt)("inlineCode",{parentName:"li"},"/var/log/"),".\nAn example of a pod log is an error thrown by your application code. At the same time, a kubelet error on a node will be shown in the system log.")),(0,a.kt)("p",null,"Let's start with getting the list of the pods and see what details are displayed after executing the ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl")," command."),(0,a.kt)("div",{className:"centered-image"},(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-12-28-kubectl-logs/image1.png",alt:"Getting list of pods"})),(0,a.kt)("p",null,"As you can see, there is only one pod because it is a small application. Here is the description of each of the columns shown in this example screenshot."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Name"),": Name of the pod."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Ready"),": Number of containers in the pod that are ready. In our case there was only one container"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Status"),": Current status of the pod (e.g., Running, Pending, Failed)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Restart"),": Number of times the containers in the pod have restarted."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Age"),": How long has the pod been running? In our case it is more than 40 mins.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Expert tips:")," Note that excessive logging can consume storage. Also, in the production environment, keep an eye on logging the sensitive information about customers like their email addresses or their IP addresses, etc. Last but not least, ensure that the time is synchronized across your cluster to avoid confusion when correlating logs from different sources."),(0,a.kt)("h2",{id:"prerequisites-for-kubernetes-logging"},"Prerequisites for Kubernetes Logging"),(0,a.kt)("h3",{id:"necessary-tools-kubernetes-cluster-and-kubectl"},"Necessary tools: Kubernetes cluster and kubectl"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"1. Kubernetes Cluster:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Setup"),": You need an up-and-running Kubernetes cluster. This can be a Minikube cluster for local development, a cloud-based cluster like GKE (Google Kubernetes Engine), EKS (Elastic Kubernetes Service from AWS), or AKS (Azure Kubernetes Service), or a self-hosted Kubernetes."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Verification"),": Use ",(0,a.kt)("inlineCode",{parentName:"li"},"kubectl get nodes")," to verify that your cluster is up and running. You should see a list of available nodes.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"2. kubectl:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Installation"),": Ensure that ",(0,a.kt)("strong",{parentName:"li"},"kubectl"),", the Kubernetes command-line tool, is installed on your machine. It's the primary tool for communicating with your cluster."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Configuration"),": ",(0,a.kt)("strong",{parentName:"li"},"kubectl")," should be configured to interact with your Kubernetes cluster. This typically involves setting up a ",(0,a.kt)("strong",{parentName:"li"},"kubeconfig")," file, often located at ",(0,a.kt)("inlineCode",{parentName:"li"},"~/.kube/config"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Verification Command"),": Run ",(0,a.kt)("inlineCode",{parentName:"li"},"kubectl version")," to confirm it is installed and configured correctly. This command shows both the client and server versions. If your cluster is not working, it will not show the server version, but it will still show you the version information.",(0,a.kt)("div",{className:"centered-image"},(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-12-28-kubectl-logs/image2.png",alt:"Getting list of pods"})))),(0,a.kt)("p",null,"As you can see in the above image, both client and server versions are shown, which means you are good to go. Another command to verify your cluster's health is ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl cluster-info ."),"It will display information about the control node and services in the cluster, along with their IP addresses. It is a quick way to confirm that you can access the cluster and that it's operational."),(0,a.kt)("h3",{id:"ensure-correct-access-rights-and-configuration"},"Ensure correct access rights and configuration"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Access rights"),"\nKubernetes manages resource access with RBAC. Your user or service account must have log access and viewing permissions. View or edit roles at the namespace level and cluster-admin for cluster-level access are common logging roles. Forbidden or Access Denied errors may result from incorrect permissions."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Correct configuration of kubectl"),"\n",(0,a.kt)("strong",{parentName:"p"},"Contexts"),": In Kubernetes, you can switch between different clusters and namespaces using contexts. For example, switching between dev and production contexts. Make sure you are using the correct context for the cluster you plan to work with. Use ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl config get-contexts")," to list and ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl config use-context [context-name]")," to switch contexts."),(0,a.kt)("h2",{id:"deploying-a-sample-application"},"Deploying a Sample Application"),(0,a.kt)("h3",{id:"deploying-an-application"},"Deploying an application"),(0,a.kt)("h4",{id:"create-a-deployment-yaml-file"},"Create a Deployment YAML File"),(0,a.kt)("p",null,"First, create a YAML file that describes your deployment. This file specifies the desired state of your deployment, including the number of replicas, container images, ports, etc.\nHere's an example ",(0,a.kt)("inlineCode",{parentName:"p"},"helloapp-deployment.yaml"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  apiVersion: apps/v1\n    kind: Deployment\n    metadata:\n      name: hello-app\n      labels:\n        app: hello-app\n    spec:\n      replicas: 1\n      selector:\n        matchLabels:\n          app: hello-app\n      template:\n        metadata:\n          labels:\n")),(0,a.kt)("p",null,"This file will create a deployment named ",(0,a.kt)("inlineCode",{parentName:"p"},"hello-app")," with one pod."),(0,a.kt)("h3",{id:"deploy-using-kubectl"},"Deploy using Kubectl"),(0,a.kt)("p",null,"With the YAML file ready, use ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl")," to apply the deployment. Here is the command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl apply -f hello-app.yaml\n")),(0,a.kt)("p",null,"This command is instructing Kubernetes to create the deployment as described in the ",(0,a.kt)("em",{parentName:"p"},"hello-app.yaml")," file."),(0,a.kt)("div",{className:"centered-image"},(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-12-28-kubectl-logs/image3.png",alt:"Applying yaml file to pod"})),(0,a.kt)("p",null,"As you can see from the screenshot, the pod is successfully configured with this yaml file. You can also see a warning that kubectl will not be able to track the last applied configuration of the pod without the annotation. This means that if you make changes to the pod specs and then run kubectl apply, kubectl may not patch the pod specs correctly."),(0,a.kt)("h2",{id:"basic-log-retrieval-with-kubectl"},"Basic Log Retrieval with kubectl"),(0,a.kt)("h3",{id:"using-kubectl-logs-for-basic-log-retrieval"},"Using kubectl logs for basic log retrieval"),(0,a.kt)("p",null,"Let's retrieve logs of a pod through ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl logs <pod-name>")),(0,a.kt)("div",{className:"centered-image"},(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-12-28-kubectl-logs/image4.png",alt:"Getting pod logs"})),(0,a.kt)("p",null,"As you can see, all the logs for this particular pod are displayed. If you want to download these logs to a text file for analysis, then you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl logs my-pod > my-pod-logs.txt")," command to do that. The only possible error you might get when running this command is that the pod is not in a running state. In that case you will see an error."),(0,a.kt)("h2",{id:"advanced-log-retrieval-techniques"},"Advanced Log Retrieval Techniques"),(0,a.kt)("h3",{id:"retrieving-logs-from-specific-containers-in-a-pod"},"Retrieving logs from specific containers in a pod"),(0,a.kt)("p",null,"Remember the command to retrieve the logs for a pod ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl logs <pod-name>"),"? We know that each pod can have multiple running containers. Which container's logs will be printed when we execute the above-mentioned command? The answer is simple: it will show the primary (the first container) logs. The primary container is the one running your application, while other containers are considered helper containers. That brings us to the next point: how to to view the logs of a particular container. Let's see the command."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl logs <pod-name> -c <container-name>\n")),(0,a.kt)("p",null,"You need to specify both the pod name and the container name. Let's try this out."),(0,a.kt)("div",{className:"centered-image"},(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-12-28-kubectl-logs/image5.png",alt:"Getting pod's container log"})),(0,a.kt)("p",null,"Similarly, if you want to see the logs from the previous instance of the container, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"-previous")," flag like this ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl logs <pod-name> -c <container-name> -previous")," This is helpful where the container has restarted and you would like to view the logs before that restart."),(0,a.kt)("h3",{id:"tailing-logs"},"Tailing logs"),(0,a.kt)("p",null,"If you want to see the container logs in real-time on the go, you can the ",(0,a.kt)("inlineCode",{parentName:"p"},"-f")," flag like this ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl logs <pod-name> -c <container-name> -f")," It will keep your connection open and will display logs in real-time, until you terminate the execution through ",(0,a.kt)("inlineCode",{parentName:"p"},"Ctrl+C"),". It is useful for monitoring application behavior and identifying potential issues in real-time."),(0,a.kt)("h3",{id:"filtering-logs-by-time"},"Filtering logs by time"),(0,a.kt)("p",null,"Sometimes, you would like to see logs only for a particular time period, like the last hour. You can use the --since flag to do that. Here is an example below."),(0,a.kt)("div",{className:"centered-image"},(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-12-28-kubectl-logs/image6.png",alt:"Time specific container logs"})),(0,a.kt)("p",null,"You can also use 1d for one day and 1m for one minute."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Expert tips")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You can also get logs of multiple pods in one go. Just use label selectors with ",(0,a.kt)("inlineCode",{parentName:"li"},"kubectl logs -l")," to view logs from multiple pods simultaneously. For example, ",(0,a.kt)("inlineCode",{parentName:"li"},"kubectl logs -l appname=stagingapp")," would show logs from all pods labeled with ",(0,a.kt)("inlineCode",{parentName:"li"},"appname=stagingapp")),(0,a.kt)("li",{parentName:"ul"},"We had earlier mentioned that by default, you will be shown the logs of just one container of the pod. However, you can also see logs of all the containers of a pod using ",(0,a.kt)("inlineCode",{parentName:"li"},"kubectl logs <pod name> --all-containers=true")),(0,a.kt)("li",{parentName:"ul"},"If you work with multiple Kubernetes clusters at the same time, you can use ",(0,a.kt)("inlineCode",{parentName:"li"},"kubectl logs <pod name> --context=<context-name>")," to specify which cluster's logs you want to view.")),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"A pod is the basic unit of work in Kubernetes. In case of any issue in your application, the first thing you will do is check the logs of the pod. This guide has discussed the pods logs in detail. We have gone through different examples to show the result of kubectl commands to view pod's logs."),(0,a.kt)("p",null,"After reading this article, you will be fully equipped to troubleshoot any issues in your Kubernetes pod. Continue practicing the commands outlined in this article to gain practical experience and become an expert in Kubernetes."))}m.isMDXComponent=!0}}]);