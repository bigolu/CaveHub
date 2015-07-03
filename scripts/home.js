/* Hours of operations for the cave (hoursOfOps[0] = hours for sunday)*/
var hoursOfOps = [
"3:00pm - 11:00pm",   "1:00pm - 11:00pm",
"1:00pm - 11:00pm",   "1:00pm - 11:00pm",
"1:00pm - 11:00pm",   "Code Red from: 3:00pm - 6:00pm", "The Cave is closed."];

/* regularly scheduled events */
var events = [
  {
    'name': 'Hack Night',
    'place': 'The Cove',
    'frequency': 'biweekly',
    'day': 'Monday',
    'time': '8:00pm - 10:00pm',
    'first_one': 'May 04, 2015 20:00:00'
  },
  {
    'name': 'Hacker Hour',
    'place': 'The Cave',
    'frequency': 'weekly',
    'day': 'Friday',
    'time': '6:00pm - 7:00pm',
    'first_one': 'May 01, 2015 20:00:00'
  }
];


/* Display weather, and hours for cave */
function start_day(){
  //display events on ticker
  show_events()

  //display hours of operations
  var day = new Date();
  document.getElementById("caveHours").innerHTML = "Hours: " + hoursOfOps[day.getDay()];

  //show 'loading' until get request for weather is recieved
  $("#temp").append("Loading...");
  for(i = 0; i < document.getElementsByClassName("extraInfo").length; i++){
      document.getElementsByClassName("extraInfo")[i].innerHTML = "Loading...";
  }

  /* Get the weather */
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=Piscataway,us&APPID=e0245a9a802295f4bf2202c6f0842de5", true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) { //good request
      displayWeather(xhr.responseText);
    }
  }
  xhr.send();

  /* update weather every hour */
  window.setInterval(function test(){
    xhr.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=Piscataway,us&APPID=e0245a9a802295f4bf2202c6f0842de5", true);
    $("#temp").empty();
    $("#temp").append("Loading...");
    for(i = 0; i < document.getElementsByClassName("extraInfo").length; i++){
        document.getElementsByClassName("extraInfo")[i].innerHTML = "Loading...";
      }
    xhr.send();
    }
  , 3600000);
}


/* Popuplates page with the weather */
function displayWeather(weatherJSON){
  var weather = jQuery.parseJSON(weatherJSON);

  /* clear 'loading' tesxt */
  $("#temp").empty();
  for(i = 0; i < document.getElementsByClassName("extraInfo").length; i++){
    document.getElementsByClassName("extraInfo")[i].innerHTML = "";
  }


  var temp = weather.main.temp;
  var hiTemp = weather.main.temp_max;
  var loTemp = weather.main.temp_min;

  /* convert weather to farenheit */
  temp = Math.round(((temp - 273.15)*1.8) + 32.0);
  hiTemp = Math.round(((hiTemp - 273.15)*1.8) + 32.0);
  loTemp = Math.round(((loTemp - 273.15)*1.8) + 32.0);

  /* put temperature and degree symbol in a p tag */
  temp = '<p id="tempNum">' + temp +  unescape('%B0') + "</p>";
  hiTemp = "High: " + hiTemp + unescape('%B0');
  loTemp = "Low: " + loTemp + unescape('%B0');

  /* populate page */
  $("#temp").append(temp);
  $("#description").append(weather.weather[0].description);
  $("#hi").append(hiTemp);
  $("#lo").append(loTemp);
}


/* Populates ticker with events */
function show_events(){
  var event_str = ''; //holds all events to be displayed in the ticker
  for(var i =0; i < events.length; i++){
    var now = new Date().getTime(); //get amount time elapsed since 01/1970 in milliseconds

    /* To get the date of the event, I will start from the first one and advance
    * 1 or 2 weeks until I reach the date of the next upcoming one
    */
    var date = new Date(events[i].first_one);

    if(events[i].frequency == 'weekly'){
      while(date.getTime() < now){
        date.setDate(date.getDate() + 7);
      }
    }
    else{ //biweekly
      while(date.getTime() < now){
        date.setDate(date.getDate() + 14);
      }
    }

    /* create event to be added to ticker */
    event_str += events[i].name;
    //get day of week
    event_str += ' ' + events[i].day;
    //get name of month
    var locale = "en-us";
    var month = date.toLocaleString(locale, { month: "long" });
    event_str += ' ' + month;
    //get day of the month
    event_str += ' ' + date.getDate();
    //get time
    event_str += ' ' + events[i].time;
    //add space if theres another event
    if(i < events.length - 1){
      event_str += '&nbsp; | &nbsp;';
    }
  }

  $('#title').append(event_str); //add events to ticker
}

start_day();
