import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

/**
 * Silent, ambient "space pad" generated with the Web Audio API.
 * No external audio file is required. Browser autoplay policies require a
 * user gesture, so audio starts muted and turns on with the toggle (or the
 * first user interaction anywhere on the page after the toggle is enabled).
 */
const AmbientAudio = () => {
  const [on, setOn] = useState(false);
  const ctxRef = useRef<AudioContext | null>(null);
  const masterRef = useRef<GainNode | null>(null);
  const nodesRef = useRef<OscillatorNode[]>([]);

  const ensureContext = () => {
    if (ctxRef.current) return ctxRef.current;
    const AC = window.AudioContext || (window as any).webkitAudioContext;
    if (!AC) return null;
    const ctx: AudioContext = new AC();
    const master = ctx.createGain();
    master.gain.value = 0;
    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = 2200;
    filter.Q.value = 0.6;

    // Soft chord: low root + fifth + high shimmer, slightly detuned
    const freqs = [110, 165, 220, 329.63, 440];
    const types: OscillatorType[] = ["sine", "sine", "triangle", "sine", "sine"];
    const oscs: OscillatorNode[] = [];
    freqs.forEach((f, i) => {
      const o = ctx.createOscillator();
      o.type = types[i];
      o.frequency.value = f;
      o.detune.value = (i - 1) * 6;
      const g = ctx.createGain();
      g.gain.value = i >= 3 ? 0.12 : 0.22;
      // Slow LFO on gain for breathing
      const lfo = ctx.createOscillator();
      lfo.frequency.value = 0.05 + i * 0.02;
      const lfoGain = ctx.createGain();
      lfoGain.gain.value = 0.06;
      lfo.connect(lfoGain).connect(g.gain);
      o.connect(g).connect(filter);
      o.start();
      lfo.start();
      oscs.push(o);
    });
    filter.connect(master).connect(ctx.destination);

    ctxRef.current = ctx;
    masterRef.current = master;
    nodesRef.current = oscs;
    return ctx;
  };

  const toggle = async () => {
    const ctx = ensureContext();
    if (!ctx || !masterRef.current) return;
    if (ctx.state === "suspended") await ctx.resume();
    const next = !on;
    setOn(next);
    const now = ctx.currentTime;
    masterRef.current.gain.cancelScheduledValues(now);
    masterRef.current.gain.setValueAtTime(masterRef.current.gain.value, now);
    masterRef.current.gain.linearRampToValueAtTime(next ? 0.6 : 0, now + 1.4);
  };

  useEffect(() => {
    return () => {
      nodesRef.current.forEach((o) => {
        try {
          o.stop();
        } catch {}
      });
      ctxRef.current?.close().catch(() => {});
    };
  }, []);

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={on ? "Mute ambient space music" : "Play ambient space music"}
      aria-pressed={on}
      className="fixed bottom-4 right-4 z-50 h-11 w-11 rounded-full border border-primary/30 bg-card/70 backdrop-blur-md text-primary shadow-[0_0_20px_-6px_hsl(195_90%_70%/0.6)] flex items-center justify-center transition-transform hover:scale-105"
    >
      {on ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5 opacity-80" />}
    </button>
  );
};

export default AmbientAudio;