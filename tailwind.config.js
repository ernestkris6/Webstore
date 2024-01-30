/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      "Inter": ['Inter','sans-serif'],
    },
    extend: {
      spacing: {},
      borderRadius: {
        "17xl": "36px",
      },

      fontSize: {
        xl: "20px",
        base: "16px",
        sm: "14px",
        lg: "18px",
        "5xl": "24px",
        "29xl": "48px",
        inherit: "inherit",
      },
      
      screens: {
        Lxl: "1420px",
        large: "1340px",
        semiLarge: "1180px",
        Lmd: "900px",
        xlmobile: "560px",
        lmobile: "500px",
        mobile: "431px",
        smobile: "300px",
        ss: "370px",
        xs: "0px",
      },
    },
  },
  plugins: [],
}
