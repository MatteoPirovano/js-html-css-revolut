$(document).ready(function() {

    $('.p_relative').mouseenter(
      function() {
        $(this).children('div').first().removeClass('display_none');
        console.log(this);
    });
    $('.p_relative').mouseleave(
      function() {
        $(this).children('div').addClass('display_none');
    })
  }
);
