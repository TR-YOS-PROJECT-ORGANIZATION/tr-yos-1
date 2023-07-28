import React, { useContext } from "react";
import { YosContext } from "../../context/YosContext";
import CardSlider from "./CardSlider";
import { FaHeartCircleCheck } from "react-icons/fa6";
import { FaCodeCompare } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";

const CardPre = () => {

  const {
    options3,
    like,
    handleLike,
    userID,
    handleCompare,
    compare,
    currentPage,
    cardPage,
  } = useContext(YosContext);

  const { departmentID } = useParams();
  
  return (
    <div className="flex flex-wrap gap-15 mx-auto justify-between ">
      {cardPage?.map((item, index) => (
        <div
          key={index}
          className="flex flex-col justify-center  w-80 mx-auto border-2 mt-12"
        >
          <div className="text-center h-56  align-top">
            <CardSlider />
          </div>
          <div className="mx-7 mt-3 h-24">
            <div className="flex justify-between">

              <Link
                to={`/departments/department/${item.department.tr}`}
                className="font-bold text-xl w-60"
              >
                {item.department.tr}
              </Link>

              <div>
                <FaHeartCircleCheck
                  id={item.id}
                  onClick={() => handleLike(item.id, userID)}
                  className={`w-6 h-6 ${
                    like.includes(item.id) ? "active" : ""
                  }`}
                />
              </div>
            </div>

            <Link to={`/${departmentID}`} className="font-semibold">{item.faculty.tr}</Link>
            <p className="font-semibold">{item.faculty.tr}</p>
            <p className="text-sm mt-1">{item.university.tr}</p>

          </div>
          <div className="mx-7 mt-8  flex justify-between">
            <div className=" bg-[#DDDDDD] font-bold w-32 text-center rounded-md flex">
              <button
                id={item?.id}
                className="m-2  px-3 flex "
                onClick={() => handleCompare(item.id)}
              >
                Compare{" "}
                <span className="pl-2 pt-1">
                  <FaCodeCompare
                    className={`w-5 h-5 ${
                      compare.includes(item.id) ? "activeCompare" : ""
                    }`}
                  />
                </span>
              </button>
            </div>
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
              <div className="mx-1">{item.city.tr}</div>
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
      ))}
    </div>
  );
};

export default CardPre;
