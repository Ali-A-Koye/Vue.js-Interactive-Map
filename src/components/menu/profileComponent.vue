<template>
  <div id="menu-1">
    <div class="profile-page">
      <div
        class="page-header header-filter"
        data-parallax="true"
        style="background-image:url('http://wallpapere.org/wp-content/uploads/2012/02/black-and-white-city-night.png');    border-bottom:none;f"
      ></div>
      <div class="main main-raised">
        <div class="profile-content" style="border:10px solid black;">
          <div class="container hvr-bubble-float-bottom">
            <div class="row">
              <div class="col-md-6 ml-auto mr-auto">
                <div class="profile">
                  <div class="avatar">
                    <img
                      src="../../assets/images/logo1.png"
                      alt="Circle Image"
                      class="img-raised rounded-circle img-fluid"
                    />
                  </div>
                  <div class="name">
                    <h3 class="title hvr-shadow-radial" style="display:block">ARTYOM Fassbender</h3>

                    <a href="#pablo" class="btn btn-just-icon btn-link btn-dribbble">
                      <i class="fa fa-dribbble"></i>
                    </a>
                    <a href="#pablo" class="btn btn-just-icon btn-link btn-twitter">
                      <i class="fa fa-twitter"></i>
                    </a>
                    <a href="#pablo" class="btn btn-just-icon btn-link btn-pinterest">
                      <i class="fa fa-pinterest"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="description text-center">
              <p
                class="hvr-curl-bottom-left"
              >An artist of considerable range, Chet Faker — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure.</p>
            </div>
            <div class="row">
              <div class="col-md-6 ml-auto mr-auto">
                <div class="profile-tabs">
                  <ul class="nav nav-pills nav-pills-icons justify-content-center" role="tablist">
                    <li class="nav-item hvr-glow">
                      <a class="nav-link active" href="#studio" role="tab" data-toggle="tab">
                        <i class="material-icons">apartment</i>
                        USA
                      </a>
                    </li>
                    <li class="nav-item hvr-glow">
                      <a class="nav-link active" href="#studio" role="tab" data-toggle="tab">
                        <i class="material-icons">apartment</i>
                        UK
                      </a>
                    </li>
                    <li class="nav-item hvr-glow">
                      <a class="nav-link active" href="#studio" role="tab" data-toggle="tab">
                        <i class="material-icons">apartment</i>
                        KRD
                      </a>
                    </li>
                    <li class="nav-item hvr-glow">
                      <a class="nav-link active" href="#studio" role="tab" data-toggle="tab">
                        <i class="material-icons">apartment</i>
                        IQ
                      </a>
                    </li>
                    <li class="nav-item hvr-glow">
                      <a class="nav-link active" href="#studio" role="tab" data-toggle="tab">
                        <i class="material-icons">apartment</i>
                        BRZ
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      icons: ["umbrella", "camera", "coffee"],
      names: ["TRACY", "MARY", "JULIA"],
      paragraphHeaders: ["OUR HISTORY", "WHAT WE DO", "OUR TEAM"],
      selectedHeader: "OUR HISTORY",
    };
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
.profile-content {
  border-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='100' height='100' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cstyle%3Epath%7Banimation:stroke 5s infinite linear%3B%7D%40keyframes stroke%7Bto%7Bstroke-dashoffset:776%3B%7D%7D%3C/style%3E%3ClinearGradient id='g' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%232d3561' /%3E%3Cstop offset='25%25' stop-color='%23c05c7e' /%3E%3Cstop offset='50%25' stop-color='%23f3826f' /%3E%3Cstop offset='100%25' stop-color='%23ffb961' /%3E%3C/linearGradient%3E %3Cpath d='M1.5 1.5 l97 0l0 97l-97 0 l0 -97' stroke-linecap='square' stroke='url(%23g)' stroke-width='3' stroke-dasharray='388'/%3E %3C/svg%3E")
    5 !important;
  margin: 0;
}
.fade-enter {
  opacity: 0;
}
* {
  overflow: visible;
}
.fade-enter-active {
  transition: opacity 1.5s;
}
</style>