import React, { useContext, useEffect } from "react";
import { Pagination } from "flowbite-react";
import { YosContext } from "../context/YosContext";

const UniPage = () => {
  const { currentPageUni, setCurrentPageUni, getPageUni } =
    useContext(YosContext);


  return (
    <div className="flex justify-end">
      <Pagination
        currentPage={currentPageUni}
        onPageChange={(page) => {
          setCurrentPageUni(page);
          getPageUni(currentPageUni);
        }}
        showIcons
        totalPages={100}
      />
    </div>
  );
};

export default UniPage;
