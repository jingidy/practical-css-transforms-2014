$(function () {
  // Load sections as they scroll into view
  var $window = $(window);
  var $sections = $('.section');
  function isElementInView($el) {
   var docBottom = $window.scrollTop() + $window.height();
   var elTop = $el.offset().top;
   return elTop <= docBottom;  
  }

  function loadSectionsInView() {
    $sections.each(function () {
      $this = $(this);
      if (isElementInView($this)) {
        $this.addClass('loaded');
      }
    })
  }

  var lastLoadSections = null;
  $('#main_container').on('scroll', function (e) {
    if (lastLoadSections) return;
    lastLoadSections = setTimeout(function () {
      loadSectionsInView();
      lastLoadSections = null;
    }, 300);
  });

  // Finally run load animations
  setTimeout(function () {
    $(document.body).addClass('loaded');
    loadSectionsInView();
  }, 0);
});
