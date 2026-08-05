import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Globe } from "lucide-react";

// Scroll-driven Parallax Text Row Helper
const MarqueeRow = ({ style }) => {
  const items = Array(8).fill(null);

  return (
    <div className="w-full overflow-hidden flex whitespace-nowrap">
      <motion.div style={style} className="flex whitespace-nowrap">
        {items.map((_, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-4 md:gap-6 font-numbers text-[50px] sm:text-[65px] md:text-[85px] tracking-widest uppercase mx-2 md:mx-4 select-none"
          >
            <span className="relative">
              <span className="text-[#3b1722] line-through decoration-rose/70 decoration-[3px] md:decoration-[4px]">
                IM
              </span>
              <span className="text-warm-beige/80">POSSIBLE</span>
            </span>
            <span className="text-[#3b1722] text-[20px] md:text-[35px]">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
};

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth < 768 : false,
  );
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Card zoom-out and border-radius scroll transformations on both mobile and desktop
  // Pinning is active for 100vh of scroll track, corresponding to 0 -> 0.5 of total 200vh height.
  // For mobile, the zoom-out scaling begins at 0.3 scroll progress, after layout animations complete.
  const sectionScale = useTransform(
    scrollYProgress,
    isMobile ? [0, 0.3, 0.5] : [0.15, 0.5],
    isMobile ? [1, 1, 0.5] : [1, 0.4],
  );
  const sectionBorderRadius = useTransform(
    scrollYProgress,
    isMobile ? [0, 0.3, 0.5] : [0.15, 0.5],
    isMobile ? ["0px", "0px", "32px"] : ["0px", "32px"],
  );
  const sectionShadow = useTransform(
    scrollYProgress,
    isMobile ? [0, 0.3, 0.5] : [0.15, 0.5],
    isMobile
      ? [
          "0px 0px 0px rgba(0,0,0,0)",
          "0px 0px 0px rgba(0,0,0,0)",
          "0px 25px 50px rgba(0,0,0,0.85)",
        ]
      : ["0px 0px 0px rgba(0,0,0,0)", "0px 25px 50px rgba(0,0,0,0.85)"],
  );

  // Scroll-driven background row translation transforms (tracks from start start to end start, moving as it scrolls off screen)
  const row1X = useTransform(scrollYProgress, [0, 1], ["-15%", "5%"]);
  const row2X = useTransform(scrollYProgress, [0, 1], ["5%", "-15%"]);
  const row3X = useTransform(scrollYProgress, [0, 1], ["-20%", "0%"]);
  const row4X = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const row5X = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  // Mobile layout scroll animations complete at 0.3 scroll progress, before the scaling zoom-out begins
  const combinedImageY = useTransform(
    scrollYProgress,
    isMobile ? [0, 0.3, 0.5] : [0, 0.5],
    isMobile ? [0, -160, -160] : [mousePos.y * 20, mousePos.y * 20],
  );

  const detailsY = useTransform(
    scrollYProgress,
    isMobile ? [0, 0.3, 0.5] : [0, 0.5],
    isMobile ? [420, 0, 0] : [0, 0],
  );
  const detailsOpacity = useTransform(
    scrollYProgress,
    isMobile ? [0, 0.08, 0.3, 0.5] : [0, 0.125, 0.5],
    isMobile ? [0, 0.2, 1, 1] : [1, 1, 1],
  );

  // Mouse Parallax & Responsive Detection Effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      // Normalized offset (-0.5 to 0.5)
      const x = clientX / innerWidth - 0.5;
      const y = clientY / innerHeight - 0.5;
      setMousePos({ x, y });
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative h-[200vh] w-full overflow-visible bg-[#0c0a0c]"
    >
      {/* Single sticky viewport container wrapping both the card and the background parallax text */}
      <div className="sticky top-0 h-screen w-full overflow-hidden isolate">
        {/* Background Parallax Rows (Visible when the Hero card scales down, moving while scrolled) */}
        <div
          className={`absolute inset-0 w-full h-full pointer-events-none flex flex-col opacity-30 select-none -z-10 ${
            isMobile
              ? "justify-between py-8"
              : "justify-center gap-6 md:gap-10 py-12"
          }`}
        >
          <MarqueeRow style={{ x: row1X }} />
          <MarqueeRow style={{ x: row2X }} />
          <MarqueeRow style={{ x: row3X }} />
          <MarqueeRow style={{ x: row4X }} />
          <MarqueeRow style={{ x: row5X }} />
          {isMobile && (
            <>
              <MarqueeRow style={{ x: row2X }} />
              <MarqueeRow style={{ x: row3X }} />
            </>
          )}
        </div>

        <motion.section
          id="hero"
          className="absolute inset-0 w-full h-full overflow-hidden flex flex-col justify-between pt-24 pb-0 px-0 md:pt-28 md:pb-12 md:px-12 xl:px-24 border border-white/5 z-10"
          style={{
            background:
              "radial-gradient(circle at 50% 55%, #30111a 0%, #120F12 70%)",
            scale: sectionScale,
            borderRadius: sectionBorderRadius,
            boxShadow: sectionShadow,
          }}
        >
          {/* Background Soft Red Floral Blur Corners (Accents matching mockup petals) */}
          <div className="absolute bottom-[-10%] left-[-5%] w-[320px] h-[320px] bg-wine/15 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute bottom-[-10%] right-[-5%] w-[320px] h-[320px] bg-wine/15 rounded-full blur-[80px] pointer-events-none" />

          {/* Top Labels Row */}
          <div className="w-full flex items-center justify-center md:justify-between relative z-30 font-body text-[10px] md:text-[11px] tracking-[0.25em] text-warm-beige/60 font-medium">
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center md:text-left"
            >
              GRAPHIC DESIGNER & CREATIVE THINKER
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="hidden md:block"
            >
              CREATIVE PORTFOLIO
            </motion.p>
          </div>

          {/* 3D Depth Layer Title and Portrait Cutout */}
          <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden select-none z-10 md:z-20">
            {/* Layer 1: Backdrop Massive Typography (Tight overlapping Bodoni Moda letters) */}
            <div className="absolute left-1/2 top-[30%] md:top-[38%] -translate-x-1/2 -translate-y-1/2 z-10 w-full flex justify-center">
              <motion.h1
                style={{
                  x: mousePos.x * -12,
                  y: isMobile ? 0 : mousePos.y * -12,
                  scaleX: isMobile ? 0.95 : 0.7,
                  scaleY: isMobile ? 1.1 : 1.4,
                }}
                initial={{ opacity: 0, letterSpacing: "0.02em" }}
                animate={{ opacity: 1, letterSpacing: "-0.05em" }}
                transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                className="text-warm-beige/90 font-hero text-[95px] min-[390px]:text-[110px] min-[430px]:text-[120px] sm:text-[140px] md:text-[160px] lg:text-[210px] xl:text-[255px] font-bold uppercase select-none tracking-[-0.05em] text-center pointer-events-none leading-[0.8] md:leading-none origin-center flex flex-col md:block"
              >
                <span className="block md:inline">PORT</span>
                <span className="block md:inline">FOLIO</span>
              </motion.h1>
            </div>

            {/* Layer 2: Cutout foreground portrait sticking to the bottom margin */}
            <motion.div
              style={{
                y: combinedImageY,
              }}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 w-full sm:w-full md:w-[400px] lg:w-[460px] xl:w-[520px]"
            >
              <motion.div
                style={{
                  x: mousePos.x * 20,
                }}
                initial={{ y: 120, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.2,
                  duration: 1.4,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="w-full h-auto origin-bottom relative"
              >
                <img
                  src="/main-hero.png"
                  alt="Poornima portrait cutout graphic"
                  className="w-full h-auto object-contain block drop-shadow-[0_-5px_30px_rgba(0,0,0,0.55)]"
                />
                {/* Smooth dark fade at the bottom of the image itself on mobile */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#120F12] via-[#120F12]/80 to-transparent pointer-events-none z-25 md:hidden" />
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom Info Details Grid */}
          <motion.div
            style={{
              y: detailsY,
              opacity: detailsOpacity,
            }}
            className="w-full flex flex-col md:grid md:grid-cols-12 gap-8 md:gap-10 items-center md:items-end relative z-30 mt-auto pt-8 pb-8 md:pb-0 md:pt-0"
          >
            {/* Smooth dark fade background on mobile to blend with the visual cutout portrait */}
            <div className="absolute -top-16 bottom-0 left-0 right-0 bg-gradient-to-t from-[#120F12] via-[#120F12]/95 to-transparent pointer-events-none -z-10 md:hidden" />

            {/* Bottom Left: Visual Identity & Signature */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left gap-4 md:gap-5"
            >
              <h2 className="font-body text-[15px] sm:text-[18px] md:text-[20px] lg:text-[22px] tracking-[0.05em] leading-[1.3] text-ivory font-bold uppercase max-w-[280px] md:max-w-[320px] text-center md:text-left">
                I DESIGN DIGITAL EXPERIENCES THAT INSPIRE & CONNECT
              </h2>

              <a
                href="#work"
                className="font-body text-[9.5px] md:text-[10px] tracking-[0.2em] font-semibold text-warm-beige hover:text-rose border border-glass bg-white/5 px-5 py-2.5 rounded-full inline-flex items-center gap-2 group transition-all duration-300 uppercase"
              >
                AVAILABLE FOR PROJECTS
                <span className="text-[16px] group-hover:rotate-45 transition-transform duration-300">
                  ✦
                </span>
              </a>

              {/* Signature script styling using Playball */}
              <span className="font-signature text-[28px] md:text-[36px] text-rose/90 tracking-wide mt-1 md:mt-2 block pl-2 select-none text-center md:text-left">
                Poornima Naikwadi
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="md:col-span-4 md:col-start-9 flex flex-col gap-6 md:gap-16 items-center md:items-end text-center md:text-right w-full"
            >
              <p className="font-body text-[13px] md:text-[14px] text-warm-beige/70 leading-[1.6] font-medium max-w-[280px] md:max-w-[250px] text-center md:text-right">
                I'm a UI/UX and Web Designer crafting elegant, functional and
                user-centered digital experiences.
              </p>

              {/* Stacked Location details with circular Globe outline */}
              <div className="flex items-center gap-4 text-center md:text-right justify-center md:justify-end w-full">
                <div className="flex flex-col text-[10px] md:text-[16px] tracking-[0.18em] text-warm-beige/50 font-semibold leading-[1.6] uppercase text-center md:text-right">
                  <span>BASED IN MUMBAI, INDIA</span>
                  <span className="hidden md:inline">WORKING WORLDWIDE</span>
                  <span className="md:hidden text-[9.5px]">
                    AVAILABLE FOR FREELANCE PROJECTS WORLDWIDE
                  </span>
                </div>
                <div className="hidden md:flex w-10 h-10 rounded-full border border-white/10 items-center justify-center bg-white/5 flex-shrink-0">
                  <Globe className="w-6 h-6 text-warm-beige/70" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
};

export default Hero;
