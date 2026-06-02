import { motion, useReducedMotion } from "framer-motion";
import { Rocket, Satellite, Orbit } from "lucide-react";

type Variant = "planet" | "rocket" | "satellite" | "orbit" | "comet";

interface SpaceDecorProps {
  variant?: Variant;
  className?: string;
  size?: number;
  color?: string;
}

/**
 * Decorative, animated space element. Absolutely positioned by parent
 * via `className`. Purely cosmetic, non-interactive.
 */
const SpaceDecor = ({ variant = "planet", className = "", size = 80, color }: SpaceDecorProps) => {
  const reduce = useReducedMotion();

  if (variant === "planet") {
    return (
      <motion.div
        aria-hidden
        className={`pointer-events-none absolute ${className}`}
        style={{ width: size, height: size }}
        animate={reduce ? undefined : { y: [0, -14, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      >
        <div
          className="relative w-full h-full rounded-full"
          style={{
            background:
              color ??
              "radial-gradient(circle at 30% 30%, hsl(195 90% 75% / 0.95), hsl(220 80% 35% / 0.6) 55%, hsl(235 80% 8% / 0.9) 100%)",
            boxShadow: "0 0 60px hsl(195 90% 60% / 0.35), inset -8px -10px 24px hsl(235 80% 4% / 0.7)",
          }}
        >
          {/* ring */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border"
            style={{
              width: size * 1.7,
              height: size * 0.45,
              borderColor: "hsl(195 90% 75% / 0.35)",
              transform: "translate(-50%, -50%) rotate(-22deg)",
              boxShadow: "0 0 24px hsl(195 90% 60% / 0.25)",
            }}
          />
        </div>
      </motion.div>
    );
  }

  if (variant === "rocket") {
    return (
      <motion.div
        aria-hidden
        className={`pointer-events-none absolute ${className}`}
        animate={reduce ? undefined : { y: [0, -10, 0], x: [0, 6, 0], rotate: [-12, -4, -12] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Rocket
          className="text-primary/70 drop-shadow-[0_0_14px_hsl(195_90%_70%/0.6)]"
          style={{ width: size, height: size }}
        />
      </motion.div>
    );
  }

  if (variant === "satellite") {
    return (
      <motion.div
        aria-hidden
        className={`pointer-events-none absolute ${className}`}
        animate={reduce ? undefined : { y: [0, 12, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <Satellite
          className="text-accent/70 drop-shadow-[0_0_12px_hsl(35_90%_65%/0.5)]"
          style={{ width: size, height: size }}
        />
      </motion.div>
    );
  }

  if (variant === "orbit") {
    return (
      <motion.div
        aria-hidden
        className={`pointer-events-none absolute ${className}`}
        animate={reduce ? undefined : { rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        <Orbit
          className="text-primary/30"
          style={{ width: size, height: size }}
        />
      </motion.div>
    );
  }

  // comet
  return (
    <motion.div
      aria-hidden
      className={`pointer-events-none absolute ${className}`}
      initial={{ x: -40, y: 40, opacity: 0 }}
      animate={reduce ? undefined : { x: [-40, size * 3], y: [40, -size * 1.5], opacity: [0, 1, 0] }}
      transition={{ duration: 6, repeat: Infinity, repeatDelay: 7, ease: "easeOut" }}
      style={{ width: size, height: 2 }}
    >
      <div
        className="h-[2px] w-full rounded-full"
        style={{
          background:
            "linear-gradient(90deg, transparent, hsl(195 90% 80% / 0.9), hsl(40 90% 75% / 0.6))",
          boxShadow: "0 0 12px hsl(195 90% 70% / 0.8)",
        }}
      />
    </motion.div>
  );
};

export default SpaceDecor;