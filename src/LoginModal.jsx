import React, { useContext, useState } from "react";
// import LoginForm from "./LoginForum";
import Login from "./Login";
import { YosContext } from "./context/YosContext";

const LoginModal = () => {
  const { setShowModal, showModal } = useContext(YosContext);
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <button
        onClick={toggleModal}
        className="text-white bg-green-dark font-bold focus:ring-4 focus:ring-blue-300  rounded-lg text-sm px-5
               py-2.5 mr-2 mb-2 "
        type="button"
      >
        Sign In
      </button>

      {showModal && (
        <div className="fixed flex justify-center items-center shadow z-[100]  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
          <div className="relative w-full max-w-2xl max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl  font-semibold text-gray-900 dark:text-white">
                  SIGN IN
                </h3>
                <button
                  onClick={toggleModal}
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div>
                <Login />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginModal;
