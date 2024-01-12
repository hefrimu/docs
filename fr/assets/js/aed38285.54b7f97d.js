"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1932],{9637:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>t,metadata:()=>o,toc:()=>h});var s=r(5893),n=r(1151);const t={sidebar_position:1},i="Shares",o={id:"unraid-os/manual/shares/shares",title:"Shares",description:"Once you have assigned devices to Unraid and started the array, we recommend that you plan and create shares to simplify how you store data across multiple disks in the array.",source:"@site/docs/unraid-os/manual/shares/shares.md",sourceDirName:"unraid-os/manual/shares",slug:"/unraid-os/manual/shares/",permalink:"/fr/unraid-os/manual/shares/",draft:!1,unlisted:!1,editUrl:"https://github.com/unraid/docs/tree/main/docs/unraid-os/manual/shares/shares.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"unraidSidebar",previous:{title:"Overview",permalink:"/fr/unraid-os/manual/what-is-unraid"},next:{title:"User shares",permalink:"/fr/unraid-os/manual/shares/user-shares"}},d={},h=[];function l(e){const a={a:"a",admonition:"admonition",em:"em",h1:"h1",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.h1,{id:"shares",children:"Shares"}),"\n",(0,s.jsx)(a.admonition,{type:"tip",children:(0,s.jsx)(a.p,{children:"Once you have assigned devices to Unraid and started the array, we recommend that you plan and create shares to simplify how you store data across multiple disks in the array."})}),"\n",(0,s.jsx)(a.p,{children:"One key feature of Unraid is the management of shares. Shares represent folders or drives on your Unraid server that can be accessed over a network. You can add as many shares as you like to your Unraid server. For example, you may have a share for your photo library, another for movies, and yet another for important documents, each with their own separate access permissions and configurations. They can be made secure and their configuration determines how data is written and spread out across your array or named pool of drives."}),"\n",(0,s.jsx)(a.p,{children:"There are two types of shares in Unraid:"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.a,{href:"/fr/unraid-os/manual/shares/user-shares",children:"User Shares"})," that rely on Linux FUSE and represent folders in the overall file system."]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.a,{href:"/fr/unraid-os/manual/shares/disk-shares",children:"Disk Shares"})," that rely on the drives' ",(0,s.jsx)(a.a,{href:"https://docs.unraid.net/unraid-os/manual/storage-management#creating-a-file-system-format",children:"file system"})," to share the disk as a whole."]}),"\n"]}),"\n",(0,s.jsx)(a.p,{children:"It is important to highlight that there are two different views of the same underlying file system. Every file/folder that appears under a user share will also appear under the disk share for the physical drive that is storing the file/folder."}),"\n",(0,s.jsxs)(a.p,{children:["When you first initialize your array, Unraid automatically creates a ",(0,s.jsx)(a.a,{href:"/fr/unraid-os/manual/shares/user-shares#default-shares",children:"handful of user shares"}),". These are needed to support common plugins, containers, and virtual machines. You can create your own shares to store other data."]}),"\n",(0,s.jsxs)(a.p,{children:["You manage shares from the ",(0,s.jsx)(a.strong,{children:"Shares"})," tab in Unraid. You enable or disable shares in ",(0,s.jsx)(a.em,{children:(0,s.jsx)(a.strong,{children:"Settings > Global Share Settings"})}),", with user shares being enabled by default."]})]})}function u(e={}){const{wrapper:a}={...(0,n.a)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},1151:(e,a,r)=>{r.d(a,{Z:()=>o,a:()=>i});var s=r(7294);const n={},t=s.createContext(n);function i(e){const a=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(t.Provider,{value:a},e.children)}}}]);