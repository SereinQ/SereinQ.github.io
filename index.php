<?php include "include/header.php"?>
<section class="section-start standard-transition pointer d-flex align-items-center justify-content-center vh-100 bg-blue1 absolute s-steps bot"
  data-step="1" data-goStep="2">
  <object class="p-none" type="image/svg+xml" data="images/static/logo.svg">
    Your browser does not support SVG
  </object>
</section>
<section class="section-loading hide s-steps " data-step="2">
  <div class="appel fixed w-100 text-right vh-100">
    <svg class="svg-i-volume svg-i-volume-dims pointer relative right-icos"></svg>
    <div class="counter text-gray1 absolute pointer" data-goStep="3" data-scroll="body">
      <p class="counter-load" data-invitation="0">Invitation</p>
      <div class="counter-load hide" data-invitation="1">
        <span data-decimalsMin>0123456789</span>
        <span data-singleMin>0123456789</span>
        <span class="data-divider">:</span>
        <span data-decimalsSec>0123456789</span>
        <span data-singleSec>0123456789</span>
      </div>
      </p>
    </div>
  </div>
  </div>
  <figure class="photo load">
    <img src="images/static/view-1.png" alt="loading">
    <img src="images/static/view-2.png" alt="loading">
  </figure>
</section>
<section class="section-form bg-blue1 text-gray1 absolute s-steps hide" data-step="3">
  <div class="container text-center">
    <h2 class="pb-5">
      A new artistic vision <br>
      in residential real estate <br>
      built by Rockefeller Group <br>
      takes center stage on <br>
      New York City’s Rose Hill
    </h2>
    <h3 class="pt-5 pb-5">
      We invite you to receive more information as it becomes <br>
      available and prior to the commencement of sales this spring 2019.<br><br>
      Please send us your contact information
    </h3>
    <form class="pt-5 mb-5 pb-3">
      <div class="form-group mb-5 pb-3">
        <input class="input-easy" type="text" placeholder="FIRST NAME*">
      </div>
      <div class="form-group mb-5 pb-3">
        <input class="input-easy" type="text" placeholder="LAST NAME*">
      </div>
      <div class="form-group mb-5 pb-3">
        <input class="input-easy" type="text" placeholder="PHONE">
      </div>
      <div class="form-group mb-5 pb-3">
        <input class="input-easy" type="text" placeholder="EMAIL*">
      </div>
      <div class="form-group mb-5 pb-3">
        <input class="input-easy" type="text" placeholder="HOW DID YOU HEAR ABOUT US?">
      </div>
      <div class="d-flex justify-content-center">
        <p>ARE YOU A BROKER?</p>
        <div class="form-group ml-4 mb-5">
          <input type="radio" id="huey" name="drone" value="huey" checked>
          <label for="huey">Huey</label>
        </div>
        <div class="form-group ml-4">
          <input type="radio" id="dewey" name="drone" value="dewey">
          <label for="dewey">Dewey</label>
        </div>
      </div>
      <button class="button btn-white-blue" type="submit">SEND</button>
    </form>
  </div>
  <div class="container-fluid">
    <div class="row px-5">
      <div class="col-12 col-md-8">
        <p>
          30 East 29th Street, New York, NY 10016
        </p>
      </div>
      <div class="col-12 col-md-4 text-right relative">
        <div class="d-inline-flex align-items-center h-100 mr-5 pr-4">
          <a href="#" class="d-inline-flex mr-2" target="_blank" data-tooltips="tooltip" data-placement="bottom" title="Go to our Twitter">
            <svg class="svg-i-tw svg-i-tw-dims"></svg>
          </a>
          <a href="#" class="d-inline-flex mr-2" target="_blank" data-tooltips="tooltip" data-placement="bottom" title="Go to our Instagram">
            <svg class="svg-i-ig svg-i-ig-dims"></svg>
          </a>
          <a href="#" class="d-inline-flex" target="_blank" data-tooltips="tooltip" data-placement="bottom" title="Go to our Facebook">
            <svg class="svg-i-fb svg-i-fb-dims"></svg>
          </a>
        </div>
        <div class="d-inline-block">
          <p class="pointer" data-expand="1" data-tooltips="tooltip" data-placement="bottom" title="See more informations">LEGAL</p>
          <div class="tooltip-source bg-gray1 absolute d-flex toggleNotActive" data-expandToggle="1" data-expand="1"
            data-tooltips="tooltip" data-placement="top" title="Close">
            <div class="icon-container">
              <svg class="svg-i-holding svg-i-holding-dims"></svg>
            </div>
            <div class="text text-justify text-container text-blue1">
              <p>
                THE SPONSOR IS AP BLOCK 176 VENTURE URBAN RENEWAL, LLC, A
                ROCKEFELLER GROUP, AND MAKES NO REPRESENTATION OR WARRANTIES
                EXCEPT AS MAY BE SET FORTH IN THE PUBLIC OFFERING STATEMENT. NO
                OFFER IS MADE WHERE PROHIBITED BY LAW. RENDERING BY RECENT SPACES.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="section-end standard-transition d-flex align-items-center justify-content-center vh-100 text-center bg-color1 s-steps absolute hide bot">
  <svg class="svg-i-close-blue svg-i-close-blue-dims absolute pointer right-icos" data-resetAll></svg>
  <div class="text-blue1">
    <h2>
      Thank You
    </h2>
    <div class="text">
      <p>
        You will hear from us shortly
      </p>
    </div>
  </div>
</section>
<?php include "include/footer.php"?>