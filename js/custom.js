$(window).load(function() {
    $('.flexslider').flexslider({
        animation: "fade",
        animationLoop: true,
        controlNav: true,
        directionNav: false
    });
});


$(document).ready(function() {
     $('.preloading').fadeOut();

    $('#carousel_vertical_slide, #carousel-testimonial-1, #carousel-testimonial-2, #carousel_fade, #carousel_vertical_testimonial, #carousel_fade_icons, #carousel-support, #carousel_fade_2, #carousel_testimonial_2').carousel({
        interval: 3000
    });
    /*$('#logokhan').hover(function() {
        $(this).addClass('animated tada');
    }, function() {
        $(this).removeClass('animated tada');
    });*/
    //            Responsive Videos
    $("#main-media").fitVids();
    ///////////// HEIGHT OF FIRST FRAME OF WEBSITE
    $(function() {
        $('#top, #about').css({
            'height': ($(window).height()) + 'px'
        });
        $(window).resize(function() {
            $('#top').css({
                'height': ($(window).height()) + 'px'
            });
        });
        $(window).resize(function(){
            if($(window).width() < 500) {
                $('#about').css({
                    'height': 'auto'
                });
            }
            else if($(window).width() > 500) {
                $('#about').css({
                    'height': ($(window).height()) + 'px'
                });
            }
        });
    ///////// height of services frame
        $('#services').css({
            'height': (($(window).height()))+ 'px'
        });
        $(window).resize(function() {
            $('#services').css({
                'height': (($(window).height())) + 'px'
            });
        });
    });
   
    //////// NICE SCROLL JS
    $(function() {
        $("html").niceScroll({
            horizrailenabled: false
        });
    });
});
///////////// ANCHOR SCROLLS    
$("a[href^='#top']").click(function(event) {
    event.preventDefault();
    var full_url = this.href;
    var parts = full_url.split("#");
    var trgt = parts[1];
    var target_offset = $("#" + trgt).offset();
    var target_top = target_offset.top - 80;
    $('html, body').animate({
        scrollTop: target_top
    }, 2500, 'easeOutBounce');

});
$("a[href^='#about']").click(function(event) {
    event.preventDefault();
    var full_url = this.href;
    var parts = full_url.split("#");
    var trgt = parts[1];
    var target_offset = $("#" + trgt).offset();
    var target_top = target_offset.top - 89;
    $('html, body').animate({
        scrollTop: target_top
    }, 1000, 'easeInOutExpo');
});
$("a[href^='#portfolio']").click(function(event) {
    event.preventDefault();
    var full_url = this.href;
    var parts = full_url.split("#");
    var trgt = parts[1];
    var target_offset = $("#" + trgt).offset();
    var target_top = target_offset.top - 89;
    $('html, body').animate({
        scrollTop: target_top
    }, 1000, 'easeInOutExpo');
});
$("a[href^='#contact']").click(function(event) {
    event.preventDefault();
    var full_url = this.href;
    var parts = full_url.split("#");
    var trgt = parts[1];
    var target_offset = $("#" + trgt).offset();
    var target_top = target_offset.top - 89;
    $('html, body').animate({
        scrollTop: target_top
    }, 1000, 'easeInOutExpo');
});
$(".nav li a[href^='#'], .footer-links li a[href^='#']").click(function(event) {
    event.preventDefault();
    var full_url = this.href;
    var parts = full_url.split("#");
    var trgt = parts[1];
    var target_offset = $("#" + trgt).offset();
    var target_top = target_offset.top - 89;
    $('html, body').animate({
        scrollTop: target_top
    }, 1200, 'easeInOutExpo');
});

 $(function () {
            $('.navbar-collapse ul li a:not(.dropdown-toggle)').bind('click', function () {
                    $('.navbar-toggle:visible').click();
            });
    });

//
//  
// Cache selectors
var lastId,
    topMenu = $(".nav"),
    topMenuHeight = topMenu.outerHeight() + 50,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function() {
        var item = $($(this).attr("href"));
        if (item.length) {
            return item;
        }
        ///////////////TWITTER 

        $('.tweets').each(function() {
            var tweets = $(this),
                data = tweets.data() || {};
            tweets.tweet({
                modpath: 'assets/twitter/',
                username: data.username,
                count: data.count,
                template: "{text}{time}",
                loading_text: 'loading twitter feed...'
            });
        });
        ///////////////FANCYBOX 
        $(".fancybox-media").fancybox({
            showNavArrows: true,
            padding: 0,
            margin: 15,
            closeBtn: true,
            openEffect: 'fade',
            closeEffect: 'fade',
            prevEffect: 'fade',
            nextEffect: 'fade',
            centerOnScroll: true,
            helpers: {
                media: {},
                overlay: {
                    locked: false
                },
                buttons: false,
                title: {
                    type: 'inside'
                }
            },
            beforeLoad: function() {
                var el, id = $(this.element).data('title-id');
                if (id) {
                    el = $('#' + id);
                    if (el.length) {
                        this.title = el.html();
                    }
                }
            }
        });  
    });
