/* this function slides the menu into the page and dims the rest of the page */
$('#menuIcon').click(function() {
	//slide in menu
  document.getElementById("page").setAttribute("style", "display: none;");
  $('#page').animate({
      width: "30%"
    }, 200);
  $('#menuHalf').animate({
      width: "70%"
    }, 200);

	//unhide menu
  document.getElementById("menuHalf").setAttribute("style", "display: block");
  for(i = 0; i < document.getElementsByClassName("page").length; i++){
    document.getElementsByClassName("page")[i].setAttribute("style", "display: inline;");
  }

	//dim background
  $("#menuHalf").dimBackground();
});


/* This function navigates to another page */
$('.page').click(function() {
	/* this block slides the menu out and brings the page in */
  for(i = 0; i < document.getElementsByClassName("page").length; i++){
    document.getElementsByClassName("page")[i].setAttribute("style", "display: none;");
  }
  $('#menuHalf').animate({
   width: ".5%"
  }, 200);
  $('#page').animate({
    width: "99%"
  }, 200);
  document.getElementById("page").setAttribute("style", "display: block;");

  $("#menuHalf").undim();
});


$('html').click(function() {
  if($("#menuHalf").width() > 10){ //menu is open so now i will close it
	  for(i = 0; i < document.getElementsByClassName("page").length; i++){ //hide menu items
	    document.getElementsByClassName("page")[i].setAttribute("style", "display: none;");
	  }

		/* Slide menu out to the left and slide page back in to the right */
	  $('#menuHalf').animate({
	   width: ".5%"
	  }, 200);
	  $('#page').animate({ //show the rest of the page
	    width: "99%"
	  }, 200);

	  document.getElementById("page").setAttribute("style", "display: block;"); //unhide the page

	  $("#menuHalf").undim(); //undim the screen
  }
});
