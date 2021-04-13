---
title: Lets do some programming!
tags:
  - code
  - javaScript
---


I really like to read Ursula Guine so I was plesently surprised when I found a
little quote of hers that could be translated into a little kind of function
type ting...



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


console.log(whatNext(0, 0));
console.log(whatNext(1, 0));
console.log(whatNext(1, 1));
console.log(whatNext(0, 1));

```


Of course there really is no need for the while loop in this case! It does
though get the spirit of the quote... can you have a guess at which one it is?
