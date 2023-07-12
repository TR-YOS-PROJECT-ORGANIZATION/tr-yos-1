import React from 'react'
import LoginForum, { registerSchema } from "./RgisterForum";
import { Formik } from 'formik';


const Rgister = () => {
  return (
    <div>
      {" "}
      <Formik
        initialValues={{ username: "", password: "", email: "", password2: "" }}
        validationSchema={registerSchema}
        onSubmit={(values, actions) => {
          actions.resetForm();
          actions.setSubmitting(false);
        }}
        component={(props) => <LoginForum {...props} />}
      ></Formik>
    </div>
  );
};

export default Rgister;