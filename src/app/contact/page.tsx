// import Image from 'next/image'

import AnimateComponent from "@/components/AnimateComponent";
import { AnimateNumber } from "@/components/AnimateNumber";
import { Footer } from "@/components/Footer";
import { TopBar } from "@/components/Topbar";
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

export default function Contact() {
  // just noticed the topbar should shrink on sticky motion

  return (
    <main className="flex min-h-screen flex-col items-center">
      <TopBar />

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
              <TypographyH4 className="text-center w-[525px] font-medium   ">
                Get in touch with our team for information on our services,
                project quotations and any other inquiries.
              </TypographyH4>
            </AnimateComponent>
          </div>
          <div className="w-full h-10 "></div>
          <div className="w-full h-5">
            <Separator className="w-full " />
          </div>
          <div className="w-full flex">
            <div className="w-1/2"></div>
            <div className="w-1/2">
              <AnimateComponent
                variants={{
                  start: { opacity: 0 },
                  end: { opacity: 1 },
                }}
              >
                <Card className="w-full">
                  {/* <CardHeader>
                <CardTitle>Create project</CardTitle>
                <CardDescription>
                  Deploy your new project in one-click.
                </CardDescription>
              </CardHeader> */}
                  <CardContent>
                    <form>
                      <div className="w-full flex flex-col pt-4 space-y-4">
                        <div className="flex flex-col space-y-1.5">
                          <Label htmlFor="name">Name</Label>
                          <Input id="name" placeholder="Your name" />
                        </div>
                        <div className="flex flex-col space-y-1.5 ">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="Your email"
                          />
                        </div>
                        <div className="flex flex-col space-y-1.5 ">
                          <Label htmlFor="message">Message</Label>
                          <Textarea id="message" placeholder="Your message" />
                        </div>
                      </div>
                    </form>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button>Send message</Button>
                  </CardFooter>
                </Card>
              </AnimateComponent>
            </div>
          </div>
          <div className="w-full h-10 border border-solid border-red-500"></div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
