import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Eye, Reply, Trash2, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';

const mockInquiries = [
  { id: 1, name: "Rahul Sharma", company: "Tech Mahindra", phone: "+91 9876543210", email: "rahul.s@techmahindra.com", service: "Integrated Facility Management", date: "Oct 24, 2026", status: "Pending" },
  { id: 2, name: "Priya Desai", company: "Infosys", phone: "+91 9988776655", email: "p.desai@infosys.com", service: "Security & Detective Services", date: "Oct 23, 2026", status: "Resolved" },
  { id: 3, name: "Amit Kumar", company: "Prestige Group", phone: "+91 9123456789", email: "amit.k@prestige.com", service: "Housekeeping Services", date: "Oct 23, 2026", status: "Pending" },
  { id: 4, name: "Sneha Reddy", company: "Wipro", phone: "+91 9988112233", email: "sneha.r@wipro.com", service: "Pest Control Services", date: "Oct 22, 2026", status: "Resolved" },
  { id: 5, name: "Vikram Singh", company: "TCS", phone: "+91 9876123450", email: "v.singh@tcs.com", service: "Electrical & Plumbing", date: "Oct 21, 2026", status: "Pending" },
];

const ContactManagement = () => {
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
          <h1 className="text-2xl sm:text-3xl font-bold font-heading text-white mb-2">Contact Inquiries</h1>
          <p className="text-slate-400">Manage and respond to client service requests.</p>
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
              placeholder="Search by name, company or email..." 
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

        {/* Table wrapper for horizontal scroll on mobile */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[1000px]">
            <thead>
              <tr className="bg-slate-950/50 text-slate-400 text-xs uppercase tracking-wider font-semibold border-b border-slate-800">
                <th className="py-4 px-6">Name</th>
                <th className="py-4 px-6">Company</th>
                <th className="py-4 px-6">Contact Details</th>
                <th className="py-4 px-6">Service</th>
                <th className="py-4 px-6">Date</th>
                <th className="py-4 px-6">Status</th>
                <th className="py-4 px-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-slate-800/50">
              {mockInquiries.map((inquiry) => (
                <tr key={inquiry.id} className="hover:bg-slate-800/30 transition-colors group">
                  <td className="py-4 px-6 font-medium text-white">{inquiry.name}</td>
                  <td className="py-4 px-6 text-slate-300">{inquiry.company}</td>
                  <td className="py-4 px-6">
                    <div className="flex flex-col gap-1">
                      <span className="text-slate-300">{inquiry.email}</span>
                      <span className="text-slate-500 text-xs">{inquiry.phone}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-slate-300">
                    <span className="inline-block max-w-[200px] truncate" title={inquiry.service}>{inquiry.service}</span>
                  </td>
                  <td className="py-4 px-6 text-slate-400">{inquiry.date}</td>
                  <td className="py-4 px-6">
                    <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${
                      inquiry.status === 'Resolved' 
                      ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                      : 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20'
                    }`}>
                      {inquiry.status === 'Resolved' && <CheckCircle2 size={12} />}
                      {inquiry.status}
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-1.5 text-slate-400 hover:text-white bg-slate-800 rounded hover:bg-slate-700 transition-colors" title="View Details">
                        <Eye size={16} />
                      </button>
                      <button className="p-1.5 text-slate-400 hover:text-blue-400 bg-slate-800 rounded hover:bg-slate-700 transition-colors" title="Reply">
                        <Reply size={16} />
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
          <p>Showing 1 to 5 of 1,248 entries</p>
          <div className="flex items-center gap-2">
            <button className="p-1.5 rounded bg-slate-950 border border-slate-800 hover:bg-slate-800 disabled:opacity-50 transition-colors" disabled>
              <ChevronLeft size={16} />
            </button>
            <div className="flex items-center gap-1">
              <button className="w-8 h-8 rounded bg-gold text-slate-900 font-bold flex items-center justify-center">1</button>
              <button className="w-8 h-8 rounded bg-slate-950 border border-slate-800 hover:bg-slate-800 text-white flex items-center justify-center transition-colors">2</button>
              <button className="w-8 h-8 rounded bg-slate-950 border border-slate-800 hover:bg-slate-800 text-white flex items-center justify-center transition-colors">3</button>
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

export default ContactManagement;
