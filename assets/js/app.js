$(document).ready(function(){

  //para que se cargue la primera pantalla, el splash
  $(function(){
   setTimeout(function() {
     $('#splash').fadeOut(500);
   }, 1000);
  });
  $(function(){
  setTimeout(function() {
    $('.first-screen').removeClass('hidden');
  }, 2000);
  });

  //filtro

  $("#food-menu").on('input', function () {
    /*var algo = $('#food-menus');
    console.log(algo);*/
    var val=$('#food-menu').val();
    //console.log(val);
    $('.food-item').addClass('hidden');
    $('.food-first').hide();
    $('.food-item[category= "'+ val + '"]').show();
    $('.food-item[category= "'+ val + '"]').removeClass('hidden');
    //$('.list-item[category= "'+ val + '"]').show();
    if(val=='Seleccion'){
      $('.food-first').show();
    }
  });

  // hover para que la foto se agrande
  $('.zoom').hover(function() {
   $(this).addClass('transition');
   }, function() {
   $(this).removeClass('transition');
    });
    //Mapa de googlemaps
    myMap()
    function myMap() {
    var mapOptions = {
       center: new google.maps.LatLng(-10, -76),
       zoom: 2,
       mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    }
  });
  //Mapa de googlemaps
