import React from 'react';
import { useParams } from 'react-router-dom';
import cuba from '../assets/cuba.png';
import paris from '../assets/paris.png';
import japan from '../assets/japan.png';
import tour1 from '../assets/tour1.png';
import tour2 from '../assets/tour2.png';
import rome from '../assets/rome.png';
import maldives from '../assets/maldives.png';
import bali from '../assets/bali.png';

const destinations = {
  "Cuba City": { name: "Cuba City", image: cuba, price: 100, date: "10/05/2024", status: "aller", description: "A beautiful city with rich culture and history." },
  "Paris": { name: "Paris", image: paris, price: 100, date: "10/05/2024", status: "aller", description: "The city of love, known for its iconic Eiffel Tower." },
  "Japan": { name: "Japan", image: japan, price: 100, date: "10/05/2024", status: "aller", description: "A country with a unique blend of traditional and modern culture." },
  "Kyoto": { name: "Kyoto", image: tour1, price: 100, date: "10/05/2024", status: "aller", description: "Known for its classical Buddhist temples, as well as gardens, imperial palaces, Shinto shrines and traditional wooden houses." },
  "Australia": { name: "Australia", image: tour2, price: 100, date: "10/05/2024", status: "aller", description: "Famous for its Sydney Opera House, Great Barrier Reef, and unique wildlife." },
  "Rome": { name: "Rome", image: rome, price: 100, date: "10/05/2024", status: "aller", description: "A sprawling city with nearly 3,000 years of globally influential art, architecture and culture on display." },
  "Maldives": { name: "Maldives", image: maldives, price: 100, date: "10/05/2024", status: "aller", description: "Tropical paradise known for its beaches, blue lagoons and extensive reefs." },
  "Bali": { name: "Bali", image: bali, price: 100, date: "10/05/2024", status: "aller", description: "An Indonesian island known for its forested volcanic mountains, iconic rice paddies, beaches and coral reefs." }
};

function Item() {
  const { name } = useParams();
  const destination = destinations[name];

  if (!destination) {
    return <h2>Destination {name} not found</h2>;
  }

  return (
    <div className="text-center p-4 bg-gray-100 rounded-lg shadow-md">
      <img src={destination.image} alt={destination.name} className="h-64 w-60 object-cover rounded-md mb-4 mx-auto block" />
      <h1 className="text-3xl font-bold mb-2">{destination.name}</h1>
      <p className="text-lg mb-2">{destination.description}</p>
      <h2 className="text-xl font-semibold mb-2">{destination.price} TND</h2>
      <h3 className="text-lg mb-2">Date: {destination.date}</h3>
      <h4 className="text-lg">Status: {destination.status}</h4>
    </div>
  );
}

export default Item;