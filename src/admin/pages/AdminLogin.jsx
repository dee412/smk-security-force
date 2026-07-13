import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Lock, Mail, Loader2, ArrowRight } from 'lucide-react';

const loginSchema = z.object({
  email: z.string().email('Valid email required'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  remember: z.boolean().optional()
});

const AdminLogin = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(loginSchema)
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setError("");
    
    // Mock Authentication Delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    if (data.email === 'admin@smksf.in' && data.password === 'admin123') {
      // Success, route to dashboard
      navigate('/admin/dashboard');
    } else {
      setError("Invalid credentials. Please use admin@smksf.in / admin123");
    }
    
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-4 relative overflow-hidden font-body">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-slate-900/50 rounded-full blur-[120px]"></div>
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[100px]"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-md relative z-10"
      >
        {/* Logo & Header */}
        <div className="text-center mb-10">
          <div className="w-16 h-16 rounded-2xl bg-white p-1.5 mx-auto mb-6 shadow-2xl shadow-gold/10 border border-slate-800">
            <img src="/media__1783938941050.jpg" alt="SMK Logo" className="w-full h-full object-contain" />
          </div>
          <h1 className="text-3xl font-bold font-heading text-white mb-2">Admin Portal</h1>
          <p className="text-slate-400">Sign in to manage SMK Security Force</p>
        </div>

        {/* Login Card */}
        <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 shadow-2xl">
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            
            {/* Email */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-300 ml-1">Email Address</label>
              <div className="relative group">
                <Mail size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-gold transition-colors" />
                <input 
                  type="email"
                  placeholder="admin@smksf.in"
                  {...register('email')}
                  className={`w-full bg-slate-950/50 border ${errors.email ? 'border-red-500/50 focus:border-red-500' : 'border-slate-700 focus:border-gold'} rounded-xl pl-12 pr-4 py-3.5 text-white outline-none transition-all duration-300`}
                />
              </div>
              {errors.email && <p className="text-red-400 text-xs font-medium ml-1 mt-1">{errors.email.message}</p>}
            </div>

            {/* Password */}
            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="text-sm font-semibold text-slate-300">Password</label>
                <a href="#" className="text-xs font-medium text-gold hover:text-yellow-400 transition-colors">Forgot Password?</a>
              </div>
              <div className="relative group">
                <Lock size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-gold transition-colors" />
                <input 
                  type="password"
                  placeholder="••••••••"
                  {...register('password')}
                  className={`w-full bg-slate-950/50 border ${errors.password ? 'border-red-500/50 focus:border-red-500' : 'border-slate-700 focus:border-gold'} rounded-xl pl-12 pr-4 py-3.5 text-white outline-none transition-all duration-300`}
                />
              </div>
              {errors.password && <p className="text-red-400 text-xs font-medium ml-1 mt-1">{errors.password.message}</p>}
            </div>

            {/* Remember Me */}
            <div className="flex items-center gap-3">
              <input 
                type="checkbox" 
                id="remember" 
                {...register("remember")} 
                className="w-4 h-4 rounded border-slate-700 bg-slate-950/50 text-gold focus:ring-gold focus:ring-offset-slate-900 cursor-pointer accent-gold"
              />
              <label htmlFor="remember" className="text-sm text-slate-400 cursor-pointer select-none">
                Remember me for 30 days
              </label>
            </div>

            {/* Error Banner */}
            {error && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }} 
                animate={{ opacity: 1, y: 0 }}
                className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm text-center font-medium"
              >
                {error}
              </motion.div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 bg-gold text-slate-900 px-6 py-4 rounded-xl text-base font-bold hover:bg-yellow-500 transition-colors duration-300 shadow-[0_0_20px_rgba(212,175,55,0.2)] disabled:opacity-70 disabled:cursor-not-allowed group"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={20} className="animate-spin text-slate-900" />
                  Signing in...
                </>
              ) : (
                <>
                  Sign In
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>

          </form>

        </div>
        
        {/* Footer */}
        <p className="text-center text-slate-500 text-sm mt-8">
          © 2026 SMK Security Force. All rights reserved.
        </p>
      </motion.div>
    </div>
  );
};

export default AdminLogin;
