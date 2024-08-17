'use client'

import { BookOpenCheck, Handshake, LucideIcon, UsersRound } from "lucide-react"
import { StepItem, Stepper, Step, useStepper } from "./stepper"
import { Button } from "./ui/button"
import { TypographyP } from "./ui/typographyP"
import { describe } from "node:test"
import AnimateComponent from "./AnimateComponent"


// [
//     `At [Company Name], we started as a small, family-run business, with the owners personally handling every job. As our reputation for quality grew, so did the demand for our services, leading us to take the step toward incorporation.`,

//     `Even as we've expanded, our commitment to quality remains unchanged. Incorporation has allowed us to grow, but we’ve kept our personal touch at the heart of our work, ensuring that every project meets the high standards our clients have come to expect.`

// ]
// const steps = [
//     {
//         label: "Elite starts", icon: Handshake,
//         description: `Elite cleaning is a small, family-run builders cleaning company, when we started off the owners did much of the work themselves. 
//         We take pride in delivering high-quality post-construction cleaning with a personal touch. As a hands-on team, we ensure every job 
//         is done to the highest standard, making your space spotless and ready for use. Trust us to treat your project with the care and attention 
//         it deserves.`
//     },
//     {
//         label: "Incorporation", icon: BookOpenCheck,
//         description: 
//     },
//     { label: "Growth", icon: UsersRound },
//     // { label: "Step 4" },
// ] satisfies StepItem[]

const steps = [
    {
        label: "Elite starts"
    },
    {
        label: "Incorporation", icon: BookOpenCheck,
    },
    { label: "Growth", icon: UsersRound },
    // { label: "Step 4" },
] satisfies StepItem[]

//expandVerticalSteps
// variant="line"

