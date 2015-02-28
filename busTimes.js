//for api call to rutgers bus api
var xhr = new XMLHttpRequest();
xhr.open("GET", "http://runextbus.heroku.com/stop/Hill%20Center", true);
xhr.onreadystatechange = function() {
  if (xhr.readyState == 4) {
    printBuses(xhr.responseText);
  }
}
xhr.send();
window.setInterval(function test(){ xhr.open("GET", "http://runextbus.heroku.com/stop/Hill%20Center", true); xhr.send(); }, 60000);      
















function printBuses(busJSON){
	var buses = jQuery.parseJSON(busJSON);

	for(i = 0; i < buses.length; i++){
		if(buses[i].predictions != null){
			if(buses[i].predictions.length > 1){
				if(buses[i].direction == 'To Allison Road Classrooms'){
					$("#stillBuses").append("Time for next " + JSON.stringify(buses[i].title) + " (coming)" + " bus: " + JSON.stringify(buses[i].predictions[0].minutes)  + " minutes");
	            }
	            //gotta fix this if statement
	            else if(buses[i].direction == 'THE OTHER REXB'){
					$("#stillBuses").append("Time for next " + JSON.stringify(buses[i].title) + " (going)" + " bus: " + JSON.stringify(buses[i].predictions[0].minutes)  + " minutes");
	            }
	            else{
	            	$("#stillBuses").append("Time for next " + JSON.stringify(buses[i].title) + " bus: " + JSON.stringify(buses[i].predictions[0].minutes)  + " minutes");
	            }
			}
			else{
				if(buses[i].direction == 'To Allison Road Classrooms'){
					$("#lastBus").append("Time for next " + JSON.stringify(buses[i].title) + " (coming)" + " bus: " + JSON.stringify(buses[i].predictions[0].minutes)  + " minutes");
	            }
	            //gotta fix this if statement
	            else if(buses[i].direction == 'THE OTHER REXB'){
					$("#lastBus").append("Time for next " + JSON.stringify(buses[i].title) + " (going)" + " bus: " + JSON.stringify(buses[i].predictions[0].minutes)  + " minutes");
	            }
	            else{
	            	$("#lastBus").append("Time for next " + JSON.stringify(buses[i].title) + " bus: " + JSON.stringify(buses[i].predictions[0].minutes)  + " minutes");
	            }
			}
		}
	}
}