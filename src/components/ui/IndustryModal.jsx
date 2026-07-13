import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import { useEffect } from 'react';

const IndustryModal = ({ isOpen, onClose, industry }) => {
  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && industry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
          
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(12px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/80"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-5xl max-h-[90vh] bg-slate-50 rounded-[2rem] shadow-2xl overflow-hidden flex flex-col"
          >
            
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-slate-900/40 backdrop-blur-md text-white hover:bg-gold hover:text-slate-900 transition-colors duration-300"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>

            {/* Scrollable Content */}
            <div className="overflow-y-auto w-full h-full custom-scrollbar">
              
              {/* Hero Image */}
              <div className="relative w-full h-[30vh] sm:h-[40vh] shrink-0">
                <img 
                  src={industry.image} 
                  alt={industry.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-gold/20 backdrop-blur-md flex items-center justify-center text-gold border border-gold/30">
                      <industry.icon size={28} />
                    </div>
                  </div>
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white">
                    {industry.title}
                  </h3>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-8 lg:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                  
                  {/* Left Column (Overview & Categories) */}
                  <div className="lg:col-span-2 space-y-10">
                    
                    <div>
                      <h4 className="text-xl font-bold font-heading text-slate-900 mb-4">Industry Overview</h4>
                      <p className="text-lg text-slate-600 leading-relaxed">
                        {industry.description} We understand the unique challenges of this sector and deploy highly trained professionals equipped with the latest protocols to ensure safety, efficiency, and compliance.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold font-heading text-slate-900 mb-4">Related Service Categories</h4>
                      <div className="flex flex-wrap gap-3">
                        {['Manned Guarding', 'Surveillance', 'Facility Maintenance', 'Housekeeping', 'Emergency Response'].map((cat, idx) => (
                          <div key={idx} className="px-4 py-2 rounded-full bg-slate-200 text-slate-700 text-sm font-medium border border-slate-300">
                            {cat}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column (Typical Services & CTA) */}
                  <div className="space-y-8">
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                      <h4 className="text-xl font-bold font-heading text-slate-900 mb-6">Typical Services Provided</h4>
                      <ul className="space-y-4">
                        {[
                          "24/7 Security Patrols",
                          "Access Control Management",
                          "Janitorial & Housekeeping",
                          "Technical Maintenance"
                        ].map((service, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle2 size={20} className="text-gold shrink-0 mt-0.5" />
                            <span className="text-slate-700 font-medium">{service}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button
                      onClick={() => {
                        onClose();
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="w-full group flex items-center justify-center gap-2 bg-slate-900 text-white px-6 py-4 rounded-xl text-base font-bold hover:bg-gold hover:text-slate-900 transition-all duration-300 shadow-lg"
                    >
                      Contact Us
                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>

                </div>
              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default IndustryModal;
