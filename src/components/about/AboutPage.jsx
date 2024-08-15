import React from "react";
import { aboutData } from "../../constants/aboutData";

const AboutPage = () => {
  return (
    <div className="bg-gray-100 text-gray-900 py-12 px-6">
      <div className="container mx-auto max-w-5xl">
        {/* Company History Section */}
        <section className="mb-12">
          <h1 className="text-3xl font-bold mb-6 text-center">
            {aboutData.history.title}
          </h1>
          <p className="text-lg text-gray-700">
            {aboutData.history.contentLine1}
          </p>
          <br />
          <p className="text-lg text-gray-700">
            {aboutData.history.contentLine2}
          </p>
        </section>

        {/* Company Vision Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">
            {aboutData.vision.title}
          </h2>
          <div className="space-y-6">
            {aboutData.vision.content.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-blue-300"
              >
                <h3 className="text-xl font-semibold mb-3">{item.heading}</h3>
                <p className="text-base">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-center">
            {aboutData.services.title}
          </h2>
          <div className="space-y-8">
            {aboutData.services.list.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 text-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
              >
                <h3 className="text-xl font-semibold mb-4">
                  {service.heading}
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  {service.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="text-base">
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
