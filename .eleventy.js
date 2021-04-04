// eleventy config

const pluginNavigation = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig){

	eleventyConfig.addPlugin(pluginNavigation);
	
	//copy css to the output
	eleventyConfig.addPassthroughCopy('src/css/style.css');

    return {
	templateFormats: [
		"md",
		"njk",
		"html",
	],
    dir: {
        input: "src",
        output: "dist",
        }
    };
};
