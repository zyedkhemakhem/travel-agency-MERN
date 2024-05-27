import React, { useState, useEffect } from "react";
import HeroImage from "../assets/hero.png";
import Button from "../components/Button";

export default function West() {
  const [departValue, setDepartValue] = useState("");
  const [returnValue, setReturnValue] = useState("");


  useEffect(() => {
    if (departValue && new Date(departValue) >= new Date(returnValue)) {
      const nextDay = new Date(departValue);
      nextDay.setDate(nextDay.getDate() + 1);
      setReturnValue(nextDay.toISOString().split('T')[0]);
    }
  }, [departValue]);

  return (
    <section className="relative">
      <img src={HeroImage} alt="Explore The World" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-screen px-4">
        <h1 className="text-white text-6xl font-bold mb-6">Explore The World</h1>
        <Button text="Plan Your Trip" link="/destination" />

        <div className="mt-8 max-w-4xl w-full bg-white bg-opacity-90 rounded-lg p-4 shadow-lg ">
          <form className="grid grid-cols-3 gap-4 items-end">
            <div>
              <label className="block text-sm font-medium text-gray-700">To</label>
              <select className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm">
                <option>New York</option>
                <option>Tokyo</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Depart</label>
              <input type="date" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Return</label>
              <input type="date" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm" />
            </div>
            <div className="col-span-4 flex justify-end mt-4">
              <Button text="Discover More" link="/destination"  />
            </div>
          </form>
        </div>
        <br/>
        <Button text="Plan your accomodation" link="/accomodation" />
        <div className="mt-4 max-w-4xl w-full bg-white bg-opacity-90 rounded-lg p-4 shadow-lg">
          <form className="grid grid-cols-3 gap-4 items-end">
            <div>
              <label className="block text-sm font-medium text-gray-700">Place</label>
              <select className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm">
                <option>London</option>
                <option>Paris</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Check-in</label>
              <input type="date" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Check-out</label>
              <input type="date" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm" />
            </div>
            <div className="col-span-3 flex justify-end mt-4">
              <Button text="Discover More" link="/accomodation" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
