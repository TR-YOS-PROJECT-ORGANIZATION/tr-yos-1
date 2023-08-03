// ChangePassword.js
import React, { useContext, useState } from "react";
import { YosContext } from "../../context/YosContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ChangePassword = () => {
  const { changePasswordStep2 } = useContext(YosContext);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmNewPassword) {
      console.log("Şifreler eşleşmiyor");
      return;
    }
    try {



      changePasswordStep2(newPassword, currentPassword);
      setCurrentPassword("");
      setNewPassword("");
      setConfirmNewPassword("");
toast.success("Üye şifre değiştirme başarılı!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });


    } catch (error) {
      console.error(
        "Şifre değiştirme hatası:",
        error.response?.data || error.message
      );
    }
  };

  const handleCurrentPasswordChange = (e) => {
    setCurrentPassword(e.target.value);
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmNewPasswordChange = (e) => {
    setConfirmNewPassword(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="border-2 rounded-lg w-full mb-16 shadow-md shadow-grey-primary ">
        <div className="justify-evenly p-5">
          <div className="w-full mt-5">
            <label htmlFor="" className="font-bold">
              Current Password *
            </label>
            <input
              type="password"
              value={currentPassword}
              onChange={handleCurrentPasswordChange}
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
              onChange={handleNewPasswordChange}
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
              onChange={handleConfirmNewPasswordChange}
              className="w-full rounded-md mt-2 focus:border-green-light focus:ring-green-dark"
            />
          </div>
          <div className="mx-7 mb-10 bg-green-light font-bold w-32 text-center rounded-md mt-12 flex">
            <button type="submit" className="m-2 mx-4 text-center w-full">
              Save
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ChangePassword;
