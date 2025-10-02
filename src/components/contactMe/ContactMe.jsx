import Container from "../container/Container";

export default function ContactMe({ dark }) {
  return (
    <>
      <Container>
        <div data-aos="fade-up" className="py-[100px]">
          <div className="text-center">
            <h1 className="font-inter font-extrabold text-[45px] text-headingColor">
              Get In Touch
            </h1>
            <span
              className={`${
                dark ? "text-gradient-white" : "text-gradient"
              } font-poppins font-semibold text-[14px] mb-[40px]`}
            >
              Lets work together
            </span>
          </div>
          <div className="mt-10 flex flex-col gap-y-5 items-center">
            <div className="relative w-[400px]">
              <input
                type="text"
                id="name"
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-detailsColor bg-transparent rounded-lg border-1 border-borderColor appearance-noneName  focus:outline-none focus:ring-0  peer"
                placeholder=" "
              />
              <label
                for="name"
                className="absolute text-sm text-headingColor duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-bg px-2 peer-focus:px-2 peer-focus:text-headingColor peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
                Name
              </label>
            </div>
            <div className="relative w-[400px]">
              <input
                type="email"
                id="email"
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-detailsColor bg-transparent rounded-lg border-1 border-borderColor appearance-none  focus:outline-none focus:ring-0  peer"
                placeholder=" "
              />
              <label
                for="email"
                className="absolute text-sm text-headingColor duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-bg px-2 peer-focus:px-2 peer-focus:text-headingColor peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
                Email
              </label>
            </div>
            <div className="w-[400px] mt-5">
              <label
                for="message"
                className="block mb-2 text-[14px] font-medium text-headingColor font-poppins"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="4"
                className="block p-2.5 w-full text-sm text-detailsColor bg-bg rounded-lg border border-borderColor dark:placeholder-gray-400 focus:outline-none"
                placeholder="Write your message here..."
              ></textarea>
            </div>
            <button className="font-poppins font-normal text-[14px] text-navtext border-[1px] border-borderColor px-4 py-1 hover:bg-bghover cursor-pointer hover:text-bg duration-300 rounded-lg">Get in Touch</button>
          </div>
        </div>
      </Container>
    </>
  );
}
