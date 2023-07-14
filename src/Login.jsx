import React, { useContext } from 'react'
import LoginForum, { loginScheme } from './LoginForum';
import { Formik } from 'formik';
import { YosContext } from './context/YosContext';


const Login = () => {
    const { login } = useContext(YosContext);
  return (
    <div>
      {" "}
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={loginScheme}
        onSubmit={(values, actions) => {
          login(values)
          let data1 = new FormData();
          data1.append("email", values.email);
          data1.append("password", values.password);
          login(data1);
          actions.resetForm();
          actions.setSubmitting(false);
        }}
        component={(props) => <LoginForum {...props} />}
      ></Formik>
    </div>
  );
};

export default Login;
