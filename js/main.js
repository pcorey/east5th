$(function() {

    function buildChangeHandler(element) {
        return function change(e) {
            if (element.val()) {
                $(element.attr('data-next')).addClass('visible');
            }
        };
    }

    $('[data-next]').each(function() {
        $(this).change(buildChangeHandler($(this)));
    })
});