import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, MessageCircle } from 'lucide-react';

const FloatingActions = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show back-to-top button after scrolling down 500px
      if (window.scrollY > 500) {
        setShowTop(true);
      } else {
        setShowTop(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 flex flex-col gap-4 z-50">
      
      {/* Back to Top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            whileHover={{ y: -4 }}
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-slate-900 text-gold border border-slate-700 shadow-lg flex items-center justify-center hover:bg-slate-800 hover:border-gold transition-colors duration-300"
            aria-label="Back to top"
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* WhatsApp Chat Button */}
      <motion.a
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        href="https://wa.me/919845659570"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="w-12 h-12 rounded-full bg-[#25D366] text-white shadow-lg flex items-center justify-center hover:bg-[#20ba5a] transition-all duration-300 border border-[#25D366]/20"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle size={24} />
      </motion.a>

    </div>
  );
};

export default FloatingActions;
