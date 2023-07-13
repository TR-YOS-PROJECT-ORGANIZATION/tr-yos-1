import React from "react";
import resim2 from "../helper/resim2.jpg";

const DepartmentsHeader = () => {
  return (
    <div>
      <div className="header relative">
        <img src={resim2} alt="" className="w-full h-96 object-cover" />
        <div className="w-full h-96 bg-green-dark absolute top-0 left-0 opacity-70"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-5xl text-white">Departments</h1>
          <h3 className="text-2xl text-white text-center mt-4">
            All Departments
          </h3>
        </div>
      </div>
    </div>
  );
};

export default DepartmentsHeader;