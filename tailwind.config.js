/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        navbg: '#F2F2F4',
        navtext:'#293040',
        subnavtext:'#809CBF',
        navhover:'#003A7F',
        menuborder:'#D0D4DD',
        buttonblue:'0A7EC7',
      },
      fontFamily: {
        'mukta': ['"Mukta"'],
      },
      fontSize: {
        smdd: ['16px', '20px'],
      }
    },
  },
  plugins: [],
}

