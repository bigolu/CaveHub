
var xhr = new XMLHttpRequest();
xhr.open("GET", "http://runextbus.heroku.com/stop/Hill%20Center", true);
xhr.onreadystatechange = function() {
  if (xhr.readyState == 4) {
    printText(xhr.responseText);
  }
}

xhr.send();
window.setInterval(function test(){ xhr.open("GET", "http://runextbus.heroku.com/stop/Hill%20Center", true); xhr.send(); }, 60000);      

dailyOps();


$("#events").append("Hacker Hour on Friday: Making Websites with style!");
$("#events").append('&emsp;' + '&emsp;' + '&emsp;' + '&emsp;' + '&emsp;' + '&emsp;');
$("#events").append("                 Hack Night on Monday: Learning to do stuff!");




var test = [
	{
		"name": "This Guy",
		"schedule": [[1,2,3], [-1], [4,5], [-1], [2,3,4,5], [2,3,4], [-1]]
	            
	},
	{
		"name": "That Guy",
		"schedule": [[1,2,3], [-1], [4,5], [-1], [2,3,4,5], [2,3,4], [-1]]
	            
	}
];

whosWorking();

























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

function dailyOps(){
	var day = new Date();
	if(day.getDate() == 0){
		document.getElementById("hours").innerHTML = "Hours of operations: 3:00pm - 11:00pm" ;
	}
	else if(day.getDate() == 5){
		document.getElementById("hours").innerHTML = "Hours of operations: 1:00pm - 3:00pm" ;
	}
	else if(day.getDate() == 6){
		document.getElementById("hours").innerHTML = "Hours of operations: Closed" ;
	}
	else{
		document.getElementById("hours").innerHTML = "Hours of operations: 1:00pm -11:00pm" ;
	}
}

function whosWorking(){
	var date = new Date();

	for(i = 0; i<test.length; i++){
		for(j = 0; j<test[i].schedule[date.getDay()].length; j++){

			if(test[i].schedule[date.getDay()][j] == date.getHours() - 12){
				//append that guys info to the whos on duty page
				console.log(test[i].name);
			}

		}
	}
}
