import "./App.css";
import Navbar from "./components/navbar/Navbar";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Banner from "./components/banner/banner";
import About from "./components/about/About";
function App() {
  useEffect(() => {
    AOS.init({ duration: 1200, offset: 100, delay: 200, once: true });
  }, []);
  return (
    <>
      <div className="bg-[#E0E8F6]">
        <Navbar/>
        <Banner/>
        <About/>
      </div>
    </>
  );
}

export default App;
