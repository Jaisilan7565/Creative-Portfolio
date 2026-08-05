import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Workflow } from "lucide-react";

const processSteps = [
  {
    num: "01",
    title: "DISCOVER",
    desc: "Understanding your goals and audience.",
  },
  {
    num: "02",
    title: "RESEARCH",
    desc: "Gathering insights and studying the market.",
  },
  {
    num: "03",
    title: "SKETCH & PLAN",
    desc: "Wireframes, moodboards and concepts.",
  },
  {
    num: "04",
    title: "CREATE",
    desc: "Bringing ideas to life with precision.",
  },
  {
    num: "05",
    title: "REFINE",
    desc: "Perfecting every detail.",
  },
  {
    num: "06",
    title: "DELIVER",
    desc: "Delivering final results that make impact.",
  },
];

const AboutMe = () => {
  return (
    <section
      id="about"
      className="relative w-full pt-8 md:pt-12 pb-20 md:pb-28 px-6 md:px-12 xl:px-24 bg-primary-bg overflow-hidden isolate scroll-mt-12 md:scroll-mt-18"
    >
      {/* Background Radial Glow Accents */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,_#5D2F3E20_0%,_transparent_70%)] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,_#40222B25_0%,_transparent_70%)] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-8 gap-8 lg:gap-10">
        {/* Left Card: ABOUT ME (5/8 ratio on desktop) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="lg:col-span-5 bg-secondary-bg/90 border border-white/10 rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col justify-between relative overflow-hidden group shadow-2xl md:min-h-[480px] lg:min-h-[500px]"
        >
          {/* Desktop Only: Bottom-Left Portrait Image (No Fade, No Hover Scale) */}
          <div className="hidden md:block absolute left-0 bottom-0 w-[290px] md:w-[330px] lg:w-[380px] xl:w-[410px] pointer-events-none z-0">
            <img
              src="/about.webp"
              alt="Poornima - Graphic Designer Portrait"
              loading="lazy"
              decoding="async"
              className="w-full h-auto object-contain object-bottom-left block opacity-100"
            />
          </div>

          {/* Header Row */}
          <div className="w-full flex items-center justify-between pb-6 border-b border-glass-border relative z-10">
            <h2 className="font-hero text-2xl sm:text-3xl tracking-wider text-ivory font-bold uppercase">
              ABOUT ME
            </h2>
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-rose shadow-md group-hover:border-rose/40 group-hover:bg-rose/10 transition-all duration-300">
              <Sparkles className="w-5 h-5 sm:w-5 sm:h-5 text-rose" />
            </div>
          </div>

          {/* Mobile Only: Small Centered Bordered Portrait Card */}
          <div className="block md:hidden mt-6">
            <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl w-[180px] sm:w-[210px] aspect-[3/4] mb-6 mx-auto">
              <img
                src="/about.webp"
                alt="Poornima - Graphic Designer Portrait"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-top block"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#120F12]/60 via-transparent to-transparent pointer-events-none" />
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="font-hero text-2xl sm:text-3xl text-ivory font-bold tracking-tight">
                Hii, I'm Poornima !
              </h3>

              <p className="font-body text-base font-medium text-rose leading-snug">
                Turning ideas into colorful, user-friendly designs.
              </p>

              <h4 className="font-hero text-lg text-warm-beige/90 font-medium">
                Graphic Designer & Creative Thinker
              </h4>

              <p className="font-body text-xs text-warm-beige/70 leading-relaxed font-light">
                I transform ideas into clean, colorful, and user-focused
                designs. With a background in B.Com and a passion for visual
                storytelling, I create modern designs that are both meaningful
                and memorable. Driven by curiosity and continuous learning, I'm
                building a career crafting thoughtful digital experiences while
                growing as a freelance designer.
              </p>

              <div className="pt-2">
                <button
                  onClick={() =>
                    window.dispatchEvent(new CustomEvent("open-lets-talk"))
                  }
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-wine/60 bg-white/5 text-warm-beige hover:text-rose hover:border-rose hover:bg-rose/10 transition-all duration-300 font-body text-xs tracking-widest uppercase font-semibold group/btn cursor-pointer"
                >
                  <span>MORE ABOUT ME</span>
                  <span className="text-base group-hover/btn:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Desktop Only: Right-Aligned Text Content */}
          <div className="hidden md:flex relative z-10 mt-8 ml-auto w-[56%] lg:w-[52%] xl:w-[49%] flex-col gap-4">
            <h3 className="font-hero text-3xl lg:text-4xl text-ivory font-bold tracking-tight">
              Hii, I'm Poornima !
            </h3>

            <p className="font-body text-lg lg:text-xl font-medium text-rose leading-snug">
              Turning ideas into colorful, user-friendly designs.
            </p>

            <h4 className="font-hero text-xl text-warm-beige/90 font-medium">
              Graphic Designer & Creative Thinker
            </h4>

            <p className="font-body text-sm text-warm-beige/70 leading-relaxed font-light">
              I transform ideas into clean, colorful, and user-focused designs.
              With a background in B.Com and a passion for visual storytelling,
              I create modern designs that are both meaningful and memorable.
              Driven by curiosity and continuous learning, I'm building a career
              crafting thoughtful digital experiences while growing as a
              freelance designer.
            </p>

            <div className="pt-2">
              <button
                onClick={() =>
                  window.dispatchEvent(new CustomEvent("open-lets-talk"))
                }
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-wine/60 bg-white/5 text-warm-beige hover:text-rose hover:border-rose hover:bg-rose/10 transition-all duration-300 font-body text-xs tracking-widest uppercase font-semibold group/btn cursor-pointer"
              >
                <span>MORE ABOUT ME</span>
                <span className="text-base group-hover/btn:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Right Card: MY PROCESS (3/8 ratio on desktop) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="lg:col-span-3 bg-secondary-bg/90 border border-white/10 rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col justify-between relative overflow-hidden shadow-2xl group/process"
        >
          {/* Header Row */}
          <div className="w-full flex items-center justify-between pb-6 border-b border-glass-border relative z-10">
            <h2 className="font-hero text-2xl sm:text-3xl tracking-wider text-ivory font-bold uppercase">
              MY PROCESS
            </h2>
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-rose shadow-md group-hover/process:border-rose/40 group-hover/process:bg-rose/10 transition-all duration-300">
              <Workflow className="w-5 h-5 sm:w-5 sm:h-5 text-rose" />
            </div>
          </div>

          {/* Process List Container with Botanical Artwork */}
          <div className="relative mt-6 z-10 flex-grow flex flex-col justify-between gap-4 sm:gap-5 pr-4 md:pr-6">
            {processSteps.map((step, idx) => (
              <div key={idx} className="flex items-start gap-4 sm:gap-6 group">
                {/* Step Number with Underline */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <span className="font-numbers text-2xl sm:text-3xl text-warm-beige/90 tracking-widest group-hover:text-rose transition-colors duration-300">
                    {step.num}
                  </span>
                  <span className="w-4 h-[1px] bg-rose/40 mt-0.5 group-hover:w-6 group-hover:bg-rose transition-all duration-300" />
                </div>

                {/* Step Content */}
                <div className="flex flex-col">
                  <h3 className="font-body text-xs sm:text-sm font-bold tracking-widest text-ivory uppercase group-hover:text-rose transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="font-body text-xs text-warm-beige/60 font-light italic leading-normal">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Botanical Background Image Overlay */}
          <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
            <img
              src="/process-bg.webp"
              alt="Botanical floral process background"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-right block opacity-85 group-hover/process:opacity-100 transition-opacity duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-secondary-bg via-secondary-bg/70 to-transparent pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
