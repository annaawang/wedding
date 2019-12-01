$(document).ready(function(){

  $("#anna").click(function() {
    var $j = $('#jonathan img');
    var $jlabel = $('#jonathan p');
    var $jtext = $('#jonathan-text');

    if ($j.hasClass('active')) {
      $j.removeClass('active');
      $jlabel.removeClass('active');
      $jtext.addClass('hidden').removeClass('active');
    } else {

    }

    $("#anna-text").removeClass("hidden").addClass('active');
    $("#anna img").addClass("active");
    $("#anna p").addClass("active");

  });

  $("#jonathan").click(function() {
    var $a = $('#anna img');
    var $alabel = $('#anna p');
    var $atext = $('#anna-text');

    if ($a.hasClass('active')) {
      $a.removeClass('active');
      $alabel.removeClass('active');
      $atext.addClass('hidden').removeClass('active');
    } else {

    }
    $("#jonathan-text").removeClass("hidden").addClass('active');
    $("#jonathan img").addClass("active");
    $("#jonathan p").addClass("active");
  });


})

function initMap() {
  var center = {lat: 30.293261, lng: -97.916580};

  var locations = [
    ['<h3 class="font-detail-heavy">Chapel Dulcinea</h3><br>\
    <p class="font-caption">16221 Crystal Hills Dr. <br>\
    Austin, TX 78737</p><br>\
    <a href="https://goo.gl/maps/XoA2enx43SmtEXme6">Get Directions</a>', 30.1467467, -97.9690791],
    ['<h3 class="font-detail-heavy">Reception</h3><br>\
    <p class="font-caption">4828 Eck Lane <br>\
    Austin, TX 78734</p><br>\
    <a href="https://goo.gl/maps/yrT4do1ZcrP7ZjK27">Get Directions</a>', 30.4159284, -97.9426465]
  ];

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: center
  });

  var infowindow = new google.maps.InfoWindow({});

  var marker, count;

  for (count = 0; count < locations.length; count++) {
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[count][1], locations[count][2]),
      map: map,
      title: locations[count][0]
    });
google.maps.event.addListener(marker, 'click', (function (marker, count) {
      return function () {
        infowindow.setContent(locations[count][0]);
        infowindow.open(map, marker);
      }
    })(marker, count));
  }
}
