import { useState } from 'react';
import { Outlet, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutDashboard, 
  Globe, 
  Settings, 
  Briefcase, 
  MessageSquare, 
  Users, 
  Image as ImageIcon,
  Star,
  FileText,
  Search,
  LogOut,
  Bell,
  Menu,
  X
} from 'lucide-react';

const sidebarLinks = [
  { name: 'Dashboard', path: '/admin/dashboard', icon: LayoutDashboard },
  { name: 'Website Content', path: '/admin/content', icon: Globe },
  { name: 'Services', path: '/admin/services', icon: Settings },
  { name: 'Industries', path: '/admin/industries', icon: Briefcase },
  { name: 'Contact Inquiries', path: '/admin/inquiries', icon: MessageSquare },
  { name: 'Gallery', path: '/admin/gallery', icon: ImageIcon },
  { name: 'Team Members', path: '/admin/team', icon: Users },
  { name: 'Testimonials', path: '/admin/testimonials', icon: Star },
  { name: 'Blog', path: '/admin/blog', icon: FileText },
  { name: 'SEO Settings', path: '/admin/seo', icon: Search },
  { name: 'Website Settings', path: '/admin/settings', icon: Settings },
  { name: 'Users', path: '/admin/users', icon: Users },
];

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    navigate('/admin/login');
  };

  // Helper to format the current route into a breadcrumb
  const getCurrentPageName = () => {
    const link = sidebarLinks.find(l => l.path === location.pathname);
    return link ? link.name : 'Dashboard';
  };

  return (
    <div className="min-h-screen bg-slate-950 flex font-body text-slate-300">
      
      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {!isSidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSidebarOpen(true)}
            className="fixed inset-0 bg-slate-950/80 z-40 lg:hidden backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{ 
          width: isSidebarOpen ? '280px' : '0px',
          opacity: isSidebarOpen ? 1 : 0
        }}
        className={`fixed lg:relative z-50 h-screen bg-slate-900 border-r border-slate-800 flex flex-col shrink-0 overflow-hidden shadow-2xl lg:shadow-none transition-all duration-300 ${!isSidebarOpen ? '-translate-x-full lg:translate-x-0 lg:w-[280px] lg:opacity-100' : 'translate-x-0'}`}
      >
        {/* Logo Area */}
        <div className="h-20 flex items-center px-6 border-b border-slate-800 shrink-0 justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white p-1">
              <img src="/media__1783938941050.jpg" alt="Logo" className="w-full h-full object-contain" />
            </div>
            <span className="font-bold font-heading text-white tracking-wide">SMK Admin</span>
          </div>
          <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden text-slate-400 hover:text-white">
            <X size={20} />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-1 custom-scrollbar">
          {sidebarLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <NavLink
                key={link.name}
                to={link.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors duration-200 ${
                  isActive 
                  ? 'bg-gold/10 text-gold font-medium' 
                  : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'
                }`}
              >
                <link.icon size={18} className={isActive ? 'text-gold' : 'text-slate-500'} />
                {link.name}
              </NavLink>
            );
          })}
        </nav>

        {/* User Profile / Logout */}
        <div className="p-4 border-t border-slate-800 shrink-0">
          <button 
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-slate-400 hover:bg-red-500/10 hover:text-red-400 transition-colors duration-200"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </motion.aside>

      {/* Main Content Wrapper */}
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        
        {/* Top Header */}
        <header className="h-20 bg-slate-950/80 backdrop-blur-md border-b border-slate-800 flex items-center justify-between px-4 lg:px-8 shrink-0 z-30">
          
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="lg:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors"
            >
              <Menu size={20} />
            </button>
            
            <div className="hidden sm:block">
              <p className="text-sm text-slate-500 font-medium">Pages / <span className="text-slate-200">{getCurrentPageName()}</span></p>
              <h2 className="text-xl font-bold font-heading text-white">{getCurrentPageName()}</h2>
            </div>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            
            {/* Notifications */}
            <button className="relative p-2 text-slate-400 hover:text-white transition-colors">
              <Bell size={20} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-gold border-2 border-slate-950"></span>
            </button>

            {/* Profile Dropdown Trigger */}
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center font-bold text-slate-300 group-hover:border-gold transition-colors">
                AD
              </div>
              <div className="hidden md:block">
                <p className="text-sm font-bold text-white group-hover:text-gold transition-colors">Admin User</p>
                <p className="text-xs text-slate-500">admin@smksf.in</p>
              </div>
            </div>
            
          </div>
        </header>

        {/* Scrollable Main Content */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-8 custom-scrollbar relative">
          
          {/* Subtle Background Decor */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 blur-[100px] rounded-full pointer-events-none -mr-[250px] -mt-[250px]"></div>

          <div className="relative z-10 w-full max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>

    </div>
  );
};

export default AdminLayout;
