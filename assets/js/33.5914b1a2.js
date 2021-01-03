(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{446:function(t,e,o){t.exports=o.p+"assets/img/usb-3.f050f97e.png"},544:function(t,e,o){"use strict";o.r(e);var a=o(25),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"why-should-you-usb-map"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#why-should-you-usb-map"}},[t._v("#")]),t._v(" Why should you USB map")]),t._v(" "),a("p",[t._v("So the process of USB mapping is defining your ports to macOS and telling it what kind they are, the reasons we want to do this are:")]),t._v(" "),a("ul",[a("li",[t._v("macOS is very bad at guessing what kind of ports you have")]),t._v(" "),a("li",[t._v("Some ports may run below their rated speed(3.1 ports running at 2.0)")]),t._v(" "),a("li",[t._v("Some ports may outright not work")]),t._v(" "),a("li",[t._v("Bluetooth not working")]),t._v(" "),a("li",[t._v("Certain services like Handoff may not work correctly")]),t._v(" "),a("li",[t._v("Sleep may break")]),t._v(" "),a("li",[t._v("Broken Hot-Plug")]),t._v(" "),a("li",[t._v("Even data corruption from "),a("code",[t._v("XhciPortLimit")])])]),t._v(" "),a("p",[t._v("So now that you know why you should USB map, we can now talk about technical info of USB mapping. This is a section you cannot skip, otherwise all info below will seem like a very broken Russian translation written by a very drunk slav.")]),t._v(" "),a("p",[t._v("So with USB, we need to understand not all ports are the same and that some ports are actually hiding other ports within them! What I mean by this is the following:")]),t._v(" "),a("ul",[a("li",[t._v("A USB 3.0 port is actually seen as 2 ports to macOS: a USB 2.0 "),a("strong",[t._v("and")]),t._v(" USB 3.0")]),t._v(" "),a("li",[t._v("This is also how USB can keep its backwards compatibility, as all USB 3.0 devices "),a("strong",[t._v("must")]),t._v(" support USB 2.0")])]),t._v(" "),a("p",[t._v("Now let's look at a diagram of a USB port to better understand this:")]),t._v(" "),a("p",[a("img",{attrs:{src:o(446),alt:"Image from usb3.com"}})]),t._v(" "),a("p",[t._v("As you can see, the bottom 4 pins are dedicated to USB 2.0 and when the extra 5 pins above are recognized the device will switch to a USB 3.0 mode.")]),t._v(" "),a("p",[t._v("Now with the basic understanding out of the way, we now have to talk about the dreadful 15 port limit.")]),t._v(" "),a("h2",{attrs:{id:"macos-and-the-15-port-limit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#macos-and-the-15-port-limit"}},[t._v("#")]),t._v(" macOS and the 15 Port Limit")]),t._v(" "),a("p",[t._v("Now let me take you back in time to the late 2015's and the release of OS X 10.11, El Capitan. This was an update that established much of what both blesses us and pains us in the community like System Integrity Protection and the 15 port limit.")]),t._v(" "),a("p",[t._v("What the 15 port limit is in macOS(then called OS X) is a strict limit of only 15 possible ports per controller, this becomes an issue when we look at the chipset ports included on your motherboard:")]),t._v(" "),a("ul",[a("li",[t._v("Z170 and newer Chipsets: 26 Ports in total")])]),t._v(" "),a("p",[t._v("And you may not even have 26 actual ports, but they're still declared in your ACPI tables causing issues as macOS can't tell the difference between a real port and one your firmware writers forgot to remove.")]),t._v(" "),a("blockquote",[a("p",[t._v("But why did Apple choose 15 ports as the limit?")])]),t._v(" "),a("p",[t._v("Well this gets into a fun subset of computers, the hexadecimal counting system! How this differs from our decimal system is that there are a total of 15 values with the last one being "),a("code",[t._v("0xF")]),t._v(". This meant it was just cleaner to stop at 15 than to say expand the port limit to 255(0xFF), and in Apple's eyes it made little sense to have anything above 15 ports as no Macs they supported went over this limit. And if a Mac Pro user added a USB expansion card, it would get it's own 15 port limit.")]),t._v(" "),a("p",[t._v("And now when we take into account the quirk "),a("code",[t._v("XhciPortLimit")]),t._v(", you can see "),a("em",[t._v("why")]),t._v(" data corruption can happen. As we're pushing past the 0xF limit and going into someone else's space. So avoid this quirk when possible.")]),t._v(" "),a("blockquote",[a("p",[t._v("What about USB hubs?")])]),t._v(" "),a("p",[t._v("USB Hubs attached to one of your USB controller's ports have a different kind of port limit. In total, a single USB port can be split into 127 ports. This includes USB hubs attached to USB hubs")]),t._v(" "),a("h2",{attrs:{id:"now-with-the-backstory-done-let-s-head-to-system-preparations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#now-with-the-backstory-done-let-s-head-to-system-preparations"}},[t._v("#")]),t._v(" Now with the backstory done, let's head to "),a("RouterLink",{attrs:{to:"/usb/system-preparation.html"}},[t._v("System Preparations")])],1)])}),[],!1,null,null,null);e.default=s.exports}}]);