import React, { useContext, useState } from "react";
import DepSlider from "../helper/slider2.jpg";
import Select from "react-select";
import { YosContext } from "../context/YosContext";
import Card from "../components/card/Card";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

  return (
    <div>
      <div className="header relative h-[15rem]">
        <img src={DepSlider} alt="" className="w-full h-[15rem] object-cover" />
        <div className="w-full h-[15rem] bg-green-dark absolute top-0 left-0 opacity-70"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-5xl text-white">{t("departments")}</h1>
          <h3 className="text-2xl text-white text-center mt-4">
            {t("allDepartments")}
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
                {t("selectCity")}
              </label>
              <Select
                isMulti
                value={city}
                onChange={(e) => setCity(e)}
                name="colors"
                options={options}
                className="basic-multi-select border-0 w-[200px] "
                classNamePrefix="select"
                placeholder={t("select")}
              />
            </div>
            <div className="mb-2 flex flex-col ml-20">
              <label htmlFor="city" className="mr-2  mt-2 font-bold">
                {t("selectUni")}
              </label>
              <Select
                value={uniId}
                isMulti
                name="colors"
                options={options1}
                onChange={setUniId}
                className="basic-multi-select  w-[200px] "
                classNamePrefix="select"
                placeholder={t("select")}
              />
            </div>
            <div className="mb-1 flex flex-col ml-20">
              <label htmlFor="city" className="mr-2  mt-2 font-bold ">
                {t("selectDep")}
              </label>
              <Select
                value={filterDep}
                onChange={(e) => setFilterDep(e)}
                isMulti
                name="colors"
                options={options2}
                className="basic-multi-select  w-[200px] "
                classNamePrefix="select"
                placeholder={t("select")}
              />
            </div>
          </div>{" "}
        </div>
      </div>

      <Card />
    </div>
  );
};
export default Departmens;
