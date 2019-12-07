function goToHome() {
  $('html, body').animate({
    scrollTop: 0

}, 1000);
}

function goToContact() {
  $('html, body').animate({
    scrollTop: $("#footer").offset().top

}, 1500);
  $('.navbar-collapse').collapse('hide');
}

function goToStudies() {
  $('html, body').animate({
    scrollTop: $("#studies").offset().top-50

}, 1500);
$('.navbar-collapse').collapse('hide');
}

function goToSkills() {
  $('html, body').animate({
    scrollTop: $("#skills").offset().top-50

}, 1500);
$('.navbar-collapse').collapse('hide');
}

function goToProjects() {
  $('html, body').animate({
    scrollTop: $("#projects").offset().top-50

}, 1500);
$('.navbar-collapse').collapse('hide');
}


$('.carousel').carousel({
  interval: 2000
})


$('.navbar-nav>li>a').on('click', function(){
  console.log("Test");
    $('.navbar-collapse').collapse('hide');
});


var mybutton = document.getElementById("btnscroll");

$(window).scroll(testScroll);

window.onload = testScroll()

function testScroll() {
  var tempScrollTop = $(window).scrollTop();
  console.log("Scroll from Top: " + tempScrollTop.toString());
  if(tempScrollTop>500)
  {
    mybutton.style.display= 'block' ;
  }
  else
  {
    mybutton.style.display= 'none' ;
  }
};
