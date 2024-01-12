"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6305],{5378:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>o,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>d,toc:()=>l});var t=n(5893),s=n(1151);const a={},r="Expanding Windows VM VDisk Partitions",d={id:"legacy/Articles/expanding-windows-vm-vdisk-partitions",title:"Expanding Windows VM VDisk Partitions",description:"Overview",source:"@site/docs/legacy/Articles/expanding-windows-vm-vdisk-partitions.md",sourceDirName:"legacy/Articles",slug:"/legacy/Articles/expanding-windows-vm-vdisk-partitions",permalink:"/de/legacy/Articles/expanding-windows-vm-vdisk-partitions",draft:!1,unlisted:!1,editUrl:"https://github.com/unraid/docs/tree/main/docs/legacy/Articles/expanding-windows-vm-vdisk-partitions.md",tags:[],version:"current",frontMatter:{},sidebar:"unraidSidebar",previous:{title:"Dual Booting Windows & Unraid",permalink:"/de/legacy/Articles/dual-boot-unraid-and-windows"},next:{title:"Upgrading to Unraid 6",permalink:"/de/legacy/Articles/upgrading-to-unraid-6"}},o={},l=[{value:"Overview",id:"overview",level:2},{value:"Guide",id:"guide",level:2}];function c(e){const i={a:"a",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"expanding-windows-vm-vdisk-partitions",children:"Expanding Windows VM VDisk Partitions"}),"\n",(0,t.jsx)(i.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsxs)(i.p,{children:["If you've followed the steps outlined in ",(0,t.jsx)(i.a,{href:"/unraid-os/manual/vm-management.md#expanding-a-vdisk",children:"this\narticle"})," to expand a\nvdisk for your Windows installation, this article will teach you how to\nexpand your partition in Windows so you can take advantage of that extra\nspace. Windows has this pesky habit of adding a recovery partition to\nvdisks that gets in the way of allowing you to easily expand your\nexisting C:\\ partition to take advantage of newly provisioned space in\nthe vdisk. To get around this, we need to delete that recovery partition\nfirst, then we can use the standard disk management utility in Windows\nto extend the C:\\ partition."]}),"\n",(0,t.jsx)(i.h2,{id:"guide",children:"Guide"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{src:n(5964).Z+"",width:"675",height:"763"})}),"\n",(0,t.jsxs)(i.p,{children:["Perform the following steps ",(0,t.jsx)(i.em,{children:"after"})," completing the steps in ",(0,t.jsx)(i.a,{href:"/unraid-os/manual/vm-management.md#expanding-a-vdisk",children:"this\narticle"})," to expand\nthe vdisk itself:"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Start your Windows VM."}),"\n",(0,t.jsx)(i.li,{children:"Open a command prompt (hit the Windows key and type 'cmd' and press\nenter)"}),"\n",(0,t.jsx)(i.li,{children:"Open diskpart (type 'diskpart' and press enter)"}),"\n",(0,t.jsx)(i.li,{children:"Type 'list disk' and press enter"}),"\n",(0,t.jsx)(i.li,{children:"Identify the disk you extended and select it by typing 'select disk\n#\" replacing # with the numbered disk in the list."}),"\n",(0,t.jsx)(i.li,{children:"Type 'list partition' and press enter."}),"\n",(0,t.jsxs)(i.li,{children:["Take note of which is the 'recovery' partition","\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"You specifically are looking for the recovery partition that comes\nafter the primary partition (in case there are multiple)."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.li,{children:"Type 'select partition #' and press enter, replacing # with the\nnumbered partition in the list (for recovery)."}),"\n",(0,t.jsx)(i.li,{children:"Type 'delete partition override' and press enter."}),"\n",(0,t.jsx)(i.li,{children:"Right-click the start menu and select 'Disk Management'"}),"\n",(0,t.jsx)(i.li,{children:"Right-click on the partition you wish to extend and click 'Extend\nPartition'"}),"\n",(0,t.jsx)(i.li,{children:"Follow the on-screen prompts to complete the process."}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.img,{src:n(7191).Z+"",width:"1132",height:"896"}),"\n",(0,t.jsx)(i.img,{src:n(2739).Z+"",width:"1131",height:"896"})]})]})}function p(e={}){const{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},5964:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/Resize_vdisk_2_(using_diskpart_to_delete_recovery_partition)-8dcc2547ed9d3812b1d735337a83af9a.PNG"},7191:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/Resize_vdisk_3_(extend_partition_in_disk_management)-62c649acdf42616193f2d6c889504ea9.PNG"},2739:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/Resize_vdisk_4_(partition_has_been_extended_in_disk_management)-335d91d19a6c04b5d3e115c4d8149dcb.PNG"},1151:(e,i,n)=>{n.d(i,{Z:()=>d,a:()=>r});var t=n(7294);const s={},a=t.createContext(s);function r(e){const i=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(a.Provider,{value:i},e.children)}}}]);