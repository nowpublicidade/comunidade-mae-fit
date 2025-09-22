import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowDown } from 'lucide-react';
import { WHATSAPP_URL } from '@/lib/whatsapp';
const heroImage = '/lovable-uploads/c2e5161c-3c47-46e3-b13e-faf2f02432ef.png';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Custom Gradient */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Geiciane Barbosa, personal trainer na academia"
          className="w-full h-full object-cover object-center md:object-center object-right"
        />
        {/* Mobile: Strong gradient for text readability, Desktop: Subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary/40 md:from-primary md:via-primary/60 md:to-transparent" />
      </div>

      {/* Content - Mobile: Full width centered, Desktop: Left aligned */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full min-h-screen flex items-center">
        <div className="w-full md:max-w-2xl text-white text-center md:text-left">
          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 md:mb-8 leading-tight animate-fade-in">
            Conecte-se, treine e evolua com outras mães como você.
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 md:mb-10 text-white/90 leading-relaxed max-w-lg md:max-w-xl mx-auto md:mx-0 animate-fade-in">
            Uma comunidade exclusiva no WhatsApp, com apoio diário, 1 treino novo por mês e 1 encontro on-line com a Geiciane.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 mb-8 md:mb-12 animate-fade-in">
         <Button asChild
          size="lg"
          className="bg-white hover:bg-white/90 text-primary font-semibold text-base md:text-lg px-8 md:px-10 py-3 md:py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 w-full md:w-auto"
          >
         <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
         Entrar na Comunidade
         </a>
         </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex items-center justify-center md:justify-start gap-3 md:gap-4 text-white/80 animate-fade-in">
            <div className="flex -space-x-2 md:-space-x-3">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary border-2 md:border-3 border-white shadow-md" />
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-accent border-2 md:border-3 border-white shadow-md" />
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-secondary border-2 md:border-3 border-white shadow-md" />
            </div>
            <div className="text-sm md:text-base font-medium">
              <span className="text-white font-bold">40+</span> mães satisfeitas
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-white/60" size={28} />
      </div>
    </section>
  );
};

export default Hero;
