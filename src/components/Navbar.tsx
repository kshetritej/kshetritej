import { ModeToggle } from "./mode-toggle";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navLinks = ['Home', 'About', 'Projects'];
  return (
    <div className="sm:container p-2 flex justify-between">
      <div className="logo text-4xl font-bold">tj.</div>
      <div className="navlinks">
        <ul className="sm:flex gap-4 font-semibold text-xl hidden">
          {navLinks.map((link) => (
            <Link className="hover:text-purple-600" to={`/${link.toLowerCase()}`}>{link}</Link>
          ))}
        </ul>
      </div>
      <div className="get-in-touch flex gap-3 text-sm">
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
