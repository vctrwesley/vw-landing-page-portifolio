$(document).ready(function () {
    $(window).on('scroll', function () {
        var scrollPosition = $(this).scrollTop();
        var sections = {
            'home': $('#home').offset().top,
            'sobre': $('#sobre').offset().top,
            'tech': $('#tech').offset().top,
            'projects': $('#projects').offset().top,
            'contato': $('#contato').offset().top
        };
        
        $.each(sections, function (key, value) {
            if (scrollPosition >= value - 100) {
                $('nav .navbar-nav .nav-item').removeClass('active');
                $('nav .navbar-nav .nav-item:eq(' + $("section").index($('#' + key)) + ')').addClass('active');
            }
        });
    });
});