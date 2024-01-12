"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2454],{3383:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>t,metadata:()=>i,toc:()=>l});var n=r(5893),o=r(1151);const t={sidebar_position:4},a="Network access",i={id:"unraid-os/manual/shares/network-access",title:"Network access",description:"Communication protocols",source:"@site/docs/unraid-os/manual/shares/network-access.md",sourceDirName:"unraid-os/manual/shares",slug:"/unraid-os/manual/shares/network-access",permalink:"/fr/unraid-os/manual/shares/network-access",draft:!1,unlisted:!1,editUrl:"https://github.com/unraid/docs/tree/main/docs/unraid-os/manual/shares/network-access.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"unraidSidebar",previous:{title:"Disk shares",permalink:"/fr/unraid-os/manual/shares/disk-shares"},next:{title:"Create a new share",permalink:"/fr/unraid-os/manual/shares/create-a-share"}},c={},l=[{value:"Communication protocols",id:"communication-protocols",level:2},{value:"Protocol selection",id:"protocol-selection",level:2},{value:"Access permissions at share level",id:"access-permissions-at-share-level",level:2},{value:"Share security",id:"share-security",level:2}];function h(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"network-access",children:"Network access"}),"\n",(0,n.jsx)(s.h2,{id:"communication-protocols",children:"Communication protocols"}),"\n",(0,n.jsx)(s.p,{children:"For any type of share, you can control which protocols provide access to your Unraid server over the network. Unraid supports some of the most widely-used communication protocols for network access. These are:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"SMB"}),", or Server Message Block, is the standard protocol used by Windows systems. It is also widely implemented on other systems, including macOS X."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"NFS"}),", or Network File System, is a widely-used protocol on Unix-compatible systems."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"FTP"}),", or File Transfer Protocol, offers the flexibility of being supported through browsers and client software in different devices with different OSes."]}),"\n"]}),"\n",(0,n.jsx)(s.admonition,{type:"important",children:(0,n.jsxs)(s.p,{children:["As of Unraid 6.9, ",(0,n.jsx)(s.strong,{children:"AFP"})," support has been deprecated. For best interoperability with macOS, and to export a share for Time Machine purposes, in ",(0,n.jsx)(s.em,{children:(0,n.jsx)(s.strong,{children:"Settings > SMB"})})," set the ",(0,n.jsx)(s.strong,{children:"Enhanced macOS interoperability"})," parameter to ",(0,n.jsx)(s.em,{children:"Yes"}),"."]})}),"\n",(0,n.jsx)(s.h2,{id:"protocol-selection",children:"Protocol selection"}),"\n",(0,n.jsx)(s.p,{children:"Your choice of protocol depends on the devices that exist on your network and the most common use case for file transfers. Modern versions of Windows and OS X support SMB and for this reason the protocol is enabled by default, while FTP and NFS are disabled. Each protocol also offers pros and cons, and is suited for different use cases."}),"\n",(0,n.jsx)(s.p,{children:"For example, if you use an FTP client to access an FTP share on your Unraid server, and transfer large amounts of data, you can schedule a file upload or a download, or even resume a failed transfer."}),"\n",(0,n.jsx)(s.h2,{id:"access-permissions-at-share-level",children:"Access permissions at share level"}),"\n",(0,n.jsxs)(s.p,{children:["Each protocol can be configured at the share level. On the ",(0,n.jsx)(s.strong,{children:"Shares"})," tab, select an existing share to display its settings. At the bottom of the share settings there is a security sub-section for any active network protocols. This section enables you to control the visibility of the share on the network. The setting is labelled ",(0,n.jsx)(s.strong,{children:"Export"})," and has the following options:"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Yes"})," - The share will be visible across the network."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Yes (Hidden)"})," - The share can be accessed across the network but will not be listed when browsing the shares on the server. Users can still access the share as long as they know the name and the user is prepared to enter in manually."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"No"})," - This will disable network access through that protocol, for that share."]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"share-security",children:"Share security"}),"\n",(0,n.jsx)(s.p,{children:"Share security determines how a share enables user access. If you need, a share may request user credentials to allow read/write access, or may be publicly available."}),"\n",(0,n.jsxs)(s.p,{children:["For example, you may configure a ",(0,n.jsx)(s.code,{children:"movies"})," share on your Unraid server to request a valid username and password, just to read data from that share. You can also make it public, which requires no user credentials."]}),"\n",(0,n.jsxs)(s.p,{children:["When you select an existing share on the ",(0,n.jsx)(s.strong,{children:"Shares"})," tab the share settings display. Here, you can find a security section that enables you to control access to the share, for each of the protocols ",(0,n.jsx)(s.a,{href:"#access-permissions-at-share-level",children:"you have enabled"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.strong,{children:"Security"})," setting has the following options:"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Public"})," - The share is unsecured and all users have both read and write access to the contents of the share."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Secure"})," - The share is secured and all users, including guests, have read access. You can select which of your users have write access."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Private"})," - The share is private, and you select which of your users have access. You can then pick if that user has read/write or read-only access."]}),"\n"]}),"\n",(0,n.jsxs)(s.admonition,{title:"Windows 'Gotcha'",type:"caution",children:[(0,n.jsx)(s.p,{children:"There is an issue with the way Windows handles network shares: Windows only allows a single set of credentials to be in use on any one server. Any attempts to connect to a different share on the same server, that requires a different set of credentials, and that is not a public share, automatically fails."}),(0,n.jsxs)(s.p,{children:["If you have any shares on the server set to ",(0,n.jsx)(s.em,{children:"Private"})," or ",(0,n.jsx)(s.em,{children:"Secure"})," access, it is important that you connect to that share first, before any shares set for ",(0,n.jsx)(s.em,{children:"Public"})," access."]}),(0,n.jsx)(s.p,{children:"As a workaround you can access a server by both its network name and its IP address, that Windows identifies as different devices as far as authentication is concerned."})]})]})}function d(e={}){const{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},1151:(e,s,r)=>{r.d(s,{Z:()=>i,a:()=>a});var n=r(7294);const o={},t=n.createContext(o);function a(e){const s=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);