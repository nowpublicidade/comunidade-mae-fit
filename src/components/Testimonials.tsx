import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Mariana Santos",
      text: "Finalmente encontrei um grupo onde me sinto acompanhada. As outras mães me motivam todos os dias!",
      rating: 5,
      role: "Mãe de 2 filhos"
    },
    {
      name: "Paula Lima", 
      text: "Os treinos são perfeitos para minha rotina. Consigo fazer em casa enquanto os pequenos dormem.",
      rating: 5,
      role: "Mãe de gêmeos"
    },
    {
      name: "Ana Rodrigues",
      text: "A Geisiane é incrível! Nas lives ela tira todas as dúvidas e sempre nos motiva a continuar.",
      rating: 5,
      role: "Mãe de 1 filho"
    }
  ];

  return (
    <section id="depoimentos" className="py-12 md:py-20 gradient-soft">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              O que as mães estão dizendo
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Histórias reais de transformação e acolhimento
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="card-soft p-6 md:p-8 text-center"
              >
                {/* Stars */}
                <div className="flex justify-center mb-4 md:mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-foreground mb-4 md:mb-6 text-base md:text-lg leading-relaxed italic">
                  "{testimonial.text}"
                </blockquote>

                {/* Author */}
                <div>
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-full mx-auto mb-3 md:mb-4 flex items-center justify-center">
                    <span className="text-primary font-bold text-lg md:text-xl">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-1 text-sm md:text-base">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Social Proof */}
          <div className="text-center mt-12 md:mt-16">
            <div className="inline-flex items-center bg-white rounded-full px-4 md:px-6 py-2 md:py-3 shadow-[var(--shadow-card)]">
              <div className="flex -space-x-1 md:-space-x-2 mr-2 md:mr-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-r from-primary to-accent border-2 border-white"
                  />
                ))}
                <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-muted border-2 border-white flex items-center justify-center">
                  <span className="text-xs font-medium text-foreground">+36</span>
                </div>
              </div>
              <span className="text-foreground font-medium text-sm md:text-base">
                Mais de 40 mães já fazem parte da nossa comunidade
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;