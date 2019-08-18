<template>
  <b-col sm="12">
    <b-card :title="country.name">
      <div @click="close" id="close">x</div>
      <b-table-lite responsive :fields="country.stats" :items="[{revenue:country.stats.revenue + ' €',units_sold:country.stats.units_sold}]"></b-table-lite>
    </b-card>
  </b-col>
</template>

<script>
export default {
  props: ["country"],
  methods: {
    close() {
      this.$store.dispatch('unfocus')
    }
  }
};
</script>

<style>
.card {
  background-image: linear-gradient(to top right, #2c3e50, 80%, #1661ac);
  width: 100%;
  color: white;
}
.card .table {
  color: white;
}

#close {
  position: absolute;
  right: -26px;
  z-index: 10;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  line-height: 50px;
  font-size: 1rem;
  top: -26px;
  background: white;
  box-shadow: 0 1px 12px rgba(0, 0, 0, 0.12), 0 1px 12px rgba(0, 0, 0, 0.24);
  color: #2c3e50;
  font-weight: thin;
}

#close:hover {
  cursor: pointer;
}
</style>

