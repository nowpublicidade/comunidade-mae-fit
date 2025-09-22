import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from '@/lib/whatsapp';

const MobileStickyCTA = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border p-3 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] safe-area-pb">
   <Button asChild className="btn-primary w-full text-base py-3 group">
     <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
    <MessageCircle className="w-4 h-4 mr-2" />
    Entrar na Comunidade
    <span className="ml-2 text-xs opacity-90">R$ 9,99/mês</span>
     </a>
   </Button>
    </div>
  );
};

export default MobileStickyCTA;
