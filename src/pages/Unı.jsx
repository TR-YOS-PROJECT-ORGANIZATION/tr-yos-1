import React, { useContext, useEffect } from "react";
import { YosContext } from "../context/YosContext";
import PaginationPage from "./Pagination";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
const Uni = () => {
  const { options3, uniID, uniCode, setUniCode, uniDetail, universityDetail,first12Universities } =
    useContext(YosContext);
 
  const { t } = useTranslation();
  // const { uniCode } = useParams();
  const handleUniversityClick = async (clickedUniCode) => {
    setUniCode(clickedUniCode);
    uniDetail(clickedUniCode);
  };
  return (
    <>
      <div>
        <div className="opacity-70 relative overflow-hidden h-[15rem] bg-center bg-no-repeat p-12 text-center bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')]">
          <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed">
            <div className="flex h-full items-center justify-center">
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
          {first12Universities.map((item) => (
            <Link  to={`/universities/university/${item.university}`}
                      
                        onClick={() => handleUniversityClick(item.uniidcode)} key={item.uniidcode}>
            
              <div className="flex flex-col gap-5 justify-center items-center mt-5">
                <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                  {" "}
                  <img
                    className=" rounded-t-lg p-3 h-40 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                    src="https://upload.wikimedia.org/wikipedia/tr/4/4c/Afyon_Kocatepe_%C3%9Cniversitesi_logo.png"
                    alt=""
                  />
                  <div className="flex flex-col justify-between p-4 leading-normal">
                    {" "}
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                      <p
                       
                      >
                        {item.university}
                      </p>
                    </h5>
                    <div className="flex gap-3">
                      <span>
                        {" "}
                        <svg
                          class="w-6 h-6 text-gray-800 dark:text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 16 20"
                        >
                          <path d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                        </svg>{" "}
                      </span>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {item.address}
                      </p>
                    </div>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Here are the biggest enterprise technology acquisitions of
                      2021 so far, in reverse chronological order.
                    </p>
                    <div>
                      <button
                        type="button"
                        class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                      >
                        {item.faculty?.length} Faculties
                      </button>
                      <button
                        type="button"
                        class="focus:outline-none text-black bg-green-200 hover:bg-green-300 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                      >
                        {item.label.length} Department
                      </button>
                      <button
                        type="button"
                        class="inline-flex items-center text-center focus:outline-none text-black bg-gray-300 hover:bg-gray-400 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                      >
                        {item?.phone}
                        <svg
                          class="w-6 h-6 text-gray-800 dark:text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 19 18"
                        >
                          <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
export default Uni;