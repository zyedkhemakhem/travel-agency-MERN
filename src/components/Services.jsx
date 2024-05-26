import React from "react";
import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";
import service4 from "../assets/service4.png";

export default function Services() {
  const data = [
    {
      image: service1,
      title: "Choose Destination",
      description: "Select your ideal spot using maps and guides for a personalized journey.",
    },
    {
      image: service2,
      title: "Explore the Place",
      description: "Immerse in local culture and nature with binoculars for a deeper experience.",
    },
    {
      image: service3,
      title: "Start Your Journey",
      description: "Pack essentials, gear up, and embark on your adventure enthusiastically.",
    },
    {
      image: service4,
      title: "Let's Enjoy",
      description: "Celebrate your travels with music, creating lasting memories of joy.",
    },
  ];

  return (
    <section id="services" className="my-32 mx-16 md:mx-32 lg:mx-64 xl:mx-96">
      <div className="grid grid-cols-4 gap-4">
        {data.map(({ image, title, description }) => {
          return (
            <div className="service p-6 text-center bg-gray-300 flex flex-col justify-center items-center gap-4 transition duration-300 hover:bg-white hover:shadow-lg" key={title}>
              <img src={image} alt={title} className="h-32 w-32" />
              <h3 className="text-primary">{title}</h3>
              <p className="text-secondary">{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
