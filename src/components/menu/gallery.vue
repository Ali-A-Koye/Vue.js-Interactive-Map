<template>
  <div class="gallery content">
    <div class="row">
      <div style="overflow-y:scroll;width:99%;height:100vh;">
        <div
          class="col-md-4 col-ms-6"
          v-for="(icon,index) in [1,2,3,4,5,6,7,8,9,9,9,9]"
          :key="index"
        >
          <div class="g-item">
            <img :src="require(`../../assets/images/gallery/g${icon}.jpg`)" alt />

            <a
              data-rel="lightbox"
              class="overlay"
              :href="require(`../../assets/images/gallery/g${icon}.jpg`)"
            >
              <span>+</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    $('[data-rel="lightbox"]').lightbox();
  },
};
</script>

<style>
</style>