import { useEffect, useRef } from "react";

interface ParticlesProps {
  className?: string;
  quantity?: number;
  staticity?: number;
  ease?: number;
}

interface Circle {
  x: number;
  y: number;
  translateX: number;
  translateY: number;
  size: number;
  alpha: number;
  targetAlpha: number;
  dx: number;
  dy: number;
  magnetism: number;
  color: [number, number, number];
}

const getThemeColors = () => {
  const isLight = document.documentElement.classList.contains("light");
  return {
    primary: (isLight ? [265, 95, 35] : [265, 89, 66]) as [number, number, number],
    accent: (isLight ? [210, 100, 35] : [210, 100, 60]) as [number, number, number],
    isLight,
  };
};

export default function Particles({ className = "", quantity = 50, staticity = 50, ease = 50 }: ParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !container || !context) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mouse = { x: 0, y: 0 };
    let circles: Circle[] = [];
    let width = 0;
    let height = 0;
    let frameId = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let colors = getThemeColors();

    const makeCircle = (): Circle => ({
      x: Math.random() * width,
      y: Math.random() * height,
      translateX: 0,
      translateY: 0,
      size: Math.floor(Math.random() * 3) + 1,
      alpha: reducedMotion.matches ? 0.35 : 0,
      targetAlpha: colors.isLight ? Math.random() * 0.4 + 0.35 : Math.random() * 0.45 + 0.15,
      dx: (Math.random() - 0.5) * 0.2,
      dy: (Math.random() - 0.5) * 0.2,
      magnetism: Math.random() * 4 + 0.1,
      color: Math.random() > 0.5 ? colors.primary : colors.accent,
    });

    const resize = () => {
      width = container.clientWidth;
      height = container.clientHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      circles = Array.from({ length: quantity }, makeCircle);
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);
      for (const circle of circles) {
        if (!reducedMotion.matches) {
          circle.alpha = Math.min(circle.targetAlpha, circle.alpha + 0.01);
          circle.x += circle.dx;
          circle.y += circle.dy;
          circle.translateX += (mouse.x / (staticity / circle.magnetism) - circle.translateX) / ease;
          circle.translateY += (mouse.y / (staticity / circle.magnetism) - circle.translateY) / ease;
          if (circle.x < -circle.size) circle.x = width + circle.size;
          if (circle.x > width + circle.size) circle.x = -circle.size;
          if (circle.y < -circle.size) circle.y = height + circle.size;
          if (circle.y > height + circle.size) circle.y = -circle.size;
        }
        context.beginPath();
        context.arc(circle.x + circle.translateX, circle.y + circle.translateY, circle.size, 0, Math.PI * 2);
        context.fillStyle = `hsla(${circle.color[0]}, ${circle.color[1]}%, ${circle.color[2]}%, ${circle.alpha})`;
        context.fill();
      }
      if (!reducedMotion.matches) frameId = requestAnimationFrame(draw);
    };

    const handleMouse = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = event.clientX - rect.left - width / 2;
      mouse.y = event.clientY - rect.top - height / 2;
    };
    const handleMotion = () => {
      cancelAnimationFrame(frameId);
      resize();
      draw();
    };
    const observer = new MutationObserver(() => {
      colors = getThemeColors();
      resize();
      cancelAnimationFrame(frameId);
      draw();
    });

    resize();
    draw();
    window.addEventListener("resize", resize, { passive: true });
    window.addEventListener("mousemove", handleMouse, { passive: true });
    reducedMotion.addEventListener("change", handleMotion);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouse);
      reducedMotion.removeEventListener("change", handleMotion);
      observer.disconnect();
    };
  }, [ease, quantity, staticity]);

  return <div className={className} ref={containerRef} aria-hidden="true"><canvas ref={canvasRef} /></div>;
}
