import React from "react";

const RightSocialAccounts = () => {
  return (
    <>
      <p className="text-2xl font-bold p-5 w-full">Social Accounts</p>

      <div className="flex justify-evenly mt-5">
        <div className="w-5/12">
          <label htmlFor="" className="font-bold">
            Facebook
          </label>
          <input
            type="email"
            value="https://facebook.com/"
            required
            className="w-full rounded-md mt-2 focus:border-green-light focus:ring-green-dark"
          />
        </div>
        <div className="w-5/12">
          <label htmlFor="" className="font-bold">
            Twitter
          </label>
          <input
            type="email"
            value="https://twitter.com/"
            required
            className="w-full rounded-md mt-2 focus:border-green-light focus:ring-green-dark"
          />
        </div>
      </div>
      <div className="flex justify-evenly mt-5">
        <div className="w-5/12">
          <label htmlFor="" className="font-bold">
            Google Plus
          </label>
          <input
            type="email"
            value="https://googleplus.com"
            required
            className="w-full rounded-md mt-2 focus:border-green-light focus:ring-green-dark"
          />
        </div>
        <div className="w-5/12">
          <label htmlFor="" className="font-bold">
            LinkedIn
          </label>
          <input
            type="email"
            value="https://linkedin.com/"
            required
            className="w-full rounded-md mt-2 focus:border-green-light focus:ring-green-dark"
          />
        </div>
      </div>
    </>
  );
};

export default RightSocialAccounts;
