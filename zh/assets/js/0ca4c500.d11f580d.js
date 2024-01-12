"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4618],{1157:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var t=i(5893),s=i(1151);const a={},r="Changing the flash device",o={id:"unraid-os/manual/changing-the-flash-device",title:"Changing the flash device",description:"Replacing your Unraid USB Flash Device transfers the license to a new USB Flash Device. Once this is done, the previous Flash device is blacklisted and cannot be used with Unraid going forward. This action cannot be undone.",source:"@site/docs/unraid-os/manual/changing-the-flash-device.md",sourceDirName:"unraid-os/manual",slug:"/unraid-os/manual/changing-the-flash-device",permalink:"/zh/unraid-os/manual/changing-the-flash-device",draft:!1,unlisted:!1,editUrl:"https://github.com/unraid/docs/tree/main/docs/unraid-os/manual/changing-the-flash-device.md",tags:[],version:"current",frontMatter:{},sidebar:"unraidSidebar",previous:{title:"Additional Settings",permalink:"/zh/unraid-os/manual/additional-settings"},next:{title:"Tools",permalink:"/zh/unraid-os/manual/tools"}},d={},l=[{value:"Why replace your USB flash boot device?",id:"why-replace-your-usb-flash-boot-device",level:2},{value:"What kind of USB device do I need?",id:"what-kind-of-usb-device-do-i-need",level:3},{value:"Before you replace your USB flash device",id:"before-you-replace-your-usb-flash-device",level:2},{value:"Recommendations on buying USB drives",id:"recommendations-on-buying-usb-drives",level:3},{value:"Replace the USB flash device",id:"replace-the-usb-flash-device",level:2},{value:"Backing up your flash drive",id:"backing-up-your-flash-drive",level:3},{value:"Back up your USB device using the Unraid WebGUI",id:"back-up-your-usb-device-using-the-unraid-webgui",level:4},{value:"What if I can&#39;t backup my device?",id:"what-if-i-cant-backup-my-device",level:4},{value:"Changing a flash device before purchasing a license",id:"changing-a-flash-device-before-purchasing-a-license",level:3},{value:"Using the USB Flash Creator",id:"using-the-usb-flash-creator",level:3},{value:"Manual method",id:"manual-method",level:3},{value:"Notes about replacing your registration key",id:"notes-about-replacing-your-registration-key",level:2},{value:"What to do if you have no backup and do not know your disk assignments",id:"what-to-do-if-you-have-no-backup-and-do-not-know-your-disk-assignments",level:2}];function h(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"changing-the-flash-device",children:"Changing the flash device"}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsxs)(n.p,{children:["Replacing your Unraid USB Flash Device transfers the license to a new USB Flash Device. Once this is done, the previous Flash device is ",(0,t.jsx)(n.em,{children:"blacklisted"})," and cannot be used with Unraid going forward. This action cannot be undone."]})}),"\n",(0,t.jsx)(n.p,{children:"The USB flash device used to boot up Unraid contains the operating system and your configuration. If this device fails or is about to fail, you are at risk of losing data and your system configuration. It is important to understand when and how to replace your USB flash device. The process by which you replace your USB flash device and transfer its content, configuration, and your Unraid OS license is detailed in this article, along with recommendations on your choice of new USB flash device."}),"\n",(0,t.jsx)(n.h2,{id:"why-replace-your-usb-flash-boot-device",children:"Why replace your USB flash boot device?"}),"\n",(0,t.jsx)(n.p,{children:"There are numerous reasons for which you may need to replace your USB flash device containing Unraid OS, preventing data loss and minimizing downtime for your Unraid server. The most common ones include:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The device is failing or has failed - the server refuses to boot, files are disappearing from the USB device, or the device repeatedly goes into read-only mode."}),"\n",(0,t.jsx)(n.li,{children:"The device has been lost or stolen - you have misplaced your USB flash device, or it has been stolen."}),"\n",(0,t.jsx)(n.li,{children:"The device is too slow or does not have enough storage - while 2 GB should be more than enough space, it is possible that your device fills up with data, or becomes increasingly slow to access."}),"\n",(0,t.jsx)(n.li,{children:"The device is physically too large - you want to replace the USB flash device with a smaller, more compact unit to fit a constrained space."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"what-kind-of-usb-device-do-i-need",children:"What kind of USB device do I need?"}),"\n",(0,t.jsx)(n.p,{children:"USB flash devices have become almost universal across store shelves. They come in different capacities, have different USB protocols, read and write data at varying speeds, come in all shapes and sizes and, most importantly, have different lifespans."}),"\n",(0,t.jsx)(n.p,{children:"Like most servers, this particular piece of hardware should focus on durability and reliability. Unlike most server hardware, speed is not a primary concern for Unraid, as it runs from RAM once booted. Based on our experience:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"USB 2.0 devices are typically recommended over USB 3.0 as they tend to be more reliable and universally recognized by computers."}),"\n",(0,t.jsx)(n.li,{children:"The USB device must contain a GUID in its programmable ROM."}),"\n",(0,t.jsx)(n.li,{children:"Capacity is not a key factor, but the USB device should have 2 GB minimum size, and 32 GB maximum, in the current version of Unraid."}),"\n",(0,t.jsx)(n.li,{children:"Physical size is only relevant when it comes to your server's physical location and setup."}),"\n",(0,t.jsx)(n.li,{children:"Using a reputable brand, from a reputable vendor, offers some reassurance of durability, but not every vendor is the same."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"before-you-replace-your-usb-flash-device",children:"Before you replace your USB flash device"}),"\n",(0,t.jsx)(n.p,{children:"Before replacing the current flash device, it may be worthwhile to carry out some diagnostics."}),"\n",(0,t.jsx)(n.p,{children:"Shut down your server, securely remove the flash device, and insert it into a Windows or Mac computer. Using Windows Scandisk or Disk Utilities on Mac, you should be able to try to identify errors or even repair the data on the device. A common scenario for this is if you recently experienced a power outage. A power outage will cause delayed write operations to be incomplete, resulting in misallocated data on the device. This can usually be fixed with the method above."}),"\n",(0,t.jsx)(n.p,{children:"If the disk maintenance operation works, you may want to consider continuing the use of the flash device as it is not currently failing. However, if you've done this before and are still having issues with your flash device, then replacement is recommended."}),"\n",(0,t.jsx)(n.h3,{id:"recommendations-on-buying-usb-drives",children:"Recommendations on buying USB drives"}),"\n",(0,t.jsx)(n.p,{children:"The first step is to acquire a new USB flash device. We recommend that you always buy USB drives from reputable retailers and do your best to avoid internet marketplaces or use second-hand devices, as these do not offer the necessary guarantees that your device meets the criteria to boot and maintain Unraid operations over the course of time."}),"\n",(0,t.jsxs)(n.p,{children:["Even well-known brands have been the target of counterfeiting by malicious actors. Please see ",(0,t.jsx)(n.a,{href:"https://forums.unraid.net/topic/119052-psa-on-sandisk-usbs/",children:"this forum announcement"})," on the matter of counterfeit SanDisk USB drives on the market. Due to this, at this time, we cannot officially recommend SanDisk USBs due to the issue of generic GUIDs found in knock-off / counterfeit units."]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["Do you want to select the ",(0,t.jsx)(n.em,{children:"best flash device for Unraid?"})," ",(0,t.jsx)(n.a,{href:"https://www.youtube.com/watch?v=jjkaidlZmgs",children:"See this video!"})]})}),"\n",(0,t.jsx)(n.h2,{id:"replace-the-usb-flash-device",children:"Replace the USB flash device"}),"\n",(0,t.jsxs)(n.p,{children:["There are two ways to swap out your USB flash device. If you are using a PC or Mac, you should use the ",(0,t.jsx)(n.a,{href:"https://unraid.net/download",children:"USB Flash Creator tool"})," for the easiest and most streamlined experience. The second method, if you are using a Linux system or if the USB Flash Creator tool is not working for some reason, is to ",(0,t.jsx)(n.a,{href:"#manual-method",children:"use the legacy method"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"backing-up-your-flash-drive",children:"Backing up your flash drive"}),"\n",(0,t.jsxs)(n.p,{children:["The next step is to create a full backup of your original Unraid OS USB flash boot device. It is ",(0,t.jsx)(n.strong,{children:"highly recommended"})," that you always have an up-to-date backup of your Unraid USB flash device."]}),"\n",(0,t.jsx)(n.h4,{id:"back-up-your-usb-device-using-the-unraid-webgui",children:"Back up your USB device using the Unraid WebGUI"}),"\n",(0,t.jsx)(n.p,{children:"To back up your Flash drive in Unraid:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["In the ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"Main"})})," tab select the ",(0,t.jsx)(n.strong,{children:"Flash"})," device from the boot device list."]}),"\n",(0,t.jsxs)(n.li,{children:["Under ",(0,t.jsx)(n.strong,{children:"Flash Device Settings"}),", select the ",(0,t.jsx)(n.strong,{children:"FLASH BACKUP"})," button to download a fully zipped backup of your current flash drive to your Mac or PC.\n",(0,t.jsx)(n.img,{alt:"Flash backup",src:i(6730).Z+"",width:"1618",height:"810"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Alternatively, you can use ",(0,t.jsx)(n.a,{href:"/zh/connect/help#restoring-flash-backup",children:"Unraid Connect"})," to back up your Flash boot device."]}),"\n",(0,t.jsx)(n.h4,{id:"what-if-i-cant-backup-my-device",children:"What if I can't backup my device?"}),"\n",(0,t.jsx)(n.p,{children:"In the event that your flash device has failed and you do not have a backup, you can still reconfigure Unraid on a new flash device and transfer your registration key to that device."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Install Unraid to a new flash drive using the ",(0,t.jsx)(n.a,{href:"#using-the-usb-flash-creator",children:"USB Flash Creator"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Either install your old key file in ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"Tools > Registration"})}),", or simply copy it to the ",(0,t.jsx)(n.code,{children:"\\boot\\config"})," directory on your USB flash device. The server will notice a GUID mismatch and display a ",(0,t.jsx)(n.strong,{children:"Replace Key"})," button on the ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"Tools > Registration"})})," page."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"To ensure no data loss after the server is booted, you will need to make sure you assign each disk to the array / cache exactly as it was prior to the failure. It is also a good idea to keep a screenshot of your drive setup, anytime you conclude a major change in the configuration of your Unraid server, for example, after the initial setup, or after adding/removing drives. If you do not know which disks were assigned where, create a post in the forum for further assistance."}),"\n",(0,t.jsx)(n.h3,{id:"changing-a-flash-device-before-purchasing-a-license",children:"Changing a flash device before purchasing a license"}),"\n",(0,t.jsxs)(n.p,{children:["If you're currently using a Trial key and you're ready to purchase, you may want to use a better flash drive for your paid license key. Perform the same steps in this guide for replacing the flash and, when done, purchase a registration key from the ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"Tools > Registration"})})," page."]}),"\n",(0,t.jsx)(n.admonition,{type:"important",children:(0,t.jsx)(n.p,{children:"Once you transfer a Trial configuration to a new flash device, you will be unable to start the array until you purchase a valid registration key (Trial keys can only work on the original device to which they were registered)."})}),"\n",(0,t.jsx)(n.h3,{id:"using-the-usb-flash-creator",children:"Using the USB Flash Creator"}),"\n",(0,t.jsxs)(n.p,{children:["The second step in the process, is to use the Unraid USB Flash Creator tool to restore your backup to the new USB flash device. This can be downloaded for Windows or macOS here: ",(0,t.jsx)(n.a,{href:"https://unraid.net/download",children:"Download USB Creator"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"USB Creator tool",src:i(9716).Z+"",width:"353",height:"329"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Obtain a new good quality USB flash device."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Plug it into your Mac or PC computer and then run the Unraid USB Creator software."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["For the version, select ",(0,t.jsx)(n.strong,{children:"Local Zip"}),", then browse to the location of the backup that you created earlier to select the ZIP file.\n",(0,t.jsx)(n.img,{alt:"Select version",src:i(3395).Z+"",width:"539",height:"514"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Next, make sure that you select your new USB Flash device for the destination, then select ",(0,t.jsx)(n.strong,{children:"Write"})," and your backup will be restored to the new USB flash device."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Shutdown the server. Remove the original USB flash device and replace it with the new one you have just created. Power on the server."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Once booted the array will not start and you will see the message:"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"Invalid, missing or expired registration Key"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Select ",(0,t.jsx)(n.strong,{children:"Registration Key"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Invalid key",src:i(6581).Z+"",width:"1619",height:"766"})}),"\n",(0,t.jsxs)(n.ol,{start:"8",children:["\n",(0,t.jsxs)(n.li,{children:["if you are not restoring from a backup, which would contain a copy of your license key file, then copy your existing license key file into the ",(0,t.jsx)(n.code,{children:"boot/config"})," folder on the flash drive. This lets Unraid know you want to switch your license to this new flash drive."]}),"\n",(0,t.jsxs)(n.li,{children:["In ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"Tools > Registration"})}),", select ",(0,t.jsx)(n.strong,{children:"REPLACE KEY"})," then enter the email address to which you would like to have the new key delivered to."]}),"\n",(0,t.jsxs)(n.li,{children:["Select ",(0,t.jsx)(n.strong,{children:"REPLACE KEY"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Replace key button",src:i(73).Z+"",width:"1619",height:"742"})}),"\n",(0,t.jsxs)(n.ol,{start:"11",children:["\n",(0,t.jsxs)(n.li,{children:["Once you have received the email, copy the key file URL, then paste it into the box and select ",(0,t.jsx)(n.strong,{children:"INSTALL KEY"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Finished! You have replaced the USB flash device and the registration key. You will see a screen showing the date this key was registered and the next date on which your registration key will be eligible to be replaced again."}),"\n",(0,t.jsxs)(n.ol,{start:"12",children:["\n",(0,t.jsxs)(n.li,{children:["Select ",(0,t.jsx)(n.strong,{children:"DONE"}),", to finish."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"manual-method",children:"Manual method"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Prepare a new flash device using the procedure documented in the ",(0,t.jsx)(n.a,{href:"/zh/unraid-os/getting-started/manual-install-method",children:"Manual Install Method"})," guide."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Before removing the flash from the PC, copy the ",(0,t.jsx)(n.code,{children:"config"})," folder from the backup you made, into the flash drive, overwriting existing files.\n(Note: if you are copying the folder directly from a running unraid server the folder path will be ",(0,t.jsx)(n.code,{children:"boot/config"})," instead however it should still be pasted to the ",(0,t.jsx)(n.code,{children:"config"})," folder on the USB)"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Shut down the server. Remove the original USB flash device and replace it with the new one. Power on the server."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Once booted the array will not start and you will see the message:"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"Invalid, missing or expired registration Key"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Select ",(0,t.jsx)(n.strong,{children:"Registration Key"}),".\n",(0,t.jsx)(n.img,{alt:"Invalid Key Example",src:i(6581).Z+"",width:"1619",height:"766"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"Tools > Registration"})}),", select ",(0,t.jsx)(n.strong,{children:"REPLACE KEY"})," then enter the email address to which you would like to have the new key delivered to."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Select ",(0,t.jsx)(n.strong,{children:"REPLACE KEY"}),".\n",(0,t.jsx)(n.img,{alt:"Replace Key Example",src:i(73).Z+"",width:"1619",height:"742"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Once you have received the email, copy the key file URL, then paste it into the box and click 'INSTALL KEY'"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Finished! You have replaced the USB flash device and the registration key. You will see a screen showing the date this key was registered and the next date on which your registration key will be eligible to be replaced again."}),"\n",(0,t.jsxs)(n.ol,{start:"9",children:["\n",(0,t.jsxs)(n.li,{children:["Select ",(0,t.jsx)(n.strong,{children:"DONE"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"notes-about-replacing-your-registration-key",children:"Notes about replacing your registration key"}),"\n",(0,t.jsx)(n.p,{children:"You may replace your original registration key at any time. After replacing your license key once, you may replace your key using the online automated method after a further period of 12 months."}),"\n",(0,t.jsxs)(n.p,{children:["Should you need to replace it again within that 12 month period, use the contact form at ",(0,t.jsx)(n.a,{href:"https://unraid.net/contact",children:"https://unraid.net/contact"}),". For expedited service, please include in your message the old and new USB GUIDs, as well as the license and email address used at the moment of purchase."]}),"\n",(0,t.jsx)(n.admonition,{type:"important",children:(0,t.jsxs)(n.p,{children:["We strive to manually replace licenses ASAP. If you cannot replace your registration key yourself (having done so more than once per year) and you need access to your server right away, it is recommended that you first ",(0,t.jsx)(n.a,{href:"https://unraid.net/download",children:"set up a new Unraid trial"})," with a new USB drive and then contact us to manually transfer your license."]})}),"\n",(0,t.jsx)(n.h2,{id:"what-to-do-if-you-have-no-backup-and-do-not-know-your-disk-assignments",children:"What to do if you have no backup and do not know your disk assignments"}),"\n",(0,t.jsx)(n.p,{children:"If your Unraid boot device has failed, you have no recent backup and are not sure of their disk assignments it is very important that you do not assign a data disk as a parity drive as this will cause data loss. Unraid overwrites it with parity data, destroying its contents. It can also happen if you accidentally use an old backup, have increased the size of your parity drive, and have re-used the old parity drive from that time as a data drive."}),"\n",(0,t.jsx)(n.p,{children:"Things to know:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Any parity drive will not have a mountable file system so if you can identify which drive(s) have unmountable file systems then these are probably your parity drives."}),"\n",(0,t.jsx)(n.li,{children:"Data drives previously used by Unraid will not have their contents wiped if you reset the array configuration."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"If you find you have more unmountable drives than you had parity drives then you should ask for help in the Unraid forums. In such a case the following steps can help you get your array drives back without data loss:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Create a fresh install of the Unraid flash drive as shown earlier."}),"\n",(0,t.jsxs)(n.li,{children:["Edit the file ",(0,t.jsx)(n.code,{children:"/boot/config/disk.cfg"})," on the flash drive and if necessary change the ",(0,t.jsx)(n.code,{children:'startArray="yes"'})," entry to ",(0,t.jsx)(n.code,{children:'startArray="no"'})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["This is to avoid any accidents that might result in a data drive getting overwritten with parity information. You can achieve the same effect from the Unraid GUI via the ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"Settings > Disk Settings"})})," option."]}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Go to ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"Tools > New Config"})})," and select the option to create a new array configuration. At this point there are two ways to proceed:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Assign all drives as data drives, then start the array. Once it has started, make a note of the serial numbers of drives showing as unmountable as these are most likely our parity drives."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Use the ",(0,t.jsx)(n.strong,{children:"Unassigned Devices"})," plugin to try and mount each drive in turn to see which ones fail to mount. Then, make a note of the serial numbers of drives showing as unmountable as these are probably our parity drives."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Now that you have identified the parity drives then:"}),"\n",(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsxs)(n.li,{children:["Go to ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"Tools > New Config"})})," and select the option to create a new array configuration. This time it is advisable to use the option to retain all currently configured drives as this avoids the need to rearrange all drives (and thus reduces the chances of error)."]}),"\n",(0,t.jsxs)(n.li,{children:["Go to the ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"Main"})})," tab and assign the drives as required with the correct drive(s) assigned as parity."]}),"\n",(0,t.jsxs)(n.li,{children:["If you only had a single (",(0,t.jsx)(n.code,{children:"parity1"}),") drive then the order of the data drives is not important as far as parity is concerned. You can safely tick the ",(0,t.jsx)(n.strong,{children:"Parity is Valid"})," checkbox. With dual parity then since the parity1 and parity2 drives use different calculations they are ",(0,t.jsx)(n.strong,{children:"not"})," interchangeable so you will need to generate parity from scratch on both drives."]}),"\n",(0,t.jsx)(n.li,{children:"Start the array to commit the drive assignments and you should see all your data drives have mounted and their contents are intact."}),"\n",(0,t.jsxs)(n.li,{children:["If you ticked the ",(0,t.jsx)(n.strong,{children:"Parity is Valid"})," checkbox then run a correcting parity check to make sure this was a valid assumption."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The above process will not necessarily mean the data drives are in the same order so if you have any shares that have specific drive include/exclude then you will need to look at the contents of the individual data drives to make sure these are as you want them (and correct them if not)."})]})}function c(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},6730:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/Backup_flash_drive-017807361dffbac915098b60d2a07116.png"},6581:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/Invalidkey-50c3f3163a051b6275dbaef06ccbcb4b.png"},73:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/Replacekey-6ba2def31bd3519f5702d9a06a9441a3.png"},3395:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/Selectversion-85d591f61c0456095ce33a9034e6325c.png"},9716:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/Usbcreator-570d904c896fac5296853634b65022d6.png"},1151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>r});var t=i(7294);const s={},a=t.createContext(s);function r(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);