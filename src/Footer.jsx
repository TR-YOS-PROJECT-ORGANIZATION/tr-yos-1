import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdLocalPostOffice } from "react-icons/md";
import Like from "./components/dropdown/Like";

const Footer = () => {
  return (
    <div>
      <div className=" w-full  p-4 py-6 lg:py-8 bg-[#222020] mt-4 text-white top-0 mb-0">
        <div>
          <div className="flex justify-around">
            <div>
              <h2 className="mb-6 text-md font-bold uppercase">ADDRESS</h2>
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
                NAVIGATIONS
              </h2>
              <ul className=" dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="https://github.com/themesberg/flowbite"
                    className="hover:underline"
                  >
                    About Us
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    className="hover:underline"
                  >
                    FAQs Page
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    className="hover:underline"
                  >
                    Checkout
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    className="hover:underline"
                  >
                    Contact
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
                MY ACCOUNT
              </h2>
              <ul className=" dark:text-gray-400 font-medium">
                <li className="mb-6">
                  <a href="#" className="hover:underline border rounded-md p-2">
                    My Profile
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="#"
                    className="hover:underline border rounded-md p-2"
                  >
                    My Account
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:underline border rounded-md p-2"
                  >
                    Favorites
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center m-auto max-w-[800px] border-t-[1px]  pt-3 border-gray-500">
          <span className="text-sm  sm:text-center dark:text-gray-400 ">
            © 2023{" "}
            <a href="https://flowbite.com/" className="hover:underline"></a>.
            All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0"></div>
        </div>
        {/* <Like /> */}
      </div>
    </div>
  );
};

export default Footer;
