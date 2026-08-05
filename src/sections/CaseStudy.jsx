import React from "react";
import { motion } from "framer-motion";
import { FolderKanban, Layers } from "lucide-react";

const skills = [
  { name: "Brand Identity", level: 90 },
  { name: "Packaging Design", level: 85 },
  { name: "Social Media Design", level: 90 },
  { name: "Web Design", level: 80 },
  { name: "Illustration", level: 75 },
  { name: "Typography", level: 85 },
];

const CaseStudy = () => {
  return (
    <section
      id="skills"
      className="relative w-full pt-8 md:pt-12 pb-20 md:pb-28 px-6 md:px-12 xl:px-24 bg-primary-bg overflow-hidden isolate scroll-mt-12 md:scroll-mt-18"
    >
      {/* Background Radial Glow Accents */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,_#5D2F3E20_0%,_transparent_70%)] pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,_#40222B25_0%,_transparent_70%)] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-8 gap-8 lg:gap-10">
        {/* Left Card: SKILLS (3/8 ratio on desktop) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="lg:col-span-3 bg-secondary-bg/90 border border-white/10 rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col justify-between relative overflow-hidden shadow-2xl group/skills"
        >
          {/* Header Row */}
          <div className="w-full flex items-center justify-between pb-6 border-b border-glass-border relative z-10">
            <h2 className="font-hero text-2xl sm:text-3xl tracking-wider text-ivory font-bold uppercase">
              SKILLS
            </h2>
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-rose shadow-md group-hover/skills:border-rose/40 group-hover/skills:bg-rose/10 transition-all duration-300">
              <Layers className="w-5 h-5 sm:w-5 sm:h-5 text-rose" />
            </div>
          </div>

          {/* Progress Bars Container */}
          <div className="mt-6 flex-grow flex flex-col justify-between gap-5 sm:gap-6 relative z-10">
            {skills.map((skill, idx) => (
              <div key={idx} className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between font-body text-xs sm:text-sm">
                  <span className="font-medium text-warm-beige/90">
                    {skill.name}
                  </span>
                  <span className="font-numbers text-sm text-warm-beige/70 tracking-widest">
                    {skill.level}%
                  </span>
                </div>

                {/* Progress Bar Track */}
                <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.2,
                      delay: 0.1 * idx,
                      ease: "easeOut",
                    }}
                    className="h-full bg-gradient-to-r from-wine via-rose to-rose/90 rounded-full shadow-[0_0_12px_rgba(212,156,156,0.35)]"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Card: FEATURED CASE STUDY (5/8 ratio on desktop) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="lg:col-span-5 bg-secondary-bg/90 border border-white/10 rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col justify-between relative overflow-hidden group shadow-2xl"
        >
          {/* Header Row */}
          <div className="w-full flex items-center justify-between pb-6 border-b border-glass-border relative z-10">
            <h2 className="font-hero text-2xl sm:text-3xl tracking-wider text-ivory font-bold uppercase">
              FEATURED CASE STUDY
            </h2>
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-rose shadow-md group-hover:border-rose/40 group-hover:bg-rose/10 transition-all duration-300">
              <FolderKanban className="w-5 h-5 sm:w-5 sm:h-5 text-rose" />
            </div>
          </div>

          {/* Sub-grid Content Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center mt-6">
            {/* Left Info Column */}
            <div className="md:col-span-5 flex flex-col justify-between gap-4">
              <div className="flex flex-col gap-2">
                <h3 className="font-hero text-2xl sm:text-3xl text-rose font-bold uppercase leading-tight tracking-wide">
                  SKINCARE BRAND IDENTITY
                </h3>
                <p className="font-body text-xs text-warm-beige/70 font-medium leading-relaxed">
                  Brand Strategy, Logo Design, Packaging, Social Media
                </p>
              </div>

              <p className="font-body text-xs sm:text-sm text-warm-beige/60 font-light leading-relaxed">
                A gentle and elegant skincare brand crafted for modern women.
                The identity reflects purity, trust and sophistication.
              </p>

              <div className="pt-2">
                <a
                  href="#case-study-details"
                  className="inline-flex items-center gap-2 font-body text-xs tracking-widest text-warm-beige hover:text-rose transition-colors duration-300 uppercase font-semibold group/link relative pb-1 w-fit"
                >
                  <span>VIEW CASE STUDY</span>
                  <span className="text-base group-hover/link:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-rose/40 group-hover/link:bg-rose transition-all duration-300" />
                </a>
              </div>
            </div>

            {/* Right Image Showcase Column */}
            <div className="md:col-span-7">
              <div className="relative rounded-xl md:rounded-2xl overflow-hidden border border-white/10 shadow-2xl aspect-[4/3] group/img">
                <img
                  src="/skincare-branding.webp"
                  alt="Aurelia Skincare Brand Identity Packaging Design"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover block transition-transform duration-700 group-hover/img:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#120F12]/60 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudy;
