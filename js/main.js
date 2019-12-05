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

function goTo() {
  $('html, body').animate({
    scrollTop: $("#pic1").offset().top -30
}, 1000);
}

function goToContact() {
  $('html, body').animate({
    scrollTop: $("#footer").offset().top
}, 1500);
}

function goToStudies() {
  $('html, body').animate({
    scrollTop: $("#pic1").offset().top -30
}, 1500);
}


$('.carousel').carousel({
  interval: 2000
})
