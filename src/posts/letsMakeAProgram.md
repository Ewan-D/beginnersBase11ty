---
title: Lets do some programming!
tags:
  - code
  - javaScript
---


I have been learning how to do a bit of programming recently and it is starting
to effect the way that I look things. For instance, I am enjoying reading Ursula
Guin's 'Left Hand Of Darkness' and I stumbled across a quote of hers that seemed
to translate into a type of conditional loop. Huzzah! An opportunity to throw
something of a small program together...

``` js
let whatNext = (action, info) => {
let profitable = 0;
// check input for nonsense
    if(action && info){
        profitable++;
        return "your a wizard on top form!"
    }else if(action && !info){
        profitable++;
        return "action is required"
    }
// this is the heart of the quote...
    do{
        if(!action && info){
           profitable++;
           return "gather information";

        }else if( !action && !info ) {
           profitable++;
           return "sleep";
        }
    }while(profitable);
};
```

Yes I know, there really is no need for the while loop! And the ux leaves
everything to be desired. It does though get something of the spirit of the
quote across... can you have a guess at what the quote might be?

<script type="text/javascript">
let answer = () => {
    let Quote = document.getElementById("UrsulaQuote");
    let clicked = document.getElementById("clickMe");
    clicked.classList.add("hidden")
    Quote.classList.remove("hidden")
};
</script>
<div class="flex justify-center">
<input id="clickMe" class="bg-blue-300 hover:bg-yellow-200 p-1 px-2 my-3 rounded-sm" type="button" onclick="answer()" value="click here to find out" />
</div>

<div id="UrsulaQuote" class="hidden py-3 italic text-gray-700"> 
<p>When action grows unprofitable, gather information; when information grows
unprofitable, sleep. <br> - Ursula K. Le Guin</p>
</div>

