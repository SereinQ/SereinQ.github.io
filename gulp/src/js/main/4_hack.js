$(document).ready(function () {
    /* check if IE */
    if (navigator.appName === 'Microsoft Internet Explorer' || !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv:11/)) || (typeof $.browser !== "undefined" && $.browser.msie === 1)) {
        var catWidthIE = 0;
        var singleWidthIE = 0;
        $(".body").addClass("IE");
        singleWidthIE = $(".section-categories .list .single").first().width();
        $(".section-categories .list .single").each(function (index) {
            if ((index + 1) % 6) {
                catWidthIE = catWidthIE + singleWidthIE - 10;
            }
        });

        $(".section-categories .list").css("width", catWidthIE - 260);
    }
    
    

});