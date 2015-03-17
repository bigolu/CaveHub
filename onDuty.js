//Gotta hardcode in some stuff till we find  better way
//I need to fix this later cuz some it is military time and some of it isn't
var employeeSchedule = [
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


whosWorking();


$(document).ready(
  function() { 
    $('#pageInfo').slimScroll({
    color: '#000000',
    size: '10px',
    height: '91%',
    alwaysVisible: true
    });
  }
);



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

  $("#menuHalf").dimBackground();

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

  $("#menuHalf").undim();

});

$('html').click(function() {
  console.log($("#menuHalf").width());
  if($("#menuHalf").width() > 10){
    
  

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

  }
});






function whosWorking(){
	var date = new Date();
	var hour = date.getHours();
	for(i = 0; i < employeeSchedule.length; i++){
		for(j = 0; j < employeeSchedule[i].schedule[date.getDay()].length; j++){
			if(employeeSchedule[i].schedule[date.getDay()][j] == hour){
				$("#employees").append("<li>" + employeeSchedule[i].name + "<br></li>");
				break;
			}
		}
	}
}