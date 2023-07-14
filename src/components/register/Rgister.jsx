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
        initialValues={{name:"",email:"",password1:"",password2:""}}
        validationSchema={registerSchema}
        onSubmit={(values, actions) => {
          let data1 = new FormData();
          data1.append("name", values.name);
          data1.append("email", values.email);
          data1.append("password1", values.password1);
          data1.append("password2", values.password2);
          register(data1);
          actions.resetForm();
          actions.setSubmitting(false);
        }}

        component={(props) => <RgisterForm {...props} />}

      ></Formik>
    </div>
  );
};

export default Rgister;
