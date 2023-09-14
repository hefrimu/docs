"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2697],{4137:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=d(a),p=i,m=h["".concat(l,".").concat(p)]||h[p]||u[p]||r;return a?n.createElement(m,o(o({ref:t},c),{},{components:a})):n.createElement(m,o({ref:t},c))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:i,o[1]=s;for(var d=2;d<r;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},3630:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var n=a(7462),i=(a(7294),a(4137));const r={sidebar_position:0,sidebar_label:"Overview"},o="What is Unraid?",s={unversionedId:"unraid-os/manual/what-is-unraid",id:"unraid-os/manual/what-is-unraid",title:"What is Unraid?",description:"Unraid\xae is an embedded operating system that is designed to provide you",source:"@site/docs/unraid-os/manual/what-is-unraid.md",sourceDirName:"unraid-os/manual",slug:"/unraid-os/manual/what-is-unraid",permalink:"/unraid-os/manual/what-is-unraid",draft:!1,editUrl:"https://github.com/unraid/docs/tree/main/docs/unraid-os/manual/what-is-unraid.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0,sidebar_label:"Overview"},sidebar:"unraidSidebar",previous:{title:"Manual",permalink:"/category/manual"},next:{title:"Shares",permalink:"/unraid-os/manual/shares/"}},l={},d=[{value:"Network Attached Storage",id:"network-attached-storage",level:2},{value:"Parity-Protected Array",id:"parity-protected-array",level:3},{value:"User Shares",id:"user-shares",level:3},{value:"Cache",id:"cache",level:3},{value:"Application Server",id:"application-server",level:2},{value:"The Engine",id:"the-engine",level:3},{value:"The Hub",id:"the-hub",level:3},{value:"Containers",id:"containers",level:3},{value:"Virtualization Host",id:"virtualization-host",level:2},{value:"Assignable Devices",id:"assignable-devices",level:3},{value:"Simplified Management",id:"simplified-management",level:2}],c={toc:d},h="wrapper";function u(e){let{components:t,...r}=e;return(0,i.kt)(h,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"what-is-unraid"},"What is Unraid?"),(0,i.kt)("p",null,"Unraid\xae is an embedded operating system that is designed to provide you\nwith the ultimate control over your hardware. In addition to performing\nthe duties of a robust NAS (network-attached storage), Unraid is also\ncapable of acting as an application server and virtual machine host.\nUnraid installs to and boots from a USB flash device and loads into a\nroot RAM file system. By using a modern Linux kernel with up-to-date\nhardware drivers, Unraid can operate on nearly any 64 bit system\n(x86_64) with minimal consumption of system memory. All configuration\ndata relating to the operating system is stored on the flash device and\nloaded at the same time as the operating system itself. Management of\nyour Unraid system is accomplished through an intuitive web interface\nthat offers basic controls for common tasks as well as advanced tuning\noptions for the more savvy user. Unraid automatically chooses default\nsettings that should work for most people's needs, but also allows you\nto tweak settings to your liking. This makes Unraid intuitive where you\nwant it, and tunable where you need it. By combining the benefits of\nboth hardware and software agnosticism into a single OS, Unraid provides\na wide variety of ways to store, protect, serve, and play the content\nyou download or create."),(0,i.kt)("p",null,"The capabilities of Unraid are separated into three core parts:\nsoftware-defined NAS, application server, and localized virtualization"),(0,i.kt)("h2",{id:"network-attached-storage"},"Network Attached Storage"),(0,i.kt)("p",null,"At its core, Unraid is a hardware-agnostic solution that can turn almost\nany 64-bit capable system into a NAS. Unraid can manage an array of\ndrives (connected via IDE, SATA, or SAS) that vary in size, speed,\nbrand, and filesystem. In addition, by eliminating the use of\ntraditional RAID-based technologies, we can scale on-demand by adding\nmore drives and without needing to rebalance existing data. Unraid's\nNAS functionality consists of a parity-protected array, user shares, and\nan optional cache pool."),(0,i.kt)("h3",{id:"parity-protected-array"},"Parity-Protected Array"),(0,i.kt)("p",null,"The primary purpose of an Unraid array is to manage and protect the data\nof any group of drives (JBOD) by adding a dedicated ",(0,i.kt)("em",{parentName:"p"},"parity drive"),". A\nparity drive provides a way to reconstruct all of the data from a failed\ndrive onto a replacement. Amazing as it seems, a single parity drive can\nadd protection for all of the others! In Unraid parity is always\nmaintained in real-time and a bit more detail on the access pattern to\nthe drives is described under ",(0,i.kt)("a",{parentName:"p",href:"/unraid-os/manual/storage-management"},"Manual/Storage\nManagement")," with their performance\nimplications."),(0,i.kt)("p",null,"The contents of a hard drive can be thought of as a very long stream of\nbits, each of which can only be a zero or a one. If you sum the values\nof the nth bit on every drive and determine whether that sum is even or\nodd, then you can force the corresponding nth parity bit to also be even\nor odd (zero or one). If a data drive fails, that parity information can\nnow be used to deduce the exact bit values of the failed drive, and\nperfectly rebuild it on a replacement drive. Here's an example:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(815).Z,width:"1000",height:"418"})),(0,i.kt)("p",null,"In the picture above, we have three drives and each has a stream of bits\nthat vary in count based on the device size. By themselves, these\ndevices are unprotected and should any of them fail, data will be lost.\nTo protect ourselves from failure, we must add a fourth disk to serve as\nparity. The parity disk must be of equal or greater size than the\nlargest data disk. To calculate the value of each bit on the parity\ndisk, we only need to know the sum total for each column. If the sum of\na column is an even number, the parity bit should be a 0. If the sum of\na column is an odd number, the parity bit should be a 1. Here's the\nsame image as before, but with parity calculated per frame:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(7170).Z,width:"1000",height:"542"})),(0,i.kt)("p",null,"Now let's pretend that drive 2 in our example has suffered a failure\nand a new drive has been purchased to replace it:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(4497).Z,width:"1000",height:"542"})),(0,i.kt)("p",null,"To rebuild the data on the newly replaced disk, we use the same method\nas before, but instead of solving for the parity bit, we solve for the\nmissing bit. For column 1, the sum would be 0, an even number, so the\nmissing bit must be a 0 as well. For column 6, the sum would be 1, an\nodd number, so therefore the missing bit must also be a 1."),(0,i.kt)("p",null,"The ability to rebuild a disk using parity provides protection from data\nloss. Parity protection also provides fault-tolerance by allowing full\nusage of the system while keeping all data accessible, even when a drive\nhas failed."),(0,i.kt)("h3",{id:"user-shares"},"User Shares"),(0,i.kt)("p",null,"Unlike most RAID systems, Unraid saves data to individual drives. To\nsimplify manageability, users can create ",(0,i.kt)("em",{parentName:"p"},"shares")," that allow files\nwritten to them to be spread across multiple drives. Each share can be\nthought of as a top-level folder on a drive. When browsing through a\nshare, all data from all drives that participate in that share will be\ndisplayed together. Users do not need to know which disk a file is on in\norder to access it under a share. Shares can be tuned to include/exclude\nspecific disks and to use various methods for determining how files are\nallocated across those disks. In addition to controlling how data is\ndistributed across drives, users can also control what network protocols\nthe share is visible through as well as define user-level security\npolicy. When accessing your Unraid server over a network protocol, all\nshares exported through that protocol will be visible, but you can\ntoggle protocols for both individual shares as well as at a global\nsetting level. Should you have private data on your system that you wish\nto protect from anonymous access, user accounts can be created and\npolicies defined to limit access to only trusted individuals.\n",(0,i.kt)("img",{src:a(7130).Z,width:"1000",height:"1044"}),"\n",(0,i.kt)("img",{src:a(7661).Z,width:"1000",height:"1100"})),(0,i.kt)("h3",{id:"cache"},"Cache"),(0,i.kt)("p",null,'The cache-drive feature of Unraid provides faster data capture.\nGenerally speaking, by using a cache alongside an array of three or more\ndrives, you can achieve up to 3x write performance. When data is written\nto a user share that has been configured to use the cache drive, all of\nthat data is initially written directly to the dedicated cache drive.\nBecause this drive is not a part of the array, the write speed is\nunimpeded by parity updates. Then an Unraid process called "the mover"\ncopies the data from the cache to the array at a time and frequency of\nyour choosing (typically in the middle of the night). Once the mover\ncompletes, the space consumed previously on the cache drive is freed up.'),(0,i.kt)("p",null,"With a single cache drive, data captured there is at risk, as a parity\ndrive only protects the array, not the cache. However, you can build a\ncache with multiple drives both to increase your cache capacity as well\nas to add protection for that data. The grouping of multiple drives in a\ncache is referred to as building a ",(0,i.kt)("em",{parentName:"p"},"cache pool"),". The Unraid cache pool\nis created through a unique twist on traditional RAID 1, using a BTRFS\nfeature that provides both the data redundancy of RAID 1 plus the\ncapacity expansion of RAID 0."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(1860).Z,width:"1000",height:"746"})),(0,i.kt)("h2",{id:"application-server"},"Application Server"),(0,i.kt)("p",null,"Traditional NAS solutions to application support come with three primary\nlimitations:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"They cannot support applications written for other operating\nsystems."),(0,i.kt)("li",{parentName:"ol"},"They can be cumbersome to install and even more difficult to remove."),(0,i.kt)("li",{parentName:"ol"},'They don\'t always "play nice" with other applications in the same\nOS.')),(0,i.kt)("p",null,"Docker addresses these problems in a number of key ways:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"It allows for the use of any Linux operating system to empower a\ngiven application (no longer limited by the operating system of the\nhost itself)."),(0,i.kt)("li",{parentName:"ul"},'It removes the "installation" process that applications have to go\nthrough by providing pre-installed ',(0,i.kt)("em",{parentName:"li"},"images")," that ensure a consistent\nrun-time experience for the user and making them easier to remove\nwhen the user is done with them."),(0,i.kt)("li",{parentName:"ul"},"It enables applications that would normally have issues with\ncoexistence to live in harmony in the same operating environment.")),(0,i.kt)("p",null,"Docker is made up of three primary components: the Engine, the Hub, and\nContainers."),(0,i.kt)("h3",{id:"the-engine"},"The Engine"),(0,i.kt)("p",null,"The Docker Engine represents the management component that is built into\nUnraid 6. Using the engine, we can control application access to vital\nsystem resources, interact with the Docker Hub, and isolate applications\nfrom conflicts."),(0,i.kt)("p",null,"From a storage perspective, the engine leverages the copy-on-write\ncapabilities of the BTRFS filesystem combined with Docker images\nprovided through the hub. The images are essentially tar files with a\nhierarchy so that other images which depend upon a common layer don't\nneed to replicate storage for the layer they share. The shared layers\nare put in a read-only state, while changes made to them are reflected\nonly in the instance for the application that changed it. In simpler\nterms, this means that applications can be efficient in their use of\nboth system performance and storage capacity."),(0,i.kt)("p",null,"This differs from virtual machines where the entirety of the guest\noperating system is emulated. The overhead required to support a virtual\nmachine is therefore much higher than the equivalent overhead for a\ncontainer. Docker containers that feature common libraries and binaries\ndo not replicate those shared resources and instead, leverage the\nefficiency of Linux and a copy-on-write filesystem to minimize the\noverhead."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(4081).Z,width:"1000",height:"898"})),(0,i.kt)("h3",{id:"the-hub"},"The Hub"),(0,i.kt)("p",null,"One of biggest advantages Docker provides over both traditional Linux\ncontainers (LXCs) and virtual machines (VMs) is in its application\nrepository: the Docker Hub. Many traditional Linux operating systems\nnowadays come with a component in their framework known as a ",(0,i.kt)("em",{parentName:"p"},"package\nmanager"),". The job of the package manager is to let people easily install\napplications written for a particular operating system from catalogs\nthat are known as ",(0,i.kt)("em",{parentName:"p"},"repositories"),". While package managers do their job\nfairly well, they come with all the limitations mentioned earlier. Linux\ncontainers and virtual machines, while competent at providing a way to\ncontrol resources allocated to an application, still rely on traditional\npackage managers for software retrieval and installation into their\nrun-time environments."),(0,i.kt)("p",null,"In contrast, the Docker Hub provides all the benefits without the\nlimitations of a traditional package manager. Using the Docker engine,\npre-built applications can be downloaded automatically and, thanks to\nthe copy-on-write benefits we've already covered, the only data that is\nactually downloaded is data not already present on your system. The hub\ncontains over 14,000 Dockerized apps, so finding what you're looking for\nshouldn't be a problem. In addition, thanks to some of our loyal\ncommunity members, users can quickly add many of the most popular\ncontainers through the use of templates in Unraid 6. These forum members\nhave taken it upon themselves to build and maintain these templates and\nthe list of available templates continues to grow."),(0,i.kt)("p",null,"The Docker Hub can be accessed at ",(0,i.kt)("a",{parentName:"p",href:"http://registry.hub.docker.com"},"http://registry.hub.docker.com"),"."),(0,i.kt)("h3",{id:"containers"},"Containers"),(0,i.kt)("p",null,"The cornerstone of Docker is in its ability to use Linux control groups,\nnamespace isolation, and images to create isolated execution\nenvironments in the form of Docker containers. Docker controls the\nresources allocated to the Containers and isolates them from conflicting\nwith other applications on the same system. This provides all the\nbenefits of traditional virtual machines, but with none of the overhead\nassociated with emulating hardware, making containers ridiculously\nefficient and in some studies, barely distinguishable from bare-metal\nequivalents."),(0,i.kt)("p",null,"Docker works by allowing applications access to the system resources of\nthe host operating system, such as CPU, memory, disk, and network, but\nisolates them into their own run-time environments. Unlike virtual\nmachines, containers do not require hardware emulation, which eliminates\noverhead, hardware requirements, and provides near bare-metal\nperformance."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(1873).Z,width:"1000",height:"858"})),(0,i.kt)("h2",{id:"virtualization-host"},"Virtualization Host"),(0,i.kt)("p",null,"Virtualization technology has advanced greatly since it was first\nintroduced and provides a wealth of benefits to users. By supporting the\nuse of virtual machines on Unraid 6, we can run an even wider array of\napplications in isolated environments. While Docker containers are the\npreferred method for running Linux-based headless applications, virtual\nmachines offer these unique benefits:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Run non-Linux operating systems (e.g. Windows)."),(0,i.kt)("li",{parentName:"ol"},"Support drivers for physical devices independently of Unraid OS."),(0,i.kt)("li",{parentName:"ol"},"Customize and tune the guest operating systems.")),(0,i.kt)("p",null,"Unraid Server OS is designed to run as a virtualization host, leveraging\na hypervisor to partition resources to virtualized guests in a secure\nand isolated manner. To simplify, virtual machines can be assigned a\nwider array of resources than Docker containers but still offer the same\nbenefits of isolated access to those resources. This enables Unraid\nservers to handle a variety of other tasks, more than just\nnetwork-attached storage."),(0,i.kt)("h3",{id:"assignable-devices"},"Assignable Devices"),(0,i.kt)("p",null,"Our implementation of KVM includes modern versions of QEMU, libvirt,\nVFIO","*",", VirtIO, and VirtFS. We also support Open Virtual Machine\nFirmware (OVMF) which enables UEFI support for virtual machines (adding\nSecureBoot support as well as simplified GPU pass through support). This\nallows for a wide array of resources to be assigned to virtual machines\nranging from the basics (storage, compute, network, and memory) to the\nadvanced (full PCI / USB devices). We can emulate multiple machine types\n(i440fx and Q35), support CPU pinning, optimize for SSDs, and much more.\nBest of all, these virtualization technologies prevent their use from\nimpacting the reliability of the host operating system."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(7795).Z,width:"1000",height:"1090"})),(0,i.kt)("h2",{id:"simplified-management"},"Simplified Management"),(0,i.kt)("p",null,"Management of your Unraid system is accomplished through an intuitive\nweb interface that offers basic controls for common tasks as well as\nadvanced tuning options for the more savvy user. Unraid automatically\nchooses default settings that should work for most people's needs, but\nalso allows you to tweak settings to your liking. This makes Unraid\nintuitive where you want it, and tunable where you need it."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Dashboard View"),". With indicators for disk health, temperatures,\nresource utilization, and application states, the dashboard provides\na 50,000 foot view of what's happening on your system."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Array Operation"),". Assign devices for use in either the array or\ncache, spin up and down individual disks, start and stop the array,\nand even perform an on-the-fly parity check, all from a single page."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Share Management"),". Setting up shares on Unraid is easy. Give the\nshare a name, optionally apply policies to access and distribution\ncontrols, and click create!"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Disk Tuning"),". Control how and when devices spin down, the default\nfile system format, and other advanced settings."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Network Controls"),". Enable NIC bonding and bridging, set time\nservers, and more."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"APC UPS Safe Shutdown"),". When connected to an APC UPS, Unraid can\nsafely shut down the system in the event of a power loss."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"System Notifications"),". Unraid can alert you to important events\nhappening on your system through the web management console as well\nas e-mail and other notification systems."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Task Scheduler"),". Choose if and when you want to have an automatic\nparity check occur as well how often the mover script should\ntransfer files from the cache to the array."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Docker Containers"),". Manage application controls from a single\npane of glass. Add applications with minimal effort using\ncommunity-provided templates."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Virtual Machines"),". Choose between pre-created virtual machine\nimages or create your own custom VM from scratch.")))}u.isMDXComponent=!0},1860:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Cache-pool-450c7d3f273b54b368f043b57c5c27af.gif"},4081:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Docker-vs-VM@2x-4e0f358c796fdcd3872d42484b0a4a97.png"},1873:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Docker@2x-34a68141bdeab34e896d69277795592d.png"},4497:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Drive_failure@2x-22bf648fee323c52d951d70cd8668328.png"},7795:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/KVM@2x-9d51dccfc0f854d6fe791273e5c01664.png"},815:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/No_parity@2x-59d66b6c69ee318d1b8596c7dc61c39a.png"},7170:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Parity@2x-d76efc1d324be1a15e99448f5c9dbc03.png"},7661:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/User_shares_-_access@2x-43a230464e536f6c049d4b00e3ba1f74.png"},7130:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/User_shares_-_distribution@2x-102f25c294db601892c3a5a862ec1d88.png"}}]);