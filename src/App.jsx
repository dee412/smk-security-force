import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import NotFoundPage from './pages/NotFoundPage';
import FloatingActions from './components/ui/FloatingActions';

// Admin Components
import AdminLayout from './admin/layouts/AdminLayout';
import AdminLogin from './admin/pages/AdminLogin';
import DashboardOverview from './admin/pages/DashboardOverview';
import ContactManagement from './admin/pages/ContactManagement';

const HashRedirect = ({ toSection }) => {
  return <Navigate to={`/#${toSection}`} replace />;
};

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
          <Route path="about" element={<HashRedirect toSection="about" />} />
          <Route path="services" element={<HashRedirect toSection="services" />} />
          <Route path="industries" element={<HashRedirect toSection="industries" />} />
          <Route path="contact" element={<HashRedirect toSection="contact" />} />
          <Route path="assessment" element={<HashRedirect toSection="contact" />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<DashboardOverview />} />
          <Route path="dashboard" element={<DashboardOverview />} />
          <Route path="inquiries" element={<ContactManagement />} />
          
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
