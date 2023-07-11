import React from 'react'
import HeaderCarousel from './HeaderCarousel'
import HeaderSearch from './HeaderSearch'

const Header = ({ options,options1,options2,setCity,setUniId }) => {
  return (
    <>
      <HeaderCarousel />
      <HeaderSearch
        options={options}
        options1={options1}
        options2={options2}
        setCity={setCity}
        setUniId={setUniId}
      />
    </>
  );
};

export default Header