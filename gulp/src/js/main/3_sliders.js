$(document).ready(function () {

    /* category slider */
    var categoryCalc = 0;
    var categoryCount = 0;
    var categoryWidth;
    var categoryStop = false;

    $('[data-categoryLeft]').on('click', function () {
        categoryStop = false;
        /* if start of list */
        if (categoryCount > 0) {
            categoryCount--;
            categoryCalc = categoryCount * 0.8 * window.innerWidth;
            /* set property */
            $("[data-categoriesSlider]").css("right", categoryCalc);
        }
    });

    $('[data-categoryRight]').on('click', function () {
        categoryWidth = $("[data-categoriesSlider]").width();
        /* if end of list */
        if ((((categoryCalc + window.innerWidth) + (categoryCount * 0.8 * window.innerWidth)) < categoryWidth) && (2 * window.innerWidth - 260 < categoryWidth)) {
            categoryStop = false;
            /* not end of list */
            categoryCount++;
            categoryCalc = categoryCount * 0.8 * window.innerWidth;
            /* set property */
            $("[data-categoriesSlider]").css("right", categoryCalc);
        } else {
            /* end of list */
            (categoryStop === false ? categoryCount++ : "");
            /* stop counting if end of list */
            categoryStop = true;
            /* set property */
            $("[data-categoriesSlider]").css("right", categoryWidth - window.innerWidth + 260);
        }
    });

    function addArrows() {
        $('.section-categories .list .slick-prev').addClass("svg-i-circled-arrow-gray-left").addClass("svg-i-circled-arrow-gray-left-dims");
        $('.section-categories .list .slick-next').addClass("svg-i-circled-arrow-gray-right").addClass("svg-i-circled-arrow-gray-right-dims");
    }

    if ($('.section-categories .list').length > 0) {
        $slickGreen = false;
        function greenSlider() {
            if (window.innerWidth < 991) {
                addArrows();
                if (!$slickGreen) {
                    $('.section-categories .list').slick({
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        autoplay: true,
                        speed: 1800,
                        arrows: true,
                        infinite: true,
                        responsive: [
                            {
                                breakpoint: 767,
                                settings: {
                                    slidesToShow: 1,
                                    arrows: false
                                }
                            }
                        ]
                    });
                    $slickGreen = true;
                }
            } else if (window.innerWidth > 992) {
                if ($slickGreen) {
                    $('.section-categories .list').slick('unslick');
                    $slickGreen = false;
                }
            }
        }
        ;

        greenSlider();

        $(window).on('resize', function () {
            greenSlider();
        });
    }

    /* products slider */
    if ($('[data-productSlider]').length > 0) {
        $('[data-productSlider]').on('init', function (e, slick) {
            $('.slick-prev').addClass("svg-i-circled-arrow-gray-left").addClass("svg-i-circled-arrow-gray-left-dims");
            $('.slick-next').addClass("svg-i-circled-arrow-gray-right").addClass("svg-i-circled-arrow-gray-right-dims");

        }).slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            speed: 1800,
            arrows: true,
            infinite: true,
            responsive: [
                {
                    breakpoint: 1599,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 1
                    }
                }
                ,
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        arrows: false
                    }
                }
            ]
        });
    }

    /* products slider */
    if ($('[data-sliderImagesList]').length > 0) {
        $('[data-sliderImagesList]').on('init', function (e, slick) {
        }).slick({
            slidesToShow: 4,
            slidesToScroll: 3,
            autoplay: false,
            speed: 1800,
            arrows: true,
            infinite: true,
            vertical: true,
            verticalSwiping: true,
            responsive: [
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 2
                    }
                }
            ]
        });
    }

    /* products slider */
    if ($('[data-opinionsSlider]').length > 0) {
        $('[data-opinionsSlider]').on('init', function (e, slick) {
            $(this).find(".slick-dots").addClass("pl-4");
        }).slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            speed: 1800,
            arrows: true,
            infinite: true,
            dots: true
        });
    }
});