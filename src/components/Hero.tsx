import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowDown } from 'lucide-react';
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
          alt="Geisiane Barbosa, personal trainer na academia"
          className="w-full h-full object-cover object-center"
        />
        {/* Custom gradient: solid magenta left to transparent right */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/60 to-transparent" />
      </div>

      {/* Content - Left aligned and vertically centered */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full min-h-screen flex items-center">
        <div className="max-w-2xl text-white">
          {/* Price Badge */}
          <Badge className="mb-8 bg-white/95 text-primary hover:bg-white text-base font-semibold px-6 py-3 animate-fade-in">
            R$ 9,99/mês
          </Badge>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 leading-tight animate-fade-in">
            Conecte-se, treine e evolua com outras mães como você.
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl lg:text-2xl mb-10 text-white/90 leading-relaxed max-w-xl animate-fade-in">
            Uma comunidade exclusiva no WhatsApp, com apoio diário, 1 treino novo por mês e 1 encontro on-line com a Geisiane.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in">
            <Button 
              size="lg" 
              className="bg-white hover:bg-white/90 text-primary font-semibold text-lg px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Entrar na Comunidade
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex items-center gap-4 text-white/80 animate-fade-in">
            <div className="flex -space-x-3">
              <div className="w-10 h-10 rounded-full bg-primary border-3 border-white shadow-md" />
              <div className="w-10 h-10 rounded-full bg-accent border-3 border-white shadow-md" />
              <div className="w-10 h-10 rounded-full bg-secondary border-3 border-white shadow-md" />
            </div>
            <div className="text-base font-medium">
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