// Language filter
$('document').ready(function(){
  $('[lang="en"]').hide();
  filterSelection("all") 

  
  $('#switch-lang').click(function() {
    $('[lang="fr"]').toggle();
    $('[lang="en"]').toggle();
    $('h1.responsive-headline').fitText(1, { minFontSize: '40px', maxFontSize: '90px' });
  });
});

// Toggle responsive for navbar
function toggleResponsive() {
  x = $("#topnavResp");
  if (x.hasClass('responsive')) {
    x.removeClass('responsive')
  }
  else{
    x.addClass('responsive')
  }
}

// Fit header text
jQuery(document).ready(function($) {
      setTimeout(function() {
       $('h1.responsive-headline').fitText(1, { minFontSize: '40px', maxFontSize: '90px' });
     }, 100);
  
      $('header').css({ 'height': $(window).height() });
  
      $(window).on('resize', function() {
           $('header').css({ 'height': $(window).height() });
           $('body').css({ 'width': $(window).width() })
      });
  });
(function( $ ){
  $.fn.fitText = function( kompressor, options ) {
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);
    return this.each(function(){

      var $this = $(this);
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };
      resizer();
      $(window).on('resize.fittext orientationchange.fittext', resizer);
    });
  };
})( jQuery );

// Make the navbar sticky when it's scrolled down
$(document).ready(function () {
  var scroll_start = 0;
  var totalH = 40;
  $(window).bind('scroll', function () {
      scroll_start = $(window).scrollTop()
      if (scroll_start > totalH) {
          $('#topnavResp').css({
              'position': 'fixed',
              'top': 0,
              'background-color': '#2B2B2B'
          })
          $("#go-top").show()
      } else {
          $('#topnavResp').css({
              'position': 'absolute',
              'top': '',
              'background-color': 'transparent'
          })
          $("#go-top").hide()
      }
  });
});

// Scrolling animation
var offsetTop = 80;
var timeToScroll = 1200;

function goToTop() {
  $('html, body').animate({
    scrollTop: 0
}, timeToScroll);
}

function goToAbout() {
  toggleResponsive()
  $('html, body').animate({
    scrollTop: $("#about").offset().top-40
}, timeToScroll);
}

function goToExperiences() {
  toggleResponsive()
  $('html, body').animate({
    scrollTop: $("#experiences").offset().top-offsetTop

}, timeToScroll);
}

function goToSkills() {
  toggleResponsive()
  $('html, body').animate({
    scrollTop: $("#skills").offset().top-offsetTop

}, timeToScroll);
}

function goToProjects() {
  toggleResponsive()
  $('html, body').animate({
    scrollTop: $("#projects").offset().top-offsetTop
}, timeToScroll);
}

function goToContacts() {
  toggleResponsive()
  $('html, body').animate({
    scrollTop: $("#contacts").offset().top-offsetTop
}, timeToScroll);
}


// Filter for the portfolio
function filterSelection(c) {
    console.log(c);
    if (c=='all') {
        $(".filtered").each(function() {
            $(this).show();
        });
    }
    else {
        $(".filtered").each(function() {
            if ($(this).hasClass(c)) {
                $(this).show();
            }
            else {
                $(this).hide();
            }
        });
    }

    $(".btn-filter").each(function() {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        }
        if ($(this).hasClass(c)) {
            $(this).addClass('active');
        }
    });

}
