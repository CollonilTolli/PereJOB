const ParticleConfig = {
  particles: {
    number: {
      value: 6,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#f8f8f8",
    },
    shape: {
      type: "image",
      stroke: {
        width: 0,
        color: "#000",
      },
      polygon: {
        nb_sides: 6,
      },
      image: {
        src: "images/shortlogo.png",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 1,
      random: true,
      anim: {
        enable: true,
        speed: 0.0009189189189188,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 160,
      random: true,
      anim: {
        enable: true,
        speed: 2,
        size_min: 40,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
      distance: 200,
      color: "#ffffff",
      opacity: 1,
      width: 2,
    },
    move: {
      enable: true,
      speed: 2,
      // direction: "topRight",
      random: false,
      straight: false,
      // out_mode: "bounce",
      bounce: false,
      attract: {
        enable: true,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    // detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "bubble",
      },
      onclick: {
        enable: false,
        mode: "bubble",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
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
};
export default ParticleConfig;
