function updateContact(){
    fetch('/contact').then(function(response){
    return response.json()
  }).then(function(data){
        data.map(addAddress);
        data.map(addPhone);
        data.map(addEmail);
  });
}

function addAddress(loc){
    $('#address').append(
        '<h5><a href="locat.html?ID='+loc.id+'">CareForChildren '+loc.locationName+'</a></h5>'
    );
}

function addPhone(loc){
    $('#phone').append(
        '<h5><a href="tel:'+loc.telephone+'">'+loc.locationName+':'+ loc.telephone+'</a></h5>'
    );
}

function addEmail(loc){
    $('#email').append(
        '<h5><a href="mailto:'+loc.mail+'">'+loc.mail+'</a></h5>'
    );
}

$(document).ready(function(){
    updateContact();
})