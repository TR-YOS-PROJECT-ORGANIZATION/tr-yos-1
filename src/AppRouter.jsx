import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./pages/Home";
import Uni from "./pages/Unı";
import Departmens from "./pages/Departmens";
import RgisterModal from "./components/register/RgisterModal";
import Favorites from "./pages/Favorites";
import Compare from "./pages/Compare";
// import MyProfile from "./pages/MyProfile";
import MainAcc from "./components/myAccount/MainAcc";

const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/universities" element={<Uni />} />
        <Route path="/departments" element={<Departmens />} />
        <Route path="/register" element={<RgisterModal />} />
        <Route path="/myprofile" element={<MainAcc />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/compare" element={<Compare />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AppRouter;
