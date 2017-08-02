$(document).ready(function () {
  $('.nav li a').click(function(e) {
    $('.nav li.active').removeClass('active');
    var section = $(this).attr('data-section');
    var position = ($('.'+section).offset().top - 56);
    var parent = $(this).parent();
    parent.addClass('active');
    // stop url navigation
    e.preventDefault();
    // to auto close menu
    $('.navbar-header button').trigger('click');
    // to scroll to that position
    $("html, body").animate({ scrollTop: position });

  });
});
