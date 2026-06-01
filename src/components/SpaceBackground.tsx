import Starfield from "@/components/Starfield";

/**
 * Fixed full-viewport outer-space backdrop:
 * deep midnight gradient + nebula clouds + animated starfield.
 * Sits behind every section.
 */
const SpaceBackground = () => {
  return (
    <div aria-hidden="true" className="fixed inset-0 -z-50 pointer-events-none overflow-hidden">
      <div className="absolute inset-0" style={{ background: "var(--gradient-night)" }} />
      <div className="absolute inset-0 opacity-80" style={{ background: "var(--gradient-nebula)", filter: "blur(40px)" }} />
      <Starfield density={0.6} />
      {/* Distant planet / moon */}
      <div
        className="absolute top-[18%] right-[-6%] w-[260px] h-[260px] rounded-full opacity-70"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, hsl(40 80% 80% / 0.9), hsl(35 70% 55% / 0.35) 45%, transparent 70%)",
          filter: "blur(2px)",
          boxShadow: "0 0 120px hsl(35 90% 65% / 0.35)",
        }}
      />
      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,hsl(235_80%_3%)_100%)]" />
    </div>
  );
};

export default SpaceBackground;