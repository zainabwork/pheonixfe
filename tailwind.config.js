/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
module.exports = {
  content: [
    "./node_modules/flowbite-react/dist/esm/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        lorin:['"Poppins", sans-serif']
      },
      colors: {
        'Cpurple': '#8C67FF',
        'purple-gradients' : 'linear-gradient(251.38deg, #8DFAFF 0%, #00E0FF 99.76%)'
      },
    },
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }

      'xs': {'max': '430px'},
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [require("flowbite/plugin"),flowbite.plugin(),],
}

