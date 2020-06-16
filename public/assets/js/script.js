//script immagini dinamiche
function alternate(id, imgs, speed) {
    var i = 1;
    var x = document.getElementById(id);
    if(x!==null){
        setInterval(function () {
            if(i > (imgs.length - 1)) {
                i = 0;
            }
        x.src = imgs[i++]; }, speed);
    }
} //fine alternate


function updateNavbar(){
    fetch('/navbar').then(function(response){
        return response.json()
    }).then(function(data){
        data.map(addServiceList);
    });
}

function addServiceList(service){
    $("#navbarIndex").append(
        '<li><a href="pages/serv.html?ID='+service.id+'">'+service.serviceName+'</a></li>'
    );
    $("#navbarPages").append(
        '<li><a href="serv.html?ID='+service.id+'">'+service.serviceName+'</a></li>'
    );
}

function updateFooter(){
    fetch('/footer').then(function(response){
        return response.json()
    }).then(function(data){
        addFooter(data);
    });
}

function addFooter(footer){
    if(document.location.href.includes('pages')){
        id = "#footerPages";
        var path = "";
    }
    else{
        var id = "#footerIndex";
        var path = "pages/";
    }
    for(i = 0; i < footer.name.length; i++)
        $(id).append(
        '<div class="foo col-sm-3"><a class="footerTxt" href="'+footer.links[i]+'">'+footer.name[i]+'</a></div>'
    );
    $(id).append(
        '<div class="foo col-sm-3"><p class="footerTxt">Address: <a class="footerTxt" href="'+path+'locat.html?ID=2">'+footer.mainLocation.address+'</a></p><a href="tel:'+footer.mainLocation.telephone+'" class="footerTxt">Telephone:   '+footer.mainLocation.telephone+'</p><a href="mailto:'+footer.mainLocation.mail+'" class="footerTxt">Email:     '+footer.mainLocation.mail+'</a></div>'
    );
}

$(document).ready(function(){
    updateNavbar();
    updateFooter();
})
