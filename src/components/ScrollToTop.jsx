import React, { useState } from "react";
import { FaChevronUp } from "react-icons/fa";

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  window.addEventListener("scroll", () => {
    window.pageYOffset > 100 ? setVisible(true) : setVisible(false);
  });

  return (
    <div className="max-w-full">
      <div className="none opacity-0 invisible"></div>
      <div className="fixed bottom-40 right-40 bg-primary-color text-orange p-4 rounded-full flex justify-center items-center transition duration-400 ease-in-out z-10">
        <a href="#" className={`${visible ? "block" : "hidden"}`}>
          <FaChevronUp />
        </a>
      </div>
    </div>
  );
}

export default ScrollToTop;