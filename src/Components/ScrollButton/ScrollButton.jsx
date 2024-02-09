import React, { useState, useEffect } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    setVisible(scrolled > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  return (
    <div className="fixed right-4 bottom-4 z-10">
      {visible && (
        <button
          className="bg-yellow-500 p-2 rounded-full text-white focus:outline-none"
          onClick={scrollToTop}
        >
          <FaArrowCircleUp className="text-4xl" />
        </button>
      )}
    </div>
  );
};

export default ScrollButton;
