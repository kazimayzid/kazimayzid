import { useEffect } from "react";
import Container from "../container/Container";

export default function About({dark}) {
   useEffect(() => {
    document.title = "About";
  }, []);
  return (
    <>
      <Container>
        <div
        id="about"
          data-aos="fade-up"
          className="flex flex-col w-screen md:w-full items-center md:mt-[95px] pb-[110px]"
        >
          <h1 className="font-inter font-extrabold text-[28px] md:text-[45px] text-headingColor">
            About Me
          </h1>
          <p className={`${dark ? "text-gradient-white" : "text-gradient"} font-poppins font-semibold text-[14px] mb-[40px]`}>
            Get to know me
          </p>
          <div className="flex flex-col justify-center items-center">
            <span className="font-inter font-medium text-[14px] md:text-[17px] leading-[25px] sm:leading-[30px] text-detailsColor text-center max-w-[90%] sm:max-w-[790px]">
              I’m Kazi Mayzid, a passionate MERN Stack Developer focused on
              building modern, responsive, and scalable web applications.
              Skilled in MongoDB, Express.js, React.js, and Node.js, I enjoy
              working across the full stack to deliver seamless digital
              experiences.
            </span>
            <span className="font-inter font-medium text-[14px] md:text-[17px] leading-[25px] sm:leading-[30px] text-detailsColor text-center max-w-[90%] sm:max-w-[790px] my-1">
              On the front end, I create clean, interactive interfaces with
              React, often styled using TailwindCSS and managed with Redux. On
              the back end, I rely on Node.js and Express.js to develop robust
              APIs, handle authentication, and ensure efficient server
              performance. With MongoDB, I design flexible and scalable
              databases to keep applications fast and reliable.
            </span>

            <span className="font-inter font-medium text-[14px] md:text-[17px] leading-[25px] sm:leading-[30px] text-detailsColor text-center max-w-[90%] sm:max-w-[790px]">
              I’ve worked on projects like e-commerce sites, real-time chat
              apps, and portfolio platforms, which sharpened my skills in
              authentication, deployment, and system design. Beyond coding, I
              value problem-solving, teamwork, and continuous learning. My
              ultimate goal is to create impactful solutions that combine
              creativity, functionality, and performance.
            </span>
          </div>
          <div>
            <button className=" font-inter font-medium text-[15px] text-navtext border-borderColor px-[18px] py-[13px] border-[.5px] cursor-pointer mt-[40px] rounded-full hover:bg-hoverColor duration-300">
              Download Resume
            </button>
          </div>
        </div>
      </Container>
    </>
  );
}
