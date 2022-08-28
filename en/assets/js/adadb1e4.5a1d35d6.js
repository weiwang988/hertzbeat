"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[1217],{4137:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),d=i,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||a;return r?n.createElement(f,o(o({ref:t},s),{},{components:r})):n.createElement(f,o({ref:t},s))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},1938:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(7462),i=(r(7294),r(4137));const a={id:"guide",title:"Help center",sidebar_label:"Help center"},o=void 0,l={unversionedId:"help/guide",id:"help/guide",title:"Help center",description:"TanCloud - Friendly cloud monitoring system",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/help/guide.md",sourceDirName:"help",slug:"/help/guide",permalink:"/en/docs/help/guide",draft:!1,editUrl:"https://github.com/dromara/hertzbeat/edit/master/home/i18n/en/docusaurus-plugin-content-docs/current/help/guide.md",tags:[],version:"current",frontMatter:{id:"guide",title:"Help center",sidebar_label:"Help center"},sidebar:"docs",previous:{title:"SSH Protocol Custom Monitoring",permalink:"/en/docs/advanced/extend-ssh"},next:{title:"Website monitoring",permalink:"/en/docs/help/website"}},c={},p=[{value:"\ud83d\udd2c Monitoring services",id:"-monitoring-services",level:2},{value:"Application service monitoring",id:"application-service-monitoring",level:3},{value:"Database monitoring",id:"database-monitoring",level:3},{value:"Operating system monitoring",id:"operating-system-monitoring",level:3},{value:"\ud83d\udca1 Alarm service",id:"-alarm-service",level:2},{value:"Alarm center",id:"alarm-center",level:3},{value:"Alarm configuration",id:"alarm-configuration",level:3},{value:"Alarm notification",id:"alarm-notification",level:3}],s={toc:p};function m(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"TanCloud - Friendly cloud monitoring system",(0,i.kt)("br",{parentName:"p"}),"\n","Help documents and auxiliary information during use ")),(0,i.kt)("h2",{id:"-monitoring-services"},"\ud83d\udd2c Monitoring services"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Regularly collect and monitor the performance Metrics exposed by end-to-end services, provide visual interfaces, and process data for alarm and other service scheduling.",(0,i.kt)("br",{parentName:"p"}),"\n","Planned monitoring type\uff1aapplication service, database, operating system, cloud native, open source middleware.")),(0,i.kt)("h3",{id:"application-service-monitoring"},"Application service monitoring"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"website"},"Website monitoring"),"  ","\u2003","\u2003","\u2003","\u2003","  ",(0,i.kt)("a",{parentName:"p",href:"api"},"HTTP API")," ","\u2003","\u2003","\u2003","\u2003"," ",(0,i.kt)("a",{parentName:"p",href:"ping"},"PING Connectivity")," ","\u2003","\u2003","\u2003","\u2003"," ",(0,i.kt)("a",{parentName:"p",href:"port"},"Port availability")," ","\u2003","\u2003","\u2003","\u2003"," ",(0,i.kt)("a",{parentName:"p",href:"fullsite"},"Full site monitoring")),(0,i.kt)("h3",{id:"database-monitoring"},"Database monitoring"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"mysql"},"MYSQL database monitoring")," ","\u2003","\u2003","\u2003","\u2003"," ",(0,i.kt)("a",{parentName:"p",href:"mariadb"},"MariaDB database monitoring"),"  ","\u2003","\u2003","\u2003","\u2003"," ",(0,i.kt)("a",{parentName:"p",href:"postgresql"},"PostgreSQL database monitoring"),"  ","\u2003","\u2003","\u2003","\u2003"," ",(0,i.kt)("a",{parentName:"p",href:"sqlserver"},"SqlServer database monitoring")," ","\u2003","\u2003","\u2003","\u2003"," ",(0,i.kt)("a",{parentName:"p",href:"oracle"},"Oracle database monitoring"),"         "),(0,i.kt)("h3",{id:"operating-system-monitoring"},"Operating system monitoring"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"linux"},"Linux operating system monitoring")," ","\u2003","\u2003","\u2003","\u2003"," ",(0,i.kt)("a",{parentName:"p",href:"windows"},"Windows operating system monitoring")," ","\u2003","\u2003","\u2003","\u2003"," ",(0,i.kt)("a",{parentName:"p",href:"ubuntu"},"Ubuntu operating system monitoring")," ","\u2003","\u2003","\u2003","\u2003"," ",(0,i.kt)("a",{parentName:"p",href:"centos"},"Centos operating system monitoring")," ","\u2003","\u2003","\u2003","\u2003"),(0,i.kt)("h2",{id:"-alarm-service"},"\ud83d\udca1 Alarm service"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"More liberal threshold alarm configuration (calculation expression), supports email, SMS, WebHook, DingDing, WeChat and FeiShu for alarm notification.\nThe positioning of alarm service is to trigger the threshold accurately and timely, and the alarm notification can be reached in time.")),(0,i.kt)("h3",{id:"alarm-center"},"Alarm center"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The triggered alarm information center provides query and filtering of alarm deletion, alarm processing, mark unprocessed, alarm level status, etc.")),(0,i.kt)("h3",{id:"alarm-configuration"},"Alarm configuration"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The Metric threshold configuration provides the Metric threshold configuration in the form of expression, which can set the alarm level, trigger times, alarm notification template and whether it is enabled, correlation monitoring and other functions.")),(0,i.kt)("p",null,"More details see ",(0,i.kt)("a",{parentName:"p",href:"alert_threshold"},"threshold alarm")," ","\u2003","\u2003","\u2003","\u2003"," ",(0,i.kt)("a",{parentName:"p",href:"alert_threshold_expr"},"Threshold expression"),"   "),(0,i.kt)("h3",{id:"alarm-notification"},"Alarm notification"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"After triggering the alarm information, in addition to being displayed in the alarm center list, it can also be notified to the designated recipient in a specified way (e-mail, wechat and FeiShu etc.)",(0,i.kt)("br",{parentName:"p"}),"\n","Alarm notification provides different types of notification methods, such as email recipient, enterprise wechat robot notification, DingDing robot notification, and FeiShu robot notification.",(0,i.kt)("br",{parentName:"p"}),"\n","After setting the receiver, you need to set the associated alarm notification strategy to configure which alarm information is sent to which receiver.   ")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"alert_email"},"Configure email notification"),"  ","\u2003","\u2003","\u2003","\u2003","  ",(0,i.kt)("a",{parentName:"p",href:"alert_webhook"},"Configure WebHook notification")," ","\u2003","\u2003","\u2003","\u2003"," ",(0,i.kt)("a",{parentName:"p",href:"alert_wework"},"Configure enterprise wechat robot notification"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("a",{parentName:"p",href:"alert_dingtalk"},"Configure DingDing robot notification")," ","\u2003","\u2003","\u2003","\u2003"," ",(0,i.kt)("a",{parentName:"p",href:"alert_feishu"},"Configure FeiShu robot notification")))}m.isMDXComponent=!0}}]);