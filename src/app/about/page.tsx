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
import { TypographyP } from "@/components/ui/typographyP";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AvatarUser } from "@/components/AvatarUser";

export default function About() {
  // just noticed the topbar should shrink on sticky motion

  return (
    <main className="flex min-h-screen flex-col items-center">
      <TopBar />

      <div className=" pt-20 pl-8 pr-8 pb-32 flex flex-col space-y-8 z-10 w-full max-w-screen-xl">
        <div className="w-full flex flex-col space-y-16 justify-center ">
          <div className="w-full flex flex-col items-center space-y-4 mb-16  ">
            <AnimateComponent
              // transition={{ type: "spring", bounce: 0, duration: 0.6 }}
              variants={{
                start: { opacity: 0, y: 25 },
                end: { opacity: 1, y: 0 },
              }}
            >
              <TypographyH2 className="text-center text-5xl w-[650px]">
                Elite is advancing excellence in builders cleaning
              </TypographyH2>
            </AnimateComponent>
          </div>
          <div className="w-full h-[400px] "></div>
          <div className="w-full flex space-x-8 ">
            <div className="w-1/2">
              <TypographyH2 className="text-4xl">
                We're elevating builders clean services for those who seek
                exceptional quality
              </TypographyH2>
            </div>
            <div className="w-1/2">
              <TypographyP className="text-sm font-semibold">
                Elite Cleaning started trading as a sole trader over 24 years
                ago in 2000, by December 2006 having grown substantially we
                registered as a Limited company. We specialise exclusively in
                Builders Cleans & Welfare Cleaning for Construction Companies.
                We are a well established and recognised family run business,
                our services cover London and the Home Counties and we are proud
                to be working with the majority of the UK's leading construction
                companies.
              </TypographyP>
              <TypographyP className="text-sm">
                Our commitment to Quality, High Standards, Reliability remains
                our priority at all times. We have built our strong foundation
                and company reputation by delivering a level of excellence from
                the start to finish on every project. We understand that you are
                only as good as your last job so each and every job no matter
                how large or small is treated the same.
              </TypographyP>
              <TypographyP className="text-sm">
                Testament to our success is that we have a 90% repeat business
                through the hard work and commitment of our people. We work with
                our Quantity Surveyors, Site Managers and other trades when
                necessary to ensure projects are delivered on time and on budget
                & to the complete customer satisfaction. We have the experience,
                commitment and proven organisational skills to meet the needs of
                every type of construction project. We, unlike most companies
                specialise and only carry out builders cleans, we do not
                undertake the more routine cleaning tasks such as office
                cleaning.
              </TypographyP>
            </div>
          </div>
          <div className="w-full flex flex-col space-y-8">
            <div className="w-full flex flex-col space-y-2">
              <p className="text-sm font-semibold">Team </p>
              <Separator className="w-full" />
            </div>
            <div className="w-full flex space-x-8">
              <div className="w-1/2">
                <TypographyH2 className="text-4xl">
                  Fully trained experienced cleaning operatives and supervisors
                </TypographyH2>
                <TypographyP className="text-sm">
                  Our experienced operatives are fully certified and carded to
                  carry out cleaning to the most challenging buildings. The
                  majority of our Supervisors have been employed by Elite for
                  over 8 years and are CITB - SMSTS or CITB - SSSTS.
                </TypographyP>
                <TypographyP className="text-sm">
                  All operatives will arrive on site wearing the appropriate PPE
                  and equipment to complete the client's chosen cleaning
                  package. Our Management team will work closely with Quantity
                  Surveyors, Project Managers and Site Managers to ensure the
                  clients benefit from our hassle free, piece of mind outcomes
                  on every project.
                </TypographyP>
                <TypographyP className="text-sm">
                  All contracts will have a designated fully trained Supervisor
                  working on site to liaise with the Site Manager and to ensure
                  the smooth day to day running of the project is maintained
                  from start to completion. Our IPAF trained operatives use
                  cherry pickers, boom lifts, spyders, scissor lifts and cradle
                  systems to carry out high level works and our PASMA trained
                  operatives are able to build, move around and dismantle
                  towers.
                </TypographyP>
              </div>
              <div className="w-1/2 relative">
                <Image
                  src="/fd"
                  fill
                  alt="Elite team"
                  className="border border-solid border-red-500"
                />
              </div>
            </div>
          </div>
          <div className="w-full grid grid-cols-4 gap-4">
            <AvatarUser
              firstname="Ian"
              surname="Gibbons"
              url="https://github.com/shadcn.png"
            />
            <AvatarUser
              firstname="Karen"
              surname="Gibbons"
              url="https://github.com/shadcn.png"
            />
            <AvatarUser
              firstname="Zoe"
              surname="Gibbons"
              url="https://github.com/shadcn.png"
            />
            <AvatarUser
              firstname="Carole"
              surname="Faith"
              url="https://github.com/shadcn.png"
            />
            <AvatarUser
              firstname="Jim"
              surname="Gibbons"
              url="https://github.com/shadcn.png"
            />
            <AvatarUser
              firstname="Josh"
              surname="Gibbons"
              url="https://github.com/shadcn.png"
            />
            <AvatarUser
              firstname="Sam"
              surname="Gibbons"
              url="https://github.com/shadcn.png"
            />
            <AvatarUser
              firstname="Bam"
              surname="Faith"
              url="https://github.com/shadcn.png"
            />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

// From comprehensive post-construction cleanup to ongoing
// maintenance, Elite Cleaning is committed to delivering reliable
// results. Builders, contractors, and developers nationwide trust
// us to maintain clean and productive environments. Discover how
// Elite Cleaning can enhance your project, allowing you to focus
// on achieving exceptional results.

// Health & Safety Schemes and Operatives Qualifications
