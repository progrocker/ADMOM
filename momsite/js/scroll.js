$(document).ready(function(){
   $('a[href*=#]').bind("click", function(e){
      var anchor = $(this);
      $('html, body').stop().animate({
         scrollTop: $(anchor.attr('href')).offset().top-230
      }, 700);
      e.preventDefault();
   });
   return false;
});