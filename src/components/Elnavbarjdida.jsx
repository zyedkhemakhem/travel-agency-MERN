import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import Logo from "../assets/logo.png";
import Button from "./Button";  

export default function Elnavbarjdida() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const closeNav = (e) => {
      if (isNavOpen) setIsNavOpen(false);
    };
    document.documentElement.addEventListener('click', closeNav);
    return () => {
      document.documentElement.removeEventListener('click', closeNav);
    };
  }, [isNavOpen]);

  return (
    <nav className="flex justify-between items-center px-2 py-4 md:py-2 md:px-4 lg:px-8 relative z-10">
      <div className="brand cursor-pointer">
        <img src={Logo} alt="logo" className="h-10" />  
      </div>
      <div className="toggle md:hidden">
        {isNavOpen ? (
          <MdClose onClick={() => setIsNavOpen(false)} className="text-xl" />
        ) : (
          <GiHamburgerMenu
            onClick={(e) => {
              e.stopPropagation();
              setIsNavOpen(true);
            }}
            className="text-xl"
          />
        )}
      </div>
      <div className={`links flex ${isNavOpen ? "flex" : "hidden"} md:flex md:gap-12 absolute md:static right-0 top-full md:top-0 h-full w-3/5 md:w-auto bg-primary-color md:bg-transparent transition-width duration-300 ease-in-out md:opacity-100 md:visibility-visible`}>
        <ul className="flex flex-col md:flex-row items-center justify-center md:gap-6 text-white md:text-black w-full h-full">
          <li className='text-black-800 hover:text-orange-400 border-b-[2px solid black]'><a href="#services" className="hover:text-primary-color">Home</a></li>
          <li className='text-black-800 hover:text-orange-400 border-b-[2px solid black]'><Button text="Sign up" link="/signup" /></li>
          <li className='text-black-800 hover:text-orange-400 border-b-[2px solid black]'><Button text="Login" link="/login" /></li>
        </ul>
      </div>
    </nav>
  );
}
