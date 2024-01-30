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










// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}",],
//   theme: {
//     screens: {
//       sm : '480px',
//       md : '768px',
//       lg : '976px',
//       xl : '1440px'

//     },
//     extend: {},
//   },
//   plugins: [],
// }

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
  
//   theme: {
//     screens: {
//       sm : '480px',
//       md : '768px',
//       lg : '976px',
//       xl : '1440px'

//     },
//     extend: {
//       extend: {
//         colors: {
//           brightRed : 'hsl(12, 88%, 59%)',
//           brightRedLight : 'hsl(12, 88%, 69%)',
//           brightRedSupLight : 'hsl(12, 88%, 95%)',
//           darkBlue : 'hsl(228, 39%, 23%)',
//           darkGrayishBlue : 'hsl(227, 12%, 13%)',
//           veryDarkBlue : 'hsl(233, 12%, 13%)',
//           veryPaleRed : 'hsl(13, 100%, 96%)',
//           veryLightGray : 'hsl(0, 0%, 98%)',
//         }
//     },
//   },
//   plugins: [],
// }

// }