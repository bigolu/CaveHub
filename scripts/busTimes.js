/* populates page with bus scheudule */
function printBuses(busJSON){
  var buses = jQuery.parseJSON(busJSON);
  $("#busTimes").empty(); //remove 'loading' text

  for(i = 0; i < buses.length; i++){
    var times = "";

    //this bus isn't running right now
    if(buses[i].predictions == null){
      continue;
    }

    /* distinguish between inbound and outbound REXB buses */
    if(buses[i].direction == 'To Allison Road Classrooms' && buses[i].title == 'REX B'){
      times = '<li class="times"><b>' + buses[i].title + " (Inbound):</b>";
    }
    else if(buses[i].direction == 'To College Hall'){
      times = '<li class="times"><b>' + buses[i].title + " (Outbound):</b>";
    }
    else{
      times = '<li class="times"><b>' + buses[i].title + ":</b>";
    }

    //last bus
    if(buses[i].predictions.length == 1){
      //show 'less <1 minute' if appropriate
      times += (Number(buses[i].predictions[0].seconds) < 60) ? " <1 minute (Last Bus)</li>" : (" " + buses[i].predictions[0].minutes + " minutes (Last Bus)</li>");
    }

    else{
      for(j = 0; j < buses[i].predictions.length; j++){
        //show 'less <1 minute' if appropriate
        times += (Number(buses[i].predictions[j].seconds) < 60) ? " <1 minute</li>" : (" " + buses[i].predictions[j].minutes + " minutes</li>");

        //if there is another bus after this, a comma will be after this one
        if(j != buses[i].predictions.length - 1){
          times += ',';
        }
      }
    }

    //try to use h_EE()
    if(buses[i].title == 'H'){
      var estimate = h_EE(buses, i);
      times += (estimate != null) ? estimate : '';
    }

    $("#busTimes").append(times); //add bus to page
  }
}

/* Estimates a wait time at the Rutgers Student Center (RSC) for the EE bus to get to cook
* if you take current H bus coming to Hill Center
*/
function h_EE(buses, h){
  var time_to_RSC = 10; //not sure how to acurrately calculate this, but I figure it takes 10 minutes to get to the RSC from Hill
  var time_for_H = Number(buses[h].predictions[0].minutes); //time until next h bus arrives at hill

  for(var i = 0; i < buses.length; i++){
    if(buses[i].title == 'EE'){
      if(buses[i].predictions == null){ //no EE coming so estimations cant be made
        return null;
      }

      for(var j = 0; j < buses[i].predictions.length; j++){
        //This number represents how long you would wait for an EE at the RSC if you took the H bus currently coming to Hill
        var wait_time = Number(buses[i].predictions[j].minutes) - (time_for_H + time_to_RSC);

        if(wait_time > 3){ //doable
          return '<li class="times"><b>Wait Time for EE at RSC: ' + wait_time + " minutes</li>";
        }
      }

      return null;
    }
  }
}

//start everything up
$(document).ready(
  function() {
    /* add scrollbar to div */
    $('#thisPageInfo').slimScroll({
    color: '#000000',
    size: '10px',
    height: '91%',
    alwaysVisible: true
    });

    /* get bus data */
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://runextbus.heroku.com/stop/Hill%20Center", true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
        printBuses(xhr.responseText); //populate page
      }
    }
    xhr.send();

    /* update bus schudule every minute */
    window.setInterval(function test(){ xhr.open("GET", "http://runextbus.heroku.com/stop/Hill%20Center", true);
      $("#busTimes").append("Loading...");
      xhr.send(); // once a repsonse is recieved, xhr will call the xhr.onreadystatechange function defined above
    }, 60000);

  }
);
