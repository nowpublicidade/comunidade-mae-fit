import { Award, Heart, Users, Clock } from 'lucide-react';
const aboutImage = '/lovable-uploads/877fbe4c-6f3b-4708-a492-cbc6d2bfcd50.png';

const About = () => {
  const highlights = [
    {
      icon: <Award className="w-6 h-6 text-primary" />,
      text: "Personal Trainer certificada"
    },
    {
      icon: <Heart className="w-6 h-6 text-primary" />,
      text: "Especialista em treinos para mães"
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      text: "Mais de 100 mães transformadas"
    },
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      text: "5 anos de experiência"
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Conheça a Geisiane
              </h2>
              
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">Geisiane Barbosa é Personal Trainer e mãe</strong>, especialista em treinos para mães no pós-parto. Ela entende na pele os desafios de conciliar maternidade com cuidado pessoal.
                </p>
                
                <p>
                  Já ajudou dezenas de mulheres a recuperarem autoestima e disposição no pós-parto, sempre com uma abordagem acolhedora que respeita o tempo e as limitações de cada mãe.
                </p>
                
                <p>
                  <strong className="text-foreground">Sua metodologia própria</strong> foca em exercícios funcionais para o core, respeitando o corpo materno e oferecendo a flexibilidade que a rotina de uma mãe exige.
                </p>
              </div>

              {/* Highlights */}
              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                {highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="flex items-center bg-secondary/50 rounded-xl p-4"
                  >
                    <div className="mr-3">
                      {highlight.icon}
                    </div>
                    <span className="text-foreground font-medium">
                      {highlight.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Credentials */}
              <div className="mt-8 p-6 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl border border-primary/10">
                <h4 className="font-semibold text-foreground mb-3">
                  Diferenciais da metodologia:
                </h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-3 mr-3 flex-shrink-0"></span>
                    Foco no fortalecimento do core pós-parto
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-3 mr-3 flex-shrink-0"></span>
                    Respeito ao corpo e tempo de recuperação materno
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-3 mr-3 flex-shrink-0"></span>
                    Flexibilidade para se adaptar à rotina de cada mãe
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-3 mr-3 flex-shrink-0"></span>
                    Atendimento humanizado e empático
                  </li>
                </ul>
              </div>
            </div>

            {/* Image */}
            <div className="order-1 lg:order-2">
              <div className="relative">
                <img
                  src={aboutImage}
                  alt="Geisiane Barbosa, personal trainer, sorrindo"
                  className="w-full rounded-3xl shadow-[var(--shadow-card)]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;