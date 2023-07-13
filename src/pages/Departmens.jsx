import React, { useContext } from "react";
import resim1 from "../helper/resim1.jpg";
import Select from "react-select";
import { YosContext } from "../context/YosContext";

const Departmens = () => {
  const {
    options,
    options1,
    options2,
    setCity,
    setUniId,
    uniId,
    city,
    setFilterDep,
    filterDep,
    optionsCard,
    filterrrr,
  } = useContext(YosContext);
  return (
    <div>
      <div className="header relative">
        <img
          src="../img/slider2.jpg"
          alt=""
          className="w-full h-96 object-cover"
        />
        <div className="w-full h-96 bg-green-dark absolute top-0 left-0 opacity-70"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-5xl text-white">Departments</h1>
          <h3 className="text-2xl text-white text-center mt-4">
            All Departments
          </h3>
        </div>
      </div>
      {/* *************Filter Kısmı********* */}
      <div className="flex  mt-4 justify-between ">
        <div className="filter mx-36 ">
          <div className="mb-2 flex flex-col ml-20">
            <label htmlFor="city" className="mr-2  mt-2 font-bold">
              Select City
            </label>
            <Select
              isMulti
              value={city}
              onChange={(e) => setCity(e)}
              name="colors"
              options={options}
              className="basic-multi-select w-[200px] "
              classNamePrefix="select"
            />
          </div>
          <div className="mb-2 flex flex-col ml-20">
            <label htmlFor="city" className="mr-2  mt-2 font-bold">
              Select University
            </label>
            <Select
              value={uniId}
              isMulti
              name="colors"
              options={options1}
              onChange={setUniId}
              className="basic-multi-select  w-[200px] "
              classNamePrefix="select"
            />
          </div>
          <div className="mb-1 flex flex-col ml-20">
            <label htmlFor="city" className="mr-2  mt-2 font-bold ">
              Select Department
            </label>
            <Select
              value={filterDep}
              onChange={(e) => setFilterDep(e)}
              isMulti
              name="colors"
              options={options2}
              className="basic-multi-select  w-[200px] "
              classNamePrefix="select"
            />
          </div>
        </div>
        <div className="">
          <div className="mb-1 flex flex-col ">
            <label htmlFor="city" className="mr-2  mt-2 font-bold">
              Price
            </label>
            <div className="flex">
              <input
                type="text "
                placeholder="Min "
                className="border border-gray-300 rounded-md px-4 py-2 w-28 mt-2 h-9 focus:outline-none"
              />
              <div className="flex justify-center">
                <p className="text-3xl ">-</p>
              </div>

              <div className="mx-4">
                <input
                  type="text"
                  placeholder="Max"
                  className="border border-gray-300 rounded-md px-4 py-2 w-28  mt-2 focus:outline-none h-9"
                />
              </div>
            </div>
          </div>
        </div>
        {/* *******Check Kısmı******** */}

        <button className="m-2 bg-slate-400">Search</button>
      </div>
      {/* *************Card Kısmı******************** */}

      <div className="card flex w-10/12 mx-auto flex-wrap mt-12">
        {filterrrr.map((item) => {
          return (
            <div className="flex flex-col justify-center  w-96 mx-auto border-2 mt-12">
              <div className="relative">
                <img src={resim1} alt="" className="w-96" />
              </div>
              <div className="mx-7 mt-2">
                <div className="flex justify-between">
                  <p className="font-bold text-xl ">{item.label}</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                </div>
                <p className="font-semibold">{item.faculty}</p>
                <p className="text-sm mt-1">{item.university}</p>
              </div>
              <div className="mx-7 bg-green-light font-bold w-32 text-center rounded-md mt-2 flex">
                <button className="m-2">Compare</button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 mt-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                  />
                </svg>
              </div>
              <div className="w-80  mb-2 bg-grey-primary mx-auto mt-5  border border-t-1"></div>
              <div className="flex mx-7 m-4 justify-between">
                <div className="flex">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                  </div>
                  <div className="mx-1">{item.address}</div>
                </div>
                <div className="flex ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                    />
                  </svg>
                  <div className="mx-1">{item.price}null</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Departmens;
