import React, { useContext } from 'react'
import { Navigate, Outlet } from "react-router-dom";
import { YosContext } from './context/YosContext';

const PrivateRouter = () => {
      const { loginState } = useContext(YosContext);
  return loginState.status !== "success" ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRouter