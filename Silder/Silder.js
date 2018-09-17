$(function () {
    var w = $(".slider_content").width() + 2;
    $(".slider_tab").mousedown(function () {
        if ($(".slider_scroll").css('left') == '-' + w + 'px') {
            $(".slider_scroll").animate({ left: '0px' }, 400, 'swing');
        }
        else {
            $(".slider_scroll").animate({ left: '-' + w + 'px' }, 600, 'swing');
        }

        //滑鼠離開範圍時觸發
        //$("#slider_content").mouseleave(function ()
        //{
        //    $("#slider_scroll").animate({ left: '-' + w + 'px' }, 400, 'swing');
        //});
    });
});