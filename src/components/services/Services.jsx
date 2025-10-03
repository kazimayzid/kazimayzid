import Container from "../container/Container";
import frontend from "../../assets/frontEnd.png";
import webDev from "../../assets/web-development.png";
import backEnd from "../../assets/backend.png";
import dataBase from "../../assets/database.png";
export default function Services({ dark }) {
  const serviceData = [
    {
      img: webDev,
      heading: "Web Application Development",
      details:
        "I offer custom web application development using the MERN stack (MongoDB, Express, React, Node.js). I build secure, scalable, and feature-rich applications tailored to your business needs. From planning to deployment, I ensure clean code, seamless functionality, and responsive design for a smooth user experience on all devices.",
      animation: "fade-down",
      duration: 1000,
    },
    {
      img: frontend,
      heading: "Frontend Development",
      details:
        "I provide professional frontend development services using modern technologies like React, Tailwind CSS, and Bootstrap. I create clean, responsive, and user-friendly interfaces that adapt to all devices. My focus is on speed, usability, and design consistency to ensure a smooth user experience across web applications and websites.",
      animation: "fade-up",
      duration: 1400,
    },
    {
      img: backEnd,
      heading: "Backend Development",
      details:
        "I provide backend development services using Node.js and Express to build secure, fast, and scalable server-side applications. My services include RESTful API development, authentication, database integration with MongoDB, and performance optimization. I ensure reliable backend systems that power your web applications and deliver a seamless user experience.",
      animation: "fade-down",
      duration: 1800,
    },
    {
      img: dataBase,
      heading: "Database Management",
      details:
        "I provide professional database management services using MongoDB. From designing and structuring databases to integrating them with applications, I ensure data security, scalability, and optimized performance. My services include CRUD operations, indexing, aggregation, and backups to keep your application running smoothly with reliable and well-organized data handling.",
      animation: "fade-up",
      duration: 2200,
    },
  ];
  return (
    <>
      <Container>
        <div id="services" className="pt-[100px]">
          <div className="text-center">
            <h1 className="font-inter font-extrabold text-[45px] text-headingColor">
              What I do
            </h1>
            <span
              className={`${
                dark ? "text-gradient-white" : "text-gradient"
              } font-poppins font-semibold text-[14px] mb-[40px]`}
            >
              My Services
            </span>
          </div>
          <div className="mt-10 flex gap-x-5 duration-500">
            {serviceData.map((item, i) => (
              <div
                data-aos={item.animation}
                data-aos-duration={item.duration}
                key={i}
                className=" p-6 flex flex-col items-center text-center rounded-[20px] border-2 border-[var(--color-borderColor)]
             bg-white dark:bg-[var(--color-bg)] overflow-hidden cursor-pointer group transition-shadow duration-300
             hover:shadow-xl"
              >
                <div className="relative z-10 flex flex-col items-center">
                  <img
                    src={item.img}
                    alt={item.heading}
                    className=" mb-5 group-hover:scale-115 duration-300"
                  />
                  <h1 className="font-inter font-extrabold text-[var(--color-headingColor)] text-2xl md:text-[25px] mb-2">
                    {item.heading}
                  </h1>

                  <div className="w-full h-[1px] bg-[var(--color-borderColor)] my-4"></div>

                  <p className="font-poppins text-[var(--color-detailsColor)] text-base md:text-[16px]">
                    {item.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}
