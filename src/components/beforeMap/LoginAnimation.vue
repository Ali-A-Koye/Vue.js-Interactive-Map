<template>
  <div>
    <div id="particles-js"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    particlesJS("particles-js", {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 700,
          },
        },
        color: {
          value: "#ffffff",
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000",
          },
          polygon: {
            nb_sides: 5,
          },
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: {
            enable: false,
            speed: 0.1,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: false,
            speed: 10,
            size_min: 0.1,
            sync: false,
          },
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 2,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "grab",
          },
          onclick: {
            enable: true,
            mode: "push",
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 140,
            line_linked: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
          push: {
            particles_nb: 4,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      retina_detect: true,
    });
  },
};
</script>

<style scoped>
canvas {
  display: block;
  vertical-align: bottom;
}

#particles-js {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #333333;
}

.text {
  position: absolute;
  top: 50%;
  right: 50%;
  -webkit-transform: translate(50%, -50%);
  transform: translate(50%, -50%);
  color: #fff;
  max-width: 90%;
  padding: 2em 3em;
  background: rgba(0, 0, 0, 0.4);
  text-shadow: 0px 0px 2px #131415;
  font-family: "Open Sans", sans-serif;
}

h1 {
  font-size: 2.25em;
  font-weight: 700;
  letter-spacing: -1px;
}

a,
a:visited {
  color: #e34234;
  -webkit-transition: 0.25s;
  transition: 0.25s;
}

a:hover,
a:focus {
  color: #ba160c;
}
</style>