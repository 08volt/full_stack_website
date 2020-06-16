function updateService(){
  var urlParams = new URLSearchParams(window.location.search);
    
  fetch('/service/'+urlParams.get("ID")).then(function(response){
    return response.json()
  }).then(function(data){
      addDescription(data.description);
      addName(data.serviceName);
      addImg(data.id);
      if(data.peopleId.length > 0){
            $("#personService").append(
        '<img src="../assets/img/people-'+data.peopleId[0]+'.jpg" class="img-rounded logo" id="whoInServ" alt="Services">'
            );
      }
        var links = new Array;
        for(i = 0; i < data.peopleId.length; i++){
            links.push('../assets/img/people-'+data.peopleId[i]+'.jpg');
            addPerson(data.peopleId[i],data.firstName[i],data.lastName[i]);
        }
        var id = "whoInServ";
        alternate(id,links,4000);
      
      
      if(data.locationId.length > 0){
            $("#locationService").append(
        '<img src="../assets/img/location-'+data.locationId[0]+'circle.jpg" class="img-rounded logo" id="whereInServ" alt="Services">'
            );
      }
        var links1 = new Array;
        for(i = 0; i < data.locationId.length; i++){
            links1.push('../assets/img/location-'+data.locationId[i]+'circle.jpg');
            addLocation(data.locationId[i],data.locationName[i]);
        }
        var id = "whereInServ";
        alternate(id,links1,4000);
  });
}

function addDescription(text){
    
    $("#description").append(
      '<p>'+text+'</p>'
    );
}

function addName(service){
    $("#nameService").append(
        '<h1>'+service+'</h1><hr>'
    );
}

function addPerson(id,first,last){
    $("#personService").append(
        '<h4><a href="people.html?ID='+id+'">'+first+' '+last+'</a></h4>'
    );
}

function addImg(service){
    $("#imgService").append(
        '<img class="img-responsive" src="../assets/img/service-'+service+'.jpg">'
    );
}

function addLocation(id,name){
    $("#locationService").append(
        '<h4><a href="locat.html?ID='+id+'">'+name+'</a></h4>'
    );
}

$(document).ready(function(){
    updateService();
})
