import React from "react";
import CardPre from "../CardPre";

const Dashboard = () => {
  return (
    <>
      <div className="border-2 rounded-lg w-full mb-16 shadow-md shadow-grey-primary ">
        <div>
          <p className="text-2xl font-bold p-5">My Favorite Universities</p>
          <div className="flex flex-wrap m-5 gap-4 justify-evenly">
            <CardPre />
            <CardPre />

            <CardPre />
            <CardPre />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
