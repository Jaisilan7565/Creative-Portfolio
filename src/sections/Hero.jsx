import { useState, useEffect, useRef, memo } from "react";
import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";
import { Globe } from "lucide-react";

const MarqueeRow = memo(({ style, itemCount = 8 }) => {
  const items = Array(itemCount).fill(null);

  return (
    <div className="w-full overflow-hidden flex whitespace-nowrap">
      <motion.div
        style={style}
        className="flex whitespace-nowrap transform-gpu"
      >
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
});

MarqueeRow.displayName = "MarqueeRow";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth < 768 : false,
  );
  const containerRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const titleParallaxX = useTransform(mouseX, (x) => x * -12);
  const titleParallaxY = useTransform(mouseY, (y) => y * -12);
  const imageParallaxX = useTransform(mouseX, (x) => x * 20);
  const imageParallaxY = useTransform(mouseY, (y) => y * 20);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Desktop: scale-only on outer GPU wrapper
  const sectionScale = useTransform(scrollYProgress, [0.15, 0.5], [1, 0.4], {
    clamp: true,
  });

  // Shadow via opacity (composited) — not box-shadow string interpolation
  const shadowOpacity = useTransform(scrollYProgress, [0.15, 0.5], [0, 1], {
    clamp: true,
  });

  // Border-radius on inner card only
  const sectionBorderRadius = useTransform(
    scrollYProgress,
    [0.15, 0.5],
    ["0px", "32px"],
    { clamp: true },
  );

  // Desktop: 5 staggered uneven rows (reduced for desktop)
  const row1X = useTransform(scrollYProgress, [0, 1], [-360, 120], { clamp: true });
  const row2X = useTransform(scrollYProgress, [0, 1], [240, -280], { clamp: true });
  const row3X = useTransform(scrollYProgress, [0, 1], [-80, 320], { clamp: true });
  const row4X = useTransform(scrollYProgress, [0, 1], [410, -160], { clamp: true });
  const row5X = useTransform(scrollYProgress, [0, 1], [-260, 200], { clamp: true });

  // Mobile: 7 staggered uneven rows (increased for mobile height coverage)
  const mobileRow1X = useTransform(scrollYProgress, [0, 1], [-250, 80]);
  const mobileRow2X = useTransform(scrollYProgress, [0, 1], [160, -200]);
  const mobileRow3X = useTransform(scrollYProgress, [0, 1], [-90, 230]);
  const mobileRow4X = useTransform(scrollYProgress, [0, 1], [280, -110]);
  const mobileRow5X = useTransform(scrollYProgress, [0, 1], [-190, 140]);
  const mobileRow6X = useTransform(scrollYProgress, [0, 1], [120, -220]);
  const mobileRow7X = useTransform(scrollYProgress, [0, 1], [-300, 90]);

  const mobileImageY = useTransform(
    scrollYProgress,
    [0, 0.22, 0.5],
    [0, -130, -130],
  );
  const mobileSectionScale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5],
    [1, 1, 0.5],
    { clamp: true },
  );
  const detailsY = useTransform(scrollYProgress, [0, 0.22], [320, 0]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (window.innerWidth < 768) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set(clientX / innerWidth - 0.5);
      mouseY.set(clientY / innerHeight - 0.5);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, [mouseX, mouseY]);

  const marqueeCount = isMobile ? 6 : 9;
  const rows = isMobile
    ? [mobileRow1X, mobileRow2X, mobileRow3X, mobileRow4X, mobileRow5X, mobileRow6X, mobileRow7X]
    : [row1X, row2X, row3X, row4X, row5X];

  return (
    <div
      ref={containerRef}
      className="relative h-[200vh] w-full overflow-visible bg-[#0c0a0c]"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden isolate [contain:layout_paint]">
        <div
          className={`absolute inset-0 w-full h-full pointer-events-none flex flex-col opacity-30 select-none -z-10 ${
            isMobile
              ? "justify-between py-8"
              : "justify-center gap-6 md:gap-10 py-12"
          }`}
        >
          {rows.map((rowX, index) => (
            <MarqueeRow
              key={index}
              style={{ x: rowX }}
              itemCount={marqueeCount}
            />
          ))}
        </div>

        <motion.div
          className="hero-scale-layer absolute inset-0 w-full h-full origin-center [backface-visibility:hidden]"
          style={{ scale: isMobile ? mobileSectionScale : sectionScale }}
        >
          {!isMobile && (
            <motion.div
              aria-hidden="true"
              className="hero-card-shadow absolute inset-0 pointer-events-none z-0"
              style={{
                opacity: shadowOpacity,
                boxShadow: "0 25px 50px rgba(0,0,0,0.85)",
              }}
            />
          )}

          <motion.section
            id="hero"
            style={isMobile ? undefined : { borderRadius: sectionBorderRadius }}
            className="relative w-full h-full overflow-hidden flex flex-col justify-between pt-24 pb-0 px-0 md:pt-28 md:pb-12 md:px-12 xl:px-24 border border-white/5 z-10 bg-[#120F12]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_55%,_#30111a_0%,_#120F12_70%)] pointer-events-none -z-10" />

            <div className="absolute bottom-[-10%] left-[-5%] w-[320px] h-[320px] bg-[radial-gradient(circle_at_center,_#5D2F3E30_0%,_transparent_70%)] pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-5%] w-[320px] h-[320px] bg-[radial-gradient(circle_at_center,_#5D2F3E30_0%,_transparent_70%)] pointer-events-none" />

            <div className="w-full flex items-center justify-center md:justify-between relative z-30 font-body text-[10px] md:text-[11px] tracking-[0.25em] text-warm-beige/60 font-medium">
              <p className="text-center md:text-left">
                GRAPHIC DESIGNER & CREATIVE THINKER
              </p>
              <p className="hidden md:block">CREATIVE PORTFOLIO</p>
            </div>

            <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden select-none z-10 md:z-20">
              <div className="absolute left-1/2 top-[30%] md:top-[38%] -translate-x-1/2 -translate-y-1/2 z-10 w-full flex justify-center">
                <motion.h1
                  style={
                    isMobile
                      ? { scaleX: 0.95, scaleY: 1.1 }
                      : {
                          x: titleParallaxX,
                          y: titleParallaxY,
                          scaleX: 0.7,
                          scaleY: 1.4,
                        }
                  }
                  className="text-warm-beige/90 font-hero text-[95px] min-[390px]:text-[110px] min-[430px]:text-[120px] sm:text-[140px] md:text-[160px] lg:text-[210px] xl:text-[255px] font-bold uppercase select-none tracking-[-0.05em] text-center pointer-events-none leading-[0.8] md:leading-none origin-center flex flex-col md:block"
                >
                  <span className="block md:inline">PORT</span>
                  <span className="block md:inline">FOLIO</span>
                </motion.h1>
              </div>

              <motion.div
                style={{ y: isMobile ? mobileImageY : imageParallaxY }}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 w-full sm:w-full md:w-[400px] lg:w-[460px] xl:w-[520px] transform-gpu"
              >
                <motion.div
                  style={isMobile ? undefined : { x: imageParallaxX }}
                  className="w-full h-auto origin-bottom relative"
                >
                  <img
                    src="/main-hero.png"
                    alt="Poornima portrait cutout graphic"
                    fetchPriority="high"
                    decoding="async"
                    width={520}
                    height={780}
                    className="w-full h-auto object-contain block"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#120F12] via-[#120F12]/80 to-transparent pointer-events-none z-25 md:hidden" />
                </motion.div>
              </motion.div>
            </div>

            <motion.div
              style={isMobile ? { y: detailsY } : undefined}
              className="w-full flex flex-col md:grid md:grid-cols-12 gap-8 md:gap-10 items-center md:items-end relative z-30 mt-auto pt-8 pb-8 md:pb-0 md:pt-0"
            >
              <div className="absolute -top-16 bottom-0 left-0 right-0 bg-gradient-to-t from-[#120F12] via-[#120F12]/95 to-transparent pointer-events-none -z-10 md:hidden" />

              <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left gap-4 md:gap-5">
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

                <span className="font-signature text-[28px] md:text-[36px] text-rose/90 tracking-wide mt-1 md:mt-2 block pl-2 select-none text-center md:text-left">
                  Poornima Naikwadi
                </span>
              </div>

              <div className="md:col-span-4 md:col-start-9 flex flex-col gap-6 md:gap-16 items-center md:items-end text-center md:text-right w-full">
                <p className="font-body text-[13px] md:text-[14px] text-warm-beige/70 leading-[1.6] font-medium max-w-[280px] md:max-w-[250px] text-center md:text-right">
                  I'm a UI/UX and Web Designer crafting elegant, functional and
                  user-centered digital experiences.
                </p>

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
              </div>
            </motion.div>
          </motion.section>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
