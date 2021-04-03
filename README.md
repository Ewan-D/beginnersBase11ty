# A starting point for someone who is new to ssg's & 11ty.
_this project is a work in progress_

## why?!

I wrote the following into the package.json, happily I think that it sums up the "why"
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
- style = Tailwind
- deploy= Netlify

The great thing about 11ty is that if/when in the future I decide to change all
the above I can. For now it is what I am sticking with the in the spirit
of 'getting on with it!'

Anybody else struggle with decision making?

## the aim

Make a base for a website with blog/nav/media/ functionality that has potential
to scale.

Include good enough docs/notes so that I can remember what it is all doing and
how it works even if I left it for a day or two (swap week/month/year here as you see
fit..)

A ssg that I can publish too using emacs as a kind of cms. This way I get to
work in org mode which is one of my favorite things ever :).

Simplicity that fits my style as it is currently, with enough wiggle room for when that
all inevitably changes.

## my dumb notes on how this works...

### files and folders:

* package.json
  - scripts run "npm start eleventy --serve" to start the local dev environment.
    (there is probably a better way to do this but at the moment this makes
    sense to me)

* .eleventy.js
  - this is currently directing the flow on build from src folder to the dist folder.

* _includes
  - This folder has base.njk. Link to it through include/base in front matter.
  
* posts 
  - This folder includes posts.json. 11ty uses this in the data cascade (I
  think) anything that is going to apply to files within posts. Might be a good
  shout to add it here!
  
  
### Plugins
* eleventyNavigation 
 
  
### stumblings
the following things caught me out ... 

* White space in front matter seems to matter! (can I have that hour of my life back please)
* Not sure why {{ content | safe }} is needed in the body after front matter if
  it is included in a layout. for example my base layout within posts...
