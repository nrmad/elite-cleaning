import AnimateComponent from "@/components/AnimateComponent";
import Box from "@/components/Box";
import { Footer } from "@/components/Footer";
import { NavigationBar } from "@/components/NavigationBar";
import { TypographyH2 } from "@/components/ui/typographyH2";
import { TypographyH4 } from "@/components/ui/typographyH4";
import { TypographyP } from "@/components/ui/typographyP";
import Image from "next/image";
import WorkWidget from "./WorkWidget";
import { Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { Separator } from "@/components/ui/separator";


export default function Sectors() {

    return (
        <main className="flex min-h-screen flex-col items-center overflow-clip">
            <NavigationBar />
            <div className="w-full from-theme to-mutedTheme25 from-5% to-95% bg-gradient-to-r flex flex-col items-center pt-20 pb-20">
                <AnimateComponent
                    // transition={{ type: "spring", bounce: 0, duration: 0.6 }}
                    variants={{
                        start: { opacity: 0, y: 25 },
                        end: { opacity: 1, y: 0 },
                    }}
                >
                    <TypographyH2 className="text-center text-4xl text-primary-foreground">
                        Service sectors
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
                                        <BreadcrumbPage >Sectors</BreadcrumbPage>
                                    </BreadcrumbItem>
                                </BreadcrumbList>
                            </Breadcrumb>


                            <Separator />

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
                                    on the specific needs of each project, we ensure quality and reliability in every job we undertake. Whether it&apos;s a
                                    hospital, a hotel, an office building, a school, a leisure facility, or a retail space, our expert teams are
                                    dedicated to providing the best cleaning services available.
                                </TypographyP>
                            </div>
                        </div>



                        <div className="w-full grid sm:grid-cols-3 grid-rows-2 gap-8 ">
                            <WorkWidget url="/commercial-sector.jpg" alt="commercial-sector" title="Commercial" link="/sectors/commercial" />
                            <WorkWidget url="/education-sector.jpg" alt="education-sector" title="Education" />
                            <WorkWidget url="/leisure-sector.jpg" alt="leisure-sector" title="Leisure" />
                            <WorkWidget url="/health-sector.jpg" alt="health-sector" title="Health" />
                            <WorkWidget url="/accommodation-sector.jpg" alt="accommodation-sector" title="Accommodation" />
                            <WorkWidget url="/retail-sector.jpg" alt="retail-sector" title="Retail" />
                        </div>
                    </AnimateComponent>
                </div>
            </div>
            <Footer />
        </main>
    )
}

//rounded-xl