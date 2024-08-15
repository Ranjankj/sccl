import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { clientsData } from "../constants/Config";

export default function ClientsCard() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // For screens 1024px and below
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // For screens 768px and below
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // For screens 480px and below
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div id="clients" className="px-10 md:px-10 mt-20 mb-20">
      <h1 className="text-3xl md:text-4xl font-semibold text-center">
        Our Clients
      </h1>
      <div className="w-full md:w-3/4 m-auto mt-10">
        <Slider {...settings}>
          {clientsData.map((data) => (
            <div
              key={data.name}
              className="flex flex-col justify-center items-center rounded-lg py-6 px-5 h-full"
            >
              <div className="flex justify-center items-center flex-grow min-h-[200px] rounded-full overflow-hidden">
                <img
                  width={150}
                  height={150}
                  src={data.logoPath}
                  alt={data.name}
                  className="object-contain"
                />
              </div>
              <div className="flex justify-center items-center flex-grow">
                <p className="text-lg md:text-sm font-medium">{data.name}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
