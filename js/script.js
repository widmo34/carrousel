'use strict';


// mustache starts here 
var templateItem = document.getElementById('template-product-item').innerHTML;
var output = document.querySelector('.main-carousel');

var listItems = '';

for(var i = 0; i < cities.length; i++){
  console.log(cities);
  listItems += Mustache.render(templateItem, cities[i]);
}

output.insertAdjacentHTML('beforeend', listItems);




// I initialize a new carrousel flickity 
var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true
});



var f = new Flickity('.main-carousel');
var button = document.querySelector('.btn');



button.addEventListener('click', function(){
      f.select(0);
 })




var progressBar = document.querySelector('.progress-bar')

f.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});




/* FUNCTION GOOGLE MAPS IS BELOW */
  


window.initMap = function() {

  // MARKING NO A MAP 
var infos = document.getElementById('infos');
  // The location of Uluru and two other places
  var uluru = {lat: -25.344, lng: 131.036};
  var coords2 = {lat: -25.363, lng: 134.044};
  var coords3 = {lat: -25.363, lng: 137.044};
  var sydney = {lat: -33.874237, lng: 151.198517};
  // The map, centered at Uluru
  var map = new google.maps.Map(
  document.getElementById('map'), {zoom: 4, center: uluru});
  // The marker, positioned at Uluru
   var markerOne = new google.maps.Marker({
    position: uluru,
    map: map
  });
 // The marker, poistioned near uluru 
  var markerTwo = new google.maps.Marker({
    position: coords2,
    map: map
  });
 // The marker, poistioned near uluru 
  var markerThree = new google.maps.Marker({
    position: coords3,
    map: map
  });

   // The marker, poistioned at Sydney 
   var markerThree = new google.maps.Marker({
    position: sydney,
    map: map
  });





  // I add eventListener when someone clicks a marker 
  markerOne.addListener('click', function(){
    infos.innerHTML = 'It"s a marker positioned at uluru';
  
  })

  markerTwo.addListener('click', function(){
    infos.innerHTML = 'It"s a marker positioned at coordinate 2';
  
  
  })

  markerThree.addListener('click', function(){
    infos.innerHTML = 'It"s a marker positioned at  coordinate 3 ';
   
  
  })
  // It's a mthod which points position of Sydney a make a zoom of 10 
  document.getElementById('center-map').addEventListener('click', function(event){
    event.preventDefault();
    
    map.panTo(sydney);
    map.setZoom(10);
  });




}




 










