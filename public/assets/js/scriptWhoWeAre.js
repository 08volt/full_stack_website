function updateWhoWeAre(){
    fetch('/whoWeAre').then(function(response){
        return response.json();
    }).then(function(data){
        addDescription(data.intro);
        addImg(data.links);
    });
}

function addDescription(intro){
    $("#whoweare").append(
        intro
    );
}

function addImg(links){
    $("#imgwho").append(
        '<img src="'+links[0]+'" class="img-responsive" id="weAreImg" alt="whoWeAre">'
    );
    alternate("weAreImg",links,4000)
}

$(document).ready(function(){
    updateWhoWeAre();
})