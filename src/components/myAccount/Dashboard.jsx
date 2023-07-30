import React, { useContext } from "react";
import CardPre from "../card/CardPre";
import { YosContext } from "../../context/YosContext";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { like, compare, } = useContext(YosContext);
  return (
    <>
      <div className="grid grid-cols-3 text-center mb-16 shadow-md shadow-grey-primary ">
        <div className=" p-5 border-2 grid grid-rows-2 ">
          <Link to="/favorites" className="text-xl font-bold mb-3 underline">
            My Favorite Universities
          </Link>
          <Link to="/favorites" className="text-xl text-center">{like.length}</Link>
        </div>
        <div className=" p-5 border-2 grid grid-rows-2">
          <Link to="/compare" className="text-xl font-bold mb-3 underline">My Compare List</Link>
          <p className="text-xl text-center">{compare.length}</p>
        </div>
        <div className=" p-5 border-2 grid grid-rows-2">
          <p className="text-xl font-bold mb-3 underline">
            Unread Messages
          </p>
          <p className="text-xl text-center">8</p>
        </div>
        
      </div>
    </>
  );
};

export default Dashboard;
