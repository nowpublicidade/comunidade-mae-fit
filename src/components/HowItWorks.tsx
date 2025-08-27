import { MessageSquare, Play, Calendar, Users2 } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: <MessageSquare className="w-8 h-8 text-primary" />,
      title: "Entre no grupo",
      description: "Acesso direto via link do WhatsApp. É rápido e simples!"
    },
    {
      number: "02",
      icon: <Play className="w-8 h-8 text-primary" />,
      title: "Receba o treino do mês",
      description: "Todo início de mês, um novo treino exclusivo com vídeo e guia prático."
    },
    {
      number: "03",
      icon: <Calendar className="w-8 h-8 text-primary" />,
      title: "Participe da reunião on-line",
      description: "Encontros mensais para tirar dúvidas e receber orientações personalizadas."
    },
    {
      number: "04",
      icon: <Users2 className="w-8 h-8 text-primary" />,
      title: "Compartilhe e evolua",
      description: "A comunidade apoia sua constância e celebra suas conquistas."
    }
  ];

  return (
    <section id="como-funciona" className="py-20 gradient-soft">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Como funciona?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              4 passos simples para transformar sua rotina de exercícios
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {steps.map((step, index) => (
              <div
                key={index}
                className="text-center group"
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-200">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {step.number}
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Callout */}
          <div className="bg-white rounded-2xl p-8 text-center shadow-[var(--shadow-card)] max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Sem fidelidade. Cancele quando quiser.
            </h3>
            <p className="text-muted-foreground">
              Você tem total liberdade para decidir quando continuar ou pausar sua participação.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;