import React from "react";
import { serviceData } from "../constants/Config";

const Services = () => {
  return (
    <section className="py-16 bg-gray-100 px-6 md:px-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceData.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <div className="text-blue-500 text-5xl mb-4 flex justify-center">
                <img
                  width="64"
                  height="64"
                  src={service.path}
                  alt={service.title}
                />
              </div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <ul className="flex flex-col justify-start text-left list-disc pl-5 space-y-2">
                <li className="text-gray-600">{service.descLine1}</li>
                {service.descLine2 && (
                  <li className="text-gray-600">{service.descLine2}</li>
                )}
                {service.descLine3 && (
                  <li className="text-gray-600">{service.descLine3}</li>
                )}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
