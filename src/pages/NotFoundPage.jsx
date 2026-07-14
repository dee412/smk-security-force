import { motion } from 'framer-motion';
import { ArrowLeft, ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-6 relative overflow-hidden font-body">
      {/* Background Glow */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-lg w-full text-center">
        {/* Animated Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="w-24 h-24 bg-slate-900 border border-slate-800 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl"
        >
          <ShieldAlert size={48} className="text-gold stroke-[1.5]" />
        </motion.div>

        {/* Status */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-8xl font-black font-heading tracking-tight text-white mb-2"
        >
          404
        </motion.h1>

        {/* Message */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl font-bold font-heading text-gold mb-6"
        >
          Page Not Found
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-400 leading-relaxed mb-10"
        >
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Let's get you back on track.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2.5 bg-slate-900 border border-gold/30 hover:border-gold text-white hover:text-slate-900 hover:bg-gold px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-xl group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFoundPage;
