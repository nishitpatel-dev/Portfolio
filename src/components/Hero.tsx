import Image from "next/image";
import { File, GithubIcon, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { Bricolage_Grotesque } from "next/font/google";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { AuroraText } from "@/components/magicui/aurora-text";
import { ModeToggle } from "./mode-toggle";

const font = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export default function HeroSection() {
  return (
    <div className="pt-12 w-full flex flex-col md:flex-row gap-6 md:gap-8 md:justify-between md:items-center relative">
      <div className="flex justify-center md:hidden">
        <Image
          src="/FinalMe.png"
          height={120}
          width={120}
          alt="Nishit Profile Pic"
          className="rounded-full border shadow-xl"
        />
      </div>
      <div className="text-center md:text-left px-4 md:px-0 max-w-2xl">
        <h1 className={`text-2xl md:text-3xl font-medium`}>Hey there,</h1>
        <h1 className={`text-4xl md:text-5xl font-semibold`}>
          I&apos;m{" "}
          <span className={`${font.className} font-black`}>
            <AuroraText colors={["cyan", "cyan"]}>Nishit</AuroraText>
          </span>
        </h1>
        <p className="text-primary/70 py-3 text-md">
          An independent and self-motivated hardworking individual dedicated
          towards goals.
        </p>
        <div className="flex flex-wrap gap-3 mt-2 justify-center md:justify-start items-center">
          <Link href="mailto:nishitpatel.dev@gmail.com">
            <RainbowButton>
              <Mail className="mr-2 h-4 w-4" /> Get in touch
            </RainbowButton>
          </Link>
          <Link
            href={
              "https://drive.google.com/file/d/11xEHryYYbu1tjmJRWktjMEdm7ZRjlPxS/view?usp=drive_link"
            }
            target="_blank"
          >
            <RainbowButton variant="outline">
              <File className="mr-2 h-4 w-4" />
              My Resume
            </RainbowButton>
          </Link>
        </div>
        <div className="flex flex-wrap gap-3 mt-3 justify-center md:justify-start items-center">
          <Link href={"https://x.com/iam_nishitp"} target="_blank">
            <div className="border p-2 rounded-full shadow-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="currentColor"
                className="bi bi-twitter-x"
                viewBox="0 0 16 16"
              >
                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
              </svg>
            </div>
          </Link>
          <Link href={"https://leetcode.com/u/Nishit27/"} target="_blank">
            <div className="border p-2 rounded-full shadow-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0z" />
              </svg>
            </div>
          </Link>
          <Link href="https://github.com/nishitpatel-dev" target="_blank">
            <div className="border p-2 rounded-full shadow-sm">
              <GithubIcon size={15} />
            </div>
          </Link>
          <Link
            href={"https://www.linkedin.com/in/nishitpatel-dev/"}
            target="_blank"
          >
            <div className="border p-2 rounded-full shadow-sm">
              <Linkedin size={15} />
            </div>
          </Link>
        </div>
      </div>
      <div className="hidden h-full md:block">
        <Image
          src={"/FinalMe.png"}
          height={500}
          width={500}
          alt="Nishit's image"
          className="rounded-full border shadow-xl"
        />
      </div>
    </div>
  );
}
