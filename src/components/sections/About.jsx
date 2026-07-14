import { motion } from 'framer-motion';
import { ArrowRight, Shield, Target, Award, Users, Crosshair, TrendingUp } from 'lucide-react';

const About = () => {
  const floatingCards = [
    { title: "Professional Workforce", top: "10%", left: "-10%", delay: 0 },
    { title: "Customized Solutions", top: "35%", right: "-10%", delay: 0.2 },
    { title: "Integrated Services", bottom: "35%", left: "-5%", delay: 0.4 },
    { title: "Quality-Focused", bottom: "10%", right: "-5%", delay: 0.6 }
  ];

  const coreValues = [
    { name: "Integrity", icon: <Shield size={16} /> },
    { name: "Professionalism", icon: <Award size={16} /> },
    { name: "Reliability", icon: <Users size={16} /> },
    { name: "Discipline", icon: <Target size={16} /> },
    { name: "Customer Commitment", icon: <Crosshair size={16} /> },
    { name: "Continuous Improvement", icon: <TrendingUp size={16} /> }
  ];

  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden" id="about">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Side: Typography & Content */}
          <div className="flex flex-col text-left">
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-slate-900 tracking-tight leading-tight mb-8"
            >
              Delivering Reliable Security &<br/>
              <span className="text-gold">Facility Management Solutions</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="space-y-6 text-lg text-slate-600 font-body leading-relaxed mb-12"
            >
              <p>
                SMK Security Force provides professional Security and Integrated Facility Management services tailored to residential, commercial, industrial and institutional environments.
              </p>
              <p>
                We focus on delivering dependable manpower solutions, operational efficiency and responsive support while maintaining the highest standards of professionalism, discipline and service quality.
              </p>
              <p>
                Our objective is to build lasting relationships with clients by understanding their requirements and providing customized solutions that support safe, secure and well-managed environments.
              </p>
            </motion.div>

            {/* Mission & Vision Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12"
            >
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
                <h3 className="text-xl font-bold font-heading text-slate-900 mb-3 flex items-center gap-2">
                  <Target size={20} className="text-gold" />
                  Mission
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  To provide dependable Security and Facility Management solutions through professionalism, integrity and customer-focused service.
                </p>
              </div>
              
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
                <h3 className="text-xl font-bold font-heading text-slate-900 mb-3 flex items-center gap-2">
                  <TrendingUp size={20} className="text-gold" />
                  Vision
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  To become a trusted Security and Facility Management partner by consistently delivering reliable services and building long-term client relationships.
                </p>
              </div>
            </motion.div>

            {/* Core Values */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-400 mb-4">Core Values</h3>
              <div className="flex flex-wrap gap-3">
                {coreValues.map((val, idx) => (
                  <div key={idx} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-sm font-medium text-slate-700 shadow-sm hover:border-gold/50 transition-colors">
                    <span className="text-gold">{val.icon}</span>
                    {val.name}
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

          {/* Right Side: Visuals */}
          <div className="relative w-full h-[600px] lg:h-[800px] flex items-center justify-center pointer-events-none">
            
            {/* Main Composite Image Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative w-[85%] h-[85%] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-900/10 border-8 border-white bg-slate-100"
            >
              {/* Using the generated composite image */}
              <img 
                src="/about-composite.png" 
                alt="SMK Enterprise Security & Facility Management" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000"
              />
              
              {/* Subtle dark overlay for premium feel */}
              <div className="absolute inset-0 bg-slate-900/10 mix-blend-multiply"></div>
            </motion.div>

            {/* Floating Glass Cards */}
            {floatingCards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                animate={{
                  y: [0, -10, 0]
                }}
                transition={{
                  default: { duration: 0.8, delay: 0.5 + card.delay, ease: "easeOut" },
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: card.delay * 2 }
                }}
                className="absolute px-6 py-4 rounded-2xl glass-dark shadow-xl backdrop-blur-xl border border-white/10"
                style={{
                  top: card.top,
                  bottom: card.bottom,
                  left: card.left,
                  right: card.right,
                  zIndex: 20
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-gold"></div>
                  <span className="text-sm font-semibold text-white whitespace-nowrap tracking-wide">{card.title}</span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Bottom Premium CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-32 p-10 md:p-14 bg-slate-900 rounded-[2.5rem] shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8"
        >
          {/* Decorative background sweeps */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[100px] transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
          
          <div className="relative z-10 max-w-2xl text-center md:text-left">
            <h3 className="text-3xl md:text-4xl font-bold font-heading text-white leading-tight">
              Looking for Reliable Security &<br/>
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

export default About;
