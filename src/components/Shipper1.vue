<template>
<div class="Shipper1">
        <h1>Shipper1</h1>
    <p>blablablabalablabalbalablabalbal...</p>
    <Sidebar></Sidebar>
</div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue'

export default {
  name: "Shipper1",
  data() {
    return {
      msg: "Lieferant"
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