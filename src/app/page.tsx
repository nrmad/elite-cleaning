// import Image from 'next/image'

import AnimateComponent from "@/components/AnimateComponent";
import { AnimateNumber } from "@/components/AnimateNumber";
import Box from "@/components/Box";
import { ImageWidget } from "@/components/ImageWidget";
import { Footer } from "@/components/Footer";
import { TopBar } from "@/components/Topbar";
import { TypographyH1 } from "@/components/ui/typographyH1";
import { TypographyH2 } from "@/components/ui/typographyH2";
import { TypographyH3 } from "@/components/ui/typographyH3";
import { TypographyH4 } from "@/components/ui/typographyH4";
import { TypographyP } from "@/components/ui/typographyP";
import { cn } from "@/lib/utils";
import { Montserrat } from "next/font/google";
import Image from "next/image";

const montserrat = Montserrat({ weight: "400", subsets: ["latin"] });

export default function Home() {
  // just noticed the topbar should shrink on sticky motion

  return (
    <main className="flex min-h-screen flex-col items-center">
      <TopBar />
      <div className="w-full relative z-[-1] md:h-[400px] lg:h-[500px] 2xl:h-[600px] bg-[url('/banner1.jpg')] bg-center bg-cover ">
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-60" />
        <div className=" flex items-center justify-center h-full w-full relative ">
          <div className="w-full max-w-screen-xl ">
            <div className="relative ml-8 flex flex-col h-[124px] text-primary-foreground ">
              <Box className="absolute  lg:h-[330px] p-8 w-fit">
                <AnimateComponent
                  // transition={{ type: "spring", bounce: 0, duration: 0.6 }}
                  variants={{
                    start: { opacity: 0, x: 25 },
                    end: { opacity: 1, x: 0 },
                  }}
                >
                  <TypographyH2 className="  pb-1 font-normal text-lg text-primary-foreground">
                    Builders cleaning services
                  </TypographyH2>
                </AnimateComponent>
                <AnimateComponent
                  // transition={{ type: "spring", bounce: 0, duration: 0.6 }}
                  variants={{
                    start: { opacity: 0, x: -25 },
                    end: { opacity: 1, x: 0 },
                  }}
                >
                  <TypographyH2 className="text-5xl">
                    <span
                      className={cn(
                        montserrat.className,
                        "font-extralight font-normal"
                      )}
                    >
                      Elite Expertise
                    </span>
                  </TypographyH2>
                </AnimateComponent>
              </Box>
            </div>
          </div>
        </div>
      </div>
      <div className=" pt-36 pl-8 pr-8 pb-16 flex flex-col space-y-8 z-10 w-full max-w-screen-xl">
        <div className="w-full flex flex-col space-y-52 justify-center border border-solid border-blue-500">
          <div className="w-full flex flex-col space-y-16">
            <div className="w-full flex flex-col space-y-4 mb-16  ">
              <div className="w-full flex justify-center">
                <AnimateComponent
                  // transition={{ type: "spring", bounce: 0, duration: 0.6 }}
                  variants={{
                    start: { opacity: 0, y: 25 },
                    end: { opacity: 1, y: 0 },
                  }}
                >
                  <TypographyH4 className="text-center tracking-wider w-fit">
                    WE ARE ELITE
                  </TypographyH4>
                </AnimateComponent>
              </div>
              <div className="w-full flex justify-center">
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
                  <TypographyH2 className="text-center w-80 text-4xl">
                    Why Choose Elite Cleaning
                  </TypographyH2>
                </AnimateComponent>
              </div>
            </div>
            <div className="w-full flex justify-center pb-52">
              <div className="w-2/3 flex justify-between ">
                <div className="flex flex-col space-y-2 text-center">
                  <TypographyH2 className="text-4xl font-bold">
                    <AnimateNumber value={350} suffix="+" />
                  </TypographyH2>
                  <AnimateComponent
                    variants={{
                      start: { opacity: 0 },
                      end: { opacity: 1 },
                    }}
                  >
                    <p>Completed jobs</p>
                  </AnimateComponent>
                </div>
                <div className="flex flex-col space-y-2 text-center">
                  <TypographyH2 className="text-4xl font-bold">
                    <AnimateNumber value={300} suffix="+" />
                  </TypographyH2>
                  <AnimateComponent
                    // transition={{ type: "spring", bounce: 0, duration: 0.6 }}
                    variants={{
                      start: { opacity: 0 },
                      end: { opacity: 1 },
                    }}
                  >
                    <p>Satisfied clients</p>
                  </AnimateComponent>
                </div>
                <div className="flex flex-col space-y-2 text-center">
                  <TypographyH2 className="text-4xl font-bold">
                    <AnimateNumber value={20} suffix="+" />
                  </TypographyH2>
                  <AnimateComponent
                    // transition={{ type: "spring", bounce: 0, duration: 0.6 }}
                    variants={{
                      start: { opacity: 0 },
                      end: { opacity: 1 },
                    }}
                  >
                    <p>Years experience</p>
                  </AnimateComponent>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full flex space-x-16 ">
            <div className="w-1/2">
              <AnimateComponent
                // transition={{ type: "spring", bounce: 0, duration: 0.6 }}
                variants={{
                  start: { opacity: 0, x: -50 },
                  end: { opacity: 1, x: 0 },
                }}
              >
                <div className="w-full">
                  <div className="w-full h-96 relative overflow-hidden rounded-sm">
                    <Image
                      // height={620}
                      // width={465}
                      fill
                      objectFit="cover"
                      src="/construction1.jpg"
                      alt="health and safety"
                    />
                  </div>
                </div>
              </AnimateComponent>
            </div>
            <div className="w-1/2">
              <AnimateComponent
                // transition={{ type: "spring", bounce: 0, duration: 0.6 }}
                variants={{
                  start: { opacity: 0, x: 50 },
                  end: { opacity: 1, x: 0 },
                }}
              >
                <div className="w-full flex flex-col">
                  <p className="font-normal tracking-wider text-muted-foreground">
                    We are Elite
                  </p>
                  <TypographyH2>About Elite Cleaning</TypographyH2>
                  <TypographyP>
                    Elite Cleaning started trading as a sole trader over 24
                    years ago in 2000, by December 2006 having grown
                    substantially we registered as a Limited company. We
                    specialise exclusively in Builders Cleans and welfare
                    cleaning for Construction Companies.
                  </TypographyP>
                  <TypographyP>
                    We are a well established and recognised family run
                    business, our services cover London and the Home Counties
                    and we are proud to be working with the majority of the UK's
                    leading construction companies.
                  </TypographyP>
                </div>
              </AnimateComponent>
            </div>
          </div>
          <div className="w-full flex flex-col h-[450px] space-y-32 justify-center items-center ">
            <div className="w-full flex flex-col  justify-center items-center">
              <TypographyH2 className="">Elite Accreditations</TypographyH2>
              <p className="mt-0">
                We hold multiple accreditations to ensure top health and safety
                standards on all projects.
              </p>
            </div>
            <div className="w-5/6 flex items-center justify-between ">
              <ImageWidget
                url="/chas-logo.svg"
                name="chas"
                className="object-contain"
                height={175}
                width={225}
              />
              {/* <ImageWidget
                url="/constructionline-silver-test.svg"
                name="constructionline"
                className="object-contain"
                height={175}
                width={225}
              /> */}
              <ImageWidget
                url="/constructionline-gold-logo.svg"
                name="constructionline"
                className="object-contain"
                height={175}
                width={225}
              />

              <ImageWidget
                url="/achilles-logo.svg"
                name="chas"
                className="object-contain"
                height={175}
                width={225}
              />

              {/* <ClientWidget
                url="/constructionline-gold-logo.svg"
                name="chas"
                // height={60}
                // width={60}
              />
              <ClientWidget
                url="/chas-logo.svg"
                name="chas"
                // height={60}
                // width={60}
              /> */}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full relative p-8 flex space-x-4  bg-[url('/construction4.jpg')] bg-bottom bg-cover">
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-60" />

        <Box className="w-1/2 h-64 text-white p-8 space-y-4">
          <TypographyP>
            I have managed Elite with the welfare management and I would have no
            problem recommending them. They have also been the teams no 1
            builders clean contractor over the years for Sisk on past projects
            (December 2023)
          </TypographyP>
          <div className="flex flex-col space-y-1">
            <TypographyP className="font-semibold">
              Kavishnan Jeyarajah
            </TypographyP>
            <TypographyP className="text-sm">
              Site Manager, John Sisk - Welfare Cleaning (Wembley)
            </TypographyP>
          </div>
        </Box>
        <Box className="w-1/2 h-64 text-white p-8 space-y-4">
          <TypographyP>
            Elite are our 'go to' builder clean contractor. They have helped us
            deliver over 2000 apartments here in recent years as well as
            managing the site welfare cleaning. Highly recommended (December
            2023)
          </TypographyP>
          <div className="flex flex-col space-y-1">
            <TypographyP className="font-semibold">Daniel Makell</TypographyP>
            <TypographyP className="text-sm">
              Project Director, John Sisk - Welfare Cleaning (Wembley)
            </TypographyP>
          </div>
        </Box>
      </div>
      <div className="  pl-8 pr-8 pt-16 pb-20 flex flex-col space-y-8 z-10 w-full max-w-screen-xl">
        <div className="w-full flex flex-col space-y-52 justify-center border border-solid border-blue-500">
          <div className="w-full flex h-[450px] border border-solid border-red-500"></div>

          <div className="w-full flex space-x-16 ">
            <div className="w-1/2">
              <AnimateComponent
                // transition={{ type: "spring", bounce: 0, duration: 0.6 }}
                variants={{
                  start: { opacity: 0, x: -50 },
                  end: { opacity: 1, x: 0 },
                }}
              >
                <div className="w-full flex flex-col">
                  <p className="font-normal tracking-wider text-muted-foreground">
                    The Elite team
                  </p>
                  <TypographyH2>
                    Our team is the heart of our business
                  </TypographyH2>
                  <TypographyP>
                    Our commitment to quality, high standards, and reliability
                    remains our priority at all times. We have built a strong
                    foundation and company reputation by delivering excellence
                    from start to finish on every project. Understanding that we
                    are only as good as our last job, we treat every job, no
                    matter the size, with equal importance.
                  </TypographyP>
                  <TypographyP>
                    Our success, demonstrated by a 90% repeat business rate, is
                    a direct result of the dedication and hard work of our
                    exceptional team. Their unwavering commitment is the
                    cornerstone of our continued excellence.
                  </TypographyP>
                </div>
              </AnimateComponent>
            </div>
            <div className="w-1/2">
              <AnimateComponent
                // transition={{ type: "spring", bounce: 0, duration: 0.6 }}
                variants={{
                  start: { opacity: 0, x: 50 },
                  end: { opacity: 1, x: 0 },
                }}
              >
                <div className="w-full">
                  <div className="w-full h-96 relative overflow-hidden rounded-sm">
                    <Image
                      // height={620}
                      // width={465}
                      fill
                      objectFit="cover"
                      src="/construction6.jpg"
                      alt="health and safety"
                    />
                  </div>
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
