import React, { useState } from "react";
import resim3 from "../../helper/resim3.jpg";
import LeftButons from "./LeftButons";
import LeftNavigation from "./LeftNavigation";


const AccountLeft = ({ activeTab, handleTabClick }) => {
  return (
    <div className="border-2 max-w-[25rem] min-w-[25rem] pb-8 h-[55rem] rounded-lg flex flex-col justify-center items-center shadow-md shadow-grey-primary ">
      <div className="profile-pic  ">
        <img
          src={resim3}
          alt=""
          className="rounded-full w-28 h-28 object-cover"
        />
      </div>

      <div className="info text-center m-10">
        <p className="font-bold text-lg tracking-wide">Name Surname</p>
        <p>name@gmail.com</p>
      </div>

      <LeftButons />
      <LeftNavigation activeTab={activeTab} handleTabClick={handleTabClick} />
    </div>
  );
};

export default AccountLeft;
