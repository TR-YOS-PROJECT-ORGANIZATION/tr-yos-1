/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    // "./node_modules/flowbite/**/*.{js,jsx}",
  ],

  theme: {
    extend: {
      colors: {
        green: {
          dark: "#377375",
          light: "#DDEDE3",
        },
        grey: {
          primary: "#DAD7CD",
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
