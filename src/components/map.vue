<template>
  <div>
    <div id="map"></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      accessToken:
        "pk.eyJ1IjoiYXJ0eW9tMmVmdyIsImEiOiJjanp2a215OGcwNWs3M21wZ3hpN3Bib2tuIn0.RyuwYpuTcGI81rHCHYf7Qw",
    };
  },
  computed: {
    ...mapGetters(["selectedType"]),
  },
  watch: {
    selectedType: function () {
      if (this.selectedType != "" && this.selectedType != false)
        this.createMap(this.selectedType);
    },
  },
  methods: {
    createMap(type) {
      $(".column").fadeOut();
      mapboxgl.accessToken = this.accessToken;

      var map = new mapboxgl.Map({
        container: "map",
        style: `mapbox://styles/artyom2efw/${type}`,
        attributionControl: false,
        center: [43.582036, 36.685985],
        zoom: 0,
      });
      map.addControl(new mapboxgl.NavigationControl());
      this.$store.state.MapObj = map;

      $(".map-overlay").fadeIn(500);
      $(".map-overlay3").fadeIn(500);
    },
    showPosition() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
          var positionInfo =
            "Your current position is (" +
            "Latitude: " +
            position.coords.latitude +
            ", " +
            "Longitude: " +
            position.coords.longitude +
            ")";
          console.log(positionInfo);
        });
      } else {
        alert("Sorry, your browser does not support HTML5 geolocation.");
      }
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
}
.mapboxgl-ctrl-logo {
  display: none !important;
}
.mapboxgl-ctrl-group {
  top: 0;
}

#map {
  width: 100%;
  height: 100vh;
}

.map-overlay {
  font: 12px/20px "Helvetica Neue", Arial, Helvetica, sans-serif;
  position: absolute;
  width: 40vh;
  height: 40vh;
  top: 0;
  left: 0;
  padding: 10px;
  padding-right: 0px;
}

.map-overlay2 {
  font: 12px/20px "Helvetica Neue", Arial, Helvetica, sans-serif;
  position: absolute;
  width: 80.6%;
  height: 100vh;
  top: 0;
  left: 0;
  padding: 10px;
  padding-right: 0px;
  right: 0;
  margin: auto 20%;
}

.map-overlay .map-overlay-inner {
  background-color: #fff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  padding: 10px;
  margin-bottom: 10px;
}
.map-overlay-height {
  height: 90vh;
}
</style>