import { Formik, Form } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import { object, string } from "yup";

export const registerSchema = object({
  name: string()
    .max(10, "Kullanıcı adı 10 karakterden az olmalıdır.")
    .required("username girişi zorunludur"),

  email: string().email().required("email girişi zorunludur"),
  password1: string()
    .required("password zorunludur")
    .min(8, "password en az 8 karakter olmalıdır")
    .max(20, "password en fazla 20 karakter olmalıdır")
    .matches(/\d+/, "Password bir sayı içermelidir")
    .matches(/[a-z]/, "Password bir küçük harf içermelidir")
    .matches(/[A-Z]/, "Password bir büyük harf içermelidir")
    .matches(/[!,?{}><%&$#£+-.]+/, "Password bir özel karakter içermelidir"),
  password2: string()
    .required("password zorunludur")
    .min(8, "password en az 8 karakter olmalıdır")
    .max(20, "password en fazla 20 karakter olmalıdır")
    .matches(/\d+/, "Password bir sayı içermelidir")
    .matches(/[a-z]/, "Password bir küçük harf içermelidir")
    .matches(/[A-Z]/, "Password bir büyük harf içermelidir")
    .matches(/[!,?{}><%&$#£+-.]+/, "Password bir özel karakter içermelidir"),
});

const RgisterForum = ({
  values,
  handleChange,
  errors,
  touched,
  handleBlur,
}) => {
  console.log(values);
  return (
    <div>
      <Form>
        <div className="mb-6 m-auto w-48">
          <input
            name="name"
            id="name"
            type="text"
            variant="outlined"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.name && Boolean(errors.name)}
            className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-72 p-2.5 dark:bg-gray-700 dark:border-green-500"
            placeholder="Your Name"
          />
          <p className="mt-2 text-sm text-green-600 dark:text-black">
            {" "}
            {touched.name && errors.name}
          </p>
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
            name="password1"
            id="password1"
            type="password"
            variant="outlined"
            value={values.password1}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.password1 && Boolean(errors.password1)}
            className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-72 p-2.5 dark:bg-gray-700 dark:border-green-500"
            placeholder="Password"
          />
          <p className="mt-2 text-sm text-green-600 dark:text-black">
            {" "}
            {touched.password1 && errors.password1}
          </p>
          <input
            name="password2"
            id="password2"
            type="password"
            variant="outlined"
            value={values.password2}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.password2 && Boolean(errors.password2)}
            className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-72 p-2.5 dark:bg-gray-700 dark:border-green-500"
            placeholder="Re-Password"
          />
          <p className="mt-2 text-sm text-green-600 dark:text-black">
            {" "}
            {touched.password2 && errors.password2}
          </p>
          <button
            type="Submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg w-72  text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Sign Up
          </button>
        </div>
      </Form>
      <hr />
      <p>
        Have an account <Link to="/">Sign In</Link>
      </p>
    </div>
  );
};

export default RgisterForum;
