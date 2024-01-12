"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1770],{7944:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>t,metadata:()=>o,toc:()=>h});var r=s(5893),a=s(1151);const t={sidebar_position:5},i="Create a new share",o={id:"unraid-os/manual/shares/create-a-share",title:"Create a new share",description:"When you create a new share, plan ahead.",source:"@site/docs/unraid-os/manual/shares/create-a-share.md",sourceDirName:"unraid-os/manual/shares",slug:"/unraid-os/manual/shares/create-a-share",permalink:"/zh/unraid-os/manual/shares/create-a-share",draft:!1,unlisted:!1,editUrl:"https://github.com/unraid/docs/tree/main/docs/unraid-os/manual/shares/create-a-share.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"unraidSidebar",previous:{title:"Network access",permalink:"/zh/unraid-os/manual/shares/network-access"},next:{title:"Delete a share",permalink:"/zh/unraid-os/manual/shares/delete-a-share"}},l={},h=[];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",li:"li",ol:"ol",p:"p",strong:"strong",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"create-a-new-share",children:"Create a new share"}),"\n",(0,r.jsx)(n.p,{children:"When you create a new share, plan ahead."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["On the ",(0,r.jsx)(n.strong,{children:"Shares"})," tab select ",(0,r.jsx)(n.strong,{children:"Add Share"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Enter a name for your share in ",(0,r.jsx)(n.strong,{children:"Share name"})]}),"\n",(0,r.jsx)(n.admonition,{title:"Share names",type:"tip",children:(0,r.jsxs)(n.p,{children:["The Linux file systems used by Unraid are case sensitive while the SMB share system - the one used by Windows - is not. However, at the network level, case is ignored so ",(0,r.jsx)(n.code,{children:"media"}),", ",(0,r.jsx)(n.code,{children:"Media"}),", and ",(0,r.jsx)(n.code,{children:"MEDIA"})," would all be the same share. When you view the share on the network, you only get the content of one of those underlying folders to appear - and it would not be clear which one this would be."]})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"(Optional)"})," Enter a description for the share in the ",(0,r.jsx)(n.strong,{children:"Comments"})," field. This is visible when viewed over the network."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Set a ",(0,r.jsx)(n.strong,{children:"Minimum free space"})," value, in kilobytes, if you plan to use the setting, otherwise leave it empty."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Select the ",(0,r.jsx)(n.strong,{children:"Primary storage"})," for your share. The dropdown displays all available options, which include: the cache, the array, and any named pool."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Select the ",(0,r.jsx)(n.strong,{children:"Allocation method"}),": high-water, fill-up, or most-free, depending on your use case. You can read about the differences ",(0,r.jsx)(n.a,{href:"/zh/unraid-os/manual/shares/user-shares#allocation-method",children:"here"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Select the ",(0,r.jsx)(n.strong,{children:"Split level"})," method for your data. You can find more information split level, ",(0,r.jsx)(n.a,{href:"/zh/unraid-os/manual/shares/user-shares#split-level",children:"here"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["In ",(0,r.jsx)(n.strong,{children:"Included disks"})," choose which disks will be available to the share. By default, all disks will be included."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["In ",(0,r.jsx)(n.strong,{children:"Excluded disks"})," choose which disks will not be available to the share. Note that if you configure ",(0,r.jsx)(n.strong,{children:"Included disks"})," there is no need to configure ",(0,r.jsx)(n.strong,{children:"Excluded disks"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Select a ",(0,r.jsx)(n.strong,{children:"Secondary storage"})," if you plan on using it. Think of secondary storage as a fall-back resource when the primary storage is full. By default this is set to ",(0,r.jsx)(n.em,{children:"None"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"(Optional)"})," If you configure a primary and secondary storage, then ",(0,r.jsx)(n.strong,{children:"Mover action"})," option becomes active. This sets the direction of file transfers between Primary and Secondary storage."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Select ",(0,r.jsx)(n.strong,{children:"Add share"})," to complete the creation."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"important",children:(0,r.jsxs)(n.p,{children:["Note that, by default, a new share will not be shared over the network. You must configure ",(0,r.jsx)(n.a,{href:"/zh/unraid-os/manual/shares/network-access",children:"network access"})," after the share is created."]})})]})}function c(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>i});var r=s(7294);const a={},t=r.createContext(a);function i(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);