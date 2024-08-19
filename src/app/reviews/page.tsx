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
import Box from "@/components/Box";
import { TypographyP } from "@/components/ui/typographyP";
import ReviewWidget from "@/components/ReviewWidget";


export default function Reviews() {
    // just noticed the NavigationBar should shrink on sticky motion

    return (
        <main className="flex min-h-screen flex-col items-center overflow-clip">
            <NavigationBar />

            <div className=" pt-20 pl-8 pr-8  flex flex-col space-y-8 z-10 w-full max-w-screen-xl flex-1">
                <div className="w-full flex flex-col space-y-8 justify-center ">
                    <div className="w-full flex flex-col items-center space-y-4 mb-16  ">
                        <AnimateComponent
                            // transition={{ type: "spring", bounce: 0, duration: 0.6 }}
                            variants={{
                                start: { opacity: 0, y: 25 },
                                end: { opacity: 1, y: 0 },
                            }}
                        >
                            <TypographyH2 className="text-center text-5xl w-[650px]">
                                Our reviews
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
                            <TypographyH3 className="text-center text-xl font-medium  sm:w-[550px]">
                                Read what our customers have to say about their experiences with our work and the quality we deliver.
                            </TypographyH3>
                        </AnimateComponent>
                    </div>
                </div>
            </div>

            <AnimateComponent
                className="w-full flex flex-col  "
                // transition={{ type: "spring", bounce: 0, duration: 0.6 }}
                variants={{
                    start: { opacity: 0, },
                    end: { opacity: 1 },
                }}>
                <div className="w-full flex justify-center pb-20 bg-gradient-to-b from-background  via-mutedTheme25 to-background ">
                    <div className="w-full flex space-x-8 max-w-screen-xl ">
                        <div className=" pl-4 pr-4 sm:pl-0 sm:pr-0 columns-1 sm:columns-2 gap-4 space-y-4 w-full ">
                            <ReviewWidget
                                className="w-full  space-y-4 "
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
                                className="w-full  space-y-4  "
                                name={"Daniel Makell"}
                                role={"Project Director"}
                                company={"John Sisk"}
                                variant={"Welfare Cleaning (Wembley)"}>
                                Elite are our &apos;go to&apos; builder clean contractor. They have helped us deliver over 2000 apartments here in recent
                                years as well as managing the site welfare cleaning. Highly recommended (December 2023)
                            </ReviewWidget>

                            <ReviewWidget
                                className="w-full space-y-4  "
                                name={"Mark Plunkett"}
                                role={"Site Manager"}
                                company={"Kier"}
                                variant={"Exclusive housing development"}>
                                I would like to take this opportunity to thank Elite and in particular Viorica and her team for all the help that
                                they gave us to get the apartments ready for client inspections. The contract has been challenging and the &apos;no
                                problem&apos; attitude has been very refreshing and appreciated. We would be happy to employ Elite as a cleaning
                                contractor on any future projects (October 2023)
                            </ReviewWidget>


                            <ReviewWidget
                                className="w-full space-y-4   "
                                name={"T Waring"}
                                role={"Senior Site Manager"}
                                company={"McLaren"}
                                variant={"Offices"}>
                                Never had a single issue with Elite cleaners. Always positive and ready to work hard (August 2023)
                            </ReviewWidget>

                            <ReviewWidget
                                className="w-full space-y-4  "
                                name={"R Donaghey"}
                                role={"Site Manager"}
                                company={"Balfour Beatty"}
                                variant={"Offices"}>
                                Olesea, Elite Supervisor&apos;s work ethics are exceptional. I highly recomend Olesea and her team for any future
                                projects (July 2023)
                            </ReviewWidget>


                            <ReviewWidget
                                className="w-full space-y-4  "
                                name={"Olly Rowsell"}
                                role={"Project Director"}
                                company={"McLaren"}
                                variant={"Hotel"}>
                                Please pass on my thanks to your team involved with the project, in particular with the crew we had on site -
                                they were all very efficient and easy to work with, which makes things a lot easier from my team&apos;s side -
                                my Senior Site Manager was paricularly complimentary of Elite. Thanks again (July 2023)
                            </ReviewWidget>

                            <ReviewWidget
                                className="w-full space-y-4 "
                                name={"Mark Plunkett"}
                                role={"Site Manager"}
                                company={"Kier"}
                                variant={"Exclusive housing development"}>
                                I would like to take this opportunity to thank Elite and in particular Viorica and her team for all the help that
                                they gave us to get the apartments ready for client inspections. The contract has been challenging and the &apos;no
                                problem&apos; attitude has been very refreshing and appreciated. We would be happy to employ Elite as a cleaning
                                contractor on any future projects (October 2023)
                            </ReviewWidget>

                            <ReviewWidget
                                className="w-full space-y-4 "
                                name={"T Waring"}
                                role={"Senior Site Manager"}
                                company={"McLaren"}
                                variant={"Offices"}>
                                Never had a single issue with Elite cleaners. Always positive and ready to work hard (August 2023)
                            </ReviewWidget>

                            <ReviewWidget
                                className="w-full space-y-4 "
                                name={"R Donaghey"}
                                role={"Site Manager"}
                                company={"Balfour Beatty"}
                                variant={"Offices"}>
                                Olesea, Elite Supervisor&apos;s work ethics are exceptional. I highly recommend Olesea and her team for any future
                                projects (July 2023)
                            </ReviewWidget>

                            <ReviewWidget
                                className="w-full space-y-4 "
                                name={"Daniel Makell"}
                                role={"Project Director"}
                                company={"John Sisk"}
                                variant={"Welfare Cleaning (Wembley)"}>
                                Elite are our &apos;go to&apos; builder clean contractor. They have helped us deliver over 2000 apartments here in recent
                                years as well as managing the site welfare cleaning. Highly recommended (December 2023)
                            </ReviewWidget>

                            <ReviewWidget
                                className="w-full space-y-4 "
                                name={"Olly Rowsell"}
                                role={"Project Director"}
                                company={"McLaren"}
                                variant={"Hotel"}>
                                Please pass on my thanks to your team involved with the project, in particular with the crew we had on site -
                                they were all very efficient and easy to work with, which makes things a lot easier from my team&apos;s side -
                                my Senior Site Manager was particularly complimentary of Elite. Thanks again (July 2023)
                            </ReviewWidget>

                            <ReviewWidget
                                className="w-full space-y-4 "
                                name={"Kavishnan Jeyarajah"}
                                role={"Site Manager"}
                                company={"John Sisk"}
                                variant={"Welfare Cleaning (Wembley)"}>
                                I have managed Elite with the welfare management and I would have no
                                problem recommending them. They have also been the team&apos;s no 1
                                builders clean contractor over the years for Sisk on past projects
                                (December 2023)
                            </ReviewWidget>
                        </div>
                    </div>
                </div>
            </AnimateComponent>

            <Footer />
        </main >
    );
}
