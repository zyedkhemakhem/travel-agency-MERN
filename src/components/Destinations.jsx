import React from "react";
import cuba from "../assets/cuba.png";
import paris from "../assets/paris.png";
import japan from "../assets/japan.png";
import Button from "./Button";

export default function Destinations() {
  const data = [
    {
      name: "Cuba City",
      image: cuba,
      price: 100,
      description: "Experience the vibrant culture and spirited salsa rhythms of Cuba City, where history and modernity blend seamlessly.",
    },
    {
      name: "Paris",
      image: paris,
      price: 100,
      description: "Discover the timeless romance of Paris, from its breathtaking art and architecture to its charming cafés and chic fashion."
    },
    {
      name: "Japan",
      image: japan,
      price: 100,
      description: "Explore the harmonious blend of ancient tradition and cutting-edge innovation in Japan, a land of stunning natural beauty and cultural depth."
    },
  ];

  return (
    <section id="destination" className="flex flex-col items-center gap-8 m-4 md:m-8">
      <div className="info text-center">
        <h2 className="text-3xl font-bold leading-normal mb-4">
          Top <span className="text-primary">Destinations</span> In The World
        </h2>
        <p className="text-secondary mb-4">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
        <Button text="Discover More" link="/destination" />
      </div>

      <div className="destinations flex flex-wrap justify-center gap-8">
        {data.map(({ name, image, price, description }) => (
          <div className="destination bg-white rounded-lg shadow-md w-80" key={name}>
            <img src={image} alt={name} className="h-48 w-full object-cover rounded-t-lg" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{name}</h3>
              <p className="text-gray-500 mb-2">{description}</p>
              <p className="text-primary font-semibold">{price} TND</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
