import React from "react";

const AppRouter = () => {
  const [location, setLocation] = useState([]);
  const [uni, setUni] = useState([]);
  const [depertman, setDepertman] = useState([]);
  const [city, setCity] = useState([]);
  const [uniId, setUniId] = useState([]);

  const ApiKey =
    "mBbAINPS8DwIL5J9isMwnEJGr4OgSkC55SCm2BqnVeJ8r1gxGFlrl8mFN7Q18GA9D/HsXeDS5arTZx6l974b31678f8f18db56809a16f9728baf";
  const BASE_URL_LOCA = `https://tr-yös.com/api/v1/location/allcities.php?token=${ApiKey}`;
  const BASE_URL_UNI = `https://tr-yös.com/api/v1/education/alluniversities.php?token=${ApiKey}`;
  const BASE_URL_DEP = `https://tr-yös.com/api/v1/record/alldepartments.php?token=mBbAINPS8DwIL5J9isMwnEJGr4OgSkC55SCm2BqnVeJ8r1gxGFlrl8mFN7Q18GA9D/HsXeDS5arTZx6l974b31678f8f18db56809a16f9728baf`;

  const options1 = uni
    ?.filter((item) => cities.includes(item.city))
    .map((item) => ({
      value: item.code,
      label: item.tr,
    }));
  const getDep = async () => {
    try {
      const { data } = await axios(BASE_URL_DEP);
      setDepertman(data);
    } catch (error) {
      console.log(error);
    }
  };
  const uniIdies = getUniId();
  const options = location?.map((item) => ({
    value: item.id,
    label: item.tr,
  }));

  const getUni = async () => {
    try {
      const { data } = await axios(BASE_URL_UNI);
      setUni(data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(uni);

  const getCities = () => {
    return city?.map((item) => item.value);
  };

  const cities = getCities();
  console.log(cities);

  const getUniId = () => {
    return uniId?.map((item) => item.value);
  };

  console.log(uniId);

  const options2 = depertman
    ?.filter((item) => uniIdies.includes(item.university.code))
    .map((item) => ({
      value: item.department.code,
      label: item.department.tr,
    }));

  const filterrrr = options2?.filter((item) =>
    filterDepss.includes(item.label)
  );

  useEffect(() => {
    getLoca();
    getUni();
    getDep();
  }, []);

  return <div>AppRouter</div>;
};

export default AppRouter;
