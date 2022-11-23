import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; 
import { useCallback, useMemo } from "react";

const ParticlesComponent = (props) => {
  const options = useMemo(() => {

    return {
      background: {
        color: "#efefef", // this sets a background color for the canvas
      },
      fullScreen: {
        enable: true, // enabling this will make the canvas fill the entire screen, it's enabled by default
        zIndex: -1, // this is the z-index value used when the fullScreen is enabled, it's 0 by default
      },
      particles: {
        "number": {
          "density": {
            "enable": true,
            "area": 1000
          },
          "limit": 500,
          "value": 30
        },
          color: {
          value: '#548CA8'
        },
        links: {
          enable: true, // enabling this will make particles linked together
          distance: 200, // maximum distance for linking the particles
          color: '#878787'
        },
        move: {
          enable: true, // enabling this will make particles move in the canvas
          speed: { min: 0.1, max: 1 }, // using a range in speed value will make particles move in a random speed between min/max values, each particles have its own value, it won't change in time by default
        },
        opacity: {
          "value": 1
          },
        size: {
          value: { min: 1, max: 3 }, // let's randomize the particles size a bit
        },
      },
    };
  }, []);

  const particlesInit = useCallback((engine) => {
    loadSlim(engine);
  }, []);

  return <Particles id={props.id} init={particlesInit} options={options} />;
};

export default ParticlesComponent;
