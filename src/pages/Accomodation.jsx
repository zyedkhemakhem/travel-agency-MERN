import React, { useEffect, useState } from "react";
import DestinationItem from "../components/DestinationItem";
import HeroImage from "../assets/hero.png";  
import Elnavbarjdida from "../components/Elnavbarjdida";

function Accomodation() {
  const [destinations,setDestinations] =useState( []);
  
  useEffect (()=>{
    
      
      try{
         fetch("http://localhost:8000/blogs")
        .then(res=>res.json())
        .then(data=>{
          setDestinations(data)})
      }catch(e){
        toast.error("khsaraaaaa majbedtehech")
        console.log(e)
      } 

  },[])
  

  return (
    <>
    <Elnavbarjdida />
      <section
        id="destinations"
        className="p-4 md:p-10 lg:p-16 bg-cover bg-center relative text-gray-900"
        style={{ backgroundImage: `url(${HeroImage})` }}
      >
        <div className="bg-white bg-opacity-95 backdrop-filter backdrop-blur-xl rounded-xl shadow-2xl p-6 md:p-12 transition-all duration-500 hover:shadow-lg">
          <h2 className="text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-10">
            Top Accomodation In The World
          </h2>
          <div className="mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {destinations.map((destination, index) => (
              <DestinationItem key={index} name={destination.name} image={destination.image} price={destination.price} description={destination.description} date={destination.date}/>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Accomodation;
