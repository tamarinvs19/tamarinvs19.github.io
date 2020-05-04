$(document).ready(function() {
    resizeHeader();
});

function resizeHeader() {
    $('#header').css({ height: ($(window).height()) +'px' });
}

