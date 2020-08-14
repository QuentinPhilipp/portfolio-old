var isInViewport = function (elem) {
    var bounding = elem.getBoundingClientRect();
    return ( bounding.top <= document.documentElement.clientHeight);
};

var offsetTop = 55;

var mybutton = document.getElementById("btnscroll");
var myfooter = document.getElementById("footer");

$(function() {
   $('.scroll-down').click (function() {
     $('html, body').animate({scrollTop: $('#about').offset().top -offsetTop }, 1000);
     return false;
   });
 });




 var $fade =  $(".movechart"); //Calling the class in HTML

 $(window).scroll(function () { //Using the scroll global variable
     $fade.each(function () {

         fadeMiddle = $(this).offset().top + (0.4 *$(this).height());
         windowBottom = $(window).scrollTop() + $(window).height();

         if (fadeMiddle < windowBottom) {
           $(".python").addClass("FadeInPython");
           $(".cpp").addClass("FadeInCPP");
           $(".html").addClass("FadeInHtml");
           $(".angular").addClass("FadeInAngular");
           $(".android").addClass("FadeInAndroid");

         }
     });
 });

 /* On Load: Trigger Scroll Once*/
 $(window).scroll();



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


function goToHome() {
  $('html, body').animate({
    scrollTop: 0
}, 1000);
}

function goToContact() {
  $('html, body').animate({
    scrollTop: $("#about").offset().top-offsetTop
}, 1500);
$('.navbar-collapse').collapse('hide');
}

function goToStudies() {
  $('html, body').animate({
    scrollTop: $("#studies").offset().top-offsetTop

}, 1500);
$('.navbar-collapse').collapse('hide');
}

function goToSkills() {
  $('html, body').animate({
    scrollTop: $("#skills").offset().top-offsetTop

}, 1500);
$('.navbar-collapse').collapse('hide');
}

function goToProjects() {
  $('html, body').animate({
    scrollTop: $("#projects").offset().top-offsetTop
}, 1500);
$('.navbar-collapse').collapse('hide');
}


$('.carousel').carousel({
  interval: 2000
})
