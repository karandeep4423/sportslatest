/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html"
  ],
  theme: {
    extend: {
      keyframes:{
       wiggle:{
        "0%,100%":{
          transform: 'rotate(-2deg)'
        },
        "50%":{
          transform: 'rotate(2deg)'
        },
       }
      },
      animation:{
        wiggle: 'wiggle 3s  infinite',
      }
    },
  },
  plugins: [],
}
