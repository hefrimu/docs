"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3929],{4137:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>m});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),l=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},d=function(e){var r=l(e.components);return n.createElement(u.Provider,{value:r},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=l(t),f=o,m=p["".concat(u,".").concat(f)]||p[f]||c[f]||a;return t?n.createElement(m,s(s({ref:r},d),{},{components:t})):n.createElement(m,s({ref:r},d))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=f;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i[p]="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=t[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},8313:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=t(7462),o=(t(7294),t(4137));const a={},s="Resetting your Unraid password",i={unversionedId:"unraid-os/guides/reset-password",id:"unraid-os/guides/reset-password",title:"Resetting your Unraid password",description:"Whether you have forgotten your password, or are not using a password manager, forgetting your root password can be a problem and bring everything to a standstill.",source:"@site/docs/unraid-os/guides/reset-password.md",sourceDirName:"unraid-os/guides",slug:"/unraid-os/guides/reset-password",permalink:"/fr/unraid-os/guides/reset-password",draft:!1,editUrl:"https://github.com/unraid/docs/tree/main/docs/unraid-os/guides/reset-password.md",tags:[],version:"current",frontMatter:{},sidebar:"unraidSidebar",previous:{title:"Apple Time Machine",permalink:"/fr/unraid-os/guides/configuring-time-machine"},next:{title:"How To Setup Wake On LAN (WOL) for UNRAID",permalink:"/fr/unraid-os/guides/wol-setup-for-unraid"}},u={},l=[],d={toc:l},p="wrapper";function c(e){let{components:r,...t}=e;return(0,o.kt)(p,(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"resetting-your-unraid-password"},"Resetting your Unraid password"),(0,o.kt)("p",null,"Whether you have forgotten your password, or are not using a password manager, forgetting your root password can be a problem and bring everything to a standstill."),(0,o.kt)("p",null,"To reset your Unraid server password you'll need access to another computer:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Shutdown your server."),(0,o.kt)("li",{parentName:"ol"},"Plug your USB flash device into a Windows or Mac computer."),(0,o.kt)("li",{parentName:"ol"},"Open the USB device in Explorer / Finder."),(0,o.kt)("li",{parentName:"ol"},"Locate and delete the files ",(0,o.kt)("inlineCode",{parentName:"li"},"config/shadow")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"config/smbpasswd")," (do ",(0,o.kt)("strong",{parentName:"li"},"not")," delete ",(0,o.kt)("inlineCode",{parentName:"li"},"config/passwd"),"). This will reset all user passwords, including the root user, to blank entries."),(0,o.kt)("li",{parentName:"ol"},"Securely eject your USB device and connect it to the Unraid server again."),(0,o.kt)("li",{parentName:"ol"},"Boot up the Unraid server and it will ask you to set up a new password, as if you'd just completed a first boot of Unraid."),(0,o.kt)("li",{parentName:"ol"},"(Optional) If you have any user accounts configured in ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"Users > Shares Access"))," (or ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"Settings > Users > Shares Access")),"), select each user and enter a new password. Be sure to select ",(0,o.kt)("strong",{parentName:"li"},"Change")," after this.")),(0,o.kt)("p",null,"Your server passwords are reset and your server is secured."))}c.isMDXComponent=!0}}]);