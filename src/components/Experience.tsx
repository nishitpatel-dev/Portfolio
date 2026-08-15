import { Bricolage_Grotesque } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { Award } from "lucide-react";
import Reveal from "./reveal";


const font = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export default function Experience(){
    return(
        <div className="flex flex-col items-center p-5 mt-10 w-full">
            <Reveal>
                <h1 className={`${font.className} font-semibold text-3xl`}>Experience</h1>
            </Reveal>
            <Reveal className="w-full" delayMs={120}>
                <div className="flex w-full items-center gap-5 mt-5">
                    <div>
                        <Image src={"/PropVivo.png"} width={50} height={50} alt="PropVivo Logo"/>
                    </div>
                    <div className="w-full">
                        <div className="flex justify-between items-center">
                            <div><h1 className="font-bold">PropVivo</h1></div>
                            <div><h1 className="text-sm text-primary/70">Jul 2026 - Present </h1></div>
                        </div>
                        <span className="text-sm font-normal text-primary/70">Full Stack Developer</span>
                        <div className="mt-3 p-3 bg-gradient-to-r from-violet-50/50 to-purple-50/50 dark:from-violet-900/10 dark:to-purple-900/10 rounded-lg border-l-4 border-violet-400/30">
                            <p className="text-sm text-primary/80 leading-relaxed">
                                Developing and enhancing web application features, contributing to <span className="font-medium text-primary">production releases</span> and <span className="font-medium text-primary">feature rollouts</span>, while handling feature enhancements, bug fixes, and application improvements across ongoing development and release cycles.
                            </p>
                        </div>
                    </div>
                </div>
            </Reveal>
            <Reveal className="w-full" delayMs={160}>
                <div className="flex w-full items-center gap-5 mt-5">
                    <div>
                        <Image src={"/PropVivo.png"} width={50} height={50} alt="PropVivo Logo"/>
                    </div>
                    <div className="w-full">
                        <div className="flex justify-between items-center">
                            <div><h1 className="font-bold">PropVivo</h1></div>
                            <div><h1 className="text-sm text-primary/70">Jul 2025 - Jun 2026 </h1></div>
                        </div>
                        <span className="text-sm font-normal text-primary/70">Full Stack Developer Intern</span>
                        <div className="mt-3 p-3 bg-gradient-to-r from-blue-50/50 to-cyan-50/50 dark:from-blue-900/10 dark:to-cyan-900/10 rounded-lg border-l-4 border-blue-400/30">
                            <p className="text-sm text-primary/80 leading-relaxed">
                                Developed and enhanced web application features using <span className="font-medium text-primary">Next.js</span>, working with <span className="font-medium text-primary">GraphQL</span> for data integration and application workflows. Worked with <span className="font-medium text-primary">Microsoft SQL Server</span> and <span className="font-medium text-primary">Azure Cosmos DB</span>, including database schemas and stored procedures, with hands-on exposure to .NET backend development.
                            </p>
                        </div>
                    </div>
                </div>
            </Reveal>
            <Reveal className="w-full" delayMs={200}>
                <div className="flex w-full items-center gap-5 mt-5">
                    <div>
                        <Image src={"/owy.png"} width={50} height={50} alt="OWY Technosys Pvt. Ltd. Logo" className="rounded-full"/>
                    </div>
                    <div className="w-full">
                        <div className="flex justify-between items-center">
                            <div><h1 className="font-bold">OWY Technosys Pvt. Ltd.</h1></div>
                            <div><h1 className="text-sm text-primary/70">Oct 2024 - Apr 2025 </h1></div>
                        </div>
                        <span className="text-sm font-normal text-primary/70">Fullstack Developer Intern</span>
                        <div className="mt-3 p-3 bg-gradient-to-r from-amber-50/50 to-orange-50/50 dark:from-amber-900/10 dark:to-orange-900/10 rounded-lg border-l-4 border-amber-400/30">
                            <p className="text-sm text-primary/80 leading-relaxed">
                                Developed web application using <span className="font-medium text-primary">.NET Web API</span> for backend services and <span className="font-medium text-primary">React.js</span> for frontend development.
                            </p>
                        </div>
                        <div className="mt-4 flex justify-start">
                            <Link href="https://res.cloudinary.com/dfi24moms/image/upload/v1746337606/IMG20250504111132_rygk1x.jpg" target="_blank">
                                <RainbowButton variant="outline" className="text-xs px-3 py-1.5">
                                    <Award className="mr-1.5 h-3.5 w-3.5" />
                                    View Certificate
                                </RainbowButton>
                            </Link>
                        </div>
                    </div>
                </div>
            </Reveal>
        </div>
    )
}