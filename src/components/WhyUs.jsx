import React from "react";
import { reasons } from "../constants/Config";

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-gray-100 px-6 md:px-40">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-4">Why SCCL?</h2>
        <p className="text-lg mb-8 px-4 md:px-16">
          We stand out for our commitment to excellence, innovation, and
          client-focused approach.
        </p>
        <div className="grid grid-cols-1 gap-8 md:px-16">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row justify-center items-center ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div
                className={`w-full md:w-1/2 mb-4 md:mb-0 flex justify-center md:px-4 ${
                  index % 2 === 0 ? "md:justify-end" : "md:justify-start"
                }`}
              >
                <img
                  width={300}
                  height={300}
                  src={reason.imgSrc}
                  alt="square-border"
                  className="max-w-full h-auto"
                />
              </div>
              <div
                className={`w-full md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start ${
                  index % 2 === 0 ? "md:pl-2" : "md:pl-12"
                }`}
              >
                <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
