// eleventy config
const { DateTime } = require("luxon");
const pluginNavigation = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig){

    eleventyConfig.addPlugin(pluginNavigation);

    //get the top "num" in an array eg the top 2 posts for the index...
    eleventyConfig.addFilter("top", (array, num) =>{
        num = -Math.abs(num)
        return array.slice(num)
    });

    //add filter for tags here

    //luxon date formating
    eleventyConfig.addFilter("readableDate", dateObj => {
        return DateTime.fromJSDate(dateObj, {zone: 'UTC'}).toFormat("dd LLL yyyy")
    })
    //and make it accessible for html standards: datetime="yyyy-LL-dd"
    eleventyConfig.addFilter("dateToString", dateObj => {
        return DateTime.fromJSDate(dateObj, {zone: 'UTC'}).toFormat("yyyy-LL-dd")
    })
	
    //copy css to the output
    eleventyConfig.addPassthroughCopy('src/css/style.css');

    // to find all tags (from .json in post folder) etc
    eleventyConfig.setDataDeepMerge('true');

    return {
	templateFormats: [
	    "md",
	    "njk",
	    "html",
	],

        // pre-process *.html & *.md files using nunjucks
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",


    dir: {
        input: "src",
        output: "dist",
        }
    };
};
