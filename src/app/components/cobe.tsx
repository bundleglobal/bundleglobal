'use client';

import createGlobe from 'cobe';
import { useEffect, useRef } from 'react';

const SIZE = 720;

export const CobeGlobe = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: SIZE * 2,
      height: SIZE * 2,
      phi: 0,
      theta: 0,
      diffuse: 0.2,
      dark: 1,
      mapSamples: 16000,
      mapBrightness: 0.6,
      mapBaseBrightness: 0,
      baseColor: [0.5, 0.5, 0.5],
      markerColor: [1, 1, 1],
      glowColor: [0.1, 0.1, 0.1],
      opacity: 0.8,
      markers: [
        // longitude latitude
        { location: [52.2147127416299, 21.032937015340995], size: 0.03 },
      ],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += 0.002;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: SIZE, height: SIZE, aspectRatio: 1 }}
    />
  );
};
