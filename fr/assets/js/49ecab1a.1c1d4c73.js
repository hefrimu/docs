"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3011],{2996:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>d});var i=s(5893),r=s(1151);const t={},o="Version 6.12.4 2023-08-31",l={id:"unraid-os/release-notes/6.12.4",title:"Version 6.12.4 2023-08-31",description:"Upgrade notes",source:"@site/docs/unraid-os/release-notes/6.12.4.md",sourceDirName:"unraid-os/release-notes",slug:"/unraid-os/release-notes/6.12.4",permalink:"/fr/unraid-os/release-notes/6.12.4",draft:!1,unlisted:!1,editUrl:"https://github.com/unraid/docs/tree/main/docs/unraid-os/release-notes/6.12.4.md",tags:[],version:"current",frontMatter:{},sidebar:"unraidSidebar",previous:{title:"Version 6.12.3 2023-07-14",permalink:"/fr/unraid-os/release-notes/6.12.3"},next:{title:"Version 6.12.5 2023-11-27",permalink:"/fr/unraid-os/release-notes/6.12.5"}},a={},d=[{value:"Upgrade notes",id:"upgrade-notes",level:2},{value:"Known issues",id:"known-issues",level:3},{value:"Rolling back",id:"rolling-back",level:3},{value:"Fix for macvlan call traces",id:"fix-for-macvlan-call-traces",level:2},{value:"Troubleshooting",id:"troubleshooting",level:3},{value:"To get a little more technical...",id:"to-get-a-little-more-technical",level:3},{value:"System Drivers page",id:"system-drivers-page",level:2},{value:"Other bug fixes and improvements",id:"other-bug-fixes-and-improvements",level:2},{value:"Changes vs. 6.12.3",id:"changes-vs-6123",level:2},{value:"Base distro",id:"base-distro",level:3},{value:"Package updates",id:"package-updates",level:4},{value:"Linux kernel",id:"linux-kernel",level:3},{value:"webGUI",id:"webgui",level:3}];function c(e){const n={a:"a",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"version-6124-2023-08-31",children:"Version 6.12.4 2023-08-31"}),"\n",(0,i.jsx)(n.h2,{id:"upgrade-notes",children:"Upgrade notes"}),"\n",(0,i.jsx)(n.h3,{id:"known-issues",children:"Known issues"}),"\n",(0,i.jsxs)(n.p,{children:["Please see the ",(0,i.jsx)(n.a,{href:"/fr/unraid-os/release-notes/6.12.0#known-issues",children:"6.12.0 release notes"})," for general known issues."]}),"\n",(0,i.jsx)(n.h3,{id:"rolling-back",children:"Rolling back"}),"\n",(0,i.jsx)(n.p,{children:"Before rolling back to an earlier version, it is important to ensure Bridging is enabled:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Settings > Network Settings > eth0 > Enable Bridging"})})," = Yes"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Then Start the array (along with the Docker and VM services) to update your Docker containers, VMs, and\nWireGuard tunnels back to their previous settings which should work in older releases."}),"\n",(0,i.jsx)(n.p,{children:"Once in the older version, confirm these settings are correct for your setup:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Settings > Docker > Host access to custom networks"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Settings > Docker > Docker custom network type"})})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["If rolling back earlier than 6.12.0, also see the ",(0,i.jsx)(n.a,{href:"/fr/unraid-os/release-notes/6.12.0#rolling-back",children:"6.12.0 release notes"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"fix-for-macvlan-call-traces",children:"Fix for macvlan call traces"}),"\n",(0,i.jsx)(n.p,{children:"The big news in this release is that we have resolved issues related to macvlan call traces and crashes!"}),"\n",(0,i.jsxs)(n.p,{children:["The root of the problem is that macvlan used for custom Docker networks is unreliable when the parent interface is a\nbridge (like br0), it works best on a physical interface (like eth0) or a bond (like bond0). We believe this to be a longstanding kernel\nissue and have posted a ",(0,i.jsx)(n.a,{href:"https://bugzilla.kernel.org/show_bug.cgi?id=217777",children:"bug report"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["If you are getting call traces related to macvlan, as a first step we recommend navigating to ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Settings > Docker"})}),',\nswitch to advanced view, and change the "Docker custom network type" from macvlan to ipvlan. This is the default\nconfiguration that Unraid has shipped with since version 6.11.5 and should work for most systems.\nIf you are happy with this setting, then you are done! You will have no more call traces related to macvlan\nand can skip ahead to ',(0,i.jsx)(n.a,{href:"#system-drivers-page",children:"the next section"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"However, some users have reported issues with port forwarding from certain routers (Fritzbox) and reduced functionality\nwith advanced network management tools (Ubiquity) when in ipvlan mode."}),"\n",(0,i.jsx)(n.p,{children:"For those users, we have a new method that reworks networking to avoid issues with macvlan. Tweak a few settings and your\nDocker containers, VMs, and WireGuard tunnels should automatically adjust to use them:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Settings > Network Settings > eth0 > Enable Bonding"})})," = Yes or No, either work with this solution"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Settings > Network Settings > eth0 > Enable Bridging"})})," = No (this will automatically enable macvlan)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Settings > Docker > Host access to custom networks"})})," = Enabled"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Note: if you previously used the ",(0,i.jsx)(n.a,{href:"https://forums.unraid.net/topic/137048-guide-how-to-solve-macvlan-and-ipvlan-issues-with-containers-on-a-custom-network/",children:"2-nic docker segmentation method"}),",\nyou will also want to revert that:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Settings > Docker > custom network on interface eth0 or bond0"})})," (i.e. make sure eth0/bond0 is configured for the custom network, not eth1/bond1)"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"When you Start the array, the host, VMs, and Docker containers will all be able to communicate, and there should be no more call traces!"}),"\n",(0,i.jsx)(n.h3,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'If your Docker containers with custom IPs are not starting, edit them and change the "Network type" to "Custom: eth0" or "Custom: bond0". We attempted\nto do this automatically, but depending on how things were customized you may need to do it manually.'}),"\n",(0,i.jsx)(n.li,{children:'If your VMs are having network issues, edit them and set the Network Source to "vhost0". Also, ensure there is a MAC address assigned.'}),"\n",(0,i.jsx)(n.li,{children:"If your WireGuard tunnels will not start, make a dummy change to each tunnel and save."}),"\n",(0,i.jsx)(n.li,{children:"If you are having issues port forwarding to Docker containers (particularly with a Fritzbox router) delete and recreate the port\nforward in your router."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"to-get-a-little-more-technical",children:"To get a little more technical..."}),"\n",(0,i.jsx)(n.p,{children:"After upgrading to this release, if bridging remains enabled on eth0 then everything works as it used to. You can attempt to work\naround the call traces by disabling the custom Docker network, or using ipvlan instead of macvlan, or using the 2-nic Docker\nsegmentation method with containers on eth1."}),"\n",(0,i.jsx)(n.p,{children:"Starting with this release, when you disable bridging on eth0 we create a new macvtap network for Docker containers and VMs to use.\nIt has a parent of eth0 instead of br0, which is how we avoid the call traces."}),"\n",(0,i.jsx)(n.p,{children:"A side benefit is that macvtap networks are reported to be faster than bridged networks, so you may see speed improvements when\ncommunicating with Docker containers and VMs."}),"\n",(0,i.jsx)(n.p,{children:"FYI: With bridging disabled for the main interface (eth0), then the Docker custom network type will be set to macvlan and hidden\nunless there are other interfaces on your system that have bridging enabled, in which case the legacy ipvlan option is available.\nTo use the new fix being discussed here you will want to keep that set to macvlan."}),"\n",(0,i.jsx)(n.h2,{id:"system-drivers-page",children:"System Drivers page"}),"\n",(0,i.jsxs)(n.p,{children:["Navigate to ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Tools > System Drivers"})})," for visibility into the drivers available/in use on your system. 3rd party drivers installed\nby plugins (such as NVIDIA and Realtek) have an icon that links to the support page for that driver. You can also\nnow add/modify/delete the modeprobe.d config file for any driver without having to find that file on your flash drive."]}),"\n",(0,i.jsx)(n.h2,{id:"other-bug-fixes-and-improvements",children:"Other bug fixes and improvements"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"This release resolves corner cases in networking, Libvirt, Docker, WireGuard, NTP, NGINX, NFS and RPC. And includes an improvement\nto the VM Manager so it retains the VNC password during an update."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"The shutdown process was modified to allow the NUT plugin to properly shut the system down."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["The notification display time before auto-closing is now configugurable (see ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Settings > Notification Settings"})}),")."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"A small change is that packages in /boot/extra are now treated more like packages installed by plugins, and the installation is\nlogged to syslog rather than to the console."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"The Update OS process will automatically update the Plugin-Update-Helper script if necessary."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"changes-vs-6123",children:["Changes vs. ",(0,i.jsx)(n.a,{href:"/fr/unraid-os/release-notes/6.12.3",children:"6.12.3"})]}),"\n",(0,i.jsx)(n.h3,{id:"base-distro",children:"Base distro"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["create_network_ini:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"fixed dhcp hook"}),"\n",(0,i.jsx)(n.li,{children:"improved IP address collection"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["diagnostics:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Add previous Unraid version to diagnostics version txt file."}),"\n",(0,i.jsx)(n.li,{children:"Add ntp.conf, sshd.config, and servers.conf (with anonymized URLs)"}),"\n",(0,i.jsx)(n.li,{children:"anonymize IP addresses"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["docker:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"add routing when shim or macvtap network is used"}),"\n",(0,i.jsx)(n.li,{children:'fix routing when "host access" is enabled'}),"\n",(0,i.jsx)(n.li,{children:"remove IPv6 from shim/vhost interface (some routers are incompatible)"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"libvirt, nginx, nfs, rpc: changed running process detection"}),"\n",(0,i.jsx)(n.li,{children:"nfsclient: start negotiation with v4, turn off atime modification"}),"\n",(0,i.jsx)(n.li,{children:"rc.6: leave /usr and /lib mounted during shutdown"}),"\n",(0,i.jsxs)(n.li,{children:["rc.docker:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"create same IPv6 network for containers and services"}),"\n",(0,i.jsx)(n.li,{children:"add more logging when stopping dockerd"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["rc.inet1:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"do not use promiscuous mode for bridging"}),"\n",(0,i.jsx)(n.li,{children:"add persistent option to dhcpcd"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"rc.library: interfaces always listed in the same order, fix show ipv6"}),"\n",(0,i.jsx)(n.li,{children:"rc.libvirt: remove 'itco' watchdog from XML if present"}),"\n",(0,i.jsx)(n.li,{children:"rc.local: annotate auto-generated /etc/modprobe.d/zfs.conf file"}),"\n",(0,i.jsxs)(n.li,{children:["rc.services:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"add logging"}),"\n",(0,i.jsx)(n.li,{children:'exclude WireGuard "VPN tunneled access for docker" tunnels from services'}),"\n",(0,i.jsx)(n.li,{children:"exclude WireGuard tunnels for ntp (code optimization)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"package-updates",children:"Package updates"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"btrfs-progs: 6.3.3"}),"\n",(0,i.jsx)(n.li,{children:"curl: version 8.2.0 (CVE-2023-32001)"}),"\n",(0,i.jsx)(n.li,{children:"firefox: version 117.0.r20230824132758 (AppImage)"}),"\n",(0,i.jsx)(n.li,{children:"kernel-firmware: version 20230724_59fbffa"}),"\n",(0,i.jsx)(n.li,{children:"krb5: version 1.19.2 (CVE-2023-36054)"}),"\n",(0,i.jsx)(n.li,{children:"openssh: version 9.3p2 (CVE-2023-38408)"}),"\n",(0,i.jsx)(n.li,{children:"openssl: version 1.1.1v (CVE-2023-3817 CVE-2023-3446)"}),"\n",(0,i.jsx)(n.li,{children:"samba: version 4.17.10 (CVE-2023-3496 CVE-2022-2127 CVE-2023-34968 CVE-2023-3496 CVE-2023-3347)"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"linux-kernel",children:"Linux kernel"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"version 6.1.49 (CVE-2023-20593)"}),"\n",(0,i.jsx)(n.li,{children:"CONFIG_SCSI_MPI3MR: Broadcom MPI3 Storage Controller Device Driver"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"webgui",children:"webGUI"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Dashboard: hide ZFS bar when no ZFS is used"}),"\n",(0,i.jsx)(n.li,{children:"Docker settings: fix subnet sizes"}),"\n",(0,i.jsx)(n.li,{children:"Feedback: refactor feedback script"}),"\n",(0,i.jsx)(n.li,{children:"Network settings: fix DNS settings sometimes disappear"}),"\n",(0,i.jsx)(n.li,{children:"Notifications: new notification option: auto-closure time, default is 5 seconds"}),"\n",(0,i.jsx)(n.li,{children:"Pools: minimum free space: only enabled when array is stopped"}),"\n",(0,i.jsx)(n.li,{children:'Shares and Pools: show "Minimum free space" as absolute number instead of percentage'}),"\n",(0,i.jsx)(n.li,{children:"System Drivers: new page"}),"\n",(0,i.jsx)(n.li,{children:"Translations: trim key and value in language files"}),"\n",(0,i.jsx)(n.li,{children:"VM Manager: Retain VNC password during update."}),"\n",(0,i.jsx)(n.li,{children:"VM Manager: Remove downloaded '.vv' files."}),"\n",(0,i.jsx)(n.li,{children:"CSS: set overflow-x to 'auto'"}),"\n",(0,i.jsx)(n.li,{children:"update monitor_nchan"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>o});var i=s(7294);const r={},t=i.createContext(r);function o(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);