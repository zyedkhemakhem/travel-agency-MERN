import React, { useState } from 'react';
import Button  from "../components/Button";
import HeroImage from "../assets/hero.png";
import Elnavbarjdida from "../components/Elnavbarjdida"; 
import Footer from '../components/Footer';


function SignUpForm() {
  const [formData, setFormData] = useState({
    FirstName: '',
    LastName: '',
    Email: '',
    Password: '',
    PhoneNumber: '',
    City: ''
  });
  console.log(formData)

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/blogs/user", {
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
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div><Elnavbarjdida/>
    <div className="min-h-screen flex items-center justify-center bg-no-repeat bg-cover bg-center" 
         style={{ backgroundImage: `url(${HeroImage})`}}>
      <div className="max-w-md w-full bg-white px-6 py-8 rounded shadow-md">
        <h2 className="text-xl font-bold text-center text-gray-800 mb-8">Sign up</h2>
        <form onSubmit={handleSubmit}>
          {Object.entries(formData).map(([key, value]) => (
            <div className="mb-4" key={key}>
              <label htmlFor={key} className="block text-sm font-medium text-gray-700">{key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}:</label>
              <input
                type={key === 'email' ? 'email' : key === 'password' ? 'password' : 'text'}
                id={key}
                name={key}
                value={value}
                onChange={handleChange}
                required
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          ))}
          <Button text="Sign Up" />
        </form>
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default SignUpForm;
