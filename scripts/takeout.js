/* The food being served that day and time that takeout is open */
var takeoutMenu = [ ["Sandwiches w/ Assorted deli meats", "5:30 pm - 10:00 pm"],
	["Buffalo Chicken Wings", "Honey Glazed Chicken Wings", "Chicken Wings", "Macoroni and Cheese", "Salad", "5:00 pm - Midnight"],
	["Chicken Parmesan", "Eggplant Parmesan", "Pasta", "Burgers", "5:00 pm - Midnight"],
	["Fried Chicken Wings", "Buffalo Chicken Wings", "Chicken Nuggets", "Mashed Potatos", "Salad", "5:00 pm - Midnight"],
	["Chicken Nuggets", "Mozzarella Sticks", "Onion Rings", "French Fries", "Burgers", "5:00 pm - Midnight"],
	["No Takeout"],
	["No Takeout"]
];

/* display whats for takeout and hours for takeout */
function food(){
	var day = new Date();

	for(i = 0; i <takeoutMenu[day.getDay()].length; i++){
		if(i < takeoutMenu[day.getDay()].length - 1){
			$("#food").append("<li>" + takeoutMenu[day.getDay()][i] + "<br></li>"); //append food to list
		}
		//the last index is the hours for takeout
		else{
      $("#foodHours").empty();
      $("#foodHours").append(takeoutMenu[day.getDay()][i]); //append hours for takeout to list
		}
	}
}

food();
