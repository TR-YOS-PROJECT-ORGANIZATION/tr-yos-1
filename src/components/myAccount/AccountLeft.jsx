import React, { useState } from "react";
import resim3 from "../../helper/resim3.jpg";
import LeftButons from "./LeftButons";
import LeftNavigation from "./LeftNavigation";
import RightSocialAccounts from "./RightSocialAccounts";

const AccountLeft = ({ activeTab, handleTabClick }) => {
  return (
    <div className="border-2 w-[28rem] pb-8 h-[55rem] rounded-lg flex flex-col justify-center items-center shadow-md shadow-grey-primary mb-16">
      <div className="profile-pic my-6 mt-1">
        <img
          src={resim3}
          alt=""
          className="rounded-full w-28 h-28 object-cover"
        />
      </div>

      <div className="info text-center">
        <p className="font-bold text-lg tracking-wide">Name Surname</p>
        <p>name@gmail.com</p>
      </div>

      <LeftButons />
      <RightSocialAccounts/>
      <LeftNavigation activeTab={activeTab} handleTabClick={handleTabClick} />
    </div>
  );
};

export default AccountLeft;
