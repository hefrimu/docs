"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4077],{4800:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var t=i(5893),o=i(1151);const r={},s="Transferring Files Within the Unraid Server",a={id:"legacy/FAQ/transferring-files-within-the-unraid-server",title:"Transferring Files Within the Unraid Server",description:"If you are using Windows Explorer to move files between drives, you are",source:"@site/docs/legacy/FAQ/transferring-files-within-the-unraid-server.md",sourceDirName:"legacy/FAQ",slug:"/legacy/FAQ/transferring-files-within-the-unraid-server",permalink:"/fr/legacy/FAQ/transferring-files-within-the-unraid-server",draft:!1,unlisted:!1,editUrl:"https://github.com/unraid/docs/tree/main/docs/legacy/FAQ/transferring-files-within-the-unraid-server.md",tags:[],version:"current",frontMatter:{},sidebar:"unraidSidebar",previous:{title:"Transferring Files from a Network Share to Unraid",permalink:"/fr/legacy/FAQ/transferring-files-from-a-network-share-to-unraid"},next:{title:"Understanding SMART Reports",permalink:"/fr/legacy/FAQ/understanding-smart-reports"}},d={},l=[{value:"Midnight Commander - Easy to Use GUI Tool",id:"midnight-commander---easy-to-use-gui-tool",level:2},{value:"Move Files Overnight",id:"move-files-overnight",level:2},{value:"Unix Commands",id:"unix-commands",level:2},{value:"Copying files",id:"copying-files",level:3},{value:"Moving files",id:"moving-files",level:3},{value:"Quotes",id:"quotes",level:3},{value:"Wildcards",id:"wildcards",level:3}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",strong:"strong",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"transferring-files-within-the-unraid-server",children:"Transferring Files Within the Unraid Server"}),"\n",(0,t.jsx)(n.p,{children:"If you are using Windows Explorer to move files between drives, you are\nactually copying the files TWICE across the network, from the Unraid\nserver to your Windows machine, and back again. For copying a few files,\nthis is not a problem. But if you are moving a lot of data, here are\nfaster methods."}),"\n",(0,t.jsx)(n.h2,{id:"midnight-commander---easy-to-use-gui-tool",children:"Midnight Commander - Easy to Use GUI Tool"}),"\n",(0,t.jsxs)(n.p,{children:["Use Midnight Commander and PuTTY instead. Type mc at the command prompt\nin a telnet/PuTTy session to start the GUI. Midnight Commander is built\ninto Unraid v4.3 and up. For earlier versions, and a link to PuTTY (an\nalternative to Telnet that allows use of a mouse within ",(0,t.jsx)(n.strong,{children:"mc"}),"), see\n",(0,t.jsx)(n.a,{href:"https://forums.unraid.net/forum/index.php?topic=1341.0",children:"this thread"}),").\nMidnight Commander is a Linux console tool, and needs to be run from\neither the physical console on your Unraid server, or from a Telnet\nconsole on your desktop station. For more information, see the\n",(0,t.jsx)(n.a,{href:"/fr/legacy/FAQ/terminal-access#telnet",children:"Telnet"})," page, which includes information on\n",(0,t.jsx)(n.a,{href:"/fr/legacy/FAQ/terminal-access#PuTTY",children:"PuTTY"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"move-files-overnight",children:"Move Files Overnight"}),"\n",(0,t.jsxs)(n.p,{children:["If you go to the Unraid server and run Midnight Commander from there,\nyou can use it to move a bunch of files overnight. But if you use ",(0,t.jsx)(n.strong,{children:"mc"}),"\nfrom a Telnet prompt from your Windows (or other) workstation, you will\nhave to leave the computer on and the Telnet session open until the disk\noperations are complete. If the Telnet session ends, so does the copy or\nmove operation."]}),"\n",(0,t.jsx)(n.p,{children:'But with a little knowledge of Unix commands, you can easily start\nmoving files around your Unraid server and then shut down Telnet and\nyour workstation. The key is the "nohup" command (nohup means "no\n[don\'t] hang up"). If you put "nohup" before any command and an\nampersand (&) afterwards, the command will run in the background until\nit is complete. Your command prompt will return immediately.'}),"\n",(0,t.jsx)(n.p,{children:"So, for example, if you wanted to move a bunch of movies from Disk1 to\nDisk2, you could use this command from a Telnet (PuTTY or otherwise)\nprompt ..."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"nohup mv /mnt/disk1/Movies/* /mnt/disk2/Movies &"})}),"\n",(0,t.jsx)(n.p,{children:"Do a quick check to see that files are starting to appear in the\ndestination folder to make sure you didn't have a typo in the command,\nand then exit from the Telnet session. The files will continue to be\nmoved as fast as Unraid can move them, and use ZERO network bandwidth.\nMake sure it is complete before shutting down your Unraid server, as\ncopying hundreds of gigs can take a long time to complete even at the\nfastest speed."}),"\n",(0,t.jsx)(n.p,{children:'nohup can also be used with the "cp" (copy) command (see Unix Commands\nsection below)'}),"\n",(0,t.jsx)(n.p,{children:'nohup creates a log file called \'nohup.out\' with the command output.\nThe basic "mv" command doesn\'t create any output, but "cp" outputs\nthe name of each file it copies. If you use "cp" to copy a LOT of\nsmall files (300,000+), you risk having nohup.out get quite large -\nlarge enough to fill up your Unraid server ramdisk - not a good thing.'}),"\n",(0,t.jsx)(n.h2,{id:"unix-commands",children:"Unix Commands"}),"\n",(0,t.jsx)(n.p,{children:"There are two effective methods available to move files from one drive\nto another from within Unraid (v4.x and later)."}),"\n",(0,t.jsx)(n.h3,{id:"copying-files",children:"Copying files"}),"\n",(0,t.jsx)(n.p,{children:"1) Copy the files from disk# (where '#' is the number of the disk in\nUnraid)"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"cp\xa0-r\xa0/mnt/disk#\xa0/mnt/disk#"})}),"\n",(0,t.jsx)(n.p,{children:"Example:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"cp\xa0-r\xa0/mnt/disk4\xa0/mnt/disk8"})}),"\n",(0,t.jsx)(n.p,{children:"Copies all contents of disk4 to disk8. All files/directories on disk4\nremain."}),"\n",(0,t.jsx)(n.p,{children:"Note the above example will create a dir named 'disk4' on disk8 with\nthe contents underneath it. The original file date/time stamps will not\nbe preserved."}),"\n",(0,t.jsx)(n.p,{children:"See below for syntax to copy the root directory names only with all\nfiles underneath them and preserve the original file date/time stamps."}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"-r"})," option causes the ",(0,t.jsx)(n.strong,{children:"cp"})," command to copy directories\nrecursively. It is not necessary with a simple file copy."]}),"\n",(0,t.jsxs)(n.p,{children:["If you want to follow along as the copy proceeds, add the ",(0,t.jsx)(n.strong,{children:"-v"})," option\n(requesting verbose output)."]}),"\n",(0,t.jsx)(n.p,{children:"To copy the root directory names only and everything under them,\npreserve the original file date/time stamps and log the output to a text\nfile on the flash drive in a format readable by an editor like windows\nnotepad use this syntax:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"cp\xa0-r\xa0-v\xa0-p\xa0/mnt/disk4/*\xa0/mnt/disk8\xa0|\xa0todos\xa0>\xa0/boot/disk1copy.txt"})}),"\n",(0,t.jsx)(n.h3,{id:"moving-files",children:"Moving files"}),"\n",(0,t.jsx)(n.p,{children:"2) Move the contents of disk1 to disk2 using the mv command"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"mv\xa0/mnt/disk#/\xa0/mnt/disk#"})}),"\n",(0,t.jsx)(n.p,{children:"Example:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"mv\xa0/mnt/disk1\xa0/mnt/disk4"})}),"\n",(0,t.jsx)(n.p,{children:"Moves all contents from disk1 to disk4. All files/directories on disk1\nare now gone."}),"\n",(0,t.jsxs)(n.p,{children:["Caution: Using the ",(0,t.jsx)("b",{children:"move"})," command may be\npotentially dangerous as it will copy to the destination drive and then\ndelete your data file(s) from the source drive. In the interest of\nmaximum safety, you may want to use ",(0,t.jsx)("b",{children:"copy"}),"\ninstead."]}),"\n",(0,t.jsx)(n.h3,{id:"quotes",children:"Quotes"}),"\n",(0,t.jsx)(n.p,{children:'If you want to copy or move entire folders from one drive to another,\nand the folder names have spaces in them, you need to use "quotes"\naround the folder name, as in this example:'}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:'mv\xa0/mnt/disk2/"The\xa0Empire\xa0Strikes\xa0Back"\xa0/mnt/disk3'})}),"\n",(0,t.jsxs)(n.p,{children:["In the above example, the entire folder called ",(0,t.jsx)(n.strong,{children:"The Empire Strikes\nBack"})," would be moved from Disk 2 to Disk 3 with the same sub-folder\nstructure."]}),"\n",(0,t.jsx)(n.h3,{id:"wildcards",children:"Wildcards"}),"\n",(0,t.jsxs)(n.p,{children:["Wildcards are available as well. For example, if you want to copy all of\nthe files from Disk 2 over to Disk 3, use the ",(0,t.jsx)(n.strong,{children:"mv"})," command like this:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"mv\xa0/mnt/disk2/*\xa0/mnt/disk3"})}),"\n",(0,t.jsx)(n.p,{children:"In this example, all files and folders on Disk 2 would be relocated over\nto Disk 3 in the exact same folder structure as it was on Disk 2."})]})}function c(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>s});var t=i(7294);const o={},r=t.createContext(o);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);