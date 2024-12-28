import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Globe } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Project } from "../(types)";

export function ProjectCard({ project }: { project: Project }) {
    return (
        <Card className="flex justify-between p-4 shadow-md hover:-translate-y-2 transition delay-100 duration-300 ease-in-out ">
            <div className="flex flex-col ">
                <CardHeader>
                    <CardTitle>{project.name}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <div className="p-4">
                    {
                        project.topics.map((topic, index) => {
                            return <Badge className="m-1" key={index}>{topic}</Badge>
                        })
                    }
                </div>
                <CardFooter className="gap-4">
                    {
                        project.live_url ?
                            <Button className="rounded-full"><Globe /> <a target="_blank" href={project?.live_url}>View Live</a></Button> :
                            <Button className="bg-gray-500 hover:bg-gray-500 rounded-full"><Globe /> View Live </Button>
                    }
                    <Button variant={'outline'} className="rounded-full"><Code /><a href={project.github_url} target="_blank"></a>Github</Button>
                </CardFooter>
            </div>
        </Card>
    )
}