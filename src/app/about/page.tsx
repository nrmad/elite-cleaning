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
import { TypographyP } from "@/components/ui/typographyP";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AvatarUser } from "@/components/AvatarUser";

export default function About() {
  // just noticed the NavigationBar should shrink on sticky motion


  return (
    <>
      {/* <main className="flex w-screen   min-h-screen flex-col items-center overflow-clip ">
      <NavigationBar /> */}

      <div className=" pt-20 pl-8 pr-8 pb-32 flex flex-col space-y-8 z-10 w-full max-w-screen-xl">
        <div className="w-full flex flex-col space-y-32 justify-center ">
          <div className="w-full flex flex-col items-center space-y-4   ">
            <AnimateComponent
              // transition={{ type: "spring", bounce: 0, duration: 0.6 }}
              variants={{
                start: { opacity: 0, y: 25 },
                end: { opacity: 1, y: 0 },
              }}
            >
              <TypographyH2 className="text-center text-5xl sm:w-[650px]">
                Elite is advancing excellence in builders cleaning.
              </TypographyH2>
            </AnimateComponent>
          </div>
          <AnimateComponent
            className="w-full h-[350px] relative overflow-visible flex flex-col items-center justify-center "
            variants={{
              start: { opacity: 0 },
              end: { opacity: 1 },
            }}
          >
            <Image src="/undraw-coffee-construction.svg" alt="about" fill />
          </AnimateComponent>
          <AnimateComponent
            className="w-full flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-16"
            // transition={{ type: "spring", bounce: 0, duration: 0.6 }}
            variants={{
              start: { opacity: 0, },
              end: { opacity: 1 },
            }}
          >
            <div className="sm:w-1/2">
              <TypographyH2 className="text-4xl">
                We&apos;re elevating builders clean services for those who seek
                exceptional quality.
              </TypographyH2>
            </div>
            <div className="sm:w-1/2 text-sm ">
              <TypographyP className="  leading-6">
                Elite Cleaning started trading as a sole trader over 24 years
                ago in 2000, by December 2006 having grown substantially we
                registered as a Limited company. We specialise exclusively in
                Builders Cleans and Welfare Cleaning for Construction Companies.
                We are a well established and recognised family run business,
                our services cover London and the Home Counties and we are proud
                to be working with the majority of the UK&apos;s leading construction
                companies.
              </TypographyP>
              <TypographyP className=" leading-6">
                Our commitment to Quality, High Standards, Reliability remains
                our priority at all times. We have built our strong foundation
                and company reputation by delivering a level of excellence from
                the start to finish on every project. We understand that you are
                only as good as your last job so each and every job no matter
                how large or small is treated the same.
              </TypographyP>
              <TypographyP className="leading-6">
                Testament to our success is that we have a 90% repeat business
                through the hard work and commitment of our people. We work with
                our Quantity Surveyors, Site Managers and other trades when
                necessary to ensure projects are delivered on time and on budget
                and to the complete customer satisfaction. We have the experience,
                commitment and proven organisational skills to meet the needs of
                every type of construction project. We, unlike most companies
                specialise and only carry out builders cleans, we do not
                undertake the more routine cleaning tasks such as office
                cleaning.
              </TypographyP>
            </div>
          </AnimateComponent>
          <div className="w-full flex flex-col space-y-8">
            <div className="w-full flex flex-col space-y-2">
              <p className="text-xs">Experience </p>
              <Separator className="w-full" />
            </div>
            <div className="w-full flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-16">
              <div className="sm:w-1/2 ">
                <TypographyH2 className="text-4xl">
                  Fully trained experienced cleaning operatives and supervisors.
                </TypographyH2>
                <TypographyP className="text-sm leading-6">
                  Our experienced operatives are fully certified and carded to
                  carry out cleaning to the most challenging buildings. The
                  majority of our Supervisors have been employed by Elite for
                  over 8 years and are
                  {" "}<span className="font-semibold">CITB - SMSTS</span> or
                  {" "}<span className="font-semibold">CITB - SSSTS</span>.
                </TypographyP>
                <TypographyP className="text-sm leading-6">
                  All operatives will arrive on site wearing the appropriate PPE
                  and equipment to complete the client&apos;s chosen cleaning
                  package. Our Management team will work closely with Quantity
                  Surveyors, Project Managers and Site Managers to ensure the
                  clients benefit from our hassle free, piece of mind outcomes
                  on every project.
                </TypographyP>
                <TypographyP className="text-sm leading-6">
                  All contracts will have a designated fully trained Supervisor
                  working on site to liaise with the Site Manager and to ensure
                  the smooth day to day running of the project is maintained
                  from start to completion. Our <span className="font-semibold">IPAF</span>  trained operatives use
                  cherry pickers, boom lifts, spyders, scissor lifts and cradle
                  systems to carry out high level works and our <span className="font-semibold">PASMA</span>  trained
                  operatives are able to build, move around and dismantle
                  towers.
                </TypographyP>
              </div>
              <div className="sm:w-1/2 flex flex-col  ">
                <div className=" w-full flex-1 h-[280px] min-h-[280px] sm:h-full sm:min-h-full  relative overflow-hidden rounded-sm ">
                  <Image
                    src="/temp-team.png"
                    fill
                    objectFit="cover"
                    alt="Elite team"
                    className=""
                  />
                </div>
                <p className="text-xs pt-2 text-muted-foreground">Elite cleaning co-founders Karen Smith, Ian Smith, Director Carol Faith and the team. </p>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col space-y-8">
            <div className="w-full flex flex-col space-y-2">
              <p className="text-xs">Team </p>
              <Separator className="w-full" />
            </div>
            <div className="w-full flex flex-col">

              <TypographyH2 className="text-4xl">
                Backed by an incredible team
              </TypographyH2>
              <TypographyP className="text-sm leading-6 sm:w-2/3">
                We are fortunate to work with one of the most dedicated teams of operatives and supervisors in the industry. Their excellent work speaks for itself.
              </TypographyP>
            </div>
            <div className="w-full grid grid-cols-2  sm:grid-cols-4 gap-5 ">
              <AvatarUser
                firstname="Ian"
                surname="Smith"
                role="Director"
                url="https://thispersondoesnotexist.com"
              />
              <AvatarUser
                firstname="Karen"
                surname="Smith"
                role="Director"

                url="https://thispersondoesnotexist.com"
              />
              <AvatarUser
                firstname="Carole"
                surname="Faith"
                role="Manager"
                url="https://thispersondoesnotexist.com"
              />
              <AvatarUser
                firstname="Zoe"
                surname="Smith"
                role="Sales Manager"
                url="https://thispersondoesnotexist.com"
              />

              <AvatarUser
                firstname="Jim"
                surname="Smith"
                role="Supervisor"
                url="https://thispersondoesnotexist.com"
              />
              <AvatarUser
                firstname="Josh"
                surname="Smith"
                role="Supervisor"
                url="https://thispersondoesnotexist.com"
              />
              <AvatarUser
                firstname="Sam"
                surname="Smith"
                role="Supervisor"
                url="https://thispersondoesnotexist.com"
              />
              <AvatarUser
                firstname="Bam"
                surname="Faith"
                role="Supervisor"
                url="https://thispersondoesnotexist.com"
              />
              <AvatarUser
                firstname="Jim"
                surname="Smith"
                role="Supervisor"
                url="https://thispersondoesnotexist.com"
              />
              <AvatarUser
                firstname="Josh"
                surname="Smith"
                role="Supervisor"
                url="https://thispersondoesnotexist.com"
              />
              <AvatarUser
                firstname="Sam"
                surname="Smith"
                role="Supervisor"
                url="https://thispersondoesnotexist.com"
              />
              <AvatarUser
                firstname="Bam"
                surname="Faith"
                role="Supervisor"
                url="https://thispersondoesnotexist.com"
              />
            </div>
          </div>
        </div>
      </div>
      {/* <Footer />
    </main> */}
    </>
  );
}

// From comprehensive post-construction cleanup to ongoing
// maintenance, Elite Cleaning is committed to delivering reliable
// results. Builders, contractors, and developers nationwide trust
// us to maintain clean and productive environments. Discover how
// Elite Cleaning can enhance your project, allowing you to focus
// on achieving exceptional results.

// Health & Safety Schemes and Operatives Qualifications
