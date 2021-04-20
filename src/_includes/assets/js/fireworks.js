/**
  * You may use this code for free on any web page provided that
  * these comment lines and the following credit remain in the code.
  * Cross Browser Fireworks from http://www.javascript-fx.com
  */


/* this has been updated to use in html5 by ewan-d */

var theObj = '<p style="font-size:2em; color:#00FF00"><B>.</B></p>';
var numObj = 40, _dl = document.getElementById('sf"+i+"'), sparks = new Array();

mx = function(){ return window.pageXOffset ? window.pageXOffset : document.body.scrollLeft; };
my = function(){ return window.pageYOffset ? window.pageYOffset : document.body.scrollTop; };
cx = window.innerWidth  ? window.innerWidth  : document.body.clientWidth;
cy = window.innerHeight ? window.innerHeight : document.body.clientHeight;

for(var i=0 ; i<numObj ; i++){
    document.write( "<DIV id='sf"+i+"' style='position:absolute'>"+theObj+"</DIV>" );
}

function ani(){
    for(var i=0 ;i<numObj;i++){
        var el=sparks[i];
        el.style.left = (el.x += el.dx) + "px";
        el.style.top  = (el.y += (el.dy += .09)) + "px";
    }
}

function reset()
{
    var fwX = mx() + 100 + Math.random() * (cx-200), fwY = my() + 100 + Math.random() * (cy-200);
    for(var i=0 ;i<numObj;i++){
        var el=sparks[i]= document.getElementById("sf"+i) ;
        var a = Math.random() * 6.294, s = (Math.random() >.6) ? 2 : Math.random() * 2;
        el.dx = s*Math.sin(a);
        el.dy = s*Math.cos(a) - 2;
        el.x  = fwX;
        el.y  = fwY;
        _dl ? el.style = el : null;
    }
};


function startFw(){
    reset();
    t1 = setInterval("ani()", 40);
    t2 = setInterval("reset()", 2000);
}


function stopFw()
{
    clearInterval(t1);
    clearInterval(t2);
    for(var i=0 ;i<numObj;i++){
        var el=sparks[i];
        el.style.left = "-10px";
        el.style.top  = "-10px";
    }
}
