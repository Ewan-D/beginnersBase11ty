// lets just get all the eleventy plugins...

const { DateTime } = require("luxon");
const pluginNavigation = require("@11ty/eleventy-navigation");
const Image = require("@11ty/eleventy-img");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const markdownItEmoji = require("markdown-it-emoji");


// Images
async function imageShortcode(src, alt, sizes){
    let metadata = await Image(src, {
        widths: [300, 600],
        formats: ["jpeg", "png"],
        //this might be what you are looking for...huzzah!
        // if you are hosting on github pages add the pathprefix here
        outputDir: "./dist/img/"
    });

    let imageAttributes = {
        alt,
        sizes,
        loading: "lazy",
        decoding: "async",
        };

    return Image.generateHTML(metadata, imageAttributes);
}

// Okay ready?, lets go ->

module.exports = function(eleventyConfig){

    eleventyConfig.addPlugin(pluginNavigation);
    eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);
    eleventyConfig.addPlugin(pluginRss);
    eleventyConfig.addPlugin(syntaxHighlight);

    // get the top "num" in an array eg the top 2 posts for the index...
    eleventyConfig.addFilter("top", (array, num) =>{
        num = -Math.abs(num)
        return array.slice(num)
    });

    // add filter for tags here you can pass an array or a single string :)
    eleventyConfig.addFilter("tagFilter", (array, toRemove) =>{
        return (array || []).filter(tag => toRemove.indexOf(tag) === -1 );
    });

    // luxon date formating
    eleventyConfig.addFilter("readableDate", dateObj => {
        return DateTime.fromJSDate(dateObj, {zone: 'UTC'}).toFormat("dd LLL yyyy")
    })
    // and make it good for the <time> tag: datetime="yyyy-LL-dd"
    eleventyConfig.addFilter("dateToString", dateObj => {
        return DateTime.fromJSDate(dateObj, {zone: 'UTC'}).toFormat("yyyy-LL-dd")
    })

    // below is almost a copy and paste job... got stuck here
    eleventyConfig.addCollection("allTags", tagCollection => {
        let tagSet = new Set();
        tagCollection.getAll().forEach(obj => {
            (obj.data.tags || []).forEach(objTag => tagSet.add(objTag));
        });
    return [...tagSet];
    });

    //  Customize markdown library and settings:
    let markdownLibrary = markdownIt({
        html: true,
        breaks: false,
        linkify: true,
        typographer: true,
    }).use(markdownItAnchor, {
        permalink: true,
        permaClass: "direct-link",
        permalinkSymbol: '#',
    }).use(markdownItEmoji, {

    });
    eleventyConfig.setLibrary("md", markdownLibrary);

    //copy css images and js to the output
    eleventyConfig.addPassthroughCopy('src/css/style.css');
    eleventyConfig.addPassthroughCopy('src/feed/rssLogo.png')
    eleventyConfig.addPassthroughCopy('src/siteImages/')
    eleventyConfig.addPassthroughCopy('src/js/fireworks.js')
    eleventyConfig.addPassthroughCopy('src/js/todoList.js')

    // to find all tags (from .json in post folder) etc
    eleventyConfig.setDataDeepMerge('true');

    return {
	templateFormats: [
	    "md",
	    "njk",
	    "html",
        "js"
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
