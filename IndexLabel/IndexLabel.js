$(function () {
    $('.IndexLabel-text').click(function () {
        var _this = $(this);
        $('#myFrame').attr("src", _this[0].getAttribute('data-link'));
    })
})