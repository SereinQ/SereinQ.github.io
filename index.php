<?php include "include/header.php"?>
<section class="section-start standard-transition pointer d-flex align-items-center justify-content-center vh-100 bg-blue1 absolute s-steps bot hide px-5"
  data-step="1" data-gostep="2">
  <object class="p-none img-fluid" type="image/svg+xml" data="images/static/logo.svg">
    Your browser does not support SVG
  </object>
</section>
<section class="section-loading hide s-steps" data-step="2">
<audio id="LoadingMusic"src="sounds/clearday.mp3" controls loop="true" hidden="true">
<p>If you are reading this, it is because your browser does not support the audio element.</p>
</audio>
  <div class="appel fixed w-100 text-right vh-100">
    <svg class="svg-i-volume volume-icon pointer relative right-icos" data-volume="1"></svg>
    <div class="counter text-gray1 absolute pointer" data-gostep="3" data-scroll="body">
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
    <h2 class="pb-0 pb-xl-5">
      A new artistic vision <br>
      in residential real estate <br>
      built by Rockefeller Group <br>
      takes center stage on <br>
      New York City’s Rose Hill
    </h2>
    <h3 class="pt-5 pb-3 pb-xl-5">
      We invite you to receive more information as it becomes <br>
      available and prior to the commencement of sales this spring 2019.<br><br>
      Please send us your contact information
    </h3>
    <form class="pt-5 mb-5 pb-3" id="mainform">
      <div class="form-group mb-5 pb-3">
        <input class="input-easy" type="text" placeholder="FIRST NAME*" aria-required="required">
        <p class="error-block d-none"></p>
      </div>
      <div class="form-group mb-5 pb-3">
        <input class="input-easy" type="text" placeholder="LAST NAME*" aria-required="required">
        <p class="error-block d-none"></p>
      </div>
      <div class="form-group mb-5 pb-3">
        <input class="input-easy" type="text" placeholder="PHONE">
        <p class="error-block d-none"></p>
      </div>
      <div class="form-group mb-5 pb-3">
        <input class="input-easy" type="email" placeholder="EMAIL*" aria-required="required">
        <p class="error-block d-none"></p>
      </div>
      <div class="form-group mb-5 pb-3">
        <input class="input-easy" type="text" placeholder="HOW DID YOU HEAR ABOUT US?">
        <p class="error-block d-none"></p>
      </div>
      <div class="d-flex justify-content-center">
        <p>ARE YOU A BROKER?</p>
        <div class="form-group ml-4 mb-5">
          <input type="radio" id="yes" name="broker" value="yes">
          <label for="yes">Yes</label>
        </div>
        <div class="form-group ml-4">
          <input type="radio" id="no" name="broker" value="no">
          <label for="no">No</label>
        </div>
        <p class="error-block d-none"></p>
      </div>
      <!-- submit in js code + sessionstorage -->
      <button class="button btn-white-blue" type="button" data-submit="1">
<span></span>
<span></span>
<span></span>
<span></span>
        <span>SEND</span>
      </button>
    </form>
  </div>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-md-8 d-none d-md-block">
        <p>
          30 East 29th Street, New York, NY 10016
        </p>
      </div>
      <div class="col-12 col-md-4 text-right relative d-flex flex-row-reverse justify-content-between d-md-block ">
        <div class="links d-inline-flex align-items-center h-100 mr-md-5 pr-md-4">
          <a href="#" title="Twitter" class="d-inline-flex mr-2" target="_blank" data-tooltips="tooltip" data-placement="bottom" title="Go to our Twitter">
            <svg class="svg-i-tw svg-i-tw-dims"></svg>
          </a>
          <a href="#" title="Instagram" class="d-inline-flex mr-2" target="_blank" data-tooltips="tooltip" data-placement="bottom" title="Go to our Instagram">
            <svg class="svg-i-ig svg-i-ig-dims"></svg>
          </a>
          <a href="#" title="Facebook" class="d-inline-flex" target="_blank" data-tooltips="tooltip" data-placement="bottom" title="Go to our Facebook">
            <svg class="svg-i-fb svg-i-fb-dims"></svg>
          </a>
        </div>
        <div class="d-inline-block">
          <p class="pointer" data-expand="1" data-tooltips="tooltip" data-placement="bottom" title="See more informations">LEGAL</p>
          <div class="tooltip-source bg-gray1 d-flex align-items-center toggleNotActive  pointer" data-expandToggle="1" data-expand="1"
            data-tooltips="tooltip" data-placement="top" title="Close">
            <svg class="svg-i-close-blue svg-i-close-blue-dims pointer d-md-none right-icos absolute"></svg>
            <div class="icon-container">
              <svg class="svg-i-holding svg-i-holding-dims"></svg>
            </div>
            <div class="text text-center text-md-justify text-container text-blue1">
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
<section class="section-end standard-transition d-flex align-items-center justify-content-center vh-100 text-center bg-color1 s-steps absolute hide bot" data-step="4">
  <svg class="svg-i-close-blue svg-i-close-blue-dims absolute pointer right-icos" data-gostep="1" data-submit="0"></svg>
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