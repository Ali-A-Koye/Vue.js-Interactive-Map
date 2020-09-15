<template>
  <div id="menu-2" class="services content">
    <div class="row">
      <SearchInput></SearchInput>
      <FriendsSlider :icons="icons"></FriendsSlider>
      <ProfileFriend :selectedHeader="selectedHeader" />
      <!-- /.tabs -->
    </div>
  </div>
</template>

<script>
import ProfileFriend from "./Parts/FriendsProfile.vue";
import SearchInput from "./Parts/Search.vue";
import FriendsSlider from "./Parts/FriendsSlider.vue";

export default {
  components: {
    ProfileFriend,
    SearchInput,
    FriendsSlider,
  },
  data() {
    return {
      icons: ["cogs", "leaf", "users", "users", "users", "users"],
      paragraphHeaders: ["OUR SERVICES", "OUR SUPPORT", "TESTIMONIALS"],
      selectedHeader: "OUR SERVICES",
    };
  },

  methods: {},
};
</script>

<style >
.row {
  display: flex;
  flex-wrap: wrap;
}
.services .icon-item {
  padding: 0;
}
.logo-wrapper {
  padding: 0;
  border-radius: 50px 0px;
}
</style>