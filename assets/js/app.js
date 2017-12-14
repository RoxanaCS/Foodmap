$(document).ready(function(){

  //para que se cargue la primera pantalla, el splash
  $(function(){
   setTimeout(function() {
     $('#splash').fadeOut(500);
    }, 2000);
  });
  $(function(){
  setTimeout(function() {
    $('.first-screen').removeClass('hidden');
  }, 3000);
  });

  //filtro

  $("#food-menu").on('input', function () {
    /*var algo = $('#food-menus');
    console.log(algo);*/
    var val=$('#food-menu').val();
    console.log(val);
    $('.food-item').addClass('hidden');
    $('.food-first').hide();
    $('.food-item[category= "'+ val + '"]').show();
    $('.food-item[category= "'+ val + '"]').removeClass('hidden');
    //$('.list-item[category= "'+ val + '"]').show();
    if(val=='Seleccion'){
      $('.food-first').show();
    }
  });

  //evento mouseover
  $('.img_veg1').mouseover(function(){
    $('.img_veg1').addClass('hover');
  })
  $('.img_veg2').mouseover(function(){
    $('.img_veg1').removeClass('hover');
    $('.img_veg2').addClass('hover');
  })
})
  //Mapa de googlemaps

function myMap() {
var mapOptions = {
   center: new google.maps.LatLng(-33, -71),
   zoom: 2,
   mapTypeId: google.maps.MapTypeId.ROADMAP
}
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}
myMap();
