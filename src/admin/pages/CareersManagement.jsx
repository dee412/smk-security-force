import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Eye, Download, XCircle, CheckCircle2, Trash2, ChevronLeft, ChevronRight } from 'lucide-react';

const mockApplications = [
  { id: 1, applicant: "Suresh Kumar", position: "Security Supervisor", phone: "+91 8899001122", email: "suresh.k@gmail.com", experience: "5 Years", status: "Pending" },
  { id: 2, name: "Ramesh Babu", position: "Security Officer", phone: "+91 9988776655", email: "ramesh.b@yahoo.com", experience: "2 Years", status: "Shortlisted" },
  { id: 3, name: "Anjali M", position: "Front Desk Executive", phone: "+91 9123456789", email: "anjali.m@outlook.com", experience: "1 Year", status: "Pending" },
  { id: 4, name: "Karthik Raj", position: "Facility Manager", phone: "+91 9988112233", email: "karthik.r@gmail.com", experience: "8 Years", status: "Rejected" },
  { id: 5, name: "Mohammed Ali", position: "CCTV Operator", phone: "+91 9876123450", email: "m.ali@gmail.com", experience: "3 Years", status: "Shortlisted" },
];

const CareersManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  return (
    <div className="space-y-8 pb-12">
      
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col sm:flex-row sm:items-center justify-between gap-4"
      >
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold font-heading text-white mb-2">Job Applications</h1>
          <p className="text-slate-400">Review and manage candidate applications.</p>
        </div>
        <button className="bg-gold text-slate-900 px-6 py-2.5 rounded-xl font-bold hover:bg-yellow-500 transition-colors shadow-lg shadow-gold/10 whitespace-nowrap">
          Export CSV
        </button>
      </motion.div>

      {/* Table Container */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-slate-900 border border-slate-800 rounded-2xl shadow-xl overflow-hidden"
      >
        
        {/* Toolbar */}
        <div className="p-4 sm:p-6 border-b border-slate-800 flex flex-col sm:flex-row gap-4 justify-between items-center bg-slate-900/50">
          <div className="relative w-full sm:w-96">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
            <input 
              type="text" 
              placeholder="Search applicants or positions..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:border-gold outline-none transition-colors"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:border-slate-700 transition-colors whitespace-nowrap w-full sm:w-auto justify-center">
            <Filter size={16} />
            Filter Status
          </button>
        </div>

        {/* Table wrapper for horizontal scroll */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[1000px]">
            <thead>
              <tr className="bg-slate-950/50 text-slate-400 text-xs uppercase tracking-wider font-semibold border-b border-slate-800">
                <th className="py-4 px-6">Applicant</th>
                <th className="py-4 px-6">Position</th>
                <th className="py-4 px-6">Contact Details</th>
                <th className="py-4 px-6">Experience</th>
                <th className="py-4 px-6 text-center">Resume</th>
                <th className="py-4 px-6">Status</th>
                <th className="py-4 px-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-slate-800/50">
              {mockApplications.map((app) => (
                <tr key={app.id} className="hover:bg-slate-800/30 transition-colors group">
                  <td className="py-4 px-6 font-medium text-white">{app.applicant || app.name}</td>
                  <td className="py-4 px-6 text-slate-300">{app.position}</td>
                  <td className="py-4 px-6">
                    <div className="flex flex-col gap-1">
                      <span className="text-slate-300">{app.email}</span>
                      <span className="text-slate-500 text-xs">{app.phone}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-slate-300">{app.experience}</td>
                  <td className="py-4 px-6 text-center">
                    <button className="p-2 text-gold bg-gold/10 rounded hover:bg-gold hover:text-slate-900 transition-colors inline-block" title="Download Resume">
                      <Download size={16} />
                    </button>
                  </td>
                  <td className="py-4 px-6">
                    <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${
                      app.status === 'Shortlisted' 
                      ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                      : app.status === 'Rejected'
                      ? 'bg-red-500/10 text-red-400 border border-red-500/20'
                      : 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20'
                    }`}>
                      {app.status === 'Shortlisted' && <CheckCircle2 size={12} />}
                      {app.status === 'Rejected' && <XCircle size={12} />}
                      {app.status}
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-1.5 text-slate-400 hover:text-white bg-slate-800 rounded hover:bg-slate-700 transition-colors" title="View Details">
                        <Eye size={16} />
                      </button>
                      <button className="p-1.5 text-slate-400 hover:text-green-400 bg-slate-800 rounded hover:bg-slate-700 transition-colors" title="Shortlist">
                        <CheckCircle2 size={16} />
                      </button>
                      <button className="p-1.5 text-slate-400 hover:text-orange-400 bg-slate-800 rounded hover:bg-slate-700 transition-colors" title="Reject">
                        <XCircle size={16} />
                      </button>
                      <button className="p-1.5 text-slate-400 hover:text-red-400 bg-slate-800 rounded hover:bg-slate-700 transition-colors" title="Delete">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Footer */}
        <div className="p-4 border-t border-slate-800 flex items-center justify-between text-sm text-slate-400 bg-slate-900/50">
          <p>Showing 1 to 5 of 342 entries</p>
          <div className="flex items-center gap-2">
            <button className="p-1.5 rounded bg-slate-950 border border-slate-800 hover:bg-slate-800 disabled:opacity-50 transition-colors" disabled>
              <ChevronLeft size={16} />
            </button>
            <div className="flex items-center gap-1">
              <button className="w-8 h-8 rounded bg-gold text-slate-900 font-bold flex items-center justify-center">1</button>
              <button className="w-8 h-8 rounded bg-slate-950 border border-slate-800 hover:bg-slate-800 text-white flex items-center justify-center transition-colors">2</button>
              <span>...</span>
            </div>
            <button className="p-1.5 rounded bg-slate-950 border border-slate-800 hover:bg-slate-800 transition-colors">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

      </motion.div>
    </div>
  );
};

export default CareersManagement;
