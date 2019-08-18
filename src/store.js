import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: 'Country Inspector',
    selectedCountry: null,
    countries: [
      {
        focus: false,
        name: 'Bayern',
        stats: { revenue: 2819.31, units_sold: 121 },
        id: 'DE-BY_1_'
      },
      {
        focus: false,
        name: 'Bremen',
        stats: { revenue: 2819.31, units_sold: 121 },
        id: 'DE-HB_1_'
      },
      {
        focus: false,
        name: 'Hamburg',
        stats: { revenue: 2819.31, units_sold: 121 },
        id: 'DE-HH_1_'
      },
      {
        focus: false,
        name: 'Hessen',
        stats: { revenue: 2819.31, units_sold: 121 },
        id: 'DE-HE_1_'
      },
      {
        focus: false,
        name: 'Sachsen',
        stats: { revenue: 2819.31, units_sold: 121 },
        id: 'DE-SN_1_'
      },
      {
        focus: false,
        name: 'Thüringen',
        stats: { revenue: 2819.31, units_sold: 121 },
        id: 'DE-TH_1_'
      },
      {
        focus: false,
        name: 'Sachsen Anhalt',
        stats: { revenue: 2819.31, units_sold: 121 },
        id: 'DE-ST_1_'
      },
      {
        focus: false,
        name: 'Baden Württemberg',
        stats: { revenue: 2819.31, units_sold: 121 },
        id: 'DE-BW_1_'
      },
      {
        focus: false,
        name: 'Berlin',
        stats: { revenue: 2819.31, units_sold: 121 },
        id: 'DE-BE_1_'
      },
      {
        focus: false,
        name: 'Niedersachsen',
        stats: { revenue: 2819.31, units_sold: 121 },
        id: 'DE-NI_1_'
      },
      {
        focus: false,
        name: 'Mecklenburg Vorpommern',
        stats: { revenue: 2819.31, units_sold: 121 },
        id: 'DE-MV_1_'
      },
      {
        focus: false,
        name: 'Nordrhein-Westfalen',
        stats: { revenue: 2819.31, units_sold: 121 },
        id: 'DE-NW_1_'
      },
      {
        focus: false,
        name: 'Rheinland-Pfalz',
        stats: { revenue: 2819.31, units_sold: 121 },
        id: 'DE-RP_1_'
      },
      {
        focus: false,
        name: 'Saarland',
        stats: { revenue: 2819.31, units_sold: 121 },
        id: 'DE-SL_1_'
      },
      {
        focus: false,
        name: 'Schleswig-Holzstein',
        stats: { revenue: 2819.31, units_sold: 121 },
        id: 'DE-SH_1_'
      },
      {
        focus: false,
        name: 'Brandenburg',
        stats: { revenue: 2819.31, units_sold: 121 },
        id: 'DE-BB_1_'
      }
    ]
  },
  getters: {
    getSelectedCountry: state => {
      return state.selectedCountry;
    },
    getAllCountries: state => {
      return state.countries;
    }
  },
  mutations: {
    FOCUS_COUNTRY(state, country_id) {
      console.log(country_id);
      state.selectedCountry = state.countries.find(x => x.id == country_id);
    }
  },
  actions: {
    focusCountry({ commit }, country_id) {
      commit('FOCUS_COUNTRY', country_id);
    }
  }
});
