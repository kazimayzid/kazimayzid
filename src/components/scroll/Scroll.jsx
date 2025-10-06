import Container from "../container/Container";
import Marquee from "react-fast-marquee";

import css from "../../assets/css.svg";
import html from "../../assets/html.svg";
import figma from "../../assets/figma.svg";
import js from "../../assets/js.svg";
import tailwindcss from "../../assets/tailwind-css.svg";
import bootStrap from "../../assets/bootstrap.svg";
import react from "../../assets/react.svg";
import nextJs from "../../assets/nextjs.svg";
import redux from "../../assets/redux.svg";
import git from "../../assets/git.svg";
import gitHub from "../../assets/github.svg";
import nodejs from "../../assets/nodejs.svg";
import expressjs from "../../assets/express-js.svg";
import mongodb from "../../assets/mongodb.png";
import { useEffect, useState } from "react";

const logos = [
  { icon: figma, title: "Figma" },
  { icon: html, title: "Html" },
  { icon: css, title: "CSS" },
  { icon: js, title: "Js" },
  { icon: tailwindcss, title: "TailwindCss" },
  { icon: bootStrap, title: "BootStrap" },
  { icon: react, title: "React" },
  { icon: nextJs, title: "NextJs" },
  { icon: redux, title: "Redux" },
  { icon: git, title: "Git" },
  { icon: gitHub, title: "GitHub" },
  { icon: nodejs, title: "Nodejs" },
  { icon: expressjs, title: "Expressjs" },
  { icon: mongodb, title: "Mongodb" },
];

export default function Scroll({ dark }) {
  const gradient = dark ? "#1A1A1A" : "#E0E8F6";

  const [gradientWidth, setGradientWidth] = useState(
    window.innerWidth < 640 ? 20 : 400
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setGradientWidth(20); 
      } else {
        setGradientWidth(400); 
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  return (
    <div id="skills" className="w-full overflow-hidden">
      <Container>
        <div data-aos="fade-up" className="w-full">
          <div className="text-center mb-20">
            <h1 className="font-inter font-extrabold text-[28px] md:text-[45px] text-headingColor">
              My Skills
            </h1>
          </div>
          <Marquee
            gradientWidth={gradientWidth}
            gradientColor={gradient}
            pauseOnClick={true}
            gradient={true}
            className="overflow-hidden"
          >
            {logos.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center gap-y-4 will-change-transform py-5 group"
              >
                <img
                  src={item.icon}
                  alt="tech logo"
                  className="mx-4 h-16 w-auto group-hover:scale-115 transition-transform duration-300"
                />
                <p className="font-poppins text-detailsColor text-[12px] border-[1px] border-borderColor px-2 rounded-full group-hover:bg-bghover group-hover:text-bg">
                  {item.title}
                </p>
              </div>
            ))}
          </Marquee>
        </div>
      </Container>
    </div>
  );
}