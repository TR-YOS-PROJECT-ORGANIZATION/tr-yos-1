import React, { useContext } from "react";
import { registerSchema } from "./RgisterForm";
import { Formik } from "formik";
import RgisterForum from "./RgisterForm";
import { YosContext } from "../../context/YosContext";

const Rgister = () => {
  const{register}=useContext(YosContext)
  return (
    <div>
      {" "}
      <Formik
        initialValues={{ name: "", password1: "", email: "", password2: "" }}
        validationSchema={registerSchema}
        onSubmit={(values, actions) => {
          register(values)
          actions.resetForm();
          actions.setSubmitting(false);
        }}
        component={(props) => <RgisterForum {...props} />}
      ></Formik>
    </div>
  );
};

export default Rgister;
