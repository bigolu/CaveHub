//Gotta hardcode in some stuff till we find  better way 
var hoursOfOps = [
"Open today from: 3:00pm - 11:00pm",   "Open today from: 1:00pm - 11:00pm",
"Open today from: 1:00pm - 11:00pm",   "Open today from: 1:00pm - 11:00pm",
"Open today from: 1:00pm - 11:00pm",   "The Cave is closed.",   "Code Red from: 1:00pm - 3:00pm" ]; 

var day = new Date();

$('#menuIcon').click(function() {

  $('#page').animate({
      width: "30%"
    }, 200);

  $('#menuHalf').animate({
      width: "70%"
    }, 200);


  for(i = 0; i < document.getElementsByClassName("page").length; i++){
    document.getElementsByClassName("page")[i].setAttribute("style", "display: inline;");
  }

  });

$('.page').click(function() {

  for(i = 0; i < document.getElementsByClassName("page").length; i++){
    document.getElementsByClassName("page")[i].setAttribute("style", "display: none;");
  }

  $('#menuHalf').animate({
   width: ".5%"
  }, 200);

  $('#page').animate({
    width: "99%"
  }, 200);

});







//display hours of operations
	document.getElementById("caveHours").innerHTML = hoursOfOps[day.getDay()];

	





