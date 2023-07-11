import React from "react";

const RightMyAccount = () => {
  return (
    <>
      <div className="flex justify-evenly">
        <div className=" w-5/12">
          <label htmlFor="" className="font-bold">
            Your Name*
          </label>
          <input
            type="text"
            required
            className="w-full rounded-md mt-2 focus:border-green-light focus:ring-green-dark"
          />
        </div>
        <div className="w-5/12">
          <label htmlFor="" className="font-bold">
            E-mail*
          </label>
          <input
            type="email"
            required
            className="w-full rounded-md mt-2 focus:border-green-light focus:ring-green-dark"
          />
        </div>
      </div>
      <div className="flex justify-evenly mt-5">
        <div className=" w-5/12">
          <p className="font-bold">Country*</p>
          <select className="w-full rounded-md mt-2 focus:border-green-light focus:ring-green-dark">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
        <div className="w-5/12">
          <label htmlFor="" className="font-bold">
            City
          </label>
          <input
            type="email"
            required
            className="w-full rounded-md mt-2 focus:border-green-light focus:ring-green-dark"
          />
        </div>
      </div>
      <div className="flex justify-evenly mt-5">
        <div className=" w-5/12">
          <label htmlFor="" className="font-bold">
            Your Name*
          </label>
          <input
            type="text"
            required
            className="w-full rounded-md mt-2 focus:border-green-light focus:ring-green-dark"
          />
        </div>
        <div className="w-5/12"></div>
      </div>
      <div className="flex justify-evenly mt-5">
        <div className=" w-[50rem] flex flex-col mx-8">
          <label htmlFor="" className="font-bold">
            About
          </label>
          <textarea
            type="text"
            required
            className="w-full  h-40 rounded-md mt-2 focus:border-green-light focus:ring-green-dark"
          ></textarea>
        </div>
      </div>
    </>
  );
};

export default RightMyAccount;
