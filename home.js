$(document).ready(function(){
    $('img').mouseenter(function(){
        $('img').fadeTo(3000, 0.00001);
     });
    $('img').mouseleave(function(){
        $('img').fadeTo(8000, 1);
     });
//fadeOut removes tag
});

var xhr = new XMLHttpRequest();
xhr.open("GET", "http://runextbus.heroku.com/stop/Hill%20Center", true);
xhr.onreadystatechange = function() {
  if (xhr.readyState == 4) {
    // innerText does not let the attacker inject HTML elements.
    document.getElementById("resp").innerText = xhr.responseText;
  }
}
xhr.send();