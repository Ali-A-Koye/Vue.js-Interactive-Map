<template>
  <div>
    <div v-if="login">
      <BeforeMap></BeforeMap>
      <MapComponent></MapComponent>
      <Create-Post></Create-Post>
      <MenuCard></MenuCard>
    </div>
    <div v-if="!login">
      <LoginComponenet></LoginComponenet>
    </div>
  </div>
</template>

<script>
import MenuCard from "./components/card.vue";
import BeforeMap from "./components/beforeMap/selection.vue";
import LoginComponenet from "./components/beforeMap/login.vue";

import MapComponent from "./components/map.vue";
import CreatePost from "./components/createPost.vue";

export default {
  data() {
    return {
      Type: "",
      login: false,
    };
  },
  components: {
    MenuCard,
    BeforeMap,
    MapComponent,
    CreatePost,
    LoginComponenet,
  },
  mounted() {},
  methods: {},
};
</script>

<style >
.marker {
  position: absolute;
  /* background-image: url("./assets/images/PostingAvatar.png"); */
  background-size: cover;
  width: 120px;
  height: 210px;
  overflow: visible;
  cursor: none;
}

.dropzone .dz-message {
  overflow: visible;
}
</style>
