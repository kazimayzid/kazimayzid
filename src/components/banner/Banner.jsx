import Container from "../container/Container";
import bg from "../../assets/bannerbg.png";
import bg1 from "../../assets/bannerbg1.png";
import pic from "../../assets/mayzidpic.jpg";
import { Typewriter } from "react-simple-typewriter";
import { useEffect, useState } from "react";

export default function Banner({ dark }) {
  const [showTypewriter, setShowTypewriter] = useState(false);

  useEffect(() => {
    setShowTypewriter(true);
  }, []);
  return (
    <>
      <Container>
        <div
          id="banner"
          data-aos="fade-up"
          className="mt-14 md:mt-18 w-screen md:w-full  bg-center  bg-no-repeat pt-[40px] md:pt-[137px] flex flex-col justify-center items-center pb-[105px] object-center px-4"
          style={{ backgroundImage: `url(${dark ? bg1 : bg})` }}
        >
          <img
            src={pic}
            alt="#img"
            className="w-[222px] h-[222px] rounded-full bg-fuchsia-600 object-cover"
          />
          <h1 className="font-poppins font-bold text-[63px] text-headingColor">
            Kazi Mayzid
          </h1>
          <p
            className={`${
              dark ? "text-gradient-white" : "text-gradient"
            } font-poppins font-semibold text-[26px]`}
          >
            <Typewriter
              words={[" MERN Stack Developer"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </p>

          <div className="font-poppins font-medium text-[16px] sm:text-[19px] leading-[28px] sm:leading-[30px] text-detailsColor text-center max-w-[] md:max-w-[790px] mt-3">
            {showTypewriter && (
              <Typewriter
                words={[
                  "Hi, I’m Kazi Maizid, a curious and driven individual passionate about technology and digital innovation. I enjoy learning, solving problems, and creating meaningful solutions. Adaptable and collaborative, I thrive in dynamic environments and strive for growth and excellence in every project I take on, always aiming to make a positive impact....",
                ]}
                loop={1}
                cursor={false}
                typeSpeed={10}
              />
            )}
          </div>

          <button className=" font-inter font-medium text-[15px] text-navtext border-borderColor px-[18px] py-[13px] border-[.5px] cursor-pointer mt-[40px] rounded-full hover:bg-hoverColor duration-300">
            Contact Me
          </button>
        </div>
      </Container>
    </>
  );
}
