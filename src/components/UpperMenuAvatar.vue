<template>
  <div id="UpperMenu">
    <table class="tableSelect">
      <tr>
        <td>
          <img
            src="../assets/images/PostingAvatar.png"
            alt="Girl in a jacket"
            width="100%"
            height="100%"
            @click="ClickedAvatar($event,'PostingAvatar')"
            class="img-fluid hvr-bob"
          />
        </td>
        <td>
          <img
            src="../assets/images/PostingAvatar2.png"
            alt="Girl in a jacket"
            @click="ClickedAvatar($event,'PostingAvatar2')"
            width="100%"
            height="100%"
            class="img-fluid hvr-bob"
          />
        </td>
      </tr>
      <tr>
        <td>
          <img
            src="../assets/images/PostingAvatar3.png"
            alt="Girl in a jacket"
            @click="ClickedAvatar($event,'PostingAvatar3')"
            width="100%"
            height="100%"
            class="img-fluid hvr-bob"
          />
        </td>
        <td>
          <img
            src="../assets/images/PostingAvatar4.png"
            alt="Girl in a jacket"
            @click="ClickedAvatar($event,'PostingAvatar4')"
            width="100%"
            height="80%"
            class="img-fluid hvr-bob"
          />
        </td>
      </tr>
      <tr>
        <td>
          <img
            src="../assets/images/PostingAvatar.png"
            alt="Girl in a jacket"
            width="100%"
            height="100%"
            @click="ClickedAvatar($event,'PostingAvatar')"
            class="img-fluid hvr-bob"
          />
        </td>
        <td>
          <img
            src="../assets/images/PostingAvatar2.png"
            alt="Girl in a jacket"
            @click="ClickedAvatar($event,'PostingAvatar2')"
            width="100%"
            height="100%"
            class="img-fluid hvr-bob"
          />
        </td>
      </tr>
      <tr>
        <td>
          <img
            src="../assets/images/PostingAvatar3.png"
            alt="Girl in a jacket"
            @click="ClickedAvatar($event,'PostingAvatar3')"
            width="100%"
            height="100%"
            class="img-fluid hvr-bob"
          />
        </td>
        <td>
          <img
            src="../assets/images/PostingAvatar4.png"
            alt="Girl in a jacket"
            @click="ClickedAvatar($event,'PostingAvatar4')"
            width="100%"
            height="80%"
            class="img-fluid hvr-bob"
          />
        </td>
      </tr>
      <tr>
        <td>
          <img
            src="../assets/images/PostingAvatar.png"
            alt="Girl in a jacket"
            width="100%"
            height="100%"
            @click="ClickedAvatar($event,'PostingAvatar')"
            class="img-fluid hvr-bob"
          />
        </td>
        <td>
          <img
            src="../assets/images/PostingAvatar2.png"
            alt="Girl in a jacket"
            @click="ClickedAvatar($event,'PostingAvatar2')"
            width="100%"
            height="100%"
            class="img-fluid hvr-bob"
          />
        </td>
      </tr>
      <tr>
        <td>
          <img
            src="../assets/images/PostingAvatar3.png"
            alt="Girl in a jacket"
            @click="ClickedAvatar($event,'PostingAvatar3')"
            width="100%"
            height="100%"
            class="img-fluid hvr-bob"
          />
        </td>
        <td>
          <img
            src="../assets/images/PostingAvatar4.png"
            alt="Girl in a jacket"
            @click="ClickedAvatar($event,'PostingAvatar4')"
            width="100%"
            height="80%"
            class="img-fluid hvr-bob"
          />
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      avatar: true,
    };
  },
  mounted() {
    $("#UpperMenu").mCustomScrollbar({
      theme: "inset",
      scrollButtons: { enable: true },
    });
  },
  methods: {
    ClickedAvatar(event, picture) {
      $("td").css({ background: "transparent", opacity: "0.5" });
      event.path[1].style.background = "#d8aa46";
      event.path[1].style.opacity = "1";
      event.path[0].style.opacity = "1";
      this.$store.state.PostSelectedAvatar = picture;
    },
  },
};
</script>

<style scoped>
#UpperMenu {
  position: absolute;
  font-family: "Grandstander", cursive;
  bottom: 10%;
  left: 0;
  margin-left: 5px;
  width: 19%;
  height: 83vh;
  background-color: white;
  border-radius: 10px;
  text-align: start;
  overflow: hidden;
  display: block;
}

table {
  border-collapse: collapse;
  width: 100%;

  overflow: scroll;
}
td {
  width: 50%;
  text-align: center;
  overflow: hidden;
  height: 100px;
  max-height: 100px !important;
  cursor: pointer;
  transition-duration: 1s;
  border-radius: 10px;
}
td:hover {
  opacity: 1;
  background-color: #d8aa46;
}
img {
  opacity: 0.4;
  transition-duration: 0.5s;
}
img:hover {
  opacity: 1;
}
</style>