import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Building, 
  Home, 
  Stethoscope, 
  GraduationCap, 
  Factory, 
  Truck, 
  ShoppingCart, 
  Hotel,
  ArrowRight
} from 'lucide-react';

import IndustryCard from '../ui/IndustryCard';
import IndustryModal from '../ui/IndustryModal';

const industriesData = [
  {
    id: "corporate",
    title: "Corporate Offices",
    description: "Professional security and facility management solutions for corporate workspaces and business parks.",
    icon: Building,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop",
    colSpan: "lg:col-span-2",
    rowSpan: "lg:row-span-1"
  },
  {
    id: "residential",
    title: "Residential Communities",
    description: "Reliable security, housekeeping and maintenance services for apartments, gated communities and residential complexes.",
    icon: Home,
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000&auto=format&fit=crop",
    colSpan: "lg:col-span-1",
    rowSpan: "lg:row-span-1"
  },
  {
    id: "hospitals",
    title: "Hospitals & Healthcare",
    description: "Professional manpower and facility management solutions supporting healthcare environments.",
    icon: Stethoscope,
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1000&auto=format&fit=crop",
    colSpan: "lg:col-span-1",
    rowSpan: "lg:row-span-1"
  },
  {
    id: "educational",
    title: "Educational Institutions",
    description: "Security, housekeeping and facility maintenance services for schools, colleges and universities.",
    icon: GraduationCap,
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
    colSpan: "lg:col-span-2",
    rowSpan: "lg:row-span-1"
  },
  {
    id: "manufacturing",
    title: "Manufacturing & Industrial Facilities",
    description: "Industrial security, technical maintenance and integrated facility support.",
    icon: Factory,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop",
    colSpan: "lg:col-span-1",
    rowSpan: "lg:row-span-2"
  },
  {
    id: "warehouses",
    title: "Warehouses & Logistics",
    description: "Comprehensive security and maintenance solutions for warehouses, logistics parks and distribution centers.",
    icon: Truck,
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop",
    colSpan: "lg:col-span-2",
    rowSpan: "lg:row-span-1"
  },
  {
    id: "retail",
    title: "Retail & Shopping Centres",
    description: "Professional facility management services ensuring safe and efficient retail operations.",
    icon: ShoppingCart,
    image: "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?q=80&w=1000&auto=format&fit=crop",
    colSpan: "lg:col-span-1",
    rowSpan: "lg:row-span-1"
  },
  {
    id: "hotels",
    title: "Hotels & Hospitality",
    description: "Integrated housekeeping, security and facility maintenance solutions for hospitality businesses.",
    icon: Hotel,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000&auto=format&fit=crop",
    colSpan: "lg:col-span-1",
    rowSpan: "lg:row-span-1"
  }
];

const Industries = () => {
  const [selectedIndustry, setSelectedIndustry] = useState(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <>
      <section className="py-24 lg:py-32 bg-white relative" id="industries" ref={sectionRef}>
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          
          {/* Header */}
          <div className="max-w-3xl mb-16 lg:mb-24">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="text-4xl sm:text-5xl font-bold font-heading text-slate-900 tracking-tight leading-tight mb-6"
            >
              Delivering Security &<br/>
              <span className="text-gold">Facility Management Solutions</span> Across Multiple Industries
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-lg text-slate-600 font-body leading-relaxed max-w-2xl"
            >
              We provide customized Security and Facility Management services designed to meet the operational requirements of a wide range of industries and business environments.
            </motion.p>
          </div>

          {/* Bento Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6"
          >
            {industriesData.map((industry, index) => (
              <motion.div 
                key={industry.id} 
                variants={cardVariants}
                className={`${industry.colSpan} ${industry.rowSpan}`}
              >
                <IndustryCard 
                  industry={industry} 
                  index={index} 
                  onClick={setSelectedIndustry} 
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA Block */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="mt-24 p-10 md:p-14 bg-slate-900 rounded-[2.5rem] relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl"
          >
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>
            
            <div className="relative z-10 max-w-2xl text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold font-heading text-white leading-tight">
                Need Security &<br/>
                <span className="text-gold">Facility Management Solutions</span> for Your Industry?
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

      {/* Premium Click Modal */}
      <IndustryModal 
        isOpen={!!selectedIndustry} 
        onClose={() => setSelectedIndustry(null)} 
        industry={selectedIndustry} 
      />
    </>
  );
};

export default Industries;
