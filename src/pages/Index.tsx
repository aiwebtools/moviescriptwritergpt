
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
    // Enhanced SEO title with target keywords
    document.title = "Free AI Tools | Movie Script Writer & AI Filmmaking Tools | AI Web Tools";
    
    // Add meta description dynamically
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Free AI tools for filmmaking! Create professional movie scripts, scenes, trailers & posters with our AI-powered suite. Movie Script Writer GPT, Scene Maker & more AI tools from AI Web Tools.');
    }
    
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
            AI Web <span className="text-script-accent">Tools</span>
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
        {/* Hidden SEO content for better keyword targeting */}
        <div className="sr-only">
          <h1>Free AI Tools for Content Creation and Filmmaking</h1>
          <p>AI Web Tools offers the best free AI tools including Movie Script Writer GPT, AI Scene Maker, AI Video Tools, and more artificial intelligence tools for creators.</p>
        </div>
        <HeroSection />
        <FeaturesSection />
        <ProcessSection />
        <ExampleSection />
      </main>
      <Footer />
    </div>
  );
}

export default Index;
