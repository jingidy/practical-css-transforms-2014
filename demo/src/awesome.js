$(function () {
  var delay = 0;
  var delayDelta = 0.15;
  $('#main > .section').each(function (index) {
    $(this).css('-webkit-transition-delay', 
                delay + delayDelta * index + 's');
  });

  // Animate everything in after they've laid out on screen.
  setTimeout(function () {
  $(document.body).addClass('loaded');    
  }, 0);
});
