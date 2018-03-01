$('#slider > li:gt(0)').hide();

setInterval(function() {
    $('#slider > li:first')
        .fadeOut(1000)
        .next()
        .delay(1000)
        .fadeIn(1000)
        .delay(1000)
        .end()
        .appendTo('#slider');
}, 5000);