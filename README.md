# A starting point for someone who is new to ssg's & 11ty.

If you have any experience I would recommend that you go to 11ty's base starter
instead. If on the other hand you can identify with what is written below let me
know :)

[![Netlify
Status](https://api.netlify.com/api/v1/badges/f013a778-7d72-48b8-a8e0-62ab984ea301/deploy-status)](https://app.netlify.com/sites/trusting-pasteur-48f806/deploys)

As it is this site works best with netlify. If you use github pages you will need to amend the outputDir for the images shortcode to get the correct url for your site. For this please see the .eleventy.js file. 

- [netlify demo deploy](https://trusting-pasteur-48f806.netlify.app)
- [github pages demo deploy](https://ewan-d.github.io/beginnersBase11ty/)

## why?!

The following is in the package.json, happily I think that it sums up the "why"
in this case fairly well. (consider it the tl;dr).

"A spring board for projects, which aims to be good for a beginner who enjoys
just about enough simplicity to understand how the parts all fit together and
build on solid(ish) understanding (hopefully!)"

### it would be great to...

1. Learn how to use 11ty. Netlify Jamstack etc...
2. Get on that goal I set myself a year ago; build blog. I know, I know I got
   distracted. There are so many options and alluring technologies etc to learn
   about. And so...
3. Pick some tech and most importantly; stick with it! 
- SSG = 11ty
- template = Nunjucks
- style = Tailwind (which in turn will need postcss and autoprefixer but lets
  not worry to much about that now...)
- deploy= Netlify
4. Have a base that I can go to for future projects and actually understanding
   how it all works.

The great thing about 11ty is that if/when in the future I decide to change all
the above I can. For now it is what I am sticking with in the spirit of 'getting
on with it!'

The struggle with decision making is ongoing. Wait, is it?...

## what's the plan?

Make a base for a website with blog/nav/media/ functionality that has potential
to scale and adapt to future web projects.

Include good enough docs/notes so that I can remember what it is all doing and
how it works even if I left it for a day or two (swap week/month/year here as you see
fit..)

Be able to use with org-publish and blog from emacs (eventually!...one small
step at a time)

Simplicity that fits my style as it is currently, with enough wiggle room for when that
all inevitably changes.

## my dumb notes on how this works...

-1) clone repsoitory and npm install
1) npm run build
2) delete all the *.md files in the posts folder (not the .json) nuke all the images in the siteImages folder while your at it!
3) update meta.json in the _data folder with your sites data
4) npm run dev
5) make stuff & test it ...
6) you will probably want to reset the remote repo to set up your own... git remote set-url <remote-name> <remote-url>
7) deploy to either github or netlify (this config as it is works best with netlify) see notes on using github pages.

### issues you might run into
* tailwind has a rather aggressive base reset that once you get used to things
  all good. However, you may be stuck with what to do with styling those
  markdown files. At this stage I am not sure what the best way around this is
  ... tailwind does have its own plugin for this situation that takes care of
  the styling in very beautiful way. For this starter project I am going to
  leave it blank instead of having to uninstall plugins/delete styling after
  cloning the repo.
  
### files and folders:

My aim was to make everything as readable as possible. As such I put a ton of
thought into where everything lives and how it is named.

#### index.njk
  - filter (found in .eleventy.js) to get the top(num) from an array in this
    case the posts.
  - 'tagFilter' to filter out a given tag or tags (pass an array if more than
    one)

#### _data
  - this folder includes a file named 'data.json' for the sites metadata to use
    in the head for example: <meta name="author" content="{{ meta.author.name }}
    as well as for the rss feed. Make sure to update this file to match the
    details of your site.

#### package.json
  - script "npm run build" to get started. if you are wondering the -o is output
    and -w is watch.
  - script "npm run dev " to start the local dev environment.

#### .eleventy.js
  - this is currently directing the flow on build from src folder to the dist folder.

#### postcss.config.js 
  - using an array to pass in tailwind and autoprefixer. As I understand it
    currently postcss can been seen as the manager while tailwind & autoprefixer
    do the grunt work.(check this)

#### _includes
  - This folder has base.njk. Link to it through include/base in front matter.

