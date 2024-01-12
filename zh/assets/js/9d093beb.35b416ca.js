"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7124],{7281:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var t=r(5893),i=r(1151);const o={},s="Shrink Array",a={id:"legacy/FAQ/shrink-array",title:"Shrink Array",description:"Note: this page has been tested for v6,",source:"@site/docs/legacy/FAQ/shrink-array.md",sourceDirName:"legacy/FAQ",slug:"/legacy/FAQ/shrink-array",permalink:"/zh/legacy/FAQ/shrink-array",draft:!1,unlisted:!1,editUrl:"https://github.com/unraid/docs/tree/main/docs/legacy/FAQ/shrink-array.md",tags:[],version:"current",frontMatter:{},sidebar:"unraidSidebar",previous:{title:"Setup Sleep (S3) and Wake on Lan (WOL)",permalink:"/zh/legacy/FAQ/setup-sleep-and-wake-on-lan"},next:{title:"Terminal Access",permalink:"/zh/legacy/FAQ/terminal-access"}},l={},d=[{value:"For Unraid v6.2 and later",id:"for-unraid-v62-and-later",level:2},{value:"The &quot;Remove Drives Then Rebuild Parity&quot; Method",id:"the-remove-drives-then-rebuild-parity-method",level:3},{value:"Procedure",id:"procedure",level:5},{value:"The &quot;Clear Drive Then Remove Drive&quot; Method",id:"the-clear-drive-then-remove-drive-method",level:3},{value:"Procedure",id:"procedure-1",level:5},{value:"Alternate Procedure for Linux proficient users",id:"alternate-procedure-for-linux-proficient-users",level:5},{value:"For Unraid v6.0 and 6.1 and possibly 5.0",id:"for-unraid-v60-and-61-and-possibly-50",level:2},{value:"Procedure",id:"procedure-2",level:5},{value:"Alternate procedure that maintains parity protection",id:"alternate-procedure-that-maintains-parity-protection",level:5}];function h(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h5:"h5",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"shrink-array",children:"Shrink Array"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Note: this page has been tested for v6,\nbut is still fairly new."})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Why would you want to shrink your array?"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Maybe you have recently found a red ball on one of your drives, and\nyou want to take it out of the array. You've got enough extra\nspace, and don't need to replace the drive."}),"\n",(0,t.jsx)(n.li,{children:"Or you are consolidating drives, replacing multiple smaller drives\nwith new and larger ones."}),"\n",(0,t.jsx)(n.li,{children:"Or you have an array drive that you no longer want in the array, for\nwhatever reason, and you don't want to replace it."}),"\n",(0,t.jsx)(n.li,{children:"Or you are out of SATA ports, and have emptied a smaller drive so\nyou can remove it, and reuse the SATA port."}),"\n",(0,t.jsx)(n.li,{children:"Or you wish to take one or more data drives to a new or different\narray, intact with all its data."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["In general, the best choice is to replace an unwanted or disabled drive\nby assigning a replacement drive, and allowing Unraid to rebuild it.\nThis way, parity protection for the array is maintained. The following\nmethods are for those who do not want to replace the drive, and are OK\nwith a temporary loss of parity protection. (There is a method below\nthat preserves parity!) ",(0,t.jsxs)(n.em,{children:["Update: a procedure to remove one or more\ndrives without invalidating parity protection is discussed\n",(0,t.jsx)(n.a,{href:"https://forums.unraid.net/topic/48707-additional-scripts-for-userscripts-plugin/#comment-490808",children:"here"}),".\nIt involves a dangerous command at a command prompt, so command line\nexperience is desirable."]})]}),"\n",(0,t.jsx)(n.p,{children:"Here are the procedures and methods for shrinking the array without\nlosing any data. Note: these procedures work exactly the same whether\nyour drive is disabled or not."}),"\n",(0,t.jsx)(n.h2,{id:"for-unraid-v62-and-later",children:"For Unraid v6.2 and later"}),"\n",(0,t.jsx)(n.p,{children:"There are 2 methods here for removing drives from an Unraid v6.2 array.\nCheck the conditions and comments at the top of each method, to know\nwhich one will work best for your situation."}),"\n",(0,t.jsx)(n.h3,{id:"the-remove-drives-then-rebuild-parity-method",children:'The "Remove Drives Then Rebuild Parity" Method'}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"For removing one or more drives from an Unraid array - this is the\ntried and true method"}),"\n",(0,t.jsx)(n.em,{children:"Note: this section has been tested for 6.2, but is still fairly\nnew"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"This method does not keep the drive's\ndata within the array. If the drive to be removed\nhas data you want to stay in the array, you must move it yourself to\nthe other data drives. Parity will be built based entirely and only\non the remaining drives and their contents."}),"\n",(0,t.jsx)(n.li,{children:"This method is best if you are removing more than one drive."}),"\n",(0,t.jsx)(n.li,{children:"This method should be used if you need to preserve the contents of\nthe data drive you are removing from the array."}),"\n",(0,t.jsx)(n.li,{children:"This method MUST be used if the drive cannot be cleared, that is, it\nis missing, disabled, or has bad sectors."}),"\n",(0,t.jsx)(n.li,{children:"This method does NOT preserve parity, so parity will have to be\nrebuilt once the array assignments have been adjusted."}),"\n"]}),"\n",(0,t.jsx)(n.h5,{id:"procedure",children:"Procedure"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:'Make sure that the drive or drives you are removing have been\nremoved from any inclusions or exclusions for all shares, including\nin the global share settings. Shares should be changed from the\ndefault of "All" to "Include". This include list should contain\nonly the drives that will be retained.'}),"\n",(0,t.jsx)(n.li,{children:'Make sure you have a copy of your array assignments, especially the\nparity drive. You may need this list if the "Retain current\nconfiguration" option doesn\'t work correctly'}),"\n",(0,t.jsx)(n.li,{children:"Stop the array (if it is started)"}),"\n",(0,t.jsxs)(n.li,{children:["Go to ",(0,t.jsx)(n.strong,{children:"Tools"})," then ",(0,t.jsx)(n.strong,{children:"New Config"})]}),"\n",(0,t.jsxs)(n.li,{children:["Click on the ",(0,t.jsx)(n.strong,{children:"Retain current configuration"})," box (says ",(0,t.jsx)(n.strong,{children:"None"})," at\nfirst), click on the box for ",(0,t.jsx)(n.strong,{children:"All"}),", then click on ",(0,t.jsx)(n.strong,{children:"close"})]}),"\n",(0,t.jsxs)(n.li,{children:["Click on the box for ",(0,t.jsx)(n.strong,{children:"Yes I want to do this"}),", then click ",(0,t.jsx)(n.strong,{children:"Apply"}),"\nthen ",(0,t.jsx)(n.strong,{children:"Done"})]}),"\n",(0,t.jsxs)(n.li,{children:["Return to the Main page, and check all assignments. If any are\nmissing, correct them. Unassign the drive(s) you are removing.\n",(0,t.jsx)(n.strong,{children:"Double check all of the assignments, especially the parity\ndrive(s)!"})]}),"\n",(0,t.jsxs)(n.li,{children:["Do not click the check box for ",(0,t.jsx)(n.strong,{children:"Parity is already valid"}),"; make\nsure it is NOT checked; parity is not valid now and won't be until\nthe parity build completes"]}),"\n",(0,t.jsx)(n.li,{children:"Start the array to commit the changes; system is usable now, but it\nwill take a long time rebuilding parity"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"the-clear-drive-then-remove-drive-method",children:'The "Clear Drive Then Remove Drive" Method'}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"For removing a drive from an Unraid array, while maintaining the\nparity protection - this is a new method"}),"\n",(0,t.jsx)(n.em,{children:"Note: this section has been tested but is still fairly new"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"This method preserves parity protection at all times."}),"\n",(0,t.jsx)(n.li,{children:"This method can only be used if it's a good drive that is\ncompletely empty, is mounted in the array, and can be completely\ncleared."}),"\n",(0,t.jsx)(n.li,{children:"This method is limited to removing only one drive at a time."}),"\n",(0,t.jsx)(n.li,{children:"As stated above, the drive must be completely empty. If there are\nstill any files on it (including hidden ones), they must be moved to\nanother drive, or deleted."}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.em,{children:"One quick way to clean a drive is reformat it! To format an array\ndrive, you stop the array and then on the Main page click on the\nlink for the drive and change the file system type to something\ndifferent than it currently is, then restart the array. You will\nthen be presented with an option to format it. Formatting a drive\nremoves all of its data, and the parity drive is updated\naccordingly, so the data cannot be easily recovered."})}),"\n",(0,t.jsxs)(n.li,{children:['Explanatory note: "',(0,t.jsx)(n.em,{children:"Since you are going to clear the drive anyway,\nwhy do I have to empty it? And what is the purpose of this\nstrange"}),"clear-me",(0,t.jsx)(n.em,{children:"folder?"}),"\" Yes it seems a bit draconian to require\nthe drive to be empty since we're about to clear and empty it in\nthe script, but we're trying to be absolutely certain we don't\ncause data loss. In the past, some users misunderstood the\nprocedure, and somehow thought we would preserve their data while\nclearing the drive! This way, by requiring the user to remove all\ndata, and then add an odd marker, there ",(0,t.jsx)(n.strong,{children:"cannot"})," be any accidents\nor misunderstandings and data loss."]}),"\n"]}),"\n",(0,t.jsx)(n.h5,{id:"procedure-1",children:"Procedure"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Make sure that the drive you are removing has been removed from any\ninclusions or exclusions for all shares, including in the global\nshare settings."}),"\n",(0,t.jsx)(n.li,{children:"Make sure the array is started, with the drive assigned and mounted."}),"\n",(0,t.jsx)(n.li,{children:'Make sure you have a copy of your array assignments, especially the\nparity drive. You may need this list if the "Retain current\nconfiguration" option doesn\'t work correctly.'}),"\n",(0,t.jsxs)(n.li,{children:["It is ",(0,t.jsx)(n.strong,{children:"highly recommended"})," to turn on ",(0,t.jsx)(n.strong,{children:"reconstruct write"}),", as\nthe write method (sometimes called 'Turbo write'). With it on, the\nscript can run 2 to 3 times as fast, saving hours!\nIn ",(0,t.jsx)(n.strong,{children:"Settings"})," -> ",(0,t.jsx)(n.strong,{children:"Disk Settings"}),", change ",(0,t.jsx)(n.strong,{children:"Tunable\n(md_write_method)"})," to ",(0,t.jsx)(n.strong,{children:"reconstruct write"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"Make sure ALL data has been copied off the drive; drive MUST be\ncompletely empty for the clearing script to work."}),"\n",(0,t.jsxs)(n.li,{children:["Double check that there are no files or folders left on the drive.\n",(0,t.jsx)(n.em,{children:"Note: one quick way to clean a drive is reformat it! (once you're\nsure nothing of importance is left of course!)"})]}),"\n",(0,t.jsxs)(n.li,{children:["Create a single folder on the drive with the name ",(0,t.jsx)(n.strong,{children:"clear-me"})," -\nexactly 7 lowercase letters and one hyphen"]}),"\n",(0,t.jsxs)(n.li,{children:["Run the ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"https://forums.unraid.net/topic/48707-additional-scripts-for-userscripts-plugin/#comment-490808",children:"clear an array\ndrive"})}),"\nscript from the ",(0,t.jsx)(n.a,{href:"https://forums.unraid.net/topic/48286-plugin-ca-user-scripts/",children:"User\nScripts"}),"\nplugin (or run it standalone, at a command prompt).","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"If you prepared the drive correctly, it will completely and\nsafely zero out the drive. If you didn't prepare the drive\ncorrectly, the script will refuse to run, in order to avoid any\nchance of data loss."}),"\n",(0,t.jsx)(n.li,{children:"If the script refuses to run, indicating it did not find a\nmarked and empty drive, then very likely there are still files\non your drive. Check for hidden files. ALL files must be\nremoved!"}),"\n",(0,t.jsx)(n.li,{children:"Clearing takes a loooong time! Progress info will be displayed,\nin 6.2 or later. Prior to 6.2, nothing will show until it\nfinishes."}),"\n",(0,t.jsx)(n.li,{children:"If running in User Scripts, the browser tab will hang for the\nentire clearing process."}),"\n",(0,t.jsxs)(n.li,{children:["While the script is running, the Main screen may show invalid\nnumbers for the drive, ignore them. ",(0,t.jsx)(n.strong,{children:"Important! Do not try to\naccess the drive, at all!"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"When the clearing is complete, click done and stop the array - do\nnot remove the cleared disk yet."}),"\n",(0,t.jsxs)(n.li,{children:["Go to ",(0,t.jsx)(n.strong,{children:"Tools"})," then ",(0,t.jsx)(n.strong,{children:"New Config"})]}),"\n",(0,t.jsxs)(n.li,{children:["Click on the ",(0,t.jsx)(n.strong,{children:"Retain current configuration"})," box (says ",(0,t.jsx)(n.strong,{children:"None"})," at\nfirst), click on the box for ",(0,t.jsx)(n.strong,{children:"All"}),", then click on ",(0,t.jsx)(n.strong,{children:"close"})]}),"\n",(0,t.jsxs)(n.li,{children:["Click on the box for ",(0,t.jsx)(n.strong,{children:"Yes I want to do this"}),", then click ",(0,t.jsx)(n.strong,{children:"Apply"}),"\nthen ",(0,t.jsx)(n.strong,{children:"Done"})]}),"\n",(0,t.jsxs)(n.li,{children:["Return to the Main page, and check all assignments. If any are\nmissing, correct them. ",(0,t.jsx)(n.strong,{children:"Unassign the drive(s) you are removing."}),"\n",(0,t.jsx)(n.strong,{children:"Double check all of the assignments, especially the parity\ndrive(s)!"}),' If the cleared drive is "hot-swappable" you may now\nremove the cleared drive and follow the steps below. If it is not,\nfollow the steps below.']}),"\n",(0,t.jsxs)(n.li,{children:["Click the check box for ",(0,t.jsx)(n.strong,{children:"Parity is already valid"}),", make sure it is\nchecked!"]}),"\n",(0,t.jsxs)(n.li,{children:["Start the array! Click the ",(0,t.jsx)(n.strong,{children:"Start"})," button then the ",(0,t.jsx)(n.strong,{children:"Proceed"}),"\nbutton (on the warning popup that will pop up)"]}),"\n",(0,t.jsx)(n.li,{children:"Parity should still be valid, however it's highly recommended to do\na Parity Check"}),"\n",(0,t.jsx)(n.li,{children:"If you do not have hot swappable drives, you may now safely shutdown\nyour server and remove the cleared drive."}),"\n"]}),"\n",(0,t.jsx)(n.h5,{id:"alternate-procedure-for-linux-proficient-users",children:"Alternate Procedure for Linux proficient users"}),"\n",(0,t.jsx)(n.p,{children:"It's actually the same procedure as above, except that you can\nreplace steps 7 and 8 by performing the clearing commands yourself\nat a command prompt. (Clearing takes just as long though!) If you\nwould rather do that, than run the script in steps 7 and 8, then\nhere are the 2 commands to perform:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"umount /mnt/diskX\ndd bs=1M if=/dev/zero of=/dev/mdX status=progress\n(where X in both lines is the number of the data drive being removed)\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Important!!! It is VITAL you use the correct drive number, or you\nwill wipe clean the wrong drive!"})," That's why using the script is\nrecommended, because it's designed to protect you from accidentally\nclearing the wrong drive."]}),"\n",(0,t.jsx)(n.h2,{id:"for-unraid-v60-and-61-and-possibly-50",children:"For Unraid v6.0 and 6.1 and possibly 5.0"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Notice: This section has been partially rewritten, is not well\ntested yet. But it's based on the old tried and true method for\nremoving drives"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.em,{children:"These instructions assume you are using Unraid v6, but may work for\nUnraid v5 also."})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.em,{children:"This procedure starts by removing all drive assignments. You will\nthen need to reenter all of them from your notes, making any changes\nyou desire."})}),"\n"]}),"\n",(0,t.jsx)(n.h5,{id:"procedure-2",children:"Procedure"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Take a screenshot of your current array assignments, or make good\nnotes of them"}),"\n",(0,t.jsx)(n.li,{children:"Make sure that the drive or drives you are removing have been\nremoved from any inclusions or exclusions for all shares, including\nin the global share settings."}),"\n",(0,t.jsx)(n.li,{children:"Stop the array (if it is started)"}),"\n",(0,t.jsxs)(n.li,{children:["Go to ",(0,t.jsx)(n.code,{children:"<Tools>"})," and click ",(0,t.jsx)(n.code,{children:"<New config>"}),", then\n",(0,t.jsx)(n.code,{children:"<Apply>"}),", then ",(0,t.jsx)(n.code,{children:"<Done>"})]}),"\n",(0,t.jsx)(n.li,{children:"Reassign all disks except the ones you are removing, using your\nnotes or screen shot"}),"\n",(0,t.jsx)(n.li,{children:"Double check that your Parity disk(s) are assigned correctly!"}),"\n",(0,t.jsx)(n.li,{children:'Do not click the check box for "Parity is already valid"; make\nsure it is NOT checked; parity is not valid now and won\'t be until\nthe parity build completes'}),"\n",(0,t.jsx)(n.li,{children:"Start the array - will take a long time while it rebuilds parity"}),"\n"]}),"\n",(0,t.jsx)(n.h5,{id:"alternate-procedure-that-maintains-parity-protection",children:"Alternate procedure that maintains parity protection"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:'If you wish, the "Clear Drive Then Remove Drive" method in the 6.2\nsection above can be carefully adapted for use. You won\'t have the\n"Retain" option, or the "reconstruct write" tunable option, or\nthe User Scripts plugin. v5 users may have to use the "Trust\nParity" method rather than the "Parity is already valid" option.\nAnd you won\'t have any progress info at all during the clearing! It\nwill be finished when it finishes!'}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:'*In Unraid v6.0 and v6.1 (not v5), you can turn on "reconstruct\nwrite" (sometimes known as "turbo write" because it runs\nsignificantly faster) with the following command at the command line\n*after* the array is started:'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"mdcmd set md_write_method 1\n"})}),"\n"]}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>s});var t=r(7294);const i={},o=t.createContext(i);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);