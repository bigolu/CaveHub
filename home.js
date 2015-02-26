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
//xhr.open("GET", "http://runextbus.heroku.com/stop/Hill%20Center", true);
xhr.onreadystatechange = function() {
  if (xhr.readyState == 4) {
    // innerText does not let the attacker inject HTML elements.
    //console.log(xhr.responseText);
    //console.log("1");
    //document.getElementById("resp").innerText = xhr.responseText;
    printText(xhr.responseText);
    //console.log("2");
    //console.log("druids");
  }
}
//console.log("3");
window.setInterval(function test(){ xhr.open("GET", "http://runextbus.heroku.com/stop/Hill%20Center", true); xhr.send(); }, 5000);      
//console.log("4");
//console.log("buses[0]");


var buses = jQuery.parseJSON(xhr.responseText);

//console.log(xhr.responseText);
function printText(text){
	//console.log(text);
	console.log("stuff");
	var buses = jQuery.parseJSON(text);
	busData = "";
	for(i = 0; i < buses.length; i++){
		if(buses[i].predictions != null){
			//$("#buses").append("Time for next " + JSON.stringify(buses[i].title) + " bus: " + JSON.stringify(buses[i].predictions[0].minutes)  + " minutes" + '<br>');
			busData = busData + "Time for next " + JSON.stringify(buses[i].title) + " bus: " + JSON.stringify(buses[i].predictions[0].minutes)  + " minutes" + '<br>';
		}
	}
	//console.log(busData);
	document.getElementById("buses").innerHTML = busData;
	//console.log("tt");

	//$("#buses").append("Time for next " + JSON.stringify(buses[1].title) + " bus: " + JSON.stringify(buses[1].predictions[0].minutes)  + " minutes" + '<br>');
	//$("#buses").append("Time for next C Bus: " + JSON.stringify(buses[2].predictions[0].minutes) + '<br>');
	//$("#buses").append("Time for next REXB Bus: " + JSON.stringify(buses[3].predictions[0].minutes) + " minutes" + '<br>');
}