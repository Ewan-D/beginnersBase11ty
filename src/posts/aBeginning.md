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


<div class="mt-7 p-2 max-w-xl border border-indigo-200">


<input id="makeTodoList" class="block mx-auto mt-3 px-2" type="submit" value="Okay, its time to make a list!" onclick="startItemMaker()"/>

<div id="itemMaker" style="display:none">
<h1 class="font-bold">Todo list:</h1>
<input id="todoItem" class="px-1 text-white bg-gray-400" type="text" placeholder="add a todo item here..." />
<input type="submit" class="px-1 text-white bg-green-400 hover:bg-green-300" value="add" onclick="addToList()" />
</div>

<ol id="todoList" class="pt-3" labelledby="List">
</ol>

<input id="clearList" class="px-1 mt-3 text-white bg-red-400 hover:bg-red-300" type="submit" value="clear list" style="display:none;" onclick="finished(); stopFw();return false" />

<input id="toggleFx" class="px-1 mt-3 text-white bg-red-400 hover:bg-red-300" type="submit" value="new list?" style="display:none;" onclick="finished(); stopFw();return false">
</div>

<script>{% include "assets/js/fireworks.js" %}</script>
<script>{% include "assets/js/todoList.js" %}</script>
