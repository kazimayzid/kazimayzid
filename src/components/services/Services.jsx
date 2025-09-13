import Particles from "../../ui/Particles";
import Container from "../container/Container";

export default function Services() {
  return (
    <div className="relative w-full h-[1400px]">
      {/* Particles background */}
      <div className="absolute inset-0 z-0">
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

      {/* Content above particles */}
      <Container className="relative z-10">
        <div>
          <h2 className="text-4xl font-bold text-headingColor">Our Services</h2>
          <p className="mt-4 text-detailsColor">
            This is the content inside the container, above the particles background.
          </p>
        </div>
      </Container>
    </div>
  );
}
