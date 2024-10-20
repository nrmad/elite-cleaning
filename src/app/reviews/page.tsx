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
import { fetchReviews } from "@/lib/fetchReviews";
import { Review } from "@/types/review";


export default async function Reviews() {
    // just noticed the NavigationBar should shrink on sticky motion


    // style={{ clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)" }}
    const reviews = await fetchReviews()

    return (
        <>
            {/* <main className="flex min-h-screen flex-col items-center overflow-clip">
            <NavigationBar /> */}

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
                <div className="w-full flex justify-center pb-20 relative">
                    <div className="absolute inset-0 z-[-1] bg-gradient-to-b from-background  via-mutedTheme25 to-background bg-[length:100%_3000px] bg-repeat-y "
                    />
                    <div className="w-full flex space-x-8 max-w-screen-xl ">
                        <div className=" pl-4 pr-4 sm:pl-0 sm:pr-0 columns-1 sm:columns-2 gap-4 space-y-4 w-full ">
                            {reviews.map(({ author, role, content, company, variant }: Review, i: number) =>
                                <div key={i} className="break-inside-avoid mb-4">
                                    <ReviewWidget
                                        key={i}
                                        className="w-full space-y-4 "
                                        name={author}
                                        role={role}
                                        company={company}
                                        variant={variant}>
                                        {content}
                                    </ReviewWidget>
                                </div>

                            )}
                        </div>
                    </div>
                </div>
            </AnimateComponent>

            {/* <Footer />
        </main > */}
        </>
    );
}
