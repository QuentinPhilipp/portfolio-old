filterSelection("all") // Execute the function and show all columns

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
