import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ForWho from '@/components/ForWho';
import Benefits from '@/components/Benefits';
import HowItWorks from '@/components/HowItWorks';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import About from '@/components/About';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import MobileStickyCTA from '@/components/MobileStickyCTA';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        <Hero />
        <ForWho />
        <Benefits />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <About />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />
      <MobileStickyCTA />
    </div>
  );
};

export default Index;
