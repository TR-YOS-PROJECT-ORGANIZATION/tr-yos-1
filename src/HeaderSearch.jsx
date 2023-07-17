import { useNavigate } from "react-router-dom";
import Select from "react-select";
import { YosContext } from "./context/YosContext";
import { useContext } from "react";

const HeaderSearch = () => {
  const navigate = useNavigate();

  const { options, options1, options2, setCity, setUniId, setFilterDep } =
    useContext(YosContext);

  return (
    <div className="relative bottom-30 z-50 w-10/12 mx-auto">
      <div className="m-auto max-w-[1030px] h-20  bg-white rounded-md border-2 border-green-dark ">
        <div className="flex justify-evenly   ">
          <Select
            isMulti
            onChange={(e) => setCity(e)}
            name="colors"
            options={options}
            className="basic-multi-select w-[200px] self-center h-10"
            classNamePrefix="select "
          />
          <Select
            isMulti
            name="colors"
            options={options1}
            onChange={(e) => setUniId(e)}
            className="basic-multi-select  w-[200px] self-center h-10"
            classNamePrefix="select"
          />

          <Select
            isMulti
            name="colors"
            onChange={(e) => setFilterDep(e)}
            options={options2}
            className="basic-multi-select w-[200px] self-center h-10"
            classNamePrefix="select"
          />
          <button
            type="button"
            className="text-white bg-green-dark focus:ring-4 focus:ring-green-300  rounded-md font-medium w-64 h-10 text-sm my-4 "
            onClick={() => navigate("/departments")}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderSearch;
