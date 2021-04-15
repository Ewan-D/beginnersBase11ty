module.exports = {
  purge: {
	content: [ './dist/**/*.html' ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {

    extend: {
      backgroundImage: theme => ( {
        'pygmPossum': "url('/siteImages/pygmPossumSiteLogo.png')"
      })

  },
  variants: {

    },
  },
  plugins: [],
}
