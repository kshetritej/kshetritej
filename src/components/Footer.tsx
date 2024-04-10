import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <div className="flex flex-col ">
      <div className="group-1 flex sm:flex-row flex-col items-center sm:justify-between">
        <div className="links flex gap-2 font-semibold">
          {/* <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/projects"}>Projects</Link>
          <Link to={"/contact"}>Contact</Link> */}
        </div>

        <div className="socials flex gap-3 py-3">
          <a href="https://x.com/kshetritej_" target="_blank">
            <Twitter />
          </a>
          <a href="https://github.com/kshetritej" target="_blank">
            <Github />
          </a>
          <a href="https://linkedin.com/in/kshetritej" target="_blank">
            <Linkedin />
          </a>
        </div>
      </div>

      <div className="group2">
        <div className="cta ">
          <h1 className="text-2xl text-center sm:text-start font-semibold py-2">
            Interested in working together
            <span className="text-purple-600">?</span>
          </h1>
          <div className="cta-btns flex gap-2 sm:justify-start justify-center pb-4">
            <Link to={"/contact"}>
              <Button variant={"default"}>Get in touch</Button>
            </Link>
            <Link to={"/projects"}>
              <Button variant={"outline"}>Browse Projects</Button>
            </Link>
          </div>
        </div>
        <div className="copyright py-6 flex flex-col items-center">
          <h1 className="py-2">
             Design  ©  {" "}  
            <a href="https://purplefolio.framer.website/" target="_blank">
              <Button className="p-0" variant={'link'}> Luca Da Corte</Button>
            </a>
          </h1>
          <h1 className="text-center">
            kshetritej © {new Date().getFullYear()}. Copying the code will cost
            you a github follow :) 
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
