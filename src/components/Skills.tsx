import { Bricolage_Grotesque } from "next/font/google";
import { Database } from "lucide-react";
import Reveal from "./reveal";
import Marquee from "./marquee";
import { skillRows } from "@/lib/skills";

const font = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export default function Skills() {
  return (
    <div className="flex flex-col items-center p-5 mt-10 w-full">
      <Reveal>
        <h1 className={`${font.className} font-semibold text-3xl`}>Tech Stack</h1>
      </Reveal>
      <Reveal delayMs={80}>
        <p className="text-primary/70 text-sm text-center max-w-md mt-2">
          Languages, frameworks, and tools I use to ship full-stack products.
        </p>
      </Reveal>
      <div className="w-full mt-8 flex flex-col gap-5">
        {skillRows.map((row, i) => (
          <Reveal key={row.label} delayMs={120 + i * 80} className="w-full">
            <Marquee reverse={i % 2 === 1} durationMs={32000 + i * 6000}>
              {row.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-2 shrink-0 rounded-full border border-border/50 bg-background/60 backdrop-blur-sm px-4 py-2 transition-colors duration-300 hover:cursor-default hover:border-primary/40 hover:bg-primary/5"
                >
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white shrink-0 p-1">
                    {skill.icon ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={skill.icon} alt={skill.name} width={16} height={16} loading="lazy" />
                    ) : (
                      <Database className="w-3.5 h-3.5 text-slate-700" />
                    )}
                  </span>
                  <span className="text-sm font-medium text-primary/80 whitespace-nowrap">{skill.name}</span>
                </div>
              ))}
            </Marquee>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
