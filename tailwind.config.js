module.exports = {
  // purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#101113',
          800: '#1b1c22',
          700: '#202229',
          600: '#262830',
          500: '#2E313B',
          400: '#383B47',
          300: '#444857',
          200: '#525769',
          100: '#62687D'
        }
      },
      spacing: {
        108: '27rem'
      }
    },
    fontFamily: {
      body: ['Inter', 'sans-serif']
    }
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      cursor: ['disabled'],
      backgroundOpacity: ['dark']
    }
  },
  plugins: []
}
