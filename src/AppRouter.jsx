import React, { useContext } from "react";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
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
import DepartmentDetail from "./pages/DepartmentDetail";
import { YosContext } from "./context/YosContext";
import CardPre from "./components/card/CardPre";
import UniversityDetail from "./pages/UniversityDetail";
import PrivateRouter from "./PrivateRouter";
import Login from "./Login";


const AppRouter = () => {
  const { departmentID, uniId } = useParams();
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/universities" element={<Uni />} />
        <Route path="/departments" element={<Departmens />} />
        <Route path="/register" element={<RgisterModal />} />
        <Route path="/login" element={<Login />} />
        <Route path="" element={<PrivateRouter/>}>
          <Route path="/myprofile" element={<MainAcc />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/compare" element={<Compare />} />
        <Route
          path="/departments/department/:departmentID"
          element={<DepartmentDetail departmentID={departmentID} />}
        />
        {/* <Route path="/universities:departmentID" element={<UniversityDetail departmentID={uniId} />} /> */}
        <Route
          path="/universities/university/:universityCode"
          element={<UniversityDetail universityCode={uniId} />}
        />
        </Route>
        

        {/* <Route path="/departments/department/:departmentID" element={<UniDetail departmentID={departmentID} />} /> */}

      </Routes>
      <Footer />    
 
    </>
  );
};
export default AppRouter;
