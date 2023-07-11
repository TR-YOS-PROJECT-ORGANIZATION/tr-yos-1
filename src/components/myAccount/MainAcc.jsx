import React, { useState } from "react";
import LeftNavigation from "./LeftNavigation";
import MultiAcc from "./MultiAcc";
import AccountLeft from "./AccountLeft";

const MainAcc = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="flex mt-10 w-10/12 m-auto space-x-10">
      <AccountLeft activeTab={activeTab} handleTabClick={handleTabClick} />
      {/* <LeftNavigation activeTab={activeTab} handleTabClick={handleTabClick} /> */}
      <MultiAcc activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
};

export default MainAcc;
