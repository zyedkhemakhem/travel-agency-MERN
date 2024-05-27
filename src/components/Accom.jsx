  import React, { useEffect, useState } from 'react';

  function Accom({ name }) {
    const [accommodation, setAccommodation] = useState(null);

    useEffect(() => {
      fetch(`http://localhost:8000/blogs?name=${name}`)  
        .then(res => res.json())
        .then(data => {
          if (data.length > 0) {
            setAccommodation(data[0]);
          } else {
            setError('No data found');
          }
          setIsLoading(false);
        })
        .catch(e => {
          console.error("Error fetching accommodation data: ", e);
          setError(e.message);
          setIsLoading(false);
        });
    }, [name]);
    
    return (
      <div className="text-center p-4 bg-white rounded-lg shadow-md">
        <img src={accommodation.image} alt={accommodation.name} className="h-64 w-full object-cover rounded-md mb-4 mx-auto block" />
        <h1 className="text-3xl font-bold mb-2">{accommodation.name}</h1>
        <p className="text-lg mb-2">{accommodation.description}</p>
        <h2 className="text-xl font-semibold mb-2">{accommodation.price} TND</h2>
        <h3 className="text-lg mb-2">Date: {accommodation.date}</h3>
        <h4 className="text-lg">Status: {accommodation.status}</h4>
      </div>
    );
  }

  export default Accom;