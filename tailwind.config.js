module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#27292D',
          text: '#C5C7CA',
          placeholder: '#7F8084',
          dark: '#000',
          border: '#35373B',
        },
        secondary: {
          light: '#4A96FF',
          text: '#6B6C70',
        },
        textarea: {
          placeholder: '#191920',
        }
      },
      borderWidth:{
        rem0_094: '0.094rem',
      },
      maxWidth: {
        rem38: '38rem',
      }
    },
  },
  plugins: [],
}
