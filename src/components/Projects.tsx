import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

import projectData from "../data/projects.json";
import { Button } from "./ui/button";
import { Code2, Globe, CircleDotDashed, CircleDot } from "lucide-react";
const Projects = () => {
  return (
    <div className="py-9 flex flex-col">
      <h1 className="pb-4 text-4xl sm:text-6xl font-bold">
        Projects<span className="text-purple-600">.</span>
      </h1>
      <div className="flex gap-3 justify-start flex-wrap">
        {projectData.map((project, idx) => (
          <Card className="w-[345px] static">
            <CardHeader key={idx}>
              <CardTitle className="flex justify-between">
                {project.name}
                <p className="text-sm">
                  <Badge>{project.project_type}</Badge>
                </p>
              </CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="py-4">
              {project.tech_stack.map((item, idx) => (
                <Badge variant={"secondary"} className=" mr-1" key={idx}>
                  {item}
                </Badge>
              ))}
              <br />{" "}
              <Badge variant={"outline"} className="mt-3 mr-1" key={1}>
                {project.status !== "completed" ? (
                  <CircleDotDashed className="mr-2" />
                ) : (
                  <CircleDot className="mr-2" />
                )}

                {project.status}
              </Badge>
            </CardContent>
            <CardFooter className="relative bottom-2">
              <div className="flex gap-2">
                <a href={project.live_link} target="_blank">
                  <Button
                    variant="default"
                    disabled={!project.live_link}
                    size={"sm"}
                  >
                    View Live{" "}
                    <span className="p-2">
                      <Globe />
                    </span>
                  </Button>
                </a>
                <a href={project.github_link} target="_blank">
                  <Button variant="outline" size={"sm"}>
                    View Code{" "}
                    <span className="p-2">
                      <Code2 />
                    </span>
                  </Button>
                </a>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;
