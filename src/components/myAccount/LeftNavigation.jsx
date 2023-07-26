import React from "react";

const LeftNavigation = ({ activeTab, handleTabClick }) => {
  return (
    <>
      <div className="buton w-5/6 mx-auto text-center justify-center m-20">
        {/* Dashboard */}
        <div className="bg-gray-200 font-bold rounded-md mt-5 flex justify-center hover:bg-gray-400 duration-100 hover:text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-center self-center"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
            />
          </svg>

          <button
            onClick={() => handleTabClick(1)}
            className="m-2 mx-1 text-center"
          >
            Dashboard
          </button>
        </div>
        {/* My Profile */}
        <div className="bg-gray-200 font-bold rounded-md mt-2 flex justify-center hover:bg-gray-400 duration-100 hover:text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-center self-center"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>

          <button
            onClick={() => handleTabClick(2)}
            className="m-2 mx-1 text-center"
          >
            My Profile
          </button>
        </div>
        {/* Messages */}
        <div className="bg-gray-200 font-bold rounded-md mt-2 flex justify-center hover:bg-gray-400 duration-100 hover:text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-center self-center"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>

          <button
            onClick={() => handleTabClick(3)}
            className="m-2 mx-1 text-center"
          >
            Messages
          </button>
        </div>
        {/* Change Password */}
        <div className="bg-gray-200 font-bold rounded-md mt-2 flex justify-center hover:bg-gray-400 duration-100 hover:text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-center self-center"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
            />
          </svg>

          <button
            onClick={() => handleTabClick(4)}
            className="m-2 mx-1 text-center"
          >
            Change Password
          </button>
        </div>
      </div>
    </>
  );
};

export default LeftNavigation;
