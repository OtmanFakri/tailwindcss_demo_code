/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}",
            "./public/*.{html,js}"  
  ],
  theme: {
    extend: {
      colors: {
        'color-bg': '#fcfcfc',
        'color-h1':'#303669'
        
      },
    },
    fontFamily: {
      'custom': ['Montserrat', 'sans-serif'],
  },

  },
  plugins: [],
}
