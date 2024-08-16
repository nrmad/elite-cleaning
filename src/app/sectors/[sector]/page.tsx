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

// export async function getStaticPaths() {
// Read the JSON file containing the posts data
// const filePath = path.join(process.cwd(), 'data', 'posts.json');
// const jsonData = fs.readFileSync(filePath);
// const posts = JSON.parse(jsonData);

// Get the paths we want to pre-render based on the posts
// const paths = posts.map((post) => ({
//   params: { id: post.id }, // `id` corresponds to the dynamic route parameter
// }));

// Only these paths will be pre-rendered at build time
// return { paths, fallback: false };
// }

// export async function getStaticProps({ params }) {
// Read the JSON file again to get the specific post data
// const filePath = path.join(process.cwd(), 'data', 'posts.json');
// const jsonData = fs.readFileSync(filePath);
// const posts = JSON.parse(jsonData);

// Find the post that matches the id from the URL
// const post = posts.find((post) => post.id === params.id);

// Pass the post data to the page as props
// return { props: { post } };
// }

export default function Commercial() {

    return (
        <main className="flex min-h-screen flex-col items-center">
            <NavigationBar />
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
                        <div className="flex flex-col w-full space-y-4" >
                            <Breadcrumb>
                                <BreadcrumbList>
                                    <BreadcrumbItem>
                                        <BreadcrumbLink href="/sectors">Sectors</BreadcrumbLink>
                                    </BreadcrumbItem>

                                    <BreadcrumbSeparator />
                                    <BreadcrumbItem>
                                        <BreadcrumbPage >Commercial</BreadcrumbPage>
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
                                <ul className="list-disc pl-4 pt-2">
                                    <li>42 projects – both new builds and office fit outs</li>
                                    <li>2.6 million sq ft completed</li>
                                    <li>Value of projects in the last five years £661 million</li>
                                </ul>
                                <TypographyP className="font-semibold mb-6">
                                    &quot;I would like to thank you and your team for all the hard work you have put in over the past few weeks, the project is
                                    very sharp looking and our client (Department of Education) has commented on how well the building looked.
                                    I will be fully recommending you across the B&K business and if you require a recommendation for any customers please
                                    use me as a reference. (August 2022)&quot;
                                </TypographyP>
                                <p className="text-sm">
                                    Denis O&apos;Toole
                                </p>
                                <p className="text-sm">
                                    Project Manager, Bowmer & Kirkland - The Hub
                                </p>
                            </div>
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