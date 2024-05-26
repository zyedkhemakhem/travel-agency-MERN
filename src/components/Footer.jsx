
import React from "react";
import logo from "../assets/logo.png";
import Button from "./Button";

export default function Footer() {
  const quickLinks = [
    "About Us",
    "Destinations",
    "Latest Blog",
    "Our Team",
    "Contact Us",
  ];
  const supportLinks = [
    "Customer Support",
    "Privacy Policy",
    "Terms & Condition",
    "Forum",
    "Tour Guide",
  ];

  return (
    <footer className="py-8">
      <div className="upper-footer grid grid-cols-1 md:grid-cols-4 justify-center border-b-2 border-primary-color pb-8 gap-20 px-4">
        <div className="col flex flex-col gap-8 text-secondary-text hover:text-orange-400">
          <div className="brand">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            <p className="description">
              You can dream, create, design, and build the most wonderful place.
            </p>
          </div>
          <ul className="list-none flex flex-col gap-4">
            <li className="cursor-pointer hover:text-primary-color transition-colors hover:text-orange-400">+216 95 334 794</li>
            <li className="cursor-pointer hover:text-primary-color transition-colors hover:text-orange-400">OpusAgency@gmail.com</li>
            <li className="cursor-pointer hover:text-primary-color transition-colors hover:text-orange-400">www.youtube.com</li>
          </ul>
        </div>
        <div className="col flex flex-col gap-8 ">
          <h2 className="text-black hover:text-orange-400">Quick Links</h2>
          <ul className="list-none flex flex-col gap-4 hover:text-orange-400">
            {quickLinks.map((link) => (
              <li key={link} className="cursor-pointer hover:text-primary-color transition-colors">{link}</li>
            ))}
          </ul>
        </div>
        <div className="col flex flex-col gap-8">
          <h2 className="text-black hover:text-orange-400">Support</h2>
          <ul className="list-none flex flex-col gap-4">
            {supportLinks.map((link) => (
              <li key={link} className="cursor-pointer hover:text-primary-color transition-colors">{link}</li>
            ))}
          </ul>
        </div>
        <div className="col flex flex-col gap-8">
          <h2 className="text-black hover:text-orange-400">Newsletter</h2>
          <div className="newsletter flex flex-col gap-4">
            <input type="text" placeholder="Your Email" className="p-4 border-none text-lg text-white bg-f8f8f8 cursor-pointer"/>
            <Button text="Subscribe Now" link="./login" />
          </div>
        </div>
      </div>
      <div className="lower-footer py-8 text-center"> </div>
    </footer>
  );
}
