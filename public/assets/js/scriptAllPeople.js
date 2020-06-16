function updatePersonList(){
  fetch('/allPeople').then(function(response){
    return response.json()
  }).then(function(data){
    data.map(addPerson);
  });
}

function addPerson(person){
  $("#rowAllPerson").append(
    '<div class="col-sm-6 topic"><a href="./people.html?ID='+person.id+'">'+
    '<img class="rounded-circle logo" src="../assets/img/people-'+person.id+'.jpg">'+
    '<h2>'+person.firstName+' '+person.lastName+'</h2></a></div>'
      );
}

$(document).ready(function(){
    updatePersonList();
})
