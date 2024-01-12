"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9385],{2243:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var r=s(5893),t=s(1151);const i={},o="Version 6.12.6 2023-12-01",a={id:"unraid-os/release-notes/6.12.6",title:"Version 6.12.6 2023-12-01",description:"Upgrade notes",source:"@site/docs/unraid-os/release-notes/6.12.6.md",sourceDirName:"unraid-os/release-notes",slug:"/unraid-os/release-notes/6.12.6",permalink:"/fr/unraid-os/release-notes/6.12.6",draft:!1,unlisted:!1,editUrl:"https://github.com/unraid/docs/tree/main/docs/unraid-os/release-notes/6.12.6.md",tags:[],version:"current",frontMatter:{},sidebar:"unraidSidebar",previous:{title:"Version 6.12.5 2023-11-27",permalink:"/fr/unraid-os/release-notes/6.12.5"},next:{title:"6.11.0",permalink:"/fr/unraid-os/release-notes/6.11.0"}},l={},d=[{value:"Upgrade notes",id:"upgrade-notes",level:2},{value:"Known issues",id:"known-issues",level:3},{value:"Out of date plugins",id:"out-of-date-plugins",level:4},{value:"Call traces and crashes related to macvlan",id:"call-traces-and-crashes-related-to-macvlan",level:4},{value:"Network problems due to jumbo frames",id:"network-problems-due-to-jumbo-frames",level:4},{value:"Problems due to Realtek network cards",id:"problems-due-to-realtek-network-cards",level:4},{value:"Adaptec 7 Series HBA not compatible",id:"adaptec-7-series-hba-not-compatible",level:4},{value:"Other issues?",id:"other-issues",level:4},{value:"Rolling back",id:"rolling-back",level:3},{value:"Changes vs. 6.12.5",id:"changes-vs-6125",level:2},{value:"Bug fixes and improvements",id:"bug-fixes-and-improvements",level:3},{value:"Package updates",id:"package-updates",level:3},{value:"Linux kernel",id:"linux-kernel",level:3}];function c(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"version-6126-2023-12-01",children:"Version 6.12.6 2023-12-01"}),"\n",(0,r.jsx)(n.h2,{id:"upgrade-notes",children:"Upgrade notes"}),"\n",(0,r.jsx)(n.p,{children:"This release includes bug fixes and an important patch release of OpenZFS. All users are encouraged to upgrade."}),"\n",(0,r.jsx)(n.h3,{id:"known-issues",children:"Known issues"}),"\n",(0,r.jsx)(n.h4,{id:"out-of-date-plugins",children:"Out of date plugins"}),"\n",(0,r.jsx)(n.p,{children:"Out of date plugins can cause problems, we recommend they be kept current."}),"\n",(0,r.jsx)(n.h4,{id:"call-traces-and-crashes-related-to-macvlan",children:"Call traces and crashes related to macvlan"}),"\n",(0,r.jsxs)(n.p,{children:["If you are getting call traces related to macvlan (or any unexplained crashes, really), as a first step we'd recommend navigating to ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Settings > Docker"})}),", switching to ",(0,r.jsx)(n.strong,{children:"advanced"})," view, and changing the ",(0,r.jsx)(n.strong,{children:"Docker custom network type"})," from ",(0,r.jsx)(n.strong,{children:"macvlan"})," to ",(0,r.jsx)(n.strong,{children:"ipvlan"}),". This is the default configuration that Unraid has shipped with since version 6.11.5 and should work for most systems."]}),"\n",(0,r.jsxs)(n.p,{children:["Note that some users have reported issues with port forwarding from certain routers (Fritzbox) and reduced functionality with advanced network management tools (Ubiquity) when in ipvlan mode. If this affects you, see the alterate solution available since Unraid ",(0,r.jsx)(n.a,{href:"/fr/unraid-os/release-notes/6.12.4#fix-for-macvlan-call-traces",children:"6.12.4"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"network-problems-due-to-jumbo-frames",children:"Network problems due to jumbo frames"}),"\n",(0,r.jsxs)(n.p,{children:["If you are having network issues of any kind, confirm that you haven't enabled jumbo frames. Navigate to ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Settings > Network Settings > eth0"})})," and confirm the ",(0,r.jsx)(n.strong,{children:"Desired MTU"})," is 1500. For more information see the ",(0,r.jsx)(n.a,{href:"https://forums.unraid.net/topic/120220-fix-common-problems-more-information/page/2/#comment-1167702",children:"Fix Common Problems warning for jumbo frames"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"problems-due-to-realtek-network-cards",children:"Problems due to Realtek network cards"}),"\n",(0,r.jsxs)(n.p,{children:["Stock Realtek drivers in the latest Linux kernels are causing network and stability issues. If you are having issues and ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Tools > System Devices"})})," shows that you have a Realtek ethernet controller, grab the part number shown and search Community Apps to see if there is a Realtek driver plugin for that device. For more information, see the ",(0,r.jsx)(n.a,{href:"https://forums.unraid.net/topic/141349-plugin-realtek-r8125-r8168-and-r81526-drivers/",children:"support page for Realtek driver plugins"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"adaptec-7-series-hba-not-compatible",children:"Adaptec 7 Series HBA not compatible"}),"\n",(0,r.jsxs)(n.p,{children:["If you have an Adaptec 7 Series HBA that uses the aacraid driver, we'd recommend staying on 6.12.4 for now as there is a regression in the driver in the latest kernels. For more information see this ",(0,r.jsx)(n.a,{href:"https://bugzilla.kernel.org/show_bug.cgi?id=217599",children:"bug report in the Linux kernel"})]}),"\n",(0,r.jsx)(n.h4,{id:"other-issues",children:"Other issues?"}),"\n",(0,r.jsxs)(n.p,{children:["We highly recommend installing the ",(0,r.jsx)(n.strong,{children:"Fix Common Problems"})," plugin as it will warn you of common configuration problems."]}),"\n",(0,r.jsxs)(n.p,{children:["Having other crashes or stability issues? Navigate to ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Settings > Syslog Server"})})," and enable ",(0,r.jsx)(n.strong,{children:"Mirror syslog to flash"}),". This will cause additional wear and tear on the flash drive but is useful in the short term for gathering logs after a crash.  After the next reboot, navigate to ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Tools > Diagnostics"})})," and download your anonymized diagnostics (as of 6.12.5, diagnostics automatically include logs that were mirrored to the flash drive). Then start a new topic under ",(0,r.jsx)(n.a,{href:"https://forums.unraid.net/forum/55-general-support/",children:"General Support"})," and provide all the details of the issue. Once the issue is resolved, be sure to disable ",(0,r.jsx)(n.strong,{children:"Mirror syslog to flash"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"rolling-back",children:"Rolling back"}),"\n",(0,r.jsxs)(n.p,{children:["If rolling back earlier than 6.12.4, also see the ",(0,r.jsx)(n.a,{href:"/fr/unraid-os/release-notes/6.12.4#rolling-back",children:"6.12.4 release notes"}),"."]}),"\n",(0,r.jsxs)(n.h2,{id:"changes-vs-6125",children:["Changes vs. ",(0,r.jsx)(n.a,{href:"/fr/unraid-os/release-notes/6.12.5",children:"6.12.5"})]}),"\n",(0,r.jsx)(n.h3,{id:"bug-fixes-and-improvements",children:"Bug fixes and improvements"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["modprobe.d/zfs.conf: remove ",(0,r.jsx)(n.code,{children:"zfs_dmu_offset_next_sync=0"})," mitigation - no longer needed"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"network: Fix IPv6 static address assignment"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["The workaround for ",(0,r.jsx)(n.a,{href:"/fr/unraid-os/release-notes/6.12.0#crashes-related-to-i915-driver",children:"crashes related to the i915 driver on Rocket Lake systems"})," is no longer needed.\nAfter upgrading, feel free to open a webterminal and type this, then reboot:"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"rm /boot/config/modprobe.d/i915.conf"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"package-updates",children:"Package updates"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"nvme-cli: version 2.6"}),"\n",(0,r.jsx)(n.li,{children:"zfs: version 2.1.14"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"linux-kernel",children:"Linux kernel"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"version 6.1.64"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>o});var r=s(7294);const t={},i=r.createContext(t);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);