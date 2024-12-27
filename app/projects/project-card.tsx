import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Globe } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export function ProjectCard() {
    return (
        <Card className="flex justify-between p-4 shadow-md">
            <div className="flex flex-col ">
                <CardHeader>
                    <CardTitle>Project Title</CardTitle>
                    <CardDescription>Project Description</CardDescription>
                </CardHeader>
                <div className="p-4">
                    <Badge variant={'outline'}>Typescript</Badge>
                </div>
                <CardFooter className="gap-4">
                    <Button className="rounded-full"><Globe /> View Live</Button>
                    <Button variant={'outline'} className="rounded-full"><Code /> Github</Button>
                </CardFooter>
            </div>
            <div className="">
                <Image
                    width={300}
                    height={300}
                    alt="Project Image"
                    src={"https://i.pinimg.com/736x/c4/80/04/c480049708af2cb85c91d8fa043fe9b2.jpg"}
                />
            </div>
        </Card>
    )
}