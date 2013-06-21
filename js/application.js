$('document').ready(function () {

    $('.link').on('mouseenter', function () {
        var align = $(this).data('align');
        if (align === 'left') {
            $(this).switchClass(align, 'highlight highlight-left', 'fast');
        } else {
            $(this).switchClass(align, 'highlight highlight-right', 'fast');
        }
    });

    $('.link').on('mouseleave', function () {
        var align = $(this).data('align');
        if (align === 'left') {
            $(this).switchClass('highlight highlight-left', align, 'fast');
        } else {
            $(this).switchClass('highlight highlight-right', align, 'fast');
        }
    });

    $('.link').on('click', function() {
        window.open($(this).data('link'), '_blank');
    });
});
