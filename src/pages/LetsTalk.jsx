import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Copy,
  Check,
  Globe,
} from "lucide-react";

const InstagramIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const projectTypes = [
  "Brand Identity",
  "Packaging Design",
  "Social Media Design",
  "Web Design",
  "Illustration",
  "Other",
];

const budgetRanges = ["< ₹10,000", "₹10k - ₹30k", "₹30k - ₹50k", "₹50k+"];

const LetsTalk = ({ onBackHome }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Brand Identity",
    budget: "₹10k - ₹30k",
    message: "",
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  const handleCopyEmail = (e) => {
    if (e && e.stopPropagation) {
      e.stopPropagation();
    }
    const emailText = "poornimanaikwade299@gmail.com";

    const fallbackCopy = (text) => {
      try {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "fixed";
        textArea.style.top = "0";
        textArea.style.left = "0";
        textArea.style.width = "2em";
        textArea.style.height = "2em";
        textArea.style.padding = "0";
        textArea.style.border = "none";
        textArea.style.outline = "none";
        textArea.style.boxShadow = "none";
        textArea.style.background = "transparent";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      } catch (err) {
        console.error("Fallback copy failed:", err);
      }
    };

    try {
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(emailText).then(() => {
          setCopiedEmail(true);
          setTimeout(() => setCopiedEmail(false), 2500);
        }).catch(() => {
          fallbackCopy(emailText);
          setCopiedEmail(true);
          setTimeout(() => setCopiedEmail(false), 2500);
        });
        return;
      } else {
        fallbackCopy(emailText);
      }
    } catch (err) {
      fallbackCopy(emailText);
    }

    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API request timeout
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <div className="min-h-screen w-full bg-primary-bg text-ivory flex flex-col justify-between relative overflow-hidden isolate">
      {/* Premium Navbar */}
      <Navbar />

      {/* Background Radial Glow Accents */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,_#5D2F3E25_0%,_transparent_70%)] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,_#40222B30_0%,_transparent_70%)] pointer-events-none -z-10" />

      {/* Main Page Content Container */}
      <main className="flex-grow w-full pt-28 sm:pt-32 md:pt-36 pb-16 px-6 md:px-12 xl:px-24 max-w-7xl mx-auto">
        {/* Hero Title Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 md:mb-16 flex flex-col gap-4 max-w-7xl"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-rose/30 bg-rose/5 w-fit text-rose font-body text-xs tracking-widest uppercase font-semibold">
            <span className="w-2 h-2 rounded-full bg-rose animate-pulse" />
            <span>GET IN TOUCH</span>
          </div>

          <h1 className="font-hero text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase text-ivory leading-[1.05] tracking-tight">
            LET'S CREATE SOMETHING{" "}
            <span className="text-rose">EXTRAORDINARY</span> TOGETHER.
          </h1>

          <p className="font-body text-sm sm:text-base text-warm-beige/70 font-light leading-relaxed max-w-2xl">
            Have a project in mind, a freelance inquiry, or just want to say hi?
            Fill out the form below or reach out directly. I'd love to
            collaborate!
          </p>
        </motion.div>

        {/* Twin Card 5:3 Desktop Ratio Container */}
        <div className="grid grid-cols-1 lg:grid-cols-8 gap-8 lg:gap-10 items-start">
          {/* Left Card: Direct Contact Info (3/8 ratio on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-3 bg-secondary-bg/90 border border-white/10 rounded-2xl md:rounded-3xl p-6 sm:p-8 flex flex-col justify-between gap-8 shadow-2xl relative overflow-hidden group"
          >
            {/* Ambient Inner Radial Accent */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[radial-gradient(circle_at_center,_#5D2F3E30_0%,_transparent_70%)] pointer-events-none -z-10" />

            <div className="flex flex-col gap-6">
              <h2 className="font-hero text-2xl sm:text-3xl text-ivory font-bold uppercase tracking-wider pb-4 border-b border-glass-border">
                CONTACT DETAILS
              </h2>

              {/* Email Block */}
              <div className="flex flex-col gap-2">
                <span className="font-body text-xs tracking-widest text-warm-beige/50 font-bold uppercase">
                  DIRECT EMAIL
                </span>
                <div
                  onClick={handleCopyEmail}
                  className="flex items-center justify-between gap-2 p-3.5 rounded-xl border border-white/10 bg-white/[0.03] group/email hover:border-rose/40 transition-colors duration-300 cursor-pointer relative"
                >
                  <a
                    href="mailto:poornimanaikwade299@gmail.com"
                    onClick={(e) => {
                      handleCopyEmail(e);
                    }}
                    className="font-body text-xs sm:text-sm text-warm-beige hover:text-rose font-medium truncate transition-colors duration-300"
                  >
                    poornimanaikwade299@gmail.com
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    title="Copy Email Address"
                    className={`px-2.5 py-1.5 rounded-lg border font-body text-xs font-semibold flex items-center gap-1.5 transition-all duration-300 flex-shrink-0 cursor-pointer ${
                      copiedEmail
                        ? "border-rose bg-rose/20 text-rose font-bold shadow-md"
                        : "border-white/10 bg-white/5 text-warm-beige/70 hover:text-rose hover:border-rose/40"
                    }`}
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-rose" />
                        <span className="text-xs font-bold text-rose">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span className="text-xs">Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Phone Block */}
              <div className="flex flex-col gap-2">
                <span className="font-body text-xs tracking-widest text-warm-beige/50 font-bold uppercase">
                  PHONE / WHATSAPP
                </span>
                <a
                  href="tel:+918591073838"
                  className="flex items-center gap-3 p-3.5 rounded-xl border border-white/10 bg-white/[0.03] text-warm-beige hover:text-rose hover:border-rose/40 font-body text-xs sm:text-sm font-medium transition-all duration-300"
                >
                  <Phone className="w-4 h-4 text-rose flex-shrink-0" />
                  <span>+91 8591073838</span>
                </a>
              </div>

              {/* Location Block */}
              <div className="flex flex-col gap-2">
                <span className="font-body text-xs tracking-widest text-warm-beige/50 font-bold uppercase">
                  LOCATION
                </span>
                <div className="flex items-center gap-3 p-3.5 rounded-xl border border-white/10 bg-white/[0.03] text-warm-beige font-body text-xs sm:text-sm font-medium">
                  <MapPin className="w-4 h-4 text-rose flex-shrink-0" />
                  <span>Mumbai, India (Available Worldwide)</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex flex-col gap-3 pt-2">
                <span className="font-body text-xs tracking-widest text-warm-beige/50 font-bold uppercase">
                  SOCIAL CHANNELS
                </span>
                <div className="flex items-center gap-3 flex-wrap">
                  <a
                    href="https://instagram.com/bytheway.pooh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-white/10 bg-white/5 hover:border-rose hover:bg-rose/10 text-warm-beige hover:text-rose text-xs font-body transition-all duration-300"
                  >
                    <InstagramIcon className="w-3.5 h-3.5" />
                    <span>Instagram</span>
                  </a>
                  <a
                    href="https://behance.net"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-white/10 bg-white/5 hover:border-rose hover:bg-rose/10 text-warm-beige hover:text-rose text-xs font-body font-bold transition-all duration-300"
                  >
                    <span>Behance</span>
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-white/10 bg-white/5 hover:border-rose hover:bg-rose/10 text-warm-beige hover:text-rose text-xs font-body font-bold transition-all duration-300"
                  >
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Card: Interactive Project Form (5/8 ratio on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 bg-secondary-bg/90 border border-white/10 rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl relative overflow-hidden"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 px-4 flex flex-col items-center justify-center text-center gap-5 my-auto min-h-[420px]"
              >
                <div className="w-16 h-16 rounded-full border border-rose/40 bg-rose/10 flex items-center justify-center text-rose shadow-xl">
                  <CheckCircle2 className="w-8 h-8 text-rose" />
                </div>
                <h3 className="font-hero text-3xl sm:text-4xl text-ivory font-bold uppercase">
                  MESSAGE SENT SUCCESSFULLY!
                </h3>
                <p className="font-body text-sm text-warm-beige/70 max-w-md font-light leading-relaxed">
                  Thank you for reaching out, {formData.name || "friend"}! I
                  have received your project details and will get back to you
                  within 24 hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 px-6 py-3 rounded-full border border-rose/50 bg-white/5 hover:bg-rose/15 text-warm-beige hover:text-rose font-body text-xs font-semibold tracking-widest uppercase transition-all duration-300 cursor-pointer"
                >
                  SEND ANOTHER MESSAGE
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="flex items-center justify-between pb-4 border-b border-glass-border">
                  <h2 className="font-hero text-2xl sm:text-3xl text-ivory font-bold uppercase tracking-wider">
                    SEND A MESSAGE
                  </h2>
                  <Send className="w-5 h-5 text-rose" />
                </div>

                {/* Name & Email Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="font-body text-xs font-bold tracking-widest text-warm-beige/70 uppercase">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ananya Sharma"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-ivory font-body text-sm focus:outline-none focus:border-rose focus:ring-1 focus:ring-rose transition-all placeholder:text-warm-beige/30"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="font-body text-xs font-bold tracking-widest text-warm-beige/70 uppercase">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. ananya@aurelia.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-ivory font-body text-sm focus:outline-none focus:border-rose focus:ring-1 focus:ring-rose transition-all placeholder:text-warm-beige/30"
                    />
                  </div>
                </div>

                {/* Project Type Selectable Pills */}
                <div className="flex flex-col gap-2.5">
                  <label className="font-body text-xs font-bold tracking-widest text-warm-beige/70 uppercase">
                    What service do you need?
                  </label>
                  <div className="flex flex-wrap gap-2.5">
                    {projectTypes.map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() =>
                          setFormData({ ...formData, projectType: type })
                        }
                        className={`px-3.5 py-2 rounded-xl text-xs font-body font-medium transition-all duration-300 cursor-pointer ${
                          formData.projectType === type
                            ? "border border-rose bg-rose/20 text-rose font-semibold shadow-md"
                            : "border border-white/10 bg-white/[0.03] text-warm-beige/70 hover:text-warm-beige hover:border-white/20"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Budget Range Selectable Pills */}
                <div className="flex flex-col gap-2.5">
                  <label className="font-body text-xs font-bold tracking-widest text-warm-beige/70 uppercase">
                    Estimated Budget Range (INR ₹)
                  </label>
                  <div className="flex flex-wrap gap-2.5">
                    {budgetRanges.map((range) => (
                      <button
                        type="button"
                        key={range}
                        onClick={() =>
                          setFormData({ ...formData, budget: range })
                        }
                        className={`px-3.5 py-2 rounded-xl text-xs font-body font-medium transition-all duration-300 cursor-pointer ${
                          formData.budget === range
                            ? "border border-rose bg-rose/20 text-rose font-semibold shadow-md"
                            : "border border-white/10 bg-white/[0.03] text-warm-beige/70 hover:text-warm-beige hover:border-white/20"
                        }`}
                      >
                        {range}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message Textarea */}
                <div className="flex flex-col gap-2">
                  <label className="font-body text-xs font-bold tracking-widest text-warm-beige/70 uppercase">
                    Project Overview / Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about your project, timeline, deliverables, and vision..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-ivory font-body text-sm focus:outline-none focus:border-rose focus:ring-1 focus:ring-rose transition-all placeholder:text-warm-beige/30 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl border border-rose/60 bg-rose/15 hover:bg-rose/25 text-ivory font-body text-xs font-bold tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-3 group shadow-xl cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>SENDING...</span>
                  ) : (
                    <>
                      <span>SEND MESSAGE</span>
                      <Send className="w-4 h-4 text-rose group-hover:translate-x-1 transition-transform duration-300" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </main>

      {/* Floating Toast Notification for Email Copy */}
      <AnimatePresence>
        {copiedEmail && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 px-5 py-3 rounded-full bg-[#1A1517] border border-rose/60 text-ivory text-xs sm:text-sm font-body shadow-2xl flex items-center gap-2.5 backdrop-blur-md"
          >
            <Check className="w-4 h-4 text-rose flex-shrink-0" />
            <span className="font-medium">Email copied to clipboard!</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Premium Footer */}
      <Footer />
    </div>
  );
};

export default LetsTalk;
