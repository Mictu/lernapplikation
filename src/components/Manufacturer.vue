<template>
  <div class="Manufacturer">
    <h1>Manufacturer</h1>
    <p>blablablabalablabalbalablabalbal...</p>
    <CheckBox v-model="checkbox">Click to activate next step</CheckBox>
    <Sidebar></Sidebar>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue'
import { eventBus } from '../main.js';
import CheckBox from '../components/CheckBox.vue'

export default {
  name: "Manufacturer",
  data() {
    return {
      msg: "Hersteller",
      checkbox: false
    };
  },
  components: {
      Sidebar,
      CheckBox,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
@import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
@import url("https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css");

</style>
