import React from "react";
import Destinations from "../components/Destinations";
import DownloadApp from "../components/DownloadApp";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Offer from "../components/Offer";
import ScrollToTop from "../components/ScrollToTop";
import Services from "../components/Services";
import Tours from "../components/Tours";
import West from "../components/west";

export default function App() {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <West/>
      <Services />
      <Destinations />
      <Offer />
      <Tours />
      <DownloadApp />
      <Footer />
    </div>
  );
}