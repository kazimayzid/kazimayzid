import DotGrid from "../../ui/ParralaxEffect";
import Container from "../container/Container";

export default function Services({ dark }) {
  const fadeColor = dark ? "26,26,26" : "224,232,246";

  return (
    <div style={{ width: "100%", height: "1400px", position: "relative" }}>
      {/* DotGrid full width */}
      <DotGrid
        dotSize={2}
        gap={15}
        baseColor="#5227FF"
        activeColor="#5227FF"
        proximity={120}
        shockRadius={250}
        shockStrength={5}
        resistance={750}
        returnDuration={1.5}
        maxSpeed={20000}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
      />

      {/* Circular fade overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background: `radial-gradient(circle, rgba(${fadeColor},0) 90%, rgba(${fadeColor},1) 100%)`,
        }}
      />

      <Container className="relative z-10">
        <div >
          <h2 className="text-4xl font-bold text-headingColor">Our Services</h2>
          <p className="mt-4 text-detailsColor">
            This is the content inside the container, above the DotGrid background.
          </p>
        </div>
      </Container>
    </div>
  );
}
