import React from "react";

const Dashboard = () => {
  return (
    <>
      <div className="border-2 rounded-lg w-full mb-16 shadow-md shadow-grey-primary ">
        <div>
          <p className="text-2xl font-bold p-5">Dashboard</p>
          <div className="flex flex-wrap m-5 gap-4 justify-evenly">
            <div className="border-2 p-4 rounded-xl shadow-md">
              <p className="font-bold mb-3">My Favorites</p>
              <p>8 Universities</p>
            </div>
            <div className="border-2 p-4 rounded-xl shadow-md">
              <p className="font-bold mb-3">Compare List</p>
              <p>12 Universities</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
