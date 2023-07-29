import axios from "axios";

import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
export const YosContext = createContext();
const YosContextProvider = ({ children }) => {
  const [location, setLocation] = useState([]);
  const [uni, setUni] = useState([]);
  const [depertman, setDepertman] = useState([]);
  const [city, setCity] = useState([]);
  const [uniId, setUniId] = useState([]);
  const [filterDep, setFilterDep] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [cardPage, setCardPage] = useState([]);
  const [userID, setUserID] = useState(localStorage.getItem("user") || "");
  const [loginState, setLoginState] = useState(
    JSON.parse(localStorage.getItem("userInfo")) || ""

  );
  const [like, setLike] = useState([]);
  const [compare, setCompare] = useState([]);
  const [deleteCompare, setDeleteCompare] = useState([]);
  const [active, setActive] = useState([]);
  const departmentID = depertman.map((item) => item.id);
  const navigate = useNavigate();
  const ApiKey =
    "mBbAINPS8DwIL5J9isMwnEJGr4OgSkC55SCm2BqnVeJ8r1gxGFlrl8mFN7Q18GA9D/HsXeDS5arTZx6l974b31678f8f18db56809a16f9728baf";
  const BASE_URL_LOCA = `https://tr-yös.com/api/v1/location/allcities.php?token=${ApiKey}`;
  const BASE_URL_UNI = `https://tr-yös.com/api/v1/education/alluniversities.php?token=${ApiKey}`;
  const BASE_URL_DEP = `https://tr-yös.com/api/v1/record/alldepartments.php?token=mBbAINPS8DwIL5J9isMwnEJGr4OgSkC55SCm2BqnVeJ8r1gxGFlrl8mFN7Q18GA9D/HsXeDS5arTZx6l974b31678f8f18db56809a16f9728baf`;
  const BASE_URL_USER = `https://tr-yös.com/api/v1/users/newuser.php?token=mBbAINPS8DwIL5J9isMwnEJGr4OgSkC55SCm2BqnVeJ8r1gxGFlrl8mFN7Q18GA9D/HsXeDS5arTZx6l974b31678f8f18db56809a16f9728baf`;
  const BASE_URL_LOGIN = `https://tr-yös.com/api/v1/users/login.php?token=mBbAINPS8DwIL5J9isMwnEJGr4OgSkC55SCm2BqnVeJ8r1gxGFlrl8mFN7Q18GA9D/HsXeDS5arTZx6l974b31678f8f18db56809a16f9728baf`;
  const BASE_URL_CARD = `https://tr-yös.com/api/v1/record/alldepartments.php?page=${currentPage}&token=mBbAINPS8DwIL5J9isMwnEJGr4OgSkC55SCm2BqnVeJ8r1gxGFlrl8mFN7Q18GA9D/HsXeDS5arTZx6l974b31678f8f18db56809a16f9728baf`;
  
  //todo ŞİFRE DEĞİŞTİRME: mevcut şifreyi doğrulama
  const changePasswordStep1 = async (currentPassword, newPassword) => {
    try {
      const BASE_URL_CHANGE_PASSWORD_STEP_1 = `https://tr-yös.com/api/v1/users/changepassword.php?user_id=${userID}&token=${ApiKey}`;
      let data = new FormData();
      data.append("password_current", currentPassword);
      data.append("password_new1", newPassword);
      data.append("password_new2", newPassword);
      data.append("user_id", `${userID}`);
      const response = await axios.post(BASE_URL_CHANGE_PASSWORD_STEP_1, data);
      console.log(response.data);
      console.log(newPassword);
      console.log(currentPassword);
      changePasswordStep2(newPassword, currentPassword);
    } catch (error) {
      console.error("şifre değiştirme hatası adım: 1", error);
    }
  };
  //todo: ŞİFRE DEĞİŞTİRME: şifre belirleme
  const changePasswordStep2 = async (newPassword, currentPassword) => {
    try {
      const BASE_URL_CHANGE_PASSWORD_STEP_2 = `https://tr-yös.com/api/v1/users/changepassword2.php?user_id=${userID}&token=${ApiKey}`;
      const requestData = {
        password_current: currentPassword,
        password_new1: newPassword,
        password_new2: newPassword,
      };
      const response = await axios.put(
        BASE_URL_CHANGE_PASSWORD_STEP_2,
        requestData
      );
      console.log(response.data);
      console.log(newPassword);
      console.log(currentPassword);
    } catch (error) {
      console.error("şifre değiştirme hatası adım 2", error);
    }
  };
  //todo:email
  // const addemail = async (emailAddress) => {
  //   try {
  //     const BASE_URL_SENDEMAIL = `https://tr-yös.com/api/v1/record/addemail.php?token=${ApiKey}`;
  //     let data = new FormData();
  //     data.append("email", emailAddress);
  //     const response = await axios.post(BASE_URL_SENDEMAIL, data);
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error("Mail gönderme hatası", error);
  //   }
  // };
  const getLoca = async () => {
    try {
      const { data } = await axios(BASE_URL_LOCA);
      setLocation(data);
    } catch (error) {
      console.log(error);
    }
  };
  const getUni = async () => {
    try {
      const { data } = await axios(BASE_URL_UNI);
      setUni(data);
    } catch (error) {
      console.log(error);
    }
  };
  const getDep = async () => {
    try {
      const { data } = await axios(BASE_URL_DEP);
      setDepertman(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLoca();
    getUni();
    getDep();
    getPage(currentPage);
  
    if (userID) {
      getFavori(userID);
      getCompare(userID);
    }
  }, []);
  
  console.log(currentPage);
    const getPage = async (currentPage) => {
      try {
        const BASE_URL_CARD = `https://tr-yös.com/api/v1/record/alldepartments.php?page=${currentPage}&token=mBbAINPS8DwIL5J9isMwnEJGr4OgSkC55SCm2BqnVeJ8r1gxGFlrl8mFN7Q18GA9D/HsXeDS5arTZx6l974b31678f8f18db56809a16f9728baf`;

        const { data } = await axios(BASE_URL_CARD);
        setCardPage(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

  const handleLike = (id, userID) => {
    console.log(id);
    postFavori(id, userID);
  };
  // console.log(like);
  const handleDeleteFavori = (id) => {
    delFavori(id);
  };

  const handleCompare = (id) => {
    postCompare(id);
  };

  const handleDelete = (id) => {
    try {
      const BASE_URL_DELETECOMPARE = `https://tr-yös.com/api/v1/users/deletecompare.php?id=${id}&user_id=${userID}&token=${ApiKey}`;
      axios.delete(`${BASE_URL_DELETECOMPARE}`);
      setCompare((prevCompare) => prevCompare.filter((item) => item !== id));
    } catch (error) {
      console.log(error);
    }
  };
  const register = async (userInfo) => {
    try {
      const { data } = await axios.post(`${BASE_URL_USER}`, userInfo);
      console.log(data);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const login = async (userInfo) => {
    try {
      const { data } = await axios.post(`${BASE_URL_LOGIN}`, userInfo);
      const { userID } = data;
      navigate("/");
      setLoginState(data);
      localStorage.setItem("userInfo", JSON.stringify(data));
      setUserID(userID);
      getCompare(userID);
      getFavori(userID);
      localStorage.setItem("user", userID);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = () => {
    setUserID([]);
    localStorage.clear();
    setLoginState([]);
    setLike([]);
  };

  const getFavori = async (id) => {
    try {
      const BASE_URL_FAVORIGET = ` https://tr-yös.com/api/v1/users/allfavorites.php?user_id=${id}&token=${ApiKey} `;
      const { data } = await axios.get(`${BASE_URL_FAVORIGET}`);
      if (data.departments) {
        setLike(data.departments);
      }
      // console.log(data.departments);
    } catch (error) {
      // console.log(error);
    }
  };

  const postFavori = async (id, userID) => {
    try {
      const BASE_URL_FAVORIADD = `  https://tr-yös.com/api/v1/users/addfavorite.php?id=${id}&user_id=${userID}&token=${ApiKey}`;
      const { data } = await axios.post(`${BASE_URL_FAVORIADD}`);
      if (data) {
        setActive([...active, id]);
      }
      console.log(data);
      // setLike([...like, id]);
      console.log(like);
      getFavori(userID);
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(userID);
  const delFavori = (id) => {
    try {
      const BASE_URL_FAVORIDELL = `https://tr-yös.com/api/v1/users/deletefavorite.php?id=${id}&user_id=${userID}&token=${ApiKey} `;
      axios.delete(`${BASE_URL_FAVORIDELL}`);
      setLike((like) => like.filter((item) => item !== id));
      // getFavori(userID);
      console.log(like);
    } catch (error) {
      console.log(error);
    }
  };

  const getCompare = async (id) => {
    try {
      const BASE_URL_COMPAREGET = ` https://tr-yös.com/api/v1/users/allcompares.php?user_id=${id}&token=${ApiKey} `;
      const { data } = await axios.get(`${BASE_URL_COMPAREGET}`);
      console.log(data);
      if (data.departments) {
        setCompare(data.departments);
      }
      console.log(compare);
    } catch (error) {
      // console.log(error);
    }
  };
  const postCompare = async (id) => {
    try {
      const BASE_URL_COMPAREADD = `https://tr-yös.com/api/v1/users/addcompare.php?id=${id}&user_id=${userID}&token=${ApiKey}`;
      const { data } = await axios.post(`${BASE_URL_COMPAREADD}`);
      console.log(data);
      setCompare([...compare, id]);
      console.log(compare);
      getCompare(userID);
    } catch (error) {
      console.log(error);
    }
  };

  const getCities = () => {
    return city?.map((item) => item.value);
  };
  const cities = getCities();
  const getUniId = () => {
    return uniId?.map((item) => item.value);
  };
  const uniIdies = getUniId();
  const getFilterDep = () => {
    return filterDep?.map((item) => item.label);
  };
  const filterDepss = getFilterDep();
  const options = location?.map((item) => ({
    value: item.id,
    label: item.tr,
  }));
  const options1 = uni
    ?.filter((item) => cities.includes(item.city))
    .map((item) => ({
      value: item.code,
      label: item.tr,
      img: item.images,
    }));
  const options2 = depertman
    ?.filter((item) => uniIdies.includes(item.university.code))
    .map((item) => ({
      value: item.department.code,
      label: item.department.tr,
      faculty: item.faculty.tr,
      university: item.university.tr,
      address: item.city.tr,
      id: item.id,
      adress2: item.data?.adress,
    }));
  const options3 = depertman?.map((item) => ({
    value: item.department.code,
    label: item.department.tr,
    faculty: item.faculty.tr,
    university: item.university.tr,
    address: item.city.tr,
    price: item.null,
    id: item.id,
    uniID: item.uniID,
    adress2: item.data?.adress,
    phone: item.data?.phone,
    mail:item.data?.email,
    web:item.data?.web
  }));
  const optionsCard = depertman
    ?.filter((item) => filterDepss.includes(item.university.code))
    .map((item) => ({
      value: item.department.code,
      label: item.department.tr,
    }));
  const filterrrr = options2?.filter((item) =>
    filterDepss.includes(item.label)
  );
  const filteredID = depertman?.filter((item) => like.includes(item.id));

  const filteredCompare = depertman?.filter((item) =>
    compare?.includes(item.id)
  );
  // console.log(filteredCompare);

  const values = {
    options,
    options1,
    options2,
    setCity,
    setUniId,
    setFilterDep,
    uni,
    filterDep,
    uniId,
    city,
    optionsCard,
    filterrrr,
    options3,
    register,
    login,
    postFavori,
    loginState,
    like,
    setLike,
    handleLike,
    departmentID,
    filteredID,
    getFavori,
    compare,
    setCompare,
    handleCompare,
    filteredCompare,
    handleDelete,
    delFavori,
    userID,
    handleDeleteFavori,
    currentPage,
    setCurrentPage,
    getPage,
    active,
    handleLogout,
    cardPage,   
    changePasswordStep1,
    changePasswordStep2,
    // addemail,
  };
  return <YosContext.Provider value={values}>{children}</YosContext.Provider>;
};
export default YosContextProvider;
