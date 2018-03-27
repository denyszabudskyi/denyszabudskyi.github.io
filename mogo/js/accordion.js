$(document).ready(function () {

    $('.panel-group>.panel-group__content').not(':first-of-type').hide();


    $('.panel-group>.panel-group__header').click(function () {

        var findArticle = $(this).next();
        var findWrapper = $(this).closest('.panel-group');

        if (findArticle.is(':visible')) {
            findArticle.slideUp('fast');
        }
        else {
            findWrapper.find('>.panel-group__content').slideUp('fast');
            findArticle.slideDown('fast');
        }
    });

});