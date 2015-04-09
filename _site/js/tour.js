function hideCityData() {
  $('.meetings').hide();
  $('.credits').children('div').hide();
}
function resetCityMenu() {
  $('#cityMenu').children('li').children('a').removeClass('active');
}

$(document).ready(function() {
  hideCityData();
  resetCityMenu();
  $('.helsinki').show();
  $('a.helsinki').addClass('active');
  $('#cities').on('slide.bs.carousel', function (e) {
    hideCityData();
    resetCityMenu();
    var className = $(e.relatedTarget).attr('id');
    $('.' + className).show();
    $('a.' + className).addClass('active');
  });
  $('#cityMenu').children('li').children('a').on('click', function(e) {
    e.preventDefault();
    var index = $(this).data('id');
    $('.carousel').carousel(index);
  });
});
