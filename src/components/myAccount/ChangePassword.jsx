<<<<<<< HEAD
import React, { useState, useContext } from "react";
import axios from "axios";
import { YosContext } from "../../context/YosContext";
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
  const { userID } = useContext(YosContext);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleChangePassword = async () => {
    if (newPassword !== confirmPassword) {
      setErrorMessage("New password and confirm password must match.");
      return;
    }

    try {
      const BASE_URL_UPDATE_PASSWORD = `https://tr-yös.com/api/v1/users/updateuser.php?user_id=${userID}&token=YourToken`;
      const userData = {
        password: currentPassword,
        new_password: newPassword,
      };
      const { data } = await axios.post(BASE_URL_UPDATE_PASSWORD, userData);
      console.log(data); // Handle the response accordingly (e.g., show success message)

      // Clear input fields after successful password change
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
      setErrorMessage("");
    } catch (error) {
      console.log(error);
      setErrorMessage("Error occurred during password change.");
    }
  };

  return (
    <div className="border-2 rounded-lg w-full mb-16 shadow-md shadow-grey-primary">
      <div className="justify-evenly p-5">
        <div className="w-full mt-5">
          <label htmlFor="" className="font-bold">
            Current Password *
          </label>
          <input
            type="password"
            required
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
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
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full rounded-md mt-2 focus:border-green-light focus:ring-green-dark"
          />
        </div>
        <button
          className="bg-green-light px-4 py-2 mt-5 rounded-md text-white"
          onClick={handleChangePassword}
        >
          Change Password
        </button>
        {errorMessage && (
          <p className="text-red-500 mt-2">{errorMessage}</p>
        )}
=======
import React, { useContext, useState } from "react";
import RightSaveButton from "./RightSaveButton";
import { YosContext } from "../../context/YosContext";

const ChangePassword = () => {
  const { changePasswordStep1, changePasswordStep2 } = useContext(YosContext);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [step, setStep] = useState(1);

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
>>>>>>> 5c8d872f598f2659c5ab3da1ceaa151f069c6e01
      </div>
    </form>
  );
};

export default ChangePassword;
