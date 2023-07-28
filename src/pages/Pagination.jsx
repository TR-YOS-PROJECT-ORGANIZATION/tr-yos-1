import React, { useContext, useEffect } from "react";
import { Pagination } from "flowbite-react";
import { YosContext } from "../context/YosContext";

const PaginationPage = () => {
  const { currentPage, setCurrentPage, getPage } = useContext(YosContext);; 


  
console.log(currentPage);
  return (
    <div className="flex justify-end">
      <Pagination
        currentPage={currentPage} 
        onPageChange={(page) => {
          setCurrentPage(page);
            getPage(currentPage);
   
        }}
        showIcons
        totalPages={100}
      />
    </div>
  );
};

export default PaginationPage;
