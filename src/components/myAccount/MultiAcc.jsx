import React from "react";
import Dashboard from "./Dashboard";
import MyProfile from "./MyProfile";
import Messages from "./Messages";
import ChangePassword from "./ChangePassword";

const MultiAcc = ({ activeTab, setActiveTab }) => {
  const renderStep = () => {
    switch (activeTab) {
      case 1:
        return <Dashboard />;
      case 2:
        return <MyProfile />;
      case 3:
        return <Messages />;
      case 4:
        return <ChangePassword />;
      default:
        return null;
    }
  };

  return (
    <div className=" max-w-[55rem] min-w-[55rem]">
      <main>{renderStep(activeTab)}</main>
    </div>
  );
};

export default MultiAcc;