#### postslist.njk
  - uses 11tys collection method to list posts with a nunjucks for loop. this
    differs from base 11tys by using a numbering system within the loop instead
    of in css. More potential for styling with tailwind here.
  
#### posts 
  - This folder includes posts.json. 11ty uses this in the data cascade (I
    think) anything that is going to apply to files within posts. Might be a good
    shout to add it here!

#### feed
  - atom/rss feed. links to meta.json in front matter. make sure to update that
    file with site details for the feed.

#### favicon.ico etc
  - s'all in the deats. update meta.json as you see fit!
  
### Plugins

This has turned into a belt and braces type set up!

* markdown-it anchor/ emoji - lets get the lot in here...
* eleventy-navigation 
* eleventy-syntaxhighlighting - as per the documentation this requires a link to a cdn for styling.
* eleventy-img
* eleventy-plugin-rss
* luxon (format dates etc) I haven't included this with the dependency's as it
  comes with 11ty. No matter! I would have struggled a whole bunch more to
  figure this out if it wasn't for spotting it in the 11ty base blog
  devDependancys (which might explain why it is there).
* Luxon is in the .eleventy.config.js file and uses 11ty's .addFilter to make
  the readableDate filter which can be added in templates like this {{ post.date
  | readableDate }}.
* more on luxon... I also spotted use of the <time> tag. Makes good sense to me!
  11ty's base config also points you in the direction of html standards for
  formatting dates. such as dd-LL-yyyy note hyphen
  
### stumblings

the following things caught me out ... 
* Put your custom js into the _includes folder (in assets for this one) you can then use {% include <fileName> %} and don't forget that final %!
* Image size messing up the ol' lighthouse score... requires additional images
  with the srcset attribute to fit the dpi of various devices and match the
  expected resolution. The supplied image plugin makes this a breeze but I am
  currently stuck with a work around situation to get the site working on git
  hub pages due to the pathprefix url being required.
* data, data, data if you are wondering what all the {{ path | url }} are doing
  it is helpful for getting things working on github pages using the
  --pathprefix option in the elventy build. check the package.json & .travis.yml
  files to see the specific build needed to deploy to github. On that note I
  came up against an issue with the images plugin and how to pass that prefix to
  the function as a variable... I think for now you can just amend it in the
  function after you have your site set up. If you look at the way that I got
  around the siteLogo etc you will find that after running the image
  optimisation I copied the file across into siteImages folder and used the
  passthrough filter.
* White space in front matter seems to matter! (can I have that hour of my life back please)
* {{ content | safe }} is needed in the body if it is included in a layout. for
  example the base layout within posts...
* postcss needed to be 'built' first? with NODE_ENV and then when running the
  dev environment it seemed to need to follow 'eleventy --serve' command.
* I don't think that postcss is needed if you have postcss-cli. also for
  consistency can we check postcss --o or -o, both seem to do the same thing.
  (this seems to be correct so I got rid of postcss leaving just poastcss-cli in
* something screwy is going on with the templates... for some reason list
  styling is not working on the header and footer components as they are via
  includes, however they do work if loaded in via another template. FIXED see next bullet
* I want to keep the above to help anyone in a similar stick. Silly error I
  just needed to add nunjucks as the markdown and html template engine in the
  .eleventy.config.js. in a nut shell, add this line: markDownTemplateEngine:
  "njk" 
* correction it was actually nothing to do with the above! Turns out the
  aggressive reset meant that the bullet points where there but off the screen.
  Embarrassing really but I am sure we have all been there at some point...
* Another embarrassing one! forgot to add <meta name="viewport"
  content="width=device-width, initial-scale=1.0"> so everything was wonky on
  mobile... make it mobile first. Again, I am sure we have all been there!
* css... classes cant begin with a number? got stuck trying to name 11tyTag
  class worked for ':elventyTag'. this is a custom class I have added to the
  tailwind css to recreate the hover effect from 11tys own site. Still a bit of
  work to do on it but I think spending almost an entire day on this would be
  over kill!? It was a fun challenge either way:)

## all credit and inspiration go to:

11ty's base starter project + some others(jet), 
tailwind docs, 
css tricks 
An idea that I could use this with org-publish and blog from emacs :)
