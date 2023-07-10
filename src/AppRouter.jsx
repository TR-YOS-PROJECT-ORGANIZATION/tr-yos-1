import React from 'react'

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

  
  const getCities = () => {
    return city?.map((item) => item.value);
  };

  const cities = getCities();
  console.log(cities);

  const getUniId = () => {
    return uniId?.map((item) => item.value);
  };
console.log(uniId);

  return (
    <div>AppRouter</div>
  )
}

export default AppRouter