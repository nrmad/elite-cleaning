'use client'

import WorkWidget from "@/app/sectors/WorkWidget";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "./ui/pagination";
import { useQuery } from "@tanstack/react-query";
import { fetchSector } from "@/lib/fetchSector";
import { ProjectOverview } from "@/types/project";

interface PropTypes {
    sectorId: number;
    sector: string;
    projects: ProjectOverview[]
}

export default function SectorList({ sectorId, sector, projects }: PropTypes) {

    // const { data: projects, error, isLoading } = useQuery({ queryKey: ['sector', sectorId], queryFn: () => fetchSector(sectorId) })

    // console.log('here')
    // console.log(projects)

    return (
        <div className="w-full flex flex-col space-y-8">
            <div className="w-full grid grid-cols-1 sm:grid-cols-3 grid-rows-2 gap-8 ">
                {projects.map(({ media: [{ url, alt }], title, id }: ProjectOverview, index: number) =>
                    <WorkWidget url={url} alt={alt} title={title} link={`/sectors/${sector}/${id}`} />
                )}
                {/* <WorkWidget url="/commercial-sector.jpg" alt="commercial-sector" title="Glass Futures, St Helens" />
                <WorkWidget url="/education-sector.jpg" alt="education-sector" title="Bank House, Newcastle upon Tyne" />
                <WorkWidget url="/leisure-sector.jpg" alt="leisure-sector" title="Six, Centre Square, Middlesbrough" />
                <WorkWidget url="/health-sector.jpg" alt="health-sector" title="Space Park, Leicester" />
                <WorkWidget url="/accommodation-sector.jpg" alt="accommodation-sector" title="Old Granada Studios, Manchester" />
                <WorkWidget url="/retail-sector.jpg" alt="retail-sector" title="Bank House, Newcastle upon Tyne" /> */}

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

        </div>
    )
}