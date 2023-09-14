"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8330],{4137:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=u(r),f=o,m=c["".concat(l,".").concat(f)]||c[f]||p[f]||a;return r?n.createElement(m,i(i({ref:t},d),{},{components:r})):n.createElement(m,i({ref:t},d))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9069:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var n=r(7462),o=(r(7294),r(4137));const a={sidebar_position:4},i="Advanced BIOS configuration",s={unversionedId:"unraid-os/getting-started/advanced-bios-config",id:"unraid-os/getting-started/advanced-bios-config",title:"Advanced BIOS configuration",description:"Booting Unraid OS",source:"@site/docs/unraid-os/getting-started/advanced-bios-config.md",sourceDirName:"unraid-os/getting-started",slug:"/unraid-os/getting-started/advanced-bios-config",permalink:"/es/unraid-os/getting-started/advanced-bios-config",draft:!1,editUrl:"https://github.com/unraid/docs/tree/main/docs/unraid-os/getting-started/advanced-bios-config.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"unraidSidebar",previous:{title:"Manual install method",permalink:"/es/unraid-os/getting-started/manual-install-method"},next:{title:"Important considerations",permalink:"/es/unraid-os/getting-started/considerations"}},l={},u=[],d={toc:u},c="wrapper";function p(e){let{components:t,...a}=e;return(0,o.kt)(c,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"advanced-bios-configuration"},"Advanced BIOS configuration"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Booting Unraid OS",src:r(3258).Z,width:"300",height:"187"})),(0,o.kt)("p",null,"Configuring your motherboard BIOS (as well as your storage controller) correctly is an important step to ensuring a solid experience using Unraid. The basic guidelines are as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You must configure the USB flash device as the primary boot device (most motherboards support this)."),(0,o.kt)("li",{parentName:"ul"},"Your storage controller should support AHCI and SATA connections and be configured in standard HBA mode (not RAID mode)."),(0,o.kt)("li",{parentName:"ul"},"Enable any and all virtualization support in your BIOS if your hardware supports it or you wish to create virtual machines (Intel\nVT-x / AMD-V)."),(0,o.kt)("li",{parentName:"ul"},"Enable IOMMU support in your BIOS if your hardware supports it or you wish to assign physical PCI devices (GPUs, media controllers, USB controllers, etc.) to virtual machines."),(0,o.kt)("li",{parentName:"ul"},"Avoid using front panel USB ports in favor of ports available directly on the motherboard I/O panel.")),(0,o.kt)("p",null,"If after configuring your BIOS you cannot get Unraid to boot properly, try the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Set the boot order to as follows: Forced-FDD, USB-HDD, USB-ZIP"),(0,o.kt)("li",{parentName:"ul"},"Try disabling USB 2.0/3.0 support (this will default to USB 1.1)."),(0,o.kt)("li",{parentName:"ul"},"Try switching any Fast Boot feature on or off ."),(0,o.kt)("li",{parentName:"ul"},"Try switching USB keyboard support on or off .")),(0,o.kt)("p",null,"If you are still unable to boot the OS, please post a message in our ",(0,o.kt)("a",{parentName:"p",href:"https://forums.unraid.net/forum/index.php?board=71.0"},"general support")," forum."),(0,o.kt)("admonition",{type:"important"},(0,o.kt)("p",{parentName:"admonition"},"Many motherboards support only up to 12 hard drives for purposes of boot selection. This is normally not an issue for Unraid OS. However, if your Flash device is recognized by the BIOS as a hard drive, you may not be able to boot from the Flash after installing your 12th \u201creal\u201d hard drive. To avoid this, if possible set up your BIOS so that the Flash is treated as a removable device.")))}p.isMDXComponent=!0},3258:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Booting-9977af57bbf1e65a60d9b3af01cece07.jpg"}}]);