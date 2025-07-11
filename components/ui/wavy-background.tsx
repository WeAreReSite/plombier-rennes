"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useMemo } from "react";

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  backgroundFill,
  blur = 10,
  speed = "slow",
  waveOpacity = 0.5,
  ...props
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  [key: string]: unknown;
}) => {
  const colors_ = useMemo(() => colors ?? [
    "#1D4ED8",
    "#2563EB", 
    "#3B82F6",
    "#60A5FA",
    "#93BBFC",
  ], [colors]);
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationId = useRef<number | undefined>(undefined);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = (canvas.width = container.offsetWidth);
    let h = (canvas.height = container.offsetHeight);

    const resizeCanvas = () => {
      w = canvas.width = container.offsetWidth;
      h = canvas.height = container.offsetHeight;
    };

    window.addEventListener("resize", resizeCanvas);

    // Water wave parameters - realistic frequencies, smaller height
    const waves = [
      {
        y: h * 0.75,
        length: 0.008,
        amplitude: 20,
        frequency: 0,
        speed: speed === "fast" ? 0.025 : 0.012,
      },
      {
        y: h * 0.82,
        length: 0.012,
        amplitude: 25,
        frequency: 0,
        speed: speed === "fast" ? 0.018 : 0.009,
      },
      {
        y: h * 0.9,
        length: 0.015,
        amplitude: 30,
        frequency: 0,
        speed: speed === "fast" ? 0.015 : 0.007,
      },
    ];

    let increment = 0;

    const drawWave = (wave: typeof waves[0], index: number) => {
      ctx.beginPath();
      ctx.moveTo(0, h);

      // Add phase offset for each wave to create realistic wave propagation
      const phaseOffset = index * Math.PI * 0.3; // Smaller phase offset for more natural look

      for (let i = 0; i <= w; i++) {
        const y = wave.y + Math.sin(i * wave.length + increment + wave.frequency + phaseOffset) * wave.amplitude;
        ctx.lineTo(i, y);
      }

      ctx.lineTo(w, h);
      ctx.lineTo(0, h);
      ctx.closePath();

      // Create gradient for water effect - more visible
      const gradient = ctx.createLinearGradient(0, wave.y - wave.amplitude, 0, h);
      gradient.addColorStop(0, colors_[index % colors_.length] + "60");
      gradient.addColorStop(1, colors_[index % colors_.length] + "30");

      ctx.fillStyle = gradient;
      ctx.fill();

      // Add subtle line on top of wave
      ctx.beginPath();
      ctx.moveTo(0, wave.y);
      for (let i = 0; i <= w; i++) {
        const y = wave.y + Math.sin(i * wave.length + increment + wave.frequency + phaseOffset) * wave.amplitude;
        ctx.lineTo(i, y);
      }
      ctx.strokeStyle = colors_[index % colors_.length] + "50";
      ctx.lineWidth = 3;
      ctx.stroke();
    };

    const render = () => {
      ctx.clearRect(0, 0, w, h);
      
      if (backgroundFill) {
        ctx.fillStyle = backgroundFill;
        ctx.fillRect(0, 0, w, h);
      }

      waves.forEach((wave, index) => {
        wave.frequency += wave.speed;
        drawWave(wave, index);
      });

      increment += speed === "fast" ? 0.02 : 0.008;
      animationId.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationId.current) {
        cancelAnimationFrame(animationId.current);
      }
    };
  }, [speed, backgroundFill, colors_]);

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden",
        containerClassName
      )}
      ref={containerRef}
      {...props}
    >
      <canvas
        className={cn("absolute inset-0 z-0", `blur-[${blur}px]`)}
        ref={canvasRef}
        style={{
          filter: `blur(${blur}px)`,
          opacity: waveOpacity,
        }}
      />
      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
};