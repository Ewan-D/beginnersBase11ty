---
title: this is a beginning
date: 2021-04-03
tags:
  - trio
---

In the beginning there was a computer and before that there wasn't a computer.
Hold on, before the beginning? Yeah lets not worry about that right now please,
we will be heading around in circles before to long and ...

## lets start over

In the beginning there was a computer and a man with an idea. Don't fret about
its origin or that of the man's.


:heart:


if this is the beginning I should probably make myself a todo list so I can keep
on track with everything... lets program one in javascript.


<div class="pt-7">
<h1>This is the todo list</h1>

<input id="todoItem" type="text" placeholder="add a todo item..." />
<input type="submit" value="add" onclick="addToList()" />

<ol id="todoList" labelledby="List">
</ol>

   <input type="submit" value="clear list" onclick="finished(); stopFw();return false" />

   <a href="#" onclick="stopFw();return false">stop fireworks</a>
</div>


<script>{% include "assets/js/fireworks.js" %}</script>
<script>{% include "assets/js/todoList.js" %}</script>
