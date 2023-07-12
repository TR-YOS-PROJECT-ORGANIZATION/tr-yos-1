import React from "react";
import Header from "../components/header/Header";
import Card from "../components/card/Card";
import Hero from "../components/hero/Hero";

const Home = ({
  options,
  options1,
  options2,
  setCity,
  setUniId,
  setFilterDep,
}) => {
  return (
    <div>
      <Header
        options={options}
        options1={options1}
        options2={options2}
        setCity={setCity}
        setUniId={setUniId}
        setFilterDep={setFilterDep}
      />
      <Card />
      <Hero />
    </div>
  );
};

export default Home;
