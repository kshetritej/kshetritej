import { Badge } from "@/components/ui/badge";
import { Dot, Github, Linkedin, MapPin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

import { skills } from "./(data)/skills";
import { SkillCard } from "@/components/skill-card";
import { ModeToggle } from "@/components/mode-toggle";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-4 row-start-2 items-center">
        <Badge className="rounded-full " variant={'success'}> Pokhara, Nepal </Badge>
        <h1 className="font-bold text-5xl uppercase">Tej Kshetri</h1>
        <p className="list-inside list-decimal text-sm text-center sm:text-left ">
          Fullstack Web Developer.
        </p>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://github.com/kshetritej/"
            target="_blank"
          >
            <Github />
            GitHub
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="/"
            target="_blank"
          >
            Projects
          </a>
        </div>
        <div className="flex gap-4 items-center p-4">
          {
            skills.map((skill, index) => (
              <div key={index}>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <SkillCard skill={skill} />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{skill.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>

            ))
          }
        </div>

      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://x.com/kshetritej_"
          target="_blank"
        >
          <Image
            width={20}
            height={20}
            alt="X"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/twitter/twitter-original.svg" />
          @kshetritej_
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/kshetritej/"
          target="_blank"
        >
          <Image
            width={20}
            height={20}
            alt="Linkedin"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" />
          kshetritej
        </a>
        <ModeToggle />
      </footer>
    </div>
  );
}
