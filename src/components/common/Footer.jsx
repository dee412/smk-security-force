import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const quickLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Our Services", href: "#services" },
    { name: "Why Choose SMK", href: "#why-choose-us" },
    { name: "Industries We Serve", href: "#industries" },
    { name: "How We Work", href: "#how-we-work" },
    { name: "Contact", href: "#contact" }
  ];

  const services = [
    "Housekeeping Services",
    "Security & Detective Services",
    "Gardening & Landscape Maintenance",
    "Pest Control Services",
    "Building Management System (BMS) Operations",
    "Electrical & Plumbing Maintenance",
    "STP, ETP, WTP & RO Plant Maintenance",
    "Transformer Maintenance",
    "Lift & DG Maintenance",
    "Housekeeping Material Supply"
  ];

  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    // If the href is an id on the same page
    if (href.startsWith('#')) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        // Fallback for top of page if #hero is missing
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <footer
      ref={footerRef}
      className="bg-slate-950 pt-20 pb-10 border-t border-slate-800 rounded-t-[2.5rem] relative overflow-hidden"
    >

      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-slate-900/50 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 xl:gap-12 mb-16"
        >

          {/* Column 1: Branding */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-white p-1">
                <img src="/logo.jpg" alt="SMK Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-heading text-white leading-tight">SMK Security Force</h3>
                <p className="text-xs text-gold uppercase tracking-widest font-semibold">Security & Facility Management</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed pr-4">
              SMK Security Force delivers professional Security and Integrated Facility Management solutions tailored for residential, commercial, industrial and institutional environments.
            </p>

            <div className="flex items-center gap-4 pt-2">
              {[
                { name: 'linkedin', svg: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg> },
                { name: 'facebook', svg: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg> },
                { name: 'instagram', svg: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg> },
                { name: 'youtube', svg: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg> }
              ].map((social, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-gold hover:text-slate-900 hover:border-gold transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.svg}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-bold text-white mb-6 font-heading">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className="group inline-flex text-sm text-slate-400 hover:text-gold transition-colors duration-300"
                  >
                    <span className="relative">
                      {link.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Services */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-bold text-white mb-6 font-heading">Services</h4>
            <ul className="space-y-3">
              {services.map((service, i) => (
                <li key={i}>
                  <a
                    href="#services"
                    onClick={(e) => handleSmoothScroll(e, '#services')}
                    className="group inline-flex text-sm text-slate-400 hover:text-gold transition-colors duration-300 line-clamp-1"
                    title={service}
                  >
                    <span className="relative">
                      {service}
                      <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Contact Information */}
          <motion.div variants={itemVariants} className="space-y-5">
            <h4 className="text-lg font-bold text-white mb-6 font-heading">Contact Information</h4>

            <div className="flex items-start gap-3 text-slate-400 text-sm">
              <MapPin size={18} className="shrink-0 text-gold mt-1" />
              <p className="leading-relaxed">
                #118/2, Ground Floor,<br />
                Opp. Icon School of Excellence,<br />
                Near Archana Medicals, Doddathogur,<br />
                Bengaluru – 560100
              </p>
            </div>

            <div className="flex items-center gap-3 text-slate-400 text-sm">
              <Phone size={18} className="shrink-0 text-gold" />
              <a href="tel:+919845659570" className="hover:text-gold transition-colors">+91 9845659570</a>
            </div>

            <div className="flex items-center gap-3 text-slate-400 text-sm">
              <Mail size={18} className="shrink-0 text-gold" />
              <a href="mailto:smkinfo.blr@gmail.com" className="hover:text-gold transition-colors">smkinfo.blr@gmail.com</a>
            </div>

            <div className="flex items-center gap-3 text-slate-400 text-sm">
              <Clock size={18} className="shrink-0 text-gold" />
              <p>24x7</p>
            </div>

          </motion.div>

        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500"
        >
          <p>© 2026 SMK Security Force. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-gold transition-colors">Cookie Policy</a>
          </div>
        </motion.div>

      </div>
    </footer>
  );
};

export default Footer;
