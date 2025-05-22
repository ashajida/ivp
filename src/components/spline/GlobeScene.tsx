"use client";

import { useEffect, useMemo, useRef } from 'react';
import Globe from 'react-globe.gl';



const GlobeScene = () => {

  const globeRef = useRef<ReturnType<typeof Globe>>(null);

    const particlesData = useMemo(() => [
    {
      id: 'global-particles',
      particles: Array.from({ length: 1000 }, (_, i) => ({
        id: i,
        lat: (Math.random() - 0.5) * 180,     // -90 to +90
        lng: (Math.random() - 0.5) * 360,     // -180 to +180
        name: `Particle ${i + 1}`
      }))
    }
  ], []);

  useEffect(() => {
    if (!globeRef.current) return;

    const globe = globeRef.current;
    
    const animate = () => {
      globe.controls().autoRotate = true;           // enable auto-rotation
      globe.controls().autoRotateSpeed = 1.0;       // adjust speed (default is 2.0)
    };

    animate();

    function handleResize() {
    //globe.controls().reset(); // optional: reset camera
    globe.camera().aspect = window.innerWidth / window.innerHeight;
    globe.camera().updateProjectionMatrix();
    globe.renderer().setSize(window.innerWidth, window.innerHeight);
  }

  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='absolute top-0 left-0 h-screen -z-1 overflow-hidden'>
      <Globe
      ref={globeRef}
    globeImageUrl='./images/dark-map.jpg'
    backgroundColor="rgba(0, 0, 0, 0)"
    showAtmosphere={false}

       particlesData={particlesData}
        particlesList="particles"
        particleLat="lat"
        particleLng="lng"
        particleAltitude={0.05}
        particlesSize={1.5}
        particlesColor={() => 'cyan'}
        particleLabel={(d) => `📍 ${d.name}`}
  />
    </div>
  );
}

export default GlobeScene;