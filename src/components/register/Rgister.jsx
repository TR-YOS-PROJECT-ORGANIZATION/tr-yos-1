import React from "react";
<<<<<<< HEAD
import LoginForum, { registerSchema } from "./RgisterForm";
=======
import { registerSchema } from "./RgisterForm";
>>>>>>> 066b5906c95ee15b4761e422b1d369c7e3abe209
import { Formik } from "formik";
import RgisterForum from "./RgisterForm";

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
        component={(props) => <RgisterForum {...props} />}
      ></Formik>
    </div>
  );
};

export default Rgister;
