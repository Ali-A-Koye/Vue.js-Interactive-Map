<template>
  <div id="postFormOn">
    <div class="testbox">
      <form>
        <div class="banner">
          <vue-dropzone ref="myVueDropzone" id="dropzone" :options="dropzoneOptions"></vue-dropzone>
        </div>
        <div class="item">
          <div style="display:inline-block;">
            <p style="float:left;">Latitude</p>
            <p style="float:right;margin-left: 340px;">Longitude</p>
          </div>

          <div class="name-item">
            <input v-model="SelectedlatitudeGet" type="text" name="name" placeholder="Latitude" />
            <input v-model="SelectedlongitudeGet" type="text" name="name" placeholder="Longitude" />
          </div>
        </div>
        <div>
          <div class="item contact-item1">
            <p style="font-size:18px;">Description:</p>
            <textarea v-model="description" style="margin-top:10px" class="email"></textarea>
          </div>
        </div>

        <div class="btn-block hvr-bounce-in">
          <button type="submit" @click.prevent="CreatePostFunction">Create</button>
        </div>
      </form>
    </div>
  </div>
</template>


<script>
import vue2Dropzone from "vue2-dropzone";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      description: "iwedewih",
    };
  },
  components: {
    vueDropzone: vue2Dropzone,
  },
  mounted() {
    $(".dz-message").html("<span>Drop Your Pictures Here😋😋 </span>");
  },
  computed: {
    ...mapGetters([
      "PostSelectedPicture",
      "SelectedlatitudeGet",
      "SelectedlongitudeGet",
    ]),
  },
  data() {
    return {
      dropzoneOptions: {
        url: "https://httpbin.org/post",
        thumbnailWidth: 150,
        maxFilesize: 0.5,
        maxFiles: 4,
        headers: { "My-Awesome-Header": "header value" },
      },
    };
  },
  methods: {
    CreatePostFunction() {
      console.log("Data Sent for the Server");
      console.log(
        this.PostSelectedPicture,
        this.SelectedlatitudeGet,
        this.SelectedlongitudeGet,
        this.description
      );
      this.$parent.AvatarSelector = "";
    },
  },
};
</script>


<style scoped>
* {
  transition-duration: 1s;
}
#postFormOn {
  position: absolute;
  font-family: "Grandstander", cursive;
  top: 0;
  right: 0%;
  width: 50%;
  box-shadow: 0 0 10px 0 #d8aa46;
  height: 80vh;
  margin-top: 5%;
  margin-right: 25%;
  background-color: white;
  border-radius: 10px;
}
body,
div,
form,
input,
textarea,
p {
  padding: 0;
  margin: 0;
  outline: none;
  font-family: "Fjalla One", sans-serif;
  font-size: 14px;
  color: #666;
  line-height: 22px;
}
h1 {
  position: absolute;
  margin: 0;
  font-size: 32px;
  color: #fff;
  z-index: 2;
}
.testbox {
  display: flex;
  justify-content: center;
  align-items: center;
}
form {
  width: 100%;
  padding: 20px;
  border-radius: 6px;
  background: #fff;
  box-shadow: 0 0 10px 0 #d8aa46;
}
.banner {
  width: 100%;
  box-shadow: 0 0 20px 0 #d8aa46;
  font-family: "Helvetica Neue";
  overflow: visible !important;
  margin-bottom: 30px;
}

.banner::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
}
input,
textarea {
  margin-bottom: 10px;
  border-radius: 3px;
  box-shadow: 0 10px 0 0 #d8aa46;
}
input {
  width: calc(100% - 10px);
  padding: 5px;
}
textarea {
  width: 100%;
  padding: 5px;
}
.item:hover p,
input:hover::placeholder {
  color: #d8aa46;
}
.item input:hover,
.item textarea:hover {
  border: 1px solid #d8aa46;
  color: #d8aa46;
}
.item {
  position: relative;
  margin: 10px 0;
}
.btn-block {
  margin-top: 10px;
  text-align: center;
}
button {
  width: 150px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background: #d8aa46;
  font-size: 16px;
  color: #fff;
  cursor: pointer;
}
button:hover {
}
@media (min-width: 568px) {
  .name-item,
  .contact-item {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .email {
    height: 170px;
  }
  .contact-item1 {
    height: 210px;
  }
  .contact-item .item {
    width: calc(50% - 8px);
  }
  .name-item input {
    width: calc(50% - 20px);
  }
  .contact-item input {
    width: calc(100% - 12px);
  }
}

.dropzone {
  font-family: "Fjalla One", sans-serif;
  font-size: 28px;
  overflow: visible !important;
}
</style>