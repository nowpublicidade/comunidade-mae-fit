import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { WHATSAPP_URL } from '@/lib/whatsapp';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="font-montserrat font-bold text-xl text-primary">
            Mamãe Fit 360
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('beneficios')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Benefícios
            </button>
            <button
              onClick={() => scrollToSection('como-funciona')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Como funciona
            </button>
            <button
              onClick={() => scrollToSection('preco')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Preço
            </button>
            <button
              onClick={() => scrollToSection('depoimentos')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Depoimentos
            </button>
            <button
              onClick={() => scrollToSection('sobre')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-foreground hover:text-primary transition-colors"
            >
              FAQ
            </button>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
        <Button asChild className="btn-primary">
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
         Entrar na Comunidade
       </a>
       </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <button
              onClick={() => scrollToSection('beneficios')}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
            >
              Benefícios
            </button>
            <button
              onClick={() => scrollToSection('como-funciona')}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
            >
              Como funciona
            </button>
            <button
              onClick={() => scrollToSection('preco')}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
            >
              Preço
            </button>
            <button
              onClick={() => scrollToSection('depoimentos')}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
            >
              Depoimentos
            </button>
            <button
              onClick={() => scrollToSection('sobre')}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
            >
              FAQ
            </button>
          <Button asChild className="btn-primary">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
          Entrar na Comunidade
          </a>
          </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
