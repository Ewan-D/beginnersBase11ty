---
title: If this is a beginning
date: 2021-04-03
tags:
  - trio
---

In the beginning there was a computer and before that there wasn't a computer.
Hold on, before the beginning? Yeah lets not worry about that right now, please,
we will be heading around in circles before to long and so on and so on ...

## lets start over

In the beginning there was a computer and a man with an idea. Don't fret about
its origin or that of the man's.

:heart:

'If this is the beginning,' the man pondered, 'I should probably make myself a
list so I can keep a track of everything. He tapped a pencil idly on a note pad
for a moment or two, then in a fit of inspiration he tossed them aside and
exclaimed, 'I could even use this computer to help!'. The computer beeped at him
indifferently. :computer:

He fumbled around with the computer for a while, red error messages popping up,
filling the screen. After a short while, eh, correction here... after days of
confusion, coffee and cursing, he was happy enough with what he had done. 'Okay,
computer; lets begin!' 

<div class="block mx-auto mt-7 p-2 max-w-xl border border-indigo-200">

  <input id="makeTodoList" class="block mx-auto my-3 px-2" type="submit" value="...its time to make a list!" onclick="startItemMaker()"/>

  <div id="itemMaker" style="display:none">
    <h1 class="font-bold">Todo list:</h1>

  <ol id="todoList" class="pt-3" labelledby="List">
    </ol>
    <input id="todoItem" class="px-1 text-white bg-gray-400" type="text" placeholder="add a todo item here..." />
    <input type="submit" class="px-1 text-white bg-green-400 hover:bg-green-300" value="add" onclick="addToList()" />
    <input id="clearList" class="px-1 mt-3 text-white bg-red-400 hover:bg-red-300" type="submit" value="clear list" style="display:none;" onclick="finished();" />

  </div>

  <input id="toggleFx" class="px-1 my-3 mx-auto text-white bg-indigo-800 hover:bg-indigo-500" type="submit" value="Nice job! Click here to make another list..." style="display:none;" onclick="finished(); stopFw();return false" />
</div>

<script>{% include "assets/js/fireworks.js" %}</script>
<script>{% include "assets/js/todoList.js" %}</script>

:pencil:
