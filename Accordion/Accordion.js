$(function () {
    //展開事件
    $('.accordion-plus').click(function () {
        var _this = $(this);
        var _thisFather = $(this).parent();

        if (_this.hasClass('open')) {
            _this.removeClass('open');
            _thisFather.next().stop(true).slideUp("fast");
        }
        else {
            _this.addClass('open');
            _thisFather.next().stop(true).slideDown("fast");
        }
    });

    $('.accordion-menu span').click(function () {
        $('.accordion-menu span').removeClass('accordion-isSelect');
       $('.sub-item span').removeClass('accordion-isSelect');

        var _this = $(this);
        if (_this.hasClass('accordion-isSelect')) {
            _this.removeClass('accordion-isSelect');
        }
        else {
            _this.addClass('accordion-isSelect');
        }
    });

    $('.sub-item span').click(function () {

       $('.accordion-menu span').removeClass('accordion-isSelect');
       $('.sub-item span').removeClass('accordion-isSelect');

        var _this = $(this);
        if (_this.hasClass('accordion-isSelect')) {
            _this.removeClass('accordion-isSelect');
        }
        else {
            _this.addClass('accordion-isSelect');
        }
    });

});

$.fn.accordion = function () {
    var id = "#" + this[0].id;
    var options = this[0].getAttribute("data-options").split(';');
    
    $.each(options, function (e) {
        switch (options[e])
        {
            
        }
       
        
    });
    
};