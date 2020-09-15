<template>
  <ul class="tabs slideSet" style="width:97%;">
    <li class="col-md-4 col-sm-4" v-for="(icon,index) in icons" :key="index">
      <a href="#" :class="`icon-item ${index==0? 'active':''}`" @click="activeclass(icon,index)">
        <div class="logo-wrapper hvr-glow" style="background-color:transparent;">
          <h1 class="logo">
            <a href="#">
              <img
                src="../../../../assets/images/logo2.png"
                style="height:40%;width:40%;margin:auto;"
              />
              <span class="hvr-icon-fade">Raman Kanabi</span>
            </a>
          </h1>
        </div>
      </a>
    </li>
  </ul>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: ["icons"],
  mounted() {
    $(".slideSet").slick({
      slide: "li",
      centerMode: true,
      centerPadding: "60px",
      slidesToShow: 3,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 1000,
      cssEase: "ease-in-out",
    });
  },
  methods: {
    activeclass(clicked, index) {
      for (const count of this.icons) {
        $(`.fa-${count}`).parent().removeClass("active");
      }
      $(`.fa-${clicked}`).parent().addClass("active");
      this.selectedHeader = this.paragraphHeaders[index];
    },
  },
};
</script>

<style scoped>
.slick-slide {
  opacity: 0;
  transition: opacity 1.25s ease-out;
}

.slick-slide.slick-active {
  opacity: 1;
}

svg:not(:root) {
  overflow: hidden;
}
</style>