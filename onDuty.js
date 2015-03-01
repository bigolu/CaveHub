//Gotta hardcode in some stuff till we find  better way
var employeeSchedule = [
	{
		"name": "Jade",
		"schedule": [[9,10], [-1], [9,10], [-1], [17,18,19,20], [-1], [-1]]	            
	},
	{
		"name": "Tim",
		"schedule": [[-1], [13,14,19,20], [15,16], [-1], [15,16], [15,16,17], [-1]]	            
	},
	{
		"name": "Pat",
		"schedule": [[-1], [-1], [10,11,12,13,14], [17,18,19,20,21], [17,18], [15,16,17], [-1]]	            
	},
	{
		"name": "Eric",
		"schedule": [[15,16,17,18], [17,18], [19,20], [19,20], [-1], [-1], [-1]]	            
	},
	{
		"name": "Allison",
		"schedule": [[-1], [-1], [17,18], [10,11,12,13,14,15,16], [-1], [13,14], [-1]]	            
	},
	{
		"name": "Matt",
		"schedule": [[-1], [17,18,21,22], [17,18], [21,22], [21,22], [-1], [-1]]	            
	},
	{
		"name": "Shahan",
		"schedule": [[19,20], [19,20], [-1], [-1], [13,14], [-1], [-1]]	            
	},
	{
		"name": "Ed",
		"schedule": [[-1], [15,16], [19,20], [17,18], [19,20], [-1], [-1]]	            
	}
];


whosWorking();


function whosWorking(){
	var date = new Date();
	var hour = date.getHours();
	console.log("here");
	for(i = 0; i < employeeSchedule.length; i++){
		for(j = 0; j < employeeSchedule[i].schedule[date.getDay()].length; j++){
			console.log("wtf?");
			if(employeeSchedule[i].schedule[date.getDay()][j] == hour){
				$("#employees").append(employeeSchedule[i].name + "<br>");
				break;
			}
		}
	}
}