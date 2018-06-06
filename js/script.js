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






