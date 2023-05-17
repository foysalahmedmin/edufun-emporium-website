/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary_color: '#db915e',
        secondary_color: '##6e6e6e',
        light_bg: '#f4f3f0'
      },
      fontFamily: {
        rancho: ['Rancho', 'cursive']
      }
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#db915e",

          "secondary": "#6e6e6e",

          "accent": "#37CDBE",

          "neutral": "#3D4451",

          "base-100": "#FFFFFF",

          "info": "#3ABFF8",

          "success": "#36D399",

          "warning": "#FBBD23",

          "error": "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
