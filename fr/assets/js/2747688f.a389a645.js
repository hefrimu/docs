"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9742],{4137:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(a),h=r,g=p["".concat(l,".").concat(h)]||p[h]||c[h]||i;return a?n.createElement(g,o(o({ref:t},u),{},{components:a})):n.createElement(g,o({ref:t},u))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var d=2;d<i;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},8568:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=a(7462),r=(a(7294),a(4137));const i={sidebar_position:2},o="Quick install guide",s={unversionedId:"unraid-os/getting-started/quick-install-guide",id:"unraid-os/getting-started/quick-install-guide",title:"Quick install guide",description:"Create your bootable media with Unraid OS",source:"@site/docs/unraid-os/getting-started/quick-install-guide.md",sourceDirName:"unraid-os/getting-started",slug:"/unraid-os/getting-started/quick-install-guide",permalink:"/fr/unraid-os/getting-started/quick-install-guide",draft:!1,editUrl:"https://github.com/unraid/docs/tree/main/docs/unraid-os/getting-started/quick-install-guide.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"unraidSidebar",previous:{title:"Getting started",permalink:"/fr/unraid-os/getting-started/"},next:{title:"Manual install method",permalink:"/fr/unraid-os/getting-started/manual-install-method"}},l={},d=[{value:"Create your bootable media with Unraid OS",id:"create-your-bootable-media-with-unraid-os",level:2},{value:"Setting up the Unraid OS",id:"setting-up-the-unraid-os",level:2},{value:"Connecting to the Unraid WebGUI",id:"connecting-to-the-unraid-webgui",level:3},{value:"Setting a root password",id:"setting-a-root-password",level:3},{value:"Registering and installing your license key",id:"registering-and-installing-your-license-key",level:3},{value:"Assigning Devices to the Array and Pool(s)",id:"assigning-devices-to-the-array-and-pools",level:3},{value:"Starting the Array and Formatting Your Devices",id:"starting-the-array-and-formatting-your-devices",level:3},{value:"Stopping the array, shutting down, and rebooting",id:"stopping-the-array-shutting-down-and-rebooting",level:3},{value:"Managing your server with Unraid Connect",id:"managing-your-server-with-unraid-connect",level:3},{value:"Getting help",id:"getting-help",level:3}],u={toc:d},p="wrapper";function c(e){let{components:t,...i}=e;return(0,r.kt)(p,(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"quick-install-guide"},"Quick install guide"),(0,r.kt)("h2",{id:"create-your-bootable-media-with-unraid-os"},"Create your bootable media with Unraid OS"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Insert a quality USB flash device into your Mac or PC."),(0,r.kt)("li",{parentName:"ol"},"Download the ",(0,r.kt)("a",{parentName:"li",href:"https://unraid.net/download"},"USB Flash Creator")," and use it to install Unraid OS onto your USB flash device, or use the ",(0,r.kt)("a",{parentName:"li",href:"/fr/unraid-os/getting-started/manual-install-method"},"Manual install method"),"."),(0,r.kt)("li",{parentName:"ol"},"Remove the flash device from your PC and plug it into your server."),(0,r.kt)("li",{parentName:"ol"},"Boot into your server's BIOS settings and make the following changes:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Configure the system to boot from the USB flash device."),(0,r.kt)("li",{parentName:"ul"},"Enable hardware virtualization-specific features (including IOMMU).",(0,r.kt)("br",{parentName:"li"}),"You can find more details on BIOS configuration in the ",(0,r.kt)("a",{parentName:"li",href:"/fr/unraid-os/getting-started/advanced-bios-config"},"Advanced BIOS configuration")," guide."))),(0,r.kt)("li",{parentName:"ol"},"Save your BIOS configuration changes and exit to boot Unraid OS.")),(0,r.kt)("h2",{id:"setting-up-the-unraid-os"},"Setting up the Unraid OS"),(0,r.kt)("p",null,"Once Unraid OS has booted, you can now bring up the browser-based management utility, a.k.a. the WebGUI, and complete your system configuration."),(0,r.kt)("h3",{id:"connecting-to-the-unraid-webgui"},"Connecting to the Unraid WebGUI"),(0,r.kt)("p",null,"There are two methods to connect to the WebGUI in Unraid, and you can always:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Boot Unraid in GUI mode and login (username is ",(0,r.kt)("inlineCode",{parentName:"li"},"root"),", no password by default)."),(0,r.kt)("li",{parentName:"ul"},"Open a web browser from your Mac or PC and navigate to ",(0,r.kt)("inlineCode",{parentName:"li"},"http://tower.local"))),(0,r.kt)("admonition",{type:"important"},(0,r.kt)("p",{parentName:"admonition"},"Note that as soon as the Unraid server is booted up, it will be available on your local area network. This means you can simply type  the IP address of the computer hosting the Unraid server in a browser address bar."),(0,r.kt)("p",{parentName:"admonition"},"Also, if you configured a different host name in the USB Flash Creator, use that name instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"tower"),".")),(0,r.kt)("h3",{id:"setting-a-root-password"},"Setting a root password"),(0,r.kt)("p",null,"Once you are connected to the WebGUI, you will immediately be prompted to set a strong root password.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("img",{alt:"Set password",src:a(1726).Z,width:"518",height:"655"})),(0,r.kt)("p",null,"Strong passwords are unique (not reused), have at least 8 characters (the more the better), are a combination of alphabetic, numeric, and special characters, and are not common dictionary words. Better yet, use a 3rd party password manager."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you happen to forget your root password, the steps to reset it can be found ",(0,r.kt)("a",{parentName:"p",href:"/fr/unraid-os/guides/reset-password"},"here"),".")),(0,r.kt)("h3",{id:"registering-and-installing-your-license-key"},"Registering and installing your license key"),(0,r.kt)("p",null,"Once a root password is set, you will be logged into the WebGUI. Now you need to sign in to Unraid.net and obtain a license key."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Sign in")," or ",(0,r.kt)("strong",{parentName:"li"},"Sign up"),", in the ",(0,r.kt)("strong",{parentName:"li"},"Get Started")," section in the top-right of the WebGUI.\n",(0,r.kt)("img",{alt:"UPC getting started",src:a(1914).Z,width:"575",height:"322"})),(0,r.kt)("li",{parentName:"ol"},"Upon signing in, a trial key will be downloaded and installed to your system automatically.",(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("img",{alt:"UPC installing a trial key",src:a(3749).Z,width:"597",height:"866"}),(0,r.kt)("br",{parentName:"li"}),"The purpose of the sign-in is to provide a way for you to manage your license keys for Unraid OS (obtain a trial key, purchase a paid key, recover a lost key, replace your key with a new flash device, or upgrade a key from one edition to another).")),(0,r.kt)("admonition",{type:"important"},(0,r.kt)("p",{parentName:"admonition"},"In Unraid versions 6.9 and earlier, registering for a Trial, installing a key, or purchasing a key is done from ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Tools > Registration")),".")),(0,r.kt)("h3",{id:"assigning-devices-to-the-array-and-pools"},"Assigning Devices to the Array and Pool(s)"),(0,r.kt)("p",null,"After installing a registration key, you are ready to begin assigning devices for Unraid to manage."),(0,r.kt)("p",null,"You assign devices in the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Main"))," tab from the Unraid WebGUI. On this page, you can see a list of Array device and Pool device assignments, as well as any unassigned devices and the boot device.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("img",{alt:"Configure the array",src:a(4557).Z,width:"1648",height:"859"})),(0,r.kt)("p",null,"Unraid OS uses drives for different functions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Array devices")," are your general storage in Unraid. They fall in two categories: parity and non-parity. Parity devices provide fault tolerance in case your array suffers data loss. If you need to replace a faulty drive, these are used to rebuild your array. You can have up to two parity drives.  Your non-parity devices contain your custom shares and folders, as well as any files you add to them, like media files."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Pool Devices")," are your cache storage, usually a high-performing device which can read and write at speeds far greater than an HDD. Pool devices are used to temporarily store files until they are offloaded to the array."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("strong",{parentName:"li"},"Boot Device")," is the USB flash device used to boot Unraid OS from.")),(0,r.kt)("p",null,"Use the dropdowns to select disks for your array (parity and non-parity drives) and pool devices."),(0,r.kt)("p",null,"Follow these recommendations when assigning disks:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Always pick the largest storage device available to act as your parity device(s)"),". When expanding your array in the future (adding more devices to data disk slots), you cannot assign a data disk that is larger than your parity device(s). For this reason, it is highly recommended to purchase the largest HDD available for use as your initial parity device, so future expansions aren\u2019t limited to small device sizes. If assigning dual parity disks, your two parity disks can vary in size, but the same rule holds true that no data disk in the array can be larger than your smallest parity device.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"SSD support in the array is experimental"),". Some SSDs may not be ideal for use in the array due to how TRIM / Discard may be implemented. Using SSDs as data/parity devices may have unexpected/undesirable results. This does not apply to the cache / cache pool.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Using a pool as a cache will improve array performance"),". It does this by redirecting write operations to a dedicated disk (or pool of disks in Unraid) and moves that data to the array on a schedule that you define (by default, once per day at 3:40 AM). Data written to a cache pool is still presented through your user shares, making use of this function completely transparent. You control at the User Share level which shares should use a pool for cache purposes and which pool that should be.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Creating a multi-device pool adds protection for cached data"),". If you only assign one device to the cache pool, data residing there before being moved to the array on a schedule is not protected from data loss. To ensure data remains protected at all times (both on data and cache disks), you must assign more than one device to the pool, creating what is typically called a cache-pool. Cache pools can be expanded on demand, similar to the array.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"SSD-based pools are ideal for applications and virtual machines"),". Apps and VMs benefit from SSDs as they can leverage their raw IO potential to perform faster when interacting with them. Use SSDs in a pool for the ultimate combination of functionality, performance, and protection."))),(0,r.kt)("admonition",{type:"important"},(0,r.kt)("p",{parentName:"admonition"},"Your array will not start if you have attached more storage devices than your ",(0,r.kt)("a",{parentName:"p",href:"https://unraid.net/pricing"},"license key")," allows.")),(0,r.kt)("h3",{id:"starting-the-array-and-formatting-your-devices"},"Starting the Array and Formatting Your Devices"),(0,r.kt)("p",null,"Once you have all your devices assigned, you can select the ",(0,r.kt)("strong",{parentName:"p"},"Start")," button under ",(0,r.kt)("strong",{parentName:"p"},"Array Operation"),". This will mount your devices and start the array."),(0,r.kt)("p",null,"New devices added to disk or cache device slots will appear as 'Unformatted' and will be unusable for storing files until you format them. Unraid defaults to using the XFS filesystem for all devices, but if you define a cache pool then BTRFS will automatically be used for those devices. You can change the default file system under ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Settings > System Settings > Disk Settings")),"."),(0,r.kt)("p",null,"To format your devices for use, you must select the ",(0,r.kt)("strong",{parentName:"p"},"Format")," check box under ",(0,r.kt)("strong",{parentName:"p"},"Array Operation"),", acknowledge the resulting prompt (read it carefully), and then select the ",(0,r.kt)("strong",{parentName:"p"},"Format")," button."),(0,r.kt)("p",null,"Even before the devices are formatted, a parity sync will be performed in the background to initialize the protection of the array. Until the sync is completed, the array will operate but in an unprotected state. It is recommended to wait until the initial parity sync completes before adding data to the array."),(0,r.kt)("h3",{id:"stopping-the-array-shutting-down-and-rebooting"},"Stopping the array, shutting down, and rebooting"),(0,r.kt)("p",null,"In order to perform one of these operations, in ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Main"))," scroll down to the section titled ",(0,r.kt)("strong",{parentName:"p"},"Array Operation")," and select the button appropriate to the operation you wish to carry out."),(0,r.kt)("h3",{id:"managing-your-server-with-unraid-connect"},"Managing your server with Unraid Connect"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/fr/connect/about"},"Unraid Connect")," is a plugin for Unraid, available through Community applications. Using Unraid Connect you can manage all your server instances through a unified ",(0,r.kt)("a",{parentName:"p",href:"https://connect.myunraid.net/"},"Unraid Connect Dashboard"),"."),(0,r.kt)("p",null,"Unraid connect uses your Unraid.net credentials for access management, while communicating with our cloud servers through a secure connection. For a better understanding of how we handle this, read the ",(0,r.kt)("a",{parentName:"p",href:"/fr/connect/help#privacy"},"Privacy section")," in our Unraid Connect documentation."),(0,r.kt)("h3",{id:"getting-help"},"Getting help"),(0,r.kt)("p",null,"If you're struggling with some stage of the Unraid installation, check out our ",(0,r.kt)("a",{parentName:"p",href:"/fr/unraid-os/faq/installation"},"Installation FAQ"),"!"))}c.isMDXComponent=!0},4557:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Configuringarray1-b563b7a09206ee11573eb77ad400c45c.png"},1726:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Set_root_password-4ff6b82e5658cb5c8fb377baf3f53a8e.png"},1914:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Upc_get_started-4630213996717795a6d0c89481d61bdd.png"},3749:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Upc_install_trial_key-441ac5223d84cf58dfa291d8814f1c62.png"}}]);