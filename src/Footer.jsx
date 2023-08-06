import React, { useContext } from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdLocalPostOffice } from "react-icons/md";
import Like from "./components/dropdown/Like";
import { useTranslation } from "react-i18next";
import { Link, useNavigate  } from "react-router-dom";
import { YosContext } from "./context/YosContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
const Footer = () => {
    const {

      setShowModal, loginState
    } = useContext(YosContext);
  const { t, i18n } = useTranslation();

  const navigate = useNavigate();

  const handleMyProfileClick = () => {
    if (loginState) {
         navigate("/myprofile")
     
     

    }else {
      setShowModal(true);
      toast.success("Lütfen üye girişi olunuz!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
       navigate("/");
    }
    
  };

  const handleFavoritesClick = () => {
    if (loginState) {
      
      navigate("/favorites");
    } else {
      
      setShowModal(true);
      toast.success("Lütfen üye girişi olunuz!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    
      navigate("/");
    }
  };
  return (
    <div>
      <div className=" w-full  p-4 py-6 lg:py-8 bg-[#222020] mt-4 text-white top-0 mb-0">
        <div>
          <div className="flex justify-around">
            <div>
              <h2 className="mb-6 text-md font-bold uppercase">
                {t("address")}
              </h2>
              <ul className=" dark:text-gray-400 font-medium">
                <li className="mb-4 flex">
                  <BsFillTelephoneFill className="mt-[5px] mr-1" />
                  <span>+09 555 555 5555</span>
                </li>
                <li className="flex ">
                  <MdLocalPostOffice className="mt-[5px] mr-1" />
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    info@tryos.com
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <h2 className="mb-6 text-md font-bold  uppercase ">
                {t("navigations")}
              </h2>
              <ul className=" dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="https://github.com/themesberg/flowbite"
                    className="hover:underline"
                  >
                    {t("aboutUs")}
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    className="hover:underline"
                  >
                    {t("faqs")}
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    className="hover:underline"
                  >
                    {t("checkout")}
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    className="hover:underline"
                  >
                    {t("contact")}
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    className="hover:underline"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-right ">
              <h2 className="mb-6 text-md font-bold  uppercase dark:text-white ">
                {t("myAccountB")}
              </h2>
              <ul className=" dark:text-gray-400 font-medium">
                <li className="mb-6">
                   <Link
                    to="/myprofile"
                    onClick={handleMyProfileClick}
                    className="hover:underline"
                  >
                    {t("myProfile")}
                  </Link>
                </li>
                <li>
                  {/* Use the Link component for routing */}
                  <Link
                    to="/favorites"
                    className="hover:underline"
                    onClick={handleFavoritesClick}
                  >
                    {t("favorites")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center m-auto max-w-[800px] border-t-[1px]  pt-3 border-gray-500">
          <span className="text-sm  sm:text-center dark:text-gray-400 ">
            © 2023{" "}
            <a href="https://flowbite.com/" className="hover:underline"></a>
            {t("allRightsReserved")}.
          </span>
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0"></div>
        </div>
        {/* <Like /> */}
      </div>
    </div>
  );
};

export default Footer;
