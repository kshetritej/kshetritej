import { ModeToggle } from "./mode-toggle";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const navLinks: String[] = ["Home", "About", "Projects"];
  return (
    <div className="flex justify-between py-3">
      <div className="logo sm:text-4xl text-2xl font-bold">tj.</div>
      <div className="navlinks">
        <ul className="sm:flex gap-4 font-semibold text-xl hidden">
          {navLinks.map((item, idx) => (
            <li key={idx}>
              <Link
                className="hover:text-purple-600"
                to={`/${item.toLowerCase()}`}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="get-in-touch flex gap-3 text-sm">
        <ModeToggle />
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button className="sm:hidden" size={"icon"} variant={"ghost"}>
              <Menu />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <Link to="/">Home</Link>
            </DropdownMenuItem>{" "}
            <DropdownMenuItem>
              <Link to={"/about"}>About</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link to="/projects">Projects</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link to="/contact">Get in touch</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Navbar;
