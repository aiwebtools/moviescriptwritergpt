
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import ProcessSection from '@/components/ProcessSection';
import ExampleSection from '@/components/ExampleSection';
import Footer from '@/components/Footer';
import DisclaimerDialog from '@/components/DisclaimerDialog';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Update document title for better SEO
    document.title = "Movie Script Writer & AI Filmmaking Tools | AI Web Tools";
    
    // Simulate loading to ensure smooth transitions
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse">
          <span className="text-2xl font-bold font-display tracking-tight">
            Script<span className="text-script-accent">Writer</span>
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <DisclaimerDialog />
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ProcessSection />
        <ExampleSection />
      </main>
      <Footer />
      
      {/* Disclaimer Notice - positioned to avoid floating button */}
      <div className="fixed bottom-4 left-4 right-4 md:left-4 md:right-auto md:w-80 bg-script-bg/90 backdrop-blur-sm border border-white/10 rounded-lg p-3 text-xs text-gray-400 z-40">
        <p className="mb-2">
          <strong className="text-script-accent">Disclaimer:</strong> This tool is for informational, educational and research purposes only.
        </p>
        <a 
          href="https://aiwebtools.lovable.app/disclaimers" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-script-accent hover:text-script-accent/80 underline"
        >
          View Full Terms & Disclaimers
        </a>
      </div>
    </div>
  );
}

export default Index;
