import { motion } from 'framer-motion';
import { ArrowRight, ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';

const CareersCTA = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-slate-950 overflow-hidden">
      {/* Background Graphic elements */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-slate-800 to-transparent skew-x-12 transform origin-right"></div>
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-gold/10 blur-[100px] rounded-full transform -translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="bg-slate-900 border border-slate-800 rounded-[2.5rem] p-8 md:p-16 lg:p-20 shadow-2xl relative overflow-hidden flex flex-col items-center text-center max-w-5xl mx-auto">
          
          {/* Subtle noise texture overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="w-20 h-20 bg-slate-800 rounded-2xl flex items-center justify-center mb-8 border border-slate-700 shadow-inner"
          >
            <ShieldAlert size={40} className="text-gold stroke-[1.5]" />
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white tracking-tight mb-6"
          >
            Join the <span className="text-gold italic pr-2">Force.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-slate-400 max-w-2xl font-body mb-12"
          >
            We are looking for disciplined, highly-trained professionals who understand that security is more than just a job—it's a responsibility. Build a powerful career with SMK Security Force.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link 
              to="/careers"
              className="group relative inline-flex items-center justify-center px-8 py-4 font-semibold text-white transition-all duration-200 bg-transparent border border-gold rounded-xl hover:bg-gold hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold focus:ring-offset-slate-900"
            >
              <span className="flex items-center gap-2 relative z-10">
                View Open Positions
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CareersCTA;
