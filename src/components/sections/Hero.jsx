import { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Hero = () => {
  const logoRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse Parallax Setup
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(springY, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(springX, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e) => {
    if (!logoRef.current) return;
    const rect = logoRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  const trustCards = [
    "Professional Workforce",
    "Customized Solutions",
    "Reliable Operations",
    "Quality-Focused Service"
  ];

  // Particles generation
  const [particles, setParticles] = useState([]);
  useEffect(() => {
    const newParticles = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5
    }));
    setParticles(newParticles);
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-slate-950 overflow-hidden flex items-center pt-24 lg:pt-0">
      
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        {/* Radial Dark Navy Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-slate-950 opacity-80"></div>
        
        {/* Light Grid Texture */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]"></div>
        
        {/* Animated Particles */}
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-gold opacity-20"
            style={{
              width: p.size,
              height: p.size,
              left: `${p.x}%`,
              top: `${p.y}%`,
            }}
            animate={{
              y: [0, -100],
              opacity: [0, 0.4, 0],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[calc(100vh-100px)] pt-28 pb-12 lg:pt-32">
          
          {/* Left Side: Content (55% on desktop -> col-span-7) */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            


            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-white tracking-tight leading-[1.1] mb-6"
            >
              SMK <br className="hidden sm:block"/>
              <span className="text-gold">SECURITY FORCE</span>
              <span className="block text-2xl sm:text-3xl lg:text-4xl text-slate-300 font-medium tracking-wide mt-2">
                & FACILITY MANAGEMENT SERVICES
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: [0, -6, 0] 
              }}
              transition={{ 
                opacity: { duration: 0.8, delay: 0.15, ease: "easeOut" },
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg w-fit mb-6"
            >
              <div className="w-8 h-8 rounded-full bg-white overflow-hidden flex items-center justify-center shrink-0">
                <img src="/iso-9001.png?v=2" alt="ISO 9001" className="w-full h-full object-cover" />
              </div>
              <div className="h-6 w-px bg-white/20"></div>
              <span className="text-xs font-semibold tracking-wider text-slate-200 uppercase">
                ISO 9001:2015 Certified Company
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-lg text-slate-300 max-w-2xl font-body leading-relaxed mb-10"
            >
              Providing professional security, housekeeping, technical maintenance, and integrated facility management services for residential, commercial, industrial, and institutional properties.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-center gap-4 mb-12"
            >
              <button
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto group flex items-center justify-center gap-2 bg-gold text-slate-900 px-8 py-4 rounded-xl text-base font-bold hover:bg-yellow-500 transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)] active:scale-95"
              >
                Contact Us
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={() => {
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto group flex items-center justify-center gap-2 bg-slate-900/50 backdrop-blur-md text-white border border-slate-700 px-8 py-4 rounded-xl text-base font-semibold hover:bg-slate-800 transition-all duration-300 hover:border-slate-500 active:scale-95"
              >
                Explore Our Services
              </button>
            </motion.div>

            {/* Trust Cards Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {trustCards.map((card, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center gap-3 p-4 rounded-2xl bg-slate-900/40 backdrop-blur-md border border-slate-800/50 shadow-lg hover:border-gold/30 transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 size={16} className="text-gold" />
                  </div>
                  <span className="text-sm font-semibold text-slate-200">{card}</span>
                </div>
              ))}
            </motion.div>

          </div>

          {/* Right Side: Interactive Premium Logo (45% on desktop -> col-span-5) */}
          <div className="lg:col-span-5 flex justify-center items-center h-full perspective-[1000px] mt-10 lg:mt-0">
            <motion.div
              ref={logoRef}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                y: [-10, 10, -10] // Slow floating animation
              }}
              transition={{ 
                opacity: { duration: 1, ease: "easeOut", delay: 0.2 },
                scale: { duration: 1, ease: "easeOut", delay: 0.2 },
                y: { duration: 6, repeat: Infinity, ease: "easeInOut" } 
              }}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={handleMouseLeave}
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d"
              }}
              className="relative w-full max-w-[400px] aspect-square rounded-full p-2 cursor-pointer"
            >
              
              {/* Outer Glow behind the logo */}
              <motion.div 
                className="absolute inset-0 rounded-full bg-gold/20 blur-3xl"
                animate={{ opacity: isHovered ? 0.6 : 0.3 }}
                transition={{ duration: 0.5 }}
              />

              {/* The Official Logo Image */}
              <div 
                className="relative w-full h-full rounded-full overflow-hidden border-2 border-slate-700/50 shadow-2xl bg-slate-900"
                style={{
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 0 20px rgba(212,175,55,0.2)"
                }}
              >
                <img 
                  src="/logo.jpg" 
                  alt="SMK Security Force Official Logo" 
                  className="w-full h-full object-cover scale-110"
                />

                {/* Glass Reflection Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-50 pointer-events-none transform -skew-x-12"></div>

                {/* Gold Light Sweep on Hover */}
                <motion.div 
                  className="absolute inset-0 opacity-0 bg-gradient-to-r from-transparent via-gold/30 to-transparent skew-x-12"
                  initial={{ x: '-100%' }}
                  animate={isHovered ? { x: '100%', opacity: 1 } : { x: '-100%', opacity: 0 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />
              </div>

            </motion.div>
          </div>

        </div>
      </div>
      
    </section>
  );
};

export default Hero;
