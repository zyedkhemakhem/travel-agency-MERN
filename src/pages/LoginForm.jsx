import React, { useState } from 'react';
import Button from "../components/Button"; 
import HeroImage from "../assets/hero.png";
import Elnavbarjdida from "../components/Elnavbarjdida";
import Footer from '../components/Footer'; 


function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const credentials = { email, password };
    try {
      const response = await fetch("http://localhost:8000/blogs/Login", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
      });
      const data = await response.json();
      console.log('Form Data Submitted and Response:', data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div>      <Elnavbarjdida/>
    

     <div className="min-h-screen flex items-center justify-center bg-no-repeat bg-cover bg-center" 
         style={{ backgroundImage: `url(${HeroImage})` }}>
    
        
      
      <div className="max-w-md w-full bg-white px-6 py-8 rounded shadow-md">
        <h2 className="text-xl font-bold text-center text-gray-800 mb-8">Login Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <Button text="Login"/>
        </form>
      </div>
      
    </div>
    <Footer/>
    </div>
  );
}

export default LoginForm;
