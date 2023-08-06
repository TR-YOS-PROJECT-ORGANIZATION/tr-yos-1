import React, { useContext, useEffect, useState } from "react";
import resim1 from "../../helper/resim1.jpg";
import resim2 from "../../helper/resim2.jpg";
import resim3 from "../../helper/resim3.jpg";
import axios from "axios";

const CardSlider = ({ depdata, cardPage }) => {
  console.log(depdata);
  const [activeItem, setActiveItem] = useState(1);
  const [imagesData, setImagesData] = useState([]); //! state 'i burda her bir veriye ayrı data tutması amacıyla burda tanımladık.
  const handlePrevClick = () => {
    setActiveItem((prevItem) => (prevItem === 1 ? 3 : prevItem - 1));
  };
  const handleNextClick = () => {
    setActiveItem((prevItem) => (prevItem === 3 ? 1 : prevItem + 1));
  };
  const getImages = async (depdata) => {
    try {
      const BASE_URL_IMAGES = `https://tr-yös.com/api/v1/record/departmentimage.php?id=${depdata}&token=mBbAINPS8DwIL5J9isMwnEJGr4OgSkC55SCm2BqnVeJ8r1gxGFlrl8mFN7Q18GA9D/HsXeDS5arTZx6l974b31678f8f18db56809a16f9728baf`;
      const { data } = await axios(BASE_URL_IMAGES);
      setImagesData(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getImages(depdata);
  }, [cardPage]);

  return (
    <>
      <div className="relative ">
        <div id="controls-carousel" className="relative w-full ">
          {/* Carousel wrapper */}
          <div className="relative h-56 overflow-hidden  ">
            {/* Item 1 */}
            {imagesData.image?.map((item, i) => {
              return (
                <div
                  className={`duration-700 ease-in-out  ${
                    activeItem === i + 1 ? "block" : "hidden"
                  }`}
                  data-carousel-item=""
                >
                  <img
                    src={item}
                    className="absolute object-cover block w-full h-60"
                    alt="..."
                  />
                </div>
              );
            })}
          </div>
          {/* Slider controls */}
          <button
            type="button"
            className="absolute top-0 left-0  flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
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
            className="absolute top-0 right-0  flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
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
