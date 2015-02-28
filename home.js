//Gotta hardcode in some stuff till we find  better way
var hoursOfOps = [ "Open from: 3:00pm - 11:00pm",
	"Open from: 1:00pm -11:00pm",
	"Open from: 1:00pm -11:00pm",
	"Open from: 1:00pm -11:00pm",
	"Open from: 1:00pm -11:00pm",
	"Open from: 1:00pm - 3:00pm",
	"Closed"
];

var day = new Date();

//display hours of operations
	document.getElementById("caveHours").innerHTML = hoursOfOps[day.getDay()];







