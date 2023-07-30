import React, { useContext, useEffect } from "react";
import { YosContext } from "../context/YosContext";
import CardSlider from "../components/card/CardSlider";
import { FaCodeCompare, FaHeartCircleCheck } from "react-icons/fa6";
const Favorites = () => {
  const {
    handleCompare,
    like,
    handleLike,
    depertman,
    filteredID,
    getFavori,
    handleDeleteFavori,
    delFavori,
    handleDelete,
    departmentID,
    userID,
    active,
    compare,
  } = useContext(YosContext);
  // Fetch favorites when the component mounts
  useEffect(() => {
    getFavori(userID);
  }, [getFavori, userID]);
  return (
    <div className="flex flex-wrap min-h-screen">
      <p className="absolute font-bold text-4xl top-[7rem] left-36 text-green-dark">
        Favorite Universities
      </p>
      <div className="w-full h-32 bg-green-light"></div>
      {filteredID.length === 0 ? (
        <p className="text-center text-2xl mt-12 font-semibold m-auto text-green-dark ">
          Please Choose Your Favorite University!
        </p>
      ) : (
        filteredID.map((item) => {
          return (
            <div className="flex flex-col justify-center w-80 mx-auto border-2 mt-12">
              <div className="text-center h-56 align-top">
                <CardSlider />
              </div>
              <div className="mx-7 mt-3 h-24">
                <div className="flex justify-between">
                  <p className="font-bold text-xl w-60">{item.department.tr}</p>
                  <div>
                    <FaHeartCircleCheck
                      id={item?.id}
                      onClick={() => handleDeleteFavori(item.id)}
                      className={`w-6 h-6 ${
                        like.includes(item.id) ? "active" : ""
                      }`}
                    />
                  </div>
                </div>
                <p className="font-semibold">{item.faculty.tr}</p>
                <p className="text-sm mt-1">{item.university.tr}</p>
              </div>
              <div className="mx-7 mt-8 bg-green-light font-bold w-32 text-center rounded-md flex">
                <button
                  id={item?.id}
                  className="m-2 px-3 flex"
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
              <div className="w-80 mb-2 bg-grey-primary mx-auto mt-5 border border-t-1"></div>
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
                      {/* SVG path data */}
                    </svg>
                  </div>
                  <div className="mx-1">{item.city.tr}</div>
                </div>
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    {/* SVG path data */}
                  </svg>
                  <div className="mx-1">{item.null}null</div>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};
export default Favorites;
