//Gotta hardcode in some stuff till we find  better way 
var hoursOfOps = [
"3:00pm - 11:00pm",   "1:00pm - 11:00pm",
"1:00pm - 11:00pm",   "1:00pm - 11:00pm",
"1:00pm - 11:00pm",   "Code Red from: 3:00pm - 6:00pm", "The Cave is closed."]; 

var day = new Date();

var xhr = new XMLHttpRequest();
xhr.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=Piscataway,us&APPID=e0245a9a802295f4bf2202c6f0842de5", true);
xhr.onreadystatechange = function() {
  if (xhr.readyState == 4) {
    displayWeather(xhr.responseText);
  }
}
xhr.send();
$("#temp").append("Loading...");
for(i = 0; i < document.getElementsByClassName("extraInfo").length; i++){
    document.getElementsByClassName("extraInfo")[i].innerHTML = "Loading...";
  }



window.setInterval(function test(){ xhr.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=Piscataway,us&APPID=e0245a9a802295f4bf2202c6f0842de5", true); xhr.send(); }, 3600000);



























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

});







//display hours of operations
	document.getElementById("caveHours").innerHTML = "Hours: " + hoursOfOps[day.getDay()];

	

function displayWeather(weatherJSON){
  var weather = jQuery.parseJSON(weatherJSON);

  $("#temp").empty();
  for(i = 0; i < document.getElementsByClassName("extraInfo").length; i++){
    document.getElementsByClassName("extraInfo")[i].innerHTML = "";
  }

  var temp = weather.main.temp;
  var hiTemp = weather.main.temp_max;
  var loTemp = weather.main.temp_min;


  temp = Math.round(((temp - 273.15)*1.8) + 32.0);
  hiTemp = Math.round(((hiTemp - 273.15)*1.8) + 32.0);
  loTemp = Math.round(((loTemp - 273.15)*1.8) + 32.0);

  temp = '<p id="tempNum">' + temp +  unescape('%B0') + "</p>";
  $("#temp").append(temp);

  $("#description").append(weather.weather[0].description);

}


