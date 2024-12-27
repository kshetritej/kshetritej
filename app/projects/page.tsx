import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ProjectCard } from "./project-card";

export default function Projects() {
    return (
        <div className="flex flex-col items-center justify-center  p-8">
            <Link className="flex" href={'/'}>
                <Button variant={'link'}>
                   <span className="text-green-600">(main)</span> projects $ cd /home <span className="animate animate-pulse">|</span> 
                </Button>
            </Link>
            <h1 className="text-3xl font-bold">Projects<span className="text-orange-600">.</span></h1>
            <div className="container p-4">
                <ProjectCard/>
            </div>
        </div>
    )
}