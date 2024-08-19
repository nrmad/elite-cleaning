// import Image from 'next/image'

import AnimateComponent from "@/components/AnimateComponent";
import { AnimateNumber } from "@/components/AnimateNumber";
import { Footer } from "@/components/Footer";
import { NavigationBar } from "@/components/NavigationBar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TypographyH1 } from "@/components/ui/typographyH1";
import { TypographyH2 } from "@/components/ui/typographyH2";
import { TypographyH3 } from "@/components/ui/typographyH3";
import { TypographyH4 } from "@/components/ui/typographyH4";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { Montserrat } from "next/font/google";
import { Separator } from "@/components/ui/separator";
import { ChevronRight, ClipboardList, Mail } from "lucide-react";
import Image from "next/image";


export default function Contact() {
  // just noticed the NavigationBar should shrink on sticky motion

  return (
    <main className="flex min-h-screen flex-col items-center overflow-clip">
      <NavigationBar />

      <div className=" pt-20 pl-8 pr-8 pb-20 flex flex-col space-y-8 z-10 w-full max-w-screen-xl">
        <div className="w-full flex flex-col space-y-8 justify-center ">
          <div className="w-full flex flex-col items-center space-y-4 mb-16  ">
            <AnimateComponent
              // transition={{ type: "spring", bounce: 0, duration: 0.6 }}
              variants={{
                start: { opacity: 0, y: 25 },
                end: { opacity: 1, y: 0 },
              }}
            >
              <TypographyH2 className="text-center text-4xl">
                How can we help?
              </TypographyH2>
            </AnimateComponent>
            <AnimateComponent
              transition={{
                type: "spring",
                bounce: 0,
                duration: 0.4,
                delay: 0.3,
              }}
              variants={{
                start: { opacity: 0, y: 25 },
                end: { opacity: 1, y: 0 },
              }}
            >
              <TypographyH4 className="text-center sm:w-[525px] font-medium   ">
                Get in touch with our team for information on our services,
                project quotations and any other inquiries.
              </TypographyH4>
            </AnimateComponent>
          </div>
          <AnimateComponent
            className="w-full h-[200px] relative overflow-visible flex flex-col space-y-4 pt-4 "
            variants={{
              start: { opacity: 0 },
              end: { opacity: 1 },
            }}
          >
            <Image src="/undraw-contact-us.svg" alt="world" fill />
          </AnimateComponent>
          <div className="w-full h-5">
            <Separator className="w-full " />
          </div>
          <div className="w-full flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-16">
            <div className="sm:w-1/2">
              <AnimateComponent
                className="overflow-visible"
                variants={{
                  start: { opacity: 0 },
                  end: { opacity: 1 },
                }}
              >
                <div className="w-full flex flex-col pt-4 space-y-4 ">
                  <span className="flex items-center space-x-1.5">
                    {/* <Mail className="w-5 h-5" /> */}
                    <TypographyH4 className="mb-4">Get in touch</TypographyH4></span>
                  {/* <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name" className="text-sm">Name</Label>
                    <Input id="name" placeholder="Your name" />
                  </div> */}
                  <div className="flex flex-col space-y-1.5 ">
                    <Label htmlFor="email">Email address</Label>
                    <Input
                      className="bg-white/1"
                      id="email"
                      type="email"
                      placeholder="Enter email address"
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5 ">
                    <Label htmlFor="message">Tell us how we can help</Label>
                    <Textarea id="message" placeholder="Enter your message" />
                  </div>
                  <Button className="w-fit rounded-full">Submit <ChevronRight className="w-4 h-4" /></Button>
                </div>

              </AnimateComponent>
            </div>
            <AnimateComponent
              className="overflow-visible m:w-1/2 flex flex-col space-y-4 pt-4 "
              variants={{
                start: { opacity: 0 },
                end: { opacity: 1 },
              }}
            >
              <TypographyH4 className="mb-4">Contact details</TypographyH4>
              <div>
                <p className="text-sm text-muted-foreground"> Get help</p>
                <span className="flex items-center w-fit space-x-1.5 group"><p className="text-sm">Info@cleanelite.co.uk</p><span className="invisible group-hover:visible cursor-pointer"><ClipboardList className="w-4 h-4" /></span></span>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Call us</p>
                <span className="flex items-center w-fit space-x-1.5 group"><p className="text-sm">07917 821658
                </p><span className="invisible group-hover:visible cursor-pointer"><ClipboardList className="w-4 h-4" /></span></span>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Address</p>
                <span className="flex items-center w-fit space-x-1.5 group"><p className="text-sm">Elite Cleaning Services (Surrey) LImited Unit 21 Investment House 28 Queens Road Weybridge Surrey KT13 9UT
                </p><span className="invisible group-hover:visible cursor-pointer"><ClipboardList className="w-4 h-4" /></span></span>
              </div>
            </AnimateComponent>

          </div>
          <div className="w-full h-10 "></div>
        </div>
      </div>
      <Footer />
    </main >
  );
}
