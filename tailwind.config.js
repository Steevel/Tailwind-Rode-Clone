/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        blogBackground: '#F8F9FA',
        discription: 'hsla(0,0%,100%,.5)',
        discription2: 'rgba(0,0,0,.5)',
        golden: '#ad9970',
        headtextcolor: '#767676'
      },
      backgroundImage: {
        'bgone': "url('./images/background-1.jpg')",
        'bgtwo': "url('./images/background-2.jpg')",
        'bgthree': "url('./images/background-3.jpg')",
        'bgfour': "url('./images/background-4.jpg')",
        'bgfive': "url('./images/background-5.jpg')",
        'bgsix': "url('./images/background-6.jpg')",
      }
    },
  },
  plugins: [],
}
