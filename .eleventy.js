// my config for baseEleventy

const pluginNavigation = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig){
	
	// add plugins
	eleventyConfig.addPlugin(pluginNavigation);
	
	
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
