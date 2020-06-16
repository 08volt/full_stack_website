var locat;
function updateLocationList(){
  fetch('/allLocation').then(function(response){
    return response.json()
  }).then(function(data){
      locat = data;
      data.map(addLoc);
  });
}

function addLoc(location){
  $("#rowAllLocations").append(
    '<a href="locat.html?ID='+location.id+'"><h3 class="allLocContents">CareForChildren '+location.locationName+'</h3></a>'+
    '<p class="allLocContents">'+location.address+'</p><a href="./locat.html?ID='+location.id+'">More information</a><hr>'
      );
}

function initMap() {
  fetch('/maps').then(function(response){
    return response.json()
  }).then(function(data){
    var loc = [];
      for(i = 0; i < data.length; i++)
          loc.push({lat: data[i].lat, lng: data[i].lng});

    var map = new google.maps.Map(document.getElementById('map'), {

    zoom: 8,
    center: loc[1]
    });

    var marker = [];

    for (i = 0; i < data.length; i++) {
      marker.push(new google.maps.Marker({
      position: loc[i],
      map: map
      }));
    }

  var strings = [];
  for (i = 0; i < loc.length; i++) {
    strings.push('<a href="./locat.html?ID='+locat[i].id+'"><h4>CareForChilndren '+locat[i].locationName+'</h4></a><p>'+locat[i].address+'</p>');
  }



var info = [];
for (i = 0; i < data.length; i++) {
  info.push(new google.maps.InfoWindow({
      content: strings[i]
  }));
}


for (i = 0; i < data.length; i++) {
    let mark = marker[i];
    let window = info[i];
  google.maps.event.addListener(mark, 'click', function(){
      window.open(map,mark);
  });
}

});  
}

$(document).ready(function(){
    updateLocationList();
})
