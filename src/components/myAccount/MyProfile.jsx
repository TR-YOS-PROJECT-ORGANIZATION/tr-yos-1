import React from "react";
import RightMyAccount from "./RightMyAccount";
import RightSocialAccounts from "./RightSocialAccounts";
import RightSaveButton from "./RightSaveButton";

const MyProfile = () => {
  return (
    <>
      <div className="border-2 rounded-lg w-full mb-16 shadow-md shadow-grey-primary ">
        <div>
          <p className="text-2xl font-bold p-5">My Account</p>
          <RightMyAccount />
          {/* <RightSocialAccounts /> */}
          <RightSaveButton />
        </div>
      </div>
    </>
  );
};

export default MyProfile;
