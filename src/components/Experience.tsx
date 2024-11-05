import { CheckCircle } from "lucide-react";
import exData from "../data/experience.json";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Experience = () => {
  return (
    <div className="py-9">
      <h1 className="text-4xl sm:text-6xl font-bold">
        Experience<span className="text-purple-600">.</span>
      </h1>
      {exData.map((exp, idx) => (
        <div className="ex flex items-start" key={idx}>
          <Accordion type="single" collapsible className="text-left">
            <AccordionItem value={exp.company}>
              <AccordionTrigger className="text-start ">
                <div className="flex flex-col ">
                  <h1 className="text-2xl font-semibold">{exp.company} <span className="text-sm font-normal">({exp.range})</span></h1>
                  <p>{exp.address}</p>
                  <h2>{exp.position}</h2>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <h1 className="font-semibold text-lg">{exp.desc}</h1>
                {exp.works.map((item, idx) => (
                  <div key={idx} className="works flex gap-2 p-2 text-lg">
                    <CheckCircle />
                    {item}
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      ))}
    </div>
  );
};

export default Experience;
