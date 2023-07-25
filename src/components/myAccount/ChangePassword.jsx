import React, { useContext, useState } from "react";
import RightSaveButton from "./RightSaveButton";
import { YosContext } from "../../context/YosContext";
const ChangePassword = () => {
  const { updatePassword } = useContext(YosContext);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(newPassword === confirmNewPassword){
      updatePassword(newPassword)
    }else{ 
      console.log("şifreler eşleşmiyor")
    }
  };
  return (
    <form onSubmit={handleSubmit}>
    <div className="border-2 rounded-lg w-full mb-16 shadow-md shadow-grey-primary ">
      <div className=" justify-evenly p-5">
        <div className="  w-full mt-5">
          <label htmlFor="" className="font-bold">
            Current Password *
          </label>
          <input
            type="password"
            value={oldPassword}
            onChange={(e)=> setOldPassword(e.target.value)}
            required
            className="w-full rounded-md mt-2 focus:border-green-light focus:ring-green-dark"
          />
        </div>
        <div className="w-full mt-5">
          <label htmlFor="" className="font-bold">
            New Password*
          </label>
          <input
            type="password"
            required
            value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
            className="w-full rounded-md mt-2 focus:border-green-light focus:ring-green-dark"
          />
        </div>
        <div className="w-full mt-5">
          <label htmlFor="" className="font-bold">
            Confirm Password*
          </label>
          <input
            type="password"
            required
            value={confirmNewPassword}
          onChange={(e) => setConfirmNewPassword(e.target.value)}
            className="w-full rounded-md mt-2 focus:border-green-light focus:ring-green-dark"
          />
        </div>
        <RightSaveButton />
      </div>
    </div></form>
  );
};
export default ChangePassword;
