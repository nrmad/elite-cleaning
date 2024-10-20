import { cn } from "@/lib/utils";
import Box from "./Box";
import { TypographyP } from "./ui/typographyP";

interface PropTypes {
    children: string;
    name: string;
    role: string;
    company: string;
    variant: string;
    clamp?: boolean;
    className?: string;
}

export default function ReviewWidget({ children, name, role, company, variant, className = "", clamp = false }: PropTypes) {

    return (
        <Box className={cn(" flex flex-col p-8 ", className)}>
            <TypographyP className={clamp ? "line-clamp-4  break-normal" : ""}>
                {children}
            </TypographyP>
            <div className="flex flex-col space-y-1">
                <TypographyP className="font-semibold">
                    {name}
                </TypographyP>
                <TypographyP className="text-sm">
                    {role}, {company} - {variant}
                </TypographyP>
            </div>
        </Box>
    )

}