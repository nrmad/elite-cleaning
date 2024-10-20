// import Image from 'next/image'

import AnimateComponent from "@/components/AnimateComponent";
import { AnimateNumber } from "@/components/AnimateNumber";
import Box from "@/components/Box";
import { ImageWidget } from "@/components/ImageWidget";
import { Footer } from "@/components/Footer";
import { NavigationBar } from "@/components/NavigationBar";
import { TypographyH1 } from "@/components/ui/typographyH1";
import { TypographyH2 } from "@/components/ui/typographyH2";
import { TypographyH3 } from "@/components/ui/typographyH3";
import { TypographyH4 } from "@/components/ui/typographyH4";
import { TypographyP } from "@/components/ui/typographyP";
import { cn } from "@/lib/utils";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import { Building2, CalendarCheck, Droplet, Droplets, HardHat, IterationCcw, IterationCw, PackageCheck, PaintBucket, Sparkles, UsersRound } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import ReviewWidget from "@/components/ReviewWidget";
import { Step, StepItem, Stepper, useStepper } from "@/components/stepper";
import { Button } from "@/components/ui/button";
import FixedStepper from "@/components/FixedStepper";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import AutoCarousel from "@/components/AutoCarousel";
import { Separator } from "@/components/ui/separator";
import WorkWidget from "./sectors/WorkWidget";
import { fetchReviews } from "@/lib/fetchReviews";
import { useQuery } from "@tanstack/react-query";
import { Review } from "@/types/review";

const montserrat = Montserrat({ weight: "400", subsets: ["latin"] });

// export const revalidate = 0; // 0 means the page will be revalidated on every request




