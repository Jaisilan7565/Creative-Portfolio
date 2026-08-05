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
      className="relative w-full pt-8 md:pt-12 pb-20 md:pb-28 px-6 md:px-12 xl:px-24 bg-primary-bg overflow-hidden isolate"
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
              src="/about.png"
              alt="Poornima - Graphic Designer Portrait"
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

          {/* Mobile Only: Original Grid with Bordered Portrait Card */}
          <div className="block md:hidden mt-6">
            <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl aspect-[3/4] mb-6">
              <img
                src="/about.png"
                alt="Poornima - Graphic Designer Portrait"
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
                <a
                  href="#contact"
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-wine/60 bg-white/5 text-warm-beige hover:text-rose hover:border-rose hover:bg-rose/10 transition-all duration-300 font-body text-xs tracking-widest uppercase font-semibold group/btn"
                >
                  <span>MORE ABOUT ME</span>
                  <span className="text-base group-hover/btn:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </a>
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
              <a
                href="#contact"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-wine/60 bg-white/5 text-warm-beige hover:text-rose hover:border-rose hover:bg-rose/10 transition-all duration-300 font-body text-xs tracking-widest uppercase font-semibold group/btn"
              >
                <span>MORE ABOUT ME</span>
                <span className="text-base group-hover/btn:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </a>
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

          {/* Elegant Botanical Floral Vector Illustration on Right Side */}
          <div className="absolute right-[-20px] sm:right-0 bottom-0 top-12 w-40 sm:w-52 pointer-events-none opacity-40 sm:opacity-50 select-none z-0 flex items-center justify-end">
            <svg
              viewBox="0 0 200 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full object-contain"
            >
              {/* Stem */}
              <path
                d="M170 390 C 150 280, 110 180, 140 20"
                stroke="#5D2F3E"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              {/* Secondary Branch */}
              <path
                d="M145 220 C 110 170, 80 130, 90 80"
                stroke="#40222B"
                strokeWidth="1.8"
                strokeLinecap="round"
              />

              {/* Leaves */}
              <path
                d="M140 20 C 110 10, 85 30, 115 50 C 130 40, 140 30, 140 20 Z"
                fill="#5D2F3E"
                opacity="0.85"
              />
              <path
                d="M135 70 C 95 60, 75 90, 110 105 C 125 90, 135 80, 135 70 Z"
                fill="#40222B"
                opacity="0.9"
              />
              <path
                d="M150 120 C 180 90, 200 120, 165 140 C 155 130, 150 125, 150 120 Z"
                fill="#5D2F3E"
                opacity="0.8"
              />
              <path
                d="M130 180 C 85 160, 70 200, 105 215 C 120 200, 130 190, 130 180 Z"
                fill="#391F28"
                opacity="0.9"
              />
              <path
                d="M142 240 C 180 220, 195 260, 155 275 C 145 260, 142 250, 142 240 Z"
                fill="#5D2F3E"
                opacity="0.85"
              />
              <path
                d="M152 300 C 110 280, 90 320, 130 335 C 145 320, 152 310, 152 300 Z"
                fill="#40222B"
                opacity="0.9"
              />

              {/* Rose Petals & Flower Blossoms */}
              <path
                d="M90 80 C 70 60, 50 80, 65 100 C 80 110, 95 95, 90 80 Z"
                fill="#D49C9C"
                opacity="0.75"
              />
              <path
                d="M100 85 C 85 70, 70 95, 85 110 C 100 115, 110 100, 100 85 Z"
                fill="#5D2F3E"
                opacity="0.8"
              />
              <path
                d="M165 140 C 185 125, 195 150, 175 165 C 160 170, 155 150, 165 140 Z"
                fill="#D49C9C"
                opacity="0.65"
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
