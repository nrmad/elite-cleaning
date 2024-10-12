'use client'

import * as React from "react"
import AutoScroll from "embla-carousel-auto-scroll"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { cn } from "@/lib/utils"
import Autoplay from "embla-carousel-autoplay"


interface PropTypes {
    snap?: boolean;
    items: React.ReactNode[];
    className?: string;
}

export default function AutoCarousel({ items, className = "", snap = false }: PropTypes) {


    const plugin = React.useRef(
        AutoScroll({ stopOnInteraction: false })
    )

    //
    return (
        <Carousel
            opts={{ loop: true }}
            plugins={[plugin.current]}
            className="w-full  [&>*]:h-full [&>*]:w-full  h-full "
            onMouseEnter={() => plugin.current.stop()}
            onMouseLeave={() => plugin.current.play(0)}

        >
            <CarouselContent className="h-full">
                {items.map((item, index) => (
                    <CarouselItem key={index} className={cn("h-full  md:basis-1/2 lg:basis-1/3", className)}>
                        <div className="h-full w-full items-center justify-center">
                            {item}
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>

        </Carousel>
    )
}



// 'use client'

// import React from "react";
// import { Card, CardContent } from "./ui/card";
// import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
// import Autoplay from "embla-carousel-autoplay";

// interface PropTypes {
//     // children: React.ReactNode
// }

// //
// export default function AutoCarousel({ }: PropTypes) {
//     const plugin = React.useRef(
//         Autoplay({ stopOnInteraction: true, playOnInit: true })
//     )


//     // const plugin = Autoplay({ delay: 2000, stopOnInteraction: true });

//     return (
//         <Carousel plugins={[plugin.current]}
//             // onMouseEnter={plugin.current.stop}
//             // onMouseLeave={plugin.current.reset}
//             className="w-full h-full border border-solid border-blue-500 [&>*]:h-full">
//             <CarouselContent className="-ml-4 h-full border border-solid border-green-500 ">
//                 <CarouselItem key={1} className="pl-1 md:basis-1/2 lg:basis-1/3  h-full ">
//                     <div className="p-1 h-full">
//                         <Card className="h-full">
//                             <CardContent className="flex  h-full  items-center justify-center p-6">
//                                 <span className="text-2xl font-semibold">a</span>
//                             </CardContent>
//                         </Card>
//                     </div>
//                 </CarouselItem>
//                 <CarouselItem key={1} className="pl-1 md:basis-1/2 lg:basis-1/3  h-full">
//                     <div className="p-1 h-full">
//                         <Card className="h-full">
//                             <CardContent className="flex  h-full  items-center justify-center p-6">
//                                 <span className="text-2xl font-semibold">b</span>
//                             </CardContent>
//                         </Card>
//                     </div>
//                 </CarouselItem>
//                 <CarouselItem key={1} className="pl-1 md:basis-1/2 lg:basis-1/3 h-full">
//                     <div className="p-1 h-full">
//                         <Card className="h-full">
//                             <CardContent className="flex h-full items-center justify-center p-6">
//                                 <span className="text-2xl font-semibold">c</span>
//                             </CardContent>
//                         </Card>
//                     </div>
//                 </CarouselItem>
//             </CarouselContent>
//         </Carousel>
//     )
// }