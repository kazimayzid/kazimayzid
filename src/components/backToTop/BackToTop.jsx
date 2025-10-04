import { ChevronUp } from "lucide-react";
import Container from "../container/Container";
import { useEffect, useState } from "react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const topButton = () => {
      if (window.scrollY > 800) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", topButton);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {isVisible && (
        <Container>
          <span
            onClick={scrollToTop}
            className="w-[50px] h-[50px] rounded-full border-[1px] border-borderColor fixed bottom-5 md:bottom-[80px] right-2 md:right-[200px] flex justify-center items-center-safe cursor-pointer hover:bg-hoverColor group"
          >
            <ChevronUp
              size={40}
              className="text-headingColor group-hover:text-bg"
            />
          </span>
        </Container>
      )}
    </>
  );
}
