<template>
  <transition name="fade" mode="out-in">
    <div class="col-md-12 col-sm-12" style="width:97%;" :key="selectedHeader">
      <div class="toggle-content text-center">
        <div class="profile-page">
          <div
            class="page-header header-filter"
            data-parallax="true"
            style="background-image:url('http://wallpapere.org/wp-content/uploads/2012/02/black-and-white-city-night.png');    border-bottom:none;f"
          ></div>
          <div class="main main-raised">
            <div class="profile-content">
              <div class="container">
                <div class="row">
                  <div
                    class="col-md-6 ml-auto mr-auto"
                    style="margin: 0px !important;height: 20px;"
                  >
                    <div class="profile">
                      <div
                        class="hvr-bounce-in"
                        style="height: 170px;position: fixed;margin-left: -10%;"
                      >
                        <img
                          src="../../../../assets/images/logo2.png"
                          alt="Circle Image "
                          class="img-raised rounded-circle img-fluid"
                        />
                      </div>
                      <div class="name">
                        <h3
                          class="title hvr-float-shadow"
                          style="display: block;margin-top: -10px;width: 390px;"
                        >RAMAN KANABI</h3>

                        <a href class="btn btn-just-icon btn-link btn-dribbble hvr-bounce-in">
                          <i class="fa fa-dribbble"></i>
                        </a>
                        <a href class="btn btn-just-icon btn-link btn-twitter hvr-bounce-in">
                          <i class="fa fa-twitter"></i>
                        </a>
                        <a href class="btn btn-just-icon btn-link btn-pinterest hvr-bounce-in">
                          <i class="fa fa-pinterest"></i>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div class="description text-center">
                    <p
                      class="hvr-bounce-in"
                      style="margin-top: 21%;
    text-align: center;"
                    >An artist of considerable range, Chet Faker — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: ["selectedHeader"],
  data() {
    return {
      ParagraphHeader: "You can easily change icons by Example:",
      ParagraphBody:
        "In varius eros ac est interdum In varius eros ac est interdum, quis scelerisque elit semper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      paragraphButtom:
        "Donec mattis enim sit amet nisl faucibus, eu pulvinar nibh facilisis. Aliquam erat volutpat. Vivamus tempus, nisi varius imperdiet molestie, velit mi feugiat felis, sit amet fringilla mi massa sit amet arcu. Mauris dictum nisl id felis lacinia congue. Aliquam lectus nisi, sodales in lacinia quis, lobortis vel sem. Vestibulum elit nisi, placerat eget auctor ut, dictum at libero.",
    };
  },
  mounted() {},
  methods: {
    getParagraphFromServer() {
      //mounted can be used as well
    },
  },
};
</script>

<style scoped>
* {
  overflow: visible;
}

.fade-enter {
  opacity: 0;
}
.toggle-content {
  padding: 0;
}

.profile-page .profile .name {
  margin-top: 20px;
  margin-left: 60%;
  float: left;
}

.row {
  display: block;
  /* flex-wrap: wrap; */
  margin-right: -15px;
  margin-left: 30px;
}
.profile-page {
  height: 300px;
}
.fade-enter-active {
  transition: opacity 1.5s;
}
</style>