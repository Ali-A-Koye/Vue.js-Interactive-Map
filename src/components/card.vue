<template>
  <div>
    <div class="map-overlay" style="display: none;">
      <div class="row">
        <div class="col-lg-12 col-md-5 col-sm-12">
          <div class="sidebar-menu">
            <div class="menu-wrapper">
              <logoCard />
              <ul class="menu">
                <li>
                  <a class="homebutton hvr-hang" href="#" @click="SlideWithHome">MAP</a>
                </li>
                <li>
                  <a
                    class="show-1 hvr-hang"
                    href="#"
                    @click="selectedComponent='profileComponent'"
                  >PROFILE</a>
                </li>
                <li>
                  <a
                    class="show-2 hvr-hang"
                    href="#"
                    @click="selectedComponent='FriendsComponent'"
                  >FRIENDS</a>
                </li>
                <li>
                  <a class="hvr-hang" href="#" @click="selectedComponent='galleryCard'">PICTURES</a>
                </li>
                <li>
                  <a
                    class="show-4 hvr-hang"
                    href="#"
                    @click="selectedComponent='SettingsComponent'"
                  >SETTINGS</a>
                </li>
                <li>
                  <a class="hvr-hang" href="#" @click="SlideWithHome">LOG OUT</a>
                </li>
              </ul>
              <a href="#" class="toggle-menu" @click="toggleMenu">
                <i class="fa fa-bars"></i>
              </a>
            </div>
          </div>

          <!--   <div class="col-lg-8 col-md-8 col-sm-12">
        <div id="menu-container">
          <transition name="fade" mode="out-in">
            <component :is="selectedComponent"></component>
          </transition>
        </div>
          </div>-->
        </div>
      </div>
    </div>
    <div class="map-overlay2" style="display: none;">
      <div id="menu-container">
        <transition name="fade" mode="out-in">
          <component :is="selectedComponent"></component>
        </transition>
      </div>
    </div>
  </div>
</template>



<script>
import logoCard from "./logo.vue";
import profileComponent from "./menu/profileComponent.vue";
import FriendsComponent from "./menu/Friends/FriendsComponent.vue";
import galleryCard from "./menu/gallery.vue";
import SettingsComponent from "./menu/SettingsComponent.vue";

export default {
  data() {
    return {
      selectedComponent: "",
      time: false,
    };
  },
  watch: {
    selectedComponent: function () {
      if (this.selectedComponent != "") {
        document.getElementsByClassName("map-overlay2")[0].style.display =
          "block";
        document.getElementsByClassName(
          "mapboxgl-ctrl-group"
        )[0].style.display = "none";
        document.getElementsByClassName("map-overlay3")[0].style.display =
          "none";
      } else {
        document.getElementsByClassName("map-overlay2")[0].style.display =
          "none";
        document.getElementsByClassName(
          "mapboxgl-ctrl-group"
        )[0].style.display = "block";

        document.getElementsByClassName("map-overlay3")[0].style.display =
          "block";
      }
    },
  },
  components: {
    profileComponent,
    FriendsComponent,
    galleryCard,
    SettingsComponent,
    logoCard,
  },
  props: {
    handleUserAction: {
      // type: Function,
    },
  },
  methods: {
    toggleMenu() {
      $(".menu").slideToggle(400);
      console.log(this.time);
      this.ToggleTimeOut(this.time);
      this.time = !this.time;
      this.selectedComponent = "";
      return false;
    },
    SlideWithHome() {
      $(".menu").slideUp(0);
      this.ToggleTimeOut();
      this.time = !this.time;
      this.selectedComponent = "";
    },
    ToggleTimeOut(time) {
      if (time) {
        setTimeout(function () {
          document
            .getElementsByClassName("map-overlay")[0]
            .classList.toggle("map-overlay-height");
        }, 400);
      } else {
        document
          .getElementsByClassName("map-overlay")[0]
          .classList.toggle("map-overlay-height");
      }
    },
  },
};
</script>
<style >
.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 1.5s;
}
</style>