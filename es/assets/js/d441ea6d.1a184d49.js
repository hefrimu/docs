"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[879],{3288:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>o});var t=r(5893),i=r(1151);const a={},s="Replacing Multiple Data Drives with a Single Larger Drive",l={id:"legacy/FAQ/replacing-multiple-data-drives",title:"Replacing Multiple Data Drives with a Single Larger Drive",description:"Problem: You want to consolidate several smaller drives onto a new and",source:"@site/docs/legacy/FAQ/replacing-multiple-data-drives.md",sourceDirName:"legacy/FAQ",slug:"/legacy/FAQ/replacing-multiple-data-drives",permalink:"/es/legacy/FAQ/replacing-multiple-data-drives",draft:!1,unlisted:!1,editUrl:"https://github.com/unraid/docs/tree/main/docs/legacy/FAQ/replacing-multiple-data-drives.md",tags:[],version:"current",frontMatter:{},sidebar:"unraidSidebar",previous:{title:"Replacing a Data Drive",permalink:"/es/legacy/FAQ/replacing-a-data-drive"},next:{title:"Setting Up CPU and Board Temperature Sensing",permalink:"/es/legacy/FAQ/setting-up-cpu-and-board-temperature-sensing"}},d={},o=[{value:"Faster Method",id:"faster-method",level:2},{value:"Safer Method",id:"safer-method",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"replacing-multiple-data-drives-with-a-single-larger-drive",children:"Replacing Multiple Data Drives with a Single Larger Drive"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Problem: You want to consolidate several smaller drives onto a new and\nlarger drive."})}),"\n",(0,t.jsx)(n.p,{children:"An example: you have two 2TB data drives and you want to replace them\nwith a single 4TB drive."}),"\n",(0,t.jsx)(n.p,{children:"Some notes before you start:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"IMPORTANT!!! Any time you remove drives from the array, parity\nmust be rebuilt. In the example above, there will be one less drive\nat the end, so there will HAVE to be a parity rebuild."})}),"\n",(0,t.jsx)(n.li,{children:"Parity drive must be at least as large as the largest single data\ndrive. For the example above, parity would have to be at least 4TB."}),"\n",(0,t.jsx)(n.li,{children:"You should be reasonably confident in the health of all drives\nbefore attempting a change to your array configuration. A recent\nparity check and SMART reports for all drives would be a good idea."}),"\n",(0,t.jsx)(n.li,{children:"It is recommended that any time a new drive is put in the array, the\nlatest version of the preclear script is used on the drive to test\nthat it can be trusted in the array. A problem with one disk can\nprevent other disks from being recovered if they have a problem."}),"\n",(0,t.jsxs)(n.li,{children:["Writing the large amount of data that may be involved with very\nlarge drives can take many hours. When using a\n",(0,t.jsx)(n.a,{href:"/es/legacy/FAQ/terminal-access",children:"telnet"})," session to transfer data, it is\nrecommended that the linux ",(0,t.jsx)(n.strong,{children:"screen"})," command be used, so the\nsession can be resumed if there is any disconnect or timeout. In\nUnraid v6, install the\n",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"https://forums.unraid.net/forum/index.php?topic=37541",children:"NerdPack"})}),"\nto obtain ",(0,t.jsx)(n.strong,{children:"screen"})," (see the NerdPack notes\n",(0,t.jsx)(n.a,{href:"http://lime-technology.com/wiki/index.php/Upgrading_to_UnRAID_v6#Plugins",children:"here"}),")."]}),"\n",(0,t.jsx)(n.li,{children:"Ensure that no new files will be written to the affected drives\nduring this process. If user shares and caching might involve the\ndrives, don't write to the user shares, and run Mover before\nstarting to make sure all writes to the drives are finished."}),"\n",(0,t.jsx)(n.li,{children:"Any time you change your array configuration, be very careful when\nassigning the parity drive. If you accidentally assign a data drive\nto the parity slot and start the array, that drive will be\noverwritten with parity and the data will be lost!"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"---- There are two methods you can use to replace multiple drives\nwith a single larger drive, the faster method, and the safer method.\nEither of these methods can be easily adapted to replace 3 or more\ndrives with a larger drive."}),"\n",(0,t.jsx)(n.h2,{id:"faster-method",children:"Faster Method"}),"\n",(0,t.jsx)(n.p,{children:"This method disables the parity drive while transferring data from the\nsmaller drives to the larger drive, and then rebuilds parity at the end.\nNot having parity allows faster writing to the larger drive."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Stop array and power down."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Add new larger drive and power up."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Stop array and use Tools - New Config."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Assign new larger drive to new slot, unassign parity drive, and\nstart array."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Copy all files from the smaller drives to the larger drive. For\nexample, if the smaller drives are Disk 1 and Disk 2, and the larger\ndrive is Disk 3, then you could use these commands in console or\ntelnet:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"rsync -avX /mnt/disk1/ /mnt/disk3\nrsync -avX /mnt/disk2/ /mnt/disk3\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Stop array and power down."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Remove smaller drives and power up."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Use New Config to unassign removed drives and assign parity. You can\nalso change the slot assignment of the new drive or any other drives\nat this point."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Start array and let parity rebuild."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"safer-method",children:"Safer Method"}),"\n",(0,t.jsx)(n.p,{children:"This method rebuilds one of the smaller drives onto the new larger drive\nthen copies the data from the other smaller drives. This will maintain\nparity during the data transfer then rebuild parity after the last of\nthe smaller drives have been removed."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Stop array and power down."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Replace one of the smaller drives with the new larger drive and\npower up."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Assign new larger drive to replace missing smaller drive, and start\nthe array, to let Unraid rebuild onto it."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Copy all files from the other smaller drive(s) to the larger drive.\nFor example, if a smaller drive is Disk 2 and the larger drive is\nDisk 3, then you could use this command in console or telnet:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"rsync -avX /mnt/disk2/ /mnt/disk3\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Stop array and power down."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Remove the remaining smaller drive(s) and power up."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Use New Config to unassign removed drive(s). You can also change the\nslot assignments of the new drive or any other drives at this point."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Start array and let parity rebuild."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Important! If any user shares are set to include/exclude specific\ndisks, don't forget to update these settings to reflect the new drive\nnumbering."})})]})}function c(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>l,a:()=>s});var t=r(7294);const i={},a=t.createContext(i);function s(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);