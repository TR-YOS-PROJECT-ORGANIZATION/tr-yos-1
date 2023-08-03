import React, { useContext, useState } from "react";
import { YosContext } from "../../context/YosContext";
import { dunyaUlkeIsimleri } from "../../helper/data";
import Select from "react-select";

const RightMyAccount = () => {
  // const { updateName } = useContext(YosContext);
  const { postUser, userUpdate } = useContext(YosContext);
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
    const [countrys, setCountrys] = useState(dunyaUlkeIsimleri);

  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [about, setAbout] = useState("");


  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let data1 = new FormData();
    data1.append("name", name);
    data1.append("country", country);
    data1.append("city",city);
    data1.append("phone",phone);
    data1.append("about", about);
    postUser(data1);
  };
console.log(dunyaUlkeIsimleri);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div className="flex justify-evenly">
          <div className=" w-5/12">
            <label htmlFor="" className="font-bold">
              Your Name*
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              required
              className="w-full rounded-md mt-2 focus:border-green-light focus:ring-green-dark"
            />
          </div>
          <div className="w-5/12">
            <label htmlFor="" className="font-bold">
              E-mail*
            </label>
            <input
              type="email"
              required
              className="w-full rounded-md mt-2 focus:border-green-light focus:ring-green-dark"
            />
          </div>
        </div>
        <div className="flex justify-evenly mt-5">
          <div className=" w-5/12">
            <p className="font-bold">Country*</p>

            <select
              onChange={handleCountryChange}
              value={country}
              className="w-full rounded-md mt-2 focus:border-green-light focus:ring-green-dark"
            >
              {countrys?.map((item) => (
                <option value={item}>{item}</option>
              ))}
            </select>
          </div>
          <div className="w-5/12">
            <label htmlFor="" className="font-bold">
              City
            </label>
            <input
              value={city}
              onChange={(e) => setCity(e.target.value)}
              type="text"
              required
              className="w-full rounded-md mt-2 focus:border-green-light focus:ring-green-dark"
            />
          </div>
        </div>
        <div className="flex justify-evenly mt-5">
          <div className=" w-5/12">
            <label htmlFor="" className="font-bold">
              Phone
            </label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-full rounded-md mt-2 focus:border-green-light focus:ring-green-dark"
            />
          </div>
          <div className="w-5/12"></div>
        </div>
        <div className="flex justify-evenly mt-5">
          <div className=" w-[50rem] flex flex-col mx-8">
            <label htmlFor="" className="font-bold">
              About
            </label>
            <textarea
              onChange={(e) => setAbout(e.target.value)}
              value={about}
              type="text"
              required
              className="w-full  h-40 rounded-md mt-2 focus:border-green-light focus:ring-green-dark"
            ></textarea>
          </div>
        </div>
        <div className="mx-7 mb-10 bg-green-light font-bold w-32 text-center rounded-md mt-12 flex">
          <button type="submit" className="m-2 mx-4 text-center w-full">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default RightMyAccount;
