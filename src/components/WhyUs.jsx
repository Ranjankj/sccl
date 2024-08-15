import React from "react";

import { reasons } from "../constants/Config";

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-gray-100 px-12 md:px-40 ">
      <div className="container mx-auto md:text-center text-justify">
        <h2 className="text-4xl font-semibold mb-4 text-center">Why SCCL?</h2>
        <p className="text-lg mb-8 px-10 md:px-16 text-center ">
          We stand out for our commitment to excellence, innovation, and
          client-focused approach. Here’s why you should choose us:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 px-16">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row justify-center items-center ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div
                className={`w-1/2 mb-4 md:mb-0 flex px-4 ${
                  index % 2 === 0 ? "md:justify-end" : "md:justify-start"
                } `}
              >
                <img
                  width={300}
                  height={300}
                  src={reason.imgSrc}
                  alt="square-border"
                />
              </div>
              <div
                className={`w-full md:w-1/2 text-left  flex flex-col ${
                  index % 2 === 0
                    ? "md:justify-start pl-2"
                    : "md:justify-start md:pl-12"
                } `}
              >
                <h3 className="text-xl font-semibold mb-2 text-center md:text-left">
                  {reason.title}
                </h3>
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
