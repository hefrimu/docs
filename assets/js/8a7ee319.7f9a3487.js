"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3929],{1627:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>d,contentTitle:()=>i,default:()=>l,frontMatter:()=>t,metadata:()=>a,toc:()=>c});var n=s(5893),o=s(1151);const t={},i="Resetting your Unraid password",a={id:"unraid-os/guides/reset-password",title:"Resetting your Unraid password",description:"Whether you have forgotten your password, or are not using a password manager, forgetting your root password can be a problem and bring everything to a standstill.",source:"@site/docs/unraid-os/guides/reset-password.md",sourceDirName:"unraid-os/guides",slug:"/unraid-os/guides/reset-password",permalink:"/unraid-os/guides/reset-password",draft:!1,unlisted:!1,editUrl:"https://github.com/unraid/docs/tree/main/docs/unraid-os/guides/reset-password.md",tags:[],version:"current",frontMatter:{},sidebar:"unraidSidebar",previous:{title:"Apple Time Machine",permalink:"/unraid-os/guides/configuring-time-machine"},next:{title:"How To Setup Wake On LAN (WOL) for UNRAID",permalink:"/unraid-os/guides/wol-setup-for-unraid"}},d={},c=[];function u(e){const r={code:"code",em:"em",h1:"h1",li:"li",ol:"ol",p:"p",strong:"strong",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"resetting-your-unraid-password",children:"Resetting your Unraid password"}),"\n",(0,n.jsx)(r.p,{children:"Whether you have forgotten your password, or are not using a password manager, forgetting your root password can be a problem and bring everything to a standstill."}),"\n",(0,n.jsx)(r.p,{children:"To reset your Unraid server password you'll need access to another computer:"}),"\n",(0,n.jsxs)(r.ol,{children:["\n",(0,n.jsx)(r.li,{children:"Shutdown your server."}),"\n",(0,n.jsx)(r.li,{children:"Plug your USB flash device into a Windows or Mac computer."}),"\n",(0,n.jsx)(r.li,{children:"Open the USB device in Explorer / Finder."}),"\n",(0,n.jsxs)(r.li,{children:["Locate and delete the files ",(0,n.jsx)(r.code,{children:"config/shadow"})," and ",(0,n.jsx)(r.code,{children:"config/smbpasswd"})," (do ",(0,n.jsx)(r.strong,{children:"not"})," delete ",(0,n.jsx)(r.code,{children:"config/passwd"}),"). This will reset all user passwords, including the root user, to blank entries."]}),"\n",(0,n.jsx)(r.li,{children:"Securely eject your USB device and connect it to the Unraid server again."}),"\n",(0,n.jsx)(r.li,{children:"Boot up the Unraid server and it will ask you to set up a new password, as if you'd just completed a first boot of Unraid."}),"\n",(0,n.jsxs)(r.li,{children:["(Optional) If you have any user accounts configured in ",(0,n.jsx)(r.em,{children:(0,n.jsx)(r.strong,{children:"Users > Shares Access"})})," (or ",(0,n.jsx)(r.em,{children:(0,n.jsx)(r.strong,{children:"Settings > Users > Shares Access"})}),"), select each user and enter a new password. Be sure to select ",(0,n.jsx)(r.strong,{children:"Change"})," after this."]}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"Your server passwords are reset and your server is secured."})]})}function l(e={}){const{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},1151:(e,r,s)=>{s.d(r,{Z:()=>a,a:()=>i});var n=s(7294);const o={},t=n.createContext(o);function i(e){const r=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(t.Provider,{value:r},e.children)}}}]);