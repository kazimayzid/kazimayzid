import Container from "../container/Container";
import { Moon, Sun } from "lucide-react";
import logo from "../../assets/logo.png"
export default function Navbar({ dark, setDark }) {
  return (
    <>
      <Container>
        <div
          data-aos="fade-up"
          className="flex justify-between items-center pt-[30px] "
        >
          <div>
            <a href="#" className="font-normal text-[32px] text-navtext">
              <img src={logo} alt="#"  className="w-[200px] h-[40px]"/>
            </a>
          </div>
          <div className="flex gap-x-[50px] font-inter font-medium text-lg text-navtext border-[1px] border-borderColor rounded-full px-1 py-1">
            <a
              href="#"
              className="hover:border-hoverColor hover:border-[.5px] border-transparent border-[.5px] duration-200 rounded-full px-4"
            >
              Home
            </a>
            <a
              href="#"
              className="hover:border-hoverColor hover:border-[.5px] border-transparent border-[.5px] duration-200 rounded-full px-4"
            >
              About
            </a>
            <a
              href="#"
              className="hover:border-hoverColor hover:border-[.5px] border-transparent border-[.5px] duration-200 rounded-full px-4"
            >
              Projects
            </a>
            <a
              href="#"
              className="hover:border-hoverColor hover:border-[.5px] border-transparent border-[.5px] duration-200 rounded-full px-4"
            >
              Services
            </a>
            <a
              href="#"
              className="hover:border-hoverColor hover:border-[.5px] border-transparent border-[.5px] duration-200 rounded-full px-4"
            >
              Resume
            </a>
          </div>
          <div className="flex justify-center items-center gap-x-2">
            <button className="flex gap-x-[50px] font-inter font-medium text-lg text-navtext border-[1px] border-borderColor hover:border-hoverColor px-[26px] py-[5px] rounded-[10px] cursor-pointer hover:bg-hoverColor duration-500">
              Contact
            </button>
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
