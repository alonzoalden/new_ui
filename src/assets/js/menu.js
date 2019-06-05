"use strict";
$(document).ready(function() {
  $('#main-menu').smartmenus({
      subMenusSubOffsetX: 1,
      subMenusSubOffsetY: -8,
      noMouseOver: true,
      keepInViewport:		false,
      showFunction:		function($ul, complete) {
        $ul.slideDown(70, complete);
      },
      hideFunction:		function($ul, complete) {
        $ul.slideUp(80, function() {
          $ul.parent().removeClass('open');
          complete();
        });
      }
  });
  $('#sub-menu').smartmenus({
      subMenusSubOffsetX: 1,
      subMenusSubOffsetY: -8,
      noMouseOver: true,
      keepInViewport:		false,
      showFunction:		function($ul, complete) {
        $ul.slideDown(70, complete);
      },
      hideFunction:		function($ul, complete) {
        $ul.slideUp(80, function() {
          $ul.parent().removeClass('open');
          complete();
        });
      }
  });
  
});
