import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { WHATSAPP_URL } from '@/lib/whatsapp';

const FAQ = () => {
  const faqs = [
    {
      question: "Como acesso o grupo?",
      answer: "Após o pagamento, você receberá um link de convite para entrar no grupo do WhatsApp. O acesso é imediato e você já pode começar a interagir com a comunidade."
    },
    {
      question: "Quando recebo o treino?",
      answer: "Todo início de mês você recebe um novo treino exclusivo, com vídeos explicativos e guia passo a passo. O primeiro treino chega assim que você entra no grupo."
    },
    {
      question: "As lives ficam gravadas?",
      answer: "Sim! Todos os encontros on-line são gravados e ficam disponíveis no grupo para quem não conseguiu participar ao vivo. Você pode assistir quando for mais conveniente."
    },
    {
      question: "Posso cancelar quando quiser?",
      answer: "Sim, não há fidelidade. Você pode cancelar a qualquer momento e continuar no grupo até o final do mês que já foi pago."
    },
    {
      question: "Funciona para iniciantes?",
      answer: "Perfeitamente! Os treinos são pensados para mães em diferentes fases e níveis de condicionamento. Tudo é explicado de forma didática e você sempre pode tirar dúvidas na comunidade."
    },
    {
      question: "Preciso de equipamentos?",
      answer: "Não! Todos os treinos são desenvolvidos para serem feitos em casa, usando apenas o peso do corpo ou objetos que você já tem em casa. Nada de equipamentos caros."
    },
    {
      question: "E se eu tiver dúvidas sobre os exercícios?",
      answer: "Você pode tirar suas dúvidas na comunidade a qualquer momento, e também nos encontros mensais ao vivo com a Geiciane. Sempre há alguém disponível para ajudar."
    },
    {
      question: "Como funciona o pagamento?",
      answer: "O pagamento é mensal no valor de R$ 9,99. Você pode pagar via PIX, cartão de crédito ou débito. É simples e seguro."
    }
  ];

  return (
    <section id="faq" className="py-20 gradient-soft">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Dúvidas frequentes
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Esclarecemos as principais questões sobre a comunidade
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-[var(--shadow-card)]">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Ainda tem dúvidas? Fale conosco!
            </p>
<a
  href={WHATSAPP_URL}
  target="_blank"
  rel="noopener noreferrer"
  className="text-primary font-medium hover:text-primary/80 transition-colors"
>
  Entrar em contato via WhatsApp →
</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
