import React from "react";
import { useNavigate } from "react-router-dom";

import towerImage from "../assets/towerBanner3.jpg";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <div
      id="home"
      className="relative hero bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${towerImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>{" "}
      {/* Black overlay with opacity */}
      <div className="container mx-auto h-full flex flex-col justify-center items-center text-center relative z-10">
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
          Your Trusted Partner <br />
          in Tower Detailing
        </h1>
        <p className="text-white text-lg md:text-xl mb-6">
          Precision in Detail, Commitment in Delivery, Excellence in Quality.
        </p>
        <button
          className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-700"
          onClick={() => {
            navigate("/getQuote");
          }}
        >
          Get a Quote
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
