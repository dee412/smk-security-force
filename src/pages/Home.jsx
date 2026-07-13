import Navbar from '../components/common/Navbar';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Services from '../components/sections/Services';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import Industries from '../components/sections/Industries';
import HowWeWork from '../components/sections/HowWeWork';
import Careers from '../components/sections/Careers';
import Contact from '../components/sections/Contact';
import Footer from '../components/common/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-body">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Industries />
        <HowWeWork />
        <Careers />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
