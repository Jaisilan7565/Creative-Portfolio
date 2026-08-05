import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquareQuote, Send, ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "Poornima is incredibly talented, creative and professional. She understands the brand deeply and delivers beyond expectations.",
    name: "ANANYA SHARMA",
    role: "Founder, Aurelia Skincare",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
  },
  {
    quote:
      "Working with Poornima was a seamless experience. Her attention to typography, branding aesthetics, and user experience transformed our business identity.",
    name: "RAHUL VERMA",
    role: "Co-Founder, Urban Bites",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
  },
  {
    quote:
      "Poornima brings a rare mix of artistic intuition and strategic design thinking. She consistently turns complex briefs into stunning, memorable visuals.",
    name: "PRIYA MEHTA",
    role: "Creative Director, Studio Bloom",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
  },
];

const TestimonialContact = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const current = testimonials[currentIndex];

  return (
    <section
      id="testimonials"
      className="relative w-full pt-8 md:pt-12 pb-20 md:pb-28 px-6 md:px-12 xl:px-24 bg-primary-bg overflow-hidden isolate scroll-mt-12 md:scroll-mt-18"
    >
      {/* Background Radial Glow Accents */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,_#5D2F3E20_0%,_transparent_70%)] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,_#40222B25_0%,_transparent_70%)] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Single Unified Container Card divided by a divider border */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="bg-secondary-bg/90 border border-white/10 rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2"
        >
          {/* Left Division: WHAT CLIENTS SAY */}
          <div className="p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-between relative border-b lg:border-b-0 lg:border-r border-white/10 min-h-[440px] sm:min-h-[460px]">
            {/* Header Row */}
            <div className="w-full flex items-center justify-between pb-6 relative z-10">
              <h2 className="font-hero text-2xl sm:text-3xl tracking-wider text-ivory font-bold uppercase">
                WHAT CLIENTS SAY
              </h2>
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-rose shadow-md group-hover:border-rose/40 group-hover:bg-rose/10 transition-all duration-300">
                <MessageSquareQuote className="w-5 h-5 sm:w-5 sm:h-5 text-rose" />
              </div>
            </div>

            {/* Testimonial Quote Body */}
            <div className="my-6 relative z-10 flex-grow flex flex-col justify-center">
              <span className="font-hero text-4xl sm:text-5xl text-rose/90 font-bold block mb-2 leading-none select-none">
                “
              </span>

              <div className="min-h-[140px] sm:min-h-[160px] flex items-center">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={currentIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="font-hero text-lg sm:text-xl md:text-2xl text-rose font-medium leading-relaxed italic"
                  >
                    {current.quote}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>

            {/* Footer Row: Client Info + Navigation Controls */}
            <div className="w-full pt-6 flex items-center justify-between relative z-10 gap-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center gap-3.5"
                >
                  <img
                    src={current.avatar}
                    alt={current.name}
                    className="w-11 h-11 sm:w-12 sm:h-12 rounded-full object-cover border border-rose/30 shadow-md"
                  />
                  <div className="flex flex-col">
                    <span className="font-body text-xs sm:text-sm font-bold text-warm-beige tracking-wider uppercase">
                      — {current.name}
                    </span>
                    <span className="font-body text-xs text-warm-beige/60 font-light">
                      {current.role}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Buttons */}
              <div className="flex items-center gap-2 sm:gap-3">
                <button
                  onClick={prevTestimonial}
                  aria-label="Previous Testimonial"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/15 bg-white/5 hover:border-rose hover:bg-rose/10 flex items-center justify-center text-warm-beige hover:text-rose transition-all duration-300 shadow-md"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>

                <button
                  onClick={nextTestimonial}
                  aria-label="Next Testimonial"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/15 bg-white/5 hover:border-rose hover:bg-rose/10 flex items-center justify-center text-warm-beige hover:text-rose transition-all duration-300 shadow-md"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Division: LET'S CREATE SOMETHING BEAUTIFUL */}
          <div
            id="contact"
            className="p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-between relative overflow-hidden group/cta min-h-[440px] sm:min-h-[460px] scroll-mt-24 md:scroll-mt-32"
          >
            {/* Header Row */}
            <div className="w-full flex items-center justify-between pb-6 relative z-10">
              <h2 className="font-hero text-xl sm:text-2xl lg:text-3xl tracking-wider text-rose font-bold uppercase leading-tight md:max-w-[85%]">
                LET'S CREATE SOMETHING BEAUTIFUL
              </h2>
              {/* <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-rose shadow-md group-hover/cta:border-rose/40 group-hover/cta:bg-rose/10 transition-all duration-300 flex-shrink-0">
                <Send className="w-5 h-5 sm:w-5 sm:h-5 text-rose" />
              </div> */}
            </div>

            {/* Body Content */}
            <div className="mt-6 my-auto relative z-10 flex flex-col gap-4 max-w-[50%]">
              <p className="font-body text-xs sm:text-base text-warm-beige/70 font-light leading-relaxed">
                I'm currently available for freelance projects and
                collaborations.
              </p>

              <h3 className="font-hero text-xl sm:text-2xl text-ivory font-bold leading-snug tracking-tight">
                Let's turn idea into something extraordinary !
              </h3>
            </div>

            {/* CTA Button */}
            <div className="pt-6 relative z-10">
              <button
                onClick={() =>
                  window.dispatchEvent(new CustomEvent("open-lets-talk"))
                }
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl border border-rose/50 bg-white/5 hover:bg-rose/15 hover:border-rose text-ivory font-body text-xs font-semibold tracking-widest uppercase transition-all duration-300 group/talk shadow-lg cursor-pointer"
              >
                <span>LET'S TALK</span>
                <span className="text-base group-hover/talk:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </button>
            </div>

            {/* Dark Botanical Still Life Floral Vase Background Overlay */}
            <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
              <img
                src="/talk-bg.webp"
                alt="Dark botanical still life background"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-right block opacity-90 group-hover/cta:opacity-100 transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-secondary-bg via-secondary-bg/70 to-transparent pointer-events-none" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialContact;