export default async function Home() {


  // animate reviews and services
  // !!! TODO: improve logo sizing to be identical
  // !!! TODO: add products and historic jobs
  // !!! TODO: GRADIENT OPACITY DELAY

  // !!! TODO: OPTIMISE IMAGES AND SEO / FINISH API

  // !!!TODO: SHORTCUT TO JOBS AT THE BOTTOM MAYBE

  // !!!TODO: A GET QUOTE FORM WOULD BE NICE


  const reviews = await fetchReviews()

  return (
    // <main className="flex w-screen   min-h-screen flex-col items-center overflow-clip">
    //   <NavigationBar />
    <>
      <div className="w-full relative z-[-1] h-[300px] md:h-[400px] lg:h-[500px] 2xl:h-[600px] bg-[url('/banner1.jpg')] bg-center bg-cover ">

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
                  // transition={{ type: "spring", bounce: 0, duration: 0.6 }} font-extralight
                  variants={{
                    start: { opacity: 0, x: -25 },
                    end: { opacity: 1, x: 0 },
                  }}
                >
                  <TypographyH2 className="text-5xl">
                    <span
                      className={cn(
                        montserrat.className,
                        " font-normal"
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
      <div className="pt-52 pl-4 pr-4 sm:pl-8 sm:pr-8 pb-32 flex flex-col space-y-8 z-10 w-full max-w-screen-xl">
        <div className="w-full flex flex-col space-y-16 sm:space-y-32 justify-center">
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
              <div className="w-full flex flex-col  sm:flex-row justify-between space-y-4 sm:space-y-0 sm:space-x-8 ">
                <AnimateComponent
                  className="w-full sm:w-1/3 "
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
                  className="w-full sm:w-1/3 "
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
                  className="w-full sm:w-1/3 "
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

          <div className="w-full flex  flex-col sm:flex-row  space-y-4 sm:space-y-0 sm:space-x-16 ">
            <div className="w-full sm:w-1/2">
              <AnimateComponent
                // transition={{ type: "spring", bounce: 0, duration: 0.6 }}
                variants={{
                  start: { opacity: 0, x: -50 },
                  end: { opacity: 1, x: 0 },
                }}
              >
                <div className="w-full">
                  <div className="w-full h-[280px] sm:h-[720px] relative overflow-hidden rounded-sm">
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
            <div className="w-full sm:w-1/2">
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
                    to be working with the majority of the UK&apos;s leading construction companies. Our commitment to quality and reliability has earned
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


          {/* <div className="flex w-full flex-col">
            <FixedStepper />
          </div> */}

          {/**
           * LOGO BAR
           */}


          {/**
           * ADVANTAGES PAREXEL UI EXAMPLE / willmot dixson
           */}


        </div>
      </div>

      <div className="w-full h-fit relative">
        <div className="left-0 top-0 bottom-0 w-52 absolute bg-gradient-to-r from-white/100 via-white/10 to-transparent z-50" />
        <div className="right-0 top-0 bottom-0 w-52 absolute bg-gradient-to-l from-white/100 via-white/10 to-transparent z-50" />

        <AutoCarousel className="lg:basis-60" items={[
          <a key="mclaren" href="https://mclarengroup.com/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
            <ImageWidget
              name="mclaren"
              url="/mclaren-logo-testy.svg"
              className=""
            />
          </a>,
          <a key="bowmer-kirkland" href="https://www.bandk.co.uk/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
            <ImageWidget
              name="bowmer-kirkland"
              url="/bowmer-kirkland-logo-cropped.svg"
              className=""
            />
          </a>,
          <a key="balfour-beatty" href="https://www.balfourbeatty.com/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
            <ImageWidget
              name="balfour-beatty"
              url="/balfour-beatty-logo.svg"
              className=""
            />
          </a>,
          <a key="skanska" href="https://www.skanska.co.uk/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
            <ImageWidget
              name="skanska"
              url="/skanska-logo.svg"
              className="object-contain"
            />
          </a>,
          <a key="kier" href="https://www.kier.co.uk/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
            <ImageWidget
              name="kier"
              url="/kier-logo.svg"
              className="object-contain 0"
            />
          </a>,
          <a key="sisk" href="https://www.johnsiskandson.com/uk" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
            <ImageWidget
              name="sisk"
              url="/sisk-logo.svg"
              className="object-contain"
            />
          </a>,
          <a key="bam" href="https://www.bam.co.uk/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
            <ImageWidget
              name="bam"
              url="/bam-logo.svg"
              className="object-contain"
            />
          </a>,
          <a key="costain" href="https://www.costain.com/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
            <ImageWidget
              name="costain"
              url="/costain-logo.svg"
              className="object-contain"
            />
          </a>,
          <a key="redrow" href="https://www.redrow.co.uk/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
            <ImageWidget
              name="redrow"
              url="/redrow-logo.svg"
              className="object-contain"
            />
          </a>,
          <a key="galliford" href="https://www.gallifordtry.co.uk/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
            <ImageWidget
              name="galliford"
              url="/galliford-logo.svg"
              className="object-contain"
            />
          </a>,
          <a key="rydon" href="https://www.rydon.co.uk/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
            <ImageWidget
              name="rydon"
              url="/rydon-logo.svg"
              className="object-contain"
            />
          </a>,
          <a key="lendlease" href="https://www.lendlease.com/uk/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
            <ImageWidget
              name="lendlease"
              url="/lendlease-logo.svg"
              className="object-contain"
            />
          </a>,
          <a key="lindenhomes" href="https://www.lindenhomes.co.uk/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
            <ImageWidget
              name="lindenhomes"
              url="/lindenhomes-logo.svg"
              className="object-contain"
            />
          </a>,
          <a key="laing-o-rourke" href="https://www.laingorourke.com/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
            <ImageWidget
              name="laing-o-rourke"
              url="/laing-o-rourke-logo.svg"
              className="object-contain"
            />
          </a>,
          <a key="vinci" href="https://uk.vinci-construction.com/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
            <ImageWidget
              name="vinci"
              url="/vinci-logo.svg"
              className="object-contain"
            />
          </a>,
          <a key="willmott-dixon" href="https://www.willmottdixon.co.uk/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
            <ImageWidget
              name="willmott-dixon"
              url="/willmott-dixon.png"
              className="object-contain"
            />
          </a>,

        ]} />
      </div>

      <div className="pt-32 pl-4 pr-4 sm:pl-8 sm:pr-8 pb-32 flex flex-col space-y-8 z-10 w-full max-w-screen-xl">
        <div className="w-full flex flex-col space-y-16 sm:space-y-32 justify-center">

          <AnimateComponent
            className="w-full justify-center"
            transition={{ type: "spring", bounce: 0, duration: 0.6 }}
            variants={{
              start: { opacity: 0, y: 25 },
              end: { opacity: 1, y: 0 },
            }}
          >
            <div className="w-full flex flex-col space-y-8">
              <div className="flex space-x-4 items-center w-full">
                <div className="flex flex-1 items-center"><Separator /></div> <div>How it works</div>  <div className="flex flex-1"><Separator /></div>
              </div>
              <div className="w-full flex space-x-8">
                <div className="w-1/3 flex items-start">
                  <TypographyH3 >Get a custom quote</TypographyH3>
                </div>
                <div className="w-2/3">
                  <TypographyP>

                    Tell us about the job, and we&apos;ll provide a comprehensive, customized quote tailored to the scope of work and the specific tasks required for your project.
                    Once we have gathered all the necessary details, our team will carefully assess your needs and deliver a personalized price that reflects both the scale and
                    complexity of the work involved, ensuring you receive an accurate and fair estimate.
                  </TypographyP>
                </div>
              </div>
              <div className="flex items-center w-full">
                <Separator />
              </div>
              <div className="w-full flex space-x-8">
                <div className="w-1/3 flex items-start">
                  <TypographyH3 >Commencement of works</TypographyH3>
                </div>
                <div className="w-2/3">
                  <TypographyP>
                    We will collaborate closely with you, aligning our services to the site program to ensure everything runs smoothly. By working together according to the building
                    schedule, we&apos;ll provide a quality clean across all areas, ensuring each stage of the project meets the highest standards of cleanliness and readiness for the
                    next phase.
                  </TypographyP>
                </div>
              </div>
              <div className="flex items-center w-full">
                <Separator />
              </div>
              <div className="w-full flex space-x-8">
                <div className="w-1/3 flex items-start">
                  <TypographyH3 >Approval of quality</TypographyH3>
                </div>
                <div className="w-2/3">
                  <TypographyP>
                    The final step involves a detailed inspection of all areas covered in the itemized scope of works. Each section is carefully reviewed to ensure it meets the
                    agreed-upon standards of quality. This thorough inspection process allows for the sign-off of completed tasks, ensuring that every aspect of the job has been
                    completed to the highest level.
                  </TypographyP>
                </div>
              </div>
              <div className="flex items-center w-full">
                <Separator />
              </div>
            </div>
          </AnimateComponent>


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
                <TypographyH2 className="text-center">Elite Health and Safety</TypographyH2>
              </AnimateComponent>
              <AnimateComponent
                className="w-full justify-center"
                transition={{ type: "spring", bounce: 0, duration: 0.6, delay: 0.2 }}
                variants={{
                  start: { opacity: 0, y: 25 },
                  end: { opacity: 1, y: 0 },
                }}
              >
                <p className="mt-0 text-center w-full sm:w-2/5">
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
              <div className="w-full sm:w-5/6 flex flex-col sm:flex-row items-center justify-between ">
                <div className="w-1/3 flex justify-center">
                  <ImageWidget
                    url="/chas-logo-cropped.svg"
                    name="chas"
                    className="object-contain "
                    height={60}
                    width={225}
                  />
                </div>
                <div className="w-1/3  flex justify-center">

                  <ImageWidget
                    url="/constructionline-logo.svg"
                    name="constructionline"
                    className="object-contain"
                    height={60}
                    width={225}
                  />
                </div>

                <div className="w-1/3 flex justify-center">
                  <ImageWidget
                    url="/achilles-logo.svg"
                    name="chas"
                    className="object-contain "
                    height={60}
                    width={200}
                  />
                </div>

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
      </div >
      <div className="w-full space-y-32">
        <AnimateComponent
          transition={{ type: "spring", bounce: 0, duration: 0.6 }}
          variants={{
            start: { opacity: 0 },
            end: { opacity: 1 },
          }}
        >
          <div className="w-full relative  sm:py-8 flex   bg-[url('/construction4.jpg')] bg-bottom bg-cover ">
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-60" />

            <AutoCarousel className="lg:basis-1/3" items={
              reviews.map(({ author, role, content, company, variant }: Review, i: number) =>
                <ReviewWidget
                  clamp
                  key={i}
                  className="w-full md:h-64 text-primary-foreground justify-between"
                  name={author}
                  role={role}
                  company={company}
                  variant={variant}>
                  {content}
                </ReviewWidget>
              )
              // <ReviewWidget
              //   key="1"
              //   className="w-full md:h-64 text-primary-foreground justify-between"
              //   name={"Kavishnan Jeyarajah"}
              //   role={"Site Manager"}
              //   company={"John Sisk"}
              //   variant={"Welfare Cleaning (Wembley)"}>
              //   I have managed Elite with the welfare management and I would have no
              //   problem recommending them. They have also been the teams no 1
              //   builders clean contractor over the years for Sisk on past projects
              //   (December 2023)
              // </ReviewWidget>,
              // <ReviewWidget
              //   key="2"
              //   className="w-full hidden sm:flex   md:h-64 text-primary-foreground justify-between  "
              //   name={"Daniel Makell"}
              //   role={"Project Director"}
              //   company={"John Sisk"}
              //   variant={"Welfare Cleaning (Wembley)"}>
              //   Elite are our &apos;go to&apos; builder clean contractor. They have helped us
              //   deliver over 2000 apartments here in recent years as well as
              //   managing the site welfare cleaning. Highly recommended (December
              //   2023)
              // </ReviewWidget>,
              // <ReviewWidget
              //   key="3"
              //   className="w-full  hidden sm:flex  md:h-64 text-primary-foreground justify-between  "
              //   name={"Daniel Makell"}
              //   role={"Project Director"}
              //   company={"John Sisk"}
              //   variant={"Welfare Cleaning (Wembley)"}>
              //   Elite are our &apos;go to&apos; builder clean contractor. They have helped us
              //   deliver over 2000 apartments here in recent years as well as
              //   managing the site welfare cleaning. Highly recommended (December
              //   2023)
              // </ReviewWidget>,
              // <ReviewWidget
              //   key="4"
              //   className="w-full md:h-64 text-primary-foreground justify-between  "
              //   name={"Kavishnan Jeyarajah"}
              //   role={"Site Manager"}
              //   company={"John Sisk"}
              //   variant={"Welfare Cleaning (Wembley)"}>
              //   I have managed Elite with the welfare management and I would have no
              //   problem recommending them. They have also been the teams no 1
              //   builders clean contractor over the years for Sisk on past projects
              //   (December 2023)
              // </ReviewWidget>,
              // <ReviewWidget
              //   key="5"
              //   className="w-full hidden sm:flex   md:h-64 text-primary-foreground justify-between  "
              //   name={"Daniel Makell"}
              //   role={"Project Director"}
              //   company={"John Sisk"}
              //   variant={"Welfare Cleaning (Wembley)"}>
              //   Elite are our &apos;go to&apos; builder clean contractor. They have helped us
              //   deliver over 2000 apartments here in recent years as well as
              //   managing the site welfare cleaning. Highly recommended (December
              //   2023)
              // </ReviewWidget>,
              // <ReviewWidget
              //   key="6"
              //   className="w-full  hidden sm:flex  md:h-64 text-primary-foreground justify-between  "
              //   name={"Daniel Makell"}
              //   role={"Project Director"}
              //   company={"John Sisk"}
              //   variant={"Welfare Cleaning (Wembley)"}>
              //   Elite are our &apos;go to&apos; builder clean contractor. They have helped us
              //   deliver over 2000 apartments here in recent years as well as
              //   managing the site welfare cleaning. Highly recommended (December
              //   2023)
              // </ReviewWidget>
            } />




          </div>
        </AnimateComponent>
        <div className="w-full flex flex-col  space-y-16 justify-center items-center overflow-visible ">
          <div className="w-full flex flex-col  justify-center items-center overflow-visible">
            <div className="w-full sm:w-2/5 pl-4 pr-4 sm:pl-8 sm:pr-8">
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
            <div className="relative w-full flex items-center justify-center overflow-visible pt-8 pb-8 pl-4 pr-4 sm:pl-0 sm:pr-0  ">
              <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-background via-mutedTheme25 via-90% to-background to-90% " />
              <div className="sm:h-[600px] w-full max-w-screen-xl grid gap-4 grid-cols-1 sm:grid-cols-3 sm:grid-rows-2  ">
                <Box className="w-full flex flex-col p-8 items-center justify-center space-y-8  ">
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
                        Base builders cleans handle glazing, balconies, and removes construction residue, ensuring a spotless, ready-to-use space.</p>
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
                      A &apos;Re-Clean&apos; follows the initial clean, removing deposits from remedial work and optionally buffing internal glazing.
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
                      A &apos;Sparkle Clean&apos; removes dust and cleans floors after a re-clean, with optional internal glazing buffing.
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
                      <TypographyH3 className="">Welfare</TypographyH3>
                    </span>
                    <p className=" ">
                      Welfare cleans ensure high-quality service, keeping site cabins spotless and hygienic, providing essential amenities for workers.
                    </p>
                  </div>
                </Box>



                <Box className="w-full flex flex-col p-8 items-center justify-center  space-y-8 ">
                  <div className="flex flex-col  justify-center space-y-2">

                    <div className="w-fit flex mb-8 border border-solid border-theme/20 p-4 rounded-full">
                      <Building2 className="w-5 h-5  stroke-theme/70" />

                      {/* <div className="relative w-36 h-36  bg-white/60 rounded-full overflow-hidden ">
                        <Image src="/undraw-done.svg" alt="qa" fill />
                      </div> */}
                    </div>
                    <span className="flex items-center space-x-2">
                      <TypographyH3 className="">Abseiling</TypographyH3>
                    </span>
                    <p className=" ">
                      Abseiling cleans use expert methods to ensure top-quality service, keeping building exteriors spotless with precision.
                    </p>
                  </div>
                </Box>

                <Box className="w-full flex flex-col p-8 items-center justify-center  space-y-8 ">
                  <div className="flex flex-col  justify-center space-y-2">

                    <div className="w-fit flex mb-8 border border-solid border-theme/20 p-4 rounded-full">
                      <Droplets className="w-5 h-5  stroke-theme/70" />

                      {/* <div className="relative w-36 h-36  bg-white/60 rounded-full overflow-hidden ">
                        <Image src="/undraw-done.svg" alt="qa" fill />
                      </div> */}
                    </div>
                    <span className="flex items-center space-x-2">
                      <TypographyH3 className="">Reach</TypographyH3>
                    </span>
                    <p className=" ">
                      Reach cleans use reach and wash systems to deliver outstanding external window cleaning services.
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

          <div className="w-full flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-16 ">
            <div className="w-full sm:w-1/2">
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
                    Our success, with a 90% repeat business rate, is due to our exceptional team&apos;s dedication. Their unwavering commitment is the
                    cornerstone of our continued excellence. By fostering a collaborative work environment and investing in training, we consistently
                    deliver projects that exceed client expectations and solidify our industry leadership.
                  </TypographyP>

                </div>
              </AnimateComponent>
            </div>
            <div className="w-full sm:w-1/2">
              <AnimateComponent
                // transition={{ type: "spring", bounce: 0, duration: 0.6 }}
                variants={{
                  start: { opacity: 0, x: 50 },
                  end: { opacity: 1, x: 0 },
                }}
              >
                <div className="w-full">
                  <div className="h-[280px]  sm:h-[720px] w-full relative overflow-hidden rounded-sm">
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



          <div className="flex flex-col w-full space-y-8">
            <TypographyH4>
              Latest projects
            </TypographyH4>
            <div className="w-full grid grid-cols-1 sm:grid-cols-3 grid-rows-1 gap-8 ">
              <WorkWidget url="/commercial-sector.jpg" alt="commercial-sector" title="Glass Futures, St Helens" />
              <WorkWidget url="/education-sector.jpg" alt="education-sector" title="Bank House, Newcastle upon Tyne" />
              <WorkWidget url="/leisure-sector.jpg" alt="leisure-sector" title="Six, Centre Square, Middlesbrough" />

            </div>
            <div className="w-full flex items-center justify-center">
              <Button variant="default">View all</Button>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer />
    </main > */}
    </>

  );
}
