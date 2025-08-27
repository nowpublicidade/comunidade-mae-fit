import { Button } from '@/components/ui/button';
import { Check, HelpCircle } from 'lucide-react';

const Pricing = () => {
  const features = [
    "Comunidade exclusiva no WhatsApp",
    "1 treino específico por mês",
    "1 encontro on-line por mês",
    "Apoio de mulheres na mesma fase",
    "Suporte diário da comunidade",
    "Acesso imediato"
  ];

  return (
    <section id="preco" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Investimento que cabe no seu orçamento
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Menos de R$0,33 por dia para ter apoio, treinos e comunidade
            </p>
          </div>

          <div className="relative max-w-md mx-auto">
            {/* Highlight Badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
              <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                Mais Popular
              </div>
            </div>

            <div className="bg-gradient-to-b from-primary/5 to-primary/10 rounded-3xl p-8 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all duration-200">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Comunidade no WhatsApp
                </h3>
                
                <div className="mb-6">
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-primary">R$ 9</span>
                    <span className="text-2xl text-primary">,99</span>
                    <span className="text-muted-foreground ml-2">/mês</span>
                  </div>
                  <p className="text-muted-foreground mt-2">
                    Sem fidelidade • Acesso imediato
                  </p>
                </div>

                <Button className="btn-primary w-full text-lg py-4 mb-8">
                  Entrar na Comunidade
                </Button>
              </div>

              <div className="space-y-4 mb-8">
                <h4 className="font-semibold text-foreground text-center mb-4">
                  O que está incluído:
                </h4>
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <Check className="w-5 h-5 text-success mr-3 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              {/* FAQ Item */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-start">
                  <HelpCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-medium text-foreground mb-2">
                      Preciso de equipamentos?
                    </h5>
                    <p className="text-sm text-muted-foreground">
                      Não! Todos os treinos são pensados para serem feitos em casa, sem a necessidade de equipamentos caros ou academia.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;