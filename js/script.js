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




/* FUNCTION GOOGLE MAPS IS BELOW 

window.initMap = function() {
  // The location of Uluru
  var uluru = {lat: -25.344, lng: 131.036};
  var coords2 = {lat: -25.363, lng: 134.044};
	var coords3 = {lat: -25.363, lng: 137.044};
  // The map, centered at Uluru
  var map = new google.maps.Map(
  document.getElementById('map'), {zoom: 4, center: uluru});
  // The marker, positioned at Uluru
  // var marker = new google.maps.Marker({position: uluru, map: map});
  
  var markerOne = new google.maps.Marker({
    position: uluru,
    map: map
  });

 




  }



  // MARKING NO A MAP 
  var infos = document.getElementById('infos');
*/






