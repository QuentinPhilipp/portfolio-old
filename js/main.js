var isInViewport = function (elem) {
    var bounding = elem.getBoundingClientRect();
    return ( bounding.top <= document.documentElement.clientHeight);
};

var mybutton = document.getElementById("btnscroll");
var myfooter = document.getElementById("footer");

$(window).scroll(testScroll);

window.onload = testScroll()

function testScroll() {
  var tempScrollTop = $(window).scrollTop();

  // console.log(myfooter);
  if(tempScrollTop>500)
  {
    mybutton.style.display= 'block' ;

    if (isInViewport(myfooter)) {
        var bounding = myfooter.getBoundingClientRect();

        var height = document.documentElement.clientHeight - bounding.top+45;
        var heightStr = height.toString().concat("px");
        mybutton.style.bottom=heightStr;

    }
    else
    {
      mybutton.style.bottom= "5%";
    }

  }
  else
  {
    mybutton.style.display= 'none' ;
  }
};


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
