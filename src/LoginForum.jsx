import { Form } from 'formik';
import React from 'react'
import { Link } from 'react-router-dom';
import { object, string } from "yup";
export const loginScheme = object({
  email: string().email().required("email girişi zorunludur"),
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
      <Form>
        <div className="mb-6 m-auto w-48">
          <input
            name="email"
            id="email"
            type="email"
            variant="outlined"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.email && Boolean(errors.email)}
            className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-72 p-2.5 dark:bg-gray-700 dark:border-green-500"
            placeholder="Your Email"
          />
          <p className="mt-2 text-sm text-green-600 dark:text-black">
            {" "}
            {touched.email && errors.email}
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
          <button
            type="Submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg w-72  text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Sign In
          </button>
        </div>
      </Form>
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
        <Link
          to="/register"
          className="text-blue-600 dark:text-blue-500 hover:underline"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default LoginForm