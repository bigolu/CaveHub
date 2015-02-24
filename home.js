$(document).ready(function(){
    $('img').mouseenter(function(){
        $('img').fadeTo(3000, 0.00001);
     });
    $('img').mouseleave(function(){
        $('img').fadeTo(8000, 1);
     });
//fadeOut removes tag
});