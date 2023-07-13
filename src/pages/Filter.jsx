import React from "react";

const Filter = () => {
  const cities = ["New York", "London", "Paris", "Tokyo"];
  return (
    <div className="flex  mt-4 justify-between ">
      <div className="filter mx-40 ">
        <div className="mb-2 flex flex-col ml-20">
          <label htmlFor="city" className="mr-2  mt-2 font-bold">
            Select City
          </label>
          <select
            id="city"
            name="city"
            className="border border-gray-300 rounded-md px-1 py-1 focus:outline-none w-48 mt-2 h-9"
          >
            <option value="">Ankara</option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-2 flex flex-col ml-20">
          <label htmlFor="city" className="mr-2  mt-2 font-bold">
            Select Department
          </label>
          <select
            id="city"
            name="city"
            className="border border-gray-300 rounded-md px-1 py-1 h-9 focus:outline-none w-48 mt-2"
          >
            <option value="">Ethnology</option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-1 flex flex-col ml-20">
          <label htmlFor="city" className="mr-2  mt-2 font-bold ">
            Select University
          </label>
          <select
            id="city"
            name="city"
            className="border border-gray-300 rounded-md px-1 py-1 h-9 focus:outline-none w-48 mt-2"
          >
            <option value="">Boğaziçi University</option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="">
        <div className="mb-1 flex flex-col ">
          <label htmlFor="city" className="mr-2  mt-2 font-bold">
            Price
          </label>
          <div className="flex">
            <input
              type="text "
              placeholder="Min "
              className="border border-gray-300 rounded-md px-1 py-2 w-28 mt-2 h-9 focus:outline-none"
            />
            <div className="flex justify-center ml-3">
              <p className="text-3xl self-center ">-</p>
            </div>

            {/* <select
            id="city"
            name="city"
            className="border border-gray-300 rounded-md px-1 py-1 focus:outline-none w-24 mt-2"
          >
            <option value="">Min Price</option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select> */}

            <div className="mx-3">
              <input
                type="text"
                placeholder="Max"
                className="border border-gray-300 rounded-md px-1 py-2 w-28  mt-2 focus:outline-none h-9"
              />

              {/* <select
              id="city"
              name="city"
              className="border border-gray-300 rounded-md px-1 py-1 focus:outline-none w-26 mt-2"
            >
              <option value="">Max Price</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select> */}
            </div>
          </div>
        </div>
      </div>

      {/* *******Check Kısmı******** */}

      <div className=" mb-2 flex flex-col ml-20 ">
        <label htmlFor="city" className="mr-2  mt-2 font-bold">
          Advance Features
        </label>
        <div className="flex justify-between">
          <div className="first-col ">
            <div className="flex mt-3">
              <div>
                <input
                  type="checkbox"
                  id="checks"
                  name="checks"
                  className="form-checkbox h-4 w-4 rounded border-gray-300 focus:ring-green-dark focus:bg-green-dark checked:bg-green-dark"
                />
              </div>
              <div className="">
                <p className="mx-1 ">Item1</p>
              </div>
            </div>
            <div className="flex mt-1">
              <div>
                <input
                  type="checkbox"
                  id="checks"
                  name="checks"
                  className="form-checkbox h-4 w-4 rounded border-gray-300 focus:ring-green-dark focus:bg-green-dark checked:bg-green-dark"
                />
              </div>
              <div className="">
                <p className="mx-1 ">Item1</p>
              </div>
            </div>
            <div className="flex mt-1">
              <div>
                <input
                  type="checkbox"
                  id="checks"
                  name="checks"
                  className="form-checkbox h-4 w-4 rounded border-gray-300 focus:ring-green-dark focus:bg-green-dark checked:bg-green-dark"
                />
              </div>
              <div className="">
                <p className="mx-1 ">Item1</p>
              </div>
            </div>
          </div>
          <div className="second-col  mt-3">
            {" "}
            <div className="flex ">
              <div>
                <input
                  type="checkbox"
                  id="checks"
                  name="checks"
                  className="form-checkbox h-4 w-4 rounded border-gray-300 focus:ring-green-dark focus:bg-green-dark checked:bg-green-dark"
                />
              </div>
              <div className="">
                <p className="mx-1 ">Item1</p>
              </div>
            </div>
            <div className="flex mt-1">
              <div>
                <input
                  type="checkbox"
                  id="checks"
                  name="checks"
                  className="form-checkbox h-4 w-4 rounded border-gray-300 focus:ring-green-dark focus:bg-green-dark checked:bg-green-dark"
                />
              </div>
              <div className="">
                <p className="mx-1 ">Item1</p>
              </div>
            </div>
            <div className="flex mt-1">
              <div>
                <input
                  type="checkbox"
                  id="checks"
                  name="checks"
                  className="form-checkbox h-4 w-4 rounded border-gray-300 focus:ring-green-dark focus:bg-green-dark checked:bg-green-dark"
                />
              </div>
              <div className="">
                <p className="mx-1 ">Item1</p>
              </div>
            </div>
          </div>
        </div>
        <div className="self-end mt-24 bg-green-dark text-white font-bold w-20 h-10  text-center rounded-md ">
          <button className="m-2 ">Search</button>
        </div>
      </div>

      <div className="mx-36 mb-2 flex flex-col ml-20 mt-9"></div>
    </div>
  );
};

export default Filter;