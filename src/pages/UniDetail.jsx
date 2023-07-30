import React, { useContext, useState } from "react";
import { YosContext } from "../context/YosContext";
import Header from "../Header";
import HeaderCarousel from "../HeaderCarousel";
import resim2 from "../helper/resim2.jpg";
import header from "../helper/header.jpg";
import { Link, useParams } from "react-router-dom";
import { FaCodeCompare, FaHeartCircleCheck } from "react-icons/fa6";
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
    uniID,
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
    userID,
    getFavori,
    compare,
    setCompare,
    handleCompare,
    handleDelete,
    delFavori,
  } = useContext(YosContext);

  const university = options3.find((uni) => uni.value === uniID);
  const department = options3.find((dep) => dep.label === departmentID);
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
      <div className="grid grid-cols-6 gap-8 w-8/12 m-auto mt-8 ">
        <div className="left col-span-4">
          <div className="bg-white rounded-lg p-5 grid grid-cols-4 mb-4">
            <div className="name col-span-3 ">
              <p className="font-bold text-2xl mb-1 w-96 leading-8">
                {department ? department.label : "Department Not Found"}
              </p>
              <p className="font-bold text-xl mb-4 w-96 leading-8">
                {department ? department.faculty : "Faculty Not Found"}
              </p>

              {/* <p>{department ? department.label : 'Department Not Found'}</p> */}
              {/* <p>{department ? department.adress2 : ''}</p> */}
              <p>
                <span className="display inline-block  pr-1 ">📍</span>
                {department ? department.adress2 : ""}
              </p>
            </div>
            <div className="text-center self-center text-xl font-bold text-green-dark">
              $5800 / year
            </div>
          </div>

          <div className="others bg-white rounded-lg p-5">
            <div className="font-bold text-lg">Others</div>
            <div className=" grid grid-cols-7 my-3">
              <div className="flex flex-col text-center ">
                <p className="font-semibold text-lg my-2">Language</p>
                <p>Turkish</p>
              </div>
              <div className="bg-green-dark w-[1px] h-full mx-auto"></div>
              <div className="flex flex-col text-center ">
                <p className="font-semibold text-lg my-2">Year</p>
                <p>4</p>
              </div>
              <div className="bg-green-dark w-[1px] h-full mx-auto"></div>
              <div className="flex flex-col text-center ">
                <p className="font-semibold text-lg my-2">Quota</p>
                <p>52</p>
              </div>
              <div className="bg-green-dark w-[1px] h-full mx-auto"></div>
              <div className="flex flex-col text-center ">
                <p className="font-semibold text-lg my-2">Internship</p>
                <p>-</p>
              </div>
            </div>
          </div>
          <div className="about bg-white rounded-lg p-5 grid my-4">
            <div className="font-bold text-lg">About Department</div>
          </div>
          <div className="m-auto mt-8">
            <div className="">
              {/* Review Form */}
              <form className="bg-white rounded-lg p-5 shadow-md ">
                <h2 className="text-xl font-bold mb-4">Leave a Review</h2>
                <div className="grid grid-cols-2 gap-5">
                  <div className="mb-4 ">
                    <label htmlFor="name" className="font-semibold mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="font-semibold mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-5">
                  {" "}
                  <div className="mb-4">
                    <label htmlFor="phone" className="block font-semibold mb-1">
                      Phone
                    </label>
                    <input
                      type="text"
                      id="phone"
                      className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="rating"
                      className="block font-semibold mb-1"
                    >
                      Rating
                    </label>
                    <input
                      type="number"
                      id="rating"
                      min="1"
                      max="5"
                      className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="message" className="block font-semibold mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none"
                >
                  Submit Review
                </button>
              </form>
            </div>
            <div className="md:col-span-2">
              {/* Right side content (if any) */}
            </div>
          </div>
          {/* <div className="Basic Details bg-white rounded-lg p-5">
            <div className="font-bold text-lg">Others</div>
            <div className=" grid grid-cols-4 my-3">
              <div className="flex flex-col text-center ">
                <p className="font-semibold text-lg my-2">Language</p>
                <p>Turkish</p>
              </div>
              <div className="flex flex-col text-center ">
                <p className="font-semibold text-lg my-2">Year</p>
                <p>4</p>
              </div>
              <div className="flex flex-col text-center ">
                <p className="font-semibold text-lg my-2">Quota</p>
                <p>52</p>
              </div>
              <div className="flex flex-col text-center ">
                <p className="font-semibold text-lg my-2">Internship</p>
                <p>-</p>
              </div>
            </div>
          </div> */}
        </div>
        <div className="grid col-span-2  place-self-start w-full text-center ">
          <div className="flex text-center self-center text-xl font-bold mb-4 w-full p-5 bg-white rounded-lg">
            <div className="text-center flex mx-auto">
              <FaHeartCircleCheck
                id={department?.id}
                onClick={() => handleLike(department?.id, userID)}
                className={`w-6 h-6 text-center align-self-center  ${
                  like.includes(department?.id) ? "active" : ""
                }`}
              />
              <p className="ml-3"> Add Favorite</p>
            </div>
          </div>

          <div className="compare flex text-center self-center text-xl font-bold mb-4 w-full p-5 bg-white rounded-lg">
            <button
              id={department?.id}
              className="m-2 mx-auto px-3 flex "
              onClick={() => handleCompare(department.id)}
            >
              Compare{" "}
              <span className="pl-2 pt-1">
                <FaCodeCompare
                  className={`w-5 h-5  ${
                    compare.includes(department?.id) ? "activeCompare" : ""
                  }`}
                />
              </span>
            </button>
          </div>
          <div>
            <div className="bg-white rounded-lg p-2">
              <div className="flex  text-center justify-center my-auto">
                <img
                  className=" rounded-t-lg p-3 w-20 h-20   md:rounded-none md:rounded-l-lg"
                  src="https://upload.wikimedia.org/wikipedia/tr/4/4c/Afyon_Kocatepe_%C3%9Cniversitesi_logo.png"
                  alt=""
                />
                <div className=" text-left">
                  <div className="font-bold text-xl">
                    {department.university
                      ? department.university
                      : "University Not Found"}
                  </div>
                  <div className="flex ">
                    <div className="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                        />
                      </svg>
                    </div>
                    <div>{department ? department.address : "Not Found"}</div>
                  </div>
                </div>
              </div>
              <div className="bg-green-dark w-full h-[1px] my-5"></div>
              <div>
                <div className="phone flex ml-5 my-3">
                  <div className="rounded-full w-10 h-10  border border-green-dark flex items-center justify-center mr-2 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-left font-bold">Call Us</div>
                    <div className="font-semibold text-gray-600">
                      {department?.phone}
                    </div>
                  </div>
                </div>
                <div className="email flex ml-5 my-3">
                  <div className="rounded-full w-10 h-10  border border-green-dark flex items-center justify-center mr-2 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-left font-bold">E-Mail</div>
                    <div className="font-semibold text-gray-600">
                      {department?.mail}
                    </div>
                  </div>
                </div>
                <div className="flex ml-5 my-3">
                  <div className="rounded-full w-10 h-10  border border-green-dark flex items-center justify-center mr-2 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-left font-bold">Website</div>
                    <div className="font-semibold text-gray-600">
                      {department?.web}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniDetail;
