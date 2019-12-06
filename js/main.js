$(function() {
    $("#smoothScroll").click(function() {
        if (

            location.hostname == this.hostname
            && this.pathname.replace(/^\//,"") == location.pathname.replace(/^\//,"")
        ) {
            var anchor = $(this.hash);
            anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) +"]");
            if ( anchor.length ) {
                $("html, body").animate( { scrollTop: anchor.offset().top }, 1000);
            }
        }
    });
});

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


$('.carousel').carousel({
  interval: 2000
})


$('.navbar-nav>li>a').on('click', function(){
  console.log("Test");
    $('.navbar-collapse').collapse('hide');
});
