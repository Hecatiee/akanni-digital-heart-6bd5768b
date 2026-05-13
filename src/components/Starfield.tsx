import { useEffect, useRef } from "react";

interface StarfieldProps {
  density?: number;
  className?: string;
}

const Starfield = ({ density = 1, className = "" }: StarfieldProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let stars: { x: number; y: number; r: number; a: number; s: number; t: number }[] = [];

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const { clientWidth: w, clientHeight: h } = canvas;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.floor((w * h) / 8000) * density;
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.2 + 0.2,
        a: Math.random() * 0.6 + 0.2,
        s: Math.random() * 0.015 + 0.005,
        t: Math.random() * Math.PI * 2,
      }));
    };

    const draw = () => {
      const { clientWidth: w, clientHeight: h } = canvas;
      ctx.clearRect(0, 0, w, h);
      for (const s of stars) {
        s.t += s.s;
        const alpha = s.a * (0.55 + 0.45 * Math.sin(s.t));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(220, 235, 255, ${alpha})`;
        ctx.shadowBlur = 6;
        ctx.shadowColor = "rgba(180, 220, 255, 0.6)";
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [density]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      aria-hidden="true"
    />
  );
};

export default Starfield;