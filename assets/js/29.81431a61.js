(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{372:function(t,e,a){t.exports=a.p+"assets/img/path-done.ceae32b9.png"},519:function(t,e,a){"use strict";a.r(e);var s=a(25),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"patching-bus-ids"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#patching-bus-ids"}},[t._v("#")]),t._v(" Patching Bus IDs")]),t._v(" "),s("p",[t._v("This section is mainly relevant for those who cannot use certain display outputs regardless of the connector-type or SMBIOS patch, as Apple has hardcoded the output BusIDs in a way that doesn't match your hardware. To resolve, we'll be manually patching these bus IDs into supporting our hardware.")]),t._v(" "),s("p",[t._v("This page will be a bit more technical as we've assumed you've read through the previous pages and have a decent grasp of WhateverGreen.")]),t._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/gpu-patching/intel-patching/connector.html"}},[t._v("Patching the display type")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/gpu-patching/intel-patching/vram.html"}},[t._v("Patching the VRAM requirement of macOS")])],1)]),t._v(" "),s("h2",{attrs:{id:"parsing-the-framebuffer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parsing-the-framebuffer"}},[t._v("#")]),t._v(" Parsing the framebuffer")]),t._v(" "),s("p",[t._v("To start, let's assume we're using a Z390 board with a UHD 630. This system is iGPU-only in macOS and has issues with using certain display-outs, and is using the "),s("code",[t._v("0x3E9B0007")]),t._v(" framebuffer.")]),t._v(" "),s("p",[t._v("When we look at this framebuffer from "),s("a",{attrs:{href:"https://github.com/acidanthera/WhateverGreen/blob/master/Manual/FAQ.IntelHD.en.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("WhateverGreen's manual"),s("OutboundLink")],1),t._v(", we see the following:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("ID: 3E9B0007, STOLEN: 57 MB, FBMEM: 0 bytes, VRAM: 1536 MB, Flags: 0x00801302\nTOTAL STOLEN: 58 MB, TOTAL CURSOR: 1 MB (1572864 bytes), MAX STOLEN: 172 MB, MAX OVERALL: 173 MB (181940224 bytes)\nGPU Name: Intel UHD Graphics 630\nModel Name(s):\nCamelia: Disabled\nMobile: 0, PipeCount: 3, PortCount: 3, FBMemoryCount: 3\n[1] busId: 0x05, pipe: 9, type: 0x00000400, flags: 0x000003C7 - DP\n[2] busId: 0x04, pipe: 10, type: 0x00000400, flags: 0x000003C7 - DP\n[3] busId: 0x06, pipe: 8, type: 0x00000400, flags: 0x000003C7 - DP\n01050900 00040000 C7030000\n02040A00 00040000 C7030000\n03060800 00040000 C7030000\n")])])]),s("p",[t._v("Now let's parse it down to the BudID information, as this is what we will be patching:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("[1] busId: 0x05, pipe: 9, type: 0x00000400, flags: 0x000003C7 - DP\n[2] busId: 0x04, pipe: 10, type: 0x00000400, flags: 0x000003C7 - DP\n[3] busId: 0x06, pipe: 8, type: 0x00000400, flags: 0x000003C7 - DP\n01050900 00040000 C7030000\n02040A00 00040000 C7030000\n03060800 00040000 C7030000\n")])])]),s("p",[t._v("Here we see that this framebuffer personality has 3 Bus IDs listed, let's try to break them down to be a bit more understandable. Let's take entry 1:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("[1] busId: 0x05, pipe: 9, type: 0x00000400, flags: 0x000003C7 - DP\n01050900 00040000 C7030000\n")])])]),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("Bit")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("Name")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("Value")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("Bit 1")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Port")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("01")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("Bit 2")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Bus ID")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("05")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("Bit 3-4")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Pipe Number")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("0900")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("Bit 5-8")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Connector Type")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("00040000")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("Bit 9-12")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Flags")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("C7030000")])])])]),t._v(" "),s("p",[t._v("Things to keep in mind:")]),t._v(" "),s("ul",[s("li",[t._v("BusID is a unique value and cannot be used by multiple entries")]),t._v(" "),s("li",[t._v("Connector-type values are the same as discussed in the "),s("RouterLink",{attrs:{to:"/gpu-patching/intel-patching/connector.html"}},[t._v("Connector-type patching page")])],1)]),t._v(" "),s("h2",{attrs:{id:"mapping-the-video-ports"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mapping-the-video-ports"}},[t._v("#")]),t._v(" Mapping the video ports")]),t._v(" "),s("p",[t._v("Here we have 2 sections:")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#mapping-withinb-macos"}},[t._v("Mapping within macOS")]),t._v(" "),s("ul",[s("li",[t._v("You can boot macOS and use at least 1 display")])])]),t._v(" "),s("li",[s("a",{attrs:{href:"#mapping-without-macos"}},[t._v("Mapping without macOS")]),t._v(" "),s("ul",[s("li",[t._v("Blackscreen on all displays")])])])]),t._v(" "),s("h3",{attrs:{id:"mapping-within-macos"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mapping-within-macos"}},[t._v("#")]),t._v(" Mapping within macOS")]),t._v(" "),s("p",[t._v("Mapping videos in macOS is fairly easy, as we can assume that one of our ports is mapped correctly in the framebuffer.")]),t._v(" "),s("p",[t._v("For this example, we'll explain the common "),s("a",{attrs:{href:"https://dortania.github.io/OpenCore-Install-Guide/config-laptop.plist/kaby-lake.html#deviceproperties",target:"_blank",rel:"noopener noreferrer"}},[t._v("HDMI-hotplug fix for Kaby lake users"),s("OutboundLink")],1),t._v(". To start, lets look at the 0x591B0000 framebuffer:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("ID: 591B0000, STOLEN: 38 MB, FBMEM: 21 MB, VRAM: 1536 MB, Flags: 0x0000130B\nTOTAL STOLEN: 39 MB, TOTAL CURSOR: 1 MB (1572864 bytes), MAX STOLEN: 136 MB, MAX OVERALL: 137 MB (144191488 bytes)\nModel name: Intel HD Graphics KBL CRB\nCamellia: CamelliaDisabled (0), Freq: 1388 Hz, FreqMax: 1388 Hz\nMobile: 1, PipeCount: 3, PortCount: 3, FBMemoryCount: 3\n[0] busId: 0x00, pipe: 8, type: 0x00000002, flags: 0x00000098 - ConnectorLVDS\n[2] busId: 0x04, pipe: 10, type: 0x00000800, flags: 0x00000187 - ConnectorHDMI\n[3] busId: 0x06, pipe: 10, type: 0x00000400, flags: 0x00000187 - ConnectorDP\n00000800 02000000 98000000\n02040A00 00080000 87010000\n03060A00 00040000 87010000\n")])])]),s("p",[t._v("Here we see that entry 2 is the HDMI port however on a real Kaby lake laptop it's very common for hot plug to kernel panic the machine. This is due to the bus ID and port not aligning perfectly with the hardware.")]),t._v(" "),s("p",[t._v("To resolve, we'll want to patch it to something more appropriate(ie. 0204 to 0105, these have been tested to work properly)")]),t._v(" "),s("p",[t._v("There are 2 ways to patch:")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#replace-the-entire-entry"}},[t._v("Replace the entire entry")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#replace-sectons-of-the-entry"}},[t._v("Replace sections of the entry")])])]),t._v(" "),s("h4",{attrs:{id:"replace-the-entire-entry"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#replace-the-entire-entry"}},[t._v("#")]),t._v(" Replace the entire entry")]),t._v(" "),s("p",[t._v("To replace the entire entry, we'll first want to locate our entry and ensure it's enumerated correctly. This is because Apple's has entries starting at 0 and progresses through that:")]),t._v(" "),s("ul",[s("li",[t._v("con0")]),t._v(" "),s("li",[t._v("con1")]),t._v(" "),s("li",[t._v("con2")])]),t._v(" "),s("p",[t._v("So since entry 2 is the second in the list, we'll want to use con1:")]),t._v(" "),s("ul",[s("li",[t._v("framebuffer-con2-enable")])]),t._v(" "),s("p",[t._v("Next lets make the patch, we know that port needs to be patched to 01 and BusID changed to 05:")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("0105")]),t._v("0A00 00080000 87010000")])]),t._v(" "),s("p",[t._v("And finally, we're given the following patches:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("framebuffer-patch-enable | Data | 01000000\nframebuffer-con2-enable  | Data | 01000000\nframebuffer-con2-alldata | Data | 01050A00 00080000 87010000\n")])])]),s("h4",{attrs:{id:"replace-sections-of-the-entry"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#replace-sections-of-the-entry"}},[t._v("#")]),t._v(" Replace sections of the entry")]),t._v(" "),s("p",[t._v("To replace sections of the entry, we'll first want to locate our entry and ensure it's enumerated correctly. This is because Apple's has entries starting at 0 and progresses through that:")]),t._v(" "),s("ul",[s("li",[t._v("con0")]),t._v(" "),s("li",[t._v("con1")]),t._v(" "),s("li",[t._v("con2")])]),t._v(" "),s("p",[t._v("So since entry 2 is the second in the list, we'll want to use con1:")]),t._v(" "),s("ul",[s("li",[t._v("framebuffer-con2-enable")])]),t._v(" "),s("p",[t._v("Next lets make the patch, we know that port needs to be patched to 01 and BusID changed to 05:")]),t._v(" "),s("ul",[s("li",[t._v("framebuffer-con2-index = 01")]),t._v(" "),s("li",[t._v("framebuffer-con2-busid = 05")])]),t._v(" "),s("p",[t._v("And finally, we get these patches:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("framebuffer-patch-enable | Data | 01000000\nframebuffer-con2-enable  | Data | 01000000\nframebuffer-con2-index   | Data | 01\nframebuffer-con2-busid   | Data | 05\n")])])]),s("h3",{attrs:{id:"mapping-without-macos"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mapping-without-macos"}},[t._v("#")]),t._v(" Mapping without macOS")]),t._v(" "),s("p",[t._v("Mapping your display outs is fairly simple, "),s("em",[t._v("however")]),t._v(" is quite time consuming as you need to try every BusID value until you get an output.")]),t._v(" "),s("p",[t._v("For this example, we'll use the 0x3E9B0007 framebuffer again.")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("[1] busId: 0x05, pipe: 9, type: 0x00000400, flags: 0x000003C7 - DP\n[2] busId: 0x04, pipe: 10, type: 0x00000400, flags: 0x000003C7 - DP\n[3] busId: 0x06, pipe: 8, type: 0x00000400, flags: 0x000003C7 - DP\n01050900 00040000 C7030000\n02040A00 00040000 C7030000\n03060800 00040000 C7030000\n")])])]),s("p",[t._v("To start, we'll be trying to go through entry 1's BusIDs in hope we find working value.")]),t._v(" "),s("h5",{attrs:{id:"_1-here-plug-in-your-hdmi-display"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-here-plug-in-your-hdmi-display"}},[t._v("#")]),t._v(" 1. Here plug in your HDMI display")]),t._v(" "),s("h5",{attrs:{id:"_2-set-port-1-to-the-hdmi-connector-type"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-set-port-1-to-the-hdmi-connector-type"}},[t._v("#")]),t._v(" 2. Set Port 1 to the HDMI connector type")]),t._v(" "),s("ul",[s("li",[t._v("01xx0900 "),s("strong",[t._v("00080000")]),t._v(" C7030000")])]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("Supported Connector Types")]),t._v(" "),s("p",[t._v("Common connector types supported in macOS")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("<02 00 00 00>        LVDS and eDP      - Laptop displays\n<10 00 00 00>        VGA               - Unsupported in 10.8 and newer\n<00 04 00 00>        DisplayPort       - USB-C display-out are DP internally\n<01 00 00 00>        DUMMY             - Used when there is no physical port\n<00 08 00 00>        HDMI\n<80 00 00 00>        S-Video\n<04 00 00 00>        DVI (Dual Link)\n<00 02 00 00>        DVI (Single Link)\n")])])]),s("p",[t._v("Reminder that VGA on Skylake and newer are actually DisplayPort internally, so use that connector type instead.")])]),t._v(" "),s("h5",{attrs:{id:"_3-disable-ports-2-and-3-with-busid-00"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-disable-ports-2-and-3-with-busid-00"}},[t._v("#")]),t._v(" 3. Disable ports 2 and 3 with busid=00")]),t._v(" "),s("ul",[s("li",[t._v("02"),s("strong",[t._v("00")]),t._v("0A00 00040000 C7030000")]),t._v(" "),s("li",[t._v("03"),s("strong",[t._v("00")]),t._v("0800 00040000 C7030000")])]),t._v(" "),s("h5",{attrs:{id:"_4-walk-through-busids-for-port-1-if-the-previous-didn-t-work-the-maximum-busid-on-most-platforms-generally-0x06"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-walk-through-busids-for-port-1-if-the-previous-didn-t-work-the-maximum-busid-on-most-platforms-generally-0x06"}},[t._v("#")]),t._v(" 4. Walk through busids for Port 1 if the previous didn't work. The maximum busid on most platforms generally 0x06")]),t._v(" "),s("ul",[s("li",[t._v("01"),s("strong",[t._v("01")]),t._v("0900 00080000 C7030000")]),t._v(" "),s("li",[t._v("01"),s("strong",[t._v("02")]),t._v("0900 00080000 C7030000")]),t._v(" "),s("li",[t._v("01"),s("strong",[t._v("03")]),t._v("0900 00080000 C7030000")]),t._v(" "),s("li",[t._v("etc")])]),t._v(" "),s("p",[t._v("If you still get no output, set port 1's busid to 00 and start going through busids for port 2 and so on")]),t._v(" "),s("ul",[s("li",[t._v("port 1 = 01000900 00040000 C7030000")]),t._v(" "),s("li",[t._v("port 2 = 02"),s("strong",[t._v("xx")]),t._v("0A00 00080000 C7030000")]),t._v(" "),s("li",[t._v("port 3 = 03000800 00040000 C7030000")])]),t._v(" "),s("h4",{attrs:{id:"adding-to-your-config-plist"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#adding-to-your-config-plist"}},[t._v("#")]),t._v(" Adding to your config.plist")]),t._v(" "),s("p",[t._v("You'll now want to add the following patches to "),s("code",[t._v("DeviceProperteies -> Add -> PciRoot(0x0)/Pci(0x2,0x0)")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("framebuffer-patch-enable | Data | 01000000\nframebuffer-con0-enable  | Data | 01000000\nframebuffer-con1-enable  | Data | 01000000\nframebuffer-con2-enable  | Data | 01000000\nframebuffer-con0-alldata | Data | port 1 (ie. 01010900 00080000 C7030000)\nframebuffer-con1-alldata | Data | port 2 (ie. 02000A00 00040000 C7030000)\nframebuffer-con2-alldata | Data | port 3 (ie. 03000800 00040000 C7030000)\n")])])]),s("p",[t._v("Note that:")]),t._v(" "),s("ul",[s("li",[t._v("port 1 would be labeled as con0")]),t._v(" "),s("li",[t._v("port 1's BusID is set to 01")]),t._v(" "),s("li",[t._v("port 2 and 3's BusID are set to 00, disabling them")])]),t._v(" "),s("p",[t._v("When done, you should get something similar:")]),t._v(" "),s("p",[s("img",{attrs:{src:a(372),alt:""}})]),t._v(" "),s("p",[t._v("And as mentioned before, if this combo doesn't work, increment port 1's BusID and if that doesn't work disable port 1's busID and try port 2 and so forth.")])])}),[],!1,null,null,null);e.default=n.exports}}]);