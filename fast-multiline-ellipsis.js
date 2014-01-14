$(function() {
  $('.ellipsis').each(function(n, el) {
    var $ellipsis = $(el),
        $parent = $ellipsis.parent(),
        constrainedHeight = $parent.height(),
        freeHeight;

    $parent.css('height', 'auto');
    freeHeight = $parent.height();
    $parent.css('height', constrainedHeight);

    if (freeHeight > constrainedHeight) {
      $ellipsis.show();
    }
  });
});