'use client'

import AnimateComponent from "@/components/AnimateComponent";
import Box from "@/components/Box";
import { Footer } from "@/components/Footer";
import { NavigationBar } from "@/components/NavigationBar";
import { TypographyH2 } from "@/components/ui/typographyH2";
import { TypographyH4 } from "@/components/ui/typographyH4";
import { TypographyP } from "@/components/ui/typographyP";
import Image from "next/image";
import WorkWidget from "../../WorkWidget";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { useSearchParams } from 'next/navigation'
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import AutoCarousel from "@/components/AutoCarousel";
import { useQuery } from "@tanstack/react-query";
import { fetchProject } from "@/lib/fetchProject";
import { capitalize, getYearFromDate, valueFormatter } from "@/utils/helpers";
import Loader from "@/components/Loader";
import LatestList from "@/components/LatestList";


export default function Project({ params: { project: projectId, sector } }: { params: { project: string, sector: string } }) {


    const searchParams = useSearchParams()

    //, stopOnInteraction: true 
    const plugin = React.useRef(
        Autoplay({ delay: 2000 })
    )


    const { data: project, error, isLoading } = useQuery({ queryKey: ['project', projectId], queryFn: () => fetchProject(projectId) })

    if (isLoading) return (<Loader />)

    const { title, completed, contractor, description, value, media, scope_of_works } = project

    return (
        <>
            {/* <main className="flex min-h-screen flex-col items-center">
            <NavigationBar /> */}
            <div className="w-full from-theme to-mutedTheme25 from-5% to-95% bg-gradient-to-r flex flex-col items-center pt-20 pb-20">
                <AnimateComponent
                    // transition={{ type: "spring", bounce: 0, duration: 0.6 }}
                    variants={{
                        start: { opacity: 0, y: 25 },
                        end: { opacity: 1, y: 0 },
                    }}
                >
                    <TypographyH2 className="text-center text-4xl text-primary-foreground">
                        {title}
                    </TypographyH2>
                </AnimateComponent>
            </div>
            <div className=" pt-20 pl-8 pr-8 pb-32 flex flex-col flex-1 space-y-8 z-10 w-full max-w-screen-xl">
                <div className=" ">
                    <AnimateComponent
                        className="w-full flex flex-col space-y-16  justify-center items-center overflow-visible"
                        // transition={{ type: "spring", bounce: 0, duration: 0.6 }}
                        variants={{
                            start: { opacity: 0 },
                            end: { opacity: 1 },
                        }}
                    >

                        <div className="flex flex-col w-full space-y-4" >
                            <Breadcrumb>
                                <BreadcrumbList>
                                    <BreadcrumbItem>
                                        <BreadcrumbLink href="/sectors">Sectors</BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator />
                                    <BreadcrumbItem>
                                        <BreadcrumbLink href={`/sectors/${sector}`}>{capitalize(sector)}</BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator />
                                    <BreadcrumbItem>
                                        <BreadcrumbPage >{title}</BreadcrumbPage>
                                    </BreadcrumbItem>
                                </BreadcrumbList>
                            </Breadcrumb>


                            <Separator />

                            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8 w-full">
                                <div className="flex flex-col w-full">
                                    <TypographyH4>
                                        {title}
                                    </TypographyH4>
                                    <TypographyP>
                                        {description}
                                    </TypographyP>
                                    <TypographyP>Our scope of works includes:</TypographyP>
                                    <ul className="list-disc pl-4 pt-2">
                                        {scope_of_works.map(({ details }: { details: string }, index: number) => <li>{details}</li>)}

                                    </ul>

                                </div>
                                <Box className="flex flex-col space-y-2 w-[300px] border-solid border-border p-4">
                                    <TypographyP className="text-xs font-semibold ">
                                        PROJECT INFORMATION
                                    </TypographyP>
                                    <Separator />
                                    <div className="grid grid-rows-3 grid-cols-2 gap-x-4 gap-y-1  ">
                                        <p className=" text-xs font-medium ">VALUE</p>
                                        <p className="text-xs font-medium">£{valueFormatter(value)}</p>
                                        <p className=" text-xs font-medium">COMPLETED</p>
                                        <p className=" text-xs font-medium"> {getYearFromDate(completed)}</p>
                                        <p className=" text-xs font-medium">CONTRACTOR</p>
                                        <p className=" text-xs font-medium max-h-4">{contractor.toUpperCase()}</p>
                                        {/* <p className=" text-xs font-medium">CONTRACT</p>
                                        <p className=" text-xs font-medium">108 WEEKS</p> */}
                                    </div>

                                </Box>
                            </div>
                            <div className="flex w-full">
                                {/* <AutoCarousel snap={true} items={
                                    Array.from({ length: 5 }).map((_, index) => (

                                        <Card className="rounded-none">
                                            <CardContent className="flex aspect-square items-center justify-center p-6 ">
                                                <span className="text-3xl font-semibold">{index + 1}</span>
                                            </CardContent>
                                        </Card>

                                    ))
                                } /> */}
                                <Carousel
                                    plugins={[plugin.current]}
                                    className="w-full my-4"
                                    onMouseEnter={() => plugin.current.stop()}
                                    onMouseLeave={() => plugin.current.play()}
                                    opts={{
                                        loop: true,
                                        align: "start",
                                    }}
                                >
                                    <CarouselContent>
                                        {media.map(({ url, alt }: { url: string, alt: string }, index: number) => (
                                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 cursor-grab">
                                                <div className="">
                                                    <Card className="rounded-none">
                                                        <CardContent className="relative flex  h-80 items-center justify-center p-6 ">
                                                            <Image src={url} alt={alt} fill className="object-cover aspect-square" />
                                                        </CardContent>
                                                    </Card>
                                                </div>
                                            </CarouselItem>
                                        ))}
                                        {/* {Array.from({ length: 5 }).map((_, index) => (
                                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                                <div className="">
                                                    <Card className="rounded-none">
                                                        <CardContent className="flex aspect-square items-center justify-center p-6 ">
                                                            <span className="text-3xl font-semibold">{index + 1}</span>
                                                        </CardContent>
                                                    </Card>
                                                </div>
                                            </CarouselItem>
                                        ))} */}
                                    </CarouselContent>
                                </Carousel>
                            </div>

                            <LatestList />
                            {/* <div className="flex flex-col w-full space-y-8">
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
                            </div> */}

                        </div>
                    </AnimateComponent>
                </div>

            </div>
            {/* <Footer />
        </main> */}
        </>
    )
}

//rounded-xl