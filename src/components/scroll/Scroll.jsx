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

const logos = [
  figma,
  html,
  css,
  js,
  tailwindcss,
  bootStrap,
  react,
  nextJs,
  redux,
  git,
  gitHub,
  nodejs,
  expressjs,
  mongodb,
];

export default function Scroll({ dark }) {
  const gradient = dark ? "#1A1A1A" : "#E0E8F6";
  return (
    <Container>
      <div data-aos="fade-up" className="pb-20">
        <div className="text-center mb-8">
          <h1 className="font-inter font-extrabold text-[45px] text-headingColor">
            My Skills
          </h1>
        </div>
        <Marquee
          gradientWidth={400}
          gradientColor={gradient}
          pauseOnClick="true"
          gradient="true"
        >
          {logos.map((logo, idx) => (
            <img
              key={idx}
              src={logo}
              alt="tech logo"
              className="mx-4 h-16 w-auto"
            />
          ))}
        </Marquee>
      </div>
    </Container>
  );
}
