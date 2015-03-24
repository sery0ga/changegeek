$(document).ready(function() {
  $('#cities').on('slide.bs.carousel', function (e) {
    console.log($(e.relatedTarget).attr('id'));
  });
});
