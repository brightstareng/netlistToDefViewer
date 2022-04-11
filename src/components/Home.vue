<template>
  <div style="text-align: center">
    <div style="font-size: xx-large">Vehicles</div>
    <div style="display: flex; flex-direction: column">
      <router-link v-for="vehicle in vehicles" :key="vehicle" :to="vehicle">
        {{ vehicle.replace("_", " ") }}
      </router-link>
    </div>
  </div>
</template>

<script >
import axios from "axios";
export default {
  name: "Home",
  data() {
    return {
      vehicles: [],
    };
  },
  props: {
    msg: String,
  },
  created() {
    axios.get("http://localhost:5000").then((Response) => {
      this.vehicles = Response.data;
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
