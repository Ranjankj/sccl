import React from "react";
import { useNavigate } from "react-router-dom";
import towerImg from "../assets/homeAboutImg.png";
import { AboutOption, homeAboutText } from "../constants/Config";

const About = () => {
  const navigate = useNavigate();

  function handleKnowMore() {
    navigate("/about");
  }
  return (
    <div id="about-section" className="px-4 md:px-20 mt-20 md:mb-20 mb-5">
      <div className="flex justify-center items-center">
        <h1 className="text-3xl md:text-4xl font-semibold mb-2 text-center md:text-left">
          About Us
        </h1>
      </div>
      <div className="flex flex-col md:flex-row items-center mt-5">
        <div id="about-text-area" className="md:w-1/2">
          <div className="mt-3 text-center md:text-left">
            <p className="text-sm md:text-base">{homeAboutText.text1}</p>
            <p className="text-sm md:text-base mt-3 md:mt-5">
              {homeAboutText.text2}
            </p>
          </div>
          <div className="flex justify-center md:justify-start mt-5">
            <button
              onClick={handleKnowMore}
              className="bg-blue-500 text-white px-4 py-2 md:px-6 md:py-3 rounded hover:bg-blue-700"
            >
              Know More
            </button>
          </div>
        </div>
        <div
          id="about-image-area"
          className="md:w-1/2 mt-6 md:mt-0 flex justify-center md:justify-end"
        >
          <img
            src={towerImg}
            alt="Tower Detailing"
            className="w-full md:w-auto max-h-64 md:max-h-full"
            style={{ transform: "scaleX(-1)" }}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-8 px-10 md:px-20 md:grid-cols-4">
        {AboutOption.map((item, index) => {
          return (
            <div
              className="flex flex-col justify-center items-center m-4 md:m-0"
              key={item.tag + index}
            >
              <img width="64" height="64" src={item.url} alt="Team" />
              <p className="text-[#3D52A0] text-lg md:text-xl font-semibold md:mt-2">
                {item.upperText}
              </p>
              <p className="text-[#3D52A0] text-lg md:text-lg">
                {item.lowerText}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
