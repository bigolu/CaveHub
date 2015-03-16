//Gotta hardcode in some stuff till we find  better way
var takeoutMenu = [ ["Sandwiches w/ Assorted deli meats", "Open from: 5:30 pm - 10:00 pm"],
	["Buffalo Chicken Wings", "Honey Glazed Chicken Wings", "Chicken Wings", "Macoroni and Cheese", "Salad", "Open from: 5:00 pm - Midnight"],
	["Chicken Parmesan", "Eggplant Parmesan", "Pasta", "Burgers", "Open from: 5:00 pm - Midnight"],
	["Fried Chicken Wings", "Buffalo Chicken Wings", "Chicken Nuggets", "Mashed Potatos", "Salad", "Open from: 5:00 pm - Midnight"],
	["Chicken Nuggets", "Mozzarella Sticks", "Onion Rings", "French Fries", "Burgers", "Open from: 5:00 pm - Midnight"],
	["No Takeout"],
	["No Takeout"]
];


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



//display whats for takeout and hours for takeout
	for(i = 0; i <takeoutMenu[day.getDay()].length; i++){
		if(i < takeoutMenu[day.getDay()].length - 1){
			$("#takeout").append("<li>" + takeoutMenu[day.getDay()][i] + "<br></li>");
		}
		//the last index is the hours for takeout
		else{
			$("#takeoutHours").append(takeoutMenu[day.getDay()][i]);
		}
	}