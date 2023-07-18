import React from "react";

const FavoriteDepartmens = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100">
      {/* Yeşil arka plan */}
      <div className="h-1/4 w-full bg-green-dark">
        <h6 className="font-extrabold text-5xl text-white mt-10 mx-7">
          My Favorite Departments
        </h6>
      </div>

      {/* Beyaz arka plan */}
      <div className="h-1/4 w-full bg-white flex flex-col items-center justify-center"></div>

      {/* Yeşil arka plan */}
      <div className=" text-white h-2/4 w-full bg-green-dark flex flex-col items-center justify-center  ">
        <h4 className="font-extrabold text-3xl">
          Are You Already Working With Us ?
        </h4>
        <p className=" text-lg mt-5 text-center ">
        At vero eos at accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque <br class="hidden md:block" /> corrupti quos dolores
          et quas molestias
        </p>
        <div className="w-[500px] mx-auto mb-16 mt-5">
        <input
          type="email"
          id="email"
          className="bg-green-light absolute text-gray-900 text-sm rounded-2xl border-2 border-green-dark focus:ring-blue-500 focus:border-blue-500 block w-[500px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter your E-mail"
          required=""
        />
        <button
          type="button"
          className="text-white relative left-96 top-2 bg-green-dark font-bold focus:ring-4 focus:ring-blue-300  rounded-lg text-sm h-6 w-24  "
        >
          Subscribe
        </button>
      </div>
  
      </div>
    </div>
  );
};

export default FavoriteDepartmens;
