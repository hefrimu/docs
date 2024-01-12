"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8710],{2433:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>t,toc:()=>d});var i=s(5893),r=s(1151);const l={},o="Version 6.12.5 2023-11-27",t={id:"unraid-os/release-notes/6.12.5",title:"Version 6.12.5 2023-11-27",description:"Upgrade notes",source:"@site/docs/unraid-os/release-notes/6.12.5.md",sourceDirName:"unraid-os/release-notes",slug:"/unraid-os/release-notes/6.12.5",permalink:"/zh/unraid-os/release-notes/6.12.5",draft:!1,unlisted:!1,editUrl:"https://github.com/unraid/docs/tree/main/docs/unraid-os/release-notes/6.12.5.md",tags:[],version:"current",frontMatter:{},sidebar:"unraidSidebar",previous:{title:"Version 6.12.4 2023-08-31",permalink:"/zh/unraid-os/release-notes/6.12.4"},next:{title:"Version 6.12.6 2023-12-01",permalink:"/zh/unraid-os/release-notes/6.12.6"}},a={},d=[{value:"Upgrade notes",id:"upgrade-notes",level:2},{value:"Known issues",id:"known-issues",level:3},{value:"Rolling back",id:"rolling-back",level:3},{value:"Changes vs. 6.12.4",id:"changes-vs-6124",level:2},{value:"Bug fixes and improvements",id:"bug-fixes-and-improvements",level:3},{value:"Package updates",id:"package-updates",level:3},{value:"Linux kernel",id:"linux-kernel",level:3}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"version-6125-2023-11-27",children:"Version 6.12.5 2023-11-27"}),"\n",(0,i.jsx)(n.h2,{id:"upgrade-notes",children:"Upgrade notes"}),"\n",(0,i.jsx)(n.p,{children:"This release includes bug fixes and security updates.  All users are encouraged to upgrade."}),"\n",(0,i.jsx)(n.h3,{id:"known-issues",children:"Known issues"}),"\n",(0,i.jsxs)(n.p,{children:["There is a mitigation included for a ",(0,i.jsx)(n.a,{href:"https://github.com/openzfs/zfs/issues/15526",children:"ZFS Data Corruption"})," issue.  This is accomplished\nby including this option in the default ",(0,i.jsx)(n.code,{children:"/etc/modprobe.d/zfs.conf"})," file:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"zfs_dmu_offset_next_sync=0"})}),"\n",(0,i.jsxs)(n.p,{children:["Please see the ",(0,i.jsx)(n.a,{href:"/zh/unraid-os/release-notes/6.12.0#known-issues",children:"6.12.0 release notes"})," for general known issues."]}),"\n",(0,i.jsx)(n.h3,{id:"rolling-back",children:"Rolling back"}),"\n",(0,i.jsxs)(n.p,{children:["If rolling back earlier than 6.12.4, also see the ",(0,i.jsx)(n.a,{href:"/zh/unraid-os/release-notes/6.12.4#rolling-back",children:"6.12.4 release notes"}),"."]}),"\n",(0,i.jsxs)(n.h2,{id:"changes-vs-6124",children:["Changes vs. ",(0,i.jsx)(n.a,{href:"/zh/unraid-os/release-notes/6.12.4",children:"6.12.4"})]}),"\n",(0,i.jsx)(n.h3,{id:"bug-fixes-and-improvements",children:"Bug fixes and improvements"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Replace very old 'MemTest86+' with Memtest86+ version: 6.20","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["There are also ",(0,i.jsx)(n.a,{href:"https://github.com/memtest86plus/memtest86plus#boot-options",children:"Boot Options"})," available."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"When 'mirror syslog to flash' is enabled, view syslog-previous at Tools -> Syslog, and in diagnostics"}),"\n",(0,i.jsxs)(n.li,{children:["Docker:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Docker containers were not always stopping, preventing docker from unmounting"}),"\n",(0,i.jsx)(n.li,{children:"Docker containers using IPv6 on custom networks were unable to start"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"emhttpd: if User Shares not enabled, update_cron was not called during array Start sequence"}),"\n",(0,i.jsx)(n.li,{children:"rc.nginx stop - force nginx to stop"}),"\n",(0,i.jsx)(n.li,{children:"shfs: Allocation method was not working correctly if 6 or more disks were specified in the 'include' mask"}),"\n",(0,i.jsxs)(n.li,{children:["webgui:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Downgrade.php was not updated for 6.12"}),"\n",(0,i.jsx)(n.li,{children:"always show ipvlan / macvlan setting"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"ZFS: use 'zfs import -f' to ensure pools from other systems get imported"}),"\n",(0,i.jsx)(n.li,{children:"prevent auto-spindown of unformatted devices"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"package-updates",children:"Package updates"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"curl: version 8.4.0 (CVE-2023-38546 CVE-2023-38545 CVE-2023-38039)"}),"\n",(0,i.jsx)(n.li,{children:"firefox: version 119.0.r20231106151204 (AppImage)"}),"\n",(0,i.jsx)(n.li,{children:"intel-microcode: version 20231114"}),"\n",(0,i.jsx)(n.li,{children:"kernel-firmware: 20231024_4ee0175"}),"\n",(0,i.jsx)(n.li,{children:"qemu: version 7.2.0"}),"\n",(0,i.jsx)(n.li,{children:"samba: version 4.17.12 (CVE-2023-3961 CVE-2023-4091 CVE-2023-4154 CVE-2023-42669 CVE-2023-42670)"}),"\n",(0,i.jsx)(n.li,{children:"smartmontools: version 7.4"}),"\n",(0,i.jsx)(n.li,{children:"zfs: version 2.1.13"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"linux-kernel",children:"Linux kernel"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"version 6.1.63"}),"\n",(0,i.jsx)(n.li,{children:"CONFIG_USB_NET_CDC_NCM: CDC NCM support"}),"\n",(0,i.jsx)(n.li,{children:"CONFIG_NFS_V4_1: NFS client support for NFSv4.1"}),"\n",(0,i.jsx)(n.li,{children:"CONFIG_NFS_V4_1_MIGRATION: NFSv4.1 client support for migration"}),"\n",(0,i.jsx)(n.li,{children:"CONFIG_NFS_V4_2: NFS client support for NFSv4.2"}),"\n",(0,i.jsx)(n.li,{children:"CONFIG_NFS_V4_2_READ_PLUS: NFS: Enable support for the NFSv4.2 READ_PLUS operation"}),"\n",(0,i.jsx)(n.li,{children:"CONFIG_NFSD_V4_2_INTER_SSC: NFSv4.2 inter server to server COPY"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>t,a:()=>o});var i=s(7294);const r={},l=i.createContext(r);function o(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);