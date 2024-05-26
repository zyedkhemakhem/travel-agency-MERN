import React from "react";
import DestinationItem from "../components/DestinationItem";
import cuba from "../assets/cuba.png";
import paris from "../assets/paris.png";
import japan from "../assets/japan.png";
import HeroImage from "../assets/hero.png"; 
import tour1 from "../assets/tour1.png";
import tour2 from "../assets/tour2.png";


function DestinationsContainer() {
  const destinations = [
    { name: "Cuba City", image: cuba , price:100,date:"10/05/2024",status:"aller"},
    { name: "Paris", image: paris, price:100 ,date:"10/05/2024",status:"aller"},
    { name: "Japan", image: japan, price:100 ,date:"10/05/2024",status:"aller"},
    { name: "Kyoto", image: tour1, price:100,date:"10/05/2024",status:"aller" },
    { name: "Australia", image: tour2, price:100,date:"10/05/2024",status:"aller" },
    
  ];

  return (
    <>
      <section
        id="destinations"
        className="p-4 md:p-10 lg:p-16 bg-cover bg-center relative text-gray-900"
        style={{ backgroundImage: `url(${HeroImage})` }}
      >
        <div className="bg-white bg-opacity-95 backdrop-filter backdrop-blur-xl rounded-xl shadow-2xl p-6 md:p-12 transition-all duration-500 hover:shadow-lg">
          <h2 className="text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-10">
            Top Destination In The World
          </h2>
          <div className="mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {destinations.map((destination, index) => (
              <DestinationItem key={index} name={destination.name} image={destination.image} price={destination.price} date={destination.date} status={destination.status}/>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default DestinationsContainer;
