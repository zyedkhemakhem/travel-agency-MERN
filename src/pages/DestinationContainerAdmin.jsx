import React, { useState } from "react";
import cuba from "../assets/cuba.png";
import paris from "../assets/paris.png";
import japan from "../assets/japan.png";
import HeroImage from "../assets/hero.png";
import Button from "../components/Button";
import tour1 from "../assets/tour1.png";
import tour2 from "../assets/tour2.png";

function DestinationsContainerAdmin() {
  const [destinations,setDestinations] = useState([
    { name: "Cuba City", image: cuba , price:100,date:"10/05/2024",status:"aller"},
    { name: "Paris", image: paris, price:100 ,date:"10/05/2024",status:"aller"},
    { name: "Japan", image: japan, price:100 ,date:"10/05/2024",status:"aller"},
    { name: "Kyoto", image: tour1, price:100,date:"10/05/2024",status:"aller" },
    { name: "Australia", image: tour2, price:100,date:"10/05/2024",status:"aller" },


  ]);
  const [newName, setNewName] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [newImage, setNewImage] = useState(null);

  const handleDelete = (index) => {
  
    const newDestinations = [...destinations];
    newDestinations.splice(index, 1);
    setDestinations(newDestinations);
  };

  const handleAdd = () => {
    const newDestination = {
      name: newName,
      image: newImage,
      price: newPrice
    };
    setDestinations([...destinations, newDestination]);
    setNewName("");
    setNewPrice("");
    setNewImage(null);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function (e) {
      setNewImage(e.target.result);
    };
    reader.readAsDataURL(file);
  };

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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {destinations.map((destination, index) => (
              <div key={index} className="text-center p-4 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 transition duration-300">
                <img src={destination.image} alt={destination.name} className="h-64 w-full object-cover rounded-md mb-4" />
                <h3 className="text-lg text-gray-800 font-semibold mb-2">{destination.name}</h3>
                <p className="text-gray-600 mb-4">Price: TND{destination.price}</p>
                <h3 className="text-gray-600 mb-4">{destination.date}</h3>
                <h3 className="text-gray-600 mb-4">{destination.status}</h3>
                <Button text="Discover More" link="#" />
                <button onClick={() => handleDelete(index)}
                        className="mt-4 py-2 px-4 bg-red-600 text-white rounded hover:bg-red-700">
                  Delete
                </button>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <input type="text" placeholder="Name" value={newName} onChange={e => setNewName(e.target.value)} className="p-2 border rounded w-full mb-4" />
            <input type="text" placeholder="Price" value={newPrice} onChange={e => setNewPrice(e.target.value)} className="p-2 border rounded w-full mb-4" />
            <input type="file" onChange={handleImageChange} className="p-2 border rounded w-full mb-4" />
            <button onClick={handleAdd} className="py-2 px-4 bg-green-600 text-white rounded hover:bg-green-700">
              Add New Destination
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default DestinationsContainerAdmin;
