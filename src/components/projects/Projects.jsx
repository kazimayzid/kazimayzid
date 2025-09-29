import Particles from "../../ui/Particles";
import Container from "../container/Container";
import chatApp from "../../assets/chattingApp.png";
import innovate from "../../assets/innovate.png"
import petroil from "../../assets/petroil.png"
import finsweet from "../../assets/finsweet.png"
import { Github, Link } from "lucide-react";
export default function Projects({ dark }) {
  const projects = [
    {
      title: "A chatting application",
      desc: "A chatting application with many features like send friend request, accept or reject friend request, make friends and also block your friends. You can create group, add friends to your group, remove member.",
      gitlink: "https://github.com/kazimayzid/Chatting-app",
      livelink: "https://chatting-app-nine-mu.vercel.app/",
      img: chatApp,
      tags: ["React", "Tailwind", "Firebase", "Redux", "Motion"],
    },
    {
      title: "Innovate",
      desc: "",
      gitlink: "https://github.com/kazimayzid/innovate-by-react-",
      livelink: "https://innovate-by-react.vercel.app/",
      img: innovate,
      tags: ["React", "Tailwind"],
    },
    {
      title: "Petroil",
      desc: "",
      gitlink: "https://github.com/kazimayzid/Petroil-",
      livelink: "https://petroil-tau.vercel.app/",
      img: petroil,
      tags: ["React", "Tailwind", "Redux"],
    },
    {
      title: "Finsweet",
      desc: "",
      gitlink: "https://github.com/kazimayzid/finsweet",
      livelink: "https://finsweet-ashen-sigma.vercel.app/",
      img: finsweet,
      tags: ["React", "Tailwind"],
    },
  ];
  return (
    <>
      <div className="relative w-full h-[1400px]">
        <div className="absolute inset-0 z-0 bg-transparent">
          <Particles
            particleColors={["#524453", "#54578585"]}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>

        <div className="absolute inset-0 z-10 bg-transparent">
          <Container>
            <div className="text-center">
              <h1 className="font-inter font-extrabold text-[45px] text-headingColor">
                Projects
              </h1>
              <p
                className={`${
                  dark ? "text-gradient-white" : "text-gradient"
                } font-poppins font-semibold text-[14px] mb-[40px]`}
              >
                Some of my Work
              </p>
            </div>
            {
                projects.map((item, i) => (
                    <div key={i} className="flex gap-x-[50px] mt-30 items-center justify-center">
              <div className="w-[35%] h-[200px] rounded-[10px] overflow-hidden cursor-pointer">
                <img
                  className="w-full h-full object-cover rounded-xl object-center 
               transform transition duration-300 hover:scale-105"
                  src={item.img}
                  alt="#"
                />
              </div>
              <div className="w-[65%]">
                <h1 className="font-inter font-bold text-navtext text-[30px]">
                  {item.title}
                </h1>
                <p className="font-poppins font-normal text-detailsColor mt-5">
                  {item.desc}
                </p>
                <div className="mt-5 flex gap-x-7 items-center ">
                  <div className="flex items-center gap-x-3">
                    <a href={item.livelink}>
                      <Link className="text-navtext hover:text-headingColor duration-300 cursor-pointer" />
                    </a>
                    <a href={item.gitlink}>
                      <Github className="text-navtext hover:text-headingColor duration-300 cursor-pointer" />
                    </a>
                  </div>

                  <div className="flex gap-x-2">
                    {
                      item.tags.map((item)=> (
                        <span className="font-poppins font-normal text-[14px] text-navtext border-[1px] border-borderColor px-4 py-0.5 hover:bg-bghover cursor-pointer hover:text-bg duration-300 rounded-full">
                      {item}
                    </span>
                      ))
                    }
                  </div>
                </div>
              </div>
            </div>
                ))
            }
          </Container>
        </div>
      </div>
    </>
  );
}
