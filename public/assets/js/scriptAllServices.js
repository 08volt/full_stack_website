
//this function shows dropbtn content in all Services
function allServByLoc() {
    document.getElementById("allServByLoc").classList.toggle("show");
}

//create dinamic page (All Services by Location X)
function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("filterDiv");
    if (c == "All") c = "";

    //myAddClass add class "hidden" into div and myRemoveClass remove class "hidden" into div
    //if class "hidden" is in div, this div is hidden

    for (i = 0; i < x.length; i++) {
        myAddClass(x[i], "hidden");
        if (x[i].className.indexOf(c) >-1) myRemoveClass(x[i], "hidden");
    }
    // Hide elements that are not selected
    function myAddClass(element, name) {
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
            if (arr1.indexOf(arr2[i]) == -1) {
                element.className += " " + arr2[i];
            }
        }
    }  //myAddClass()


    // Show elements
    function myRemoveClass(element, name) {
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
            while (arr1.indexOf(arr2[i]) > -1) {
                arr1.splice(arr1.indexOf(arr2[i]), 1);
            }
        }
        element.className = arr1.join(" ");
    }
    document.getElementById("allServByLoc").classList.toggle("show");
    
    //change filter button text
    if (c == ""){
        document.getElementById("groupBtn").innerHTML = "All services <span class=\"caret\"></span>";
    }
    else{
        document.getElementById("groupBtn").innerHTML = c + "<span class=\"caret\"></span>";
    }

}  //filterSelection
   

function updateServiceList(){
    fetch('/allServices').then(function(response){
        return response.json();
    }).then(function(data){
        data.map(addService);
        
        var locations = new Array;
        
        data.forEach(function(element){
            for(i = 0; i < element.locationName.length; i++)
                if(!locations.includes(element.locationName[i]))
                    locations.push(element.locationName[i]);   
        });
        locations.map(addFilterBtn);
    });
}

function addService(service){
    $("#rowAllServices").append(
        '<div class="col-sm-6 filterDiv '+service.locationName.join(' ')+' topic"><a href="./serv.html?ID='+service.id+'">'+'<img class="rounded-circle logo" src="../assets/img/service-'+service.id+'circle.jpg"><h2>'+service.serviceName+'</h2></a><p>'+service.small+'</p><p><a href="serv1.html"><b>Read more</b></a></p></div>'
    );
}


function addFilterBtn(locationName){
    $('#allServByLoc').append(
        '<li><button class="allServByLocBtn"  id="'+locationName+'">'+locationName+'</button></li>');
    $('.allServByLocBtn').click(function() {
        var id = $(this).attr("id");
        filterSelection(id);
    });
}




$(document).ready(function(){
    updateServiceList();  
})

