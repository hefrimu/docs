"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2269],{4137:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=o,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||r;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6959:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(7462),o=(n(7294),n(4137));const r={},i="Unraid Connect Help",s={unversionedId:"connect/help",id:"connect/help",title:"Unraid Connect Help",description:"How to Install",source:"@site/docs/connect/help.md",sourceDirName:"connect",slug:"/connect/help",permalink:"/es/connect/help",draft:!1,editUrl:"https://github.com/unraid/docs/tree/main/docs/connect/help.md",tags:[],version:"current",frontMatter:{},sidebar:"unraidSidebar",previous:{title:"About Unraid Connect",permalink:"/es/connect/about"},next:{title:"Remote Access",permalink:"/es/connect/remote-access"}},l={},c=[{value:"<strong>How to Install</strong>",id:"how-to-install",level:2},{value:"<strong>Unraid Connect Dashboard</strong>",id:"unraid-connect-dashboard",level:2},{value:"<strong>Manage Your Server From Within the Connect UI</strong>",id:"manage-your-server-from-within-the-connect-ui",level:3},{value:"A note regarding DNS Rebinding Protection",id:"a-note-regarding-dns-rebinding-protection",level:3},{value:"How to access your server when DNS is down",id:"how-to-access-your-server-when-dns-is-down",level:3},{value:"How to disable SSL for local access",id:"how-to-disable-ssl-for-local-access",level:3},{value:"<strong>Automated Flash Backup</strong>",id:"automated-flash-backup",level:2},{value:"Enabling Flash Backup (optional)",id:"enabling-flash-backup-optional",level:3},{value:"Restoring a Flash Backup",id:"restoring-a-flash-backup",level:3},{value:"Additional Steps Required",id:"additional-steps-required",level:4},{value:"<strong>Server Deep Linking</strong>",id:"server-deep-linking",level:2},{value:"<strong>Customizable Dashboard, Server Banner Image and Themes</strong>",id:"customizable-dashboard-server-banner-image-and-themes",level:2},{value:"<strong>License Management</strong>",id:"license-management",level:2},{value:"<strong>Language Localization</strong>",id:"language-localization",level:2},{value:"Signing Out",id:"signing-out",level:2},{value:"Uninstalling the plugin",id:"uninstalling-the-plugin",level:2},{value:"Privacy",id:"privacy",level:2},{value:"Data We Store",id:"data-we-store",level:3},{value:"Flash Backups are Not Encrypted",id:"flash-backups-are-not-encrypted",level:3},{value:"Sensitive Data",id:"sensitive-data",level:3},{value:"Connect Troubleshooting",id:"connect-troubleshooting",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"unraid-connect-help"},"Unraid Connect Help"),(0,o.kt)("h2",{id:"how-to-install"},(0,o.kt)("a",{parentName:"h2",href:"https://connect.myunraid.net/help"},(0,o.kt)("strong",{parentName:"a"},"How to Install"))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Please make a local backup of your USB flash drive. This can be done\nfrom the Main ",">"," Flash page. In the event you need to revert to your\nprevious stable installation, you can use the USB Flash Creator from\nour website to restore this backup zip file to your flash drive."),(0,o.kt)("li",{parentName:"ol"},"Download Connect from Community Applications"),(0,o.kt)("li",{parentName:"ol"},"Sign In With Your Unraid.net Account Credentials - Click the top\nright corner of your Unraid server, and click Sign In. Follow the\nprompts to sign in with your Unraid.net credentials, or create a new\naccount.\n",(0,o.kt)("img",{src:n(6838).Z,width:"1306",height:"774"})),(0,o.kt)("li",{parentName:"ol"},"Register Your Server with Unraid Connect by following the\nprompts",(0,o.kt)("img",{src:n(1100).Z,width:"1191",height:"840"})),(0,o.kt)("li",{parentName:"ol"},"Come Back to ",(0,o.kt)("a",{parentName:"li",href:"https://connect.myunraid.net/help"},"This Page")," and\nClick Continue.")),(0,o.kt)("h2",{id:"unraid-connect-dashboard"},(0,o.kt)("strong",{parentName:"h2"},"Unraid Connect Dashboard")),(0,o.kt)("p",null,"Sign in to the Unraid Connect Dashboard:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://connect.myunraid.net"},"https://connect.myunraid.net"))),(0,o.kt)("p",null,"for a comprehensive overview of your Unraid server's online/offline status,\navailable storage, license type, uptime, Unraid OS version, and more."),(0,o.kt)("p",null,"If you have multiple servers, you will see each one listed in the\nleft-side pane and a tile for each server.\n",(0,o.kt)("img",{src:n(83).Z,width:"1308",height:"408"})),(0,o.kt)("p",null,'From here, you can get more details about each server by clicking on\n"Details".'),(0,o.kt)("h3",{id:"manage-your-server-from-within-the-connect-ui"},(0,o.kt)("strong",{parentName:"h3"},"Manage Your Server From Within the Connect UI")),(0,o.kt)("p",null,"Servers equipped with a myunraid.net certificate can be managed directly\nfrom within the Connect web UI."),(0,o.kt)("p",null,"You can even manage multiple servers from your phone, tablet, laptop, or\nPC in the same browser window."),(0,o.kt)("p",null,"To install a myunraid.net certificate, head to the ",(0,o.kt)("em",{parentName:"p"},"Settings -",">","\nManagement Access"),' page of the Unraid webgui and click "Provision" in\nthe Certificate section, if applicable.'),(0,o.kt)("h3",{id:"a-note-regarding-dns-rebinding-protection"},"A note regarding DNS Rebinding Protection"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(9316).Z,width:"525",height:"419"}),"If you see this\nmessage after clicking the ",(0,o.kt)("strong",{parentName:"p"},"Provision")," button, click ",(0,o.kt)("strong",{parentName:"p"},"OK"),", try\nwaiting 2-5 minutes, then click ",(0,o.kt)("strong",{parentName:"p"},"Provision")," again. If that doesn't\nwork, keep reading."),(0,o.kt)("p",null,"Many routers have a security feature known as DNS Rebinding Protection.\nThis feature prevents public DNS entries from pointing to local IP\naddresses on your network. Unfortunately, this ",(0,o.kt)("em",{parentName:"p"},"feature")," prevents us\nfrom providing proper SSL access when connecting to the webGui locally.\nAs such, users must either disable this feature on their router or set\ntheir router to allow DNS rebinding for the myunraid.net domain (if the\ncertificate was provisioned in Unraid 6.10) or unraid.net domain (if the\ncertificate was provisioned in 6.9) Depending on your router, how this\nfeature is described and whether or not it is available to configure may\nvary. In addition, once you have DNS rebinding disabled on your router,\nwhen you go to provision your certificate, you may still see the DNS\nrebinding error message the first time. This is due to the time it takes\nfor DNS records to propagate once provisioned."),(0,o.kt)("h3",{id:"how-to-access-your-server-when-dns-is-down"},"How to access your server when DNS is down"),(0,o.kt)("p",null,"Once you enable local SSL per the instructions above, you will access\nyour server through a Fully Qualified Domain Name:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"https://ip.yourpersonalhash.myunraid.net")," or\n",(0,o.kt)("inlineCode",{parentName:"p"},"https://ip.yourpersonalhash.myunraid.net:"),"<https_port> (if your https\nport is not the default of 443)"),(0,o.kt)("p",null,"This is required in order to utilize a fully valid SSL certificate. A\ndownside is if you temporarily lose Internet access and your browser has\nnot cached the DNS for yourpersonalhash.unraid.net, you will be unable\nto access the webgui."),(0,o.kt)("p",null,"If the Internet goes down and you lose access to DNS, do the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If ",(0,o.kt)("strong",{parentName:"li"},"Use SSL/TLS")," is set to ",(0,o.kt)("strong",{parentName:"li"},"Yes"),", then you can access your server\nusing: ",(0,o.kt)("a",{parentName:"li",href:"https://%5Bservername%5D"},(0,o.kt)("inlineCode",{parentName:"a"},"https://[servername]")),(0,o.kt)("inlineCode",{parentName:"li"},".[localTLD]"),"\nor\n",(0,o.kt)("a",{parentName:"li",href:"https://%5Bservername%5D"},(0,o.kt)("inlineCode",{parentName:"a"},"https://[servername]")),(0,o.kt)("inlineCode",{parentName:"li"},".[localTLD]:"),"<https_port>\n(if your https port is not the default of 443)"),(0,o.kt)("li",{parentName:"ul"},"If that doesn't work, or if ",(0,o.kt)("strong",{parentName:"li"},"Use SSL/TLS")," is set to ",(0,o.kt)("strong",{parentName:"li"},"Strict"),", then\nusing telnet, SSH or local keyboard/monitor log in to the server and\ntype: ",(0,o.kt)("inlineCode",{parentName:"li"},"use_ssl no")),(0,o.kt)("li",{parentName:"ul"},"Now you will be able to access your server's webgui via:\n",(0,o.kt)("a",{parentName:"li",href:"http://"},(0,o.kt)("inlineCode",{parentName:"a"},"http://")),"<ip_address> (note: http not https) or\n",(0,o.kt)("a",{parentName:"li",href:"http://"},(0,o.kt)("inlineCode",{parentName:"a"},"http://")),"<server_ip>",(0,o.kt)("inlineCode",{parentName:"li"},":"),"<http_port> (if your http port is\nnot the default of 80)"),(0,o.kt)("li",{parentName:"ul"},"When the Internet comes back, navigate to Settings -",">"," Management\nAccess and set ",(0,o.kt)("strong",{parentName:"li"},"Use SSL/TLS")," back to ",(0,o.kt)("strong",{parentName:"li"},"Strict")," to re-enable local\nSSL.")),(0,o.kt)("h3",{id:"how-to-disable-ssl-for-local-access"},"How to disable SSL for local access"),(0,o.kt)("p",null,"(If you currently cannot access the webgui, scroll up to the previous\ntopic.) If you decide you would rather not use the secure\n",(0,o.kt)("inlineCode",{parentName:"p"},"https://ip.yourpersonalhash.myunraid.net")," url for local access, you can\ndisable SSL. There is no need to uninstall the Unraid Connect plugin, in\nfact that will have no effect on SSL as this is a core feature of Unraid\nand not the plugin."),(0,o.kt)("p",null,"Navigate to Settings -",">"," Management Access, set ",(0,o.kt)("strong",{parentName:"p"},"Use SSL/TLS")," to\n",(0,o.kt)("strong",{parentName:"p"},"No")," and hit Apply. In Unraid 6.9 this will also disable the Remote\nAccess feature at the same time."),(0,o.kt)("h2",{id:"automated-flash-backup"},(0,o.kt)("strong",{parentName:"h2"},"Automated Flash Backup")),(0,o.kt)("p",null,"Unraid Connect offers users the ability to automatically back up your OS\nconfiguration settings to our cloud. In the event of flash device\nfailure, you can download a zip file of your latest backup and restore\nit to a new flash drive using the USB Flash Creator."),(0,o.kt)("p",null,"Note: Flash Backup is an optional feature, not required to use the rest\nof Unraid Connect."),(0,o.kt)("h3",{id:"enabling-flash-backup-optional"},"Enabling Flash Backup (optional)"),(0,o.kt)("p",null,"Until we are able to fully encrypt the flash backups on our servers, we\nexclude all sensitive data owned by the OS from the backups, including\nUnraid account passwords and WireGuard encryption keys. However, the\nbackups do include docker template XML files, which may contain\napplication-specific passwords and other private data. We are actively\nworking on solutions to encrypt the backups."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Navigate to Settings -",">"," Management Access -",">"," Connect and under\n",(0,o.kt)("strong",{parentName:"li"},"Flash backup")," click the ",(0,o.kt)("strong",{parentName:"li"},"Activate")," button."),(0,o.kt)("li",{parentName:"ol"},"Wait for the activation and initial backup job to complete (once\ndone, it will show ",(0,o.kt)("strong",{parentName:"li"},"Activated: Up-to-date"),".")),(0,o.kt)("p",null,"Once activated, any changes to the OS configuration will automatically\nbe replicated to the backup in our cloud servers (within 1-2 minutes of\nthe change)."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Important"),": Backups from the flash device do not include the\nconfig/shadow or config/smbpasswd files. User accounts are preserved,\nbut their passwords are not. This means that when you restore from\nbackup, you will need to set passwords for your users including root. We\nalso don't store any of your WireGuard keys."),(0,o.kt)("p",null,"This flash backup service backs up your configuration, it is not a 1:1\nbackup of the contents of your flash drive. If you have custom scripts\nthat you want to include in the backup, please put them in\n/boot/config/custom/. Also note that we backup the plugin configuration\nfiles but not the application files, as those will automatically be\ndownloaded when you reboot."),(0,o.kt)("h3",{id:"restoring-a-flash-backup"},"Restoring a Flash Backup"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Log in to Unraid Connect."),(0,o.kt)("li",{parentName:"ol"},"Select ",(0,o.kt)("strong",{parentName:"li"},"Details"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Generate flash backup")," from the Flash backup tile."),(0,o.kt)("li",{parentName:"ol"},"This will combine your OS configuration data with the OS release version you were running and put them both into a zip file that can be used with our flash creator tool to restore the backup to a new flash device."),(0,o.kt)("li",{parentName:"ol"},"After the backup has been generated, you can click ",(0,o.kt)("strong",{parentName:"li"},"Download flash backup")," to obtain it."),(0,o.kt)("li",{parentName:"ol"},"Use the Unraid USB Flash Creator to restore your backup to a new flash drive.")),(0,o.kt)("h4",{id:"additional-steps-required"},"Additional Steps Required"),(0,o.kt)("p",null,"Once you boot the OS, there are only a few things you will need to reconfigure:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"On the ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"Settings > Management Access > Unraid.net"))," page, click to activate your flash backup again."),(0,o.kt)("li",{parentName:"ol"},"On the Users page, for each user (including root), you will need to reset your passwords."),(0,o.kt)("li",{parentName:"ol"},"On the ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"Settings > VPN Manager")),' page, for each tunnel and peer select the key icon. Click "Generate Keypair" and "Generate Key", start each tunnel, then download the new client configuration to each associated client device.'),(0,o.kt)("li",{parentName:"ol"},"If your server does not have Internet access when you reboot then you will need to go to ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"Apps > Previous Apps"))," and reinstall your plugins once you have Internet access. The configuration files will be on your system ready to use once the application files have been installed.")),(0,o.kt)("h2",{id:"server-deep-linking"},(0,o.kt)("strong",{parentName:"h2"},"Server Deep Linking")),(0,o.kt)("p",null,"Deep linking allows you to manage relevant sections of the Unraid webgui\nin one click. Click any of the circled link buttons to take you right to\nthe relevant page in the Unraid webgui:\n",(0,o.kt)("img",{src:n(7010).Z,width:"1200",height:"600"})),(0,o.kt)("h2",{id:"customizable-dashboard-server-banner-image-and-themes"},(0,o.kt)("strong",{parentName:"h2"},"Customizable Dashboard, Server Banner Image and Themes")),(0,o.kt)("p",null,"Set custom server tiles how you like and automatically display your\nserver's banner image on your Connect Dashboard."),(0,o.kt)("p",null,"Under Server Details, there is a hamburger button on each tile for east\ndrag and drop arranging."),(0,o.kt)("p",null,"To toggle between dark and light mode, click the Sun or Moon icon in the\nfar right of the Connect UI.\n",(0,o.kt)("img",{src:n(4671).Z,width:"421",height:"464"})),(0,o.kt)("h2",{id:"license-management"},(0,o.kt)("strong",{parentName:"h2"},"License Management")),(0,o.kt)("p",null,"Manage your license keys at any time via the My Keys section. You can\neven upgrade right from the Connect UI.\n",(0,o.kt)("img",{src:n(1670).Z,width:"603",height:"263"})),(0,o.kt)("h2",{id:"language-localization"},(0,o.kt)("strong",{parentName:"h2"},"Language Localization")),(0,o.kt)("p",null,"Unraid OS has a global user base so be sure to enjoy Unraid Connect in\nEnglish, German, French, Spanish or Chinese!\n",(0,o.kt)("img",{src:n(4037).Z,width:"417",height:"358"})),(0,o.kt)("h2",{id:"signing-out"},"Signing Out"),(0,o.kt)("p",null,"In the event that you wish to sign out of the Unraid Connect program on\nyour system, you can do so from the Settings-",">"," Management Access -",">","\nUnraid Connect -",">"," Account Status and click the Sign Out button."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"NOTE"),": Signed-out servers will still be displayed on the Unraid\nConnect Dashboard, but you will only be able to download their\nregistration key(s)."),(0,o.kt)("h2",{id:"uninstalling-the-plugin"},"Uninstalling the plugin"),(0,o.kt)("p",null,"Note: if your goal is to change your url from\n",(0,o.kt)("inlineCode",{parentName:"p"},"https://yourpersonalhash.unraid.net")," back to ",(0,o.kt)("inlineCode",{parentName:"p"},"http://computername"),", see\n",(0,o.kt)("a",{parentName:"p",href:"#how-to-disable-ssl-for-local-access"},"How to disable SSL for local access"),".\nUninstalling the plugin will have no effect on your url!"),(0,o.kt)("p",null,"Uninstalling the plugin will automatically:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Deactivate and delete the backup files from your flash drive. We will\nprovide a way to remove them from our server later."),(0,o.kt)("li",{parentName:"ul"},"Disable Remote Access and delete the corresponding DDNS entry. Please\nremember to disable any port forward that you configured in your\nrouter related to this feature."),(0,o.kt)("li",{parentName:"ul"},"Sign Out from Unraid.net.")),(0,o.kt)("h2",{id:"privacy"},"Privacy"),(0,o.kt)("p",null,"Maintaining your data integrity, security, and privacy are of the utmost\nimportance to us at Lime Technology. Below is a disclosure of what we\nstore and relay when you use Unraid Connect. For more information,\nplease see our ",(0,o.kt)("a",{parentName:"p",href:"https://unraid.net/policies"},"policies")," page."),(0,o.kt)("h3",{id:"data-we-store"},"Data We Store"),(0,o.kt)("p",null,"When a server signs in to Unraid.net, it opens a secure connection to\nour hosted infrastructure and sends just enough data so we can give you\na meaningful overview of your servers in the ",(0,o.kt)("a",{parentName:"p",href:"https://connect.myunraid.net"},"Unraid Connect\nDashboard"),". We do not keep\nhistorical data, just the most recent update from your server which\nincludes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Your server's hostname, description, and icon"),(0,o.kt)("li",{parentName:"ul"},"Your server's keyfile details and flash GUID"),(0,o.kt)("li",{parentName:"ul"},"Your server's Local Access URL"),(0,o.kt)("li",{parentName:"ul"},"Your server's LAN IP, if an unraid.net certificate is installed"),(0,o.kt)("li",{parentName:"ul"},"Your server's Remote Access URL and WAN IP, if Remote Access is\nenabled"),(0,o.kt)("li",{parentName:"ul"},"The version of Unraid that is installed, and its uptime"),(0,o.kt)("li",{parentName:"ul"},"The version of the Unraid Connect plugin that is installed, and\nversion / uptime of the unraid-api"),(0,o.kt)("li",{parentName:"ul"},"The size of your array and the amount used (just numbers, no details\nabout what is stored on the array)"),(0,o.kt)("li",{parentName:"ul"},"The number of Docker Containers and VMs installed and started")),(0,o.kt)("p",null,"Separate and unrelated to the Unraid Connect Dashboard, the Flash Backup\nservice stores your server's configuration data."),(0,o.kt)("p",null,'This data is stored solely for the purpose of providing services to you\nthrough our platform and is not publicly accessible. To remove this data\nfrom our servers you must follow the procedure listed in the\n"Uninstalling the plugin" section as well as remove all SSL certificates\ngenerated for you through our Let\'s Encrypt partnership.'),(0,o.kt)("h3",{id:"flash-backups-are-not-encrypted"},"Flash Backups are Not Encrypted"),(0,o.kt)("p",null,"It is important to note that at this time, all backups of your flash\ndevice are stored in our cloud in a non-encrypted format. This is why we\ndo not store the sensitive data mentioned below."),(0,o.kt)("h3",{id:"sensitive-data"},"Sensitive Data"),(0,o.kt)("p",null,"Until we are able to fully encrypt the flash backups on our servers, to\nensure absolute privacy and integrity we have a few hard and strict\npolicies regarding the storing of sensitive data. We do not store:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Unraid root or user account passwords"),(0,o.kt)("li",{parentName:"ul"},"Public, private, or shared WireGuard keys")),(0,o.kt)("h2",{id:"connect-troubleshooting"},"Connect Troubleshooting"),(0,o.kt)("p",null,"It should be rare, but if you see any connection error messages in the\nUPC please open a terminal window and type:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"unraid-api\xa0restart")),(0,o.kt)("p",null,"If you have other Unraid Connect Support related questions, please see\nour ",(0,o.kt)("a",{parentName:"p",href:"https://forums.unraid.net/"},"Unraid Connect user forum")," or ",(0,o.kt)("a",{parentName:"p",href:"https://unraid.net/contact"},"contact\nus")," to open a support ticket."))}d.isMDXComponent=!0},7010:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Deep-linking-1dff22dcfacc7c240bc391ba44cb9fcd.png"},9316:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Dns_rebinding_error-aa658c21ebe663020424ae853a76540a.png"},1100:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Register-a-server-7f35552e-eda6f0cff6060a659296a43044ce2718.png"},83:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Screenshot_2023-04-24_at_1.01.20_PM-d372ab7e43301de76646da0d8b8697e4.png"},1670:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Screenshot_2023-04-24_at_1.39.53_PM-f79af3596af3a5143459b9721eaf0dc9.png"},4671:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Screenshot_2023-04-24_at_1.44.03_PM-5ce4c437de8d977e55d35781adfdeac8.png"},4037:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Screenshot_2023-04-24_at_1.44.16_PM-7d01eeacfcfaafbdc4da05a634e23a79.png"},6838:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Sign-in-up-connect-975a8554-1aa86f67a90fbeda736e0b12be6c3acc.png"}}]);