/* This is a list where each json represents an employee
* list in the schedule value represents a day of the week ( 0 is sunday, 1 is monday...)
* each of those lists is contains the hours, in military time, that the person works
* example: if employeeSchedule[0].schedule[0].indexOf(21) == true then this person works on monday from 9 - 10
*/
var employees = [
	{
		"name": "Jade",
		"schedule": [[21,22], [-1], [21,22], [-1], [17,18,19,20], [-1], [-1]]
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


/* This function populates the page whoever is currently on duty */
function whosWorking(){
	var date = new Date();
	var hour = date.getHours();
	var day = date.getDay();
	var someone_working = false;

	for(i = 0; i < employees.length; i++){
		if(employees[i].schedule[day].indexOf(hour) != -1){ //they're currently on the clock
			someone_working = true;
			$("#employees").append("<li>" + employeeSchedule[i].name + "<br></li>"); //append person to list of employees
		}
	}

	if(!someone_working){ //noone is working
		$("#employees").append("<li>Noone is working right now.<br></li>");
	}
}


whosWorking(); //populate page with whoever is on duty
