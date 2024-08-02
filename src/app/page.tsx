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
import { CalendarCheck, HardHat, IterationCcw, IterationCw, PackageCheck, PaintBucket, Sparkles, UsersRound } from "lucide-react";
import { Card } from "@/components/ui/card";
import ReviewWidget from "@/components/ReviewWidget";

const montserrat = Montserrat({ weight: "400", subsets: ["latin"] });

export default function Home() {

  // animate reviews and services
  // !!! TODO: improve logo sizing to be identical
  // !!! TODO: add products and historic jobs
  // !!! TODO: GRADIENT OPACITY DELAY

  return (
    <main className="flex min-h-screen flex-col items-center">
      <TopBar />
      <div className="w-full relative z-[-1] md:h-[400px] lg:h-[500px] 2xl:h-[600px] bg-[url('/banner1.jpg')] bg-center bg-cover ">

        <Box className="absolute left-0 right-0 bottom-0 h-[800px] clip-complex-polygon" />

        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-60" />
        <div className=" flex items-center justify-center h-full w-full relative ">
          <div className="w-full max-w-screen-xl ">
            <div className="relative ml-8 flex flex-col h-[124px] text-primary-foreground ">
              <div className="absolute  lg:h-[330px] 2xl:h-[375px] p-8 w-fit">
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
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" pt-52 pl-8 pr-8 pb-32 flex flex-col space-y-8 z-10 w-full max-w-screen-xl">
        <div className="w-full flex flex-col space-y-32 justify-center">
          <div className="w-full flex flex-col space-y-16 ">
            <div className="w-full flex flex-col space-y-4 ">
              <div className="w-full flex justify-center">
                <AnimateComponent
                  // transition={{ type: "spring", bounce: 0, duration: 0.6 }}
                  variants={{
                    start: { opacity: 0, y: 25 },
                    end: { opacity: 1, y: 0 },
                  }}
                >
                  <TypographyH4 className="text-center tracking-widest w-fit font-normal">
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
            <div className="w-full flex justify-center pb-16">
              <div className="w-full flex justify-between space-x-8 ">
                <AnimateComponent
                  className="w-1/3 "
                  variants={{
                    start: { opacity: 0 },
                    end: { opacity: 1 },
                  }}
                >
                  <Card className="flex flex-col space-y-2 text-center justify-center items-center  w-full h-fit p-10 ">
                    <div className="rounded-full bg-theme/20 p-5 mb-8">
                      <PackageCheck className="w-6 h-6 stroke-theme/70" />
                    </div>
                    <TypographyH2 className="text-5xl font-semibold">
                      <AnimateNumber value={350} suffix="+" />
                    </TypographyH2>


                    <p className="font-medium text-muted-foreground">Completed jobs</p>
                  </Card>
                </AnimateComponent>

                <AnimateComponent
                  className="w-1/3 "
                  variants={{
                    start: { opacity: 0 },
                    end: { opacity: 1 },
                  }}
                >
                  <Card className="flex flex-col space-y-2 text-center justify-center  items-center w-full h-fit p-10 ">
                    <div className="rounded-full bg-theme/20  p-5 mb-8">
                      <UsersRound className="w-6 h-6 stroke-theme/70" />
                    </div>
                    <TypographyH2 className="text-5xl font-semibold">
                      <AnimateNumber value={350} suffix="+" />
                    </TypographyH2>

                    <p className="font-medium text-muted-foreground" >Satisfied clients</p>
                  </Card>
                </AnimateComponent>

                <AnimateComponent
                  className="w-1/3 "
                  variants={{
                    start: { opacity: 0 },
                    end: { opacity: 1 },
                  }}
                >
                  <Card className="flex flex-col space-y-2 text-center justify-center  items-center w-full h-fit p-10 ">
                    <div className="rounded-full bg-theme/20  p-5 mb-8">
                      <CalendarCheck className="w-6 h-6 stroke-theme/70" />
                    </div>
                    <TypographyH2 className="text-5xl font-semibold">
                      <AnimateNumber value={20} suffix="+" />
                    </TypographyH2>
                    <p className="font-medium text-muted-foreground">Years experience</p>
                  </Card>
                </AnimateComponent>

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
                  <div className="w-full h-[720px] relative overflow-hidden rounded-sm">
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
                    Elite Cleaning started trading as a sole trader over 24 years ago in 2000. By December 2006, having grown substantially,
                    we registered as a Limited company. We specialize exclusively in Builders Cleans and welfare cleaning for Construction Companies.
                  </TypographyP>
                  <TypographyP>
                    We are a well-established and recognized family-run business. Our services cover London and the Home Counties, and we are proud
                    to be working with the majority of the UK's leading construction companies. Our commitment to quality and reliability has earned
                    us a solid reputation in the industry.
                  </TypographyP>
                  <TypographyP>
                    Our team is comprised of experienced professionals dedicated to delivering exceptional service on every project. We invest in
                    ongoing training and development to ensure our staff stays current with the latest industry standards and practices. This
                    dedication to excellence is the cornerstone of our long-standing relationships with clients.
                  </TypographyP>
                </div>
              </AnimateComponent>
            </div>
          </div>


          <div className="w-full flex flex-col  space-y-16 justify-center items-center  ">
            <div className="w-full flex flex-col  justify-center items-center">
              <AnimateComponent
                className="w-full justify-center"
                transition={{ type: "spring", bounce: 0, duration: 0.6 }}
                variants={{
                  start: { opacity: 0, y: 25 },
                  end: { opacity: 1, y: 0 },
                }}
              >
                <TypographyH2 className="">Elite Health and Safety</TypographyH2>
              </AnimateComponent>
              <AnimateComponent
                className="w-full justify-center"
                transition={{ type: "spring", bounce: 0, duration: 0.6, delay: 0.2 }}
                variants={{
                  start: { opacity: 0, y: 25 },
                  end: { opacity: 1, y: 0 },
                }}
              >
                <p className="mt-0 text-center w-2/5">
                  We hold multiple accreditations to ensure top health and safety
                  standards on all projects.
                </p>
              </AnimateComponent>
            </div>
            <AnimateComponent
              className="w-full flex justify-center"
              transition={{ type: "spring", bounce: 0, duration: 0.6 }}
              variants={{
                start: { opacity: 0, },
                end: { opacity: 1 },
              }}
            >
              <div className="w-5/6 flex items-center justify-between ">
                <ImageWidget
                  url="/chas-logo.svg"
                  name="chas"
                  className="object-contain"
                  height={100}
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
                  height={100}
                  width={225}
                />

                <ImageWidget
                  url="/achilles-logo.svg"
                  name="chas"
                  className="object-contain"
                  height={100}
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
            </AnimateComponent>
          </div>

        </div>
      </div>
      <div className="w-full space-y-32">
        <AnimateComponent
          transition={{ type: "spring", bounce: 0, duration: 0.6 }}
          variants={{
            start: { opacity: 0 },
            end: { opacity: 1 },
          }}
        >
          <div className="w-full relative p-8 flex space-x-4  bg-[url('/construction4.jpg')] bg-bottom bg-cover ">
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-60" />

            <ReviewWidget
              className="w-1/3 h-64 text-primary-foreground justify-between  "
              name={"Kavishnan Jeyarajah"}
              role={"Site Manager"}
              company={"John Sisk"}
              variant={"Welfare Cleaning (Wembley)"}>
              I have managed Elite with the welfare management and I would have no
              problem recommending them. They have also been the teams no 1
              builders clean contractor over the years for Sisk on past projects
              (December 2023)
            </ReviewWidget>

            <ReviewWidget
              className="w-1/3 h-64 text-primary-foreground justify-between  "
              name={"Daniel Makell"}
              role={"Project Director"}
              company={"John Sisk"}
              variant={"Welfare Cleaning (Wembley)"}>
              Elite are our 'go to' builder clean contractor. They have helped us
              deliver over 2000 apartments here in recent years as well as
              managing the site welfare cleaning. Highly recommended (December
              2023)
            </ReviewWidget>

            <ReviewWidget
              className="w-1/3 h-64 text-primary-foreground justify-between  "
              name={"Daniel Makell"}
              role={"Project Director"}
              company={"John Sisk"}
              variant={"Welfare Cleaning (Wembley)"}>
              Elite are our 'go to' builder clean contractor. They have helped us
              deliver over 2000 apartments here in recent years as well as
              managing the site welfare cleaning. Highly recommended (December
              2023)
            </ReviewWidget>

          </div>
        </AnimateComponent>
        <div className="w-full flex flex-col  space-y-16 justify-center items-center overflow-visible ">
          <div className="w-full flex flex-col  justify-center items-center overflow-visible">
            <div className=" w-2/5 ">
              <AnimateComponent
                className="w-full justify-start"
                transition={{ type: "spring", bounce: 0, duration: 0.6 }}
                variants={{
                  start: { opacity: 0, y: 25 },
                  end: { opacity: 1, y: 0 },
                }}
              >
                <TypographyH2 className="">Our services</TypographyH2>
              </AnimateComponent>
              <AnimateComponent
                className="w-full justify-center"
                transition={{ type: "spring", bounce: 0, duration: 0.6, delay: 0.2 }}
                variants={{
                  start: { opacity: 0, y: 25 },
                  end: { opacity: 1, y: 0 },
                }}
              >
                <p className="mt-0 ">
                  We can provide multiple services which fit the requirements of different projects. We can be tailor them to client needs.
                </p>
              </AnimateComponent>
            </div>
          </div>
          <AnimateComponent
            className="w-full overflow-visible"
            transition={{ type: "spring", bounce: 0, duration: 0.6 }}
            variants={{
              start: { opacity: 0, },
              end: { opacity: 1 },
            }}
          >
            <div className="relative w-full flex items-center justify-center overflow-visible pt-8 pb-8  ">
              <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-background  via-theme/25  via-90% to-background  to-90% " />
              <div className="h-[600px] w-full max-w-screen-xl  grid  gap-4 grid-cols-3 grid-rows-2 ">
                <Box className="w-full flex flex-col p-8 items-center justify-center  space-y-8 ">
                  <div className="flex flex-col  justify-center space-y-2">

                    <div className="w-fit flex mb-8 border border-solid border-theme/20 p-4 rounded-full">
                      <PaintBucket className="w-5 h-5  stroke-theme/70" />

                      {/* <div className="relative w-36 h-36  bg-white/60 rounded-full overflow-hidden ">
                        <Image src="/undraw-done.svg" alt="qa" fill />
                      </div> */}
                    </div>

                    <div className="w-full space-y-2">
                      <span className="flex items-center space-x-2">
                        <TypographyH3 className="">Base</TypographyH3>
                      </span>
                      <p className=" ">
                        Base builders cleans handle glazing, balconies, and removes construction residue, ensuring a spotless, ready-to-use space.                      </p>
                    </div>
                  </div>
                </Box>

                <Box className="w-full flex flex-col p-8 items-center justify-center  space-y-8 ">
                  <div className="flex flex-col  justify-center space-y-2">

                    <div className="w-fit flex mb-8 border border-solid border-theme/20 p-4 rounded-full">
                      <IterationCw className="w-5 h-5  stroke-theme/70" />

                      {/* <div className="relative w-36 h-36  bg-white/60 rounded-full overflow-hidden ">
                        <Image src="/undraw-done.svg" alt="qa" fill />
                      </div> */}
                    </div>
                    <span className="flex items-center space-x-2">
                      <TypographyH3 className="">Reclean</TypographyH3>
                    </span>
                    <p className=" ">
                      A 'Re-Clean' follows the initial clean, removing deposits from remedial work and optionally buffing internal glazing.
                    </p>
                  </div>
                </Box>

                <Box className="w-full flex flex-col p-8 items-center justify-center  space-y-8 ">
                  <div className="flex flex-col  justify-center space-y-2">

                    <div className="w-fit flex mb-8 border border-solid border-theme/20 p-4 rounded-full">
                      <Sparkles className="w-5 h-5  stroke-theme/70" />

                      {/* <div className="relative w-36 h-36  bg-white/60 rounded-full overflow-hidden ">
                        <Image src="/undraw-done.svg" alt="qa" fill />
                      </div> */}
                    </div>
                    <span className="flex items-center space-x-2">
                      <TypographyH3 className="">Sparkle</TypographyH3>
                    </span>
                    <p className=" ">
                      A 'Sparkle Clean' removes dust and cleans floors after a re-clean, with optional internal glazing buffing.
                    </p>
                  </div>
                </Box>

                <Box className="w-full flex flex-col p-8 items-center justify-center  space-y-8 ">
                  <div className="flex flex-col  justify-center space-y-2">

                    <div className="w-fit flex mb-8 border border-solid border-theme/20 p-4 rounded-full">
                      <HardHat className="w-5 h-5  stroke-theme/70" />

                      {/* <div className="relative w-36 h-36  bg-white/60 rounded-full overflow-hidden ">
                        <Image src="/undraw-done.svg" alt="qa" fill />
                      </div> */}
                    </div>
                    <span className="flex items-center space-x-2">
                      <TypographyH3 className="">Gleam</TypographyH3>
                    </span>
                    <p className=" ">
                      Our gleam service ensures businesses shine with a detailed, eco-friendly clean, leaving every corner sparkling and pristine.

                    </p>
                  </div>
                </Box>



                <Box className="w-full flex flex-col p-8 items-center justify-center  space-y-8 ">
                  <div className="flex flex-col  justify-center space-y-2">

                    <div className="w-fit flex mb-8 border border-solid border-theme/20 p-4 rounded-full">
                      <HardHat className="w-5 h-5  stroke-theme/70" />

                      {/* <div className="relative w-36 h-36  bg-white/60 rounded-full overflow-hidden ">
                        <Image src="/undraw-done.svg" alt="qa" fill />
                      </div> */}
                    </div>
                    <span className="flex items-center space-x-2">
                      <TypographyH3 className="">Gleam</TypographyH3>
                    </span>
                    <p className=" ">
                      Our gleam service ensures businesses shine with a detailed, eco-friendly clean, leaving every corner sparkling and pristine.

                    </p>
                  </div>
                </Box>

                <Box className="w-full flex flex-col p-8 items-center justify-center  space-y-8 ">
                  <div className="flex flex-col  justify-center space-y-2">

                    <div className="w-fit flex mb-8 border border-solid border-theme/20 p-4 rounded-full">
                      <HardHat className="w-5 h-5  stroke-theme/70" />

                      {/* <div className="relative w-36 h-36  bg-white/60 rounded-full overflow-hidden ">
                        <Image src="/undraw-done.svg" alt="qa" fill />
                      </div> */}
                    </div>
                    <span className="flex items-center space-x-2">
                      <TypographyH3 className="">Gleam</TypographyH3>
                    </span>
                    <p className=" ">
                      Our gleam service ensures businesses shine with a detailed, eco-friendly clean, leaving every corner sparkling and pristine.

                    </p>
                  </div>
                </Box>
              </div>

            </div>


          </AnimateComponent>
        </div>
      </div>
      <div className="  pl-8 pr-8 pt-32 pb-32 flex flex-col space-y-8 z-10 w-full max-w-screen-xl overflow-visible">
        <div className="w-full flex flex-col space-y-32 justify-center overflow-visible">

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
                    Our commitment to quality, high standards, and reliability remains our priority at all times. We have built a strong foundation and
                    reputation by delivering excellence on every project. Understanding that we are only as good as our last job, we treat every job,
                    no matter the size, with equal importance.
                  </TypographyP>
                  <TypographyP>
                    To maintain this excellence, we implement rigorous quality control measures throughout our projects. Our team meticulously plans
                    and executes each step, ensuring every detail meets our high standards. This attention to detail guarantees superior results and
                    builds trust with our clients.
                  </TypographyP>
                  <TypographyP>
                    Our success, with a 90% repeat business rate, is due to our exceptional team's dedication. Their unwavering commitment is the
                    cornerstone of our continued excellence. By fostering a collaborative work environment and investing in training, we consistently
                    deliver projects that exceed client expectations and solidify our industry leadership.
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
                  <div className=" h-[720px] w-full relative overflow-hidden rounded-sm">
                    <Image
                      // height={620}
                      // width={465}
                      fill
                      objectFit="cover"
                      src="/madison-tower.jpg"
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
    </main >
  );
}
