function hideCityData() {
  $('.meetings').hide();
  $('.credits').children('div').hide();
}

$(document).ready(function() {
  hideCityData();
  $('.helsinki').show();
  $('#cities').on('slide.bs.carousel', function (e) {
    hideCityData();
    var className = $(e.relatedTarget).attr('id');
    $('.' + className).show();
  });
});
