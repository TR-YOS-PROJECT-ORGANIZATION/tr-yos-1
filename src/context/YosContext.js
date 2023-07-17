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
  const [userID, setUserID] = useState([]);
  const [loginState, setLoginState] = useState([]);
  const [like, setLike] = useState([]);

  const departmentID = depertman.map((item) => item.id);

  // const {}=depertman
  const navigate = useNavigate();
  const ApiKey =
    "mBbAINPS8DwIL5J9isMwnEJGr4OgSkC55SCm2BqnVeJ8r1gxGFlrl8mFN7Q18GA9D/HsXeDS5arTZx6l974b31678f8f18db56809a16f9728baf";
  const BASE_URL_LOCA = `https://tr-yös.com/api/v1/location/allcities.php?token=${ApiKey}`;
  const BASE_URL_UNI = `https://tr-yös.com/api/v1/education/alluniversities.php?token=${ApiKey}`;
  const BASE_URL_DEP = `https://tr-yös.com/api/v1/record/alldepartments.php?token=mBbAINPS8DwIL5J9isMwnEJGr4OgSkC55SCm2BqnVeJ8r1gxGFlrl8mFN7Q18GA9D/HsXeDS5arTZx6l974b31678f8f18db56809a16f9728baf`;

  const BASE_URL_USER = `https://tr-yös.com/api/v1/users/newuser.php?token=mBbAINPS8DwIL5J9isMwnEJGr4OgSkC55SCm2BqnVeJ8r1gxGFlrl8mFN7Q18GA9D/HsXeDS5arTZx6l974b31678f8f18db56809a16f9728baf`;

  const BASE_URL_LOGIN = `https://tr-yös.com/api/v1/users/login.php?token=mBbAINPS8DwIL5J9isMwnEJGr4OgSkC55SCm2BqnVeJ8r1gxGFlrl8mFN7Q18GA9D/HsXeDS5arTZx6l974b31678f8f18db56809a16f9728baf`;

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
    // getFavori();
  }, []);

  const handleLike = (id) => {
    console.log(id);
    postFavori(id);
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

  console.log(userID);

  const login = async (userInfo) => {
    try {
      const { data } = await axios.post(`${BASE_URL_LOGIN}`, userInfo);
      navigate("/");
      console.log(data);
      setLoginState(data);
      setUserID(data.userID);
    } catch (error) {
      console.log(error);
    }
  };

  const getFavori = async (id) => {
    try {
      const BASE_URL_FAVORIADD = ` https://tr-yös.com/api/v1/users/allfavorites.php?id=${id}&token=${ApiKey} `;
      const { data } = await axios.get(`${BASE_URL_FAVORIADD}`);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  const postFavori = async (id) => {
    try {
      const BASE_URL_FAVORIADD = `  https://tr-yös.com/api/v1/users/addfavorite.php?id=${id}&user_id=${userID}&token=${ApiKey}`;
      const { data } = await axios.post(`${BASE_URL_FAVORIADD}`);
      console.log(data);
      setLike(...like, departmentID);
      getFavori(userID);
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
    }));

  const options3 = depertman?.map((item) => ({
    value: item.department.code,
    label: item.department.tr,
    faculty: item.faculty.tr,
    university: item.university.tr,
    address: item.city.tr,
    price: item.null,
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
    // addToFavorites,
  };
  return <YosContext.Provider value={values}>{children}</YosContext.Provider>;
};

export default YosContextProvider;
