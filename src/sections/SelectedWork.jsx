import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";

// 4 Selected Projects matching the user's reference mockup and design system
const PROJECTS = [
  {
    id: "01",
    title: "SKINCARE BRANDING",
    tags: ["Brand Identity", "Packaging", "Social Media"],
    image: "/skincare-branding.webp",
    alt: "Skincare branding and luxury packaging design",
    bgGradient: "from-[#3D1E28] via-[#2A131C] to-[#190910]",
    borderColor: "border-[#5D2F3E]/40",
  },
  {
    id: "02",
    title: "RESTAURANT WEBSITE",
    tags: ["UI/UX Design", "Website Design", "Development"],
    image: "/restaurant-website.webp",
    alt: "Luxury restaurant website UI/UX case study",
    bgGradient: "from-[#211B1E] via-[#171214] to-[#0E0B0C]",
    borderColor: "border-white/10",
  },
  {
    id: "03",
    title: "KIDS LEARNING TEMPLATES",
    tags: ["Educational", "Templates", "Print Design"],
    image: "/kids-learning.webp",
    alt: "Kids educational worksheets and learning templates",
    bgGradient: "from-[#421D28] via-[#2B111A] to-[#17080F]",
    borderColor: "border-[#5D2F3E]/40",
  },
  {
    id: "04",
    title: "SOCIAL MEDIA BRANDING",
    tags: ["Instagram Posts", "Branding", "Campaigns"],
    image: "/social-media.webp",
    alt: "Social media visual identity and Instagram grid design",
    bgGradient: "from-[#391F28] via-[#24121A] to-[#15090E]",
    borderColor: "border-[#5D2F3E]/40",
  },
];

const SelectedWork = () => {
  return (
    <section
      id="work"
      className="relative w-full pt-8 md:pt-12 pb-8 md:pb-12 px-6 md:px-12 xl:px-24 bg-primary-bg overflow-hidden isolate scroll-mt-12 md:scroll-mt-18"
    >
      {/* Background Glow Accents (GPU Radial Gradients for zero blur lag) */}
      <div className="absolute top-1/3 -left-[15%] w-[550px] h-[550px] bg-[radial-gradient(circle_at_center,_#5D2F3E25_0%,_transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-10 -right-[15%] w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,_#40222B30_0%,_transparent_70%)] pointer-events-none" />

      {/* Section Header Row */}
      <div className="w-full flex items-center justify-between mb-12 md:mb-16 pb-4 border-b border-glass-border">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-rose animate-pulse" />
          <h2 className="font-body text-[13px] md:text-[15px] tracking-[0.25em] font-bold text-warm-beige/90 uppercase">
            SELECTED WORK
          </h2>
        </div>

        <a
          href="#all-projects"
          className="group inline-flex flex-1 justify-end text-end items-center gap-2 font-body text-[11px] md:text-[13px] tracking-[0.18em] font-semibold text-warm-beige/70 hover:text-rose transition-colors duration-300 uppercase"
        >
          VIEW ALL PROJECTS
          <ArrowRight className="w-4 h-4 text-warm-beige/70 group-hover:text-rose group-hover:translate-x-1 transition-all duration-300" />
        </a>
      </div>

      {/* Symmetric 4-Column Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 w-full">
        {PROJECTS.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.6,
              delay: idx * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={`group relative h-[560px] lg:h-[600px] rounded-2xl p-6 sm:p-7 flex flex-col justify-between overflow-hidden border ${project.borderColor} bg-gradient-to-b ${project.bgGradient} transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.7)]`}
          >
            {/* Soft Ambient Radial Overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-white/[0.07] via-transparent to-transparent pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Top Fixed-Height Header Container (Guarantees vertical alignment) */}
            <div className="relative z-20 w-full h-[170px] flex flex-col justify-start gap-2.5">
              {/* Number */}
              <span className="font-numbers text-xl sm:text-2xl text-warm-beige/60 tracking-wider">
                {project.id}
              </span>

              {/* Stacked Title */}
              <h3 className="font-hero text-[22px] sm:text-[24px] lg:text-[27px] font-bold text-ivory tracking-wide leading-[1.1] uppercase group-hover:text-warm-beige transition-colors duration-300 max-w-[95%]">
                {project.title}
              </h3>

              {/* Tags List */}
              <div className="flex flex-col gap-0.5 mt-1">
                {project.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="font-body text-[12px] lg:text-[13px] text-warm-beige/65 font-medium tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Center Product Image Showcase Container (Seamless Blend) */}
            <div className="relative z-10 w-full h-[270px] lg:h-[290px] mt-2 mb-14 rounded-xl overflow-hidden shadow-2xl flex items-center justify-center bg-black/20">
              <img
                src={project.image}
                alt={project.alt}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-center rounded-xl transition-transform duration-700 ease-out group-hover:scale-108"
              />
              {/* Inner gradient vignette so mockups blend into dark cards */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none rounded-xl" />
            </div>

            {/* Anchored Bottom Left Circular CTA Button */}
            <div className="absolute bottom-6 left-6 z-20">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-white/20 bg-white/15 md:bg-white/10 md:backdrop-blur-md flex items-center justify-center text-ivory group-hover:bg-rose group-hover:border-rose group-hover:text-primary-bg transition-all duration-300 shadow-xl">
                <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Centered VIEW ALL PROJECTS Button After Cards */}
      <div className="w-full flex justify-center mt-12 md:mt-16">
        <a
          href="#all-projects"
          className="group inline-flex items-center gap-3 font-body text-[11px] md:text-[13px] tracking-[0.2em] font-semibold text-warm-beige hover:text-primary-bg border border-white/20 bg-white/5 hover:bg-rose hover:border-rose px-8 py-4 rounded-full transition-all duration-300 uppercase shadow-2xl"
        >
          VIEW ALL PROJECTS
          <ArrowRight className="w-4 h-4 text-warm-beige group-hover:text-primary-bg group-hover:translate-x-1 transition-all duration-300" />
        </a>
      </div>
    </section>
  );
};

export default SelectedWork;
