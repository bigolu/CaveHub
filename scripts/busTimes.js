/* populates page with bus scheudule */
function printBuses(busXML){
  // this awful thing converts the XML string to a JSON object
  var buses = jQuery.parseJSON(jQuery.parseJSON(JSON.stringify(xml2json(jQuery.parseXML(busXML))).replace(/\@/g, "").replace(/undefined/g, ""))).body.predictions;

  $("#busTimes").empty(); //remove 'loading' text
  var bus_running = false; //set to true if at least one bus is running

  for(i = 0; i < buses.length; i++){
    var times = "";

    //this bus isn't running right now
    if(buses[i].hasOwnProperty("dirTitleBecauseNoPredictions")){
      continue;
    }

    /* distinguish between inbound and outbound REXB buses */
    if(buses[i].direction.title == 'To Allison Road Classrooms' && buses[i].routeTitle == 'REX B'){
      times = '<li class="times"><b>' + buses[i].routeTitle + " (Inbound):</b>";
    }
    else if(buses[i].direction.title == 'To College Hall'){
      times = '<li class="times"><b>' + buses[i].routeTitle + " (Outbound):</b>";
    }
    else{
      times = '<li class="times"><b>' + buses[i].routeTitle + ":</b>";
    }

    //last bus
    if(buses[i].direction.prediction.length == 1){
      //show 'less <1 minute' if appropriate
      times += (Number(buses[i].direction.prediction[0].seconds) < 60) ? " <1 minute (Last Bus)</li>" : (" " + buses[i].direction.prediction[0].minutes + " minutes (Last Bus)</li>");
    }

    else{
      for(j = 0; j < buses[i].direction.prediction.length; j++){
        //show 'less <1 minute' if appropriate
        times += (Number(buses[i].direction.prediction[j].seconds) < 60) ? " <1 minute</li>" : (" " + buses[i].direction.prediction[j].minutes + " minutes</li>");

        //if there is another bus after this, a comma will be after this one
        if(j != buses[i].direction.prediction.length - 1){
          times += ',';
        }
      }
    }

    if(times != ""){
      $("#busTimes").append(times); //add bus to page
      bus_running = true;
    }
  }

  if(!bus_running){
    $("#busTimes").append("There are no buses coming to the Hill Center right now."); 
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
    xhr.open("GET", "http://webservices.nextbus.com/service/publicXMLFeed?a=rutgers&command=predictionsForMultiStops&stops=h|null|hilln&stops=rexb|rexb_outbound|hillw&stops=rexb|rexb_inbound|hilln&stops=a|null|hillw&stops=wknd1|null|hillw&stops=wknd2|null|hilln&stops=b|null|hillw&stops=c|c_inbound|hilln&stops=c|c_outbound|hillw&stops=s|null|hillw", true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
        printBuses(xhr.responseText); //populate page
      }
    }
    xhr.send();

    /* update bus schudule every minute */
    window.setInterval(function test(){ xhr.open("GET", "http://webservices.nextbus.com/service/publicXMLFeed?a=rutgers&command=predictionsForMultiStops&stops=h|null|hilln&stops=rexb|rexb_outbound|hillw&stops=rexb|rexb_inbound|hilln&stops=a|null|hillw&stopsps=wknd1|null|hillw&stops=wknd2|null|hilln&stops=b|null|hillw&stops=c|c_inbound|hilln&stops=c|c_outbound|hillw&stops=s|null|hillw", true);
      $("#busTimes").append("Loading...");
      xhr.send(); // once a repsonse is recieved, xhr will call the xhr.onreadystatechange function defined above
    }, 60000);

  }
);
