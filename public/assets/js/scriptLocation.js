var locat;

function updateLocation(){
    var urlParams = new URLSearchParams(window.location.search);

    fetch('/location/'+urlParams.get("ID")).then(function(response){
    return response.json()
  }).then(function(data){
        locat = JSON.parse(JSON.stringify(data));
        addName(data.locationName);
        addImg(data.IDLocation);
        addAddress(data.address,data.country);
        addEmail(data.mail);
        addPhone(data.telephone);
        addTimeT(data.timeT);
        if(data.serviceName.length > 0){
            $("#servInLoc").append(
        '<img src="../assets/img/service-'+data.IDService[0]+'circle.jpg" class="img-rounded logo" id="whatInLoc" alt="Services">'
      );
    }
        var links = new Array;
        for(i = 0; i < data.serviceName.length; i++){
            links.push('../assets/img/service-'+data.IDService[i]+'circle.jpg');
            addService(data.IDService[i],data.serviceName[i]);
        }
        var id = "whatInLoc";
        alternate(id, links,4000);
  });
}

function addName(name){
  $("#nameLocation").append(
      '<h1>CareForChildren '+name+'</h1><hr>'
  );
}

function addImg(idLocation){
    $("#imgLocation").append(
      '<img class="responsive" src="../assets/img/location-'+idLocation+'.jpg">'
    );

}

function addAddress(address,country){
    $("#address").append(address);
    $("#country").append(country);
}

function addEmail(mail){
    $("#email").append(
        '<a href="mailto:'+mail+'">'+mail+'</a>'
    );
}

function addPhone(phone){
    $("#phone").append(
        '<a href="tel:+'+phone+'">'+phone+'</a>'
    );
}

function addTimeT(timeT){
    $("#timeT").append(
        '<li>Monday-Friday '+timeT[0]+'</li><li>Saturday '+timeT[1]+'</li><li>Sunday '+timeT[2]+'</li>'
    );
}

function addService(idServ,servName){
    $("#servInLoc").append(
        '<h4><a href="serv.html?ID='+idServ+'">'+servName+'</a></h4>'
    );
}

function initMap() {
  var urlParams = new URLSearchParams(window.location.search);
  fetch('/map/'+urlParams.get("ID")).then(function(response){
    return response.json()
  }).then(function(data){
    var loc1 = {lat: data.lat, lng: data.lng};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: data.zoom,
    center: loc1
    });
    var marker1 = new google.maps.Marker({
    position: loc1,
    map: map
    });

    var StringLoc1 = '<a href="#"><h4>CareForChildren'+locat.locationName+'</h4><p>'+locat.address+'</p>';
    var infoWindow1 = new google.maps.InfoWindow({
      content: StringLoc1
    });
    google.maps.event.addListener(marker1, 'click', function(){
        infoWindow1.open(map,marker1);
    });
  });
}

$(document).ready(function(){
    updateLocation();
})
