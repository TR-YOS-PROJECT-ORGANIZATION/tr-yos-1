import React, { useContext, useState } from "react";
import { YosContext } from "../context/YosContext";
import Header from "../Header";
import HeaderCarousel from "../HeaderCarousel";
import resim2 from "../helper/resim2.jpg";
import header from "../helper/header.jpg";
import { useParams } from "react-router-dom";
const UniversityDetail = () => {
  const images = [header, resim2];
  const [activeIndex, setActiveIndex] = useState(0);
  const handlePrevClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  const { departmentID } = useParams();
  console.log(departmentID);
  const handleNextClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  const { uniID, options3, universityDetail, first12Universities } =
    useContext(YosContext);
  // const selectedCode = first12Universities.map((item) => item.uniidcode);

  // console.log(selectedCode);
  // const department = options3.find((dep) =>
  //   selectedCode.includes(dep.uniidcode)
  // );
  const filterDuplicateUnis = (uniler) => {
    const uniqueUni = {};
    uniler.forEach((item) => {
      const universityName = item.university;
      if (!uniqueUni[universityName]) {
        uniqueUni[universityName] = item;
      }
    });
    return Object.values(uniqueUni);
  };
  const filteredUnis = filterDuplicateUnis(universityDetail);

  // const selectedCode = filteredUnis.map((item) => ({
  //   uniidcode: item.university.code,
  //   university: item.university.tr,
  //   adress: item.data.adress,
  //   web: item.data.web,
  //   email: item.data.email,
  //   phone: item.data.phone,
  //   fax: item.data.fax,
  // }));
  // console.log(selectedCode);
  console.log(filteredUnis);
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
      {filteredUnis.map((item) => (
        <div className="grid grid-cols-6 gap-8 w-8/12 m-auto mt-8 ">
          <div className="left col-span-4">
            <div className="bg-white rounded-lg p-5 grid grid-cols-4 mb-4">
              <div className="name col-span-3 ">
                <p className="font-bold text-2xl mb-1 w-96 leading-8">
                  {item?.university?.tr || "Department Not Found"}
                </p>
                <p>
                  <span className="display inline-block  pr-1 "></span>
                  {item?.data?.adress || "Turkey"}
                </p>
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
            <div className="about bg-white rounded-lg p-5 grid my-4">
              <div className="font-bold text-lg">Departments</div>
              {universityDetail?.map((datauni) => (
                <div>{datauni.department.tr}</div>
              ))}
            </div>
            <div className="m-auto mt-8">
              <div className=""></div>
              <div className="md:col-span-2">
                {/* Right side content (if any) */}
              </div>
            </div>
          </div>
          <div className="grid col-span-2  place-self-start w-full text-center ">
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
                      {item?.university?.tr || "University Not Found"}
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
                      <div>{item?.data?.adress || "Turkey"}</div>
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
                        {item?.data?.phone || "03124134847"}
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
                        {item?.data?.email || "tryos@gmail.com"}
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
                        {item?.data?.web || "www.tr.yos.com"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default UniversityDetail;
