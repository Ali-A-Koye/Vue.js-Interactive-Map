<template>
  <div>
    <div class="map-overlay3">
      <div
        class="logo-wrapper hvr-bob hvr-bounce-to-bottom"
        style="padding:0px;margin:0px;margin-top:2px;background-color:transparent;"
      >
        <h1 class="logo stayBackground" style="padding-top: 10px;" @click="ChangeCursor">
          <a href="#">
            <img
              :src="require(`../assets/images/${pictureChoose}.png`)"
              style="height:90%;width:90%;"
            />
          </a>
        </h1>
      </div>
    </div>
    <MouseAnimation :isOn="PostOn"></MouseAnimation>
    <div id="ClickedPosition">
      <h2 id="h2Position" class="hvr-hang">Position Selected :Pick Avatar And Click to Select</h2>
      <button class="PositionButton hvr-bounce-to-right" @click="PostingFormOn">GO!</button>
    </div>
    <transition name="slide">
      <component :is="AvatarSelector"></component>
    </transition>
  </div>
</template>

<script>
import MouseAnimation from "./MouseAnimation.vue";
import PostForm from "./postForm.vue";

import UpperMenuAvatar from "./UpperMenuAvatar.vue";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      PostOn: true,
      lastMarker: "",
      latitude: "",
      AvatarSelector: "",
      longitude: "",
    };
  },
  computed: {
    ...mapGetters(["PostSelectedPicture"]),
    pictureChoose() {
      if (this.PostOn == true) {
        return "logo4";
      } else {
        return "logo5";
      }
    },
  },
  components: {
    MouseAnimation,
    UpperMenuAvatar,
    PostForm,
  },
  methods: {
    ChangeCursor() {
      this.prePostMarkers();
      let CursorLayer = $(".mapboxgl-interactive")[0];
      if (this.PostOn) {
        CursorLayer.style = "cursor:none;overflow:visible";
        $("#follower").fadeIn(100);
        $(".stayBackground")[0].style = "background:#d8aa46";
        $(".map-overlay").fadeOut(500);
        $("#ClickedPosition").fadeIn(500);
        this.AvatarSelector = "UpperMenuAvatar";
        this.PostOn = false;
      } else {
        $(".map-overlay").fadeIn(500);
        $("#ClickedPosition").fadeOut(500);
        $("#follower").fadeOut(200);
        if (this.lastMarker) this.lastMarker.remove();
        $(".stayBackground")[0].style = "background:transparent";
        CursorLayer.style.cursor = "grab";
        this.AvatarSelector = "";
        this.PostOn = true;
      }
    },
    prePostMarkers() {
      let map = this.$store.state.MapObj;
      var lastMarker;
      let ListenerFunction = (e) => {
        if (this.lastMarker) this.lastMarker.remove();
        if (!this.PostOn) {
          var el = document.createElement("div");
          let image = document.createElement("img");
          image.setAttribute(
            "src",
            require(`../assets/images/${this.PostSelectedPicture}.png`)
          );
          el.appendChild(image);
          image.style = "width:100%;height:100%";
          el.className = "marker";
          var marker = new mapboxgl.Marker(el).setLngLat(e.lngLat).addTo(map);
          this.lastMarker = marker;
          this.latitude = e.lngLat.lat;
          this.longitude = e.lngLat.lng;
          $("#h2Position").text(
            `Position Selected : (${e.lngLat.lat.toFixed(
              6
            )}, ${e.lngLat.lng.toFixed(6)})`
          );
        }
      };
      map.on("click", ListenerFunction);
    },
    PostingFormOn() {
      $("#ClickedPosition").fadeOut(500);
      this.AvatarSelector = "";
      this.PostOn = false;
      this.ChangeCursor();
      if (this.lastMarker) this.lastMarker.remove();
      this.AvatarSelector = "PostForm";
      this.$store.state.Selectedlatitude = this.latitude;
      this.$store.state.Selectedlongitude = this.longitude;
    },
  },
};
</script>

<style scoped>
.PositionButton {
  float: right;
  width: 20%;
  height: 100%;
  margin: auto;
  background-color: transparent;
  border: none;
  font-size: 30px;
  pointer-events: all;
}
#ClickedPosition {
  position: absolute;
  font-family: "Grandstander", cursive;
  top: 0;
  right: 0%;
  border: 2px solid #d8aa46;
  width: 50%;
  height: 10vh;
  margin-right: 25%;
  background-color: white;
  border-radius: 10px;
  cursor: none;
  pointer-events: none;
  text-align: start;
  display: none;
}

#h2Position {
  float: left;
  line-height: 2.6;
  color: #d8aa46;
  margin-left: 10px;
  font-size: 27px;
  pointer-events: all;
}
.slide-enter {
  opacity: 0;
  /*transform: translateY(20px);*/
}

.slide-enter-active {
  animation: slide-in 1s ease-out forwards;
  transition: opacity 0.5s;
}

.slide-leave {
}

.slide-leave-active {
  animation: slide-out 1s ease-out forwards;
  transition: opacity 1s;
  opacity: 0;
  position: absolute;
}

.slide-move {
  transition: transform 1s;
}

@keyframes slide-in {
  from {
    transform: translateY(60px);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(60px);
  }
}
</style>