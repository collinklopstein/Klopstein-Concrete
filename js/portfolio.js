
////////////////PORTFOLIO 

$(function() {

    var $container = $('#portfolio-container'),
        $filters = $("#filters a");

    $container.imagesLoaded(function() {
        $container.isotope({
            itemSelector: '.project',
            filter: ':nth-child(-n+8)',
            masonry: {
                columnWidth: 0
            }

        });
    });

    $(window).smartresize(function(){
      $container.isotope({
        masonry: { columnWidth: 0}
      });
    });

    // filter items when filter link is clicked
    $filters.click(function() {
        $filters.removeClass("active");
        $(this).addClass("active");
        var selector = $(this).data('filter');
        $container.isotope({
            filter: selector
        });
        return false;

    });


});
