"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3659],{9761:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>t,metadata:()=>o,toc:()=>a});var s=i(5893),r=i(1151);const t={},l=void 0,o={id:"unraid-os/release-notes/6.9.2",title:"6.9.2",description:"Version 6.9.2 2021-04-07",source:"@site/docs/unraid-os/release-notes/6.9.2.md",sourceDirName:"unraid-os/release-notes",slug:"/unraid-os/release-notes/6.9.2",permalink:"/fr/unraid-os/release-notes/6.9.2",draft:!1,unlisted:!1,editUrl:"https://github.com/unraid/docs/tree/main/docs/unraid-os/release-notes/6.9.2.md",tags:[],version:"current",frontMatter:{},sidebar:"unraidSidebar",previous:{title:"6.9.1",permalink:"/fr/unraid-os/release-notes/6.9.1"},next:{title:"FAQ",permalink:"/fr/category/faq"}},d={},a=[{value:"Version 6.9.2 2021-04-07",id:"version-692-2021-04-07",level:2},{value:"<strong>Failed Login Restrictions</strong>",id:"failed-login-restrictions",level:3},{value:"<strong>Driver Updates</strong>",id:"driver-updates",level:3},{value:"Change Log vs. Unraid OS 6.9.1",id:"change-log-vs-unraid-os-691",level:2},{value:"Base distro",id:"base-distro",level:4},{value:"Linux kernel",id:"linux-kernel",level:4},{value:"Management",id:"management",level:4}];function c(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"version-692-2021-04-07",children:"Version 6.9.2 2021-04-07"}),"\n",(0,s.jsx)(n.h3,{id:"failed-login-restrictions",children:(0,s.jsx)(n.strong,{children:"Failed Login Restrictions"})}),"\n",(0,s.jsxs)(n.p,{children:["For webGUI login you now get 3 login attempts per IP address before a\n15-minute cool off is enforced. Further, the timestamp of the last three\nfailed login attempts per IP address are stored in files located in\n",(0,s.jsx)(n.code,{children:"/var/log/pwfail/<ip-address>"}),". Note this only applies to\nwebGUI login, not ssh or telnet."]}),"\n",(0,s.jsx)(n.h3,{id:"driver-updates",children:(0,s.jsx)(n.strong,{children:"Driver Updates"})}),"\n",(0,s.jsxs)(n.p,{children:["We updated the Nvidia vendor GPU driver to version 465.19.01. Use this\n",(0,s.jsx)(n.a,{href:"https://raw.githubusercontent.com/ich777/unraid-nvidia-driver/master/nvidia-driver.plg",children:"handy\nplugin"}),"\nby Community Developer\n",(0,s.jsx)(n.a,{href:"https://forums.unraid.net/profile/72388-ich777/",children:"@ich777"})," to\nfacilitate installing the correct driver."]}),"\n",(0,s.jsx)(n.h2,{id:"change-log-vs-unraid-os-691",children:"Change Log vs. Unraid OS 6.9.1"}),"\n",(0,s.jsx)(n.h4,{id:"base-distro",children:"Base distro"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"docker: version 20.10.5"}),"\n",(0,s.jsx)(n.li,{children:"fuse3: version 3.10.2"}),"\n",(0,s.jsx)(n.li,{children:"nginx: version 1.19.9"}),"\n",(0,s.jsx)(n.li,{children:"samba: verson 4.12.14 (CVE-2020-27840 CVE-2020-27840)"}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"linux-kernel",children:"Linux kernel"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"version 5.10.28"}),"\n",(0,s.jsxs)(n.li,{children:["include all CONFIG",(0,s.jsx)(n.em,{children:"NF"}),"* modules"]}),"\n",(0,s.jsx)(n.li,{children:"oot: realtek r8125: version 9.005.01"}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"management",children:"Management"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"emhttpd: detect out-of-band device spin-up"}),"\n",(0,s.jsx)(n.li,{children:"shfs: add 'copy_file_range()' support"}),"\n",(0,s.jsx)(n.li,{children:"shfs: fix 'mknod' creating a fifo"}),"\n",(0,s.jsx)(n.li,{children:"webgui: login: implement max 3 failed login attempts per 15 minute interval"}),"\n",(0,s.jsx)(n.li,{children:"webgui: Fix links on notifications not being present if in summary display"}),"\n",(0,s.jsx)(n.li,{children:"webgui: Plugins: Move incompatible plugins to ../plugins-error"}),"\n",(0,s.jsx)(n.li,{children:"webgui: Fix missing CSRF when deleting pool"}),"\n",(0,s.jsx)(n.li,{children:"webgui: Fix .sweet-alert color"}),"\n",(0,s.jsx)(n.li,{children:"webgui: Translations adjustments"}),"\n",(0,s.jsx)(n.li,{children:"webgui: Diagnostics: Prevent double clicks on download button"}),"\n",(0,s.jsx)(n.li,{children:"webgui: Fix default usage thresholds not sending notification"}),"\n",(0,s.jsx)(n.li,{children:"webgui: Fix CSS span.select background-color"}),"\n",(0,s.jsx)(n.li,{children:"webgui: Make diagnostics messages left aligned"}),"\n",(0,s.jsx)(n.li,{children:"webgui: Fixed javascript error in DeviceInfo.page preventing\nsettings to be saved"}),"\n",(0,s.jsx)(n.li,{children:"webgui: Update DeviceInfo.page"}),"\n",(0,s.jsx)(n.li,{children:"webgui: Prevent autofilling of passwords on containers"}),"\n",(0,s.jsx)(n.li,{children:"webgui: Docker: Do not allow CPU pinning if no template present"}),"\n",(0,s.jsx)(n.li,{children:"webgui: Fix .sweet-alert .sa-icon color, * in the CSS"}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>l});var s=i(7294);const r={},t=s.createContext(r);function l(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);