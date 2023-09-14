"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1932],{4137:(e,r,a)=>{a.d(r,{Zo:()=>d,kt:()=>m});var t=a(7294);function n(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function s(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?s(Object(a),!0).forEach((function(r){n(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function i(e,r){if(null==e)return{};var a,t,n=function(e,r){if(null==e)return{};var a,t,n={},s=Object.keys(e);for(t=0;t<s.length;t++)a=s[t],r.indexOf(a)>=0||(n[a]=e[a]);return n}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)a=s[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=t.createContext({}),u=function(e){var r=t.useContext(l),a=r;return e&&(a="function"==typeof e?e(r):o(o({},r),e)),a},d=function(e){var r=u(e.components);return t.createElement(l.Provider,{value:r},e.children)},h="mdxType",c={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},p=t.forwardRef((function(e,r){var a=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),h=u(a),p=n,m=h["".concat(l,".").concat(p)]||h[p]||c[p]||s;return a?t.createElement(m,o(o({ref:r},d),{},{components:a})):t.createElement(m,o({ref:r},d))}));function m(e,r){var a=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var s=a.length,o=new Array(s);o[0]=p;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i[h]="string"==typeof e?e:n,o[1]=i;for(var u=2;u<s;u++)o[u]=a[u];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}p.displayName="MDXCreateElement"},3976:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var t=a(7462),n=(a(7294),a(4137));const s={sidebar_position:1},o="Shares",i={unversionedId:"unraid-os/manual/shares/shares",id:"unraid-os/manual/shares/shares",title:"Shares",description:"Once you have assigned devices to Unraid and started the array, we recommend that you plan and create shares to simplify how you store data across multiple disks in the array.",source:"@site/docs/unraid-os/manual/shares/shares.md",sourceDirName:"unraid-os/manual/shares",slug:"/unraid-os/manual/shares/",permalink:"/de/unraid-os/manual/shares/",draft:!1,editUrl:"https://github.com/unraid/docs/tree/main/docs/unraid-os/manual/shares/shares.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"unraidSidebar",previous:{title:"Overview",permalink:"/de/unraid-os/manual/what-is-unraid"},next:{title:"User shares",permalink:"/de/unraid-os/manual/shares/user-shares"}},l={},u=[],d={toc:u},h="wrapper";function c(e){let{components:r,...a}=e;return(0,n.kt)(h,(0,t.Z)({},d,a,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"shares"},"Shares"),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Once you have assigned devices to Unraid and started the array, we recommend that you plan and create shares to simplify how you store data across multiple disks in the array.")),(0,n.kt)("p",null,"One key feature of Unraid is the management of shares. Shares represent folders or drives on your Unraid server that can be accessed over a network. You can add as many shares as you like to your Unraid server. For example, you may have a share for your photo library, another for movies, and yet another for important documents, each with their own separate access permissions and configurations. They can be made secure and their configuration determines how data is written and spread out across your array or named pool of drives."),(0,n.kt)("p",null,"There are two types of shares in Unraid:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/de/unraid-os/manual/shares/user-shares"},"User Shares")," that rely on Linux FUSE and represent folders in the overall file system."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/de/unraid-os/manual/shares/disk-shares"},"Disk Shares")," that rely on the drives' ",(0,n.kt)("a",{parentName:"li",href:"https://docs.unraid.net/unraid-os/manual/storage-management#creating-a-file-system-format"},"file system")," to share the disk as a whole.")),(0,n.kt)("p",null,"It is important to highlight that there are two different views of the same underlying file system. Every file/folder that appears under a user share will also appear under the disk share for the physical drive that is storing the file/folder."),(0,n.kt)("p",null,"When you first initialize your array, Unraid automatically creates a ",(0,n.kt)("a",{parentName:"p",href:"/de/unraid-os/manual/shares/user-shares#default-shares"},"handful of user shares"),". These are needed to support common plugins, containers, and virtual machines. You can create your own shares to store other data."),(0,n.kt)("p",null,"You manage shares from the ",(0,n.kt)("strong",{parentName:"p"},"Shares")," tab in Unraid. You enable or disable shares in ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Settings > Global Share Settings")),", with user shares being enabled by default."))}c.isMDXComponent=!0}}]);