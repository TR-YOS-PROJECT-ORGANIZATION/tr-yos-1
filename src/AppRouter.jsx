import React from 'react'


const AppRouter = () => {
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
  return (
    <div>AppRouter</div>
  )
}

export default AppRouter