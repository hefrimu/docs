"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9347],{8074:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var t=s(5893),r=s(1151);const o={},i="Terminal Access",a={id:"legacy/FAQ/terminal-access",title:"Terminal Access",description:'What is "Terminal access"?',source:"@site/docs/legacy/FAQ/terminal-access.md",sourceDirName:"legacy/FAQ",slug:"/legacy/FAQ/terminal-access",permalink:"/zh/legacy/FAQ/terminal-access",draft:!1,unlisted:!1,editUrl:"https://github.com/unraid/docs/tree/main/docs/legacy/FAQ/terminal-access.md",tags:[],version:"current",frontMatter:{},sidebar:"unraidSidebar",previous:{title:"Shrink Array",permalink:"/zh/legacy/FAQ/shrink-array"},next:{title:"Transferring Files from a Network Share to Unraid",permalink:"/zh/legacy/FAQ/transferring-files-from-a-network-share-to-unraid"}},l={},d=[{value:"SSH",id:"ssh",level:2},{value:"Telnet",id:"telnet",level:2},{value:"Using Telnet",id:"using-telnet",level:3},{value:"PuTTY",id:"putty",level:2},{value:"Opening a terminal session with the Windows Telnet tool",id:"opening-a-terminal-session-with-the-windows-telnet-tool",level:2},{value:"Related links",id:"related-links",level:2}];function h(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"terminal-access",children:"Terminal Access"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:'What is "Terminal access"?'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Synonyms for 'terminal': console, shell, command window, DOS box,\ncommand prompt, Windows cmd shell, Telnet window"})}),"\n",(0,t.jsx)(n.p,{children:"It's the opening of a terminal session and obtaining a command line\nprompt, at which you can enter commands directly on the system,\nwhether you are on the system itself using its keyboard and monitor,\nor on a different machine using SSH or Telnet. It's called by\ndifferent things, such as a 'shell' or 'console' or 'terminal'\nor 'command window', but always is line driven and has a command\nprompt. It's very similar to an MS-DOS command prompt in Windows, a\n'DOS box', except this is Linux, so you can't use DOS commands.\nLinux terminal sessions usually always require a login with\npassword."}),"\n",(0,t.jsx)(n.p,{children:"If you have a monitor attached to your Unraid server, then when you\nboot normally (not the boot GUI), you end up at the console with a\nlogin prompt. This console is a terminal session."}),"\n",(0,t.jsx)(n.p,{children:"For terminal access from other machines, Unraid includes both Telnet\nand SSH support. Telnet is no longer recommended however, because it\nis older and easier to attack. SSH is recommended instead as more\nsecure. There are instructions below for disabling Telnet, but\nTelnet does make it easier the first time you want to access your\nserver from another machine. But please remember that it is more\nsecure to disable Telnet, and set up SSH for all further terminal\naccess."}),"\n",(0,t.jsxs)(n.p,{children:["Linux and Mac stations already have terminal access built in. For\nWindows, PuTTY is the recommended package, with enhanced support for\nboth Telnet and SSH. Instructions and links in the PuTTY section\nbelow. Another recommendation, for Windows or Mac, is\n",(0,t.jsx)(n.a,{href:"http://www.netsarang.com/products/xsh_overview.html",children:"Xshell"}),",\nsimilar to PuTTY."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Naturally, you should already have entered a password for 'root'\non your Unraid server!"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Note: this page assumes you are running Unraid v6. The Telnet\nsections should work for all versions of Unraid, but the SSH\nsections are only useful for systems with SSH installed and working.\nSSH is included and set up in v6, but it will only work with earlier\nversions if you install an SSH package."})}),"\n",(0,t.jsx)(n.h2,{id:"ssh",children:"SSH"}),"\n",(0,t.jsx)(n.p,{children:"Unraid v6 and later automatically sets up the SSH keys necessary for\nSSH access"}),"\n",(0,t.jsx)(n.p,{children:"For terminal access from a Windows station, use the PuTTY\ninstructions below to install, configure, and set up the SSH\nconnection"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"more help needed? ssh setup help? (WIP)"})}),"\n",(0,t.jsx)(n.h2,{id:"telnet",children:"Telnet"}),"\n",(0,t.jsx)(n.h3,{id:"using-telnet",children:"Using Telnet"}),"\n",(0,t.jsxs)(n.p,{children:["The Unraid Server software includes a built-in Telnet server, which\nmay be used to open a command window (also called a ",(0,t.jsx)(n.em,{children:"shell"})," or\n",(0,t.jsx)(n.em,{children:"console"}),") on your server. Access to this console is through a\nTelnet program from your desktop station. The Telnet tool is usually\na part of most operating systems, and generally immediately\navailable, but in Windows Vista and Windows 7 and probably later\nversions too, it needs to be 'turned on' through the \"Turn\nWindows features on or off\" tool. Please see ",(0,t.jsx)(n.a,{href:"https://forums.unraid.net/forum/index.php?topic=4092",children:"this\nthread"})," for\ncomments on Telnet usage in Vista, Windows 7, and the Mac. Instead\nof the built-in Telnet tool, we recommend installing PuTTY, with\nenhanced Telnet services."]}),"\n",(0,t.jsx)(n.h2,{id:"putty",children:"PuTTY"}),"\n",(0,t.jsxs)(n.p,{children:["Linux and Mac have their own built in terminal access programs, but\nWindows needs a little help. Windows does have a Telnet client, but\nit is a bare bones function, and usually hidden and needing to be\nturned on. For Windows, we strongly recommend the ",(0,t.jsx)(n.strong,{children:"PuTTY"})," program\npackage. It's free and includes enhanced support for both Telnet\nand SSH. Unlike Windows Telnet, PuTTY allows you to use the mouse\nand advanced keys, such as the arrow and function keys. PuTTY can\nalso be setup with your Unraid server name or IP and SSH host key."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"http://www.chiark.greenend.org.uk/~sgtatham/putty/",children:"PuTTY web site"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"http://the.earth.li/~sgtatham/putty/latest/x86/putty.exe",children:"Direct download of PuTTY for\nWindows"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html",children:"PuTTY downloads\npage"})," -\nfor other downloads, such as other OS's, beta versions, or a Windows\ninstaller version"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Because PuTTY is just an enhanced Telnet and SSH program, it can be\nused instead of Windows Telnet anywhere that Telnet or SSH is\nmentioned, such as anywhere in the Wiki or the Unraid forums. It is\nused the same way as Windows Telnet, but because it supports the\nmouse and arrow and function keys, it is much easier to use in\nprograms like MC (Midnight Commander, a dual pane commander-like\nfile manager). For an example, see ",(0,t.jsx)(n.a,{href:"transferring-files-within-the-unraid-server.md",children:"Transferring Files Within the\nUnraid\nServer"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.em,{children:["Note for UnRAID v5 and v6 users: some have found that Midnight\nCommander looks funny, with accented letters (mostly a little 'a'\nwith a hat) where line drawing characters should be. In your PuTTY\nconfiguration, go to Window->Translation and set Remote Character\nSet to something like UTF-8, then restart MC (thanks to Wody for\nthis tip, see\n",(0,t.jsx)(n.a,{href:"https://forums.unraid.net/forum/index.php?topic=18157",children:"this"}),").\nWody has an additional PuTTY tip in ",(0,t.jsx)(n.a,{href:"https://forums.unraid.net/forum/index.php?topic=18157.msg162943#msg162943",children:"this\npost"}),"."]})}),"\n",(0,t.jsxs)(n.p,{children:["PuTTY has a number of settings, but the defaults are usually fine.\nOn the ",(0,t.jsx)(n.strong,{children:"Window"})," tab, I set ",(0,t.jsx)(n.strong,{children:"Columns"})," to 120, ",(0,t.jsx)(n.strong,{children:"Rows"})," to 60, and\n",(0,t.jsx)(n.strong,{children:"Lines of scrollback"})," to 2000. On the ",(0,t.jsx)(n.strong,{children:"Translate"})," tab, I set\n",(0,t.jsx)(n.strong,{children:"Remote character set"})," to UTF-8."]}),"\n",(0,t.jsxs)(n.p,{children:["First time SSH connection: set ",(0,t.jsx)(n.strong,{children:"Connection type"})," to SSH, then\nenter your exact Unraid server name or IP (if static), then enter a\n",(0,t.jsx)(n.strong,{children:"Saved Session"})," name (such as ",(0,t.jsx)(n.em,{children:"SSH Tower"}),"), then click the\n",(0,t.jsx)(n.strong,{children:"Save"})," button. You are ready to click your session name and\nconnect! When you do this the first time, you will be informed about\nthe host key and whether you trust this server and want to cache its\nhost key. Click ",(0,t.jsx)(n.strong,{children:"Yes"})," and the host key will be saved, and you\nwon't be asked again. (This creates a secure connection that can't\nbe spoofed.) Then a terminal session box will open up with a login\nprompt. Enter ",(0,t.jsx)(n.em,{children:"root"})," and press ",(0,t.jsx)(n.code,{children:"<Enter>"}),", then enter your\npassword and the ",(0,t.jsx)(n.code,{children:"<Enter>"})," key again. You are now in a Linux\nterminal session at a command prompt! Type ",(0,t.jsx)(n.em,{children:"exit"})," to quit."]}),"\n",(0,t.jsxs)(n.p,{children:["First time Telnet connection: set ",(0,t.jsx)(n.strong,{children:"Connection type"})," to Telnet,\nthen enter your exact Unraid server name or IP (if static), then\nenter a ",(0,t.jsx)(n.strong,{children:"Saved Session"})," name (such as ",(0,t.jsx)(n.em,{children:"Telnet Tower"}),"), then click\nthe ",(0,t.jsx)(n.strong,{children:"Save"})," button. You are ready to click your session name and\nconnect! When you do, a Telnet terminal session box will open up\nwith a login prompt. Enter ",(0,t.jsx)(n.em,{children:"root"})," and press ",(0,t.jsx)(n.code,{children:"<Enter>"}),", then\nenter your password and the ",(0,t.jsx)(n.code,{children:"<Enter>"})," key again. You are now\nin a Linux terminal session at a command prompt! Type ",(0,t.jsx)(n.em,{children:"exit"})," to\nquit."]}),"\n",(0,t.jsx)(n.p,{children:"On subsequent uses, just start PuTTY and click the session name you\nwant to use, and you will immediately be at the login prompt."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.em,{children:["Note: ",(0,t.jsx)(n.a,{href:"http://www.netsarang.com/products/xsh_overview.html",children:"Xshell"}),"\nis a commercial alternative to PuTTY, similar and possibly more\npowerful, free for home use."]})}),"\n",(0,t.jsx)(n.h2,{id:"opening-a-terminal-session-with-the-windows-telnet-tool",children:"Opening a terminal session with the Windows Telnet tool"}),"\n",(0,t.jsx)(n.p,{children:"To open a Telnet session from Windows click Start -> Run. In the\ndialog box type:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"telnet tower"})}),"\n",(0,t.jsxs)(n.p,{children:["If you renamed your server from tower, enter that name instead.\nAlso, you may enter the server's IP address instead of its name. A\ncommand window will open and you will be presented with a login\nprompt. The login name is ",(0,t.jsx)(n.em,{children:"root"}),", and by default, there is no\npassword. To terminate the session, just close the window. You may\nhave multiple Telnet sessions to the same server. You can\nselect/copy/paste the text from a Windows Telnet window by\nright-clicking the title bar. Notes regarding the command shell:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"commands and arguments are case-sensitive"}),"\n",(0,t.jsx)(n.li,{children:"commands and arguments must be separated with spaces"}),"\n",(0,t.jsx)(n.li,{children:"commands are executed after pressing the Enter key"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"related-links",children:"Related links"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://forums.unraid.net/forum/index.php?topic=30273",children:"SSH vs\nTelnet"})," -\ndiscussion of the merits of both, why many want Telnet disabled"]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"http://www.google.com/search?q=how+to+secure+your+ssh+server",children:'Google search of "how to secure your ssh\nserver"'})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/zh/legacy/FAQ/console",children:"Console"})," - basics of console usage, plus\ncommands for drives, networking, system management, files and\nfolders, and system information"]}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>i});var t=s(7294);const r={},o=t.createContext(r);function i(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);