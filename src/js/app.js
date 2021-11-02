$(function () {

//===== User scripts:

//===== Smooth scroll:
$('a[href^="#"]:not([href="#"])').on('click', function(event) {
  event.preventDefault();

  $('html,body').animate({
    scrollTop: $($(this).attr('href')).offset().top
  }, 350);
});


//===== Touch event check:
if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
  document.body.classList.add('touch');
} else {
  document.body.classList.add('no-touch');
}

});
