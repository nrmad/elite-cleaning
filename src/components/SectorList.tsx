'use client'

import WorkWidget from "@/app/sectors/WorkWidget";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "./ui/pagination";
import { useQuery } from "@tanstack/react-query";
import { fetchSector } from "@/lib/fetchSector";
import { ProjectOverview } from "@/types/project";

interface PropTypes {
    sectorId: number;
    sector: string;
    projects: ProjectOverview[];
    pages: number;
}

export default function SectorList({ sectorId, sector, projects, pages }: PropTypes) {

    // const { data: projects, error, isLoading } = useQuery({ queryKey: ['sector', sectorId], queryFn: () => fetchSector(sectorId) })

    // console.log('here')
    // console.log(projects)

    return (
        <div className="w-full flex flex-col space-y-8">
            <div className="w-full grid grid-cols-1 sm:grid-cols-3  gap-8 ">
                {projects.map(({ media: [{ url, alt }], title, id }: ProjectOverview, index: number) =>
                    <WorkWidget url={url} alt={alt} title={title} link={`/sectors/${sector}/${id}`} />
                )}


            </div>
            <div className="w-full ">
                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious href="#" />
                        </PaginationItem>
                        {
                            [...Array(pages)].map((_, index) => {
                                const page = index + 1
                                return (
                                    <PaginationItem>
                                        <PaginationLink href={`?page=${page}`}>{page}</PaginationLink>
                                    </PaginationItem>
                                )
                            })
                        }
                        {/* <PaginationItem>
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
                        </PaginationItem> */}
                        <PaginationItem>
                            <PaginationNext href="#" />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>

        </div>
    )
}