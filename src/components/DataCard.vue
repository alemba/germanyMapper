<template>
  <b-col sm="12">
    <b-card :title="country.name">
      <b-table-lite responsive :fields="country.stats" :items="[{revenue:123,units_sold:12}]"></b-table-lite>
    </b-card>
  </b-col>
</template>

<script>
export default {
  props: ["country"]
};
</script>

<style>
.card {
  background-image: linear-gradient(to top right, #2c3e50, 80%, #1661ac);
  width:100%;
  color: white;
}
.card .table {
  color: white;
}
</style>

