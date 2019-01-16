<template>
  <div>
    <div class="body p-0 m-0 bg-blue1" id="body">
      <main class="mx-auto w-100 relative main" ref="main">
        <header class="header"/>
        <section
          class="section-start standard-transition pointer d-flex align-items-center justify-content-center vh-100 bg-blue1 absolute s-steps bot hide px-5"
          data-step="1"
          data-gostep="2"
          ref="step1"
          v-on:click="changeSection(1, $refs.step1)"
        >
          <!--   <object
            class="main-logo p-0 img-fluid"
            type="image/svg+xml"
            :data="require('../images/static/logo.svg')"
          >Your browser does not support SVG</object>-->
          <svg
            id="Group_292"
            class="mainlogo"
            data-name="Group 292"
            xmlns="http://www.w3.org/2000/svg"
            width="1052.998"
            height="254.064"
            viewBox="0 0 1052.998 254.064"
          >
            <defs></defs>
            <g id="Group_288" data-name="Group 288" transform="translate(60 60)">
              <g id="Group_239" data-name="Group 239" transform="translate(107.889)" class="anim1">
                <g id="Group_236" data-name="Group 236">
                  <path
                    id="Path_72"
                    data-name="Path 72"
                    class="cls-1"
                    d="M128.594,0a67.032,67.032,0,1,0,67.032,67.032A67.1,67.1,0,0,0,128.594,0Zm0,131.664a64.649,64.649,0,1,1,64.649-64.649A64.711,64.711,0,0,1,128.594,131.664Z"
                    transform="translate(-61.58)"
                  ></path>
                </g>
                <g id="Group_237" data-name="Group 237" transform="translate(10.95 10.95)">
                  <path
                    id="Path_73"
                    data-name="Path 73"
                    class="cls-1"
                    d="M123.894,6.25a56.082,56.082,0,1,0,56.082,56.082A56.131,56.131,0,0,0,123.894,6.25Zm0,109.764a53.69,53.69,0,1,1,53.7-53.682A53.757,53.757,0,0,1,123.894,116.014Z"
                    transform="translate(-67.83 -6.25)"
                  ></path>
                </g>
                <g id="Group_238" data-name="Group 238" transform="translate(21.9 21.9)">
                  <path
                    id="Path_74"
                    data-name="Path 74"
                    class="cls-1"
                    d="M119.194,12.5a45.132,45.132,0,1,0,45.132,45.132A45.177,45.177,0,0,0,119.194,12.5Zm0,87.881a42.749,42.749,0,1,1,42.749-42.749A42.781,42.781,0,0,1,119.194,100.381Z"
                    transform="translate(-74.08 -12.5)"
                  ></path>
                </g>
              </g>
              <g
                id="Group_243"
                data-name="Group 243"
                transform="translate(261.312 0.018)"
                class="anim2"
              >
                <g id="Group_240" data-name="Group 240" transform="translate(0 22.019)">
                  <path
                    id="Path_75"
                    data-name="Path 75"
                    class="cls-1"
                    d="M199.065,123.431a52.713,52.713,0,0,1-11.143,1.156h-.053c-14.927,0-29.7-6.027-38.509-15.733l-.21-.228,1.77-1.594.21.21c8.375,9.233,22.461,14.962,36.757,14.962a50.638,50.638,0,0,0,10.7-1.1c20.551-4.415,34.042-22.548,31.4-42.206-2.173-16.171-15.26-27.542-35.023-30.415-14.84-2.155-22.373-7.814-22.373-16.8,0-11.476,5.782-17.871,17.187-18.957,12.264-1.156,18.641,5.028,19.8,6.29l.21.21-1.752,1.629-.21-.228c-1.034-1.1-6.675-6.588-17.818-5.519-4.1.4-15.032,1.454-15.032,16.592,0,7.621,6.85,12.492,20.341,14.437C216.2,49.181,230.04,61.3,232.353,78.6,235.174,99.481,220.86,118.771,199.065,123.431Z"
                    transform="translate(-149.15 -12.578)"
                  ></path>
                </g>
                <g id="Group_241" data-name="Group 241" transform="translate(1.437)">
                  <path
                    id="Path_76"
                    data-name="Path 76"
                    class="cls-1"
                    d="M226.55,15.217l-1.892,1.454-.175-.228c-4.66-6.027-17.748-15.7-37.2-13.823-21.567,2.067-34.953,16.819-34.953,38.492,0,19.114,14.647,32.657,39.175,36.232,6.325.929,17.117,3.924,18.414,13.613,1.437,10.687-7.2,18.5-16.066,20.393a31.7,31.7,0,0,1-6.412.648c-8.778,0-17.783-3.434-22.426-8.532l-.21-.228,1.77-1.594.21.21c5.484,6.027,17.152,9.181,26.578,7.148,7.814-1.664,15.47-8.462,14.209-17.73-1.1-8.147-10.74-10.74-16.4-11.581C165.37,75.942,149.97,61.505,149.97,41.112c0-23.021,14.209-38.684,37.108-40.857,20.481-1.962,34.357,8.34,39.315,14.734Z"
                    transform="translate(-149.97 -0.01)"
                  ></path>
                </g>
                <g id="Group_242" data-name="Group 242" transform="translate(8.129 11.012)">
                  <path
                    id="Path_77"
                    data-name="Path 77"
                    class="cls-1"
                    d="M193.28,117.381a41.577,41.577,0,0,1-8.672.876c-12.264,0-23.722-4.52-30.608-12.089l-.21-.228,1.77-1.594.21.21c8.007,8.8,23.915,13.315,37.02,10.512C207.664,111.88,217.476,99,215.618,85.109,213.481,69.218,196.924,65.136,189.9,64.1c-20.5-3-31.781-12.825-31.781-27.7,0-8.217,2.646-27.577,27.156-29.907,19.693-1.875,29.171,10,29.556,10.512l.175.245-1.892,1.454-.175-.228c-.088-.123-9.128-11.371-27.454-9.6C162.935,11.034,160.5,28.852,160.5,36.42c0,13.543,10.565,22.531,29.749,25.334,15.961,2.33,26.07,10.722,27.734,23.039C220,99.913,209.381,113.929,193.28,117.381Z"
                    transform="translate(-153.79 -6.296)"
                  ></path>
                </g>
              </g>
              <g
                id="Group_254"
                data-name="Group 254"
                transform="translate(545.769 0.473)"
                class="anim1"
              >
                <g id="Group_247" data-name="Group 247" transform="translate(30.065 54.645)">
                  <g id="Group_244" data-name="Group 244">
                    <rect
                      id="Rectangle_75"
                      data-name="Rectangle 75"
                      class="cls-1"
                      width="51.947"
                      height="2.383"
                    ></rect>
                  </g>
                  <g id="Group_245" data-name="Group 245" transform="translate(0 11.16)">
                    <rect
                      id="Rectangle_76"
                      data-name="Rectangle 76"
                      class="cls-1"
                      width="51.947"
                      height="2.383"
                    ></rect>
                  </g>
                  <g id="Group_246" data-name="Group 246" transform="translate(0 22.338)">
                    <rect
                      id="Rectangle_77"
                      data-name="Rectangle 77"
                      class="cls-1"
                      width="51.947"
                      height="2.383"
                    ></rect>
                  </g>
                </g>
                <g id="Group_248" data-name="Group 248" transform="translate(22.653)">
                  <rect
                    id="Rectangle_78"
                    data-name="Rectangle 78"
                    class="cls-1"
                    width="2.383"
                    height="133.118"
                  ></rect>
                </g>
                <g id="Group_249" data-name="Group 249" transform="translate(11.178)">
                  <rect
                    id="Rectangle_79"
                    data-name="Rectangle 79"
                    class="cls-1"
                    width="2.383"
                    height="133.118"
                  ></rect>
                </g>
                <g id="Group_250" data-name="Group 250">
                  <rect
                    id="Rectangle_80"
                    data-name="Rectangle 80"
                    class="cls-1"
                    width="2.383"
                    height="133.118"
                  ></rect>
                </g>
                <g id="Group_251" data-name="Group 251" transform="translate(109.676)">
                  <rect
                    id="Rectangle_81"
                    data-name="Rectangle 81"
                    class="cls-1"
                    width="2.383"
                    height="133.118"
                  ></rect>
                </g>
                <g id="Group_252" data-name="Group 252" transform="translate(98.2)">
                  <rect
                    id="Rectangle_82"
                    data-name="Rectangle 82"
                    class="cls-1"
                    width="2.383"
                    height="133.118"
                  ></rect>
                </g>
                <g id="Group_253" data-name="Group 253" transform="translate(87.022)">
                  <rect
                    id="Rectangle_83"
                    data-name="Rectangle 83"
                    class="cls-1"
                    width="2.383"
                    height="133.118"
                  ></rect>
                </g>
              </g>
              <g
                id="Group_268"
                data-name="Group 268"
                transform="translate(373.231 0.473)"
                class="anim1"
              >
                <g id="Group_258" data-name="Group 258" transform="translate(29.311 108.852)">
                  <g id="Group_255" data-name="Group 255" transform="translate(0 21.883)">
                    <rect
                      id="Rectangle_84"
                      data-name="Rectangle 84"
                      class="cls-1"
                      width="59.165"
                      height="2.383"
                    ></rect>
                  </g>
                  <g id="Group_256" data-name="Group 256">
                    <rect
                      id="Rectangle_85"
                      data-name="Rectangle 85"
                      class="cls-1"
                      width="59.165"
                      height="2.383"
                    ></rect>
                  </g>
                  <g id="Group_257" data-name="Group 257" transform="translate(0 10.95)">
                    <rect
                      id="Rectangle_86"
                      data-name="Rectangle 86"
                      class="cls-1"
                      width="59.165"
                      height="2.383"
                    ></rect>
                  </g>
                </g>
                <g id="Group_259" data-name="Group 259" transform="translate(8.635 13.138)">
                  <path
                    id="Path_78"
                    data-name="Path 78"
                    class="cls-1"
                    d="M238.932,16.531c-2.8,0-5.624.018-7.253.018-.263-.718-.578-1.472-.946-2.313-.981-2.067-2.26-4.345-4.538-5.641-2.348-1.349-5.922-1.139-7.516,1.332a4.738,4.738,0,0,0-.526,3.889,6.878,6.878,0,0,0,3.522,4.2c2.348,1.1,4.888,1.034,7.341.946l.946-.018a34.345,34.345,0,0,1,1.3,10.057l-.018,98.743h2.383l.018-98.446a38.6,38.6,0,0,0-1.209-10.372h2.313c1.279-.018,2.751-.018,4.187-.018H297.8V16.531H238.932Zm-16.224-.666a4.433,4.433,0,0,1-2.26-2.7,2.253,2.253,0,0,1,.228-1.927,2.681,2.681,0,0,1,2.33-1.086,4.143,4.143,0,0,1,2,.526c1.664.946,2.751,2.856,3.557,4.573.21.438.385.876.578,1.332h-.21C226.879,16.654,224.548,16.741,222.709,15.865Z"
                    transform="translate(-217.959 -7.769)"
                  ></path>
                </g>
                <g id="Group_260" data-name="Group 260" transform="translate(29.311 2.383)">
                  <path
                    id="Path_79"
                    data-name="Path 79"
                    class="cls-1"
                    d="M288.628,1.63h0Z"
                    transform="translate(-229.76 -1.63)"
                  ></path>
                </g>
                <g id="Group_261" data-name="Group 261" transform="translate(22.794 10.95)">
                  <rect
                    id="Rectangle_87"
                    data-name="Rectangle 87"
                    class="cls-1"
                    width="65.683"
                    height="2.383"
                  ></rect>
                </g>
                <g id="Group_265" data-name="Group 265" transform="translate(29.311 54.417)">
                  <g id="Group_262" data-name="Group 262" transform="translate(0 21.9)">
                    <rect
                      id="Rectangle_88"
                      data-name="Rectangle 88"
                      class="cls-1"
                      width="51.649"
                      height="2.383"
                    ></rect>
                  </g>
                  <g id="Group_263" data-name="Group 263">
                    <rect
                      id="Rectangle_89"
                      data-name="Rectangle 89"
                      class="cls-1"
                      width="51.649"
                      height="2.383"
                    ></rect>
                  </g>
                  <g id="Group_264" data-name="Group 264" transform="translate(0 10.95)">
                    <rect
                      id="Rectangle_90"
                      data-name="Rectangle 90"
                      class="cls-1"
                      width="51.649"
                      height="2.383"
                    ></rect>
                  </g>
                </g>
                <g id="Group_266" data-name="Group 266" transform="translate(10.95 29.276)">
                  <rect
                    id="Rectangle_91"
                    data-name="Rectangle 91"
                    class="cls-1"
                    width="2.383"
                    height="103.842"
                  ></rect>
                </g>
                <g id="Group_267" data-name="Group 267">
                  <path
                    id="Path_80"
                    data-name="Path 80"
                    class="cls-1"
                    d="M301.507.27V2.653H215.448l-.035,130.735H213.03L213.065.27Z"
                    transform="translate(-213.03 -0.27)"
                  ></path>
                </g>
              </g>
              <g
                id="Group_276"
                data-name="Group 276"
                transform="translate(844.522 0.473)"
                class="anim1"
              >
                <g id="Group_269" data-name="Group 269" transform="translate(88.477 131.033)">
                  <line id="Line_18" data-name="Line 18" class="cls-2" y2="0.298"></line>
                </g>
                <g id="Group_270" data-name="Group 270" transform="translate(22.776 119.785)">
                  <rect
                    id="Rectangle_92"
                    data-name="Rectangle 92"
                    class="cls-1"
                    width="65.683"
                    height="2.383"
                  ></rect>
                </g>
                <g id="Group_271" data-name="Group 271" transform="translate(8.614 0)">
                  <path
                    id="Path_81"
                    data-name="Path 81"
                    class="cls-1 anim-1"
                    d="M501.407,109.087c1.332-5.536,1.244-14.892,1.209-18.449L502.6.27h-2.383l.018,90.386v.911c.018.42.018.876.018,1.4,0,7.6-.438,13.017-1.314,16.1l-.929-.018c-2.453-.088-4.993-.175-7.341.946a6.9,6.9,0,0,0-3.522,4.2,4.625,4.625,0,0,0,.526,3.872,4.984,4.984,0,0,0,4.345,2.155,6.353,6.353,0,0,0,3.171-.841c2.243-1.279,3.557-3.557,4.538-5.641.368-.806.683-1.577.946-2.3l66.138.018v-2.383Zm-11.738,7.691a2.253,2.253,0,0,1-.21-1.945,4.4,4.4,0,0,1,2.26-2.681,10.1,10.1,0,0,1,4.362-.771c.613,0,1.244.018,1.857.053h.193c-.175.42-.35.876-.561,1.314-.823,1.734-1.892,3.644-3.574,4.59C492.629,118.128,490.492,118.058,489.668,116.779Z"
                    transform="translate(-486.947 -0.27)"
                  ></path>
                </g>
                <g id="Group_272" data-name="Group 272" transform="translate(0.018 100.758)">
                  <path
                    id="Path_82"
                    data-name="Path 82"
                    class="cls-1 anim-1"
                    d="M482.04,57.78v.6m2.383,0v-.6"
                    transform="translate(-482.04 -57.78)"
                  ></path>
                </g>
                <g id="Group_273" data-name="Group 273" transform="translate(10.95)">
                  <rect
                    id="Rectangle_93"
                    data-name="Rectangle 93"
                    class="cls-1"
                    width="2.383"
                    height="103.807"
                  ></rect>
                </g>
                <g id="Group_274" data-name="Group 274" transform="translate(0.018 100.758)">
                  <path
                    id="Path_83"
                    data-name="Path 83"
                    class="cls-1 anim-1"
                    d="M482.04,57.78v.6m2.383,0v-.6"
                    transform="translate(-482.04 -57.78)"
                  ></path>
                </g>
                <g id="Group_275" data-name="Group 275">
                  <path
                    id="Path_84"
                    data-name="Path 84"
                    class="cls-1 anim-1"
                    d="M482.04,57.78v.6m2.383,0v-.6"
                    transform="translate(-482.022 42.978)"
                  ></path>
                  <path
                    id="Path_85"
                    data-name="Path 85"
                    class="cls-1 anim-1"
                    d="M484.43,131.005V.27h-2.4l.018,133.118h88.459v-2.383Z"
                    transform="translate(-482.03 -0.27)"
                  ></path>
                </g>
              </g>
              <g id="Group_282" data-name="Group 282" transform="translate(0 0.473)" class="anim2">
                <g id="Group_281" data-name="Group 281" transform="translate(0 8.918)">
                  <g id="Group_277" data-name="Group 277" transform="translate(49.74 74.601)">
                    <path
                      id="Path_86"
                      data-name="Path 86"
                      class="cls-1"
                      d="M63.252,97.514H60.537l-3.644-6.658L34.94,49.089l2.1-1.139.14.263Z"
                      transform="translate(-23.464 -47.932)"
                    ></path>
                    <path
                      id="Path_87"
                      data-name="Path 87"
                      class="cls-1"
                      d="M30.633,48.2l26.21,49.337H54.127L52.69,94.946,28.39,49.1l2.085-1.156Z"
                      transform="translate(-28.39 -47.94)"
                    ></path>
                  </g>
                  <g id="Group_278" data-name="Group 278" transform="translate(25.807 8.935)">
                    <path
                      id="Path_88"
                      data-name="Path 88"
                      class="cls-1"
                      d="M58.075,32.57c0,.35-.018.683-.035,1.034l-.018.3a21.456,21.456,0,0,1-6.973,14.349A24.693,24.693,0,0,1,36.63,54.576l-.438.035c-.736.053-1.4.07-1.98.07H14.73V52.3H34.212c.543,0,1.139-.018,1.8-.07l.42-.018A22.271,22.271,0,0,0,49.42,46.5a19.047,19.047,0,0,0,6.22-12.72v-.3c.018-.315.035-.613.035-.911a18.522,18.522,0,0,0-3.907-11.336l-.35-.473a21.988,21.988,0,0,0-16.662-7.919l-.175-.018h-.368l-19.465.035-.018-2.383L34.9,10.46a24.368,24.368,0,0,1,18.431,8.865l.088.105a1.644,1.644,0,0,0,.158.21l.088.123A20.9,20.9,0,0,1,58.075,32.57Z"
                      transform="translate(-14.73 -10.46)"
                    ></path>
                  </g>
                  <g id="Group_279" data-name="Group 279">
                    <path
                      id="Path_89"
                      data-name="Path 89"
                      class="cls-1"
                      d="M78.788,36.406c0,.508-.018,1.034-.035,1.542a29.981,29.981,0,0,1-9.811,20.428,34.592,34.592,0,0,1-20.814,8.953c-.981.07-1.927.105-2.821.105H40V65.051h5.309c.788,0,1.664-.035,2.593-.088a32.356,32.356,0,0,0,19.43-8.322,27.694,27.694,0,0,0,9.04-18.764c.018-.543.035-1,.035-1.472a26.837,26.837,0,0,0-5.694-16.521c-.123-.175-.245-.333-.35-.473l-.07-.07A31.846,31.846,0,0,0,46.113,7.778c-.28-.018-.508-.018-.806-.018L2.4,7.778V129.543H0V5.4L45.289,5.36c.3,0,.6,0,.876.018A34.2,34.2,0,0,1,72.1,17.8l.193.245c.105.158.228.3.315.438A28.963,28.963,0,0,1,78.788,36.406Z"
                      transform="translate(0 -5.36)"
                    ></path>
                  </g>
                  <g id="Group_280" data-name="Group 280" transform="translate(9.268 8.918)">
                    <rect
                      id="Rectangle_94"
                      data-name="Rectangle 94"
                      class="cls-1"
                      width="2.383"
                      height="115.265"
                    ></rect>
                    <rect
                      id="Rectangle_95"
                      data-name="Rectangle 95"
                      class="cls-1"
                      width="2.383"
                      height="115.265"
                      transform="translate(9.216)"
                    ></rect>
                  </g>
                </g>
                <path
                  id="Path_90"
                  data-name="Path 90"
                  class="cls-1"
                  d="M80.54,17.177l-.385-.491c-.105-.14-.21-.28-.315-.4a44.082,44.082,0,0,0-33.376-16C46.078.27,45.692.27,45.289.27H0L.018,2.688l45.289-.053c.385,0,.753,0,1.1.018a41.761,41.761,0,0,1,31.606,15.12c.158.193.3.385.456.6l.175.245a35.31,35.31,0,0,1,7.429,21.6c0,.631-.018,1.174-.053,1.717l-.018.21A36.129,36.129,0,0,1,74.145,66.759a42.222,42.222,0,0,1-25.387,10.9l-.473.018q-1.629.105-3,.105H38.264l-.228-.456c-.245-.491-.491-1-.718-1.489a10.821,10.821,0,0,0-4.047-5.028c-2.12-1.226-5.361-1.034-6.8,1.209A4.217,4.217,0,0,0,26,75.554a6.213,6.213,0,0,0,3.189,3.784c2.12,1.016,4.485.929,6.57.858l1.016-.018c1.98,4.1,18.852,38.3,23.7,47.795l2.768,5.414h2.646l-3.241-6.377c-4.871-9.531-21.41-43.1-23.232-46.8h.613c1.945.018,3.732.035,6.658,0l.28-.053h0c.438-.018.894-.035,1.349-.07l.6-.035A44.667,44.667,0,0,0,75.757,68.528,38.574,38.574,0,0,0,88.371,42.283l.018-.21c.035-.561.053-1.156.053-1.84A37.714,37.714,0,0,0,80.54,17.177ZM35.653,77.849c-1.892.07-3.872.14-5.431-.613a3.807,3.807,0,0,1-1.927-2.278,1.869,1.869,0,0,1,.193-1.612,2.217,2.217,0,0,1,1.927-.876,3.572,3.572,0,0,1,1.717.438,8.808,8.808,0,0,1,3.084,3.977Z"
                  transform="translate(0 -0.27)"
                ></path>
              </g>
              <g
                id="Group_287"
                data-name="Group 287"
                transform="translate(734.338 0.473)"
                class="anim2"
              >
                <g id="Group_283" data-name="Group 283" transform="translate(13.333 119.785)">
                  <path
                    id="Path_91"
                    data-name="Path 91"
                    class="cls-1"
                    d="M426.75,68.64"
                    transform="translate(-426.75 -68.64)"
                  ></path>
                </g>
                <g id="Group_284" data-name="Group 284" transform="translate(10.95)">
                  <path
                    id="Path_92"
                    data-name="Path 92"
                    class="cls-1"
                    d="M426.75,68.64"
                    transform="translate(-424.367 51.145)"
                  ></path>
                  <path
                    id="Path_93"
                    data-name="Path 93"
                    class="cls-1"
                    d="M427.773,120.055V.27H425.39V122.438H502.9v-2.383Z"
                    transform="translate(-425.39 -0.27)"
                  ></path>
                </g>
                <g id="Group_285" data-name="Group 285">
                  <path
                    id="Path_94"
                    data-name="Path 94"
                    class="cls-1"
                    d="M419.14.27h2.383l.018,130.735H507.6v2.383H419.158Z"
                    transform="translate(-419.14 -0.27)"
                  ></path>
                </g>
                <g id="Group_286" data-name="Group 286" transform="translate(21.883 0.018)">
                  <path
                    id="Path_95"
                    data-name="Path 95"
                    class="cls-1"
                    d="M498.206,109.08v2.383H439.339c-2.873,0-5.764,0-7.394-.018h-.3v-20.8L431.63.28h2.4V90.631c.018,1.1.018,2.593,0,4.363V109.08c1.542.018,3.434.018,5.309.018h58.868Z"
                    transform="translate(-431.63 -0.28)"
                  ></path>
                </g>
              </g>
            </g>
            <g
              id="Group_289"
              data-name="Group 289"
              transform="translate(766.06 60.473)"
              class="anim2"
            >
              <rect
                id="Rectangle_96"
                data-name="Rectangle 96"
                class="cls-1"
                width="2.383"
                height="133.118"
              ></rect>
            </g>
            <g
              id="Group_290"
              data-name="Group 290"
              transform="translate(754.585 60.473)"
              class="anim2"
            >
              <rect
                id="Rectangle_97"
                data-name="Rectangle 97"
                class="cls-1"
                width="2.383"
                height="133.118"
              ></rect>
            </g>
            <g
              id="Group_291"
              data-name="Group 291"
              transform="translate(743.407 60.473)"
              class="anim2"
            >
              <rect
                id="Rectangle_98"
                data-name="Rectangle 98"
                class="cls-1"
                width="2.383"
                height="133.118"
              ></rect>
            </g>
          </svg>
        </section>
        <section class="section-loading hide s-steps" data-step="2" ref="step2">
          <!--  <audio
            :src="require('../audio/clearday.mp3')"
            class="d-none"
            controls
            loop="true"
            ref="loadingvideo"
          >
            <p>If you are reading this, it is because your browser does not support the audio element.</p>
          </audio>-->
          <video ref="loadingvideo" class="w-100">
            <source :src="require('../video/main_compressed.mp4')">
            <p>
              Your browser doesn't support HTML5 video. Here is
              a
              <a
                href="myVideo.mp4"
              >link to the video</a> instead.
            </p>
          </video>
          <div class="appel fixed w-100 text-right vh-100">
            <svg
              class="svg-i-hand svg-i-hand-dims pointer absolute center d-block d-md-none move-icons"
              v-on:click="changeSection(2, $refs.step3, $refs.volume, $refs.loadingvideo)"
              ref="ihand"
            ></svg>
            <svg
              class="svg-i-volume svg-i-volume-dims volume-icon pointer relative right-icos"
              data-volume="1"
              ref="volume"
              v-on:click="configMusic($refs.volume, $refs.loadingvideo)"
            ></svg>
            <svg
              class="svg-i-message svg-i-message-dims pointer absolute right-icos d-block d-md-none move-icons"
              v-on:click="changeSection(2, $refs.step3, $refs.volume, $refs.loadingvideo)"
              ref="imsg"
            ></svg>
            <div
              class="counter text-gray1 absolute pointer"
              data-scroll="body"
              v-on:click="changeSection(2, $refs.step3, $refs.volume, $refs.loadingvideo)"
            >
              <p class="counter-load m-0" ref="di0">Invitation</p>
              <div class="counter-load hide" ref="di1">
                <span ref="decimalsMin">01234567890123456789</span>
                <span ref="singleMin">01234567890123456789</span>
                <span class="data-divider">:</span>
                <span ref="decimalsSec">01234567890123456789</span>
                <span ref="singleSec">01234567890123456789</span>
              </div>
            </div>
          </div>
        </section>
        <section
          class="section-form bg-blue1 text-gray1 absolute s-steps hide"
          data-step="3"
          data-gostep="3"
          ref="step3"
        >
          <!--  <ul>
          <li v-for="(item, index) in array " :key="index">{{ item }}</li>
          <li v-if="index === 2" class="">{{ item }} </li>
          </ul>-->
          <div class="container text-center">
            <h2 class="pb-0 pb-xl-5" v-html="heroHeading"/>
            <h3 class="pt-5 pb-3 pb-xl-5">We invite you to receive more information as it becomes
              <br>available and prior to the commencement of sales this spring 2019.
              <br>
              <br>Please send us your contact information
            </h3>
            <form class="pt-5 mb-5 pb-3" id="mainform" ref="mainform">
              <div class="form-group mb-5 pb-3" data-required="true">
                <input class="input-easy" type="text" placeholder="FIRST NAME*">
                <p class="error-block d-none"></p>
              </div>
              <div class="form-group mb-5 pb-3" data-required="true">
                <input class="input-easy" type="text" placeholder="LAST NAME*">
                <p class="error-block d-none"></p>
              </div>
              <div class="form-group mb-5 pb-3">
                <input class="input-easy" type="text" placeholder="PHONE">
                <p class="error-block d-none"></p>
              </div>
              <div class="form-group mb-5 pb-3" data-required="true">
                <input class="input-easy" type="email" placeholder="EMAIL*">
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
              <button
                class="button btn-white-blue"
                type="button"
                data-submit="1"
                ref="submit1"
                v-on:click="handleSubmit($refs.submit1)"
              >
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
                <p>{{ addressCode }}</p>
              </div>
              <div
                class="col-12 col-md-4 text-right relative d-flex flex-row-reverse justify-content-between d-md-block"
              >
                <div class="links d-inline-flex align-items-center h-100 mr-md-5 pr-md-4">
                  <a
                    href="#"
                    class="d-inline-flex mr-2"
                    target="_blank"
                    data-tooltips="tooltip"
                    data-placement="bottom"
                    title="Go to our Twitter"
                  >
                    <svg class="svg-i-tw svg-i-tw-dims"></svg>
                  </a>
                  <a
                    href="#"
                    class="d-inline-flex mr-2"
                    target="_blank"
                    data-tooltips="tooltip"
                    data-placement="bottom"
                    title="Go to our Instagram"
                  >
                    <svg class="svg-i-ig svg-i-ig-dims"></svg>
                  </a>
                  <a
                    href="#"
                    class="d-inline-flex"
                    target="_blank"
                    data-tooltips="tooltip"
                    data-placement="bottom"
                    title="Go to our Facebook"
                  >
                    <svg class="svg-i-fb svg-i-fb-dims"></svg>
                  </a>
                </div>
                <div class="d-inline-block">
                  <p
                    class="pointer"
                    data-expand="1"
                    data-tooltips="tooltip"
                    data-placement="bottom"
                    title="See more informations"
                  >LEGAL</p>
                  <div
                    class="tooltip-source bg-gray1 d-flex align-items-center toggleNotActive pointer"
                    data-expand-toggle="1"
                    data-expand="1"
                    data-tooltips="tooltip"
                    data-placement="top"
                    title="Close"
                  >
                    <svg
                      class="svg-i-close-blue svg-i-close-blue-dims pointer d-md-none right-icos absolute"
                    ></svg>
                    <div class="icon-container">
                      <svg class="svg-i-holding svg-i-holding-dims"></svg>
                    </div>
                    <div class="text text-center text-md-justify text-container text-blue1">
                      <p v-html="legalDescription"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          class="section-end standard-transition d-flex align-items-center justify-content-center vh-100 text-center bg-color1 s-steps absolute hide bot"
          data-step="4"
          data-gostep="1"
          ref="step4"
        >
          <svg
            class="svg-i-close-blue svg-i-close-blue-dims absolute pointer right-icos"
            data-submit="0"
            ref="resetall"
            v-on:click="changeSection(4, $refs.step4)"
          ></svg>
          <div class="text-blue1">
            <h2>{{ thanksHeading }}</h2>
            <div class="text">
              <p v-html="thanksDescription"/>
            </div>
          </div>
        </section>
        <footer class="footer"></footer>
      </main>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      scrolled: false
    };
  },
  computed: {
    ...mapGetters([
      "store",
      "heroHeading",
      "thanksHeading",
      "thanksDescription",
      "legalDescription",
      "addressCode"
    ])
  },
  methods: {
    loadPage: function() {
      sessionStorage.getItem("submit") == "1"
        ? this.$refs.step4.classList.remove("hide")
        : this.$refs.step1.classList.remove("hide");
    },
    /* background music/video */
    stopVideo: function(dv, loadingvideo) {
      loadingvideo.pause();
    },
    playVideo: function(dv, loadingvideo) {
      var promise = loadingvideo.play();
      if (promise !== undefined) {
        promise.then(function() {}).catch(function(error) {});
      }
    },
    /* stepping */
    /* standard stepper */
    stepStandard: function(ds) {
      ds.classList.contains("hide")
        ? ds.classList.remove("hide")
        : ds.classList.add("hide");
    },
    /* loading tower */
    stepLoading: function(ds, main, dv, loadingvideo) {
      let di1 = this.$refs.di1;
      let di0 = this.$refs.di0;
      let topx = this.$refs.step2.offsetHeight - window.innerHeight;
      let secondsSingle = this.$refs.singleSec;
      let secondsDec = this.$refs.decimalsSec;
      let minutesSingle = this.$refs.singleMin;
      let minutesDec = this.$refs.decimalsMin;

      /* set speed */
      let towerSpeed = topx * 5;

      /* set transitions of fade in and fade out of sections */
      this.$refs.step3.style.transitionDuration = towerSpeed * 0.9 + "ms";

      /* minutes and seconds calc */
      let minutes = parseInt(topx / 60);
      let decimalsMin = parseInt(minutes / 10);
      let singleMin = minutes - decimalsMin * 10;
      let seconds = parseInt(topx - minutes * 60);
      let decimalsSec = parseInt(seconds / 10);
      let singleSec = seconds - decimalsSec * 10;

      /* hide 'invitation', show 'counter' */
      let delay = 0;
      if (document.body.clientWidth > 767) {
        delay = 0;
      } else {
        delay = 250;
      }

      setTimeout(() => {
        di0.classList.add("hide");
        di1.classList.remove("hide");
      }, delay);

      /* calc horizontally */
      let lineHeight = 30;
      let fullstack = lineHeight * 10;

      /* move counter elements */
      minutesDec.style.top = -(lineHeight * decimalsMin + fullstack);
      minutesSingle.style.top = -(lineHeight * singleMin + fullstack);
      secondsDec.style.top = -(lineHeight * decimalsSec + fullstack);
      secondsSingle.style.top = -(lineHeight * singleSec + fullstack);

      this.$refs.ihand.style.opacity = 0;
      this.$refs.imsg.style.opacity = 0;

      /* animation */
      setTimeout(function() {
        ds.classList.contains("hide")
          ? ds.classList.remove("hide")
          : ds.classList.add("hide");

        /* enable scrolling (reset disable scroll animation) */
        window.onscroll = function() {};

        /* scroll to top of page */
        let scrollStep = -window.scrollY / (towerSpeed / 15),
          scrollInterval = setInterval(function() {
            if (window.scrollY != 0) {
              window.scrollBy(0, 0.8 * scrollStep);
            } else clearInterval(scrollInterval);
          }, 15);

        [...di1.children].forEach(function(el) {
          //  el.style.top = "0px";
          el.style.transitionDuration = towerSpeed + "ms";
        });
        /* how many pixels to move vertically? */
        minutesDec.style.top = 0;
        minutesSingle.style.top = 0;
        secondsDec.style.transform = "translate(0,66px)";
        secondsSingle.style.top = 0;

        /* how many pixels to move vertically? */
        minutesDec.style.left = 40;
        minutesSingle.style.left = 20;
        secondsDec.style.left = -50;
        //   secondsSingle.style.left = -Math.random() * 30 + 5;
      }, 1000);

      setTimeout(() => {
        /* stop music with delay */
        this.stopVideo(dv, loadingvideo);
      }, towerSpeed + 1000);
    },
    /* disable scroll without overflow changes */
    disableScrolling: function() {
      let x = window.pageXOffset;
      let y = window.pageYOffset;
      window.onscroll = function() {
        window.scrollTo(x, y);
      };
    },
    /* scroll to bottom of page
    page starts from bottom before main animation */
    scrollBottom: function(e) {
      let scrollBot = document.body.scrollHeight - document.body.clientHeight;
      window.scrollTo(0, scrollBot);
    },
    /* main section changer */
    changeSection: function(sectionStep, ds, dv, loadingvideo) {
      if (sectionStep != 2) {
        ds.classList.contains("hide")
          ? ds.classList.remove("hide")
          : ds.classList.add("hide");
      }
      sectionStep = ds.getAttribute("data-gostep");
      sectionStep == 1 ? sessionStorage.setItem("submit", "0") : "";
      ds = this.$refs["step" + sectionStep];
      sectionStep == 3
        ? this.stepLoading(ds, this.$refs.main, dv, loadingvideo)
        : this.stepStandard(ds);
      sectionStep == 3
        ? this.playVideo(this.$refs.volume, this.$refs.loadingvideo)
        : "";
    },
    /* play or stop background music */
    configMusic: function(dv, loadingvideo) {
      let volume = dv.getAttribute("data-volume");
      if (volume == 1) {
        dv.setAttribute("data-volume", "0");
        loadingvideo.muted = true;
        dv.classList.add("svg-i-mute");
        dv.classList.add("svg-i-mute-dims");
        dv.classList.remove("svg-i-volume");
        dv.classList.remove("svg-i-volume-dims");
      } else {
        dv.setAttribute("data-volume", "1");
        loadingvideo.muted = false;
        dv.classList.remove("svg-i-mute");
        dv.classList.remove("svg-i-mute-dims");
        dv.classList.add("svg-i-volume");
        dv.classList.add("svg-i-volume-dims");
      }
    },
    /* send form */
    handleSubmit: function(submit) {
      let next = 1;
      let mainform = this.$refs.mainform;
      [...mainform.children].forEach(function(el) {
        /* text validation */
        if (el.hasAttribute("data-required")) {
          if (el.children[0].value == "") {
            el.children[1].innerHTML = "This field cannot be empty.";
            el.children[1].classList.remove("d-none");
          } else {
            el.children[1].innerHTML = "";
            el.children[1].classList.add("d-none");
          }
          if (next == 1) {
            if (el.children[0].value == "") {
              next = 0;
            } else {
              next = 1;
            }
          }

          /* email validation */
          if (next == 1) {
            if (el.children[0].type == "email") {
              let m = el.children[0].value;

              function validateEmail(email) {
                let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(m);
              }

              if (validateEmail(m)) {
                el.children[1].innerHTML = "";
                el.children[1].classList.add("d-none");
              } else {
                next = 0;
                el.children[1].innerHTML = "This is not email.";
                el.children[1].classList.remove("d-none");
              }
            }
          }
        }
      });
      if (next == 1) {
        sessionStorage.setItem("submit", "1");
        document.getElementById("mainform").submit();
      }
    }
  },
  mounted() {
    let sectionStep = "1";
    //  let loadingvideo = this.$refs.loadingvideo;
    let loadingvideo = this.$refs.loadingvideo;
    let cached = null;
    let dv = this.$refs.volume;
    this.stopVideo(dv, loadingvideo);
    let ds = this.$refs.step1;
    let main = this.$refs.main;
    this.loadPage();
    /* scripts onload */
    let self = this;
    window.addEventListener("load", function() {
      /* delayed start, anyway thats not the problem because text "rose hill appears after 1.5 second" */
      setTimeout(function() {
        self.scrollBottom();
        self.disableScrolling();
      }, 500);
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../assets/styles/main.scss";
@import "../assets/styles/css/sprite.css";
@import "../assets/fonts/stylesheet.css";
</style>
