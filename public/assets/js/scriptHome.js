function updateHome(){
    fetch('/home').then(function(response){
        return response.json();
    }).then(function(data){
        addDescription(data.intro);
        data.carousel.map(addCarousel);
        addPeopleImg(data.linksPeople);
        addServImg(data.linksService);
        addLocatImg(data.linksLocation);
    });
}

function addDescription(intro){
    $("#homeDescr").prepend(
        intro
    );
}

function addCarousel(links){
    if($("#imgCarousel").children().length > 0)
        $("#imgCarousel").append(
        '<div class="item"><img src="'+links+'" alt="Carousel"></div>'
    );
    else
        $("#imgCarousel").append(
        '<div class="item active"><img src="'+links+'" alt="Carousel"></div>'
        )
}

function addPeopleImg(links){
    $("#introPeopleImg").prepend(
        '<a href="pages/allPeople.html"><img src="'+links[0]+'" class="img-rounded logo" id="peopleImg" alt="Staff"></a>'
    );
    alternate("peopleImg",links,4000)
}

function addServImg(links){
    $("#introServImg").prepend(
        '<a href="pages/allServices.html"><img src="'+links[0]+'" class="img-rounded logo" id="servImg" alt="Service"></a>'
    );
    alternate("servImg",links,4000)
}

function addLocatImg(links){
    $("#introLocatImg").prepend(
        '<a href="pages/allLocations.html"><img src="'+links[0]+'" class="img-rounded logo" id="locatImg" alt="Location"></a>'
    );
    alternate("locatImg",links,4000)
}


$(document).ready(function(){
    updateHome();
})