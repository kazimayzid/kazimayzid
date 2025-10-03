import Container from "../container/Container";
import { Menu, Moon, Sun, X } from "lucide-react";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";
import { useState } from "react";
import { Github, Linkedin } from "lucide-react";
export default function Navbar({ dark, setDark }) {
  const [show, setShow] = useState(false);
  const navLinks = ["About", "Projects", "Services", "Skills"];

  const links = [
    {
      icon: Github,
      link: "https://github.com/kazimayzid",
    },
    {
      icon: Linkedin,
      link: "https://www.linkedin.com/in/kazi-mayzid-46903733b",
    },
  ];

  return (
    <div>
      <header className="hidden md:block fixed w-full top-0 z-50 bg-bg  shadow-md transition-colors duration-300">
        <Container>
          <div className="flex justify-between items-center py-4">
            <div className="flex-shrink-0">
              <a href="#">
                <img src={logo} alt="Logo" className="w-[180px] h-auto" />
              </a>
            </div>

            <nav className="hidden md:flex items-center gap-6 font-medium text-navtext ">
              {navLinks.map((section) => (
                <Link
                  key={section}
                  to={section.toLowerCase()}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="relative px-3 py-1 cursor-pointer group transition-all"
                >
                  <span className="relative z-10">{section}</span>
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-hoverColor transition-all group-hover:w-full"></span>
                </Link>
              ))}
            </nav>
            <div className="flex items-center gap-4">
              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-80}
                className="px-5 py-2 rounded-lg border border-borderColor  bg-bg font-medium hover:bg-hoverColor text-navtext hover:text-navtext transition-all duration-300 cursor-pointer"
              >
                Contact
              </Link>

              <button
                onClick={() => setDark(!dark)}
                className="p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
                aria-label={`Switch to ${dark ? "light" : "dark"} mode`}
                title={`Switch to ${dark ? "light" : "dark"} mode`}
              >
                {dark ? (
                  <Sun size={20} className="text-yellow-400" />
                ) : (
                  <Moon size={20} className="text-blue-500" />
                )}
              </button>
            </div>
          </div>
        </Container>
      </header>
      <div className="md:hidden py-4 px-1 fixed w-full top-0 z-50 bg-bg  shadow-md transition-colors duration-300">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <a href="#">
              <img src={logo} alt="Logo" className="w-[120px] h-auto" />
            </a>
          </div>
          <div className=" flex items-center gap-x-2">
            <button
              onClick={() => setDark(!dark)}
              className="p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
              aria-label={`Switch to ${dark ? "light" : "dark"} mode`}
              title={`Switch to ${dark ? "light" : "dark"} mode`}
            >
              {dark ? (
                <Sun size={20} className="text-yellow-400" />
              ) : (
                <Moon size={20} className="text-blue-500" />
              )}
            </button>
            {show ? (
              <X size={35} onClick={() => setShow(!show)} className="text-headingColor" />
            ) : (
              <Menu
              size={35}
                onClick={() => setShow(!show)}
                className="text-headingColor"
              />
            )}
          </div>
        </div>
      </div>
      {show && (
        <div className=" fixed py-5 px-10 ml-auto top-0 z-50 bg-bg  shadow-md transition-colors duration-300 flex flex-col items-center  mt-15 backdrop-blur-md text-3xl w-full text-detailsColor">
          {navLinks.map((section) => (
            <Link
              key={section}
              to={section.toLowerCase()}
              smooth={true}
              duration={500}
              offset={-80}
              className="relative mt-3 px-3 py-1 cursor-pointer group transition-all"
            >
              <span onClick={() => setShow(!show)} className="relative z-10">
                {section}
              </span>
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-hoverColor transition-all group-hover:w-full"></span>
            </Link>
          ))}
          <div className="flex gap-4 mt-5">
            {links.map((item, i) => {
              const Icon = item.icon;
              return (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-headingColor hover:text-bg border-[1px] border-hoverColor p-2 rounded-full hover:bg-bghover duration-300"
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
          <div className="flex items-center gap-4">
            <Link
             onClick={() => setShow(!show)}
              to="contact"
              smooth={true}
              duration={500}
              offset={-80}
              className="px-5 py-2 rounded-lg border border-borderColor  bg-bg font-medium hover:bg-hoverColor text-detailsColor hover:text-navtext transition-all duration-300 cursor-pointer mt-5"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
