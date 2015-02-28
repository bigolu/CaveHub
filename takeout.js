//Gotta hardcode in some stuff till we find  better way
var takeoutMenu = [ ["TBD"],
	["Buffalo Chicken Wings", "Honey Glazed Chicken Wings", "Chicken Wings", "Macoroni and Cheese", "Salad", "Open from: 5:00 pm - Midnight"],
	["Chicken Parmesan", "Eggplant Parmesan", "Pasta", "Burgers", "Open from: 5:00 pm - Midnight"],
	["Fried Chicken Wings", "Buffalo Chicken Wings", "Chicken Nuggets", "Mashed Potatos", "Salad", "Open from: 5:00 pm - Midnight"],
	["Chicken Nuggets", "Mozzarella Sticks", "Onion Rings", "French Fries", "Burgers", "Open from: 5:00 pm - Midnight"],
	["No Takeout"],
	["No Takeout"]
];


var day = new Date();

//display whats for takeout and hours for takeout
	for(i = 0; i <takeoutMenu[day.getDay()].length; i++){
		if(i < takeoutMenu[day.getDay()].length - 1){
			$("#takeout").append(takeoutMenu[day.getDay()][i]);
		}
		//the last index is the hours for takeout
		else{
			$("#takeoutHours").append(takeoutMenu[day.getDay()][i]);
		}
	}