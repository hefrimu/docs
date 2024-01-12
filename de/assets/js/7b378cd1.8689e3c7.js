"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1367],{5626:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>h});var t=i(5893),s=i(1151);const a={sidebar_position:7},r="Community Applications",o={id:"unraid-os/manual/applications",title:"Community Applications",description:"This section discusses running applications on an Unraid server or",source:"@site/docs/unraid-os/manual/applications.md",sourceDirName:"unraid-os/manual",slug:"/unraid-os/manual/applications",permalink:"/de/unraid-os/manual/applications",draft:!1,unlisted:!1,editUrl:"https://github.com/unraid/docs/tree/main/docs/unraid-os/manual/applications.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"unraidSidebar",previous:{title:"Managing VMs",permalink:"/de/unraid-os/manual/vm-management"},next:{title:"Security",permalink:"/de/unraid-os/manual/security/"}},l={},h=[{value:"Overview",id:"overview",level:2},{value:"Community Applications (CA)",id:"community-applications-ca",level:2},{value:"Finding applications",id:"finding-applications",level:3},{value:"Installing Applications",id:"installing-applications",level:3},{value:"Removing Applications / Showing Installed Applications",id:"removing-applications--showing-installed-applications",level:3},{value:"Re-Installing Applications",id:"re-installing-applications",level:3},{value:"Support for applications",id:"support-for-applications",level:3},{value:"Plugins",id:"plugins",level:2},{value:"Docker Containers",id:"docker-containers",level:2},{value:"Virtual Machines",id:"virtual-machines",level:2},{value:"Technology Stack",id:"technology-stack",level:3}];function d(e){const n={a:"a",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"community-applications",children:"Community Applications"}),"\n",(0,t.jsx)(n.p,{children:"This section discusses running applications on an Unraid server or\nextending the base capabilities. One of the great strengths of Unraid is\nthe ability for it to easily be made to function as more than a basic\nNAS system."}),"\n",(0,t.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)(n.p,{children:"A number of mechanisms are provided by which the capability of an Unraid\nserver can be extended."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Plugins"}),"\n",(0,t.jsx)(n.li,{children:"Docker containers"}),"\n",(0,t.jsx)(n.li,{children:"Virtual Machines"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"IMPORTANT:"})," ",(0,t.jsx)(n.em,{children:"Limetech does not supply the applications or\nfunctionality that can be implemented using these Mechanisms. it is up\nto the end-user to satisfy themselves to the suitability of any\nparticular application."})]}),"\n",(0,t.jsx)(n.h2,{id:"community-applications-ca",children:"Community Applications (CA)"}),"\n",(0,t.jsx)(n.p,{children:"Although it is not part of the standard Unraid distribution the\nCommunity Applications (CA) plugin has become the recommended way for\ninstalling applications on an Unraid server whenever the application is\nimplemented via a plugin or as a docker container. This does not stop\nusers from installing applications that are not handled by CA, but using\nCA provides a useful level of curation that is of particular value to\nnew Unraid users."}),"\n",(0,t.jsxs)(n.p,{children:["Install Community Applications by visiting this page on the forum:\n",(0,t.jsx)(n.a,{href:"https://forums.unraid.net/topic/38582-plug-in-community-applications/",children:"https://forums.unraid.net/topic/38582-plug-in-community-applications/"})]}),"\n",(0,t.jsx)(n.h3,{id:"finding-applications",children:"Finding applications"}),"\n",(0,t.jsx)(n.p,{children:"NOTE: CA only provides a way of installing applications that are\navailable as plugins or Docker containers - it does not provide any\nsupport for installing VMs."}),"\n",(0,t.jsx)(n.h3,{id:"installing-applications",children:"Installing Applications"}),"\n",(0,t.jsxs)(n.p,{children:["From any given app's tile, click the download icon\n",(0,t.jsx)(n.img,{src:i(3629).Z+"",width:"446",height:"321"})]}),"\n",(0,t.jsx)(n.h3,{id:"removing-applications--showing-installed-applications",children:"Removing Applications / Showing Installed Applications"}),"\n",(0,t.jsxs)(n.p,{children:["From the ",(0,t.jsx)(n.strong,{children:"Installed Applications"}),' Category, you will see all of your\ninstalled applications. Click the "x" to uninstall them.']}),"\n",(0,t.jsx)(n.h3,{id:"re-installing-applications",children:"Re-Installing Applications"}),"\n",(0,t.jsx)(n.p,{children:"If you ever need to re-install any plugins or docker container then this\ncan be easily achieved via Community applications."}),"\n",(0,t.jsx)(n.p,{children:"A common reason for wanting to re-install applications is the case where\nthe docker.img file has been corrupted for some reason. In such a case\nthe docker containers can be re-installed with all their settings intact\nin just a few minutes."}),"\n",(0,t.jsxs)(n.p,{children:["CA stores an XML template for each application that it installs at\n/boot/config/plugins/dockerMan/templates-user If you go to the ",(0,t.jsx)(n.strong,{children:"Apps"}),"\ntab in the Unraid GUI then there is a ",(0,t.jsx)(n.strong,{children:"Previous Apps"})," section and this\ncan be used to reinstall applications using their saved settings. These\nare retrieved automatically from the saved XML templates so it is a\nrelatively painless process."]}),"\n",(0,t.jsx)(n.h3,{id:"support-for-applications",children:"Support for applications"}),"\n",(0,t.jsx)(n.p,{children:"It is normal for each Plugin or docker container to have a forum thread\nthat is dedicated to proving support and answering questions from\nend-users. It is normal for the developer responsible for each of these\ntypes of applications to create a forum thread that they will monitor.\nThere are a number of easy ways to get to the appropriate support thread\nfrom the Unraid GUI:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Apps tab"}),"\n",(0,t.jsx)(n.li,{children:"Dashboard tab"}),"\n",(0,t.jsx)(n.li,{children:"Plugins tab"}),"\n",(0,t.jsx)(n.li,{children:"Docker tab"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Virtual Machines do not have the same level of targeted support as they\ncan be running almost any OS, and then within that OS any application\nsupported by the OS. Having said that there are several areas within the\nforums that are dedicated places for asking questions about VMs and it\nis likely that you will find appropriate threads for the most common OSes."}),"\n",(0,t.jsx)(n.h2,{id:"plugins",children:"Plugins"}),"\n",(0,t.jsx)(n.p,{children:"This mechanism allows code to be loaded into the core Unraid OS and run\nat that level. It was the only way to extend Unraid functionality prior\nto Unraid v6."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"IMPORTANT:"})," ",(0,t.jsx)(n.em,{children:"Limetech does not supply the applications or\nfunctionality that can be implemented using these Mechanisms. it is up\nto the end-user to satisfy themselves to the suitability of any\nparticular application."})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Pros"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The plugin developer can access any part of the Unraid system\nwithout restriction."}),"\n",(0,t.jsx)(n.li,{children:"The plugin can load new code modules into the core Unraid OS"}),"\n",(0,t.jsx)(n.li,{children:"The plugin can add/amend the Unraid GUI"}),"\n",(0,t.jsx)(n.li,{children:"The plugin can add functionality that many deem important to\nallowing Unraid to function as a NAS."}),"\n",(0,t.jsx)(n.li,{children:"Plugins are normally published as Open Source so end-users can check\nthat they do not attempt to do anything malicious. However, the\nplugin mechanism does not enforce this."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Cons"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Plugins can make an Unraid system unstable"}),".","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Plugins can load code modules that overwrite the versions\nsupplied as part of a standard Unraid release. Any new Unraid\nrelease can include many upgraded/added modules. This means that\nit is important that if the plugin installs new code modules\nthat the plugin author keeps the plugin up-to-date and aware of\nthe release of Unraid on which it is being installed."}),"\n",(0,t.jsx)(n.li,{children:"Unraid has the ability to boot a system in Safe Mode that\nsuppresses plugins loading to help with diagnosing problems\ncaused by plugins. This should be one of the first things to\ntry if a system becomes unstable after installing a new Unraid\nrelease."}),"\n",(0,t.jsx)(n.li,{children:"If there is a choice between a plugin and a docker\ncontainer-based solution to add a feature to an Unraid system\nthe docker container approach is always the recommended way to\ngo as it does not introduce the same risk of causing\ninstability."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Plugins will have full access to all the data on the Unraid system"}),"\n",(0,t.jsx)(n.li,{children:"If a plugin is not maintained by the developer or the Unraid user\ndoes not keep the plugin up-to-date then when a new Unraid release\nis installed the plugin may make that release misbehave in\nunexpected ways."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Plugins are installed as part of the Unraid boot process after loading\nLinux completes and before the GUI and/or array is started."}),"\n",(0,t.jsx)(n.p,{children:"The current recommendation is that plugins should only be used for\nfunctionality that cannot be added using a Docker container. This helps\nmaintain system stability across Unraid releases. Plugins should\ntherefore be adding system-level services and not end-user applications."}),"\n",(0,t.jsxs)(n.p,{children:["Thu Unraid GUI has a Plugins tab that can show what plugins are\ninstalled and provides capabilities for upgrading the installed plugins\nto new releases. It also provides the ability to install plugins from\nthis tab, but it is recommended that if the plugin is known to Community\nApplications that plugins are instead installed from the ",(0,t.jsx)(n.strong,{children:"Apps"})," tab."]}),"\n",(0,t.jsx)(n.p,{children:"As part of improving core sometimes a plugin's functionality gets\nincorporated into a new Unraid release making the plugin superfluous\n(and possibly even harmful to system stability). If you are using\nCommunity Applications to install plugins (recommended) then CA will\nonly offer to install plugins that are believed to be compatible with\nthat release. It will not, however, remove plugins that are already\ninstalled but are no longer known to be compatible with the current\nrelease."}),"\n",(0,t.jsx)(n.h2,{id:"docker-containers",children:"Docker Containers"}),"\n",(0,t.jsxs)(n.p,{children:["Unraid includes support for the technology known as\n",(0,t.jsx)(n.a,{href:"https://www.docker.com/",children:"Docker"})," for allowing Linux-based applications."]}),"\n",(0,t.jsx)(n.p,{children:"Docker provides a mechanism for running Linux applications in a manner\nthat allows them to be isolated both from the host system (Unraid) and\nalso from each other. This means that docker application are independent\nof the release of Unraid that is hosting them. The user can also\nconfigure which resources on the host system any particular Docker\ncontainer can access."}),"\n",(0,t.jsx)(n.p,{children:"Key points of the Unraid implementation are:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The files that make up a Docker container are stored within a\nvirtual disk image (i.e. a single file at the Unraid level).","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The average user does not need to understand this type of\ndetail but it can help with troubleshooting and making sense of\nlog messages."}),"\n",(0,t.jsxs)(n.li,{children:["The default name of the virtual disk images is ",(0,t.jsx)(n.strong,{children:"docker.img"}),".\nUsers can over-ride this but it is rarely done as no advantage\nis gained by doing this."]}),"\n",(0,t.jsxs)(n.li,{children:["Internally the ",(0,t.jsx)(n.em,{children:"docker.img"})," file is formatted using the\n",(0,t.jsx)(n.strong,{children:"BTRFS"})," filing system and is mounted at the Unraid level as\n",(0,t.jsx)(n.strong,{children:"/dev/loop2"})]}),"\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.em,{children:"docker.img"})," file will internally contain the binaries\nassociated with each installed docker container."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Unraid provides a GUI-based method for easily installing and\nconfiguring Docker containers. This acts as a front-end to the\n",(0,t.jsx)(n.strong,{children:"docker run"})," command-line tool.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"When a docker container is installed the parameters provided by\nthe user (which are then used to build up the docker run command\nfor a container) are stored on the flash drive as an XML file so\nit is easy to re-install a container without having to re-create\nits settings from scratch."}),"\n",(0,t.jsx)(n.li,{children:"Unraid users can provide prepopulated templates for common\napplications that minimize (or even completely eliminate) the\namount of configuration the average user will have to do to get\nany particular container running."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["The default location for the ",(0,t.jsx)(n.em,{children:"docker.img"})," file is within the\n",(0,t.jsx)(n.em,{children:"system"})," share. The ",(0,t.jsx)(n.em,{children:"system"})," share is set up with the ",(0,t.jsx)(n.em,{children:"Use\nCache=Prefer"})," setting as having the ",(0,t.jsx)(n.em,{children:"docker.img"})," file on the cache\n((f the user has one) helps with maximizing the performance of\nDocker containers."]}),"\n",(0,t.jsxs)(n.li,{children:["Unraid does ",(0,t.jsx)(n.strong,{children:"not"})," have built in support for the ",(0,t.jsx)(n.strong,{children:"docker compose"}),"\ncommand line utility."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"virtual-machines",children:"Virtual Machines"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"THIS SECTION IS STILL BEING WORKED ON AND MORE DETAIL NEEDS ADDING"})}),"\n",(0,t.jsx)(n.p,{children:"Virtual Machine (VM) support allows you to run other Operating Systems\nas guests on an Unraid server."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Pro:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"You can use applications that are not available natively under\nUnraid."}),"\n",(0,t.jsx)(n.li,{children:"You can experiment with other OS without needing separate hardware.\nThis can be done purely as a learning exercise or because you need\naccess to features of the guest OS."}),"\n",(0,t.jsx)(n.li,{children:"Multiple guest OS can be run in parallel on the same hardware."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Con:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["You need to know how to use the ",(0,t.jsx)(n.em,{children:"guest"})," OS."]}),"\n",(0,t.jsx)(n.li,{children:"The VM will need dedicated resources to run that are in addition to\nthose required by Unraid itself."}),"\n",(0,t.jsx)(n.li,{children:"VMs are far more resource-heavy than a docker container as they\nrequire much more in the way of dedicated resources to run."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"technology-stack",children:"Technology Stack"}),"\n",(0,t.jsx)(n.p,{children:"Unraid 6 features a number of key technologies to simplify the creation\nand management of localized VMs running on an Unraid host:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"KVM"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://www.linux-kvm.org/page/Main_Page",children:"KVM"})," is a hypervisor\nresponsible for monitoring and managing the resources allocated\nto virtual machines."]}),"\n",(0,t.jsx)(n.p,{children:": KVM is a component in the Linux kernel that allows it to act as\na hypervisor. Simply put, hypervisors are responsible for\nmonitoring and managing the resources allocated to virtual\nmachines. Virtual machines are emulated computers that run on\ntop of a physical computer. Ever wanted to run three operating\nsystems on one computer all at the same time? Hypervisors make\nthis possible. Examples of other hypervisors include Xen, VMWare\n(ESX/ESXi), VirtualBox, and Microsoft Hyper-V"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Unlike other hypervisors, KVM is the only one that is built\ndirectly into and supported by the Linux kernel itself."}),"\n",(0,t.jsx)(n.p,{children:": All other type-1 hypervisors out there will load before Linux\ndoes, and then Linux runs in an underprivileged state to that\nhypervisor.\n: By leveraging a hypervisor that is part of the Linux kernel\nitself, it means better support, less complexity, and more room\nfor optimization improvements."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"QEMU"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://www.qemu.org/",children:"QEMU"})," is the component in the kernel\nthat manages / monitors resources allocated to virtual machines."]}),"\n",(0,t.jsx)(n.li,{children:"QEMU is responsible for the emulation of hardware components\nsuch as a motherboard, CPU, and various controllers that make up\na virtual machine."}),"\n",(0,t.jsx)(n.li,{children:"KVM can't work without QEMU, so you'll often times see KVM\nreferred to as KVM/QEMU."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"HVM"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"When virtual machine technology was first starting to grow in\nadoption, it wasn't directly supported by the chipset\nmanufacturers directly. As such, there was a significant amount\nof overhead associated with virtual machines due to software\nemulation. Later, Intel and AMD built support for virtualization\ndirectly into their hardware (Intel VT-x and AMD-v), reducing\noverhead for emulation, monitoring, and security. These\ntechnologies allow for the creation of hardware-assisted virtual\nmachines (referred to as HVMs)."}),"\n",(0,t.jsx)(n.li,{children:"While Xen offers a way to eliminate the overhead associated with\ntraditional emulation without the need for VT-x, this\nparavirtualization method only works with Linux-based guests,\nand for that, Docker Containers are a better solution anyway. As\nsuch, HVMs are best suited for virtual machines where more than\njust basic Linux applications are needed."}),"\n",(0,t.jsxs)(n.li,{children:["HVM is required to be able to run a VM on Unraid. Most modern\nsystems will have HVM support. You can see if your Unraid server\nhas HVM support by clicking on the ",(0,t.jsx)(n.em,{children:"info"})," button at the top\nright of the Unraid GUI. If it shows as disabled then you might\nwant to check your motherboard's BIOS to see if it needs to be\nenabled there."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"VFIO"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://www.linux-kvm.org/images/b/b4/2012-forum-VFIO.pdf",children:"VFIO"}),"\n(",(0,t.jsx)(n.strong,{children:"V"}),"irtual ",(0,t.jsx)(n.strong,{children:"F"}),"unction ",(0,t.jsx)(n.strong,{children:"IO"}),") allows us to assign a physical\ndevice, such as a graphics card, directly to a virtual machine\nthat in turn will provide driver support for the device\ndirectly."]}),"\n",(0,t.jsx)(n.p,{children:": We can also prevent the device from accessing spaces in memory\nthat are outside of that VM. This means that if something goes\nwrong with the device or its driver, the impact of such an event\nis limited to the virtual machine and not the host."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"VFIO prevents assigned devices from accessing spaces in memory\nthat are outside of the VM to which they are assigned. This\nlimits the impact of issues pertaining to device drivers and\nmemory space, shielding Unraid OS from being exposed to\nunnecessary risk."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["VFIO usage requires ",(0,t.jsx)(n.strong,{children:"IOMMU"})," capable hardware (your CPU must\nhave Intel VT-d or AMD-Vi\nsupport)",(0,t.jsx)(n.a,{href:"https://www.kernel.org/doc/Documentation/vfio.txt",children:"1"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["IOMMU is required to be able to pass through hardware to a VM on\nUnraid. You can see if your Unraid server has IOMMU support by\nclicking on the ",(0,t.jsx)(n.em,{children:"info"})," button at the top right of the Unraid\nGUI. If it shows as disabled then you might want to check your\nmotherboard's BIOS to see if it needs to be enabled there."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"IOMMU support requires support in the CPU, motherboard, and\nBIOS to all be present."}),"\n",(0,t.jsxs)(n.li,{children:["IOMMU is often referred to as ",(0,t.jsx)(n.em,{children:"hardware pass-through"})," in the\ncontext of a VM."]}),"\n",(0,t.jsx)(n.li,{children:"IOMMU allows a VM to get direct access to hardware and thus\ntends to give better performance in using that hardware and\nalso may allow capabilities of the hardware to be accessed\nby the VM that is not possible in the host OS."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"VirtIO"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://www.linux-kvm.org/page/Virtio",children:"VirtIO"}),' is a\nvirtualization standard for network and disk device drivers\nwhere just the guest\'s device driver "knows" it is running in\na virtual environment and cooperates with the hypervisor.']}),"\n",(0,t.jsxs)(n.li,{children:["This enables guests to get high-performance network and disk\noperations, and gives most of the performance benefits of\nparavirtualization",(0,t.jsx)(n.a,{href:"http://wiki.libvirt.org/page/Virtio",children:"2"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"Using VirtIO in a guest OS requires that guest OS have virtIO\ndrivers installed for the devices specified to use VirtIO in the\nVM definition."}),"\n",(0,t.jsxs)(n.li,{children:["If the guest does not haveVirtIO drivers then the VM will have\nto be specified to emulate a device for which the guest OS\n",(0,t.jsx)(n.strong,{children:"does"})," have drivers. This will be less efficient but does\nallow OS that are not VirtIO aware to be run in a VM. Examples\nmight be to emulate SCSI or SATA for disk drives and e1000 for\nnetwork adapters."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"VirtFS"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Also referred to as the 9p filesystem,\n",(0,t.jsx)(n.a,{href:"https://www.kernel.org/doc/ols/2010/ols2010-pages-109-120.pdf",children:"VirtFS"}),"\nallows us to easily pass through file system access from a\nvirtualization host to a guest."]}),"\n",(0,t.jsxs)(n.li,{children:["VirtFS is the equivalent of Docker Volumes for KVM, but requires\na mount command to be issued from within the\nguest",(0,t.jsx)(n.a,{href:"http://wiki.qemu.org/Documentation/9psetup",children:"3"}),". VirtFS\nworks with Linux-based virtual machines ",(0,t.jsx)(n.em,{children:"only"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Libvirt"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://libvirt.org/",children:"Libvirt"})," is a collection of software that\nprovides a convenient way to manage virtual machines and other\nvirtualization functionality, such as storage and network\ninterface management."]}),"\n",(0,t.jsxs)(n.li,{children:["These software pieces include an API library, a daemon\n(libvirtd), and a command-line utility\n(virsh)",(0,t.jsx)(n.a,{href:"http://wiki.libvirt.org/page/FAQ#What_is_libvirt.3F",children:"4"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"VNC"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Virtual_Network_Computing",children:"VNC"}),"\nis a method that allows the screen/mouse/keyboard of a VM to be\nvisible across the network from another device."]}),"\n",(0,t.jsx)(n.li,{children:"VNC clients are available for most OS"}),"\n",(0,t.jsxs)(n.li,{children:["VNC can be used to view ",(0,t.jsx)(n.em,{children:"emulated"})," GPUs."]}),"\n",(0,t.jsxs)(n.li,{children:["VNC does ",(0,t.jsx)(n.strong,{children:"not"})," support sound emulation."]}),"\n",(0,t.jsx)(n.li,{children:"One can get better performance emulating a GPU by having\nappropriate software installed directly into a guest OS. Such\nsoftware also often provides sound emulation as well."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"It is worth understanding what technologies are being used for\nvirtualization by Unraid as documentation on these technologies will not\nbe Unraid specific. Also, many issues relating to these technology\ncomponents can be common across all Linux systems using a particular\ntechnology component so often answers can be found in places other than\nthe Unraid forums."}),"\n",(0,t.jsx)(n.p,{children:"Particulars of the Unraid implementation of VM support are:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"KVM"}),": Unraid makes use of the Linux\n",(0,t.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Kernel-based_Virtual_Machine",children:"KVM"}),"\n(",(0,t.jsx)(n.strong,{children:"K"}),"ernel ",(0,t.jsx)(n.strong,{children:"V"}),"irtual ",(0,t.jsx)(n.strong,{children:"M"}),"achine) facility to allow other\noperating system to run as guests on an Unraid system.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"QEMU"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Unraid provides GUI support for managing VMs."}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Libvirt:"})," The XML definitions needed by libvirt are stored as a\ndisk image file (typically called ",(0,t.jsx)(n.em,{children:"libvirt.img"})," although the user\ncan change this name)"]}),"\n",(0,t.jsxs)(n.li,{children:["Unraid sets up some standard shares to provide a level of\nconsistency to users:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"domains"}),": This the default location for storing VM vdisk\nimages associated with a VM"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"isos"}),": This is the default location for storing iso images\nfor use with VMs."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"system"}),": This is the default location for storing the\nlibvirt.img file (that contains the XML definitions for VMs."]}),"\n",(0,t.jsx)(n.li,{children:"The users can over-ride any of these settings if so desired when\ncreating individual VMs but for most users, the defaults are a good\noption."}),"\n",(0,t.jsxs)(n.li,{children:["All these shares have a default ",(0,t.jsx)(n.strong,{children:"Use Cache"})," setting of ",(0,t.jsx)(n.em,{children:"prefer"}),".\nHaving VM files (particularly disk images) on the cache will give\nmuch better performance than having them on an array drive."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"VNC"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Unraid has the NoVNC web-based client built into its GUI and it\ncan be used to access all VMs without the need to install\nspecialist software into the guest OS."}),"\n",(0,t.jsx)(n.li,{children:"Alternative VNC clients can be used to access the VMs hosted by\nUnraid. The port to be used for such clients is displayed in the\nUnraid GUI on the VM tab when a VM is running. Using such an\nalternative client can work in cases where the NoVNC client does\nnot work correctly for some reason."}),"\n"]}),"\n"]}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},3629:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/CA_Tile1-a97ac1274c35f1c175b82daa23095ff9.png"},1151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>r});var t=i(7294);const s={},a=t.createContext(s);function r(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);