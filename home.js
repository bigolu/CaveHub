
var xhr = new XMLHttpRequest();
xhr.open("GET", "http://runextbus.heroku.com/stop/Hill%20Center", true);
xhr.onreadystatechange = function() {
  if (xhr.readyState == 4) {
    printText(xhr.responseText);
  }
}

xhr.send();
window.setInterval(function test(){ xhr.open("GET", "http://runextbus.heroku.com/stop/Hill%20Center", true); xhr.send(); }, 60000);      


var buses = jQuery.parseJSON(xhr.responseText);

function printText(text){
	console.log("stuff");
	var buses = jQuery.parseJSON(text);
	busData = "";
	for(i = 0; i < buses.length; i++){
		if(buses[i].predictions != null){
            if(buses[i].direction != 'To Allison Road Classrooms'){
			busData = busData + "Time for next " + JSON.stringify(buses[i].title) + " bus: " + JSON.stringify(buses[i].predictions[0].minutes)  + " minutes" + '<br>';
            }
		}
	}
	document.getElementById("buses").innerHTML = busData;
}
