/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  // daisyui: {
  //   themes: [
  //     {
  //       portfoliotheme: {
  //         "base-100": "#ECF0F3",
  //       }
  //     }
  //   ]
  // },
  theme: {
    extend: {},
    fontFamily: {
      signature: ["Great Vibes"],
    },
  },
  plugins: [require("daisyui")],
};
