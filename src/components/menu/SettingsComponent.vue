<template>
  <div id="menu-4" class="contact content">
    <div class="row">
      <div class="container-contact100">
        <div class="wrap-contact100" style="display: block;">
          <form class="contact100-form validate-form">
            <span class="contact100-form-title">Change Settings</span>

            <div
              class="wrap-input100 rs1-wrap-input100 validate-input"
              data-validate="Name is required"
            >
              <span class="label-input100">Your Name</span>
              <input class="input100" type="text" name="name" placeholder="Enter your name" />
              <span class="focus-input100"></span>
            </div>
            <div
              class="wrap-input100 rs1-wrap-input100 validate-input"
              data-validate="Name is required"
            >
              <span class="label-input100">Your Name</span>
              <input class="input100" type="text" name="name" placeholder="Enter your name" />
              <span class="focus-input100"></span>
            </div>
            <div
              class="wrap-input100 rs1-wrap-input100 validate-input"
              data-validate="Name is required"
            >
              <span class="label-input100">Your Name</span>
              <input class="input100" type="text" name="name" placeholder="Enter your name" />
              <span class="focus-input100"></span>
            </div>
            <div
              class="wrap-input100 rs1-wrap-input100 validate-input"
              data-validate="Valid email is required: ex@abc.xyz"
            >
              <span class="label-input100">Email</span>
              <input
                class="input100"
                type="text"
                name="email"
                placeholder="Enter your email addess"
              />
              <span class="focus-input100"></span>
            </div>

            <div class="wrap-input100 validate-input" data-validate="Message is required">
              <span class="label-input100">Message</span>
              <textarea class="input100" name="message" placeholder="Your message here..."></textarea>
              <span class="focus-input100"></span>
            </div>

            <div class="container-contact100-form-btn">
              <button class="contact100-form-btn">
                <span>Save</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      subject: "",
      message: "",
    };
  },
  methods: {
    sendData() {
      alert(
        "Name is " +
          this.name +
          "<> " +
          "Email is " +
          this.email +
          "<> " +
          "Subject is " +
          this.subject +
          "<> " +
          "Msg is " +
          this.message
      );
    },
  },
};
</script>

<style scoped>
* {
  font-family: Poppins-Regular;
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

.has-val.input100 + .focus-input100::before {
  width: 100%;
  background-color: #ff4b5a;
}

.container-contact100 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 15px;
  padding-top: 5px;
  background: transparent;
  position: relative;
  z-index: 1;
  margin: 0px;
}
.wrap-contact100 {
  display: block;
  box-sizing: border-box;
  width: 900px;
  background: #fff;
  border-radius: 10px;
  padding: 30px 100px 20px 100px;
  float: left;
  position: relative;
}

.contact100-form {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-bottom: 68px;
}

.contact100-form-title {
  display: block;
  width: 100%;
  font-size: 39px;
  color: #333333;
  line-height: 1.2;
  text-align: left;
  font-weight: 900;
  padding-bottom: 44px;
}

.validate-input {
  position: relative;
}
.rs1-wrap-input100 {
  width: 100%;
}
.wrap-input100 {
  width: 48%;
  position: relative;
  border-bottom: 2px solid #d9d9d9;
  padding-bottom: 13px;
  margin-bottom: 65px;
}
.container-contact100-form-btn {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: -25px;
}

.contact100-form-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px !important;
  min-width: 160px !important;
  height: 50px !important;
  background-color: #ff4b5a !important;
  border-radius: 25px !important;
  font-family: Poppins-Medium !important;
  font-size: 16px !important;
  color: #fff !important;
  line-height: 1.2 !important;
  transition: all 0.4s !important;
  box-shadow: 0 10px 30px 0px rgba(255, 75, 90, 0.5);
  -webkit-box-shadow: 0 10px 30px 0px rgba(255, 75, 90, 0.5);
  -o-box-shadow: 0 10px 30px 0px rgba(255, 75, 90, 0.5);
  -ms-box-shadow: 0 10px 30px 0px rgba(255, 75, 90, 0.5);
  outline: none !important;
  border: none;
  background: transparent;
}
.label-input100 {
  font-family: Poppins-Regular;
  font-size: 15px;
  color: #999999;
  line-height: 1.5;
  padding-left: 5px;
}
textarea.input100 {
  width: 100% !important;
  min-height: 110px;
  padding-top: 9px;
  padding-bottom: 13px;
}
.input100 {
  display: block;
  width: 100%;
  background: transparent;
  font-size: 18px;
  color: #555555;
  line-height: 1.2;
  padding: 0 5px;
}
textarea {
  outline: none;
  border: none;
}
button {
  outline: none !important;
  border: none;
  background: transparent;
  appearance: button;
  text-rendering: auto;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  text-align: center;
  cursor: default;
}
.focus-input100 {
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
}
.contact100-more-highlight {
  color: #ff4b5a;
}
.focus-input100::before {
  content: "";
  display: block;
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;

  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;

  background: #ff4b5a;
}
</style>>
</style>