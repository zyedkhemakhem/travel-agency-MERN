import React from "react";
import tour1 from "../assets/tour1.png";
import tour2 from "../assets/tour2.png";
import tour3 from "../assets/tour3.png";
import Button from "./Button";

export default function Tours() {
  const data = [
    {
      image: tour1,
      title: "Santorini, Oia Greece",
      price: 2000,
      description: "It is one of the largest metropolises on the Mediterranean Sea",
    },
    {
      image: tour2,
      title: "Lighthouse, Bellwood",
      price: 4000,
      description: "It is one of the largest metropolises on the Mediterranean Sea",
    },
    {
      image: tour3,
      title: "Riverfront, Japan",
      price: 3000,
      description: "It is one of the largest metropolises on the Mediterranean Sea",
    },
  ];

  return (
    <section id="tour" className="mt-40 mb-20 relative px-4 md:px-8">
      <div className="text-center mb-12">
        <Button text="Choose Your Accommodation" link="/accomodation" />
      </div>
      <div className="tours flex justify-center md:justify-between flex-wrap md:flex-nowrap gap-8">
        {data.map(({ image, title, price, description }) => (
          <div className="tour relative flex flex-col items-center md:w-1/3" key={title}>
            <div className="image relative">
              <img src={image} alt="tour" className="w-full h-auto" />
            </div>
            <div className="info absolute bottom-[-7.5rem] right-0 bg-white flex justify-center items-center gap-4 p-4 shadow-lg">
              <div className="details flex flex-col gap-2">
                <h4>{title}</h4>
                <p className="text-gray-600">{description}</p>
                <div className="price-details flex gap-4">
                  <span className="price text-primary-color font-bold">${price}</span>
                </div>
              </div>
              <button className="py-2 px-3 bg-primary-color text-white text-lg cursor-pointer">+</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
