import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: 'Region Inspector',
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
        stats: { revenue: 223.99, units_sold: 21 },
        id: 'DE-HB_1_'
      },
      {
        focus: false,
        name: 'Hamburg',
        stats: { revenue: 524.31, units_sold: 54 },
        id: 'DE-HH_1_'
      },
      {
        focus: false,
        name: 'Hessen',
        stats: { revenue: 11.31, units_sold: 1 },
        id: 'DE-HE_1_'
      },
      {
        focus: false,
        name: 'Sachsen',
        stats: { revenue: 777.63, units_sold: 121 },
        id: 'DE-SN_1_'
      },
      {
        focus: false,
        name: 'Thüringen',
        stats: { revenue: 222.39, units_sold: 22 },
        id: 'DE-TH_1_'
      },
      {
        focus: false,
        name: 'Sachsen Anhalt',
        stats: { revenue: 2819.46, units_sold: 121 },
        id: 'DE-ST_1_'
      },
      {
        focus: false,
        name: 'Baden Württemberg',
        stats: { revenue: 219.66, units_sold: 221 },
        id: 'DE-BW_1_'
      },
      {
        focus: false,
        name: 'Berlin',
        stats: { revenue: 8121.38, units_sold: 621 },
        id: 'DE-BE_1_'
      },
      {
        focus: false,
        name: 'Niedersachsen',
        stats: { revenue: 13145.41, units_sold: 1221 },
        id: 'DE-NI_1_'
      },
      {
        focus: false,
        name: 'Mecklenburg Vorpommern',
        stats: { revenue: 885.98, units_sold: 373 },
        id: 'DE-MV_1_'
      },
      {
        focus: false,
        name: 'Nordrhein-Westfalen',
        stats: { revenue: 1432.91, units_sold: 481 },
        id: 'DE-NW_1_'
      },
      {
        focus: false,
        name: 'Rheinland-Pfalz',
        stats: { revenue: 833.61, units_sold: 342 },
        id: 'DE-RP_1_'
      },
      {
        focus: false,
        name: 'Saarland',
        stats: { revenue: 432.32, units_sold: 226 },
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
    },
    unfocus({commit}){
      commit('FOCUS_COUNTRY');
    }
  }
});
