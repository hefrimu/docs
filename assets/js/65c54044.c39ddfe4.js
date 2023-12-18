"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9385],{4137:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),u=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(r),c=n,h=d["".concat(l,".").concat(c)]||d[c]||m[c]||o;return r?a.createElement(h,s(s({ref:t},p),{},{components:r})):a.createElement(h,s({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:n,s[1]=i;for(var u=2;u<o;u++)s[u]=r[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},9529:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=r(7462),n=(r(7294),r(4137));const o={},s="Version 6.12.6 2023-12-01",i={unversionedId:"unraid-os/release-notes/6.12.6",id:"unraid-os/release-notes/6.12.6",title:"Version 6.12.6 2023-12-01",description:"Upgrade notes",source:"@site/docs/unraid-os/release-notes/6.12.6.md",sourceDirName:"unraid-os/release-notes",slug:"/unraid-os/release-notes/6.12.6",permalink:"/unraid-os/release-notes/6.12.6",draft:!1,editUrl:"https://github.com/unraid/docs/tree/main/docs/unraid-os/release-notes/6.12.6.md",tags:[],version:"current",frontMatter:{},sidebar:"unraidSidebar",previous:{title:"Version 6.12.5 2023-11-27",permalink:"/unraid-os/release-notes/6.12.5"},next:{title:"6.11.0",permalink:"/unraid-os/release-notes/6.11.0"}},l={},u=[{value:"Upgrade notes",id:"upgrade-notes",level:2},{value:"Known issues",id:"known-issues",level:3},{value:"Out of date plugins",id:"out-of-date-plugins",level:4},{value:"Call traces and crashes related to macvlan",id:"call-traces-and-crashes-related-to-macvlan",level:4},{value:"Network problems due to jumbo frames",id:"network-problems-due-to-jumbo-frames",level:4},{value:"Problems due to Realtek network cards",id:"problems-due-to-realtek-network-cards",level:4},{value:"Adaptec 7 Series HBA not compatible",id:"adaptec-7-series-hba-not-compatible",level:4},{value:"Other issues?",id:"other-issues",level:4},{value:"Rolling back",id:"rolling-back",level:3},{value:"Changes vs. 6.12.5",id:"changes-vs-6125",level:2},{value:"Bug fixes and improvements",id:"bug-fixes-and-improvements",level:3},{value:"Package updates",id:"package-updates",level:3},{value:"Linux kernel",id:"linux-kernel",level:3}],p={toc:u},d="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"version-6126-2023-12-01"},"Version 6.12.6 2023-12-01"),(0,n.kt)("h2",{id:"upgrade-notes"},"Upgrade notes"),(0,n.kt)("p",null,"This release includes bug fixes and an important patch release of OpenZFS. All users are encouraged to upgrade."),(0,n.kt)("h3",{id:"known-issues"},"Known issues"),(0,n.kt)("h4",{id:"out-of-date-plugins"},"Out of date plugins"),(0,n.kt)("p",null,"Out of date plugins can cause problems, we recommend they be kept current."),(0,n.kt)("h4",{id:"call-traces-and-crashes-related-to-macvlan"},"Call traces and crashes related to macvlan"),(0,n.kt)("p",null,"If you are getting call traces related to macvlan (or any unexplained crashes, really), as a first step we'd recommend navigating to ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Settings > Docker")),", switching to ",(0,n.kt)("strong",{parentName:"p"},"advanced")," view, and changing the ",(0,n.kt)("strong",{parentName:"p"},"Docker custom network type")," from ",(0,n.kt)("strong",{parentName:"p"},"macvlan")," to ",(0,n.kt)("strong",{parentName:"p"},"ipvlan"),". This is the default configuration that Unraid has shipped with since version 6.11.5 and should work for most systems."),(0,n.kt)("p",null,"Note that some users have reported issues with port forwarding from certain routers (Fritzbox) and reduced functionality with advanced network management tools (Ubiquity) when in ipvlan mode. If this affects you, see the alterate solution available since Unraid ",(0,n.kt)("a",{parentName:"p",href:"/unraid-os/release-notes/6.12.4#fix-for-macvlan-call-traces"},"6.12.4"),"."),(0,n.kt)("h4",{id:"network-problems-due-to-jumbo-frames"},"Network problems due to jumbo frames"),(0,n.kt)("p",null,"If you are having network issues of any kind, confirm that you haven't enabled jumbo frames. Navigate to ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Settings > Network Settings > eth0"))," and confirm the ",(0,n.kt)("strong",{parentName:"p"},"Desired MTU")," is 1500. For more information see the ",(0,n.kt)("a",{parentName:"p",href:"https://forums.unraid.net/topic/120220-fix-common-problems-more-information/page/2/#comment-1167702"},"Fix Common Problems warning for jumbo frames"),"."),(0,n.kt)("h4",{id:"problems-due-to-realtek-network-cards"},"Problems due to Realtek network cards"),(0,n.kt)("p",null,"Stock Realtek drivers in the latest Linux kernels are causing network and stability issues. If you are having issues and ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Tools > System Devices"))," shows that you have a Realtek ethernet controller, grab the part number shown and search Community Apps to see if there is a Realtek driver plugin for that device. For more information, see the ",(0,n.kt)("a",{parentName:"p",href:"https://forums.unraid.net/topic/141349-plugin-realtek-r8125-r8168-and-r81526-drivers/"},"support page for Realtek driver plugins"),"."),(0,n.kt)("h4",{id:"adaptec-7-series-hba-not-compatible"},"Adaptec 7 Series HBA not compatible"),(0,n.kt)("p",null,"If you have an Adaptec 7 Series HBA that uses the aacraid driver, we'd recommend staying on 6.12.4 for now as there is a regression in the driver in the latest kernels. For more information see this ",(0,n.kt)("a",{parentName:"p",href:"https://bugzilla.kernel.org/show_bug.cgi?id=217599"},"bug report in the Linux kernel")),(0,n.kt)("h4",{id:"other-issues"},"Other issues?"),(0,n.kt)("p",null,"We highly recommend installing the ",(0,n.kt)("strong",{parentName:"p"},"Fix Common Problems")," plugin as it will warn you of common configuration problems."),(0,n.kt)("p",null,"Having other crashes or stability issues? Navigate to ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Settings > Syslog Server"))," and enable ",(0,n.kt)("strong",{parentName:"p"},"Mirror syslog to flash"),". This will cause additional wear and tear on the flash drive but is useful in the short term for gathering logs after a crash.  After the next reboot, navigate to ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Tools > Diagnostics"))," and download your anonymized diagnostics (as of 6.12.5, diagnostics automatically include logs that were mirrored to the flash drive). Then start a new topic under ",(0,n.kt)("a",{parentName:"p",href:"https://forums.unraid.net/forum/55-general-support/"},"General Support")," and provide all the details of the issue. Once the issue is resolved, be sure to disable ",(0,n.kt)("strong",{parentName:"p"},"Mirror syslog to flash"),"."),(0,n.kt)("h3",{id:"rolling-back"},"Rolling back"),(0,n.kt)("p",null,"If rolling back earlier than 6.12.4, also see the ",(0,n.kt)("a",{parentName:"p",href:"/unraid-os/release-notes/6.12.4#rolling-back"},"6.12.4 release notes"),"."),(0,n.kt)("h2",{id:"changes-vs-6125"},"Changes vs. ",(0,n.kt)("a",{parentName:"h2",href:"/unraid-os/release-notes/6.12.5"},"6.12.5")),(0,n.kt)("h3",{id:"bug-fixes-and-improvements"},"Bug fixes and improvements"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"modprobe.d/zfs.conf: remove ",(0,n.kt)("inlineCode",{parentName:"p"},"zfs_dmu_offset_next_sync=0")," mitigation - no longer needed")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"network: Fix IPv6 static address assignment")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The workaround for ",(0,n.kt)("a",{parentName:"p",href:"/unraid-os/release-notes/6.12.0#crashes-related-to-i915-driver"},"crashes related to the i915 driver on Rocket Lake systems")," is no longer needed.\nAfter upgrading, feel free to open a webterminal and type this, then reboot:"),(0,n.kt)("p",{parentName:"li"},"  ",(0,n.kt)("inlineCode",{parentName:"p"},"rm /boot/config/modprobe.d/i915.conf")))),(0,n.kt)("h3",{id:"package-updates"},"Package updates"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"nvme-cli: version 2.6"),(0,n.kt)("li",{parentName:"ul"},"zfs: version 2.1.14")),(0,n.kt)("h3",{id:"linux-kernel"},"Linux kernel"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"version 6.1.64")))}m.isMDXComponent=!0}}]);