import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, Shield } from 'lucide-react';
import { WHATSAPP_URL } from '@/lib/whatsapp';

const FinalCTA = () => {
  return (
    <section className="py-20 bg-foreground text-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(200,37,99,0.3),transparent_70%)]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Content */}
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Pronta para ter apoio todos os dias?
            </h2>
            
            <p className="text-xl sm:text-2xl mb-8 opacity-90 max-w-2xl mx-auto">
              Entre na comunidade por <span className="text-primary font-bold">R$ 9,99/mês</span> e comece ainda hoje sua jornada com outras mães.
            </p>

            <Button asChild
              size="lg"
              className="btn-primary text-xl px-12 py-6 mb-8 group"
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                Entrar na Comunidade
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-3">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm opacity-90">Acesso imediato</span>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-3">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm opacity-90">Sem fidelidade</span>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-3">
                <div className="text-primary font-bold">R$</div>
              </div>
              <span className="text-sm opacity-90">Apenas R$ 9,99/mês</span>
            </div>
          </div>

          {/* Additional Motivator */}
          <div className="mt-12 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
            <p className="text-lg opacity-90 mb-4">
              🌟 <strong>Oferta especial:</strong> Primeiras 50 mães ganham acesso ao eBook "5 Exercícios Para Fortalecer o Core" gratuitamente!
            </p>
            <p className="text-sm opacity-75">
              ⏰ Restam apenas algumas vagas...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
