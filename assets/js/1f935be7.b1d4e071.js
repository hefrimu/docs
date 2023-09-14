"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8523],{4137:(e,t,o)=>{o.d(t,{Zo:()=>h,kt:()=>f});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),d=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},h=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=d(o),m=a,f=u["".concat(l,".").concat(m)]||u[m]||c[m]||r;return o?n.createElement(f,i(i({ref:t},h),{},{components:o})):n.createElement(f,i({ref:t},h))}));function f(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var d=2;d<r;d++)i[d]=o[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},8846:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var n=o(7462),a=(o(7294),o(4137));const r={},i="Installation",s={unversionedId:"unraid-os/faq/installation",id:"unraid-os/faq/installation",title:"Installation",description:"I'm unable to get the USB Flash Creator to install Unraid to my flash device. What do I do?",source:"@site/docs/unraid-os/faq/installation.md",sourceDirName:"unraid-os/faq",slug:"/unraid-os/faq/installation",permalink:"/unraid-os/faq/installation",draft:!1,editUrl:"https://github.com/unraid/docs/tree/main/docs/unraid-os/faq/installation.md",tags:[],version:"current",frontMatter:{},sidebar:"unraidSidebar",previous:{title:"OS",permalink:"/unraid-os/faq/os-faq"},next:{title:"Licensing",permalink:"/unraid-os/faq/licensing-faq"}},l={},d=[{value:"I&#39;m unable to get the USB Flash Creator to install Unraid to my flash device. What do I do?",id:"im-unable-to-get-the-usb-flash-creator-to-install-unraid-to-my-flash-device-what-do-i-do",level:2},{value:"I can&#39;t seem to connect to the WebGUI using http://tower or http://tower.local. What do I do?",id:"i-cant-seem-to-connect-to-the-webgui-using-httptower-or-httptowerlocal-what-do-i-do",level:2},{value:"How do I change the hostname of my server?",id:"how-do-i-change-the-hostname-of-my-server",level:2},{value:"My flash drive is reporting an invalid GUID. What do I do?",id:"my-flash-drive-is-reporting-an-invalid-guid-what-do-i-do",level:2},{value:"The USB flash creator tool isn&#39;t detecting my flash drive. What do I do?",id:"the-usb-flash-creator-tool-isnt-detecting-my-flash-drive-what-do-i-do",level:2},{value:"I need to configure my system to boot using UEFI. How do I do this?",id:"i-need-to-configure-my-system-to-boot-using-uefi-how-do-i-do-this",level:2},{value:"I&#39;m having issues using my web browser with the Unraid WebGUI. What can I do?",id:"im-having-issues-using-my-web-browser-with-the-unraid-webgui-what-can-i-do",level:2},{value:"How Do I Extend My Unraid Trial?",id:"how-do-i-extend-my-unraid-trial",level:2}],h={toc:d},u="wrapper";function c(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,n.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"installation"},"Installation"),(0,a.kt)("h2",{id:"im-unable-to-get-the-usb-flash-creator-to-install-unraid-to-my-flash-device-what-do-i-do"},"I'm unable to get the USB Flash Creator to install Unraid to my flash device. What do I do?"),(0,a.kt)("p",null,"In the event the flash creator doesn't see or can't install Unraid to the device, it could be for one of many reasons. The simplest solution would be to try an alternate device, but if that is not an option for you, you can try installing Unraid using the legacy ",(0,a.kt)("a",{parentName:"p",href:"./manual-install-method"},"manual method documented here"),"."),(0,a.kt)("h2",{id:"i-cant-seem-to-connect-to-the-webgui-using-httptower-or-httptowerlocal-what-do-i-do"},"I can't seem to connect to the WebGUI using ",(0,a.kt)("a",{parentName:"h2",href:"http://tower"},"http://tower")," or ",(0,a.kt)("a",{parentName:"h2",href:"http://tower.local"},"http://tower.local"),". What do I do?"),(0,a.kt)("p",null,"Sometimes your local DNS server won't resolve by hostname and if that is the case here, you can try connecting to the server by IP address. You can discover the IP address of the server in multiple ways (by manually setting it during the creation of the flash device, reviewing your router/switch DHCP address pool, or by connecting a monitor to the server)."),(0,a.kt)("h2",{id:"how-do-i-change-the-hostname-of-my-server"},"How do I change the hostname of my server?"),(0,a.kt)("p",null,"You can change the name used for your Unraid server from the WebGUI by going to Settings-",">","System Settings-",">","Identification"),(0,a.kt)("h2",{id:"my-flash-drive-is-reporting-an-invalid-guid-what-do-i-do"},"My flash drive is reporting an invalid GUID. What do I do?"),(0,a.kt)("p",null,"The USB Flash device ",(0,a.kt)("strong",{parentName:"p"},"must")," be one that has a unique hardware GUID (serial number) built into it. Some manufacturers re-use the same GUID on the drives they manufacture, use a GUID that is all zeroes, or use an obviously made-up number. These drives are not able to be used as an Unraid boot device. Although it is difficult to generalize, drives from most major manufacturers ",(0,a.kt)("strong",{parentName:"p"},"do")," satisfy the requirement of having a unique GUID."),(0,a.kt)("p",null,"Note: SSDs, USB card readers, SD card readers, or other devices cannot be used to boot Unraid at this time."),(0,a.kt)("h2",{id:"the-usb-flash-creator-tool-isnt-detecting-my-flash-drive-what-do-i-do"},"The USB flash creator tool isn't detecting my flash drive. What do I do?"),(0,a.kt)("p",null,"In the event this tool doesn't work for you, we have additionally documented a manual process by which you can also create your flash\ndevice. As an FYI, the manual method only works on 32 GB devices or smaller."),(0,a.kt)("p",null,"USB flash devices and the Flash Creator tool are discussed further in this New Users Blog."),(0,a.kt)("h2",{id:"i-need-to-configure-my-system-to-boot-using-uefi-how-do-i-do-this"},"I need to configure my system to boot using UEFI. How do I do this?"),(0,a.kt)("p",null,"UEFI boot mode can be configured in 3 ways. When creating the flash device using the flash creator, there is an option to enable UEFI boot mode. After booting in legacy mode, you can change to UEFI boot from the Flash Device Settings page. And lastly, you can always rename the folder on the flash drive called ",(0,a.kt)("strong",{parentName:"p"},"efi~")," to ",(0,a.kt)("strong",{parentName:"p"},"efi")," (i.e. removing the trailing ",(0,a.kt)("strong",{parentName:"p"},"~")," character)."),(0,a.kt)("h2",{id:"im-having-issues-using-my-web-browser-with-the-unraid-webgui-what-can-i-do"},"I'm having issues using my web browser with the Unraid WebGUI. What can I do?"),(0,a.kt)("p",null,"Unraid's management interface (the WebGUI) is incompatible with most ad-blocker solutions. It is for this reason that we strongly suggest that users leveraging an ad-blocker in their browser first add the Unraid server to the ad-blocker whitelist to ensure the ad-blocker doesn't affect the WebGUI. Failure to do so is likely to result in parts of the WebGUI not displaying correctly."),(0,a.kt)("h2",{id:"how-do-i-extend-my-unraid-trial"},"How Do I Extend My Unraid Trial?"),(0,a.kt)("p",null,"Did you know that you can extend the ",(0,a.kt)("a",{parentName:"p",href:"https://unraid.net/download"},"30 day free trial"),' of Unraid? Hardware can be ill-suited. Things break. Life happens. We get it. To try out Unraid a little longer, once your original trial shows "expired" in the upper left of the header, stop the array.'),(0,a.kt)("p",null,"Next, go to the ",(0,a.kt)("strong",{parentName:"p"},"Registration")," page. A button shows up where you can select it for a 15 day extension. You can do this a total of two times before you must decide if you would like to purchase Unraid or not."),(0,a.kt)("admonition",{type:"important"},(0,a.kt)("p",{parentName:"admonition"},"You cannot change the USB flash device for Unraid trials if you wish to continue where you left off.")))}c.isMDXComponent=!0}}]);