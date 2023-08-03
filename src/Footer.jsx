import React, { useContext } from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdLocalPostOffice } from "react-icons/md";
import Like from "./components/dropdown/Like";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { YosContext } from "./context/YosContext";

const Footer = () => {
    const {

      setShowModal,
    } = useContext(YosContext);
  const { t, i18n } = useTranslation();
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
                    onClick={() => setShowModal(true)}
                    className="hover:underline border rounded-md p-2"
                  >
                    {t("myProfile")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/favorites"
                    className="hover:underline border rounded-md p-2"
                    onClick={() => setShowModal(true)}
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
