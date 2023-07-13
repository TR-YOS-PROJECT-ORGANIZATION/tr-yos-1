import React from "react";
import RgisterForm, { registerSchema } from './../src/components/register/RgisterForm';
import { Formik } from 'formik';

const Login = () => {
  return (
    <div>
      <Formik
        initialValues={{ username: "", password: "" }}
        validationSchema={registerSchema}
        onSubmit={(values, actions) => {
          actions.resetForm();
          actions.setSubmitting(false);
        }}
        component={(props) => <RgisterForm {...props} />}
      ></Formik>
    </div>
  );
};

export default Login;
