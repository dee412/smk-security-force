import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

const MainLayout = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (pathname === '/' && hash) {
      const id = hash;
      const timer = setTimeout(() => {
        const element = document.querySelector(id);
        if (element) {
          window.lenis?.scrollTo(id, { duration: 1.2 });
        }
      }, 150);
      return () => clearTimeout(timer);
    } else if (!hash) {
      window.lenis?.scrollTo(0, { immediate: true });
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    window.lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      window.lenis = null;
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
