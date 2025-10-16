import { Github, Linkedin } from "lucide-react";
import Container from "../container/Container";
import whatsApp from "../../assets/whatsapp.png";
import gmail from "../../assets/gmail.png";
export default function Footer() {
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
    <footer className="bg-white dark:bg-[var(--color-bg)] border-t-[0.5px] border-[var(--color-borderColor)] py-6 ">
      <Container>
        <div
          data-aos="fade-up"
          className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 w-screen md:w-full"
        >
          <span className="hidden md:block text-navtext text-sm md:text-base font-poppins">
            © 2025 All rights reserved to Kazi Mayzid.
          </span>

          <div>
            <div className="flex gap-4 items-center justify-center md:justify-start">
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
            <div className="mt-2 flex flex-col justify-center items-center md:items-start">
              <div className="flex items-center gap-x-2">
                <img src={whatsApp} alt="#" className="w-[25px] h-[25px]" />
                <p className="font-inter font-normal text-[16px] text-headingColor">
                  01314033280
                </p>
              </div>
              <div className="flex items-center gap-x-2">
                <img src={gmail} alt="#" className="w-[20px] h-[20px]" />
                <p className="font-inter font-normal text-[16px] text-headingColor">
                  kazimayzid.dev@gmail.com
                </p>
              </div>
            </div>
          </div>
          <span className="block md:hidden text-navtext text-sm md:text-base font-poppins">
            © 2025 All rights reserved to Kazi Mayzid.
          </span>
        </div>
      </Container>
    </footer>
  );
}
