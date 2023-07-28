import React, { useContext, useEffect } from "react";
import { YosContext } from "../context/YosContext";
import Card from "../components/card/Card";
import Header from "../Header";
import Hero from "../Hero";
import Pagination from "./Pagination";

const Home = () => {
  const { filterrrr, setFilterDep, setUniId } = useContext(YosContext);
   useEffect(() => {
    setFilterDep([]);
    setUniId([]);
  }, []);
  return (
    <div>
      <Header />
      <Card />
      <Pagination />
      <Hero />
    </div>
  );
};
export default Home;