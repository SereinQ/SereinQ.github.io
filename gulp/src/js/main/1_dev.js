
var winCalc, sectionStep;
var topx = $(document).scrollTop();

$(document).ready(function () {
    sectionStep = 1;

    $('html,body').animate({ scrollTop: document.body.scrollHeight }, "0");

    /* */
    /* */
    /* onready events start */
    /* */
    /* */




    /* */
    /* */
    /* onready events end */
    /* */
    /* */

    /* */
    /* */
    /* onmove events start */
    /* */
    /* */



    /* */
    /* */
    /* onmove events end */
    /* */
    /* */


    /* */
    /* */
    /* onclick events start */
    /* */
    /* */



    /* fold, expand text */
    $("[data-expand]").click(function () {
        var item = $(this).attr("data-expand");
        $("[data-expandToggle='" + item + "']").toggleClass("toggleNotActive");
    });

    /* stepping */
    function stepStandard() {
        $("[data-step='" + sectionStep + "']").toggleClass("hide");
    }

    /* loading tower */
    function stepLoading() {

        /* set speed */
        let towerSpeed = topx * 4;

        /* set transitions of fade in and fade out of sections */
        $(".section-form").css("transition-duration", towerSpeed + "ms");
        $(".section-loading").css("transition-duration", towerSpeed * 0.8 + "ms");

        /* minutes and seconds calc */
        let minutes = parseInt(topx / 60);
        let decimalsMin = parseInt(minutes / 10);
        let singleMin = minutes - decimalsMin * 10;
        let seconds = parseInt(topx - (minutes * 60));
        let decimalsSec = parseInt(seconds / 10);
        let singleSec = seconds - decimalsSec * 10;
        $("[data-invitation='0']").addClass("hide");
        $("[data-invitation='1']").removeClass("hide");

        var lineHeight = -22;

        $("[data-decimalsMin]").css("top", lineHeight * decimalsMin);
        $("[data-singleMin]").css("top", lineHeight * singleMin);
        $("[data-decimalsSec]").css("top", lineHeight * decimalsSec);
        $("[data-singleSec]").css("top", lineHeight * singleSec);

        /* animation */
        setTimeout(function () {
            $("[data-step='" + sectionStep + "']").toggleClass("hide");
            $('html, body').animate({
                scrollTop: $($("#body")).offset().top
            }, towerSpeed);

            $(".counter-load span:not(.data-divider)").css('top', "0px").css("transition-duration", towerSpeed + "ms");

        }, 1000);





    }

    $("[data-goStep]").click(function () {
        ((sectionStep == 2) ? "" : $("[data-step='" + sectionStep + "']").toggleClass("hide"));
        sectionStep = $(this).attr("data-goStep");
        ((sectionStep == 3) ? $(".body").removeClass('stop-scroll') : $(".body").addClass('stop-scroll'));
        ((sectionStep == 3) ? stepLoading() : stepStandard());
    });

    /* */
    /* */
    /* onclick events end */
    /* */
    /* */


    /* */
    /* */
    /* onload events start */
    /* */
    /* */
    window.addEventListener('load', function () {
        /* tooltip init */
        $(function () {
            $('[data-tooltips="tooltip"]').tooltip();
        });
    });

    /* */
    /* */
    /* onload events end */
    /* */
    /* */

    /* */
    /* */
    /* onscroll events start */
    /* */
    /* */
    var cached = null;
    window.addEventListener('scroll', function (event) {
        if (!cached) {
            setTimeout(function () {
                topx = $(document).scrollTop();
                cached = null;
            }, 20);
        }
        cached = event;
    });
    /* */
    /* */
    /* onload events end */
    /* */
    /* */

}
);






