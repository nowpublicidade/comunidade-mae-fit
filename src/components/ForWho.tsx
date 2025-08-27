import { Heart, Home, Users } from 'lucide-react';

const ForWho = () => {
  const benefits = [
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Apoio diário de quem vive o mesmo momento que você.",
      description: "Uma rede de mães que se entendem e se apoiam mutuamente."
    },
    {
      icon: <Home className="w-8 h-8 text-primary" />,
      title: "Treinos simples para fazer em casa, sem equipamentos caros.",
      description: "Exercícios práticos adaptados para sua rotina de mãe."
    },
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Zero julgamentos. 100% acolhimento, motivação e constância.",
      description: "Um ambiente seguro onde você pode ser você mesma."
    }
  ];

  return (
    <section className="py-20 gradient-soft">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Feita para a sua rotina de mãe.
          </h2>
          <p className="text-xl text-muted-foreground mb-16 max-w-2xl mx-auto">
            Uma comunidade que entende seus desafios e celebra suas conquistas
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 text-center shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all duration-200 hover:scale-[1.02]"
              >
                <div className="flex justify-center mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-4 leading-relaxed">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForWho;