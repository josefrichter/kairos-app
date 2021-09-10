module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        kairos: {
          light: '#FAF8F6',
          DEFAULT: '#D6C9BA',
          dark: '#24201B',
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
