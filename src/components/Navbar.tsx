import { ModeToggle } from "./mode-toggle";
import { Link } from "react-router-dom";
import { NavSheet } from "./sheet";

export const navLinks: String[] = ["Home", "About", "Projects"];

const Navbar = () => {
  return (
    <div className="flex justify-between py-3">
      <div className="logo sm:text-4xl text-2xl font-bold">
        <Link to={"/"}>tj.</Link>
      </div>
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
      <div className="get-in-touch flex gap-3 items-center text-sm">
        <ModeToggle />
        <div className="sm:hidden">
          <NavSheet />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
