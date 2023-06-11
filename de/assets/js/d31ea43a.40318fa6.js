"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8882],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>v});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),u=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=u(e.components);return n.createElement(l.Provider,{value:r},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(t),m=a,v=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return t?n.createElement(v,i(i({ref:r},p),{},{components:t})):n.createElement(v,i({ref:r},p))}));function v(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8530:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=t(7462),a=(t(7294),t(3905));const o={},i=void 0,s={unversionedId:"unraid-os/release-notes/6.11.3",id:"unraid-os/release-notes/6.11.3",title:"6.11.3",description:"Version 6.11.3 2022-11-08",source:"@site/docs/unraid-os/release-notes/6.11.3.md",sourceDirName:"unraid-os/release-notes",slug:"/unraid-os/release-notes/6.11.3",permalink:"/de/unraid-os/release-notes/6.11.3",draft:!1,editUrl:"https://github.com/unraid/docs/tree/main/docs/unraid-os/release-notes/6.11.3.md",tags:[],version:"current",frontMatter:{},sidebar:"unraidSidebar",previous:{title:"6.11.4",permalink:"/de/unraid-os/release-notes/6.11.4"},next:{title:"6.11.2",permalink:"/de/unraid-os/release-notes/6.11.2"}},l={},u=[{value:"Version 6.11.3 2022-11-08",id:"version-6113-2022-11-08",level:2},{value:"Management",id:"management",level:3},{value:"VM Manager",id:"vm-manager",level:3},{value:"Base Distro",id:"base-distro",level:3}],p={toc:u},c="wrapper";function d(e){let{components:r,...t}=e;return(0,a.kt)(c,(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"version-6113-2022-11-08"},"Version 6.11.3 2022-11-08"),(0,a.kt)("p",null,"This release is focused on bug fixes and minor improvements. In particular, we need to revert a base library due to a bug which\nprevents formatting devices >2TB in size."),(0,a.kt)("h3",{id:"management"},"Management"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Reverted 'libpopt.so.0.0.1' to workaround 'sgdisk' bug used to format devices larger than 2TB."),(0,a.kt)("li",{parentName:"ul"},"Fixed issue where description setting for 'root' user was not preserved across reboots."),(0,a.kt)("li",{parentName:"ul"},"Fix issue that sometimes information window opens empty.")),(0,a.kt)("h3",{id:"vm-manager"},"VM Manager"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Set correct values when edit for USB Boot and correct Share Selection."),(0,a.kt)("li",{parentName:"ul"},"Add Nic boot order.")),(0,a.kt)("h3",{id:"base-distro"},"Base Distro"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"gptfdisk: version 1.0.8 (revert from version 1.0.9)"),(0,a.kt)("li",{parentName:"ul"},"libXext: version 1.3.5"),(0,a.kt)("li",{parentName:"ul"},"libXinerama: version 1.1.5"),(0,a.kt)("li",{parentName:"ul"},"libdrm: version 2.4.114"),(0,a.kt)("li",{parentName:"ul"},"libedit: version 20221030_3.1"),(0,a.kt)("li",{parentName:"ul"},"mcelog: version 190"),(0,a.kt)("li",{parentName:"ul"},"ntfs-3g: version 2022.10.3"),(0,a.kt)("li",{parentName:"ul"},"openssl: version 1.1.1s"),(0,a.kt)("li",{parentName:"ul"},"openssl-solibs: version 1.1.1s"),(0,a.kt)("li",{parentName:"ul"},"pixman: version 0.42.2"),(0,a.kt)("li",{parentName:"ul"},"sessreg: version 1.1.3"),(0,a.kt)("li",{parentName:"ul"},"sudo: version 1.9.12p1"),(0,a.kt)("li",{parentName:"ul"},"xsetroot: version 1.1.3")))}d.isMDXComponent=!0}}]);