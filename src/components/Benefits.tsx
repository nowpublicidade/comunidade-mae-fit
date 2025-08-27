import { MessageCircle, Dumbbell, Video, Check } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <MessageCircle className="w-12 h-12 text-primary" />,
      title: "Comunidade no WhatsApp",
      description: "Troca de experiências, dicas e motivação diária com outras mães que vivem os mesmos desafios.",
      features: [
        "Apoio 24/7 da comunidade",
        "Dicas práticas de treino",
        "Motivação diária",
        "Rede de suporte"
      ]
    },
    {
      icon: <Dumbbell className="w-12 h-12 text-primary" />,
      title: "Treino mensal exclusivo",
      description: "Um treino novo por mês, pensado especificamente para mães, que pode ser feito em casa.",
      features: [
        "Treinos para casa",
        "Sem equipamentos caros",
        "Adaptado para mães",
        "Vídeos explicativos"
      ]
    },
    {
      icon: <Video className="w-12 h-12 text-primary" />,
      title: "Encontro on-line com a Geisiane",
      description: "Tira-dúvidas, correções de exercícios e incentivo direto da personal trainer.",
      features: [
        "Correção de postura",
        "Tira-dúvidas ao vivo",
        "Motivação personalizada",
        "Acompanhamento direto"
      ]
    }
  ];

  return (
    <section id="beneficios" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Tudo que você precisa em um só lugar
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Três pilares fundamentais para sua jornada fitness como mãe
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="card-soft p-8 text-center group"
              >
                <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-200">
                  {benefit.icon}
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {benefit.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {benefit.description}
                </p>

                <div className="space-y-3">
                  {benefit.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm">
                      <Check className="w-4 h-4 text-success mr-3 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;