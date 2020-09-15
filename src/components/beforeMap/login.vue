<template>
  <div class="divlogin">
    <loginAnimation />
    <form>
      <label>
        <input type="text" style="font-weight:500;" required />
        <div class="label-text" style="font-weight:100;">Username</div>
      </label>
      <label>
        <input type="password" style="font-weight:500;" required />
        <div class="label-text" style="font-weight:100;">Password</div>
      </label>
      <button>Login</button>
    </form>
  </div>
</template>


<script>
import loginAnimation from "./LoginAnimation.vue";

export default {
  components: {
    loginAnimation,
  },
};
</script>


<style scoped>
.divlogin {
  font-family: "Open Sans", Helvetica;
  font-weight: 100 !important;
  height: 100vh;
}

form {
  text-align: center;
  margin-top: 11em;
  background-color: #333333;
  height: 47%;
  width: 28%;
  margin-left: 36%;
  position: sticky;
  border-radius: 50px;
}

label {
  display: block;
  letter-spacing: 4px;
  padding-top: 30px;
  text-align: center;
}
form input,
form textarea {
  margin-bottom: 0px;
  -webkit-border-radius: 0px;
  border-radius: 0px;
}
label .label-text {
  color: #9b9b9b;
  cursor: text;
  font-size: 20px;
  line-height: 20px;
  text-transform: uppercase;
  -moz-transform: translateY(-34px);
  -ms-transform: translateY(-34px);
  -webkit-transform: translateY(-34px);
  transform: translateY(-34px);
  transition: all 0.3s;
}
label input {
  background-color: transparent;
  border: 0;
  border-bottom: 2px solid #4a4a4a;
  color: white;
  font-size: 36px;
  letter-spacing: -1px;
  outline: 0;
  padding: 5px 20px;
  text-align: center;
  transition: all 0.3s;
  width: 200px;
}
label input:focus {
  max-width: 100%;
  width: 400px;
}
label input:focus + .label-text {
  color: #f0f0f0;
  font-size: 13px;
  -moz-transform: translateY(-74px);
  -ms-transform: translateY(-74px);
  -webkit-transform: translateY(-74px);
  transform: translateY(-74px);
}
label input:valid + .label-text {
  font-size: 13px;
  -moz-transform: translateY(-74px);
  -ms-transform: translateY(-74px);
  -webkit-transform: translateY(-74px);
  transform: translateY(-74px);
}

button {
  background-color: #333333;
  border: 2px solid white;
  border-radius: 27px;
  color: white;
  cursor: pointer;
  font-size: 20px;
  margin-top: 20px;
  padding: 15px 30px;
  text-transform: uppercase;
  transition: all 200ms;
}
button:hover,
button:focus {
  background-color: white;
  color: #333333;
  outline: 0;
}
</style>