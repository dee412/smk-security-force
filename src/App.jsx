import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import FloatingActions from './components/ui/FloatingActions';

// Admin Components
import AdminLayout from './admin/layouts/AdminLayout';
import AdminLogin from './admin/pages/AdminLogin';
import DashboardOverview from './admin/pages/DashboardOverview';
import ContactManagement from './admin/pages/ContactManagement';
import CareersManagement from './admin/pages/CareersManagement';

// Placeholder components for routes
const PlaceholderPage = ({ title }) => (
  <div className="pt-32 pb-20 min-h-screen container mx-auto px-4 lg:px-8">
    <h1 className="text-4xl font-bold font-heading text-slate-900">{title}</h1>
    <p className="mt-4 text-slate-600">This page is currently under construction for Phase 2+.</p>
  </div>
);

const AdminPlaceholderPage = ({ title }) => (
  <div className="p-8">
    <h1 className="text-2xl font-bold font-heading text-white mb-2">{title}</h1>
    <p className="text-slate-400">This admin module is currently under development.</p>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        {/* Public Routes */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<PlaceholderPage title="About SMK" />} />
          <Route path="services" element={<PlaceholderPage title="Our Services" />} />
          <Route path="industries" element={<PlaceholderPage title="Industries We Serve" />} />
          <Route path="contact" element={<PlaceholderPage title="Contact Us" />} />
          <Route path="assessment" element={<PlaceholderPage title="Free Security Assessment" />} />
          <Route path="*" element={<PlaceholderPage title="404 - Page Not Found" />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<DashboardOverview />} />
          <Route path="dashboard" element={<DashboardOverview />} />
          <Route path="inquiries" element={<ContactManagement />} />
          <Route path="applications" element={<CareersManagement />} />
          
          {/* Admin Placeholders */}
          <Route path="content" element={<AdminPlaceholderPage title="Website Content" />} />
          <Route path="services" element={<AdminPlaceholderPage title="Services Management" />} />
          <Route path="industries" element={<AdminPlaceholderPage title="Industries Management" />} />
          <Route path="gallery" element={<AdminPlaceholderPage title="Gallery Management" />} />
          <Route path="team" element={<AdminPlaceholderPage title="Team Management" />} />
          <Route path="testimonials" element={<AdminPlaceholderPage title="Testimonials Management" />} />
          <Route path="blog" element={<AdminPlaceholderPage title="Blog Management" />} />
          <Route path="seo" element={<AdminPlaceholderPage title="SEO Settings" />} />
          <Route path="settings" element={<AdminPlaceholderPage title="Website Settings" />} />
          <Route path="users" element={<AdminPlaceholderPage title="User Management" />} />
        </Route>

      </Routes>
      <FloatingActions />
    </BrowserRouter>
  );
}

export default App;
