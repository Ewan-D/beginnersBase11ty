module.exports = {
  purge: {
	content: [ './dist/**/*.html' ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    // because everyone should have access to the baskerville &
    fontFamily: {
      'serif': ['Libre Baskerville', 'ui-serif', 'Georgia', 'Cambria', 'Times', 'serif'],
    },

  },
  variants: {
    extend: {},
  },
  plugins: [],
}
