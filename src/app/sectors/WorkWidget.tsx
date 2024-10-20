'use client'

import Box from "@/components/Box";
import { TypographyH4 } from "@/components/ui/typographyH4";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface PropTypes {
    title: string;
    url: string;
    alt: string;
    link?: string;
}

export default function WorkWidget({ title, url, alt, link }: PropTypes) {

    console.log(link)

    const router = useRouter()

    const navigate = () => {
        if (link)
            router.push(link)
    }

    return (
        <div className="h-80 cursor-pointer" onClick={navigate}>
            <Box className="  h-full w-full">
                <div className="relative w-full h-full overflow-hidden " >
                    <Image src={url} alt={alt} fill className="object-cover" />
                    <div className="absolute top-0 bottom-0 left-0 right-0 bg-black/20" />
                </div>
                <Box className="absolute -top-2 -left-2 right-2 h-14 flex items-center p-4">
                    <TypographyH4 className="text-primary-foreground font-light">
                        {title}
                    </TypographyH4>
                </Box>
            </Box>
        </div>
    )
}