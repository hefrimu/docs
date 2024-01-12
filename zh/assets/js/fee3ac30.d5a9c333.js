"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7328],{7626:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var i=n(5893),a=n(1151);const r={sidebar_position:3},s="Data Encryption",o={id:"unraid-os/manual/security/data-encryption",title:"Data Encryption",description:"Unraid supports the use of encrypted drives in both the cache and the array. It does this using the Linux LUKS (Linux Unified Key System) encryption modules.",source:"@site/docs/unraid-os/manual/security/data-encryption.md",sourceDirName:"unraid-os/manual/security",slug:"/unraid-os/manual/security/data-encryption",permalink:"/zh/unraid-os/manual/security/data-encryption",draft:!1,unlisted:!1,editUrl:"https://github.com/unraid/docs/tree/main/docs/unraid-os/manual/security/data-encryption.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"unraidSidebar",previous:{title:"Securing webGUI connections (SSL)",permalink:"/zh/unraid-os/manual/security/secure-webgui-ssl"},next:{title:"Flash Drive",permalink:"/zh/unraid-os/manual/security/flash-drive"}},d={},c=[];function h(e){const t={a:"a",admonition:"admonition",h1:"h1",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"data-encryption",children:"Data Encryption"}),"\n",(0,i.jsxs)(t.p,{children:["Unraid supports the use of encrypted drives in both the cache and the array. It does this using the Linux LUKS (",(0,i.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Linux_Unified_Key_Setup",children:"Linux Unified Key System"}),") encryption modules."]}),"\n",(0,i.jsx)(t.p,{children:"LUKS is the standard for Linux hard disk encryption. By providing a standard on-disk-format, it does not only facilitate compatibility among distributions but also provides secure management of multiple user passwords. In contrast to an existing solution, LUKS stores all necessary setup information in the partition header, enabling you to transport or migrate your data seamlessly."}),"\n",(0,i.jsxs)(t.p,{children:["The home page for LUKS can be found ",(0,i.jsx)(t.a,{href:"https://gitlab.com/cryptsetup/cryptsetup",children:"here"})]}),"\n",(0,i.jsx)(t.p,{children:"Because it is a Linux standard drives that are encrypted using LUKS can be read on any standard Linux system even when removed from Unraid as long as one has the key phrase/file needed to unlock the drive."}),"\n",(0,i.jsx)(t.p,{children:"The Unraid implementation expects the same key to be used for encrypting all drives being used by Unraid. The key for the encryption can be either a pass phrase, or provided via a key file. When using a key file it is a good idea to use something like an image as there is no chance of that ever being guessed. You must make sure that you do not lose the encryption key as without it you will not be able to access the data on encrypted drives."}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.p,{children:"To encrypt a drive (Note that this will erase any content already on the drive)."}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Go to the ",(0,i.jsx)(t.strong,{children:"Main"})," tab."]}),"\n",(0,i.jsx)(t.li,{children:"Stop the array."}),"\n",(0,i.jsx)(t.li,{children:"Select the drive."}),"\n",(0,i.jsxs)(t.li,{children:["In ",(0,i.jsx)(t.strong,{children:"File system type"})," change the file system to the encrypted type that you want."]}),"\n",(0,i.jsxs)(t.li,{children:["Select ",(0,i.jsx)(t.strong,{children:"Apply"})," to commit the change."]}),"\n",(0,i.jsxs)(t.li,{children:["Select ",(0,i.jsx)(t.strong,{children:"Done"})," to return to the ",(0,i.jsx)(t.strong,{children:"Main"})," tab. The drive will now show as unmountable and the option to format unmountable drives will be present."]}),"\n",(0,i.jsx)(t.li,{children:"Check that the drive is the one you are expecting to be encrypted and if it is correct, format it."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Once you have set up encryption then it will be necessary to provide the encryption key when starting the array. Once this has been done and the array successfully started then you can access the data without being aware of the fact that any drive is encrypted."}),"\n",(0,i.jsx)(t.admonition,{type:"caution",children:(0,i.jsx)(t.p,{children:"Encrypting data is good from a security perspective, but users should be aware of the fact that it can complicate recovering from certain types of hardware failure without data loss. On that basis only use encryption if you feel you have a real need for it, and more importantly, you have a good data backup system."})})]})}function u(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>s});var i=n(7294);const a={},r=i.createContext(a);function s(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);