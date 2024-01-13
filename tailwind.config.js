/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        LightRed: "#ff525d",
        VeryLightRed: "#ff7a85",
        veryDarkBlue: "#1f3f5b",

        GrayishBlue: "#c8c8cb",
        VeryGrayishBlue: "#4b5862",
        VeryDarkBlackBlue: "#25252d",

        backroundVeryLightRed: "#ff8f70",
        backroundLightRed: "#ff3d54",

        backroundVeryDarkBlue: "#2c2d3f",
        backroundDesatureBlue: "#2c2d3f",
      },
      screens: {
        'mobile': '375px', 
        'tablet': '600px',
        'desktopSmall': '950px',
        'desktopMedium': '1140px',
        'desktopBig': '1440px',
      },
    },
  },
  plugins: [],
}

