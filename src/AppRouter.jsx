import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./pages/Home";
import Uni from "./pages/Unı";
import Departmens from "./pages/Departmens";
import RgisterModal from "./components/register/RgisterModal";
import MyProfile from "./components/myAccount/MyProfile";
import FavoriteDepartmens from "./pages/FavoriteDepartmens";
import CompareDepartmens from "./pages/CompareDepartmens";


const AppRouter = () => {
  return (
    <>
      <Navbar />      
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/universities" element={<Uni />} />
        <Route path="/departments" element={<Departmens />} />
        <Route path="/register" element={<RgisterModal />} />
        <Route path="/myAccount" element={<MyProfile/>} />
        <Route path="/pages" element={<FavoriteDepartmens />} />
        <Route path="/pages" element={<CompareDepartmens />} />


      </Routes>
      <Footer />

    </>
  );
};

export default AppRouter;
