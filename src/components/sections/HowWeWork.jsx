import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { 
  PhoneCall, 
  ClipboardList, 
  Settings, 
  ShieldCheck, 
  Headset,
  ArrowRight
} from 'lucide-react';

const steps = [
  {
    title: "Contact Us",
    description: "Reach out to our team through our website, phone, or email to discuss your requirements.",
    icon: PhoneCall,
  },
  {
    title: "Requirement Discussion",
    description: "We understand your security and facility management needs and gather the necessary details.",
    icon: ClipboardList,
  },
  {
    title: "Customized Solution",
    description: "Our team prepares a solution tailored to your property's operational requirements.",
    icon: Settings,
  },
  {
    title: "Service Deployment",
    description: "Qualified personnel and services are deployed according to the agreed plan.",
    icon: ShieldCheck,
  },
  {
    title: "Ongoing Support",
    description: "We provide continuous communication and support to ensure smooth and reliable service delivery.",
    icon: Headset,
  }
];

const HowWeWork = () => {
  const containerRef = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Scroll logic for the line drawing
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Map scroll progress to horizontal width (Desktop)
  const lineScaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  
  // Map scroll progress to vertical height (Mobile)
  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="py-24 lg:py-32 bg-slate-950 relative overflow-hidden" id="how-we-work" ref={sectionRef}>
      
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900/40 via-slate-950 to-slate-950 pointer-events-none"></div>

      <div className="container relative z-10 mx-auto px-4 lg:px-8 max-w-7xl">
        
        {/* Header Section */}
        <div className="max-w-3xl mb-16 lg:mb-24 text-center mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 w-fit mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-gold"></span>
            <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">How We Work</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-4xl sm:text-5xl font-bold font-heading text-white tracking-tight leading-tight mb-6"
          >
            A Simple & <span className="text-gold">Professional Process</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg text-slate-400 font-body leading-relaxed max-w-2xl mx-auto"
          >
            We follow a structured approach to understand your requirements, recommend the right solutions, and deliver dependable Security & Facility Management services.
          </motion.p>
        </div>

        {/* Timeline Container */}
        <div ref={containerRef} className="relative py-10 lg:py-20">
          
          {/* DESKTOP BACKGROUND LINE (Gray track) */}
          <div className="hidden lg:block absolute top-[110px] left-0 w-full h-[2px] bg-slate-800/50"></div>
          {/* DESKTOP ANIMATED LINE (Gold fill) */}
          <motion.div 
            className="hidden lg:block absolute top-[110px] left-0 h-[2px] bg-gradient-to-r from-gold/20 via-gold to-gold origin-left shadow-[0_0_15px_rgba(212,175,55,0.6)]"
            style={{ width: "100%", scaleX: lineScaleX }}
          />

          {/* MOBILE BACKGROUND LINE (Gray track) */}
          <div className="lg:hidden absolute top-0 bottom-0 left-[31px] w-[2px] bg-slate-800/50"></div>
          {/* MOBILE ANIMATED LINE (Gold fill) */}
          <motion.div 
            className="lg:hidden absolute top-0 left-[31px] w-[2px] bg-gradient-to-b from-gold/20 via-gold to-gold origin-top shadow-[0_0_15px_rgba(212,175,55,0.6)]"
            style={{ height: "100%", scaleY: lineScaleY }}
          />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-6 relative z-10">
            {steps.map((step, index) => {
              
              // Calculate threshold for when this step should highlight based on scroll progress
              const highlightThreshold = index / (steps.length - 1);
              
              const opacity = useTransform(
                scrollYProgress,
                [highlightThreshold - 0.2, highlightThreshold],
                [0.4, 1]
              );
              
              const scale = useTransform(
                scrollYProgress,
                [highlightThreshold - 0.2, highlightThreshold],
                [0.8, 1]
              );

              const glow = useTransform(
                scrollYProgress,
                [highlightThreshold - 0.2, highlightThreshold],
                ["0px 0px 0px rgba(212,175,55,0)", "0px 0px 20px rgba(212,175,55,0.4)"]
              );

              return (
                <motion.div 
                  key={index}
                  style={{ opacity }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="relative flex flex-row lg:flex-col gap-6 lg:gap-8 items-start lg:items-center group"
                >
                  {/* Step Number / Icon Node */}
                  <motion.div 
                    style={{ scale, boxShadow: glow }}
                    className="shrink-0 relative w-16 h-16 rounded-full bg-slate-900 border-2 border-slate-700 flex items-center justify-center text-slate-400 group-hover:border-gold group-hover:text-gold transition-colors duration-500 z-10"
                  >
                    {/* Inner glowing bg on hover */}
                    <div className="absolute inset-0 rounded-full bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <step.icon size={24} className="relative z-10" />
                    
                    {/* Step Number Badge */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gold text-slate-900 font-bold text-xs flex items-center justify-center border-2 border-slate-950">
                      {index + 1}
                    </div>
                  </motion.div>

                  {/* Card Content */}
                  <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-800 p-6 rounded-[2rem] group-hover:border-gold/30 transition-colors duration-500 group-hover:shadow-[0_20px_40px_-15px_rgba(212,175,55,0.15)] flex-1 lg:text-center w-full">
                    <h3 className="text-xl font-bold font-heading text-white mb-3 group-hover:text-gold transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>

        {/* Bottom Premium CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="mt-16 lg:mt-24 p-10 md:p-14 bg-gradient-to-r from-gold/10 via-gold/5 to-transparent rounded-[2.5rem] border border-gold/20 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-center md:justify-between gap-8 backdrop-blur-sm"
        >
          <div className="relative z-10 max-w-2xl text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold font-heading text-white leading-tight">
              Ready to <span className="text-gold">Get Started?</span>
            </h3>
          </div>

          <div className="relative z-10 shrink-0">
            <button
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group flex items-center justify-center gap-3 bg-gold text-slate-900 px-10 py-5 rounded-2xl text-lg font-bold hover:bg-yellow-500 transition-all duration-300 shadow-[0_0_30px_rgba(212,175,55,0.2)] active:scale-95"
            >
              Contact Us
              <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HowWeWork;
