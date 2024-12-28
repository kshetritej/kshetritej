import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ProjectCard } from "./project-card";
import { contributins, projects } from "../(data)/projetcs";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";

export default function Projects() {
    return (
        <div className="flex flex-col items-center justify-center  p-8">
            <Link className="flex" href={'/'}>
                <Button variant={'link'}>
                    <span className="text-green-600">(main)</span> projects $ cd /home <span className="animate animate-pulse">|</span>
                </Button>
            </Link>
            <h1 className="text-3xl font-bold">Projects<span className="text-orange-600">.</span></h1>
            <div className="container p-4 grid  sm:grid-cols-2 md:grid-cols-3   gap-4">
                {
                    projects.map((project, index) => {
                        return (
                            <ProjectCard project={project} key={index} />
                        )
                    })
                }
            </div>

            <h2 className="text-2xl font-bold" >
                Contributions<span className="text-orange-600">.</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-8 items-center">
                {
                    contributins.map((contribution, idx) => {
                        return (
                            <Link className="m-2" href={contribution} target="_blank" key={idx}>
                                <Badge className="rounded-full flex items-center gap-2"><ArrowUpRight /> {contribution}</Badge>
                            </Link>
                        )
                    })
                }
            </div>
        </div >
    )
}