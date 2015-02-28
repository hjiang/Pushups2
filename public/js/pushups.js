$(function() {
  window.addEventListener('deviceproximity', function(event) {
    // The maximum distance the sensor covers (in cm).
    var max = event.max;
    // The minimum distance the sensor covers (in cm).
    var min = event.min;
    // The device proximity (in cm).
    var proximity = event.value;

    $('#max').text(max);
    $('#min').text(min);
    $('#current').text(proximity);
  });
});
