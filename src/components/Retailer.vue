<template>
<div class="Retailer">
      <h1>Retailer</h1>
    <p>blablablabalablabalbalablabalbal...</p>
    <Sidebar></Sidebar>
</div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue'

export default {
  name: "Retailer",
  data() {
    return {
      msg: "Händler"
    };
  },
  components: {
    Sidebar
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
@import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
@import url("https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css");

</style>