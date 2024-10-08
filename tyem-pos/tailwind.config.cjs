/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "electric-violet": {
          50: "#f7f3fe",
          100: "#efe8fd",
          200: "#d7c5fa",
          300: "#bfa3f7",
          400: "#8e5df1",
          500: "#5e18eb",
          600: "#5516d4",
          700: "#4712b0",
          800: "#380e8d",
          900: "#2e0c73",
        },
        // chicket: {
        //   50: "#fef4f4",
        //   100: "#fce9e9",
        //   200: "#f8c7c9",
        //   300: "#f4a5a8",
        //   400: "#ec6267",
        //   500: "#e41e26",
        //   600: "#cd1b22",
        //   700: "#ab171d",
        //   800: "#891217",
        //   900: "#700f13",
        //   "border" :"#928C8C",
        //   "item" :"#3A3A3A",
        //   "pay_method":"#00DCB4",
        // },
        'ch-headers': {
          '50': '#f0fbfc', 
          '100': '#e1f7fa', 
          '200': '#b6e9f2', 
          '300': '#8bd9e8', 
          '400': '#41bad9', 
          '500': '#019bc8', 
          '600': '#0083b3', 
          '700': '#006394', 
          '800': '#004a78', 
          '900': '#003159', 
          '950': '#001d3b',
            "side-border": "#5A5151",
          "cart-head":"#FF3838",
             "border" :"#928C8C",
          "item" :"#3A3A3A",
          "pay_method":"#00DCB4",
      },
        'chicket': {
          '50': '#f2fbff', 
          '100': '#e3f4fc', 
          '200': '#bbe1fa', 
          '300': '#93c9f5', 
          '400': '#4792ed', 
          '500': '#0050e5', 
          '600': '#0045cf', 
          '700': '#0033ab', 
          '800': '#00278a', 
          '900': '#001a66', 
          '950': '#000f42'
      },
        // "ch-headers": {
        //   50: "#FFECED",
        //   100: "#f8e6e7",
        //   200: "#eec0c2",
        //   300: "#e49a9d",
        //   400: "#d04e54",
        //   500: "#bc020a",
        //   600: "#a90209",
        //   700: "#8d0208",
        //   800: "#710106",
        //   900: "#5c0105",
        //   "side-border": "#5A5151",
        //   "cart-head":"#FF3838",

        // },
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ]
};