export default function FixedStepper() {
    return (
        <div className="flex w-full flex-col gap-4">
            <Stepper variables={{
                // "--step-gap": "400px"
            }}
                expandVerticalSteps
                orientation="vertical" initialStep={0} steps={steps}>
                {/* {steps.map(({ label, icon, description }, index) => {
                    return (
                        <Step key={label} label={label} icon={icon}>
                            <div className="h-[800px] flex flex-col items-start my-4 text-primary rounded-md">
                                <h1 className="text-xl">{label}</h1>
                                <TypographyP>
                                    {description}
                                </TypographyP>
                            </div>
                        </Step>
                    )
                })} */}
                <Step key={"Elite starts"} label={"Elite starts"} icon={Handshake}>
                    <AnimateComponent
                        className="w-full "
                        variants={{
                            start: { opacity: 0, y: 50 },
                            end: { opacity: 1, y: 0 },
                        }}
                    >
                        <div className="h-[700px] flex flex-col items-start my-4 text-primary rounded-md">
                            <div className="flex justify-between items-center w-full"><h1 className="text-xl w-fit">{"Elites journey begins"}</h1> <p className="text-sm text-muted-foreground">Febuary 2000</p></div>
                            <TypographyP>
                                Elite Cleaning began with just the owners, who started from the ground up by handling every aspect of the cleaning work
                                themselves. Without any outside assistance, they tackled each project with a deep commitment to excellence, ensuring
                                that every post-construction site was thoroughly cleaned and ready for its next use. This hands-on approach was
                                crucial in the early days, where meticulous attention to detail and a personal touch were central to every job.
                            </TypographyP>
                            <TypographyP>
                                The owners&apos; dedication to quality and their willingness to take on every task personally laid a strong foundation for
                                the company. Their journey began with nothing but a passion for their work and a relentless drive to deliver outstanding
                                results. This spirit of hard work and personal involvement remains at the core of Elite Cleaning, continuing to guide
                                and inspire the team as we uphold the same high standards that defined our beginnings.
                            </TypographyP>
                        </div>
                    </AnimateComponent>
                </Step>
                <Step key={"Incorporation"} label={"Incorporation"} icon={BookOpenCheck}>
                    <AnimateComponent
                        className="w-full "
                        variants={{
                            start: { opacity: 0, y: 50 },
                            end: { opacity: 1, y: 0 },
                        }}
                    >
                        <div className="h-[700px] flex flex-col items-start my-4 text-primary rounded-md">
                            <div className="flex justify-between items-center w-full"><h1 className="text-xl w-fit">{"Our move to Incorporation"}</h1> <p className="text-sm text-muted-foreground">March 2003</p></div>

                            <TypographyP>
                                After establishing Elite Cleaning as a trusted, family-run business, we recognized the need to evolve to meet the growing demand for our services.
                                This led us to take the significant step of incorporating the business. Incorporation allowed us to expand our operations and take on more substantial projects,
                                but we remained committed to the same values that made us successful in the first place. The owners, who once handled every job themselves, have ensured that
                                the personal touch and dedication to quality that defined our early days continue to be at the heart of our company.
                            </TypographyP>
                            <TypographyP>
                                As we&apos;ve grown, we&apos;ve carefully maintained our commitment to providing the highest level of service. The transition to incorporation has allowed us to bring on
                                additional skilled team members and increase our resources, but our attention to detail and hands-on approach remain unchanged. We take pride in treating every
                                project, big or small, with the same care and precision that our clients have come to expect. While incorporation has given us the tools to grow, our unwavering
                                dedication to quality and customer satisfaction will always be our top priority.
                            </TypographyP>
                        </div>
                    </AnimateComponent>

                </Step>
                <Step key={"Growth"} label={"Growth"} icon={UsersRound}>
                    <AnimateComponent
                        className="w-full "
                        variants={{
                            start: { opacity: 0, y: 50 },
                            end: { opacity: 1, y: 0 },
                        }}
                    >
                        <div className="h-[400px] flex flex-col items-start my-4 text-primary rounded-md">
                            <div className="flex justify-between items-center w-full"><h1 className="text-xl w-fit">{"Growth from hard work"}</h1> <p className="text-sm text-muted-foreground"> May 2008</p></div>

                            <TypographyP>
                                Elite Cleaning&apos;s dedication to high-quality post-construction cleaning quickly earned the trust of our clients. From the start, the owners
                                invested their energy into every job, ensuring that each space was cleaned to the highest standards. This hands-on approach deeply resonated with
                                clients, leading to a steady flow of repeat business and referrals.
                            </TypographyP>
                            <TypographyP>
                                We take immense pride in this vote of confidence. The repeat business and recommendations from our satisfied clients
                                were key to our rapid growth. Their trust and continued support underscore the care and effort we put into every
                                project, driving our expansion while maintaining the same personal touch and meticulous service that initially built
                                our reputation.
                            </TypographyP>
                        </div>
                    </AnimateComponent>

                </Step>
                {/* <Footer /> */}
            </Stepper>
        </div>
    )
}

//border bg-secondary 

// const Footer = () => {
//     const {
//         nextStep,
//         prevStep,
//         resetSteps,
//         isDisabledStep,
//         hasCompletedAllSteps,
//         isLastStep,
//         isOptionalStep,
//     } = useStepper()
//     return (
//         <>
//             {hasCompletedAllSteps && (
//                 <div className="h-40 flex items-center justify-center my-4 border bg-secondary text-primary rounded-md">
//                     <h1 className="text-xl">Woohoo! All steps completed! 🎉</h1>
//                 </div>
//             )}
//             <div className="w-full flex justify-end gap-2">
//                 {hasCompletedAllSteps ? (
//                     <Button size="sm" onClick={resetSteps}>
//                         Reset
//                     </Button>
//                 ) : (
//                     <>
//                         <Button
//                             disabled={isDisabledStep}
//                             onClick={prevStep}
//                             size="sm"
//                             variant="secondary"
//                         >
//                             Prev
//                         </Button>
//                         <Button size="sm" onClick={nextStep}>
//                             {isLastStep ? "Finish" : isOptionalStep ? "Skip" : "Next"}
//                         </Button>
//                     </>
//                 )}
//             </div>
//         </>
//     )
// }