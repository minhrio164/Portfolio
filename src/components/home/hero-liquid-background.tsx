"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

type HeroShaderMount = {
  dispose?: () => void;
} | null;

const SHADER_STYLE_ID = "hero-liquid-shader-style";

export function HeroLiquidBackground() {
  const prefersReducedMotion = useReducedMotion();
  const shaderRef = useRef<HTMLDivElement>(null);
  const shaderMount = useRef<HeroShaderMount>(null);
  const [isShaderReady, setIsShaderReady] = useState(false);

  useEffect(() => {
    if (document.getElementById(SHADER_STYLE_ID)) {
      return;
    }

    const style = document.createElement("style");
    style.id = SHADER_STYLE_ID;
    style.textContent = `
      .hero-liquid-shader canvas {
        width: 100% !important;
        height: 100% !important;
        display: block !important;
      }
    `;
    document.head.appendChild(style);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || !shaderRef.current) {
      setIsShaderReady(false);
      return;
    }

    let isCancelled = false;

    const loadShader = async () => {
      try {
        const { ShaderMount, waterFragmentShader } = await import("@paper-design/shaders");

        const shaderImage = new window.Image();
        shaderImage.src = "/images/hero-waves.png";
        await new Promise<void>((resolve, reject) => {
          shaderImage.onload = () => resolve();
          shaderImage.onerror = () => reject(new Error("Failed to load hero waves texture"));
        });

        if (!shaderRef.current || isCancelled) {
          return;
        }

        shaderMount.current?.dispose?.();
        shaderMount.current = new ShaderMount(
          shaderRef.current,
          waterFragmentShader,
          {
            u_image: shaderImage,
            u_colorBack: [0.02, 0.02, 0.03, 1],
            u_colorHighlight: [0.74, 0.77, 0.83, 0.16],
            u_highlights: 0.1,
            u_layering: 0.56,
            u_edges: 0.18,
            u_caustic: 0.08,
            u_waves: 0.34,
            u_size: 1.9,
            u_fit: 2,
            u_scale: 1.03,
            u_rotation: 4,
            u_offsetX: 0.03,
            u_offsetY: -0.01,
          },
          undefined,
          0.06,
        );

        setIsShaderReady(true);
      } catch (error) {
        console.error("Failed to load hero liquid background shader:", error);
        setIsShaderReady(false);
      }
    };

    loadShader();

    return () => {
      isCancelled = true;
      shaderMount.current?.dispose?.();
      shaderMount.current = null;
      setIsShaderReady(false);
    };
  }, [prefersReducedMotion]);

  return (
    <div className="hero-liquid-shell hero-shadow absolute inset-0" aria-hidden="true">
      <Image
        src="/images/hero-waves.png"
        alt=""
        fill
        priority
        className={`object-cover object-[60%_50%] transition-opacity duration-700 md:object-center ${
          isShaderReady && !prefersReducedMotion ? "opacity-0" : "opacity-100"
        }`}
        sizes="100vw"
      />

      <div className="hero-liquid-base absolute inset-0" />

      <div
        ref={shaderRef}
        className={`hero-liquid-shader absolute inset-0 transition-opacity duration-700 ${
          isShaderReady && !prefersReducedMotion ? "opacity-100" : "opacity-0"
        }`}
      />

      <div className="hero-liquid-glow hero-liquid-glow-left absolute inset-0" />
      <div className="hero-liquid-glow hero-liquid-glow-right absolute inset-0" />
      <div className="hero-liquid-vignette absolute inset-0" />
    </div>
  );
}
