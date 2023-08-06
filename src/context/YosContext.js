import axios from "axios";
import { async } from "q";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
export const YosContext = createContext();
const YosContextProvider = ({ children }) => {
  const [location, setLocation] = useState([]);
  const [uni, setUni] = useState([]);
  const [depertman, setDepertman] = useState([]);
  const [city, setCity] = useState([]);
  const [uniId, setUniId] = useState([]);
  const [filterDep, setFilterDep] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageUni, setCurrentPageUni] = useState(1);
  const [deneme, setDeneme] = useState([]);
  const [cardPage, setCardPage] = useState([]);
  const [cardPageUni, setCardPageUni] = useState([]);
  const [userID, setUserID] = useState(localStorage.getItem("user") || "");
  const [loginState, setLoginState] = useState(
    JSON.parse(localStorage.getItem("userInfo")) || ""
  );
  const [like, setLike] = useState([]);
  const [compare, setCompare] = useState([]);
  const [deleteCompare, setDeleteCompare] = useState([]);
  const [active, setActive] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [userUpdate, setUserUpdate] = useState([]);
  const [uniCode, setUniCode] = useState(null);
  const [universityDetail, setUniversityDetail] = useState([]);

  const lngs = {
    en: { nativeName: "English" },
    tr: { nativeName: "Turkish" },
  };
  const selectedLng = Object.keys(lngs).map((lng) => lng);

  const [language, setLanguage] = useState("tr");

  const handleLanguage = (id) => {
    setLanguage(id);
  };

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

  const uniDetail = async (clickedUniCode) => {
    try {
      if (!clickedUniCode) {
        console.log("University code is missing.");
        return;
      }
      const BASE_URL_UNIDETAIL = `https://tr-yös.com/api/v1/record/departmentsbyuni.php?uni_code=${clickedUniCode}&token=${ApiKey}`;
      const { data } = await axios.get(BASE_URL_UNIDETAIL);
      console.log(data);
      setUniversityDetail(data);
      console.log("University Detail state updated:", universityDetail);
    } catch (error) {
      console.log(error);
    }
  };

  //todo kullanıcı bilgilerinin güncellenmesi

  //

  const postUser = async (userInfo) => {
    try {
      const BASE_URL_UPDATEUSER = `https://tr-yös.com/api/v1/users/updateuser.php?user_id=${userID}&token=${ApiKey}`;
      const { data } = await axios.post(`${BASE_URL_UPDATEUSER}`, userInfo);
      console.log(data);
      setUserUpdate(data);
    } catch (error) {
      console.log(error);
    }
  };

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
      toast.success("Üye şifre değişikliği başarılı", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      console.error("şifre değiştirme hatası adım 2", error);
    }
  };
  //todo:email
  const addemail = async (email) => {
    try {
      const BASE_URL_SENDEMAIL = `https://tr-yös.com/api/v1/record/addemail.php?token=${ApiKey}`;
      let data = new FormData();
      data.append("email", email);
      const response = await axios.post(BASE_URL_SENDEMAIL, data);
      console.log(response.data);

      toast.success("E-mail ekleme başarılı", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      console.error("Mail gönderme hatası", error);
    }
  };

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

    getPageUni(currentPageUni);
    if (userID) {
      getFavori(userID);
      getCompare(userID);
    }
  }, []);

  const getPage = async (currentPage) => {
    try {
      const BASE_URL_CARD = `https://tr-yös.com/api/v1/record/alldepartments.php?page=${currentPage}&token=mBbAINPS8DwIL5J9isMwnEJGr4OgSkC55SCm2BqnVeJ8r1gxGFlrl8mFN7Q18GA9D/HsXeDS5arTZx6l974b31678f8f18db56809a16f9728baf`;

      const { data } = await axios(BASE_URL_CARD);
      setCardPage(data);
    } catch (error) {
      console.log(error);
    }
  };
  const getPageUni = async (currentPageUni) => {
    try {
      const BASE_URL_CARD = `https://tr-yös.com/api/v1/education/alluniversities.php?page=${currentPageUni}&token=mBbAINPS8DwIL5J9isMwnEJGr4OgSkC55SCm2BqnVeJ8r1gxGFlrl8mFN7Q18GA9D/HsXeDS5arTZx6l974b31678f8f18db56809a16f9728baf`;

      const { data } = await axios(BASE_URL_CARD);
      setCardPageUni(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleLike = (id, userID) => {
    postFavori(id, userID);
  };

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
      if (userID) {
        getCompare(userID);
        getFavori(userID);
      }
      localStorage.setItem("user", userID);

      // Login işlemi başarılı olduğunda toast bildirimi gösterme
      toast.success("Üye Girişi Başarılı", {
        position: "top-right",
        autoClose: 2000, // 2 saniye sonra otomatik olarak kapanacak
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = () => {
    setUserID([]);
    localStorage.clear();
    setLoginState([]);
    setLike([]);
    setCompare([]);
    setShowModal(false);
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
  console.log(uni);
  console.log(depertman);
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
    label: language === "tr" ? item.tr : item.en,
  }));
  const options1 = uni
    ?.filter((item) => cities.includes(item.city))
    .map((item) => ({
      value: item.code,
      label: language === "tr" ? item.tr : item.en,
      img: item.images,
    }));
  console.log(uni);

  const options2 = depertman
    ?.filter((item) => uniIdies.includes(item.university.code))
    .map((item) => ({
      label: language === "tr" ? item.department.tr : item.department.en,
      faculty: language === "tr" ? item.faculty.tr : item.faculty.en,
      university: language === "tr" ? item.university.tr : item.university.en,
      address: language === "tr" ? item.city.tr : item.city.en,
      value: item.department.code,
      uniCode: item.university.code,
      id: item.id,
      adress2: item.data?.adress,
      uniid: item.uniID,
      phone: item.data?.phone,
      mail: item.data?.email,
      web: item.data?.web,
    }));

  const options3 = depertman?.map((item) => ({
    value: item.department.code,
    label: language === "tr" ? item.department.tr : item.department.en,
    faculty: language === "tr" ? item.faculty.tr : item.faculty.en,
    university: language === "tr" ? item.university.tr : item.university.en,
    address: language === "tr" ? item.city.tr : item.city.en,
    price: item?.price,
    id: item.id,
    uniID: item.uniID,
    adress2: item.data?.adress,
    phone: item.data?.phone,
    uniidcode: item.university.code,
    mail: item.data?.email,
    web: item.data?.web,
  }));

  const optionsCard = depertman
    ?.filter((item) => filterDepss.includes(item.university.code))
    .map((item) => ({
      value: item.department.code,
      label: language === "tr" ? item.department.tr : item.department.en,
    }));
  const filterrrr = options2?.filter((item) =>
    filterDepss.includes(item.label)
  );
  const filteredID = depertman?.filter((item) => like.includes(item.id));

  const filteredCompare = depertman?.filter((item) =>
    compare?.includes(item.id)
  );

  const filterDuplicateUnis = (uniler) => {
    const uniqueUni = {};
    uniler.forEach((item) => {
      const universityName = item.university;
      if (!uniqueUni[universityName]) {
        uniqueUni[universityName] = item;
      }
    });
    return Object.values(uniqueUni);
  };
  const filterUni = (uniler) => {
    const uniqueUni = {};
    uniler.forEach((item) => {
      const universityName = item.university;
      if (!uniqueUni[universityName]) {
        uniqueUni[universityName] = item;
      }
    });
    return Object.values(options3);
  };

  const filteredUnis = filterDuplicateUnis(options3);
  const filteredUnidata = filterDuplicateUnis(options3);
  const first12Universities = filteredUnidata.slice(0, 12);

  const values = {
    setUserUpdate,
    first12Universities,
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

    getPageUni,
    currentPageUni,
    setCurrentPageUni,
    cardPageUni,
    handleLogout,
    cardPage,
    changePasswordStep1,
    changePasswordStep2,
    addemail,
    showModal,
    setShowModal,
    postUser,
    userUpdate,
    uniCode,
    setUniCode,
    uniDetail,
    universityDetail,
    language,
    setLanguage,
    selectedLng,
    handleLanguage,
    filteredUnidata,
  };
  return (
    <YosContext.Provider value={values}>
      {children} <ToastContainer />{" "}
    </YosContext.Provider>
  );
};
export default YosContextProvider;
