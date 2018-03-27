
var options = {
    offset: 1000
}
var header = new Headhesive('.header-menu__box', options);

$(document).ready(function () {
    $("a[href*=\\#n-]").on("click", function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 777);
        e.preventDefault();
        return false;
    });
});
