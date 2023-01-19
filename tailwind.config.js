/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}",
            "./public/*.{html,js}"  
  ],
  theme: {
    extend: {
      colors: {
        'color-bg': '#fcfcfc',
      },
    },
    fontFamily: {
      'custom': ['Montserrat', 'sans-serif'],
  },

  },
  plugins: [],
}
