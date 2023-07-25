import React, { useContext, useState } from "react";
import { YosContext } from "../context/YosContext";
import Header from "../Header";
import HeaderCarousel from "../HeaderCarousel";
import resim2 from "../helper/resim2.jpg";
import header from "../helper/header.jpg";
import { Link, useParams } from "react-router-dom";
const UniDetail = () => {
  const images = [header, resim2];
  const [activeIndex, setActiveIndex] = useState(0);
  const handlePrevClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  const { departmentID } = useParams();

  const handleNextClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const {
    options,
    options1,
    options2,
    setCity,
    setUniId,
    setFilterDep,
    uni,
    uniId,
    city,
    filterrrr,
    options3,
    postFavori,
    like,
    setLike,
    handleLike,

    getFavori,
    compare,
    setCompare,
    handleCompare,
    handleDelete,
    delFavori,
  } = useContext(YosContext);
  const university = options1.find((uni) => uni.value === departmentID);
  return (
    <div className="bg-gray-100 ">
      <div className="slider w-full ">
        {/* Slider controls */}
        <div className="">
          <button
            type="button"
            className="absolute top-60 left-0 z-40 flex items-center justify-center h-20 px-4 cursor-pointer group focus:outline-none"
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
            className="absolute top-60 right-0 z-40 flex items-center justify-center h-20 px-4 cursor-pointer group focus:outline-none"
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
      </div>
      <div className="grid grid-cols-11 gap-8 w-10/12 m-auto mt-8">
        <div className="left col-span-7">
          <div className="bg-white rounded-lg p-5 grid grid-cols-4">
            <div className="col-span-3 ">
              <p className="font-bold text-2xl mb-4 w-96 leading-8">
                Molecular Biology And Genetics Faculty Of Engineering
              </p>
              <p>
                <span className="display inline-block  pr-1 ">📍</span>
                İçerenköy Mah. Kayışdağı Cad. No:32 İçerenköy 34752 Ataşehir
                İstanbul
              </p>
            </div>
            <div className="text-center self-center text-xl font-bold text-green-dark">
              $5800 / year
            </div>
          </div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="right bg-white rounded-lg p-5 grid-span-4">
            <div>
                Add Favorite
            </div>
            <Link to="/">git</Link>
        </div>
      </div>
    </div>
  );
};

export default UniDetail;
