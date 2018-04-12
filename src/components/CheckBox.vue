<template>
    <div class="checkbox">
        <input type="checkbox" v-model="checked" @change="onChange" id="checkbox">
        <label for="checkbox" class="slider"></label>
        <label for="checkbox"><slot></slot></label>
    </div>
</template>

<script>
import { eventBus } from "../main.js";

export default {
  props: {
    defaultChecked: {
      type: Boolean
    }
  },
  data() {
    return {
      checked: this.defaultChecked
    };
  },

  methods: {
    onChange: function() {
      //this.$emit('checkbox-clicked', this.checked);
      eventBus.$emit("checkbox-clicked", this.checked);
    }
  }
};
</script>