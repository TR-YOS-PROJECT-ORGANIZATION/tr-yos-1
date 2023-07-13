import React from 'react'
import { object, string } from "yup";
export const loginScheme = object({
  username: string()
    .max(10, "Kullanıcı adı 10 karakterden az olmalıdır.")
    .required("username girişi zorunludur"),
  password: string()
    .required("password zorunludur")
    .min(8, "password en az 8 karakter olmalıdır")
    .max(20, "password en fazla 20 karakter olmalıdır")
    .matches(/\d+/, "Password bir sayı içermelidir")
    .matches(/[a-z]/, "Password bir küçük harf içermelidir")
    .matches(/[A-Z]/, "Password bir büyük harf içermelidir")
    .matches(/[!,?{}><%&$#£+-.]+/, "Password bir özel karakter içermelidir"),
});

const LoginForm = ({ values, handleChange, errors, touched, handleBlur }) => {
  console.log(values);
  return (
    <div>
      <div className="mb-6 m-auto w-48">
        <input
          name="username"
          id="username"
          type="text"
          variant="outlined"
          value={values.username}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.username && Boolean(errors.username)}
          className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-72 p-2.5 dark:bg-gray-700 dark:border-green-500"
          placeholder="User Name"
        />
        <p className="mt-2 text-sm text-green-600 dark:text-black">
          {" "}
          {touched.username && errors.username}
        </p>
        <input
          name="password"
          id="password"
          type="password"
          variant="outlined"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.password && Boolean(errors.password)}
          className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-72 p-2.5 dark:bg-gray-700 dark:border-green-500"
          placeholder="Password"
        />
        <p className="mt-2 text-sm text-green-600 dark:text-black">
          {" "}
          {touched.password && errors.password}
        </p>
      </div>
      <div className=" flex items-center justify-between px-5 ">
        <div>
          {" "}
          <input
            id="link-checkbox"
            type="checkbox"
            defaultValue=""
            className=" w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="link-checkbox"
            className="ml-2 text-sm font-medium  text-gray-900 dark:text-gray-300"
          >
            Save Password .
          </label>
        </div>

        <a
          href="#"
          className="text-blue-600 dark:text-blue-500 hover:underline"
        >
          Forget Passord?
        </a>
      </div>
      <hr />
      <div className="w-full text-center mt-4">
        <label
          htmlFor="link-checkbox"
          className="ml-2 text-sm font-small text-gray-900 dark:text-gray-300"
        >
          Don't have an account yet?
        </label>
        <a
          href="#"
          className="text-blue-600 dark:text-blue-500 hover:underline"
        >
          Sign Up
        </a>
      </div>
    </div>
  );
};

export default LoginForm