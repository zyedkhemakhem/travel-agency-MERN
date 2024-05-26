import React from "react";
import lighthouse from "../assets/lighthouse.png";
import { BiWorld } from "react-icons/bi";
import { BsHeadphones, BsPerson } from "react-icons/bs";

export default function Offer() {
  const data = [
    {
      text: "Best Travel Guide Always for your Services",
      icon: <BsPerson />,
      color: "bg-red-500/70 text-white", 
    },
    {
      text: "World Class Services Provided For You",
      icon: <BiWorld />,
      color: "bg-green-300/70 text-green-500", 
    },
    {
      text: "24/7 Strong Customer Support",
      icon: <BsHeadphones />,
      color: "bg-yellow-400/70 text-yellow-500", 
    },
  ];

  return (
    <section id="offer" className="my-32 flex gap-20 px-4 md:px-8">
      <div className="image">
        <img src={lighthouse} alt="lighthouse" className="h-96" />
      </div>
      <div className="content">
        <div className="title my-8">
          <h1 className="text-3xl">We are Offering in Total hundred Tours Across the World</h1>
        </div>
        <ul className="list-none">
          {data.map(({ text, icon, color }) => (
            <li key={text} className="flex items-center gap-16 my-16">
              <div className={`icon p-2 rounded-xl flex justify-center items-center text-3xl ${color}`}>
                {icon}
              </div>
              <div className="text">
                <h3 className="text-xl">{text}</h3>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
