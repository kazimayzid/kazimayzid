import Container from "../container/Container";
import { Moon, Sun } from "lucide-react";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";

export default function Navbar({ dark, setDark }) {
  return (
    <>
      <Container>
        <div
          id="navbar"
          data-aos="fade-up"
          className="flex justify-between items-center pt-[30px] sticky z-40 top-0"
        >
          <div>
            <a href="#" className="font-normal text-[32px] text-navtext">
              <img src={logo} alt="Logo" className="w-[200px] h-[40px]" />
            </a>
          </div>

          <div className="flex gap-x-[50px] font-inter font-medium text-lg text-navtext border-[1px] border-borderColor rounded-full px-1 py-1">
            <Link
              to="navbar"
              smooth={true}
              duration={500}
              className="hover:border-hoverColor hover:border-[.5px] border-transparent border-[.5px] duration-200 rounded-full px-4 cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              offset={-80}
              className="hover:border-hoverColor hover:border-[.5px] border-transparent border-[.5px] duration-200 rounded-full px-4 cursor-pointer"
            >
              About
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-80}
              className="hover:border-hoverColor hover:border-[.5px] border-transparent border-[.5px] duration-200 rounded-full px-4 cursor-pointer"
            >
              Projects
            </Link>
            <Link
              to="services"
              smooth={true}
              duration={500}
              offset={-80}
              className="hover:border-hoverColor hover:border-[.5px] border-transparent border-[.5px] duration-200 rounded-full px-4 cursor-pointer"
            >
              Services
            </Link>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              offset={-80}
              className="hover:border-hoverColor hover:border-[.5px] border-transparent border-[.5px] duration-200 rounded-full px-4 cursor-pointer"
            >
              Skills
            </Link>
          </div>

          <div className="flex justify-center items-center gap-x-2">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-80}
              className="flex gap-x-[50px] font-inter font-medium text-lg text-navtext border-[1px] border-borderColor hover:border-hoverColor px-[26px] py-[5px] rounded-[10px] cursor-pointer hover:bg-hoverColor duration-500"
            >
              Contact
            </Link>
            <div className="flex items-center gap-2">
              <span className="text-sm text-navtext hidden sm:block">
                {dark ? "Light" : "Dark"}
              </span>
              <button
                onClick={() => setDark(!dark)}
                className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-navtext hover:bg-gray-300 dark:hover:bg-gray-700 transition-all duration-200 border border-borderColor "
                aria-label={`Switch to ${dark ? "light" : "dark"} mode`}
                title={`Switch to ${dark ? "light" : "dark"} mode`}
              >
                {dark ? (
                  <Sun size={20} className="text-yellow-500" />
                ) : (
                  <Moon size={20} className="text-blue-600" />
                )}
              </button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
