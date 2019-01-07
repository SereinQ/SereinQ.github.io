
/* skrollrToggle v0.11 */
var t, b, objTable, base, i, pageH, obj;
function skrollrToggleCalc() {
    /* collect data */
    pageH = window.innerHeight;
    obj = document.querySelectorAll("[skrollrToggle]");


    for (i = 0; i < obj.length; i++) {
        objTable = JSON.parse(obj[i].getAttribute("skrollrToggle"));
    }
}

skrollrToggleCalc();

/* init data */
function skrollrToggleInit() {
    for (i = 0; i < obj.length; i++) {

        /* distance calculate */
        base = obj[i].getBoundingClientRect().top - pageH;
        t = base + (objTable.distanceTop);
        b = base * (-1) - (objTable.distanceBot);

        /* run */
        ((t < 0) && (b < pageH) ? (obj[i].classList.add('skrollrToggle-run')) : (obj[i].classList.remove('skrollrToggle-run')));
    }
}
