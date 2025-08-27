import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowDown } from 'lucide-react';
import heroImage from '@/assets/geisiane-family.jpg';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Gradient */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Geisiane Barbosa, mãe e personal trainer, com seus dois filhos"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Price Badge */}
          <Badge className="mb-6 bg-white/95 text-primary hover:bg-white text-lg px-4 py-2">
            R$ 9,99/mês
          </Badge>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Conecte-se, treine e evolua com outras mães como você.
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl mb-8 opacity-95 max-w-3xl mx-auto animate-fade-in">
            Uma comunidade exclusiva no WhatsApp, com apoio diário, 1 treino novo por mês e 1 encontro on-line com a Geisiane.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in">
            <Button 
              size="lg" 
              className="btn-primary text-lg px-8 py-4 w-full sm:w-auto"
            >
              Entrar na Comunidade
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('como-funciona')}
              className="btn-secondary bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary text-lg px-8 py-4 w-full sm:w-auto"
            >
              Ver como funciona
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex items-center justify-center gap-3 text-white/90 animate-fade-in">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-primary border-2 border-white" />
              <div className="w-8 h-8 rounded-full bg-accent border-2 border-white" />
              <div className="w-8 h-8 rounded-full bg-secondary border-2 border-white" />
            </div>
            <span className="text-sm sm:text-base">Mais de 40 mães satisfeitas</span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-white/70" size={24} />
        </div>
      </div>
    </section>
  );
};

export default Hero;