import React, { useEffect, useState } from "react";
import { createContext } from "react";
import axios from "axios";

export const YosContext = createContext();

const YosContextProvider = ({ children }) => {
  return <YosContext.Provider value={values}>{children}</YosContext.Provider>;
};

export default YosContextProvider;
