import React, { useState } from "react";
import resim1 from "../helper/resim1.jpg";
import resim2 from "../helper/resim2.jpg";
import resim3 from "../helper/resim3.jpg";
const CardSlider = () => {
  const [activeItem, setActiveItem] = useState(1);
  const handlePrevClick = () => {
    setActiveItem((prevItem) => (prevItem === 1 ? 3 : prevItem - 1));
  };
  const handleNextClick = () => {
    setActiveItem((prevItem) => (prevItem === 3 ? 1 : prevItem + 1));
  };
  return (
    <>
      <div className="relative">
        <div id="controls-carousel" className="relative w-full">
          {/* Carousel wrapper */}
          <div className="relative h-56 overflow-hidden  ">
            {/* Item 1 */}
            <div
              className={`duration-700 ease-in-out ${
                activeItem === 1 ? "block" : "hidden"
              }`}
              data-carousel-item=""
            >
              <img
                src={resim1}
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 "
                alt="..."
              />
            </div>
            {/* Item 2 */}
            <div
              className={`duration-700 ease-in-out ${
                activeItem === 2 ? "block" : "hidden"
              }`}
              data-carousel-item="active"
            >
              <img
                src={resim2}
                className="absolute object-cover block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
            {/* Item 3 */}
            <div
              className={`duration-700 ease-in-out ${
                activeItem === 3 ? "block" : "hidden"
              }`}
              data-carousel-item="active"
            >
              <img
                src={resim3}
                className="absolute object-cover block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
          </div>
          {/* Slider controls */}
          <button
            type="button"
            className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev=""
            onClick={handlePrevClick}
          >
            {/* Previous button content */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7 text-black bg-grey-primary p-1 rounded-full opacity-70"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5l-7.5-7.5 7.5-7.5"
              />
            </svg>
          </button>
          <button
            type="button"
            className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next=""
            onClick={handleNextClick}
          >
            {/* Next button content */}
            {/* Next button content */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7 text-black bg-grey-primary p-1 rounded-full opacity-70"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default CardSlider;
