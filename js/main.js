$('[lang="fr"]').hide();

$('#switch-lang').click(function() {
  $('[lang="fr"]').toggle();
  $('[lang="en"]').toggle();
  $('h1.responsive-headline').fitText(1, { minFontSize: '40px', maxFontSize: '90px' });
});


/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function toggleResponsive() {
  x = $("#topnavResp");
  if (x.hasClass('responsive')) {
    x.removeClass('responsive')
  }
  else{
    x.addClass('responsive')
  }
}

jQuery(document).ready(function($) {

  /*----------------------------------------------------*/
  /* FitText Settings
  ------------------------------------------------------ */
  
      setTimeout(function() {
       $('h1.responsive-headline').fitText(1, { minFontSize: '40px', maxFontSize: '90px' });
     }, 100);
  
  
     /*----------------------------------------------------*/
     /*	Make sure that #header-background-image height is
     /* equal to the browser height.
     ------------------------------------------------------ */
  
      $('header').css({ 'height': $(window).height() });
  
      $(window).on('resize', function() {
           $('header').css({ 'height': $(window).height() });
           $('body').css({ 'width': $(window).width() })
      });
  
  
  });

(function( $ ){

  $.fn.fitText = function( kompressor, options ) {

    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){

      // Store the object
      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };

})( jQuery );


// $(document).ready(function(){       
//   var scroll_start = 0;
//   var startchange = $('#startchange');
//   var offset = startchange.offset();
//   $(document).scroll(function() { 
//      scroll_start = $(this).scrollTop();
//      if(scroll_start > offset.top) {
//          $('#topnavResp').css('background-color', '#161415');
//          $('#topnavResp').css('top','0px')
//          console.log("show", );
//       } else {
//          $('#topnavResp').css('background-color', 'transparent');
//          $('#topnavResp').css('top','40px')
//          console.log("hide");
//       }
//   });
// });

$(document).ready(function () {
  var scroll_start = 0;
  var totalH = $('#topnavResp').offset().top;
  $(window).bind('scroll', function () {
      scroll_start = $(window).scrollTop()
      if (scroll_start > totalH) {
          $('#topnavResp').css({
              'position': 'fixed',
              'top': 0,
              'background-color': '#2B2B2B'
          })
      } else {
          $('#topnavResp').css({
              'position': 'absolute',
              'top': '',
              'background-color': 'transparent'
          })
      }
  });
});