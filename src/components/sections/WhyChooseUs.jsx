import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Users, 
  Settings, 
  ShieldCheck, 
  Building2, 
  Headset, 
  BadgeCheck,
  ArrowRight
} from 'lucide-react';

const features = [
  {
    title: "Professional Workforce",
    icon: Users,
    description: "Professionally trained personnel dedicated to delivering reliable and disciplined services."
  },
  {
    title: "Customized Solutions",
    icon: Settings,
    description: "Tailored security and facility management services designed around each client's requirements."
  },
  {
    title: "Reliable Operations",
    icon: ShieldCheck,
    description: "Focused on consistent service delivery with professionalism, accountability and operational excellence."
  },
  {
    title: "Integrated Facility Management",
    icon: Building2,
    description: "A complete range of security, housekeeping, technical maintenance and support services under one roof."
  },
  {
    title: "Responsive Support",
    icon: Headset,
    description: "Prompt communication and responsive assistance to ensure smooth day-to-day operations."
  },
  {
    title: "Quality-Focused Service",
    icon: BadgeCheck,
    description: "Committed to maintaining high service standards through disciplined processes and continuous improvement."
  }
];

const FeatureCard = ({ feature, index }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
      }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="group relative bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 hover:border-gold/40 transition-all duration-500 overflow-hidden"
    >
      {/* Soft Gold Glow on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-gold/0 via-gold/0 to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute -inset-px bg-gradient-to-r from-transparent via-gold/20 to-transparent opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500 rounded-3xl pointer-events-none"></div>

      <div className="relative z-10">
        <div className="w-14 h-14 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 group-hover:text-gold group-hover:border-gold/30 group-hover:bg-gold/10 transition-colors duration-500 mb-6">
          <feature.icon size={28} />
        </div>
        
        <h3 className="text-xl font-bold font-heading text-white mb-3 group-hover:text-gold transition-colors duration-300">
          {feature.title}
        </h3>
        
        <p className="text-slate-400 text-sm leading-relaxed">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
};

const AbstractBuildingIllustration = () => {
  return (
    <div className="relative w-full h-full min-h-[400px] lg:min-h-[600px] flex items-center justify-center pointer-events-none perspective-[1000px]">
      
      {/* Center Glow */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[300px] h-[300px] rounded-full bg-gold/10 blur-[80px]"
      />

      <motion.div
        initial={{ opacity: 0, rotateX: 20 }}
        whileInView={{ opacity: 1, rotateX: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative w-full max-w-[400px] aspect-square transform-style-3d"
      >
        {/* Building Base (Abstract Rectangles) */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-48 h-64 bg-gradient-to-t from-slate-900 via-slate-800 to-slate-800/50 rounded-t-lg border border-slate-700/50 shadow-2xl backdrop-blur-sm">
          {/* Windows / Grid Lines */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:1rem_1rem]"></div>
        </div>
        
        {/* Smaller side building */}
        <div className="absolute bottom-10 left-12 w-24 h-40 bg-gradient-to-t from-slate-900 via-slate-800 to-slate-800/50 rounded-t-lg border border-slate-700/50 backdrop-blur-sm opacity-80"></div>
        <div className="absolute bottom-10 right-12 w-32 h-48 bg-gradient-to-t from-slate-900 via-slate-800 to-slate-800/50 rounded-t-lg border border-slate-700/50 backdrop-blur-sm opacity-90"></div>

        {/* Animated Network Lines / Security Indicators */}
        {/* Line 1 */}
        <motion.div 
          className="absolute bottom-32 left-8 w-1 h-20 bg-gradient-to-t from-transparent via-gold to-transparent"
          animate={{ y: [-50, 50], opacity: [0, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
        {/* Line 2 */}
        <motion.div 
          className="absolute bottom-40 right-20 w-1 h-32 bg-gradient-to-t from-transparent via-blue-500 to-transparent"
          animate={{ y: [80, -80], opacity: [0, 1, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 1 }}
        />
        
        {/* Security Nodes */}
        <motion.div 
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute top-20 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gold shadow-[0_0_15px_rgba(212,175,55,0.8)]"
        />
        <motion.div 
          animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
          className="absolute top-40 left-1/4 w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.8)]"
        />
        <motion.div 
          animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 2.2, repeat: Infinity, delay: 1 }}
          className="absolute top-32 right-1/4 w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.8)]"
        />

        {/* Circular Scanning Rings */}
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-gold/20"
          animate={{ rotateX: 60, rotateZ: [0, 360] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-blue-500/20 border-dashed"
          animate={{ rotateX: 60, rotateZ: [360, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

    </div>
  );
};

const WhyChooseUs = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  return (
    <section className="py-24 lg:py-32 bg-slate-950 relative overflow-hidden" id="why-choose-us" ref={sectionRef}>
      
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900/50 via-slate-950 to-slate-950 pointer-events-none"></div>

      <div className="container relative z-10 mx-auto px-4 lg:px-8 max-w-7xl">
        
        {/* Header Section */}
        <div className="max-w-3xl mb-16 lg:mb-24 text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 w-fit mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-gold"></span>
            <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">Why Choose SMK</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white tracking-tight leading-tight mb-6"
          >
            Your Trusted Partner for Security &<br/>
            <span className="text-gold">Facility Management Solutions</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg text-slate-400 font-body leading-relaxed max-w-2xl"
          >
            At SMK Security Force, we focus on delivering dependable services, disciplined manpower, and customized facility management solutions designed to meet the unique requirements of every client.
          </motion.p>
        </div>

        {/* Split Layout: Grid + Illustration */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Features Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} />
            ))}
          </motion.div>

          {/* Right Side: Abstract Illustration */}
          <div className="hidden lg:block h-full">
            <AbstractBuildingIllustration />
          </div>

        </div>

        {/* Bottom Premium CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="mt-24 p-10 md:p-14 bg-gradient-to-r from-gold/10 via-gold/5 to-transparent rounded-[2.5rem] border border-gold/20 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 backdrop-blur-sm"
        >
          <div className="relative z-10 max-w-2xl text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold font-heading text-white leading-tight">
              Need Professional Security &<br/>
              <span className="text-gold">Facility Management Services?</span>
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

export default WhyChooseUs;
