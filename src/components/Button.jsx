import React from 'react';
import { useNavigate } from 'react-router-dom';


const Button = ({ text, link }) => {
  let navigate = useNavigate(); 

  const handleClick = () => {
    if (link) {
      navigate(link);
    }
  };

  return (
    <button onClick={handleClick} className="py-2 px-6 bg-orange-500 text-white text-base font-medium cursor-pointer hover:bg-orange-600 rounded transition duration-150 ease-in-out">
      {text}
    </button>
  );
};

export default Button;
