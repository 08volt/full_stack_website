# Technical Documentation of Prototype

## General information about the team and the web application

* Heroku URL:  [https://polimi-hyp-2018-team-10532347.herokuapp.com/](https://polimi-hyp-2018-team-10532347.herokuapp.com/)
* Bitbucket repo URL: [https://bitbucket.org/polimihyp2018team10532347/polimi-hyp-2018-project/src/master/](https://bitbucket.org/polimihyp2018team10532347/polimi-hyp-2018-project/src/master/)
* Team administrator: Giacomo, Ziffer, 10532347, polimi-hyp-2018-10532347 (Bitbucket username)
* Team member n.2 : Antonio, Urbano, 10527285, polimi-hyp-2018-10527285 (Bitbucket username)
* Team member n.3 : Enrico, Voltan, 10525467, polimi-hyp-2018-10525467 (Bitbucket username)

### General description

The project consists of a web site of an association devoted to support children and young adults with disability, and their families.
The website consisting of several pages containing some information about the association, the services it offers to the children and their family, the staff and the locations where those services take place.

Each page contains a short description joined to a relative picture. 
It was decided to adopt a navbar fixed on top of the page and a footer at the bottom of the page to ensure a fluid and simplified navigation through the whole website.
In particular:

* Who we are page contains general information about the association;
* The single location page contains information like address, time table, contacts (phone contact and email), a reference to Google Maps and a link to services offered in the location;
* The single person page contains general info about the staff and a link to services offered by the person;
* The single service page contains a description about the chosen service, a link to the locations where the service is offered and a link to the people who perform it.

## Design and Front-End part

### Division of work

The work was structured as follows:

* At first, we decided how to structure the site and we planned its design
* After that, we decided the division of the design’s work. In particular:

    * All the components of the group made the test-usability file and discuss about the realization of the IDMs 
    * **Giacomo Ziffer** (matr: **843603**): made the _C-IDM_, _L-IDM_ and _P-IDM_
    * **Antonio Urbano** (matr: **847465**): made the _low-fidelity and high-fidelity wireframes_
    * **Enrico Voltan** (matr **846786**): made the _ER schema_
    
* After the design project we focused on writing the code. In particular:

    * We worked in teamwork for the homepage’s code and for the main contents of all the pages and on _css style_ according to the various problems encountered going forward with work

    * **Giacomo Ziffer** (matr: **843603**): worked on _About us pages_ (_Who we are_, _Our centers_ and _Our team_) and on finding the images for the site
    * **Antonio Urbano** (matr: **847465**): made the _services’ pages_ and _javascript functions_
    * **Enrico Voltan** (matr: **846786**): made _Contact us page_ and he defined the _css style_
    
**_Despite the division of the work, each component contributes to the implementation of the whole site, helping the partner in case he had problems with his own assigned work_**

### Languages used

* HTML
* CSS
* Javascript

### Tools used

* _Brackets_ as IDE for Html, css an javascript/jquery code
* _Draw.io_ e _Balsamiq_ for the design-in-the-small part and for ER schema
* _Google chrome extension_ for page’s screenshot

### Template used

* Part of our front-end components taking a look at some examples we found on [https://www.w3schools.com/bootstrap/](https://www.w3schools.com/bootstrap/)

###External vendors' scripts/plugins
* _Bootstrap:_ [getbootstrap.com](https://getbootstrap.com);
* _jQuery:_ [jquery.org](https://jquery.org);
* _GoogleMaps script_: [developers.google.com/](https://developers.google.com/maps/documentation/javascript/examples/)

### Main problems

1. **Responsivity**: principally problems with navbar and css style at low resolution
2. Some **javascript functions**

## Back-End part

### Description of the REST API

#### 1

* **URL:** /people/:id  
* **Method:** GET
* **URL Params Required:** id =(Integer) identifier of the person in the database

#### 2

* **URL:** /allPeople  
* **Method:** GET
* **URL Params:** None. It retrieves list of people.

#### 3

* **URL:** /location/:id 
* **Method:** GET
* **URL Params Required:** id =(Integer) identifier of the location in the database

#### 4

* **URL:** /allLocation  
* **Method:** GET
* **URL Params Required:** None. It retrieves a list of locations

#### 5

* **URL:** /service/:id
* **Method:** GET
* **URL Params Required:** id =(Integer) identifier of the service in the database

#### 6

* **URL:** /allServices
* **Method:** GET
* **URL Params Required:** None. It retrieves a list of services.

#### 7

* **URL:**
    * /maps
    * /navbar
    * /contact
    * /whoWeAre
    * /home
    * /footer
* **Method:** GET
* **URL Params:** None. They are used to request the contents that will comprise the structure of the site.
