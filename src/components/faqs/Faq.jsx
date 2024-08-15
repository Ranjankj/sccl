import React from "react";
import { faqData } from "../../constants/faqData";

const FAQPage = () => {
  return (
    <div className="bg-gray-100 text-gray-900 py-12 px-6">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Frequently Asked Questions
        </h1>
        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl hover:glow-effect"
            >
              <h2 className="text-xl font-semibold mb-3">{faq.question}</h2>
              <p className="text-base">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
