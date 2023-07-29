import React, { useContext, useState } from "react";
import hero from "./helper/hero.jpg";
import { YosContext } from "./context/YosContext";
import axios from "axios";
const Hero = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setError("E-posta adresi zorunludur.");
      return;
    }

    try {
      const data = new FormData();
      data.append("email", email);
      const response = await axios.post(
        "https://tr-yös.com/api/v1/record/addemail.php?token=mBbAINPS8DwIL5J9isMwnEJGr4OgSkC55SCm2BqnVeJ8r1gxGFlrl8mFN7Q18GA9D/HsXeDS5arTZx6l974b31678f8f18db56809a16f9728baf",
        { email }
      );
      console.log("İstek başarılı: ", response.data);
    } catch (error) {
      console.error("İstek hatası: ", error);
      setError('Geçersiz E-posta Adresi Formatı.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="h-[500px] mt-36">
        <div className="bg-green-dark z-50 rounded-xl h-[400px] container w-1/3 mx-auto">
          <img
            className="relative rounded-lg left-10 top-8 z-50 "
            src={hero}
            alt=""
            width={490}
          />
          <div className=" relative h-64 bottom-[20rem] left-[22rem] w-[100px]"></div>
          <div className=" z-[-5] relative h-[14rem] bottom-[20rem] left-[22rem] w-[100px]">
            right-2
          </div>

          <div className=" bg-white border-1 rounded-lg h-50 max-w-[350px] xs:max-w-[300px] relative left-64 bottom-[34rem] z-50  p-4 ">
            <h2 className="font-extrabold text-lg">
              Are You Already Working With Us ?
            </h2>
            <p>
              At vero eos at accusames et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti auos
              dolores et quas molestias
            </p>
          </div>
        </div>
        <div className="bg-green-light -z-10 w-full h-[220px] relative bottom-36 "></div>
      </div>
      <div className=" bg-white border-1 rounded-lg h-60 max-w-[330px] xs:max-w-[300px] hidden xs:flex left-64 bottom-[34rem] z-50  p-4 ">
        <h2 className="font-extrabold text-lg">
          Are You Already Working With Us ?
        </h2>
        <p>
          At vero eos at accusames et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti auos dolores
          et quas molestias
        </p>
      </div>
      <div className="w-[400px] mx-auto mb-16 ">
      <label>
        E-posta adresi:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
        <input
          type="email"
          id="email"
          className="bg-green-light absolute h-14 text-gray-900 text-sm rounded-2xl border-2 border-green-dark focus:ring-blue-500 focus:border-blue-500 block w-[500px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter your E-mail"
          required=""
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <button
          type="submit"
          className="text-white relative left-96 top-2  bg-green-dark font-bold focus:ring-4 focus:ring-blue-300  rounded-lg text-sm h-10 w-24  "
        >
          Subscribe
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Abone Ol</button>
      </div>
    </form>
  );
};

export default Hero;
