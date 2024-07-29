import AnimateComponent from "@/components/AnimateComponent";
import Box from "@/components/Box";
import { Footer } from "@/components/Footer";
import { TopBar } from "@/components/Topbar";
import { TypographyH2 } from "@/components/ui/typographyH2";
import { TypographyH4 } from "@/components/ui/typographyH4";
import { TypographyP } from "@/components/ui/typographyP";
import Image from "next/image";
import WorkWidget from "../WorkWidget";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";


export default function Commercial() {

    return (
        <main className="flex min-h-screen flex-col items-center">
            <TopBar />
            <div className="w-full  from-theme to-muted from-5% to-95% bg-gradient-to-r flex flex-col items-center pt-20 pb-20">
                <AnimateComponent
                    // transition={{ type: "spring", bounce: 0, duration: 0.6 }}
                    variants={{
                        start: { opacity: 0, y: 25 },
                        end: { opacity: 1, y: 0 },
                    }}
                >
                    <TypographyH2 className="text-center text-4xl text-primary-foreground">
                        Commercial sector
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

                        <div className="flex flex-col">
                            <TypographyP>
                                We have grown into one of the most successful builders cleaning companies in the UK due to our unwavering commitment
                                to client satisfaction and our focus on delivering exceptional service. This dedication has earned us a strong
                                reputation for quality and reliability.
                            </TypographyP>
                            <TypographyP>
                                Our cleaning teams undertake work in six key sectors, including health care, accommodation, commercial, education,
                                leisure, and retail. In each of these areas, we consistently deliver exceptional results, ensuring that every space
                                is impeccably clean and meets the highest standards of hygiene and presentation.
                            </TypographyP>
                            <TypographyP>
                                We offer our clients in both the private and public sectors a national service with a personal touch. By focusing
                                on the specific needs of each project, we ensure quality and reliability in every job we undertake. Whether it's a
                                hospital, a hotel, an office building, a school, a leisure facility, or a retail space, our expert teams are
                                dedicated to providing the best cleaning services available.
                            </TypographyP>
                        </div>


                        <div className="w-full grid grid-cols-3 grid-rows-2 gap-8 ">
                            <WorkWidget url="/commercial-sector.jpg" alt="commercial-sector" title="Glass Futures, St Helens" />
                            <WorkWidget url="/education-sector.jpg" alt="education-sector" title="Bank House, Newcastle upon Tyne" />
                            <WorkWidget url="/leisure-sector.jpg" alt="leisure-sector" title="Six, Centre Square, Middlesbrough" />
                            <WorkWidget url="/health-sector.jpg" alt="health-sector" title="Space Park, Leicester" />
                            <WorkWidget url="/accommodation-sector.jpg" alt="accommodation-sector" title="Old Granada Studios, Manchester" />
                            <WorkWidget url="/retail-sector.jpg" alt="retail-sector" title="Bank House, Newcastle upon Tyne" />

                        </div>
                        <div className="w-full ">
                            <Pagination>
                                <PaginationContent>
                                    <PaginationItem>
                                        <PaginationPrevious href="#" />
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#">1</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#" isActive>
                                            2
                                        </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#">3</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationEllipsis />
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationNext href="#" />
                                    </PaginationItem>
                                </PaginationContent>
                            </Pagination>
                        </div>
                    </AnimateComponent>
                </div>

            </div>
            <Footer />
        </main>
    )
}

//rounded-xl