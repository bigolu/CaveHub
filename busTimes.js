//for get request to rutgers bus api
var xhr = new XMLHttpRequest();
xhr.open("GET", "http://runextbus.heroku.com/stop/Hill%20Center", true);
xhr.onreadystatechange = function() {
  if (xhr.readyState == 4) {
    printBuses(xhr.responseText);
  }
}
$("#busTimes").empty();
$("#busTimes").append("Loading...");
xhr.send();
window.setInterval(function test(){ xhr.open("GET", "http://runextbus.heroku.com/stop/Hill%20Center", true);
  $("#busTimes").empty(); 
  $("#busTimes").append("Loading...");
  xhr.send(); 
}, 60000);      

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












/*function printBuses(busJSON){
	var buses = jQuery.parseJSON(busJSON);
	$("#busTimes").empty();
	for(i = 0; i < buses.length; i++){
    var times = "";
    console.log(buses[0].title);
		if(buses[i].predictions != null){
			if(buses[i].predictions.length > 1){
				if(buses[i].direction == 'To Allison Road Classrooms' && buses[i].title == 'REX B'){
					$("#busTimes").append("<li>Time for next " + JSON.stringify(buses[i].title) + " (Inbound)" + " bus: " + JSON.stringify(buses[i].predictions[0].minutes)  + " minutes</li>" + "<br>");
	            }
	      else if(buses[i].direction == 'To College Hall'){
					$("#busTimes").append("<li>Time for next " + JSON.stringify(buses[i].title) + " (Outbound)" + " bus: " + JSON.stringify(buses[i].predictions[0].minutes)  + " minutes</li>" + "<br>");
	            }
        else{
        	$("#busTimes").append("<li>Time for next " + JSON.stringify(buses[i].title) + " bus: " + JSON.stringify(buses[i].predictions[0].minutes)  + " minutes</li>" + "<br>");
        }
			}
			else{
				if(buses[i].direction == 'To Allison Road Classrooms' && buses[i].title == 'REX B'){
              times = "<li class="times"><b>" + buses[i].title + " (Inbound):</b>" + 

					
	            }
	            else if(buses[i].direction == 'To College Hall'){
					$("#busTimes").append("<li>Time for next " + JSON.stringify(buses[i].title) + " (Outbound)" + " bus: " + JSON.stringify(buses[i].predictions[0].minutes)  + " minutes</li>" + "<br>");
	            }
	            else{
	            	$("#busTimes").append("<li>Time for next " + JSON.stringify(buses[i].title) + " bus: " + JSON.stringify(buses[i].predictions[0].minutes)  + " minutes</li>" + "<br>");
	            }
			}
		}
    else{
      if(buses[i].direction == 'To College Hall'){
        times = "<li class="times"><b>" + buses[i].title + " (Outbound):</b>" + " There are none running right now.</li>";
        $("#busTimes").append(times);
      }  
      else if(buses[i].direction == 'To Allison Road Classrooms' && buses[i].title == 'REX B'){
        times = "<li class="times"><b>" + buses[i].title + " (Inbound):</b>" + " There are none running right now.</li>";
        $("#busTimes").append(times);
      }
      else{
        times = "<li class="times"><b>" + buses[i].title + ":</b>" + " There are none running right now.</li>";
        $("#busTimes").append(times);
      }
    }
	}
}*/

function printBuses(busJSON){
  var buses = jQuery.parseJSON(busJSON);
  $("#busTimes").empty();
  for(i = 0; i < buses.length; i++){
    var times = "";
    if(buses[i].direction == 'To Allison Road Classrooms' && buses[i].title == 'REX B'){
      times = '<li class="times"><b>' + buses[i].title + " (Outbound):</b>";
    }
    else if(buses[i].direction == 'To College Hall'){
      times = '<li class="times"><b>' + buses[i].title + " (Outbound):</b>";
    }
    else{
      times = '<li class="times"><b>' + buses[i].title + ":</b>";
    }
    
    if(buses[i].predictions == null){
      times = times + " There are none running right now.</li>";
      $("#busTimes").append(times);
    }
    else if(buses[i].predictions.length == 1){
      if(buses[i].predictions[0].minutes == 0){
        times = times + " <1 minute (Last Bus)</li>";
        $("#busTimes").append(times);
      }
      else{
        times = times + " " + buses[i].predictions[0].minutes + " minutes (Last Bus)";
        $("#busTimes").append(times);
      }
    }
    else{
      for(j = 0; j < buses[i].predictions.length; j++){
        if(j != buses[i].predictions.length - 1){
          if(buses[i].predictions[j].minutes == 0){
            times = times + " <1 minute,";
          }
          else{
            times = times + " " + buses[i].predictions[j].minutes + " minutes,";
          }
        }
        else{
          if(buses[i].predictions[j].minutes == 0){
            times = times + " <1 minute";
          }
          else{
            times = times + " " + buses[i].predictions[j].minutes + " minutes";
          }
        }
      }
      $("#busTimes").append(times);
    }
  }

}

