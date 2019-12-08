var isInViewport = function (elem) {
    var bounding = elem.getBoundingClientRect();
    return ( bounding.top <= document.documentElement.clientHeight);
};

var offsetTop = 70;

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
}, 1000);

  $('.navbar-collapse').collapse('hide');
  var mycontacts = document.getElementById("contact");
  mycontacts.style.background="#5b5b5b";
  setTimeout(() => {  mycontacts.style.background="#343a40"; }, 1700);
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
