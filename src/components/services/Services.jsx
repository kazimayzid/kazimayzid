import Container from "../container/Container";
export default function Services({dark}) {
  return (
    <>
      <Container>
        <div className="mt-[220px]">
          <div className="text-center">
            <h1 className="font-inter font-extrabold text-[45px] text-headingColor">
              What I do
            </h1>
            <span
              className={`${
                dark ? "text-gradient-white" : "text-gradient"
              } font-poppins font-semibold text-[14px] mb-[40px]`}
            >
              My  Services
            </span>
          </div>
          <div></div>
        </div>
      </Container>
    </>
  );
}
