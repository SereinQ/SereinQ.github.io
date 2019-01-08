var sectionStep;
var topx = $(document).scrollTop();

/* stepping */

/* standard stepper */
function stepStandard() {
    $("[data-step='" + sectionStep + "']").toggleClass("hide");
}

/* loading tower */
function stepLoading() {

    /* set speed */
    let towerSpeed = topx * 1;

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

    let lineHeight = -22;

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

function scrollBottom() {
    $('html,body').animate({ scrollTop: document.body.scrollHeight }, "0");
}

$(document).ready(function () {
    /* */
    /* onready events start */
    /* */

    /* start section */
    sectionStep = 1;

    scrollBottom();


    /* form sent? */
    ((sessionStorage.getItem('submit') == 1) ? $("[data-step='4']").removeClass("hide") : $("[data-step='1']").removeClass("hide"));

    /* */
    /* onready events end */
    /* */

    /* */
    /* onclick events start */
    /* */

    /* expand class */
    $("[data-expand]").click(function () {
        var item = $(this).attr("data-expand");
        $("[data-expandToggle='" + item + "']").toggleClass("toggleNotActive");
    });



    $("[data-gostep]").click(function () {
        ((sectionStep == 2) ? "" : $("[data-step='" + sectionStep + "']").toggleClass("hide"));
        sectionStep = $(this).attr("data-gostep");
        ((sectionStep == 3) ? $(".body").removeClass('stop-scroll') : $(".body").addClass('stop-scroll'));
        ((sectionStep == 3) ? stepLoading() : stepStandard());
        ((sectionStep == 1) ? $("[data-step='" + sectionStep + "']").removeClass("hide") : "");
    });

    /* send form */
    $("[data-submit='1']").click(function () {
        let submit = 0;
/* 
        $(".input-easy[aria-required='required']").each(function (index) {
            let t = $(this);
            let x = $(this).val();
            
            if (x == "") {
                console.log(x);
                t.closest(".error-block").html("This field cannot be empty.").removeClass("d-none");
            }
            else {
                submit = 1;
            }
        });
*/
            sessionStorage.setItem('submit', '1');
            $("#mainform").submit();
    });

    /* reset sending */
    $("[data-submit='0']").click(function () {
        sessionStorage.removeItem('submit');
        $("[data-step='4']").addClass("hide");
    });

    /* */
    /* onclick events end */
    /* */

    /* */
    /* onload events start */
    /* */
    window.addEventListener('load', function () {
        /* tooltip init */
        if ($(window).width() > 992) {
            $(function () {
                $('[data-tooltips="tooltip"]').tooltip();
            });
        }
    });

    /* */
    /* onload events end */
    /* */

    /* */
    /* onscroll events start */
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
    /* onload events end */
    /* */

    /* */
    /* onsresize events start */
    /* */
    $(window).resize(function () {
        scrollBottom();
    });
    /* */
    /* onload events end */
    /* */
}
);