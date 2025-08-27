import { MessageCircle, Instagram, Facebook, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <h3 className="font-montserrat font-bold text-2xl mb-4">
                Mamãe Fit 360
              </h3>
              <p className="text-background/80 mb-6 max-w-md">
                Uma comunidade onde mães se conectam, se apoiam e evoluem juntas. Transformando vidas através do movimento e do acolhimento.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors"
                >
                  <Instagram className="w-5 h-5 text-primary" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors"
                >
                  <Facebook className="w-5 h-5 text-primary" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors"
                >
                  <MessageCircle className="w-5 h-5 text-primary" />
                </a>
              </div>
            </div>

            {/* Links Úteis */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Links Úteis</h4>
              <ul className="space-y-3 text-background/80">
                <li>
                  <a href="#beneficios" className="hover:text-primary transition-colors">
                    Benefícios
                  </a>
                </li>
                <li>
                  <a href="#como-funciona" className="hover:text-primary transition-colors">
                    Como funciona
                  </a>
                </li>
                <li>
                  <a href="#preco" className="hover:text-primary transition-colors">
                    Preço
                  </a>
                </li>
                <li>
                  <a href="#sobre" className="hover:text-primary transition-colors">
                    Sobre a Geisiane
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-primary transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-background/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-background/60 text-sm mb-4 md:mb-0">
                © 2024 Geisiane Barbosa - Mamãe Fit 360. Todos os direitos reservados.
              </p>
              <div className="flex items-center text-background/60 text-sm">
                <span>Feito com</span>
                <Heart className="w-4 h-4 mx-1 text-primary fill-current" />
                <span>para mães que não desistem</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;