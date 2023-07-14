// import React, { useContext } from "react";
// import { registerSchema } from "./RgisterForm";
// import { Formik } from "formik";
// import RgisterForum from "./RgisterForm";
// import { YosContext } from "../../context/YosContext";

// const Rgister = () => {
//   const { register } = useContext(YosContext);
//   const formData = new FormData();
//   formData.append("name", value);
//   formData.append("email", "sifre123");
//   formData.append("password1", "sifre123");
//   formData.append("password2", "sifre123");
//   return (
//     <div>
//       {" "}
//       <Formik
//         initialValues={{ name: "", password1: "", email: "", password2: "" }}
//         validationSchema={registerSchema}
//         onSubmit={(values, actions) => {
//           register(values);
//           actions.resetForm();
//           actions.setSubmitting(false);
//         }}
//         component={(props) => <RgisterForum {...props} />}
//       ></Formik>
//     </div>
//   );
// };

// export default Rgister;
