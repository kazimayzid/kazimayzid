import Container from "../container/Container";

export default function Navbar() {
  return (
    <>
      <Container>
        <div
          data-aos="fade-up"
          className="flex justify-between items-center pt-[30px] "
        >
          <div>
            <a href="#" className="font-normal text-[32px]">
              mayzid
            </a>
          </div>
          <div className="flex gap-x-[50px] font-inter font-medium text-lg text-[#050505] border-[1px] border-[#d1ddf3] rounded-full px-0.5 py-0.5">
            <a href="#" className="hover:bg-[#bed1f5] rounded-full px-4">
              Home
            </a>
            <a href="#" className="hover:bg-[#bed1f5] rounded-full px-4 ">
              About
            </a>
            <a href="#" className="hover:bg-[#bed1f5] rounded-full px-4">
              Projects
            </a>
            <a href="#" className="hover:bg-[#bed1f5] rounded-full px-4">
              Services
            </a>
            <a href="#" className="hover:bg-[#bed1f5] rounded-full px-4">
              Resume
            </a>
          </div>
          <div>
            <button className="flex gap-x-[50px] font-inter font-medium text-lg text-[#050505] border-[1px] border-[#484E53] px-[26px] py-[5px] rounded-[10px] cursor-pointer">
              Contact
            </button>
          </div>
        </div>
      </Container>
    </>
  );
}
