'use strict';


// mustache starts here 
var templateItem = document.getElementById('template-product-item').innerHTML;
var output = document.querySelector('.main-carousel');

var listItems = '';

for(var i = 0; i < cities.length; i++){
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
      f.select(1);
 })







// progreBar which using a scroll event 
var progressBar = document.querySelector('.progress-bar')

f.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
 
});

// here I use a change eveny to center and zoom a map 
flkty.on( 'change', function( index ) {
  
});



/* FUNCTION GOOGLE MAPS IS BELOW */
window.initMap = function() {

  // The map, centered at Paris it's a first location when someone comes to a web page
var newCoords = cities[0].coords;

var map = new google.maps.Map(
  document.getElementById('map'), {zoom: 4, center: newCoords});
  // The marker, positioned at Paris
    var markerOne = new google.maps.Marker({
    position: newCoords,
    map: map
  });
  
// this code moves a map depending on what slide is on screen 
flkty.on( 'change', function( index ) {

  if(index == 0 || index == 1){
    map.panTo(cities[0].coords)
  }else if(index == 2){
    map.panTo(cities[1].coords)
  }else if(index == 3){
    map.panTo(cities[2].coords)
  }else if(index == 4){
    map.panTo(cities[3].coords)
  }else if(index == 5){
    map.panTo(cities[4].coords)
  }
  
  
  
  });

  // I create an array with markers here 
var marker = [];

for(var i = 0; i < cities.length; i++){
   marker.push(new google.maps.Marker({
    position: cities[i].coords,
    map: map  })
   )
}

marker[0].addListener('click', function(){
 f.select(0)
});

marker[1].addListener('click', function(){
  f.select(2)
 });

 marker[2].addListener('click', function(){
  f.select(3)
 });

 marker[3].addListener('click', function(){
  f.select(4)
 });

 marker[4].addListener('click', function(){
  f.select(5)
 });

 




} // end of initMap




 










