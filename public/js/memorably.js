$(document).ready(function () {
  $('.nav li a').click(function(e) {
    $('.nav li.active').removeClass('active');
    var section = $(this).attr('data-section');
    var position = ($('.'+section).offset().top - 56);
    var parent = $(this).parent();
    parent.addClass('active');
    e.preventDefault();
    $("html, body").animate({ scrollTop: position });
  });
});
