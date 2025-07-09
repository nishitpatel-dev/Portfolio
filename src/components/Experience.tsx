import { Bricolage_Grotesque } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { Award } from "lucide-react";


const font = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export default function Experience(){
    return(
        <div className="flex flex-col items-center p-5 mt-10 w-full">
            <h1 className={`${font.className} font-semibold text-3xl`}>Experience</h1>
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
        </div>
    )
}