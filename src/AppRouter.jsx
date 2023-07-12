import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Home from "../pages/Home";
import Uni from "../pages/Uni";
import Departmens from "../pages/Departmens";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/universities" element={<Uni />} />
        <Route path="/departments" element={<Departmens />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
