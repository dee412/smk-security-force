import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Services from '../components/sections/Services';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import Industries from '../components/sections/Industries';
import HowWeWork from '../components/sections/HowWeWork';
import Contact from '../components/sections/Contact';

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-body">
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Industries />
        <HowWeWork />
        <Contact />
      </main>
    </div>
  );
};

export default Home;
