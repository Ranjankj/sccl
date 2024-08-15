import React from "react";
import { contactInfo } from "../../constants/Config";

const ContactUs = () => {
  return (
    <div className="p-10 sm:p-10 md:p-8 lg:p-10 max-w-4xl mx-auto bg-white rounded-lg shadow-lg mt-10">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center text-gray-800">
        Contact Us
      </h1>
      <div className="space-y-4 sm:space-y-6 md:space-y-8">
        <div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700 mb-2">
            Office Address
          </h2>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl">
            {contactInfo.address}
          </p>
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700 mb-2">
            Email
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            {contactInfo.emails.map((email, index) => (
              <li key={index} className="text-base sm:text-lg md:text-xl">
                {email}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700 mb-2">
            Contact Info
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            {contactInfo.contactNumbers.map((number, index) => (
              <li key={index} className="text-base sm:text-lg md:text-xl">
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
