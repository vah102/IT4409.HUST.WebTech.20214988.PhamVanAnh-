$(document).ready(function() {
    var headerHeight = 43;

    $('.sidebar a').eq(0).on('click', function(e) {
        e.preventDefault(); 
        $('html, body').animate({
            scrollTop: $('#post\\#1').offset().top - headerHeight
        }, 500); 
    });

    $('.sidebar a').eq(1).on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('#post\\#2').offset().top - headerHeight
        }, 500);
    });

    $('.sidebar a').eq(2).on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('#post\\#3').offset().top - headerHeight
        }, 500);
    });

    $('.sidebar a').eq(3).on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('#post\\#4').offset().top - headerHeight
        }, 500);
    });

    $('.sidebar a').eq(4).on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('#post\\#5').offset().top - headerHeight
        }, 500);
    });

    $('#menu-button').click(function () {
        $('.sidebar').toggleClass('active');
        $('.blur-overlay').toggleClass('active');
        $('#remove-sidebar-btn').toggleClass('active');

        if ($('.sidebar').hasClass('active')) {
            $('.remove-sidebar-btn').toggleClass('active');
        } else {
            $('.remove-sidebar-btn').removeClass('active');
        }
    });

    $('.blur-overlay').click(function () {
        $('.sidebar').removeClass('active');
        $('.blur-overlay').removeClass('active');
    });

});