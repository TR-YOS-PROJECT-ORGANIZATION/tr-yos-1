import React, { useContext, useEffect, useState } from "react";
import { YosContext } from "../context/YosContext";
import PaginationPage from "./Pagination";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import UniPage from "./UniPage";

const Uni = () => {
  const {
    options3,
    uniCode,
    setUniCode,
    uniDetail,
    cardPageUni,
    first12Universities,
    universityDetail,
  } = useContext(YosContext);

  const { t } = useTranslation();

  const { uniID } = useParams();

  const handleUniversityClick = async (clickedUniCode) => {
    setUniCode(clickedUniCode);
    uniDetail(clickedUniCode);
  };

  return (
    <>
      <div className="">
        <div className="opacity-70 relative overflow-hidden h-[15rem] bg-center bg-no-repeat p-12 text-center bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')]">
          <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed">
            <div className="flex h-full items-center justify-center ">
              <div className="text-white">
                <h2 className="mb-4 text-4xl font-semibold">
                  {t("universities")}
                </h2>
                <h4 className="mb-6 text-xl font-semibold">
                  {t("uniSlider")}.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="">
          {cardPageUni?.map((item) => (
            <Link
              to={`/universities/university/${item.id}`}
              onClick={() => handleUniversityClick(item.code)}
              key={item.id}
            >
              <div className="flex flex-col gap-5 justify-center items-center mt-5">
                <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">

                  {" "}
                  {item?.logo ? (
                    <img
                      className=" rounded-t-lg p-3 h-40 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                      src={item?.logo}
                      alt=""
                    />
                  ) : (
                    <img
                      className=" rounded-t-lg p-3 h-40 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                      src="https://www.yok.gov.tr/_catalogs/masterpage/yok2018/assets/images/layout_set_logo-img_id=1520536731601.png "
                      alt=""
                    />
                  )}
                  <div className="flex flex-col justify-between p-4 leading-normal">
                    {" "}
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                      <p>{item.tr}</p>
                    </h5>
                    <div className="flex gap-3"></div>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      {item.content.tr}
                    </p>
                    <p className="text-end text-red-800">
                      Detay için tıklayın....
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <UniPage />
      </div>
    </>
  );
};
export default Uni;
