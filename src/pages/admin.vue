<template>
  <div style="display: flex; flex-direction: column; align-items: center">
    <div
      style="
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-bottom: 5px;
        border: 2px solid rgba(115, 147, 179, 0.3);
        border-radius: 0.5rem;
      "
    >
      <label for="newFile">upload new netlist</label>
      <input
        type="file"
        name="newFile"
        id="newFile"
        style="border-radius: 0px"
        accept=".csv"
      />
    </div>
    <div
      v-for="vehicle in vehicles"
      :key="vehicle"
      style="display: flex; margin: 5px; align-items: flex-end"
    >
      <div>
        {{ vehicle.replace("_", " ") }}
      </div>
      <div
        style="
          color: red;
          border: red solid 1px;
          padding: 0px 5px;
          border-radius: 2rem;
          margin-left: 5px;
        "
        @click="deleteItem(vehicle)"
      >
        Delete
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Admin",
  data() {
    return {
      vehicles: [],
    };
  },
  created() {
    axios.get("http://localhost:5000").then((Response) => {
      this.vehicles = Response.data;
    });
  },
  methods: {
    async deleteItem(vehicle) {
      await axios
        .delete(`http://localhost:5000/delete/${vehicle}`)
        .then((Response) => {
          console.log("Clicked", vehicle);
        });
    },
  },
};
</script>

<style>
</style>