import React from "react";
import { contactInfo } from "../../constants/Config";

const ContactUs = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-lg mt-10">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Contact Us
      </h1>
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            Office Address
          </h2>
          <p className="text-gray-600">{contactInfo.address}</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Email</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            {contactInfo.emails.map((number, index) => (
              <li key={index} className="text-lg">
                {number}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            Contact Info
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            {contactInfo.contactNumbers.map((number, index) => (
              <li key={index} className="text-lg">
                {number}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
