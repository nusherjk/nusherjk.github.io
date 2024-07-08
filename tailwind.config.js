/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
        sans: ['Josefin Sans', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  daisyui: {
      // themes: [
      //     {
      //   light: {
      //     ...require("daisyui/src/theming/themes")["winter"],
      //
      //   },
      //     dark:{
      //       ...require("daisyui/src/theming/themes")["sunset"],
      //     }
      // },
      // ]
      // themes: ["bumblebee","light", "dark", "cupcake",
      themes: [
        {
          light: {

             "primary": "#000000",

             "secondary": "#797979",

             "accent": "#00b5ff",

             "neutral": "#ffffff",

             "base-100": "#ffffff",

             "info": "#00aeff",

             "success": "#008e00",

             "warning": "#ffac00",

             "error": "#f70000",
          },
        },
      ],
    },
  plugins: [
    require('daisyui'),
  ],

}

