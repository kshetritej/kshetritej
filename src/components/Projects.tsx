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
    <div>
      <h1 className="text-4xl sm:text-6xl font-bold">
        Projects<span className="text-purple-600">.</span>
      </h1>
      
      <Card>
        <CardHeader>
          <CardTitle className="flex justify-between">{projectData[0].name}
          <p className="text-sm"><Badge>{projectData[0].project_type}</Badge></p></CardTitle>
          <CardDescription>{projectData[0].description}</CardDescription>
        </CardHeader>
        <CardContent className="py-4">
          {projectData[0].tech_stack.map((item, idx) => (
            <Badge variant={"secondary"} className=" mr-1" key={idx}>
              {item}
            </Badge>
          ))}
 <br />         <Badge variant={"outline"} className="mt-3 mr-1" key={1}>
            {projectData[0].status !== "completed" ? <CircleDotDashed className="mr-2" /> :<CircleDot />}
            
            {projectData[0].status}
          </Badge>
        </CardContent>
        <CardFooter>
          <div className="flex gap-2">
            <a href={projectData[0].live_link} target="_blank">
              <Button
                variant="default"
                disabled={!projectData[0].live_link}
                size={"sm"}
              >
                View Live{" "}
                <span className="p-2">
                  <Globe />
                </span>
              </Button>
            </a>
            <a href={projectData[0].github_link} target="_blank">
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
    </div>
  );
};

export default Projects;
