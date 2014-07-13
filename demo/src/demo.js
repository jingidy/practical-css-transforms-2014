$(function () {
  // Toggle "expanded" class on .expandable when the .label is clicked
  function toggleExpanded (e) {
    $(e.currentTarget).closest('.expandable').toggleClass('expanded');
  }
  console.log($('.expandable .label').click(toggleExpanded))
});
