import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, MapPin, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import ApplicationForm from '../ui/ApplicationForm';

const jobs = [
  "Security Guard",
  "Security Supervisor",
  "Housekeeping Staff",
  "Housekeeping Supervisor",
  "Gardener",
  "Pest Control Technician",
  "BMS Operator",
  "Electrician",
  "Plumber",
  "STP / ETP / WTP Operator",
  "Transformer Maintenance Technician",
  "Lift Maintenance Technician"
];

const JobCard = ({ title, onApply }) => {
  return (
    <motion.div 
      whileHover={{ y: -4 }}
      className="bg-white rounded-3xl p-6 lg:p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:border-gold/30 transition-all duration-300 relative group overflow-hidden"
    >
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 blur-[50px] rounded-full group-hover:bg-gold/10 transition-colors pointer-events-none"></div>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 relative z-10">
        
        <div className="space-y-4 w-full">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 border border-green-100 text-green-700 text-xs font-bold uppercase tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
            Now Hiring
          </div>

          <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 group-hover:text-gold transition-colors">
            {title}
          </h3>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <div className="flex items-center gap-2 text-slate-600 text-sm font-medium">
              <Briefcase size={16} className="text-slate-400" />
              Full Time
            </div>
            <div className="flex items-center gap-2 text-slate-600 text-sm font-medium">
              <MapPin size={16} className="text-slate-400" />
              Location: TBD by Admin
            </div>
            <div className="flex items-center gap-2 text-slate-600 text-sm font-medium">
              <Clock size={16} className="text-slate-400" />
              Freshers & Experienced
            </div>
          </div>
        </div>

        <button 
          onClick={() => onApply(title)}
          className="shrink-0 w-full sm:w-auto px-6 py-3 bg-slate-100 text-slate-900 font-bold rounded-xl group-hover:bg-slate-900 group-hover:text-gold transition-colors flex items-center justify-center gap-2"
        >
          Apply Now
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </button>

      </div>
    </motion.div>
  );
};

const Careers = () => {
  const [selectedPosition, setSelectedPosition] = useState("");
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const handleApplyClick = (title) => {
    setSelectedPosition(title);
    // Smooth scroll to the form on mobile/tablet
    if (window.innerWidth < 1024) {
      document.getElementById("application-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="py-24 lg:py-32 bg-slate-50 relative overflow-hidden" id="careers" ref={sectionRef}>
      
      <div className="container relative z-10 mx-auto px-4 lg:px-8 max-w-7xl">
        
        {/* Header Section */}
        <div className="max-w-3xl mb-16 lg:mb-24 text-center mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-200 border border-slate-300 w-fit mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-gold"></span>
            <span className="text-xs font-semibold uppercase tracking-widest text-slate-700">Careers</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-4xl sm:text-5xl font-bold font-heading text-slate-900 tracking-tight leading-tight mb-6"
          >
            Build Your Career with<br/>
            <span className="text-gold">SMK Security Force</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg text-slate-600 font-body leading-relaxed max-w-2xl mx-auto"
          >
            Join a team committed to professionalism, discipline and quality service. We are looking for dedicated individuals across Security, Housekeeping, Facility Management and Technical Maintenance.
          </motion.p>
        </div>

        {/* Split Layout: Jobs (Left) & Form (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Job Openings (Scrollable/Stacked) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-7 flex flex-col gap-4 lg:gap-6"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold font-heading text-slate-900 flex items-center gap-3">
                Current Openings
                <span className="px-2.5 py-1 rounded-lg bg-slate-900 text-white text-sm font-bold">{jobs.length}</span>
              </h3>
            </div>
            
            {/* The list of jobs */}
            <div className="flex flex-col gap-4">
              {jobs.map((job, idx) => (
                <JobCard key={idx} title={job} onApply={handleApplyClick} />
              ))}
            </div>
          </motion.div>

          {/* Right Column: Sticky Application Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            id="application-form"
            className="lg:col-span-5 lg:sticky lg:top-32"
          >
            <ApplicationForm prefilledPosition={selectedPosition} />
          </motion.div>

        </div>

        {/* Bottom Premium CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="mt-24 p-10 md:p-14 bg-slate-900 rounded-[2.5rem] relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl"
        >
          {/* Background Texture */}
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>
          
          <div className="relative z-10 max-w-2xl text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold font-heading text-white leading-tight mb-2">
              Looking for a Career in Security &<br/>
              <span className="text-gold">Facility Management?</span>
            </h3>
            <p className="text-slate-400 text-lg">Join SMK Security Force Today.</p>
          </div>

          <div className="relative z-10 shrink-0">
            <button
              onClick={() => {
                document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group flex items-center justify-center gap-3 bg-gold text-slate-900 px-10 py-5 rounded-2xl text-lg font-bold hover:bg-yellow-500 transition-all duration-300 shadow-[0_0_30px_rgba(212,175,55,0.2)] active:scale-95"
            >
              Apply Now
              <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Careers;
