import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  const profileImage = "https://avatars.githubusercontent.com/u/117927375?v=4";
  return (
    <div className="py-9 flex flex-col items-center sm:flex-row ">
      <div className="left sm:w-[50%]">
        <h3 className="text-thin text-gray-600 dark:text-gray-300 text-2xl">
          Hey, I'm Tej 👋
        </h3>
        <h1 className="text-6xl sm:text-8xl font-extrabold">
          <span className="text-purple-600">Full</span>stack
          <br /> Developer
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 pt-6">
          I am a fullstack web developer still in learning, I build beautiful and
          functional webapps that users will love.
        </p>
        <div className="buttons py-3 flex gap-5 ">
          <a href={"https://linkedin.com/in/kshetritej"} target="_blank">
            <Button variant={"default"}>Get in touch</Button>
          </a>
          <Link to={"/projects"}>
            <Button variant={"outline"}>Browse Projects</Button>
          </Link>
        </div>
      </div>

      <div className="right flex sm:w-[50%] justify-center py-10">
        <div className="border-2 border-purple-500 p-4 rounded-full image-wrapper">
          <img
          
            src={profileImage}
            alt="Tej"
            className="rounded-full sm:w-80 sm:h-80 w-48 h-48"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
