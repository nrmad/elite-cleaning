"use client"
import { Check, CircleHelp, DropletIcon, Mail, Menu, MenuIcon, Phone, X } from "lucide-react";
import { ReactNode, useEffect, useLayoutEffect, useRef, useState } from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  NavigationMenuSub,
  NavigationMenuContent as Falafel,
  NavigationMenuViewport,
  NavigationMenuList as FalafelList

} from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ApertureIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { TypographyH4 } from "./ui/typographyH4";

import Image from "next/image";
import { TypographyP } from "./ui/typographyP";
// import { useInView } from "react-intersection-observer";
import { usePathname } from 'next/navigation';
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "./ui/drawer";



export function NavigationBar() {


  const pathname = usePathname();


  // const navigation = (
  //   <>
  //     <NavigationMenuItem>
  //       <Link href="/" legacyBehavior passHref className="w-full">
  //         <NavigationMenuLink
  //           className={cn(navigationMenuTriggerStyle(), "w-full ", pathname === '/' ? "text-black" : "")}
  //         >
  //           {/* <p className={` text-black hover:text-opacity-50`}>About</p> */}
  //           Home
  //         </NavigationMenuLink>
  //       </Link>
  //     </NavigationMenuItem>

  //     <NavigationMenuItem>
  //       <Link
  //         href="/clients"
  //         legacyBehavior
  //         passHref
  //         className="w-full"
  //       >
  //         <NavigationMenuLink
  //           className={cn(navigationMenuTriggerStyle(), "w-full ", pathname === '/clients' ? "text-black" : "")}
  //         >
  //           {/* <p className={` text-black hover:text-opacity-50`}>About</p> */}
  //           Clients
  //         </NavigationMenuLink>
  //       </Link>
  //     </NavigationMenuItem>

  //     <NavigationMenuItem>
  //       <Link
  //         href="/health-safety"
  //         legacyBehavior
  //         passHref
  //         className="w-full"
  //       >
  //         <NavigationMenuLink
  //           className={cn(navigationMenuTriggerStyle(), "w-full ", pathname === '/health-safety' ? "text-black" : "")}
  //         >
  //           {/* <p className={` text-black hover:text-opacity-50`}>About</p> */}
  //           Safety
  //         </NavigationMenuLink>
  //       </Link>
  //     </NavigationMenuItem>
  //     <NavigationMenuItem
  //     // key={title + "index"}
  //     // onMouseOver={() => {
  //     //   setSubcategory1(0);
  //     // }}
  //     >
  //       <NavigationMenuTrigger className="" >
  //         <Link
  //           href="/sectors"
  //           legacyBehavior
  //           passHref
  //           className={"w-full"}
  //         >
  //           <NavigationMenuLink
  //             className={cn(pathname === '/sectors' ? "text-black" : "")}
  //           >
  //             {/* <p className={` text-black hover:text-opacity-50`}>About</p> */}
  //             Sectors
  //           </NavigationMenuLink>
  //         </Link>

  //       </NavigationMenuTrigger>
  //       <NavigationMenuContent className="bg-red-500/99 opacity-99">
  //         {/* <NavigationMenu.Sub defaultValue="sub1"> */}

  //         <div className="w-[600px] flex opacity-100">
  //           <ul className="w-full grid gap-1 p-4 md:grid-rows-2 md:grid-cols-3 opacity-100">
  //             <Link href="/sectors/commercial" passHref>
  //               <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "cursor-pointer w-full flex justify-start", pathname === '/sectors/commercial' ? "text-black" : "")}
  //               >Commercial
  //               </NavigationMenuLink>
  //             </Link>
  //             <Link href="/sectors/education" passHref>
  //               <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "cursor-pointer w-full flex justify-start", pathname === '/sectors/education' ? "text-black" : "")}
  //               >Education</NavigationMenuLink>
  //             </Link>

  //             <Link href="/sectors/leisure" passHref>
  //               <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "cursor-pointer w-full flex justify-start", pathname === '/sectors/leisure' ? "text-black" : "")}
  //               >
  //                 Leisure
  //               </NavigationMenuLink>
  //             </Link>

  //             {/* <NavigationMenuLink>
  //               Hotel & Leisure
  //             </NavigationMenuLink> */}
  //             <Link href="/sectors/health" passHref>
  //               <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "cursor-pointer w-full flex justify-start", pathname === '/sectors/health' ? "text-black" : "")}
  //               >Health</NavigationMenuLink>
  //             </Link>

  //             <Link href="/sectors/accommodation" passHref>
  //               <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "cursor-pointer w-full flex justify-start", pathname === '/sectors/accommodation' ? "text-black" : "")}
  //               >
  //                 Accommodation
  //               </NavigationMenuLink>
  //             </Link>

  //             {/* <NavigationMenuLink>
  //               Student accommodation
  //             </NavigationMenuLink> */}
  //             {/* <NavigationMenuLink>Residential</NavigationMenuLink> */}
  //             <Link href="/sectors/retail" passHref>
  //               <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "cursor-pointer w-full flex justify-start", pathname === '/sectors/retail' ? "text-black" : "")}
  //               >Retail</NavigationMenuLink>
  //             </Link>

  //           </ul>
  //         </div>
  //       </NavigationMenuContent>
  //     </NavigationMenuItem>
  //     <NavigationMenuItem>
  //       <Link
  //         href="/reviews"
  //         legacyBehavior
  //         passHref
  //         className={cn("w-full")}
  //       >
  //         <NavigationMenuLink
  //           className={cn(navigationMenuTriggerStyle(), "w-full ", pathname === '/reviews' ? "text-black" : "")}
  //         >
  //           {/* <p className={` text-black hover:text-opacity-50`}>About</p> */}
  //           Reviews
  //         </NavigationMenuLink>
  //       </Link>
  //     </NavigationMenuItem>

  //     <NavigationMenuItem>
  //       <Link
  //         href="/about"
  //         legacyBehavior
  //         passHref
  //         className="w-full"
  //       >
  //         <NavigationMenuLink
  //           className={cn(navigationMenuTriggerStyle(), "w-full ", pathname === '/about' ? "text-black" : "")}
  //         >
  //           {/* <p className={` text-black hover:text-opacity-50`}>About</p> */}
  //           About
  //         </NavigationMenuLink>
  //       </Link>
  //     </NavigationMenuItem>

  //     <NavigationMenuItem>
  //       <Link
  //         href="/contact"
  //         legacyBehavior
  //         passHref
  //         className="w-full"
  //       >
  //         <NavigationMenuLink
  //           className={cn(navigationMenuTriggerStyle(), "w-full ", pathname === '/contact' ? "text-black" : "")}
  //         >
  //           {/* <p className={` text-black hover:text-opacity-50`}>About</p> */}
  //           Contact
  //         </NavigationMenuLink>
  //       </Link>
  //     </NavigationMenuItem>
  //   </>
  // )


  return (
    <>
      <div className="h-12 sm:hidden flex w-full">
        <div className="fixed z-50 top-0 left-0 right-0 flex h-12 p-2 pr-4 pl-4 w-full justify-between  isolate bg-white/60 shadow-lg ring-1 ring-black/5 backdrop-blur-lg ">

          <div className="w-[80] flex justify-start ">
            <Link href={"/"}>
              <Image
                src="/elite.png"
                alt="elite logo"
                width={80}
                height={80}
              />
            </Link>
          </div>
          <Drawer direction="right">
            <DrawerTrigger>
              <Menu className="w-6 h-6" />
            </DrawerTrigger>
            <DrawerContent className="h-screen flex flex-col rounded-none">
              <NavigationMenu className="pl-4 pt-4 flex flex-col justify-start h-fit" orientation="vertical">
                <NavigationMenuList className="flex flex-col items-start space-x-0 space-y-2">

                  <NavigationMenuItem>
                    <Link href="/" legacyBehavior passHref className="w-full">
                      <NavigationMenuLink
                        className={cn(navigationMenuTriggerStyle(), "w-full text-lg", pathname === '/' ? "text-black" : "")}
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
                        className={cn(navigationMenuTriggerStyle(), "w-full  text-lg", pathname === '/clients' ? "text-black" : "")}
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
                        className={cn(navigationMenuTriggerStyle(), "w-full  text-lg", pathname === '/health-safety' ? "text-black" : "")}
                      >
                        {/* <p className={` text-black hover:text-opacity-50`}>About</p> */}
                        Safety
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem className="" >
                    <Link
                      href="/sectors"
                      legacyBehavior
                      passHref
                      className={"w-full"}
                    >
                      <NavigationMenuLink
                        className={cn(navigationMenuTriggerStyle(), "w-full  text-lg", pathname === '/sectors' ? "text-black" : "")}
                      >
                        {/* <p className={` text-black hover:text-opacity-50`}>About</p> */}
                        Sectors
                      </NavigationMenuLink>
                    </Link>

                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link
                      href="/reviews"
                      legacyBehavior
                      passHref
                      className={cn("w-full")}
                    >
                      <NavigationMenuLink
                        className={cn(navigationMenuTriggerStyle(), "w-full  text-lg", pathname === '/reviews' ? "text-black" : "")}
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
                        className={cn(navigationMenuTriggerStyle(), "w-full  text-lg", pathname === '/about' ? "text-black" : "")}
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
                        className={cn(navigationMenuTriggerStyle(), "w-full  text-lg", pathname === '/contact' ? "text-black" : "")}
                      >
                        {/* <p className={` text-black hover:text-opacity-50`}>About</p> */}
                        Contact
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>

                </NavigationMenuList>
              </NavigationMenu>
              {/* <DrawerHeader>
              <DrawerTitle>Are you absolutely sure?</DrawerTitle>
              <DrawerDescription>This action cannot be undone.</DrawerDescription>
            </DrawerHeader> */}
              {/* <DrawerFooter>
              <Button>Submit</Button>
              <DrawerClose>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter> */}
            </DrawerContent>
          </Drawer>
        </div>
      </div>

      <div className="hidden  sm:flex items-center h-12 w-full border-b border-solid border-border isolate bg-white/60 ring-1 ring-black/5 backdrop-blur-lg ">
        <div className="w-full flex justify-center pl-8 pr-8">
          <div className="w-full  md:max-w-screen-xl">
            <div className="flex items-center space-x-2">
              <div className="flex space-x-2 items-center">
                <Mail className="w-4 h-4 stroke-foreground/60 " />
                <p className="text-xs text-foreground/60 ">Info@cleanelite.co.uk</p>
              </div>
              <Separator orientation="vertical" className="h-6" />
              <div className="flex space-x-2 items-center">
                <Phone className="w-4 h-4 stroke-foreground/60 " />
                <p className="text-xs text-foreground/60 ">01932 847798</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden sm:flex sticky z-50 top-0 w-full" >
        {/* <h1 className="fixed w-60 h-60 border border-solid border-red-500 z-[500]">Memes {visible.toString()}
          Memes2 {test.current.toString()}
          </h1> */}
        <div className="isolate bg-white/60 shadow-lg ring-1 ring-black/5 backdrop-blur-lg flex flex-col items-center justify-center w-full space-y-2 z-50 relative ">
          <div style={{ height: 90 }} className={`flex items-center justify-center w-full pl-8 pr-8 `}>
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
                        className={cn(navigationMenuTriggerStyle(), "w-full ", pathname === '/' ? "text-black" : "")}
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
                        className={cn(navigationMenuTriggerStyle(), "w-full ", pathname === '/clients' ? "text-black" : "")}
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
                        className={cn(navigationMenuTriggerStyle(), "w-full ", pathname === '/health-safety' ? "text-black" : "")}
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
                        className={"w-full"}
                      >
                        <NavigationMenuLink
                          className={cn(pathname === '/sectors' ? "text-black" : "")}
                        >
                          {/* <p className={` text-black hover:text-opacity-50`}>About</p> */}
                          Sectors
                        </NavigationMenuLink>
                      </Link>

                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="bg-red-500/99 opacity-99">
                      {/* <NavigationMenu.Sub defaultValue="sub1"> */}

                      <div className="w-[600px] flex opacity-100">
                        <ul className="w-full grid gap-1 p-4 md:grid-rows-2 md:grid-cols-3 opacity-100">
                          <Link href="/sectors/commercial" passHref>
                            <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "cursor-pointer w-full flex justify-start", pathname === '/sectors/commercial' ? "text-black" : "")}
                            >Commercial
                            </NavigationMenuLink>
                          </Link>
                          <Link href="/sectors/education" passHref>
                            <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "cursor-pointer w-full flex justify-start", pathname === '/sectors/education' ? "text-black" : "")}
                            >Education</NavigationMenuLink>
                          </Link>

                          <Link href="/sectors/leisure" passHref>
                            <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "cursor-pointer w-full flex justify-start", pathname === '/sectors/leisure' ? "text-black" : "")}
                            >
                              Leisure
                            </NavigationMenuLink>
                          </Link>

                          {/* <NavigationMenuLink>
                Hotel & Leisure
              </NavigationMenuLink> */}
                          <Link href="/sectors/health" passHref>
                            <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "cursor-pointer w-full flex justify-start", pathname === '/sectors/health' ? "text-black" : "")}
                            >Health</NavigationMenuLink>
                          </Link>

                          <Link href="/sectors/accommodation" passHref>
                            <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "cursor-pointer w-full flex justify-start", pathname === '/sectors/accommodation' ? "text-black" : "")}
                            >
                              Accommodation
                            </NavigationMenuLink>
                          </Link>

                          {/* <NavigationMenuLink>
                Student accommodation
              </NavigationMenuLink> */}
                          {/* <NavigationMenuLink>Residential</NavigationMenuLink> */}
                          <Link href="/sectors/retail" passHref>
                            <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "cursor-pointer w-full flex justify-start", pathname === '/sectors/retail' ? "text-black" : "")}
                            >Retail</NavigationMenuLink>
                          </Link>

                        </ul>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link
                      href="/reviews"
                      legacyBehavior
                      passHref
                      className={cn("w-full")}
                    >
                      <NavigationMenuLink
                        className={cn(navigationMenuTriggerStyle(), "w-full ", pathname === '/reviews' ? "text-black" : "")}
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
                        className={cn(navigationMenuTriggerStyle(), "w-full ", pathname === '/about' ? "text-black" : "")}
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
                        className={cn(navigationMenuTriggerStyle(), "w-full ", pathname === '/contact' ? "text-black" : "")}
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
