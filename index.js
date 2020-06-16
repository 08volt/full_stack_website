const express = require('express')
const app = express()
const _ = require("lodash")

var knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: "./other/CareForChildren.db"
  },
  useNullAsDefault: true
});

app.listen(process.env.PORT || 3000, () => console.log('listening on port 3000'))

app.use(express.static(__dirname+"/public"));

//REST interface
app.get('/people/:id', function (req, res) {

    let personD = require("./other/people.json");
    personD.forEach(function(element) {
      if(element.id.toString() === req.params.id){
          knex.select().from('OperatingPeopleService').innerJoin('People','IDPerson','People.id').innerJoin('Service','IDService','Service.id').where("People.id",parseInt(req.params.id)).then(function(response) {
              var x = Object.assign(response[0],element);
              let temp = x.IDService;
              x.IDService = new Array;
              x.IDService.push(temp);
              x.serviceName = x.serviceName.split();
              for(i = 1; i < response.length; i++){
                  x.serviceName[i] = response[i].serviceName;
                  x.IDService[i] = response[i].IDService;
                  }
              res.send(x);
          });
        }
    });

});

app.get('/allPeople', function (req, res) {

    knex.select().table("People").then(function(data){
      res.send(JSON.stringify(data))
    });
});

app.get('/location/:id',function(req, res){
    var location = require("./other/location.json");
    location.forEach(function(element){
        if(element.id.toString() === req.params.id){
          knex.select().from('OperatingServiceLocation').innerJoin('Location','IDLocation','Location.id').innerJoin('Service','IDService','Service.id').where("Location.id",parseInt(req.params.id)).then(function (response){
            var x = Object.assign(response[0],element);
            var temp = x.IDService;
            x.IDService = new Array;
            x.IDService.push(temp);
            x.serviceName = x.serviceName.split();
            for(i = 1; i < response.length; i++){
                  x.serviceName[i] = response[i].serviceName;
                  x.IDService[i] = response[i].IDService;
              }
            res.send(x);
            });
        }
    });
});

app.get('/allLocation',function (req, res) {
    knex.select().table("Location").then(function(data){
        res.send(JSON.stringify(data))
    });
});

app.get('/service/:id',function(req, res){
    let service = require("./other/services.json");
    service.forEach(function(element){
        if(element.id.toString() === req.params.id){
            knex.select().distinct('Service.id','People.firstName','People.lastName','Service.serviceName','Location.locationName','People.id as peopleId','Location.id as locationId').from('OperatingPeopleService').innerJoin('OperatingServiceLocation','OperatingPeopleService.IDService','OperatingServiceLocation.IDService').innerJoin('People','OperatingPeopleService.IDPerson','People.id').innerJoin('Location','OperatingServiceLocation.IDLocation','Location.id').innerJoin('Service','OperatingServiceLocation.IDService','Service.id').where("Service.id",parseInt(req.params.id)).then(function(response){
                var y = JSON.parse(JSON.stringify(response));
                var x = Object.assign(response[0],element);
                x.locationName = new Array;
                y.forEach(function(element){
                    if(!x.locationName.includes(element.locationName))
                        x.locationName.push(element.locationName);
                });
                x.firstName = new Array;
                x.lastName = new Array;
                y.forEach(function(element){
                    if(!x.firstName.includes(element.firstName) && !x.lastName.includes(element.lastName)){
                        x.firstName.push(element.firstName);
                        x.lastName.push(element.lastName);
                    }
                });
                x.peopleId = new Array;
                y.forEach(function(element){
                    if(!x.peopleId.includes(element.peopleId)){
                        x.peopleId.push(element.peopleId);
                    }
                });
                x.locationId = new Array;
                y.forEach(function(element){
                    if(!x.locationId.includes(element.locationId)){
                        x.locationId.push(element.locationId);
                    }
                });
                res.send(x);
            });
        }
    });
});

app.get('/allServices',function(req, res) {
   let services = require("./other/services.json");
    knex.select('serviceName', 'Service.id', 'locationName').table('OperatingServiceLocation').innerJoin('Location','OperatingServiceLocation.IDLocation','=','Location.id').innerJoin('Service','OperatingServiceLocation.IDService','Service.id').then(function(response){
        var x = new Array;
        var y = JSON.parse(JSON.stringify(response));
        for(i = 0; i < services.length; i++){
            x[i] = Object.assign(response[i], services[i]);
            x[i].locationName = new Array;
        }
        for(i = 0; i < y.length; i++){
            x[y[i].id - 1].serviceName = y[i].serviceName;
            x[y[i].id - 1].locationName.push(y[i].locationName);
        }
        res.send(x);
        });
});

app.get('/maps', function (req, res) {
    var map = require("./other/maps.json");
    res.send(map);
});

app.get('/map/:id', function (req, res) {
    let map = require("./other/maps.json");
    map.forEach(function(element){
      if(element.id.toString() === req.params.id)
      {
        res.send(element);
      }
    });

});

app.get('/navbar', function (req, res) {
    knex.select().table("Service").then(function(data){
        res.send(JSON.stringify(data));
    });
});

app.get('/contact', function(req, res){
    knex.select().table("Location").then(function(data){
        res.send(JSON.stringify(data));
    });
});

app.get('/whoWeAre', function(req, res){
    var info = require("./other/general.json");
    info = info.whoWeAre;
    res.send(info);
});

app.get('/home', function(req, res){
    var info = require("./other/general.json");
    info = info.home;
    res.send(info);
});

app.get('/footer', function(req,res){
    var info = require("./other/general.json");
    info = info.footer;
    res.send(info);
})
