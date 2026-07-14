import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { UploadCloud, CheckCircle2, Loader2, Send } from 'lucide-react';

const formSchema = z.object({
  fullName: z.string().min(2, 'Full name is required'),
  phone: z.string().min(10, 'Valid phone number required'),
  email: z.string().email('Valid email address required'),
  dob: z.string().min(1, 'Date of birth is required'),
  gender: z.string().min(1, 'Please select gender'),
  address: z.string().min(5, 'Address is required'),
  city: z.string().min(2, 'City is required'),
  state: z.string().min(2, 'State is required'),
  qualification: z.string().min(2, 'Highest qualification required'),
  experience: z.string().min(1, 'Experience required'),
  position: z.string().min(2, 'Position required'),
  location: z.string().min(2, 'Preferred location required'),
  languages: z.string().min(2, 'Languages known required'),
  message: z.string().optional(),
  confirm: z.literal(true, { errorMap: () => ({ message: 'You must confirm the information' }) })
});

const InputField = ({ label, type = "text", register, error, name, placeholder, as = "input", options = [] }) => {
  return (
    <div className="w-full flex flex-col gap-1.5">
      <label className="text-sm font-semibold text-slate-700 ml-1">{label}</label>
      <div className="relative group">
        {as === "select" ? (
          <select 
            {...register(name)}
            className={`w-full bg-slate-50 border ${error ? 'border-red-400 focus:ring-red-400/20' : 'border-slate-200 focus:border-gold focus:ring-gold/20'} rounded-xl px-4 py-3.5 text-slate-900 outline-none transition-all duration-300 focus:ring-4 appearance-none`}
          >
            <option value="" disabled hidden>Select {label}</option>
            {options.map((opt, i) => <option key={i} value={opt}>{opt}</option>)}
          </select>
        ) : as === "textarea" ? (
          <textarea 
            {...register(name)}
            placeholder={placeholder}
            rows={4}
            className={`w-full bg-slate-50 border ${error ? 'border-red-400 focus:ring-red-400/20' : 'border-slate-200 focus:border-gold focus:ring-gold/20'} rounded-xl px-4 py-3.5 text-slate-900 outline-none transition-all duration-300 focus:ring-4 resize-none`}
          />
        ) : (
          <input 
            type={type}
            {...register(name)}
            placeholder={placeholder}
            className={`w-full bg-slate-50 border ${error ? 'border-red-400 focus:ring-red-400/20' : 'border-slate-200 focus:border-gold focus:ring-gold/20'} rounded-xl px-4 py-3.5 text-slate-900 outline-none transition-all duration-300 focus:ring-4`}
          />
        )}
      </div>
      <AnimatePresence>
        {error && (
          <motion.p 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="text-red-500 text-xs font-medium ml-1"
          >
            {error.message}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

const FileUpload = ({ label, onFileSelect }) => {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
      onFileSelect(e.target.files[0]);
    }
  };

  return (
    <div className="w-full flex flex-col gap-1.5">
      <label className="text-sm font-semibold text-slate-700 ml-1">{label}</label>
      <div className="relative w-full border-2 border-dashed border-slate-300 rounded-xl bg-slate-50 hover:bg-slate-100 hover:border-gold transition-colors duration-300 group cursor-pointer overflow-hidden">
        <input 
          type="file" 
          onChange={handleFileChange} 
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" 
          accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
        />
        <div className="flex flex-col items-center justify-center p-6 text-center">
          {fileName ? (
            <>
              <CheckCircle2 className="text-green-500 mb-2" size={28} />
              <p className="text-sm font-medium text-slate-900 truncate max-w-[200px]">{fileName}</p>
            </>
          ) : (
            <>
              <UploadCloud className="text-slate-400 group-hover:text-gold transition-colors mb-2" size={28} />
              <p className="text-sm font-medium text-slate-600">Click or drag to upload</p>
              <p className="text-xs text-slate-400 mt-1">PDF, DOC, or Image (Max 5MB)</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const ApplicationForm = ({ prefilledPosition }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  // Mock file states
  const [resume, setResume] = useState(null);
  const [aadhaar, setAadhaar] = useState(null);

  const { register, handleSubmit, formState: { errors }, setValue } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      position: prefilledPosition || ""
    }
  });

  // Effect to update the position field when prefilledPosition changes (e.g. user clicked a job card)
  useState(() => {
    if (prefilledPosition) setValue('position', prefilledPosition);
  }, [prefilledPosition, setValue]);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    // Mock API Delay
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Form Submitted:", data, { resume, aadhaar });
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full bg-white rounded-[2rem] shadow-2xl p-10 lg:p-14 border border-slate-100 flex flex-col items-center justify-center text-center min-h-[500px]"
      >
        <div className="w-24 h-24 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 size={48} />
        </div>
        <h3 className="text-3xl font-bold font-heading text-slate-900 mb-4">Application Submitted!</h3>
        <p className="text-slate-600 mb-8 max-w-md leading-relaxed">
          Thank you for applying to SMK Security Force. Our recruitment team will review your application and contact you shortly if your profile matches our requirements.
        </p>
        <button 
          onClick={() => setIsSuccess(false)}
          className="px-8 py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-gold hover:text-slate-900 transition-colors"
        >
          Submit Another Application
        </button>
      </motion.div>
    );
  }

  return (
    <div className="w-full bg-white rounded-[2rem] shadow-2xl p-6 sm:p-10 border border-slate-100 relative overflow-hidden">
      
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 blur-[80px] rounded-full pointer-events-none -mr-32 -mt-32"></div>

      <div className="mb-8">
        <h3 className="text-2xl font-bold font-heading text-slate-900">Application Form</h3>
        <p className="text-slate-500 text-sm mt-1">Please fill out all mandatory fields carefully.</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 relative z-10">
        
        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputField label="Full Name *" name="fullName" placeholder="John Doe" register={register} error={errors.fullName} />
          <InputField label="Phone Number *" type="tel" name="phone" placeholder="+91 9876543210" register={register} error={errors.phone} />
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputField label="Email Address *" type="email" name="email" placeholder="john@example.com" register={register} error={errors.email} />
          <InputField label="Date of Birth *" type="date" name="dob" register={register} error={errors.dob} />
        </div>

        {/* Row 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputField 
            label="Gender *" 
            name="gender" 
            as="select" 
            options={["Male", "Female", "Other"]}
            register={register} 
            error={errors.gender} 
          />
          <InputField 
            label="Highest Qualification *" 
            name="qualification" 
            as="select" 
            options={["10th Pass", "12th Pass", "Diploma", "Graduate", "Post Graduate"]}
            register={register} 
            error={errors.qualification} 
          />
        </div>

        {/* Row 4 (Address) */}
        <InputField label="Current Address *" name="address" placeholder="House No, Street, Landmark" register={register} error={errors.address} />

        {/* Row 5 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputField label="City *" name="city" placeholder="e.g. Bangalore" register={register} error={errors.city} />
          <InputField label="State *" name="state" placeholder="e.g. Karnataka" register={register} error={errors.state} />
        </div>

        <div className="w-full h-px bg-slate-100 my-4"></div>

        {/* Row 6 (Professional Info) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputField label="Position Applying For *" name="position" placeholder="e.g. Security Guard" register={register} error={errors.position} />
          <InputField 
            label="Years of Experience *" 
            name="experience" 
            as="select" 
            options={["Fresher (0 Years)", "1-3 Years", "3-5 Years", "5-10 Years", "10+ Years"]}
            register={register} 
            error={errors.experience} 
          />
        </div>

        {/* Row 7 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputField label="Preferred Work Location *" name="location" placeholder="e.g. Electronic City" register={register} error={errors.location} />
          <InputField label="Languages Known *" name="languages" placeholder="e.g. English, Kannada, Hindi" register={register} error={errors.languages} />
        </div>

        {/* Row 8 (Uploads) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
          <FileUpload label="Upload Resume (Optional)" onFileSelect={setResume} />
          <FileUpload label="Upload Aadhaar (Required)" onFileSelect={setAadhaar} />
        </div>

        {/* Row 9 */}
        <InputField 
          label="Additional Message (Optional)" 
          name="message" 
          as="textarea"
          placeholder="Tell us a brief bit about yourself or any specific skills..." 
          register={register} 
          error={errors.message} 
        />

        {/* Checkbox */}
        <div className="flex items-start gap-3 mt-4">
          <input 
            type="checkbox" 
            id="confirm" 
            {...register("confirm")} 
            className="mt-1 w-5 h-5 rounded text-gold focus:ring-gold border-slate-300 cursor-pointer accent-gold"
          />
          <div className="flex flex-col">
            <label htmlFor="confirm" className="text-sm text-slate-700 cursor-pointer font-medium leading-tight">
              I confirm that the information provided is accurate and true to the best of my knowledge.
            </label>
            {errors.confirm && <span className="text-red-500 text-xs font-medium mt-1">{errors.confirm.message}</span>}
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full group flex items-center justify-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-gold hover:text-slate-900 transition-all duration-300 shadow-[0_10px_20px_-10px_rgba(0,0,0,0.3)] disabled:opacity-70 disabled:cursor-not-allowed mt-4"
        >
          {isSubmitting ? (
            <>
              <Loader2 size={24} className="animate-spin text-gold group-hover:text-slate-900" />
              Submitting...
            </>
          ) : (
            <>
              <Send size={22} className="text-gold group-hover:text-slate-900 transition-colors" />
              Apply Now
            </>
          )}
        </button>

      </form>
    </div>
  );
};

export default ApplicationForm;
