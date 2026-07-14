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
  },
  {
    title: "ISO 9001:2015 Certified",
    isIso: true,
    description: "Operating under an official Quality Management System, verifying our commitment to consistent, professional, and reliable services."
  }
];

const FeatureCard = ({ feature }) => {
  const isIso = feature.isIso;

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
      }}
      whileHover={{ y: -5, scale: 1.02 }}
      className={`group relative bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 hover:border-gold/40 transition-all duration-500 overflow-hidden ${
        isIso ? 'sm:col-span-2 lg:col-span-3 border-gold/20 bg-gradient-to-r from-slate-900/80 to-gold/5' : ''
      }`}
    >
      {/* Soft Gold Glow on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-gold/0 via-gold/0 to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute -inset-px bg-gradient-to-r from-transparent via-gold/20 to-transparent opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500 rounded-3xl pointer-events-none"></div>

      <div className="relative z-10">
        <div className="w-14 h-14 mb-6">
          {isIso ? (
            <div className="w-14 h-14 rounded-full bg-white p-1 flex items-center justify-center shadow-md border border-slate-200">
              <img src="/iso-9001.png?v=2" alt="ISO 9001 Seal" className="w-full h-full object-contain" />
            </div>
          ) : (
            <div className="w-14 h-14 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 group-hover:text-gold group-hover:border-gold/30 group-hover:bg-gold/10 transition-colors duration-500">
              <feature.icon size={28} />
            </div>
          )}
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
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white tracking-tight leading-tight mb-6"
          >
            Your Trusted Partner for Security & <span className="text-gold">Facility Management Solutions</span>
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

        {/* Features Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </motion.div>

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
