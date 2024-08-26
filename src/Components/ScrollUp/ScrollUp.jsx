import React, { useEffect } from "react";
import "./ScrollUp.css";
import scroll_up from "../../assets/scrollup.png";

const ScrollUp = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollUp = document.querySelector(".scrollup");
      if (window.scrollY >= 560) {
        scrollUp.classList.add("show-scroll");
      } else {
        scrollUp.classList.remove("show-scroll");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div href="#" className="scrollup">
        <img
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          src={scroll_up}
          className="scrollup_icon"
          alt="Scroll to top"
        />
      </div>
    </>
  );
};

export default ScrollUp;
