//for get request to rutgers bus api
var xhr = new XMLHttpRequest();
xhr.open("GET", "http://runextbus.heroku.com/stop/Hill%20Center", true);
xhr.onreadystatechange = function() {
  if (xhr.readyState == 4) {
    printBuses(xhr.responseText);
  }
}
xhr.send();
window.setInterval(function test(){ xhr.open("GET", "http://runextbus.heroku.com/stop/Hill%20Center", true); xhr.send(); }, 6000);      


$('#menuIcon').click(function() {

  document.getElementById("page").setAttribute("style", "display: none;");

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

  document.getElementById("page").setAttribute("style", "display: block;");

});














function printBuses(busJSON){
	var buses = jQuery.parseJSON(busJSON);

	$("#stillBuses").empty();
	$("#lastBus").empty();
	for(i = 0; i < buses.length; i++){
		if(buses[i].predictions != null){
			if(buses[i].predictions.length > 1){
				if(buses[i].direction == 'To Allison Road Classrooms' && buses[i].title == 'REX B'){
					$("#stillBuses").append("<li>Time for next " + JSON.stringify(buses[i].title) + " (Inbound)" + " bus: " + JSON.stringify(buses[i].predictions[0].minutes)  + " minutes</li>" + "<br>");
	            }
	            else if(buses[i].direction == 'To College Hall'){
					$("#stillBuses").append("<li>Time for next " + JSON.stringify(buses[i].title) + " (Outbound)" + " bus: " + JSON.stringify(buses[i].predictions[0].minutes)  + " minutes</li>" + "<br>");
	            }
	            else{
	            	$("#stillBuses").append("<li>Time for next " + JSON.stringify(buses[i].title) + " bus: " + JSON.stringify(buses[i].predictions[0].minutes)  + " minutes</li>" + "<br>");
	            }
			}
			else{
				if(buses[i].direction == 'To Allison Road Classrooms' && buses[i].title == 'REX B'){
					$("#lastBus").append("<li>Time for next " + JSON.stringify(buses[i].title) + " (Inbound)" + " bus: " + JSON.stringify(buses[i].predictions[0].minutes)  + " minutes</li>" + "<br>");
	            }
	            else if(buses[i].direction == 'To College Hall'){
					$("#lastBus").append("<li>Time for next " + JSON.stringify(buses[i].title) + " (Outbound)" + " bus: " + JSON.stringify(buses[i].predictions[0].minutes)  + " minutes</li>" + "<br>");
	            }
	            else{
	            	$("#lastBus").append("<li>Time for next " + JSON.stringify(buses[i].title) + " bus: " + JSON.stringify(buses[i].predictions[0].minutes)  + " minutes</li>" + "<br>");
	            }
			}
		}
	}
}