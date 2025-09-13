import "./App.css";
import Navbar from "./components/navbar/Navbar.jsx";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Banner from "./components/banner/Banner.jsx";
import About from "./components/about/About.jsx";
import Scroll from "./components/scroll/Scroll.jsx";

function App() {
   const [dark, setDark] = useState(() => {
    const storedTheme = localStorage.theme;
    if (storedTheme === "dark") return true;
    return false;
  });

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [dark]);


  useEffect(() => {
    AOS.init({ duration: 1200, offset: 100, delay: 200, once: true });
  }, []);
  return (
    <>
      <div className="bg-bg">
        <Navbar dark={dark} setDark={setDark}/>
        <Banner dark={dark}/>
        <About/>
        <Scroll dark={dark}/>
      </div>
    </>
  );
}

export default App;
