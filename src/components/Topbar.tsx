"use client";
import { Check, CircleHelp, DropletIcon, Mail, MenuIcon, Phone, X } from "lucide-react";
import { ReactNode, useState } from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ApertureIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { TypographyH4 } from "./ui/typographyH4";

import Image from "next/image";
import { TypographyP } from "./ui/typographyP";
import { useInView } from "react-intersection-observer";
// import {
//   Command,
//   CommandDialog,
//   CommandEmpty,
//   CommandGroup,
//   CommandInput,
//   CommandItem,
//   CommandList,
//   CommandSeparator,
//   CommandShortcut,
// } from "@/components/ui/command";

// import ListItem from "./ui/ListItem";
// import { rootCategories } from "@/lib/data";
// import { Button } from "@/components/ui/button"

// interface ChipProps {
//     children?: ReactNode;
//     has: boolean;
// }
// { children, has }: ChipProps

//border-2 border-slate-200

export function TopBar() {
  // md:max-w-screen-xl

  // TODO: BUG where if you scroll right on view change point it loops

  const { ref, inView, entry } = useInView({
    initialInView: true,
    /* Optional options */
    threshold: 0,
  });

  console.log("dfskf")
  console.log(inView)

  // 90px
  //h-[${inView ? 110 : 90}px]

  return (
    <>
      <div ref={ref} className="flex items-center h-12 w-full bg-white border-b border-solid border-border">
        <div className="w-full flex justify-center pl-8 pr-8">
          <div className="w-full  md:max-w-screen-xl">
            <div className="flex items-center space-x-2">
              <div className="flex space-x-2 items-center">
                <Mail className="w-4 h-4" />
                <p className="text-xs ">Info@cleanelite.co.uk</p>
              </div>
              <Separator orientation="vertical" className="h-6" />
              <div className="flex space-x-2 items-center">
                <Phone className="w-4 h-4" />
                <p className="text-xs">01932 847798</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sticky z-50 top-0 w-full" >
        <div className="bg-white flex flex-col items-center justify-center w-full space-y-2 z-50 relative ">
          <div style={{ height: (inView ? 110 : 90) }} className={`flex items-center justify-center w-full pl-8 pr-8 `}>
            <div className="flex items-center justify-between md:max-w-screen-xl w-full ">
              {/* <div className="w-44 flex justify-start">
                <Button size="icon" variant="ghost">
                  <MenuIcon />
                </Button>
              </div> */}
              <div className="w-[150px] flex justify-start ">
                <Link href={"/"}>
                  <Image
                    src="/elite.png"
                    alt="elite logo"
                    width={150}
                    height={150}
                  />
                </Link>
              </div>
              <NavigationMenu className="" orientation="horizontal">
                <NavigationMenuList className="">
                  <NavigationMenuItem>
                    <Link href="/" legacyBehavior passHref className="w-full">
                      <NavigationMenuLink
                        className={cn(navigationMenuTriggerStyle(), "w-full ")}
                      >
                        {/* <p className={` text-black hover:text-opacity-50`}>About</p> */}
                        Home
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link
                      href="/clients"
                      legacyBehavior
                      passHref
                      className="w-full"
                    >
                      <NavigationMenuLink
                        className={cn(navigationMenuTriggerStyle(), "w-full ")}
                      >
                        {/* <p className={` text-black hover:text-opacity-50`}>About</p> */}
                        Clients
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link
                      href="/health-safety"
                      legacyBehavior
                      passHref
                      className="w-full"
                    >
                      <NavigationMenuLink
                        className={cn(navigationMenuTriggerStyle(), "w-full ")}
                      >
                        {/* <p className={` text-black hover:text-opacity-50`}>About</p> */}
                        Safety
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem
                  // key={title + "index"}
                  // onMouseOver={() => {
                  //   setSubcategory1(0);
                  // }}
                  >
                    <NavigationMenuTrigger className="" >
                      <Link
                        href="/sectors"
                        legacyBehavior
                        passHref
                        className="w-full"
                      >
                        Sectors
                      </Link>

                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="">
                      <div className="w-[600px] flex ">
                        <ul className="w-full grid gap-1 p-4 md:grid-rows-2 md:grid-cols-3">
                          <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "cursor-pointer w-full flex justify-start")}
                          >Commercial</NavigationMenuLink>
                          <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "cursor-pointer w-full flex justify-start")}
                          >Education</NavigationMenuLink>
                          <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "cursor-pointer w-full flex justify-start")}
                          >
                            Leisure
                          </NavigationMenuLink>
                          {/* <NavigationMenuLink>
                            Hotel & Leisure
                          </NavigationMenuLink> */}
                          <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "cursor-pointer w-full flex justify-start")}
                          >Health</NavigationMenuLink>
                          <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "cursor-pointer w-full flex justify-start")}
                          >
                            Accommodation
                          </NavigationMenuLink>
                          {/* <NavigationMenuLink>
                            Student accommodation
                          </NavigationMenuLink> */}
                          {/* <NavigationMenuLink>Residential</NavigationMenuLink> */}
                          <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "cursor-pointer w-full flex justify-start")}
                          >Retail</NavigationMenuLink>
                        </ul>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link
                      href="/reviews"
                      legacyBehavior
                      passHref
                      className="w-full"
                    >
                      <NavigationMenuLink
                        className={cn(navigationMenuTriggerStyle(), "w-full ")}
                      >
                        {/* <p className={` text-black hover:text-opacity-50`}>About</p> */}
                        Reviews
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link
                      href="/about"
                      legacyBehavior
                      passHref
                      className="w-full"
                    >
                      <NavigationMenuLink
                        className={cn(navigationMenuTriggerStyle(), "w-full ")}
                      >
                        {/* <p className={` text-black hover:text-opacity-50`}>About</p> */}
                        About
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link
                      href="/contact"
                      legacyBehavior
                      passHref
                      className="w-full"
                    >
                      <NavigationMenuLink
                        className={cn(navigationMenuTriggerStyle(), "w-full ")}
                      >
                        {/* <p className={` text-black hover:text-opacity-50`}>About</p> */}
                        Contact
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <div className="w-[150px] flex justify-start"></div>
              {/* <div className="w-44 flex justify-end  space-x-2">
                <Button variant="link" size="icon">
                  <CircleHelp />
                </Button>
              </div> */}
            </div>
          </div>
          {/* <Button variant="secondary">Button hellllloooo</Button> */}
        </div>
        <div className="w-full z-1  h-3 absolute bottom-0 shadow-[0_0_10px_1px_rgba(0,0,0,0.1)] " />
      </div >
    </>
  );
}
