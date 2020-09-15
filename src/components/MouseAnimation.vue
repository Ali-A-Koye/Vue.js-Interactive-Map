<template>
  <div id="follower">
    <div id="circle1"></div>
    <div id="circle2"></div>
  </div>
</template>
<script>
export default {
  props: ["isOn"],
  data() {
    return {
      PostOn: true,
      PostCancelPhoto: "logo4",
    };
  },
  watch: {
    isOn: function () {
      if (this.isOn == false) {
        console.log("Hi");
        let CursorLayer = document.getElementsByClassName(
          "mapboxgl-interactive"
        )[0];
        var follower, init, mouseX, mouseY, positionElement, printout, timer;

        follower = document.getElementById("follower");

        printout = document.getElementById("printout");

        mouseX = (event) => {
          return event.clientX;
        };

        mouseY = (event) => {
          return event.clientY;
        };
        positionElement = (event) => {
          var mouse;
          mouse = {
            x: mouseX(event),
            y: mouseY(event),
          };

          follower.style.top = mouse.y + "px";
          return (follower.style.left = mouse.x + "px");
        };

        timer = false;

        CursorLayer.onmousemove = init = (event) => {
          var _event;
          _event = event;
          return (timer = setTimeout(() => {
            return positionElement(_event);
          }, 1));
        };
      }
    },
  },
};
</script>

<style scoped>
#follower {
  overflow: visible;
  position: absolute;
  top: 50%;
  left: 50%;
  cursor: none;
  pointer-events: none;
  display: none;
}
#follower #circle1 {
  position: absolute;
  -webkit-animation: pulse 2s infinite; /* Chrome, Safari, Opera */
  animation: pulse 2s infinite;
  background: #fff;
  border-radius: 50%;
  height: 0em;
  width: 0em;
  margin-top: 0em;
  margin-left: 0em;
  cursor: none;
  pointer-events: none;
}
#follower #circle2 {
  position: absolute;
  -webkit-animation: pulse 4s infinite; /* Chrome, Safari, Opera */
  animation: pulse 4s infinite;
  background: rgba(200, 0, 0, 0.8);
  border-radius: 50%;
  height: 0em;
  width: 0em;
  margin-top: 0em;
  margin-left: 0em;
  cursor: none;
  pointer-events: none;
}
@-moz-keyframes pulse {
  0% {
    opacity: 0.2;
    height: 1em;
    width: 1em;
    margin-top: -0.5em;
    margin-left: -0.5em;
  }
  50% {
    opacity: 0.9;
    height: 3em;
    width: 3em;
    margin-top: -1.5em;
    margin-left: -1.5em;
  }
  100% {
    opacity: 0.2;
    height: 1em;
    width: 1em;
    margin-top: -0.5em;
    margin-left: -0.5em;
  }
}
@-webkit-keyframes pulse {
  0% {
    opacity: 0.2;
    height: 1em;
    width: 1em;
    margin-top: -0.5em;
    margin-left: -0.5em;
  }
  50% {
    opacity: 0.9;
    height: 3em;
    width: 3em;
    margin-top: -1.5em;
    margin-left: -1.5em;
  }
  100% {
    opacity: 0.2;
    height: 1em;
    width: 1em;
    margin-top: -0.5em;
    margin-left: -0.5em;
  }
}
@-o-keyframes pulse {
  0% {
    opacity: 0.2;
    height: 1em;
    width: 1em;
    margin-top: -0.5em;
    margin-left: -0.5em;
  }
  50% {
    opacity: 0.9;
    height: 3em;
    width: 3em;
    margin-top: -1.5em;
    margin-left: -1.5em;
  }
  100% {
    opacity: 0.2;
    height: 1em;
    width: 1em;
    margin-top: -0.5em;
    margin-left: -0.5em;
  }
}
@keyframes pulse {
  0% {
    opacity: 0.2;
    height: 1em;
    width: 1em;
    margin-top: -0.5em;
    margin-left: -0.5em;
  }
  50% {
    opacity: 0.9;
    height: 3em;
    width: 3em;
    margin-top: -1.5em;
    margin-left: -1.5em;
  }
  100% {
    opacity: 0.2;
    height: 1em;
    width: 1em;
    margin-top: -0.5em;
    margin-left: -0.5em;
  }
}
</style>