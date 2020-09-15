<template>
  <div>
    <div class="column hvr-grow" style="background-color:#4a4545;" @click="selection(dark)">
      <h2 class="hvr-hang" style="color:white;">Dark</h2>
      <p></p>
    </div>

    <div class="column hvr-grow" style="background-color:#f3f2f2;" @click="selection(light)">
      <h2 class="hvr-hang">Light</h2>
      <p></p>
    </div>

    <div
      class="column hvr-grow"
      style="background-color:rgb(250, 128, 114);"
      @click="selection(pink)"
    >
      <h2 class="hvr-hang">Pink</h2>
      <p></p>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      pink: "ckehiq5ke2dje19rtp79ks0to",
      light: "ckehipgm63ucb19unxlkugqkc",
      dark: "ckehiqjf42tiy1apv7fvurvzj",
    };
  },
  mounted() {},
  methods: {
    ...mapMutations(["selectedMap"]),
    selection(selected) {
      this.selectedMap(selected);
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  overflow: hidden;
}

.column {
  float: left;
  width: 33.33%;
  padding: 10px;
  height: 100vh;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
}

h2 {
  margin-top: 45vh;
  font-family: "Fjalla One", sans-serif;
  font-size: 110px;
}
/* Clear floats after the columns */
.row {
  margin: 0;
  padding: 0;
}
</style>