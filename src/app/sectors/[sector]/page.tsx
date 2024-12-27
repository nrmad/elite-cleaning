
import AnimateComponent from "@/components/AnimateComponent";
import Box from "@/components/Box";
import { Footer } from "@/components/Footer";
import { NavigationBar } from "@/components/NavigationBar";
import { TypographyH2 } from "@/components/ui/typographyH2";
import { TypographyH4 } from "@/components/ui/typographyH4";
import { TypographyP } from "@/components/ui/typographyP";
import Image from "next/image";
import WorkWidget from "../WorkWidget";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import path from "node:path";
import fs from 'fs';
import { useQuery } from "@tanstack/react-query";
import { fetchSector } from "@/lib/fetchSector";
import SectorList from "@/components/SectorList";


type Review = {
    content: string;
    author: string;
    role: string;
    company: string;
    project: string;
}

type Sector = {
    sector: string;
    description: string;
    metrics: string[];
    review: Review
}


async function getSectorData(sector: string) {

    const filePath = path.join(process.cwd(), 'src/static-content/sectors', `${sector}.json`)
    return JSON.parse(fs.readFileSync(filePath, 'utf-8'))

}

export async function generateStaticParams() {
    return [
        { params: { sector: 'residential' } },
        { params: { sector: 'commercial' } },
        { params: { sector: 'education' } },
        { params: { sector: 'leisure' } },
        { params: { sector: 'hospitality' } }
    ]
}


export default async function Sector({ params }: { params: { sector: string, page: string } }) {

    const sectorData = await getSectorData(params.sector)

    const page = parseInt(params.page)
    const { id, sector, description, metrics, review } = sectorData

    const projects = await fetchSector(id)


    return (
        <>
            {/* <main className="flex min-h-screen flex-col items-center overflow-clip">
            <NavigationBar /> */}
            <div className="w-full  from-theme to-mutedTheme25 from-5% to-95% bg-gradient-to-r flex flex-col items-center pt-20 pb-20">
                <AnimateComponent
                    // transition={{ type: "spring", bounce: 0, duration: 0.6 }}
                    variants={{
                        start: { opacity: 0, y: 25 },
                        end: { opacity: 1, y: 0 },
                    }}
                >
                    <TypographyH2 className="text-center text-4xl text-primary-foreground">
                        {sector} sector
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
                                        <BreadcrumbPage >{sector}</BreadcrumbPage>
                                    </BreadcrumbItem>
                                </BreadcrumbList>
                            </Breadcrumb>


                            <Separator />


                            <div className="flex flex-col">
                                <TypographyP>
                                    {description}
                                </TypographyP>
                                <ul className="list-disc pl-4 pt-2">
                                    {metrics.map((item: string, i: number) => <li key={i}>{item}</li>)}
                                </ul>
                                <TypographyP className="font-semibold mb-6">
                                    {review.content}
                                </TypographyP>
                                <p className="text-sm">
                                    {review.author}
                                </p>
                                <p className="text-sm">
                                    {`${review.role}, ${review.company} - ${review.project}`}
                                </p>
                            </div>
                        </div>


                        <SectorList sectorId={id} sector={params.sector} projects={projects.results} pages={projects.total_pages} page={page} />

                    </AnimateComponent>
                </div>
            </div>
            {/* <Footer />
        </main> */}
        </>
    )
}

//rounded-xl