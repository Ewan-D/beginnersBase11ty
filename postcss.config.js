// postcss config

const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')
const plugins = [tailwindcss(), autoprefixer()];

module.exports = {
	plugins
};
