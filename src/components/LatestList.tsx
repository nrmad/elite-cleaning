'use client'

import { fetchLatest } from "@/lib/fetchLatest"
import { useQuery } from "@tanstack/react-query"
import plugin from "tailwindcss"
import React from "react"
import Image from "next/image";
import { TypographyH4 } from "./ui/typographyH4"
import WorkWidget from "@/app/sectors/WorkWidget"
import { Button } from "./ui/button"
import { Skeleton } from "./ui/skeleton"



export default function LatestList() {

    const { data: projects, error, isFetching } = useQuery({ queryKey: ['latest'], queryFn: () => fetchLatest() })


    return (
        <div className="flex flex-col w-full space-y-8">
            <TypographyH4>
                Latest projects
            </TypographyH4>
            <div className="w-full grid grid-cols-1 sm:grid-cols-3 grid-rows-1 gap-8 ">
                {isFetching
                    ? <><Skeleton className="h-80" /><Skeleton className="h-80" /><Skeleton className="h-80" /></>
                    : projects?.results.map(({ id, title, sector_name, media: [{ url, alt }] }: { media: [{ url: string, alt: string }], title: string, id: string, sector_name: string }, index: number) => (
                        <WorkWidget url={url} alt={alt} title={title} link={`/sectors/${sector_name}/${id}`} />
                    ))
                }



            </div>

        </div>


    )
}

