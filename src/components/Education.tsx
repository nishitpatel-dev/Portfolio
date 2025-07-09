import { Bricolage_Grotesque } from "next/font/google";
import Image from "next/image";


const font = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export default function Education(){
    return(
        <div className="flex flex-col items-center p-5 mt-5 w-full">
            <h1 className={`${font.className} font-semibold text-3xl`}>Education</h1>
            <div className="flex w-full items-start gap-5 mt-5">
                <div className="pt-1">
                    <Image src={"/vnsgu.png"} width={50} height={50} alt="VNSGU LOGO" className="rounded-full"/>
                </div>
                <div className="w-full">
                    <div className="flex justify-between items-start mb-3">
                        <div>
                            <h1 className="font-bold">Veer Narmad South Gujarat University</h1>
                            <p className="text-xs text-primary/60 mt-1">Surat, Gujarat</p>
                        </div>
                    </div>
                    
                    {/* M.Sc. Degree */}
                    <div className="mb-4 p-3 bg-gradient-to-r from-cyan-50/50 to-blue-50/50 dark:from-cyan-900/10 dark:to-blue-900/10 rounded-lg border-l-4 border-cyan-400/30">
                        <div className="flex justify-between items-center mb-1">
                            <span className="text-sm font-medium text-primary">M.Sc. (Information Technology)</span>
                            <span className="text-xs text-primary/70 bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded-full">Pursuing</span>
                        </div>
                        <p className="text-xs text-primary/60">June 2024 - Present</p>
                    </div>

                    {/* B.Sc. Degree */}
                    <div className="p-3 bg-gradient-to-r from-emerald-50/50 to-teal-50/50 dark:from-emerald-900/10 dark:to-teal-900/10 rounded-lg border-l-4 border-emerald-400/30">
                        <div className="flex justify-between items-center mb-1">
                            <span className="text-sm font-medium text-primary">B.Sc. (Information Technology)</span>
                            <span className="text-xs font-medium text-primary/60 bg-primary/5 px-2 py-1 rounded-md">CGPA: 7.16</span>
                        </div>
                        <p className="text-xs text-primary/60">June 2021 - June 2024</p>
                    </div>
                </div>
            </div>
            <div className="flex w-full items-start gap-5 mt-5">
                <div className="pt-1">
                    <Image src={"/school.jpg"} width={50} height={50} alt="School LOGO" className=""/>
                </div>
                <div className="w-full">
                    <div className="flex justify-between items-start mb-3">
                        <div>
                            <h1 className="font-bold">Smt. R. S. M. Poonawala Sarvajanik Experimental School</h1>
                            <p className="text-xs text-primary/60 mt-1">Surat, Gujarat</p>
                        </div>
                    </div>
                    
                    {/* 12th Standard */}
                    <div className="mb-4 p-3 bg-gradient-to-r from-violet-50/50 to-purple-50/50 dark:from-violet-900/10 dark:to-purple-900/10 rounded-lg border-l-4 border-violet-400/30">
                        <div className="flex justify-between items-center mb-1">
                            <div className="flex flex-col">
                                <span className="text-sm font-medium text-primary">12th Standard (HSC)</span>
                                <span className="text-xs text-primary/50">Science Stream - Mathematics</span>
                            </div>
                            <span className="text-xs font-medium text-primary/60 bg-primary/5 px-2 py-1 rounded-md">Percentage: 79.46%</span>
                        </div>
                        <p className="text-xs text-primary/60">March 2021</p>
                    </div>

                    {/* 10th Standard */}
                    <div className="p-3 bg-gradient-to-r from-rose-50/50 to-pink-50/50 dark:from-rose-900/10 dark:to-pink-900/10 rounded-lg border-l-4 border-rose-400/30">
                        <div className="flex justify-between items-center mb-1">
                            <span className="text-sm font-medium text-primary">10th Standard (SSC)</span>
                            <span className="text-xs font-medium text-primary/60 bg-primary/5 px-2 py-1 rounded-md">Percentage: 82.66%</span>
                        </div>
                        <p className="text-xs text-primary/60">March 2019</p>
                    </div>
                </div>
            </div>
        </div>
    )
}