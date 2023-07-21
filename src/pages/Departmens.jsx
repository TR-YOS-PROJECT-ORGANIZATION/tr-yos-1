import React, { useContext, useState } from "react";
import DepSlider from "../helper/slider2.jpg";
import Select from "react-select";
import { YosContext } from "../context/YosContext";
import Card from "../components/card/Card";

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
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(12);
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = filterrrr.slice(indexOfFirstCard, indexOfLastCard);
  const pageNumbers = Math.ceil(filterrrr.length / cardsPerPage);
  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className="header relative h-[15rem]">
        <img src={DepSlider} alt="" className="w-full h-[15rem] object-cover" />
        <div className="w-full h-[15rem] bg-green-dark absolute top-0 left-0 opacity-70"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-5xl text-white">Departments</h1>
          <h3 className="text-2xl text-white text-center mt-4">
            All Departments
          </h3>
        </div>
      </div>
      {/* *************Filter Kısmı********* */}
      <div className="flex flex-col mt-4 mx-auto ">
        <div className="above filter flex flex-col mx-auto justify-center">
          <div className="flex">
            {" "}
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
                className="basic-multi-select border-0 w-[200px] "
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
          </div>{" "}
          <div className=" flex mt-5 justify-evenly">
            <div className="mb-1 flex flex-col ml-20 w-10/12 mx-auto">
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
            </div>{" "}
            <div className="  bg-green-dark text-white font-bold w-20 h-10  text-center rounded-md self-end ">
              <button className="m-2">Search</button>
            </div>
          </div>
        </div>
      </div>

      <Card />
    </div>
  );
};
export default Departmens;
