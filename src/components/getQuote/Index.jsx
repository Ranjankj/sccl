import React, { useState } from "react";
import instance from "../../axios";

const GetAQuotePage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    details: "",
    attachment: null,
    contactMethod: "Email",
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await instance.post(
        `${apiUrl}/api/submit-quote`,
        formData
      );
      alert(response.data.message);
      // Optionally reset the form
      setFormData({
        name: "",
        email: "",
        phone: "",
        projectType: "",
        details: "",
        attachment: null,
        contactMethod: "Email",
      });
    } catch (error) {
      alert("Failed to send quote request.");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="container mx-auto max-w-3xl bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Get a Quote</h1>
        <p className="mb-6 text-gray-700 text-center">
          Fill out the form below to request a personalized quote for your
          project. Our team will get back to you with the details.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Project Type
              </label>
              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md"
                required
              >
                <option value="">Select Project Type</option>
                <option value="Transmission Towers">Transmission Towers</option>
                <option value="Substation Structures">
                  Substation Structures
                </option>
                <option value="Mono Pole">Mono Pole</option>
                <option value="Railway Structures">Railway Structures</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Project Details
              </label>
              <textarea
                name="details"
                value={formData.details}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md"
                rows="4"
                required
              />
            </div>
            {/* <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Attachment
              </label>
              <input
                type="file"
                name="attachment"
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md"
              />
            </div> */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Preferred Contact Method
              </label>
              <div className="flex items-center space-x-4">
                <label>
                  <input
                    type="radio"
                    name="contactMethod"
                    value="Email"
                    checked={formData.contactMethod === "Email"}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Email
                </label>
                <label>
                  <input
                    type="radio"
                    name="contactMethod"
                    value="Phone"
                    checked={formData.contactMethod === "Phone"}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Phone
                </label>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="w-full mt-6 bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default GetAQuotePage;
