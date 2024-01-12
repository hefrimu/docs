"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8894],{4917:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var t=r(5893),i=r(1151);const a={},s="The Parity Swap Procedure",o={id:"legacy/FAQ/parity-swap-procedure",title:"The Parity Swap Procedure",description:"_First release, tested only on v6.1 & 6.7.2_",source:"@site/docs/legacy/FAQ/parity-swap-procedure.md",sourceDirName:"legacy/FAQ",slug:"/legacy/FAQ/parity-swap-procedure",permalink:"/fr/legacy/FAQ/parity-swap-procedure",draft:!1,unlisted:!1,editUrl:"https://github.com/unraid/docs/tree/main/docs/legacy/FAQ/parity-swap-procedure.md",tags:[],version:"current",frontMatter:{},sidebar:"unraidSidebar",previous:{title:"Console",permalink:"/fr/legacy/FAQ/console"},next:{title:"Replacing a Data Drive",permalink:"/fr/legacy/FAQ/replacing-a-data-drive"}},d={},l=[{value:"Important Notes",id:"important-notes",level:2},{value:"The procedure",id:"the-procedure",level:2},{value:"The procedure for Unraid v4",id:"the-procedure-for-unraid-v4",level:2}];function h(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"the-parity-swap-procedure",children:"The Parity Swap Procedure"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.em,{children:(0,t.jsx)(n.code,{children:"First release, tested only on v6.1 & 6.7.2"})})})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"This page describes how to do the 'Parity Swap' procedure, often\nknown as the 'Swap Disable' procedure."})}),"\n",(0,t.jsx)(n.p,{children:"Historically, it was better known as the 'Swap Disable' procedure,\nprobably because it requires the data drive to be disabled first, then\ninvolves a swap of the parity drive, the disabled drive, and the new\nreplacement drive. Perhaps it should be called the \"3 drive parity\nshuffle\"?"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Why would you want to do this? To replace a data drive with a larger\none, that is even larger than the Parity drive."})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Unraid does not require a replacement drive to be the same size as\nthe drive being replaced. The replacement drive CANNOT be smaller\nthan the old drive, but it CAN be larger, much larger in fact. If\nthe replacement drive is the same size or larger, UP TO the same\nsize as the parity drive, then there is a simple procedure for that,\ncalled ",(0,t.jsx)(n.a,{href:"/fr/legacy/FAQ/replacing-a-data-drive",children:"Replacing a Data Drive"}),".\nBut if the replacement drive is LARGER than the Parity drive, then a\nspecial two-step procedure is required, described on this page. It\nwill use the larger-than-parity drive to first upgrade the parity\ndrive then use the old parity drive to replace the old data drive."]}),"\n",(0,t.jsx)(n.li,{children:"An example, you have a 1TB data drive that you want to replace (the\nreason does not matter). You have a 2TB parity drive. You buy a 4TB\ndrive as a replacement. The 'Parity Swap' procedure will copy the\nparity info from the current 2TB parity drive to the 4TB drive, zero\nthe rest, make it the new parity drive, then use the old 2TB parity\ndrive to replace the 1TB data drive. Now you can do as you wish with\nthe removed 1TB drive."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"important-notes",children:"Important Notes"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"If you have purchased a replacement drive, we always recommend\nPreclearing the replacement drive first, to make sure it's a good\ndrive that won't fail for a few years at least. The Preclearing is\nnot strictly necessary, as replacement drives don't have to be\ncleared, they are going to be completely overwritten. But\nPreclearing new drives one to three times provides a thorough test\nof the drive, eliminates 'infant mortality' failures."}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsxs)(n.strong,{children:["If your replacement drive is the same size or smaller than your\ncurrent Parity drive, then you don't need this procedure. Proceed\nwith the ",(0,t.jsx)(n.a,{href:"/fr/legacy/FAQ/replacing-a-data-drive",children:"Replacing a Data Drive"}),"\nprocedure."]})}),"\n",(0,t.jsx)(n.li,{children:"This procedure is strictly for replacing data drives in an Unraid\narray. If all you want to do is replace your Parity drive with a\nlarger one, then you don't need the Parity Swap procedure. Just\nremove the old parity drive and add the new one, and start the\narray. The process of building parity will immediately begin. (If\nsomething goes wrong, you still have the old parity drive that you\ncan put back!)"}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"IMPORTANT!!!"})," This procedure REQUIRES that the data drive being\nreplaced MUST be disabled first. If the drive failed (has a red\nball), then it is already 'disabled', but if the drive is OK but\nyou want to replace it anyway, then you have to force it to be\n'failed', by unassigning it and starting and stopping the array.\nUnraid only forgets a drive when the array is started without the\ndrive, otherwise it still associates it with the slot (but\n'Missing'). The array must be started once with the drive\nunassigned or disabled. Yes, it may seem odd, but is required before\nUnraid will recognize that you are trying to do a 'Parity Swap'.\nIt needs to see a disabled data disk with forgotten ID, a new disk\nassigned to its slot that used to be the parity disk, and a new disk\nassigned to the parity slot."]}),"\n",(0,t.jsxs)(n.li,{children:["Obviously, it's very important to identify the drives for\nassignment correctly! Have a list of the drive models that will be\ntaking part in this procedure, with the last 4 characters of their\nserial numbers. If the drives are recent Toshiba models, then they\nmay all end in ",(0,t.jsx)(n.strong,{children:"GS"})," or ",(0,t.jsx)(n.strong,{children:"S"}),", so you will want to note the\npreceding 4 characters instead."]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.em,{children:"Lastly, this page was only tested with v6 (and not with a disabled\ndrive), and is 'assumed' to be correct for all versions. (You know\nwhat happens when you 'assume'!) If you see any improvements or\ncorrections, please add them, or suggest them to us, either on the\n'discussion' page for this page, or on the Unraid forums. By the\nway, if you are NOT running the latest Unraid v6 release, we\nstrongly urge you to Upgrade to Unraid v6!"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"the-procedure",children:"The procedure"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"If you are running a very old version of Unraid, such as v4.7 or\nolder, skip down to the next section."})}),"\n",(0,t.jsx)(n.p,{children:"Note: these steps are the general steps needed. The steps you take\nmay differ depending on your situation. If the drive to be replaced\nhas failed and Unraid has disabled it, then you may not need steps 1\nand 2, and possibly not steps 3 and 4. If you have already installed\nthe new replacement drive (perhaps because you have been Preclearing\nit), then you would skip steps 5 through 8. Revise the steps as\nneeded."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Stop the array ",(0,t.jsx)(n.em,{children:"(if it's started)"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Unassign the old drive ",(0,t.jsx)(n.em,{children:"(if it's still assigned)"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"If the drive was a good drive and notifications are enabled, you\nwill get error notifications for a missing drive! This is normal."})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Start the array (put a check in the ",(0,t.jsx)(n.strong,{children:"Yes I want to do this"}),"\ncheckbox if it appears (older versions: ",(0,t.jsx)(n.strong,{children:"Yes, I'm sure"}),"))"]}),"\n",(0,t.jsx)(n.p,{children:"*Yes, you need to do this. Your data drive should be showing as"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Not installed"}),".*"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Stop the array again"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Power down"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"[ Optional ]"})," Pull the old drive"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"You may want to leave it installed, for Preclearing or testing or\nreassignment."})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Install the new drive (preclear STRONGLY suggested, but formatting\nnot needed)"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Power on"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Stop the array"}),"\n",(0,t.jsxs)(n.p,{children:["*",(0,t.jsx)(n.em,{children:'If you get an "Array Stopping\u2022Retry unmounting disk\nshare(s)..." message, try disabling Docker and/or VM in Settings\nand stopping the array again after rebooting.'})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Unassign the parity drive"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Assign the new drive in the parity slot"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"You may see more error notifications! This is normal."})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Assign the old parity drive in the slot of the old data drive being\nreplaced"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"You should now have blue drive status indicators for both the\nparity drive and the drive being replaced."})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Go to the ",(0,t.jsx)(n.strong,{children:"Main"})," -> ",(0,t.jsx)(n.strong,{children:"Array Operation"})," section"]}),"\n",(0,t.jsxs)(n.p,{children:["*You should now have a ",(0,t.jsx)(n.strong,{children:"Copy"})," button, with a statement indicating"]}),"\n",(0,t.jsxs)(n.p,{children:['"',(0,t.jsx)(n.strong,{children:"Copy"}),' will copy the parity information to the new parity\ndisk".*']}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Put a check in the ",(0,t.jsx)(n.strong,{children:"Yes I want to do this"})," checkbox (older\nversions: ",(0,t.jsx)(n.strong,{children:"Yes, I'm sure"}),"), and click the ",(0,t.jsx)(n.strong,{children:"Copy"})," button"]}),"\n",(0,t.jsx)(n.p,{children:"Now patiently watch the copy progress, takes a long time (~20\nhours for 4TB on a 3GHz Core 2 Duo). All of the contents of the old\nparity drive are being copied onto the new drive, then the remainder\nof the new parity drive will be zeroed."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"The array will NOT be available during this operation!"})}),"\n",(0,t.jsx)(n.p,{children:"If you disabled Docker and/or VM in settings earlier, go ahead\nand re-enable now."}),"\n",(0,t.jsxs)(n.p,{children:['When the copy completes, the array will still be stopped\n("',(0,t.jsx)(n.strong,{children:"Stopped"}),'. Upgrading disk/swapping parity.").']}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"Start"})," button will now be present, and the description will\nnow indicate that it is ready to start a Data-Rebuild."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Put a check in the ",(0,t.jsx)(n.strong,{children:"Yes I want to do this"})," checkbox (older\nversions: ",(0,t.jsx)(n.strong,{children:"Yes, I'm sure"}),"), and click the ",(0,t.jsx)(n.strong,{children:"Start"})," button"]}),"\n",(0,t.jsx)(n.p,{children:"The data drive rebuild begins. Parity is now valid, and the array\nis started."}),"\n",(0,t.jsx)(n.p,{children:"Because the array is started, you can use the array as normal, but\nfor best performance, we recommend you limit your usage."}),"\n",(0,t.jsx)(n.p,{children:"Once again, you can patiently watch the progress, takes a long time\ntoo! All of the contents of the old data drive are now being\nreconstructed on what used to be your parity drive, but is now\nassigned as the replacement data drive."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"That's it!"})," Once done, you have an array with a larger parity\ndrive and a replaced data drive that may also be larger!"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Note: many users like to follow up with a parity check, just to\ncheck everything. It's a good confidence builder!"})}),"\n",(0,t.jsx)(n.h2,{id:"the-procedure-for-unraid-v4",children:"The procedure for Unraid v4"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This section is only for old versions of Unraid, such as v4.7 or\nolder. If you are running v5 or v6 of Unraid, then go back to the\nprevious section."})}),"\n",(0,t.jsx)(n.p,{children:"Note: these steps are taken from the old manual, and they assume the\ndata drive has failed and been disabled. If not, then (just as\nabove) you may have to 'fail' the drive by removing the drive, and\nstarting and stopping the array one time."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Stop the array."}),"\n",(0,t.jsx)(n.li,{children:"Power down the unit."}),"\n",(0,t.jsx)(n.li,{children:"Replace the parity disk with the new bigger one."}),"\n",(0,t.jsx)(n.li,{children:"Replace the failed disk with your old parity disk."}),"\n",(0,t.jsx)(n.li,{children:"Power up the unit."}),"\n",(0,t.jsx)(n.li,{children:"Start the array."}),"\n",(0,t.jsx)(n.li,{children:"When you start the array, the system will first copy the parity\ninformation to the new parity disk, and then reconstruct the\ncontents of the failed disk."}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>s});var t=r(7294);const i={},a=t.createContext(i);function s(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);