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
import { ClientWidget } from "@/components/ImageWidget";

export default function HealthSafety() {
  // just noticed the topbar should shrink on sticky motion

  return (
    <main className="flex min-h-screen flex-col items-center">
      <TopBar />

      <div className=" pt-20 pl-8 pr-8 pb-32 flex flex-col space-y-8 z-10 w-full max-w-screen-xl">
        <div className="w-full flex flex-col space-y-16 justify-center items-center ">
          <div className="w-full max-w-screen-md  flex  flex-col space-y-8    ">
            <div className="w-full flex space-x-16">
              <div className="w-2/3 flex flex-col space-y-8">
                <div className="flex flex-col">
                  <AnimateComponent
                    // transition={{ type: "spring", bounce: 0, duration: 0.6 }}
                    variants={{
                      start: { opacity: 0, y: 25 },
                      end: { opacity: 1, y: 0 },
                    }}
                  >
                    <TypographyH2 className="pb-0  text-4xl ">
                      Health and Safety
                    </TypographyH2>
                  </AnimateComponent>
                  <AnimateComponent
                    // transition={{ type: "spring", bounce: 0, duration: 0.6 }}
                    variants={{
                      start: { opacity: 0, y: 25 },
                      end: { opacity: 1, y: 0 },
                    }}
                  >
                    <p className="text-muted-foreground font-semibold text-sm">
                      Accreditation and practices
                    </p>
                  </AnimateComponent>
                </div>
                <Separator />
                <AnimateComponent
                  transition={{
                    type: "spring",
                    bounce: 0,
                    duration: 0.6,
                    delay: 0.3,
                  }}
                  variants={{
                    start: { opacity: 0, y: 25 },
                    end: { opacity: 1, y: 0 },
                  }}
                >
                  <div>
                    <TypographyP className=" ">
                      Elite Cleaning Services Limited is deeply committed to
                      recognizing and prioritizing the significant importance of
                      Health and Safety practices on site.
                    </TypographyP>
                    <TypographyP>
                      It is integral to our operations and fundamental to our
                      commitment to ensuring the well-being and security of our
                      team members and clients alike.
                    </TypographyP>
                  </div>
                </AnimateComponent>
              </div>
              <div className="w-1/3">
                <div className="w-full relative overflow-hidden rounded-sm">
                  <Image
                    height={400}
                    width={299}
                    src="/health-safety.jpg"
                    alt="health and safety"
                  />
                </div>
              </div>
            </div>
            <Separator />
            <div className="w-full flex flex-col space-y-4">
              <AnimateComponent
                // transition={{ type: "spring", bounce: 0, duration: 0.6 }}
                variants={{
                  start: { opacity: 0, x: 25 },
                  end: { opacity: 1, x: 0 },
                }}
              >
                <TypographyH3 className=" ">Accreditation</TypographyH3>
              </AnimateComponent>
              <AnimateComponent
                transition={{
                  type: "spring",
                  bounce: 0,
                  duration: 0.6,
                  delay: 0.3,
                }}
                variants={{
                  start: { opacity: 0, y: 25 },
                  end: { opacity: 1, y: 0 },
                }}
              >
                <div>
                  <TypographyP className=" ">
                    For a number of years Elite has undertaken annual
                    assessments for <span className="font-semibold">CHAS</span>,
                    <span className="font-semibold"> Achilles</span> and{" "}
                    <span className="font-semibold">
                      Constructionline Siver
                    </span>{" "}
                    & <span className="font-semibold">Gold</span> and have
                    received acknowledgment of improved and detailed policies
                    for both.
                  </TypographyP>
                  <TypographyP className=" ">
                    More recently we have also been accredited to{" "}
                    <span className="font-semibold">SMAS</span> and{" "}
                    <span className="font-semibold">Builders Profile</span>. We
                    continue to review health and safety every day to ensure a
                    safe environment for both our employees and others on site.
                  </TypographyP>
                </div>
              </AnimateComponent>
            </div>
            <Separator />
            <div className="w-full flex flex-col space-y-4">
              <AnimateComponent
                // transition={{ type: "spring", bounce: 0, duration: 0.6 }}
                variants={{
                  start: { opacity: 0, x: 25 },
                  end: { opacity: 1, x: 0 },
                }}
              >
                <TypographyH3 className=" ">Operatives</TypographyH3>
              </AnimateComponent>
              <AnimateComponent
                transition={{
                  type: "spring",
                  bounce: 0,
                  duration: 0.6,
                  delay: 0.3,
                }}
                variants={{
                  start: { opacity: 0, y: 25 },
                  end: { opacity: 1, y: 0 },
                }}
              >
                <div>
                  <TypographyP className=" ">
                    Elite do not sub contract any works and are{" "}
                    <span className="font-semibold">CSCS</span>,{" "}
                    <span className="font-semibold">IPAF</span> &{" "}
                    <span className="font-semibold">PASMA</span> trained
                    operatives wearing the necessary PPE. We have a Health &
                    Safety advisor for consultancy purposes.
                  </TypographyP>
                  <TypographyP className=" ">
                    We are fully compliant with all UK legal legislations
                    including the Construction Regulations and follow guidelines
                    specific to the cleaning industry as recommended by the{" "}
                    <span className="font-semibold">HSE</span>.
                  </TypographyP>
                </div>
              </AnimateComponent>
            </div>
            <Separator />

            <div className="w-full flex flex-col space-y-4">
              <AnimateComponent
                // transition={{ type: "spring", bounce: 0, duration: 0.6 }}
                variants={{
                  start: { opacity: 0, x: 25 },
                  end: { opacity: 1, x: 0 },
                }}
              >
                <TypographyH3 className=" ">Practices</TypographyH3>
              </AnimateComponent>
              <AnimateComponent
                transition={{
                  type: "spring",
                  bounce: 0,
                  duration: 0.6,
                  delay: 0.3,
                }}
                variants={{
                  start: { opacity: 0, y: 25 },
                  end: { opacity: 1, y: 0 },
                }}
              >
                <div>
                  <TypographyP className=" ">
                    We conduct thorough risk assessments before starting any
                    project to identify potential hazards and develop strategies
                    to mitigate them. These assessments are regularly reviewed
                    and updated to reflect any changes on site.
                  </TypographyP>
                  <TypographyP className=" ">
                    Our employees undergo regular health and safety training to
                    stay updated on the latest regulations, best practices, and
                    safe operating procedures. Competency assessments ensure our
                    team is fully equipped to perform their duties safely.
                  </TypographyP>
                </div>
              </AnimateComponent>
            </div>
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
