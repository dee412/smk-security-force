import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Sparkles, 
  ShieldCheck, 
  Leaf, 
  BugOff, 
  Server, 
  Wrench, 
  Droplet, 
  Zap, 
  ArrowUpToLine, 
  Package 
} from 'lucide-react';

import ServiceCard from '../ui/ServiceCard';
import ServiceModal from '../ui/ServiceModal';

const servicesData = [
  {
    id: "security",
    title: "Security & Detective Services",
    description: "Professional guarding, surveillance, access control, executive protection, and investigative services.",
    icon: ShieldCheck,
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=1000&auto=format&fit=crop",
    colSpan: "lg:col-span-2", // Large card
    rowSpan: "lg:row-span-2"
  },
  {
    id: "housekeeping",
    title: "Housekeeping Services",
    description: "Professional housekeeping solutions for residential, commercial, industrial, healthcare, and institutional facilities.",
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1000&auto=format&fit=crop",
    colSpan: "lg:col-span-2", // Wide card
    rowSpan: "lg:row-span-1"
  },
  {
    id: "bms",
    title: "Building Management System (BMS) Operations",
    description: "Monitoring, operation, and preventive maintenance of intelligent building management systems.",
    icon: Server,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000&auto=format&fit=crop",
    colSpan: "lg:col-span-1",
    rowSpan: "lg:row-span-1"
  },
  {
    id: "electrical",
    title: "Electrical & Plumbing Maintenance",
    description: "Preventive maintenance, emergency repairs, and complete electrical and plumbing solutions.",
    icon: Wrench,
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=1000&auto=format&fit=crop",
    colSpan: "lg:col-span-1",
    rowSpan: "lg:row-span-1"
  },
  {
    id: "gardening",
    title: "Gardening & Landscape Maintenance",
    description: "Landscape development, lawn care, plantation maintenance, and green space management.",
    icon: Leaf,
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1000&auto=format&fit=crop",
    colSpan: "lg:col-span-1",
    rowSpan: "lg:row-span-1"
  },
  {
    id: "pest-control",
    title: "Pest Control Services",
    description: "Safe, effective, and environmentally responsible pest management solutions.",
    icon: BugOff,
    image: "/pest-control.png",
    colSpan: "lg:col-span-1",
    rowSpan: "lg:row-span-1"
  },
  {
    id: "stp",
    title: "STP, ETP, WTP & RO Plant Maintenance",
    description: "Operation and maintenance of sewage treatment, water treatment, effluent treatment, and reverse osmosis plants.",
    icon: Droplet,
    image: "/water-treatment.png",
    colSpan: "lg:col-span-2", // Wide card
    rowSpan: "lg:row-span-1"
  },
  {
    id: "transformer",
    title: "Transformer Maintenance",
    description: "Inspection, testing, servicing, and preventive transformer maintenance.",
    icon: Zap,
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1000&auto=format&fit=crop",
    colSpan: "lg:col-span-1",
    rowSpan: "lg:row-span-1"
  },
  {
    id: "lift",
    title: "Lift & DG Maintenance",
    description: "Comprehensive maintenance of elevators and diesel generator systems for uninterrupted operations.",
    icon: ArrowUpToLine,
    image: "/lift-dg.png",
    colSpan: "lg:col-span-1",
    rowSpan: "lg:row-span-1"
  },
  {
    id: "materials",
    title: "Housekeeping Material Supply",
    description: "Supply of professional housekeeping materials, cleaning chemicals, consumables, and facility management products.",
    icon: Package,
    image: "/housekeeping-supplies.png",
    colSpan: "lg:col-span-2", // Wide Card
    rowSpan: "lg:row-span-1"
  }
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
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
      <section className="py-24 lg:py-32 bg-slate-50 relative" id="services" ref={sectionRef}>
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          
          {/* Header */}
          <div className="max-w-3xl mb-16 lg:mb-24">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="text-4xl sm:text-5xl font-bold font-heading text-slate-900 tracking-tight leading-tight mb-6"
            >
              Comprehensive Security &<br/>
              <span className="text-gold">Facility Management Solutions</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-lg text-slate-600 font-body leading-relaxed"
            >
              Delivering professional manpower, technical maintenance, and integrated facility management services tailored to residential, commercial, industrial, and institutional environments.
            </motion.p>
          </div>

          {/* Bento Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
          >
            {servicesData.map((service, index) => (
              <motion.div 
                key={service.id} 
                variants={cardVariants}
                className={`${service.colSpan} ${service.rowSpan}`}
              >
                <ServiceCard 
                  service={service} 
                  index={index} 
                  onClick={setSelectedService} 
                />
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* Premium Click Modal */}
      <ServiceModal 
        isOpen={!!selectedService} 
        onClose={() => setSelectedService(null)} 
        service={selectedService} 
      />
    </>
  );
};

export default Services;
