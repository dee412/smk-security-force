import { motion } from 'framer-motion';
import { Users, FileText, Briefcase, Globe, ArrowUpRight, Clock } from 'lucide-react';

const StatCard = ({ title, value, icon: Icon, trend, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl"
  >
    <div className="flex justify-between items-start mb-4">
      <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-gold">
        <Icon size={24} />
      </div>
      <div className="flex items-center gap-1 text-green-400 text-sm font-semibold bg-green-400/10 px-2.5 py-1 rounded-full">
        <ArrowUpRight size={16} />
        {trend}
      </div>
    </div>
    <div>
      <h3 className="text-slate-400 text-sm font-medium mb-1">{title}</h3>
      <p className="text-3xl font-bold font-heading text-white">{value}</p>
    </div>
  </motion.div>
);

const recentActivity = [
  { id: 1, text: "New job application received for Security Officer", time: "2 hours ago", type: "career" },
  { id: 2, text: "Inquiry from Tech Mahindra for Facility Management", time: "4 hours ago", type: "inquiry" },
  { id: 3, text: "Admin updated the 'About Us' content", time: "1 day ago", type: "system" },
  { id: 4, text: "New service added: Electronic Surveillance", time: "2 days ago", type: "system" },
];

const DashboardOverview = () => {
  return (
    <div className="space-y-8 pb-12">
      
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col sm:flex-row sm:items-center justify-between gap-4"
      >
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold font-heading text-white mb-2">Welcome Back, Admin</h1>
          <p className="text-slate-400">Here is what's happening with SMK Security Force today.</p>
        </div>
        <button className="bg-gold text-slate-900 px-6 py-2.5 rounded-xl font-bold hover:bg-yellow-500 transition-colors shadow-lg shadow-gold/10 whitespace-nowrap">
          Generate Report
        </button>
      </motion.div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total Inquiries" value="1,248" icon={FileText} trend="+12%" delay={0.1} />
        <StatCard title="Job Applications" value="342" icon={Users} trend="+8%" delay={0.2} />
        <StatCard title="Active Services" value="10" icon={Briefcase} trend="0%" delay={0.3} />
        <StatCard title="Website Visitors" value="45.2k" icon={Globe} trend="+24%" delay={0.4} />
      </div>

      {/* Two Column Layout for Activity & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Recent Activity */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-2xl p-6 lg:p-8 shadow-xl"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold font-heading text-white">Recent Activity</h2>
            <button className="text-sm font-semibold text-gold hover:text-yellow-400 transition-colors">View All</button>
          </div>
          
          <div className="space-y-6">
            {recentActivity.map((activity, idx) => (
              <div key={activity.id} className="flex gap-4 relative">
                {/* Timeline connector line */}
                {idx !== recentActivity.length - 1 && (
                  <div className="absolute left-[19px] top-10 bottom-[-24px] w-px bg-slate-800"></div>
                )}
                
                <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0 z-10 text-slate-400">
                  <Clock size={16} />
                </div>
                
                <div className="pt-2">
                  <p className="text-slate-200 text-sm font-medium mb-1">{activity.text}</p>
                  <p className="text-slate-500 text-xs">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-slate-900 border border-slate-800 rounded-2xl p-6 lg:p-8 shadow-xl"
        >
          <h2 className="text-xl font-bold font-heading text-white mb-6">Quick Actions</h2>
          <div className="space-y-3">
            {[
              "View Pending Inquiries",
              "Review Job Applications",
              "Edit Homepage Banner",
              "Manage SEO Settings",
              "Add New Team Member"
            ].map((action, i) => (
              <button 
                key={i}
                className="w-full flex items-center justify-between p-4 rounded-xl bg-slate-950/50 border border-slate-800 hover:border-gold hover:bg-slate-800 transition-all duration-200 group text-left"
              >
                <span className="text-slate-300 font-medium group-hover:text-gold transition-colors">{action}</span>
                <ArrowUpRight size={18} className="text-slate-500 group-hover:text-gold transition-colors" />
              </button>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default DashboardOverview;
