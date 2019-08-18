<template>
  <b-container fluid id="app">
    <b-row>
      <b-col class="text-center">
        <h1>{{title}}</h1>
      </b-col>
    </b-row>

    <b-row class="map_wrapper">
      <Map :selected="selectedCountry" countries="countries" />
    </b-row>
    <b-row id="overlay">
      <div class="card_wrapper">
        <DataCard v-if="selectedCountry" :country="selectedCountry" />
      </div>
    </b-row>
  </b-container>
</template>

<script>
import Map from "./components/Map.vue";
import DataCard from "./components/DataCard.vue";

export default {
  name: "app",
  components: {
    Map,
    DataCard
  },
  computed: {
    title() {
      return this.$store.state.title;
    },
    selectedCountry() {
      return this.$store.getters.getSelectedCountry;
    },
    countries() {
      return this.$store.getters.getAllCountries;
    }
  }
};
</script>

<style lang="scss">
body{
  background:#333;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}

#overlay {
  z-index: 2;

  .card_wrapper {
    position: fixed !important;
    bottom: 2vh;
    z-index: 3;
    .card {
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    }
  }
}

.map_wrapper {
  padding-bottom: 30vh;
}

h1 {
  padding: 12px;
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
}
</style>
