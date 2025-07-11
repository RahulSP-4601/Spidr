import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: { color: "#0f0f0f" },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: ["grab", "bubble"]
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 180,
              links: {
                opacity: 0.9,
                color: "#ffffff"
              },
            },
            bubble: {
              distance: 180,
              size: 5,
              duration: 0.3,
              opacity: 0.9,
              speed: 3
            }
          }
        },
        particles: {
          color: { value: "#ffffff" },
          links: {
            color: "#ffffff",
            distance: 120,
            enable: true,
            opacity: 0, 
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.3,
            direction: "none",
            outModes: { default: "bounce" },
          },
          number: {
            value: 100,
            density: { enable: true, area: 700 },
          },
          size: { value: { min: 1, max: 3 } },
          opacity: {
            value: 0, 
            animation: {
              enable: false
            }
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;