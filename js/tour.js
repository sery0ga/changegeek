$(document).ready(function() {
  $('.meetings').hide();
  $('#helsinki-meetings').show();
  $('#cities').on('slide.bs.carousel', function (e) {
    var id = $(e.relatedTarget).attr('id') + "-meetings";
    $('.meetings').hide();
    $('#' + id).show();
  });
});
