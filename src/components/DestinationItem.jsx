import React from "react";
import Button from "./Button";

function DestinationItem({ name, image ,price ,description,date,status}) {
  return (
    <div className="text-center p-4 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 transition duration-300">
      <img src={image} alt={name} className="h-64 w-full object-cover rounded-md mb-4" />
      <p className="text-lg text-gray-800 font-semibold mb-2">
        Explore the beauty and culture of {name}.
      </p>
      <h1 className="text-center">{price} TND</h1>
      <h3 className="text-center">{description}</h3>
      <Button text="Discover More"  /> 
      <h2>{date}</h2>
      <h3>{status}</h3>
    </div>
  );
}

export default DestinationItem;
