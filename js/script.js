
$(document).ready(function () {
    $(".pure-menu-item").on("click", function (e) {
        $("li.pure-menu-item").removeClass("active");
        $(this).addClass("active");
    });
});

$(document).ready(function () {
    $('.hamburger').click(function () {
        $('nav').toggleClass('active'), $(this).toggleClass('is-active');
    })
});

$(document).ready(function () {
    $('.clickme').click(function () {
        $('.nav-hidden').toggleClass('active'), $('.page-content').toggleClass('hide'), $(this).toggleClass('rotate');
    })
});

$(document).ready(function () {
    $('.nav-hidden a').click(function () {
        $('.nav-hidden').toggleClass('active'), $('.page-content').toggleClass('show'), $('.clickme').removeClass('rotate');
    })
});
$(document).ready(function () {
    if (!$('.nav-hidden').hasClass("active")) {
        $('.clickme').removeClass('rotate');
    }
});
