import React from "react";
import { visionPillars } from "../constants/Config";

const VisionSection = () => {
  return (
    <section className="py-16 bg-white px-10 md:px-20 mb-10">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-8">Our Vision</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {visionPillars.map((pillar, index) => (
            <div
              key={index}
              className={`relative ${pillar.bgColor} p-6 rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105`}
            >
              <h3 className="text-xl font-semibold mb-4">{pillar.title}</h3>
              <p className="text-gray-700 text-justify">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
