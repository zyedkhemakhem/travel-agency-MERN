import React, { useState, useEffect } from "react";
import HeroImage from "../assets/hero.png";
import Button from "../components/Button";
import Elnavbarjdida from "../components/Elnavbarjdida";

function AccomodationAdmin() {
  const [destinations, setDestinations] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    image: null,
    price: '',
    date: '',
    status: '',
    description: ''
  });

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
      setDestinations(destinations.filter(destination => destination._id !== id));
    } catch (e) {
      console.error("Error deleting destination", e);
    }
  };

  const handleAdd = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/blogs", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      console.log('Form Data Submitted and Response:', data);

    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setFormData({ ...formData, image: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

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
            Top Accommodation In The World
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {destinations.map((destination, index) => (
              <div key={index} className="text-center p-4 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 transition duration-300">
                <img src={destination.image} alt={destination.name} className="h-64 w-full object-cover rounded-md mb-4" />
                <h3 className="text-lg text-gray-800 font-semibold mb-2">{destination.name}</h3>
                <p className="text-gray-600 mb-4">Price: TND {destination.price}</p>
                <p className="text-gray-600 mb-2">{destination.description}</p>
                <p className="text-gray-600">{destination.date}</p>
                <p className="text-gray-600">{destination.status}</p>
                <Button text="Discover More" link="#" />
                <button onClick={() => handleDelete(destination._id)} className="mt-4 py-2 px-4 bg-red-600 text-white rounded hover:bg-red-700">
                  Delete
                </button>
              </div>
            ))}
          </div>
          <form onSubmit={handleAdd} className="mt-4">
            {Object.entries(formData).map(([key, value]) => (
              <div className="mb-4" key={key}>
                <label htmlFor={key} className="block text-sm font-medium text-gray-700">{key.charAt(0).toUpperCase() + key.slice(1)}:</label>
                <input
                  type={key === 'image' ? 'file' : 'text'}
                  id={key}
                  name={key}
                  value={key !== 'image' ? value : undefined}
                  onChange={key === 'image' ? handleImageChange : handleChange}
                  className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
            ))}
            <button type="submit" className="py-2 px-4 bg-green-600 text-white rounded hover:bg-green-700">
              Add New Destination
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default AccomodationAdmin;
