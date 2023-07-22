import React from "react";
import CardPre from "../card/CardPre";

const Dashboard = () => {
  return (
    <>
      <div className="grid grid-cols-4 text-center mb-16 shadow-md shadow-grey-primary ">
        <div className=" p-5 border-2 grid grid-rows-2 ">
          <p className="text-xl font-bold mb-3 underline">
            My Favorite Universities
          </p>
          <p className="text-xl text-center">8</p>
        </div>
        <div className=" p-5 border-2 grid grid-rows-2">
          <p className="text-xl font-bold mb-3 underline">My Compare List</p>
          <p className="text-xl text-center">8</p>
        </div>
        <div className=" p-5 border-2 grid grid-rows-2">
          <p className="text-xl font-bold mb-3 underline">
            My Favorite Universities
          </p>
          <p className="text-xl text-center">8</p>
        </div>
        <div className=" p-5 border-2 grid grid-rows-2">
          <p className="text-xl font-bold mb-3 underline">
            My Favorite Universities
          </p>
          <p className="text-xl text-center">8</p>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
