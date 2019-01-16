import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    heroHeading: 'A new artistic vision<br> in residential real estate <br> built by Rockefeller Group <br> takes center stage on <br> New York City’s Rose Hill',
    thanksHeading: 'Thank You',
    thanksDescription: 'You will hear from us shortly',
    legalDescription: 'THE SPONSOR IS AP BLOCK 176 VENTURE URBAN RENEWAL, LLC, A ROCKEFELLER GROUP, AND MAKES NO REPRESENTATION OR WARRANTIES EXCEPT AS MAY BE SET FORTH IN THE PUBLIC OFFERING STATEMENT. NO OFFER IS MADE WHERE PROHIBITED BY LAW. RENDERING BY RECENT SPACES.',
    addressCode: "30 East 29th Street, New York, NY 10016",
    object: {

    },
    array: [
      'v-html="heroHeading"',
      'v-html="heroHeading"'
    ]
  },
  getters: {
    heroHeading: (state) => state.heroHeading,
    thanksHeading: (state) => state.thanksHeading,
    thanksDescription: (state) => state.thanksDescription,
    legalDescription: (state) => state.thanksDescription,
    addressCode: (state) => state.addressCode,
  }
});
