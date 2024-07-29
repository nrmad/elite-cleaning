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
import { ImageWidget } from "@/components/ImageWidget";

export default function Clients() {
  // just noticed the topbar should shrink on sticky motion

  // TODO: RESIZE AND ACTIVATE LOGO LINKS SWAPPING OUT RYDONS GROSS LOGO
  // TODO: LOGOS SAME HEIGHT LOOKS GOOD

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
                Meet our customers
              </TypographyH2>
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
              <TypographyH3 className="text-center text-xl font-medium  w-[550px]">
                We have built our strong foundation and company reputation by
                delivering a level of excellence from the start to finish on
                every project.
              </TypographyH3>
            </AnimateComponent>
          </div>

          <div className="w-full h-[500px] ">
            <AnimateComponent
              className="w-full flex flex-col items-center justify-center"
              // transition={{
              //   type: "spring",
              //   bounce: 0,
              //   duration: 0.6,
              //   delay: 0.3,
              // }}
              variants={{
                start: { opacity: 0 },
                end: { opacity: 1 },
              }}
            >
              <div className="w-full h-[400px] relative">
                <Image src="/undraw-experts.svg" alt="world" fill />
              </div>
            </AnimateComponent>
          </div>
          <AnimateComponent
            // transition={{ type: "spring", bounce: 0, duration: 0.6 }}
            variants={{
              start: { opacity: 0 },
              end: { opacity: 1 },
            }}
          >
            <div className="w-full grid grid-cols-5 gap-8">
              <ImageWidget
                name="mclaren"
                url="/mclaren-logo-testy.svg"
              // width={80}
              />
              <ImageWidget
                name="bowmer-kirkland"
                url="/bowmer-kirkland-logo.svg"
              />
              <ImageWidget
                name="balfour-beatty"
                url="/balfour-beatty-logo.svg"
              />
              <ImageWidget
                name="skanska"
                url="/skanska-logo.svg"
                className="object-contain"
              />
              <ImageWidget
                name="kier"
                url="/kier-logo.svg"
                className="object-contain"
              />
              <ImageWidget
                name="sisk"
                url="/sisk-logo.svg"
                className="object-contain"
              />
              <ImageWidget
                name="bam"
                url="/bam-logo.svg"
                className="object-contain"
              />
              <ImageWidget
                name="costain"
                url="/costain-logo.svg"
                className="object-contain"
              />
              <ImageWidget
                name="redrow"
                url="/redrow-logo.svg"
                className="object-contain"
              />
              <ImageWidget
                name="galliford"
                url="/galliford-logo.svg"
                className="object-contain"
              />
              <ImageWidget
                name="rydon"
                url="/rydon-logo.svg"
                className="object-contain"
              />
              <ImageWidget
                name="lendlease"
                url="/lendlease-logo.svg"
                className="object-contain"
              />
              <ImageWidget
                name="lindenhomes"
                url="/lindenhomes-logo.svg"
                className="object-contain"
              />
              <ImageWidget
                name="laing-o-rourke"
                url="/laing-o-rourke-logo.svg"
              />
              <ImageWidget
                name="vinci"
                url="/vinci-logo.svg"
                className="object-contain"
              />
            </div>
          </AnimateComponent>
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
