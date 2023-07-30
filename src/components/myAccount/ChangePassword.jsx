import React, { useContext, useState } from "react";
import RightSaveButton from "./RightSaveButton";
import { YosContext } from "../../context/YosContext";

const ChangePassword = () => {
  const { changePasswordStep1, changePasswordStep2 } = useContext(YosContext);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [step, setStep] = useState(1);
  const [success, setSuccess] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmNewPassword) {
      console.log("Şifreler eşleşmiyor");
      return;
    }
    try {
      if (step === 1) {
        changePasswordStep1(currentPassword, newPassword);
        setStep(2);
      } else if (step === 2) {
        changePasswordStep2(newPassword, currentPassword);
        setSuccess(true);
        setCurrentPassword("");
        setNewPassword("");
        setConfirmNewPassword("");
      }
    } catch (error) {
      console.error(
        "Şifre değiştirme hatası:",
        error.response?.data || error.message
      );
    }
    console.log(newPassword);
    console.log(currentPassword);
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
              type="text"
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
              type="text"
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
              type="text"
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
      {success && (
        <div className="bg-green-200 text-green-800 p-3 rounded-md mt-3">
          Şifreniz başarıyla değiştirilmiştir.
        </div>
      )}
    </form>
  );
};

export default ChangePassword;
