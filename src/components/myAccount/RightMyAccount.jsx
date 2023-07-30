import React, { useContext, useState } from "react";
import { YosContext } from "../../context/YosContext";
import { useNavigate } from "react-router-dom";

const RightMyAccount = () => {
  const { updateName } = useContext(YosContext);
  const [oldName, setOldName] = useState("");
  const [newName, setNewName] = useState("");
  const [confirmNewName, setConfirmNewName] = useState("");
  const navigate = useNavigate();
  const handleChangeName = (e) => {
    e.preventDefault();
    if (newName === confirmNewName) {
      updateName(newName);
    } else {
      console.log("şifreler eşleşmiyor");
    }
  };
  return (
    <form>
      <div className="flex justify-evenly">
        <div className=" w-5/12">
          <label htmlFor="" className="font-bold">
            Your Name*
          </label>
          <input
            value={oldName}
            onChange={(e) => setOldName(e.target.value)}
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
          <select className="w-full rounded-md mt-2 focus:border-green-light focus:ring-green-dark">
            <option value="option1">Türkiye</option>
           
          </select>
        </div>
        <div className="w-5/12">
          <label htmlFor="" className="font-bold">
            City
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
          <label htmlFor="" className="font-bold">
            Your Name*
          </label>
          <input
            type="text"
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
            type="text"
            required
            className="w-full  h-40 rounded-md mt-2 focus:border-green-light focus:ring-green-dark"
          ></textarea>
        </div>
      </div>
      <button onClick={handleChangeName}> deneme </button>
      
    </form>
  );
};

export default RightMyAccount;
