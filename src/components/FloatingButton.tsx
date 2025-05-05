
import { useState, useEffect } from 'react';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function FloatingButton() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Hide button when scrolling down rapidly, show when scrolling up or at top
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 300) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div 
      className={cn(
        'fixed bottom-6 right-6 z-50 transition-all duration-300 transform',
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      )}
    >
      <a 
        href="https://aiwebtools.ai" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <Button 
          className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-medium shadow-lg flex gap-2 items-center group"
        >
          More AI Web Tools
          <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Button>
      </a>
    </div>
  );
}
