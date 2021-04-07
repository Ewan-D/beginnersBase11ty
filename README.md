# A starting point for someone who is new to ssg's & 11ty.
_this project is a work in progress_ 

If you have any experiance I would recommend that you go to 11ty's base starter
instead. If on the other hand you can identify with what is written below let me
know :)

## why?!

The following is in the package.json, happily I think that it sums up the "why"
in this case fairly well. (consider it the tl;dr).

"A spring board for projects, which aims to be good for a beginner who enjoys
just about enough simplicty to understand how the parts all fit together and
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

The great thing about 11ty is that if/when in the future I decide to change all
the above I can. For now it is what I am sticking with in the spirit of 'getting
on with it!'

The struggle with decision making is an ongoing battle. Wait, is it?...

## what's the plan?

Make a base for a website with blog/nav/media/ functionality that has potential
to scale and adapt to future web projects.

Include good enough docs/notes so that I can remember what it is all doing and
how it works even if I left it for a day or two (swap week/month/year here as you see
fit..)

A ssg that I can publish too using emacs as a kind of cms. This way I get to
work in org mode which is one of my favorite things ever :).

Simplicity that fits my style as it is currently, with enough wiggle room for when that
all inevitably changes.

## my dumb notes on how this works...

1) clone repository and then npm run build
2) npm run dev
3) make some stuff in the live environment!

### files and folders:

#### index.njk
  - uses a custom filter (found in .eleventy.js) to get the top(num) from an
    array in this case the posts. the filter differs from 11tys in an attempt to
    make it more readable, to my eyes.(I am sure this won't backfire...)

#### _data
  - this folder includes a file named 'data.json' for the sites metadata to use
    in the head for example: <meta name="author" content="{{ meta.author.name
    }}. I am guessing this helps with seo etc? very nice how 11ty's data cascade
    just sorts this all out!

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
  
  
### Plugins

* eleventyNavigation 
* luxon (format dates etc) I havent included this with the dependency's as it
  comes with 11ty. No matter! I would have struggled a whole bunch more to
  figure this out if it wasn't for spotting it in the 11ty base blog
  devDependancys (which might explain why it is there).
* Luxon is in the .eleventy.config.js file and uses 11ty's .addFilter to make
  the readableDate filter which can be added in templates like this {{ post.date
  | readableDate }}.
* more on luxon... I also spotted use of the <time> tag. Makes good sense to me!
  11ty's base config also points you in the direction of html standards for
  formatting dates. such as dd-LL-yyyy note hyphon
 
  
### stumblings

the following things caught me out ... 

* White space in front matter seems to matter! (can I have that hour of my life back please)
* Not sure why {{ content | safe }} is needed in the body after front matter if
  it is included in a layout. for example my base layout within posts...
* postcss needed to be 'built' first? with NODE_ENV and then when running the
  dev enviroment it seemed to need to follow 'eleventy --serve' command.
* I don't think that postcss is needed if you have postcss-cli. also for
  consistency can we check postcss --o or -o, both seem to do the same thing.
  (this seems to be correct so I got rid of postcss leaving just poastcss-cli in
* something screwy is going on with the templates... for some reason list
  styling is not working on the header and footer componants as they are via
  includes, however they do work if loaded in via another template. FIXED see next bullet
* I want to keep the above to help anyone in a similiar stick. Silly error I
  just needed to add nunjucks as the markdown and html template engine in the
  .eleventy.config.js. in a nut shell, add this line: markDownTemplateEngine:
  "njk", the dev dependency's also the flags work with just one -)

### & things I don't understand yet aka off beat questions

- What is purge doing and how does it work in the tailwind.config.js file?
- I would like to have as simple a package.json as possible... well
  clear at least. What does ELEVENTY_PRODUCTION=true do and what does NODE_ENV=production
  do/mean exactly?

## all credit and inspiration go to:

11ty's base starter project + some others(jet), 
tailwind docs, 
css tricks 
and an idea about combining web accessibility standards and brutalist design with an
ssg I can eventualy fire .org files at.
