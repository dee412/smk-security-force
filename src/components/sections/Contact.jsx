import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ShieldAlert, 
  Send,
  Loader2,
  CheckCircle2,
  Navigation
} from 'lucide-react';

// Zod Schema
const contactSchema = z.object({
  fullName: z.string().min(2, 'Full name is required'),
  companyName: z.string().optional(),
  email: z.string().email('Valid email address required'),
  phone: z.string().min(10, 'Valid phone number required'),
  city: z.string().optional(),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  agree: z.literal(true, { errorMap: () => ({ message: 'You must agree to be contacted' }) })
});

const serviceOptions = [
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

const Contact = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: { service: "" }
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    // 1. Submit to backend API in the background (does not block user or popup trigger)
    const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
    fetch(`${apiUrl}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => {
      if (!response.ok) console.warn('Backend submission failed to return OK status.');
      else console.log('Inquiry submitted to backend successfully in the background.');
    })
    .catch(error => {
      console.warn('Backend API connection failed/offline. Proceeding with WhatsApp alert:', error);
    });

    // 2. Open WhatsApp prefilled message instantly (synchronously, preventing pop-up blocker)
    const whatsappMessage = 
      `*New Inquiry on SMK Security Force*\n\n` +
      `*Name:* ${data.fullName}\n` +
      `*Company:* ${data.companyName || 'N/A'}\n` +
      `*Email:* ${data.email}\n` +
      `*Phone:* ${data.phone}\n` +
      `*City:* ${data.city || 'N/A'}\n` +
      `*Service:* ${data.service}\n` +
      `*Message:* ${data.message}`;

    const whatsappUrl = `https://wa.me/919845659570?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');

    setIsSuccess(true);
    reset();
    setIsSubmitting(false);
    
    // Auto reset success message after 5 seconds
    setTimeout(() => {
      setIsSuccess(false);
    }, 5000);
  };

  return (
    <section className="py-24 lg:py-32 bg-slate-950 relative overflow-hidden" id="contact" ref={sectionRef}>
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold/5 blur-[120px] rounded-full pointer-events-none -mr-[400px] -mt-[400px]"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/10 blur-[100px] rounded-full pointer-events-none -ml-[300px] -mb-[300px]"></div>

      <div className="container relative z-10 mx-auto px-4 lg:px-8 max-w-7xl">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 lg:mb-24 text-center mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 w-fit mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
            <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">Contact Us</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-white tracking-tight leading-tight mb-6"
          >
            Let's Discuss Your Security &<br/>
            <span className="text-gold">Facility Management</span> Requirements
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg text-slate-400 font-body leading-relaxed max-w-2xl mx-auto"
          >
            Whether you require Security Services, Housekeeping, Technical Maintenance, or Integrated Facility Management, our team is ready to assist you.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Contact Info & Map */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 space-y-6"
          >
            
            {/* Info Cards */}
            <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-800 p-8 rounded-3xl space-y-8">
              
              <div className="flex gap-4 items-start">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-gold border border-slate-700">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2">Office Address</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    #118/2, Ground Floor,<br/>
                    Opp. Icon School of Excellence,<br/>
                    Near Archana Medicals, Doddathogur,<br/>
                    Bengaluru - 560100, Karnataka, India
                  </p>
                </div>
              </div>

              <div className="w-full h-px bg-slate-800"></div>

              <div className="flex gap-4 items-start">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-gold border border-slate-700">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2">Phone</h4>
                  <a href="tel:+919845659570" className="text-slate-400 text-sm hover:text-gold transition-colors inline-block">
                    +91 9845659570
                  </a>
                </div>
              </div>

              <div className="w-full h-px bg-slate-800"></div>

              <div className="flex gap-4 items-start">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-gold border border-slate-700">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2">Email</h4>
                  <a href="mailto:smkinfo.blr@gmail.com" className="text-slate-400 text-sm hover:text-gold transition-colors inline-block">
                    smkinfo.blr@gmail.com
                  </a>
                </div>
              </div>

              <div className="w-full h-px bg-slate-800"></div>

              <div className="flex gap-4 items-start">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-gold border border-slate-700">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2">Business Hours</h4>
                  <p className="text-slate-400 text-sm">24x7</p>
                </div>
              </div>

            </div>

            {/* Google Map */}
            <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-800 p-2 rounded-3xl relative overflow-hidden group">
              <div className="w-full h-[300px] rounded-2xl overflow-hidden relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15558.1232876646!2d77.6433215!3d12.8535171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6ca3f7c35581%3A0xc3e9c20a4b868a8b!2sDoddathoguru%2C%20Electronics%20City%20Phase%201%2C%20Electronic%20City%2C%20Bengaluru%2C%20Karnataka%20560100!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                ></iframe>
                
                {/* Map Overlay Button */}
                <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-slate-950/20">
                  <a 
                    href="https://maps.google.com/?q=Doddathogur,Bengaluru" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="pointer-events-auto flex items-center gap-2 bg-gold text-slate-900 px-6 py-3 rounded-full font-bold shadow-xl hover:scale-105 transition-transform"
                  >
                    <Navigation size={18} />
                    Get Directions
                  </a>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Zod Inquiry Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-7"
          >
            <div className="bg-white rounded-[2rem] p-8 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
              
              {/* Form Success Overlay */}
              <AnimatePresence>
                {isSuccess && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 z-50 bg-white flex flex-col items-center justify-center text-center p-8"
                  >
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", damping: 15 }}
                      className="w-24 h-24 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-6"
                    >
                      <CheckCircle2 size={48} />
                    </motion.div>
                    <h3 className="text-3xl font-bold font-heading text-slate-900 mb-4">Inquiry Sent!</h3>
                    <p className="text-slate-600 max-w-md leading-relaxed">
                      Thank you for contacting SMK Security Force. One of our specialists will get back to you shortly to discuss your requirements.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              <h3 className="text-2xl font-bold font-heading text-slate-900 mb-8">Send an Inquiry</h3>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                
                {/* Row 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1.5 relative group">
                    <label className="text-sm font-semibold text-slate-700 ml-1">Full Name *</label>
                    <input 
                      {...register('fullName')}
                      className={`w-full bg-slate-50 border ${errors.fullName ? 'border-red-400 focus:ring-red-400/20' : 'border-slate-200 focus:border-gold focus:ring-gold/20'} rounded-xl px-4 py-3.5 text-slate-900 outline-none transition-all duration-300 focus:ring-4`}
                    />
                    {errors.fullName && <p className="text-red-500 text-xs font-medium ml-1 mt-1">{errors.fullName.message}</p>}
                  </div>

                  <div className="space-y-1.5 relative group">
                    <label className="text-sm font-semibold text-slate-700 ml-1">Company Name</label>
                    <input 
                      {...register('companyName')}
                      className="w-full bg-slate-50 border border-slate-200 focus:border-gold focus:ring-gold/20 rounded-xl px-4 py-3.5 text-slate-900 outline-none transition-all duration-300 focus:ring-4"
                    />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1.5 relative group">
                    <label className="text-sm font-semibold text-slate-700 ml-1">Email Address *</label>
                    <input 
                      type="email"
                      {...register('email')}
                      className={`w-full bg-slate-50 border ${errors.email ? 'border-red-400 focus:ring-red-400/20' : 'border-slate-200 focus:border-gold focus:ring-gold/20'} rounded-xl px-4 py-3.5 text-slate-900 outline-none transition-all duration-300 focus:ring-4`}
                    />
                    {errors.email && <p className="text-red-500 text-xs font-medium ml-1 mt-1">{errors.email.message}</p>}
                  </div>

                  <div className="space-y-1.5 relative group">
                    <label className="text-sm font-semibold text-slate-700 ml-1">Phone Number *</label>
                    <input 
                      type="tel"
                      {...register('phone')}
                      className={`w-full bg-slate-50 border ${errors.phone ? 'border-red-400 focus:ring-red-400/20' : 'border-slate-200 focus:border-gold focus:ring-gold/20'} rounded-xl px-4 py-3.5 text-slate-900 outline-none transition-all duration-300 focus:ring-4`}
                    />
                    {errors.phone && <p className="text-red-500 text-xs font-medium ml-1 mt-1">{errors.phone.message}</p>}
                  </div>
                </div>

                {/* Row 3 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1.5 relative group">
                    <label className="text-sm font-semibold text-slate-700 ml-1">City</label>
                    <input 
                      {...register('city')}
                      className="w-full bg-slate-50 border border-slate-200 focus:border-gold focus:ring-gold/20 rounded-xl px-4 py-3.5 text-slate-900 outline-none transition-all duration-300 focus:ring-4"
                    />
                  </div>

                  <div className="space-y-1.5 relative group">
                    <label className="text-sm font-semibold text-slate-700 ml-1">Service Required *</label>
                    <select 
                      {...register('service')}
                      className={`w-full bg-slate-50 border ${errors.service ? 'border-red-400 focus:ring-red-400/20' : 'border-slate-200 focus:border-gold focus:ring-gold/20'} rounded-xl px-4 py-3.5 text-slate-900 outline-none transition-all duration-300 focus:ring-4 appearance-none`}
                    >
                      <option value="" disabled hidden>Select a Service</option>
                      {serviceOptions.map((opt, i) => <option key={i} value={opt}>{opt}</option>)}
                    </select>
                    {errors.service && <p className="text-red-500 text-xs font-medium ml-1 mt-1">{errors.service.message}</p>}
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5 relative group">
                  <label className="text-sm font-semibold text-slate-700 ml-1">Message *</label>
                  <textarea 
                    {...register('message')}
                    rows={4}
                    placeholder="Briefly describe your requirements..."
                    className={`w-full bg-slate-50 border ${errors.message ? 'border-red-400 focus:ring-red-400/20' : 'border-slate-200 focus:border-gold focus:ring-gold/20'} rounded-xl px-4 py-3.5 text-slate-900 outline-none transition-all duration-300 focus:ring-4 resize-none`}
                  />
                  {errors.message && <p className="text-red-500 text-xs font-medium ml-1 mt-1">{errors.message.message}</p>}
                </div>

                {/* Checkbox */}
                <div className="flex items-start gap-3 pt-2">
                  <input 
                    type="checkbox" 
                    id="agree" 
                    {...register("agree")} 
                    className="mt-1 w-5 h-5 rounded text-gold focus:ring-gold border-slate-300 cursor-pointer accent-gold"
                  />
                  <div className="flex flex-col">
                    <label htmlFor="agree" className="text-sm text-slate-700 cursor-pointer font-medium leading-tight">
                      I agree to be contacted regarding my inquiry.
                    </label>
                    {errors.agree && <span className="text-red-500 text-xs font-medium mt-1">{errors.agree.message}</span>}
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto group flex items-center justify-center gap-3 bg-slate-900 text-white px-10 py-4 rounded-xl text-lg font-bold hover:bg-gold hover:text-slate-900 transition-all duration-300 shadow-[0_10px_20px_-10px_rgba(0,0,0,0.3)] disabled:opacity-70 disabled:cursor-not-allowed mt-4"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={24} className="animate-spin text-gold group-hover:text-slate-900" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={22} className="text-gold group-hover:text-slate-900 transition-colors" />
                      Send Inquiry
                    </>
                  )}
                </button>

              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
