function updatePerson(){
  var urlParams = new URLSearchParams(window.location.search);

  fetch('/people/'+urlParams.get("ID")).then(function(response){
    return response.json()
  }).then(function(data){
    data.education.map(addEdu);
    data.work.map(addWork);
    addName(data);
    addImg(data);

    if(data.serviceName.length > 0){
      $("#servicePerson").append(
        '<img src="../assets/img/service-'+data.IDService[0]+'circle.jpg" class="img-rounded logo" id="operatInPeople" alt="Services">'
      );
    }
      var links = new Array;
      for(i = 0; i < data.serviceName.length; i++){
          addService(data.IDService[i], data.serviceName[i]);
          links.push('../assets/img/service-'+data.IDService[i]+'circle.jpg');
      }
      var id = "operatInPeople";
      alternate(id, links, 4000);
  });

}


function addImg(person){
  console.log("aggiunta img ");
    $("#imgPerson").append(
      '<img  class="img-responsive" src="../assets/img/people-'+person.id+'stand.jpg">'
    );

}


function addEdu(education){
  console.log("aggiunta edu "+education);
    $("#education").append(
      '<li>'+education+'</li>'
    );

}

function addWork(work){
    $("#work").append(
      '<li><dt><b>'+work.type+'</b></dt><dd>'+work.description+'</dd></li>'
    );


}

function addService(id, name){
  $("#servicePerson").append(
    '<h4><a href="serv.html?ID='+id+'">'+name+'</a></h4>'
  );
}

function addName(person){
  $("#namePerson").append(
  '<h1>'+person.firstName+' '+person.lastName+'</h1><hr>'
  );


}

$(document).ready(function(){
    updatePerson();
})
