// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    
    extend: {
      colors: {
        primary: "#142948",
        secondary: "#FF7342",
        secondaryDark: "#BF5624",
        bgActive: "#DCDCDC",
        textGreen: "#1B8131",
        secondaryLight: "#FF9960",
      },
    },

    fontFamily: {
      nunito: ['nunito', 'sans-serif'],
      MyFont: ['"My Font"', 'serif'], // Ensure fonts with spaces have " " surrounding it.
      QuickSand: ['Quicksand', 'Kantumruy Pro'], // Ensure fonts with spaces have " " surrounding it.
    },

    fontSize: {
      tabHead: "22px",
      xxl: "24px",
      s: "14px",
      xs: "12px", // Example text-xs size
      sm: "16px",
      md: "18px", // Example text-sm size
      base: "1rem",
      lg: "20px", // Example text-lg size
      xl: "24px",
      "2xl": "32px",
      "3xl": "40px",
      back: "28px",
      // Add more sizes as needed
    },

  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: ["light"]
  }
};


