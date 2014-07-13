$(function () {
  // Toggle "expanded" class on .expandable when the .label is clicked
  $('.expandable .label').click(function (e) {
    $(e.currentTarget).closest('.expandable').toggleClass('expanded');
  });
});
