import React, { useContext, useState } from "react";
import { registerSchema } from "./RgisterForm";
import { Formik } from "formik";
import RgisterForm from "./RgisterForm";
import { YosContext } from "../../context/YosContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Rgister = () => {
  const { register } = useContext(YosContext);
  const [registrationStatus, setRegistrationStatus] = useState(null);

  const handleRegistration = async (values, actions) => {
    try {
      let data1 = new FormData();
      data1.append("name", values.name);
      data1.append("email", values.email);
      data1.append("password1", values.password1);
      data1.append("password2", values.password2);
      
   
      await register(data1);
      setRegistrationStatus("success");
      
      
      toast.success('Üye olmak başarıyla tamamlandı!', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000, 
      });
    } catch (error) {
   
      setRegistrationStatus("error");
  
      toast.error('Üye olma işlemi başarısız oldu.', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });
    } finally {
      actions.setSubmitting(false);
    }
  };

  return (
    <div>
      {registrationStatus !== "success" ? (
        <Formik
          initialValues={{ name: "", email: "", password1: "", password2: "" }}
          validationSchema={registerSchema}
          onSubmit={handleRegistration}
          component={(props) => <RgisterForm {...props} />}
        />
      ) : (
        <p></p>
      )}
      <ToastContainer style={{ }} />
    </div>
  );
};

export default Rgister;
