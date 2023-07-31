import React from "react";
import RightMyAccount from "./RightMyAccount";

import { useTranslation } from "react-i18next";

const MyProfile = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="border-2 rounded-lg w-full mb-16 shadow-md shadow-grey-primary ">
        <div>
          <p className="text-2xl font-bold p-5">{t("myProfile")}</p>
          <RightMyAccount />
          {/* <RightSocialAccounts /> */}
     
        </div>
      </div>
    </>
  );
};

export default MyProfile;
