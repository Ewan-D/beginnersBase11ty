---
layout: layouts/base
title: startHere
eleventyNavigation:
  key: Home
  order: 1
---
## it includes the following

<ul>
{%- for post in collections.posts %}
	<li><a href="{{post.url}}">{{ post.data.title }}</a></li>
{%- endfor %}
</ul>

and this is a little info to tell you all about it! Count to three yip ee dee
