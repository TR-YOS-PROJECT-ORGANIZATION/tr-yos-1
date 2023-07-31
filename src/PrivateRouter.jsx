import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { YosContext } from "./context/YosContext";
import LoginModal from "./LoginModal";

const PrivateRouter = () => {
  const { userID, setShowModal, showModal } = useContext(YosContext);




  
  
  return userID ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRouter;
