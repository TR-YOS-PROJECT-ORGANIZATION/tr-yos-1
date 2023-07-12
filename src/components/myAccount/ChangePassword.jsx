import React from "react";
import RightSaveButton from "./RightSaveButton";
const ChangePassword = () => {
  return (
    <div className="border-2 rounded-lg w-full mb-16 shadow-md shadow-grey-primary ">
      <div className=" justify-evenly p-5">
        <div className="  w-full mt-5">
          <label htmlFor="" className="font-bold">
            Current Password *
          </label>
          <input
            type="password"
            required
            className="w-full rounded-md mt-2 focus:border-green-light focus:ring-green-dark"
          />
        </div>
        <div className="w-full mt-5">
          <label htmlFor="" className="font-bold">
            New Password*
          </label>
          <input
            type="password"
            required
            className="w-full rounded-md mt-2 focus:border-green-light focus:ring-green-dark"
          />
        </div>
        <div className="w-full mt-5">
          <label htmlFor="" className="font-bold">
            Confirm Password*
          </label>
          <input
            type="password"
            required
            className="w-full rounded-md mt-2 focus:border-green-light focus:ring-green-dark"
          />
        </div>
        <RightSaveButton />
      </div>
    </div>
  );
};
export default ChangePassword;
