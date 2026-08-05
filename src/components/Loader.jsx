import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, animate as fmAnimate } from "framer-motion";

// ── Deterministic star field (120 stars) ──────────────────────────────────────
const STARS = Array.from({ length: 120 }, (_, i) => ({
  id: i,
  top: (i * 73 + 17) % 100,
  left: (i * 47 + 31) % 100,
  size: 1 + (i % 3),
  delay: (i * 0.07) % 3.5,
  duration: 1.8 + (i % 5) * 0.4,
  opacity: 0.25 + (i % 4) * 0.18,
}));

// POORNIMA — index 2 is the moon slot (null)
const WORD = ["P", "O", null, "R", "N", "I", "M", "A"];

// Reveal order: left to right, skipping the moon slot at index 2
const REVEAL_ORDER = [0, 1, 3, 4, 5, 6, 7];

const Loader = ({ onComplete }) => {
  const [visibleCount, setVisibleCount] = useState(0);
  const [moonLanded, setMoonLanded] = useState(false);
  const [zooming, setZooming] = useState(false);
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" && window.innerWidth < 768,
  );

  // ref to the loader DOM node so we can set mask-image directly (no re-renders)
  const loaderRef = useRef(null);
  // MotionValue drives the growing portal radius
  const revealR = useMotionValue(0);

  // ── Responsive detection ────────────────────────────────────────────────────
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // ── Animation timeline ──────────────────────────────────────────────────────
  useEffect(() => {
    const timers = [];

    // Reveal letters one by one, 150 ms apart, starting at 300 ms
    REVEAL_ORDER.forEach((_, i) => {
      timers.push(
        setTimeout(() => setVisibleCount((c) => c + 1), 300 + i * 150),
      );
    });

    // After last letter (300 + 6×150 = 1200 ms) wait 400 ms then drop moon
    const moonDropAt = 300 + 6 * 150 + 400; // 1 600 ms
    timers.push(setTimeout(() => setMoonLanded(true), moonDropAt));

    // Hold ~1.6 s after moon settles (~0.8 s spring), then start portal reveal
    const zoomAt = moonDropAt + 800 + 800; // ~3 200 ms
    timers.push(setTimeout(() => setZooming(true), zoomAt));

    // Unmount 1.8 s after portal reveal starts (portal takes 1.6 s)
    timers.push(setTimeout(() => onComplete(), zoomAt + 1800));

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  // ── Portal reveal: growing transparent circle via CSS mask-image ────────────
  // The transparent hole starts at the moon's position and expands outward.
  // Everything inside the hole shows the website; outside stays dark until engulfed.
  useEffect(() => {
    if (!zooming) return;

    const W = isMobile ? 38 : 72;
    const moonOffsetX = -1.5 * W; // getX(2) = (2 – 3.5) * W

    // Subscribe: each frame, push new mask string directly to the DOM node
    const unsub = revealR.on("change", (r) => {
      const el = loaderRef.current;
      if (!el) return;
      const mask = `radial-gradient(circle at calc(50% + ${moonOffsetX}px) 50%, transparent ${r}px, #0c0a0c ${r + 6}px)`;
      el.style.maskImage = mask;
      el.style.webkitMaskImage = mask;
    });

    // Animate radius from 0 → 2 400 px over 1.6 s with a luxurious ease
    const ctrl = fmAnimate(revealR, 2400, {
      duration: 1.6,
      ease: [0.65, 0, 0.1, 1],
    });

    return () => {
      unsub();
      ctrl.stop();
    };
  }, [zooming, isMobile, revealR]);

  // ── Layout helpers ──────────────────────────────────────────────────────────
  const W = isMobile ? 38 : 72;
  const getX = (idx) => (idx - 3.5) * W;
  const visibleStars = isMobile ? STARS.slice(0, 60) : STARS;

  // ── Render ──────────────────────────────────────────────────────────────────
  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 w-full h-full bg-[#0c0a0c] z-[9999] flex items-center justify-center overflow-hidden select-none pointer-events-auto touch-none"
    >
      {/* ── Galaxy star field ────────────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {visibleStars.map((star) => (
          <motion.span
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{
              top: `${star.top}%`,
              left: `${star.left}%`,
              width: star.size,
              height: star.size,
            }}
            animate={{
              opacity: [
                star.opacity * 0.3,
                star.opacity,
                star.opacity * 0.15,
                star.opacity,
              ],
            }}
            transition={{
              repeat: Infinity,
              duration: star.duration,
              delay: star.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* ── Nebula glow rings ─────────────────────────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none flex items-center justify-center"
        aria-hidden="true"
      >
        {isMobile ? (
          <>
            <div className="absolute w-[420px] h-[420px] rounded-full bg-[radial-gradient(circle_at_center,_#40222B18_0%,_transparent_70%)]" />
            <div className="absolute w-[220px] h-[220px] rounded-full bg-[radial-gradient(circle_at_center,_#5D2F3E22_0%,_transparent_70%)]" />
            <div className="absolute w-[600px] h-[300px] rounded-full bg-[radial-gradient(ellipse_at_center,_#2a0a1430_0%,_transparent_70%)] rotate-12" />
          </>
        ) : (
          <>
            <div className="absolute w-[420px] h-[420px] rounded-full bg-wine/10 blur-[90px]" />
            <div className="absolute w-[220px] h-[220px] rounded-full bg-[#5D2F3E]/15 blur-[60px]" />
            <div className="absolute w-[600px] h-[300px] rounded-full bg-[#2a0a14]/30 blur-[110px] rotate-12" />
          </>
        )}
      </div>

      {/* ── Letters + Moon ───────────────────────────────────────────────── */}
      <div className="relative flex items-center justify-center w-full h-full">
        {/* Regular letters — drop-in one by one */}
        {WORD.map((char, idx) => {
          if (char === null) return null;
          const revealIdx = REVEAL_ORDER.indexOf(idx);
          const visible = revealIdx < visibleCount;

          return (
            <motion.span
              key={idx}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : -50 }}
              transition={{ type: "spring", stiffness: 55, damping: 16 }}
              style={{
                position: "absolute",
                x: getX(idx),
                transformOrigin: "center",
              }}
              className="font-hero font-bold text-[45px] sm:text-[60px] md:text-[85px] text-warm-beige tracking-wider"
            >
              {char}
            </motion.span>
          );
        })}

        {/* Moon — spins at top, springs into slot 2, then acts as portal origin */}
        <motion.div
          initial={{ y: "-100vh" }}
          animate={{ y: moonLanded ? 0 : "-100vh" }}
          transition={
            moonLanded
              ? { type: "spring", stiffness: 80, damping: 14 }
              : { duration: 0 }
          }
          style={{
            position: "absolute",
            x: getX(2),
            transformOrigin: "center",
          }}
        >
          <motion.div
            className="relative w-[38px] h-[38px] sm:w-[50px] sm:h-[50px] md:w-[68px] md:h-[68px] rounded-full overflow-hidden shadow-[0_0_45px_rgba(93,47,62,0.9),0_0_80px_rgba(93,47,62,0.4)]"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 14, ease: "linear" }}
          >
            <img
              src="/moon-1.svg"
              alt="Moon"
              fetchPriority="high"
              aria-hidden="true"
              draggable={false}
              className="w-full h-full object-cover rounded-full scale-[2]"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Loader;
