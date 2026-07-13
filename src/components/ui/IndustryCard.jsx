import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const IndustryCard = ({ industry, index, onClick, className = "" }) => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse Parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 150 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(springY, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(springX, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
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

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={() => onClick(industry)}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative w-full h-full min-h-[320px] md:min-h-[380px] rounded-[2rem] cursor-pointer perspective-[1000px] ${className}`}
    >
      <div 
        className="absolute inset-0 rounded-[2rem] bg-slate-900 overflow-hidden border transition-all duration-500"
        style={{
          boxShadow: isHovered ? '0 30px 60px -15px rgba(212,175,55,0.15)' : '0 10px 30px -10px rgba(0,0,0,0.5)',
          borderColor: isHovered ? 'rgba(212,175,55,0.4)' : 'rgba(30,41,59,1)'
        }}
      >
        
        {/* Background Image & Overlay */}
        <motion.div
          className="absolute inset-0 w-full h-full"
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <img 
            src={industry.image} 
            alt={industry.title} 
            loading="lazy"
            className="w-full h-full object-cover opacity-80 mix-blend-screen"
          />
          {/* Cinematic Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-slate-900/40 mix-blend-multiply"></div>
        </motion.div>

        {/* Content Container */}
        <div className="absolute inset-0 p-8 flex flex-col justify-end transform-style-3d">
          
          {/* Top Icon */}
          <motion.div 
            className="absolute top-8 left-8 w-14 h-14 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-white"
            animate={{ 
              y: isHovered ? -5 : 0,
              backgroundColor: isHovered ? 'rgba(212,175,55,0.1)' : 'rgba(255,255,255,0.05)',
              borderColor: isHovered ? 'rgba(212,175,55,0.3)' : 'rgba(255,255,255,0.1)',
              color: isHovered ? '#D4AF37' : '#FFFFFF'
            }}
            transition={{ duration: 0.3 }}
            style={{ transform: "translateZ(30px)" }}
          >
            <industry.icon size={28} />
          </motion.div>

          <div style={{ transform: "translateZ(40px)" }} className="relative z-10 w-full">
            <h3 className="text-2xl font-bold font-heading text-white mb-3">
              {industry.title}
            </h3>
            
            <motion.p 
              className="text-slate-300 text-sm md:text-base leading-relaxed mb-4 line-clamp-3"
              animate={{ opacity: isHovered ? 1 : 0.8 }}
            >
              {industry.description}
            </motion.p>

            {/* Explore Sector Arrow */}
            <motion.div 
              className="overflow-hidden"
              initial={false}
              animate={{ 
                height: isHovered ? 'auto' : 0,
                opacity: isHovered ? 1 : 0,
                marginTop: isHovered ? 16 : 0
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-2 text-gold font-semibold text-sm tracking-wide uppercase">
                Explore Sector
                <ArrowRight size={16} />
              </div>
            </motion.div>

          </div>
        </div>

        {/* Soft Lighting Effect */}
        <motion.div 
          className="absolute inset-0 opacity-0 pointer-events-none mix-blend-overlay"
          animate={{ opacity: isHovered ? 1 : 0 }}
          style={{
            background: 'radial-gradient(circle at 50% 100%, rgba(212,175,55,0.4) 0%, transparent 60%)'
          }}
        />

      </div>
    </motion.div>
  );
};

export default IndustryCard;
