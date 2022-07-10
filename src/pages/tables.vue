<template>
  <div>
    <input
      type="text"
      placeholder="Search for component..."
      v-model.lazy="searchTerm"
    />
    <div v-if="!isLoaded && isData">Loading...</div>
    <div v-else-if="!isData">No Data</div>
    <div v-else>
      <table>
        <thead>
          <tr>
            <th colspan="2">From</th>
            <th colspan="1">Circuits</th>
            <th colspan="2">To</th>
          </tr>
          <tr>
            <th>
              <div>Unique ID Conn. From</div>
              <div>Service Conn. From</div>
              <div>[Conn.From]</div>
            </th>
            <th>
              <div>From</div>
              <div>Color</div>
              <div>Gauge</div>
            </th>
            <th>
              <div>Circuit ID</div>
              <div>Function</div>
              <div>Option</div>
            </th>
            <th>
              <div>To</div>
              <div>Color</div>
              <div>Gauge</div>
            </th>
            <th>
              <div>Unique ID Conn. To</div>
              <div>Service Conn. To</div>
              <div>[Conn.To]</div>
            </th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="row in filteredRows" :key="row">
            <td>
              <div>{{ row["Unique ID Conn"][" From"] }}</div>
              <div class="less">
                {{ row["Chrysler Service Conn"][" From"] }}
              </div>
              <div class="less">{{ row["Conn"][" From"] }}</div>
            </td>
            <td>
              <div>{{ row["Pin From"] }}</div>
              <div>{{ row.Col }}</div>
              <div class="less">{{ row.Gauge }}</div>
            </td>
            <td>
              <div>{{ row["Chrysler Circuit ID"] }}</div>
              <div @click="handler(row.Function)">
                {{ row.Function }}
              </div>
              <div style="font-style: italic">{{ row.Option }}</div>
            </td>
            <td>
              <div>{{ row["Pin To"] }}</div>
              <div>{{ row.Col }}</div>
              <div class="less">{{ row.Gauge }}</div>
            </td>
            <td>
              <div>{{ row["Unique ID Conn"][" To"] }}</div>
              <div class="less">{{ row["Chrysler Service Conn"][" To"] }}</div>
              <div class="less">{{ row["Conn"][" To"] }}</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "tables",
  data() {
    return {
      searchTerm: "",
      isData: true,
      isLoaded: false,
      vehicle: this.$route.params["vehicle"],
      sourceData: [],
    };
  },
  methods: {
    handler(circuitFunction) {
      alert(circuitFunction);
    },
  },
  async mounted() {
    try {
      await axios
        .get(`http://localhost:5000/data/${this.vehicle}`)
        .then((Response) => {
          this.sourceData = Response.data;
          this.isLoaded = true;
        });
    } catch (err) {
      this.isData = false;
      console.error(err + " No Data");
    }
  },
  computed: {
    filteredRows() {
      return this.sourceData.filter((row) => {
        const connFrom = row["Unique ID Conn"][" From"].toLowerCase();
        const connTo = row["Unique ID Conn"][" To"].toLowerCase();
        const circuitID = row["Chrysler Circuit ID"].toLowerCase();
        const searchTerm = this.searchTerm.toLowerCase();

        return (
          connFrom.includes(searchTerm) ||
          connTo.includes(searchTerm) ||
          circuitID.includes(searchTerm)
        );
      });
    },
  },
};
</script>

<style>
body {
  font-family: Lato, sans-serif;
}

.less {
  font-weight: lighter;
}

tbody tr td {
  color: #666;
}

th {
  border-bottom: 2px solid black;
  color: gray;
  background-color: white;
  font-size: smaller;
  position: sticky;
  top: 0;
}

tr td {
  text-align: center;
  padding: 10px;
  font-weight: bold;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

thead tr:first-of-type {
  border-bottom: 1px solid;
}

table {
  margin-top: 1rem;
  width: 100%;
  border-collapse: collapse;
}

button {
  letter-spacing: 1px;
  padding: 4px 9px;
  background-color: #706f72;
  border: 0;
  border-radius: 4px;
  font-size: 0.75em;
  font-weight: 600;
  color: #fff;
}

input {
  border-radius: 0.5rem;
}
</style>