import React, { useContext } from "react";
import { registerSchema } from "./RgisterForm";
import { Formik } from "formik";
import { toast } from "react-toastify"; // Sadece toast kısmını içe aktarıyoruz, ToastContainer gerekmiyor
import RgisterForm from "./RgisterForm";
import { YosContext } from "../../context/YosContext";

const Rgister = ({ onSuccess }) => { // onSuccess prop'unu ekliyoruz
  const { register } = useContext(YosContext);

  return (
    <div>
      <Formik
        initialValues={{ name: "", email: "", password1: "", password2: "" }}
        validationSchema={registerSchema}
        onSubmit={async (values, actions) => {
          let data1 = new FormData();
          data1.append("name", values.name);
          data1.append("email", values.email);
          data1.append("password1", values.password1);
          data1.append("password2", values.password2);

          try {
            await register(data1);
            actions.resetForm();
            actions.setSubmitting(false);
            onSuccess(); // Başarılı olduğunda onSuccess prop'unu çağırarak RgisterModal bileşenindeki state'i güncelliyoruz.
          } catch (error) {
            // Kayıt işlemi başarısız olduysa hata durumunu işleyin.
            toast.error("Üyelik tamamlanamadı. Lütfen tekrar deneyin.");
          }
        }}
        component={(props) => <RgisterForm {...props} />}
      ></Formik>
    </div>
  );
};

export default Rgister;
