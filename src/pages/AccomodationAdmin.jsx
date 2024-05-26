import React, { useState, useEffect } from "react";
import HeroImage from "../assets/hero.png";
import Button from "../components/Button";

function AccomodationAdmin() {
  const [destinations, setDestinations] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [newImage, setNewImage] = useState(null);
  const [newDate, setNewDate] = useState("");
  const [newStatus, setNewStatus] = useState("");

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const res = await fetch("http://localhost:8000/blogs");
        const data = await res.json();
        setDestinations(data);
      } catch (e) {
        console.error("Error fetching data", e);
      }
    };
    fetchDestinations();
  }, []);

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:8000/blogs/${id}`, { method: "DELETE" });
      const filteredDestinations = destinations.filter(destination => destination._id !== id);
      setDestinations(filteredDestinations);
    } catch (e) {
      console.error("Error deleting destination", e);
    }
  };

  const handleAdd = async () => {
    const newDestination = {
      name: newName,
      image: newImage,
      price: newPrice,
      date: newDate,
      status: newStatus
    };

    try {
      const res = await fetch("http://localhost:8000/blogs", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newDestination)
      });
      if (res.ok) {
        const addedDestination = await res.json();
        setDestinations([...destinations, addedDestination]);
        setNewName("");
        setNewPrice("");
        setNewImage(null);
        setNewDate("");
        setNewStatus("");
      } else {
        console.error("Failed to add new destination");
      }
    } catch (e) {
      console.error("Error adding new destination", e);
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setNewImage(reader.result);
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
            Top Accomodation In The World
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {destinations.map((destination, index) => (
              <div key={index} className="text-center p-4 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 transition duration-300">
                <img src={destination.image} alt={destination.name} className="h-64 w-full object-cover rounded-md mb-4" />
                <h3 className="text-lg text-gray-800 font-semibold mb-2">{destination.name}</h3>
                <p className="text-gray-600 mb-4">Price: TND {destination.price}</p>
                <p className="text-gray-600">{destination.description}</p>
                <p className="text-gray-600">{destination.date}</p>
                <p className="text-gray-600">{destination.status}</p>
                <Button text="Discover More" link="#" />
                <button onClick={() => handleDelete(destination._id)} className="mt-4 py-2 px-4 bg-red-600 text-white rounded hover:bg-red-700">
                  Delete
                </button>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <input type="text" placeholder="Name" value={newName} onChange={e => setNewName(e.target.value)} className="p-2 border rounded w-full mb-4" />
            <input type="text" placeholder="Price" value={newPrice} onChange={e => setNewPrice(e.target.value)} className="p-2 border rounded w-full mb-4" />
            <input type="file" onChange={handleImageChange} className="p-2 border rounded w-full mb-4" />
            <input type="text" placeholder="Date" value={newDate} onChange={e => setNewDate(e.target.value)} className="p-2 border rounded w-full mb-4" />
            <input type="text" placeholder="Status" value={newStatus} onChange={e => setNewStatus(e.target.value)} className="p-2 border rounded w-full mb-4" />
            <button onClick={handleAdd} className="py-2 px-4 bg-green-600 text-white rounded hover:bg-green-700">
              Add New Destination
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default AccomodationAdmin;
