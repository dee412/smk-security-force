import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, UserCheck, Eye, Sparkles, X, ChevronRight, Award, CheckCircle } from 'lucide-react';

const teamPhotos = [
  {
    id: 1,
    title: "Executive Security & Integrated Force",
    category: "Full Detachment",
    image: "/images/team/team-1.png",
    tag: "Primary Guard Force",
    description: "Our complete security detachment featuring male and female officers, security personnel, and supervisory staff trained for corporate and enterprise operations.",
    specs: ["Male & Female Security Officers", "Corporate Lobby & Reception Guarding", "Integrated Facility Support"]
  },
  {
    id: 2,
    title: "Enterprise Campus Security Force",
    category: "Guard Squad",
    image: "/images/team/team-2.png",
    tag: "Campus Security",
    description: "Disciplined security officers deployed across commercial campuses, IT parks, and residential complexes.",
    specs: ["Perimeter Security & Patrols", "Access Control & Gate Management", "Visitor Log & CCTV Monitoring"]
  },
  {
    id: 3,
    title: "Tactical Commercial Guard Detachment",
    category: "Security Officers",
    image: "/images/team/team-3.png",
    tag: "Commercial Guarding",
    description: "Uniformed security personnel equipped for high-traffic commercial centers, shopping malls, and corporate headquarters.",
    specs: ["Uniformed Presence", "Emergency First Response", "Crowd & Parking Management"]
  },
  {
    id: 4,
    title: "Field Supervisors & Operational Officers",
    category: "Supervision",
    image: "/images/team/team-4.png",
    tag: "Field Leadership",
    description: "Senior supervisors overseeing guard turnout, night patrols, shift handovers, and compliance audits.",
    specs: ["24/7 Mobile Patrol Audits", "Shift & Attendance Management", "Client Liaison & Immediate Escalation"]
  },
  {
    id: 5,
    title: "Corporate Protection & Reception Security",
    category: "Corporate Guarding",
    image: "/images/team/team-5.png",
    tag: "Front-Desk Guarding",
    description: "Courteous, sharp-looking security officers providing front-desk access verification, badge issuing, and VIP security assistance.",
    specs: ["Professional Reception Management", "Identity & Badge Verification", "Threat Prevention & Vigilance"]
  }
];

const TeamSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const categories = ["All", "Full Detachment", "Security Officers", "Supervision", "Corporate Guarding"];

  const filteredPhotos = activeCategory === "All" 
    ? teamPhotos 
    : teamPhotos.filter(p => p.category === activeCategory);

  return (
    <section className="py-24 lg:py-32 bg-slate-950 text-white relative overflow-hidden" id="team">
      {/* Background Decorative Lighting */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gold/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 lg:px-8 max-w-7xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-semibold uppercase tracking-wider mb-6"
          >
            <ShieldCheck size={16} />
            Our Disciplined Workforce
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading tracking-tight leading-tight mb-6"
          >
            Trained Security Personnel & <br />
            <span className="text-gold">Field Operational Teams</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-lg font-body leading-relaxed"
          >
            Meet the actual uniformed security guards, female security officers, and field supervisors delivering uncompromised protection and facility management across Tamil Nadu.
          </motion.p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gold text-slate-950 shadow-lg shadow-gold/20 scale-105'
                  : 'bg-slate-900/80 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Photo Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredPhotos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative bg-slate-900/70 rounded-3xl overflow-hidden border border-slate-800/80 shadow-2xl flex flex-col hover:border-gold/50 transition-all duration-500"
            >
              {/* Image Showcase Container */}
              <div className="relative h-72 w-full overflow-hidden bg-slate-950">
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>

                {/* Top Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3.5 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-gold/40 text-gold text-xs font-semibold tracking-wide shadow-md">
                    {photo.tag}
                  </span>
                </div>

                {/* View Zoom Button */}
                <button
                  onClick={() => setSelectedPhoto(photo)}
                  className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-gold/90 text-slate-950 flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-yellow-400"
                  title="View High Res"
                >
                  <Eye size={18} />
                </button>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold font-heading text-white mb-2 group-hover:text-gold transition-colors duration-300">
                    {photo.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 font-body">
                    {photo.description}
                  </p>
                </div>

                {/* Highlights */}
                <div className="space-y-2 border-t border-slate-800/60 pt-4">
                  {photo.specs.map((spec, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle size={14} className="text-gold shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Trust Metrics Bar */}
        <div className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 backdrop-blur-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-950/50 border border-slate-800">
            <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold">
              <UserCheck size={24} />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">100% Verified</h4>
              <p className="text-xs text-slate-400">Police background checked force</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-950/50 border border-slate-800">
            <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold">
              <ShieldCheck size={24} />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">Gender-Inclusive</h4>
              <p className="text-xs text-slate-400">Female & male security detachments</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-950/50 border border-slate-800">
            <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold">
              <Award size={24} />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">Supervisory Audits</h4>
              <p className="text-xs text-slate-400">24/7 surprise field checks</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-950/50 border border-slate-800">
            <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold">
              <Sparkles size={24} />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">Turnout & Discipline</h4>
              <p className="text-xs text-slate-400">Crisp uniforms & badge protocol</p>
            </div>
          </div>
        </div>

      </div>

      {/* Lightbox / Modal for high-res photo view */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md p-4 sm:p-8 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-slate-900 border border-slate-700 rounded-3xl overflow-hidden shadow-2xl"
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-slate-950/80 text-white flex items-center justify-center hover:bg-gold hover:text-slate-950 transition-colors"
              >
                <X size={20} />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="h-80 md:h-full bg-slate-950 flex items-center justify-center">
                  <img
                    src={selectedPhoto.image}
                    alt={selectedPhoto.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col justify-between">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-semibold mb-4">
                      {selectedPhoto.tag}
                    </span>
                    <h3 className="text-2xl font-bold font-heading text-white mb-4">
                      {selectedPhoto.title}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed mb-6">
                      {selectedPhoto.description}
                    </p>

                    <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {selectedPhoto.specs.map((s, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-slate-200">
                          <CheckCircle size={16} className="text-gold shrink-0" />
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-800">
                    <button
                      onClick={() => {
                        setSelectedPhoto(null);
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="w-full flex items-center justify-center gap-2 bg-gold text-slate-950 py-3.5 rounded-xl font-bold hover:bg-yellow-400 transition-colors"
                    >
                      Request Deployment For Your Facility
                      <ChevronRight size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default TeamSection;
