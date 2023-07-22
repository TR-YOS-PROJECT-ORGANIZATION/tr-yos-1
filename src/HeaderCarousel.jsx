import React, { useState } from "react";
import resim2 from "./helper/resim2.jpg";
import header from "./helper/header.jpg";
const HeaderCarousel = () => {
  const images = [header, resim2];
  const [activeIndex, setActiveIndex] = useState(0);
  const handlePrevClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );

    
  };
  
  return (
    <div
      className="relative w-full -mb-40 "
    >
      {/* Slider controls */}
      <div className="">
        <button
          type="button"
          className="absolute top-40 left-0 z-40 flex items-center justify-center h-20 px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev=""
          onClick={handlePrevClick}
        >
          <span className="inline-flex items-center border-2 border-white z-40 justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 z-40 text-black dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only z-40">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-40 right-0 z-40 flex items-center justify-center h-20 px-4 cursor-pointer group focus:outline-none"
          data-carousel-next=""
          onClick={handleNextClick}
        >
          <span className="inline-flex z-40 items-center border-2 border-white justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 z-40 text-black dark:dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only z-40">Next</span>
          </span>
        </button>
      </div>

      <div className="absolute h-96 z-30 opacity-70  w-5/12 rounded-r-3xl  bg-green-light"></div>

      {/* Carousel wrapper */}
      <div className="relative object-cover overflow-hidden md:h-96 ">
        {/* Item 1 */}
        <div
          className=" duration-700 ease-in-out"
          data-carousel-item=""
          style={{ display: activeIndex === 0 ? "block" : "none" }}
        >
          <img
            src={images[0]}
            className="absolute block w-full   -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt=""
          />
        </div>
        {/* Item 2 */}
        <div
          className=" object-cover  duration-700 ease-in-out"
          style={{ display: activeIndex === 1 ? "block" : "none" }}
          data-carousel-item="active"
        >
          <img
            src={images[1]}
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
      </div>

      <div className="relative w-[350px] -top-[16rem] z-50 left-40 ">
        <h3 className="text-white w-96 font-bold text-3xl tracking-widest leading-10">
          Join this educational journey with us and discover your data
        </h3>
      </div>
    </div>
  );
};

export default HeaderCarousel;
