
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import VersionCard from '@/components/VersionCard';
import StageVersionCard from '@/components/StageVersionCard';
import VersionPageHeader from '@/components/VersionPageHeader';
import { Sparkles, Zap, Theater, Camera, Film, Music, Trophy, ExternalLink } from "lucide-react";
import { format } from 'date-fns';

export default function SelectVersion() {
  const [currentDate, setCurrentDate] = useState(format(new Date(), 'MMMM d, yyyy'));

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Update document title for better SEO
    document.title = "Select Movie Script Writer Version | AI Filmmaking Tools";

    // Update date (in case component stays mounted across midnight)
    const interval = setInterval(() => {
      setCurrentDate(format(new Date(), 'MMMM d, yyyy'));
    }, 60000);

    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="min-h-screen bg-script-bg text-white">
      <Header />
      
      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <VersionPageHeader />

          {/* Top Rated Video Generation Tools Section */}
          <div className="mb-12 p-6 bg-gradient-to-r from-amber-500/10 via-yellow-500/5 to-amber-500/10 border border-amber-500/30 rounded-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-400/10 via-transparent to-transparent animate-pulse"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <Trophy className="h-8 w-8 text-amber-400 animate-bounce" style={{ animationDuration: '2s' }} />
                <h2 className="text-2xl font-bold text-amber-400" style={{ textShadow: '0 0 20px rgba(251, 191, 36, 0.5)' }}>
                  Best Video Generation Platforms
                </h2>
                <span className="text-sm text-amber-300/80 bg-amber-500/20 px-3 py-1 rounded-full">
                  Voted #{`1`} as of {currentDate}
                </span>
              </div>
              <p className="text-gray-300 mb-6">
                These all-in-one tools combine video generation AND sound in a single step, eliminating multiple stages of the creation process. 
                Use our GPTs to write your script, then go directly to generation!
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a 
                  href="https://www.sora.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-black/40 border border-amber-500/40 rounded-lg hover:bg-amber-500/10 hover:border-amber-400 transition-all duration-300 group"
                  style={{ boxShadow: '0 0 15px rgba(251, 191, 36, 0.2)' }}
                >
                  <div className="h-12 w-12 rounded-full bg-amber-500/20 flex items-center justify-center">
                    <Trophy className="h-6 w-6 text-amber-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-amber-400 group-hover:text-amber-300">SORA 2</h3>
                    <p className="text-sm text-gray-400">OpenAI's latest video generation with integrated sound</p>
                  </div>
                  <ExternalLink className="h-5 w-5 text-amber-400/50 group-hover:text-amber-400" />
                </a>
                <a 
                  href="https://aistudio.google.com/generate-video" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-black/40 border border-amber-500/40 rounded-lg hover:bg-amber-500/10 hover:border-amber-400 transition-all duration-300 group"
                  style={{ boxShadow: '0 0 15px rgba(251, 191, 36, 0.2)' }}
                >
                  <div className="h-12 w-12 rounded-full bg-amber-500/20 flex items-center justify-center">
                    <Trophy className="h-6 w-6 text-amber-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-amber-400 group-hover:text-amber-300">Google Veo 3</h3>
                    <p className="text-sm text-gray-400">Google's powerful video + audio generation platform</p>
                  </div>
                  <ExternalLink className="h-5 w-5 text-amber-400/50 group-hover:text-amber-400" />
                </a>
              </div>
              <p className="text-xs text-amber-300/60 mt-4 italic">
                * Manual editing may still be required for final production
              </p>
            </div>
          </div>
          
          {/* Modified grid layout with better desktop sizing */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 mx-auto">
            {/* Version 1 Card */}
            <VersionCard
              title="Movie Script Writer Version 1"
              description="The classic experience with all the essential features to create professional screenplays. Export to DOCX available upon request."
              features={[
                "Advanced narrative techniques",
                "Complex character arcs",
                "Enhanced dialogue writing",
                "Manual DOCX export (upon request)"
              ]}
              link="https://chatgpt.com/g/g-35psQsJil-movie-script-writer-gpt-original-version-1"
              badgeText="Original"
              BadgeIcon={Sparkles}
              buttonText="Select Movie Script Writer Version 1"
              buttonColor="bg-purple-600 hover:bg-purple-700"
              buttonShadow="shadow-[0_0_10px_#8b5cf6,0_0_20px_#8b5cf6]"
            />
            
            {/* Version 2 Card */}
            <VersionCard
              title="Movie Script Writer Version 2"
              description="Same great screenplay writing capabilities as Version 1, but with automatic DOCX export functionality built-in."
              features={[
                "Advanced narrative techniques",
                "Complex character arcs",
                "Enhanced dialogue writing",
                "Automatic DOCX export"
              ]}
              link="https://chatgpt.com/g/g-ZoZ12NUed-movie-script-writer-gpt"
              badgeText="Enhanced"
              BadgeIcon={Zap}
              buttonText="Select Movie Script Writer Version 2"
              buttonColor="bg-blue-600 hover:bg-blue-700"
              buttonShadow="shadow-[0_0_10px_#3b82f6,0_0_20px_#3b82f6]"
            />
            
            {/* Movie Scene Maker GPT Card */}
            <VersionCard
              title="Movie Scene Maker"
              description="Become the star in your own Hollywood productions with GPT-4o powered image generation. Upload your picture and create customized movie scenes."
              features={[
                "Personal scene generation",
                "Use your own scripts",
                "AI image generation",
                "Customizable scenarios"
              ]}
              link="https://moviescenemakergpt.lovable.app/?via=aiwebtools"
              badgeText="Star"
              BadgeIcon={Camera}
              buttonText="Use Movie Scene Maker"
              buttonColor="bg-green-600 hover:bg-green-700"
              buttonShadow="shadow-[0_0_10px_#22c55e,0_0_20px_#22c55e]"
            />
            
            {/* Music Video Maker GPT Card */}
            <VersionCard
              title="Music Video Maker GPT"
              description="Create stunning music videos with AI-powered tools. Turn your musical ideas into visual experiences with customized scenes and effects."
              features={[
                "AI music video generation",
                "Scene customization",
                "Audio synchronization",
                "Visual effects integration"
              ]}
              link="https://musicvideomakergpt.lovable.app/?via=aiwebtools"
              badgeText="Music"
              BadgeIcon={Music}
              buttonText="Use Music Video Maker GPT"
              buttonColor="bg-pink-600 hover:bg-pink-700"
              buttonShadow="shadow-[0_0_10px_#ec4899,0_0_20px_#ec4899]"
            />
            
            {/* Movie Trailer Poster Maker Card */}
            <VersionCard
              title="Movie Trailer Poster Maker"
              description="Create eye-catching movie trailers and posters with GPT-4o powered image generation. Turn your script into professional marketing materials."
              features={[
                "AI poster generation",
                "Trailer concept design",
                "Marketing copy creation",
                "Professional visual styles"
              ]}
              link="https://chatgpt.com/g/g-6814ab172de081918023593ce10d791d-movie-trailer-poster-gpt"
              badgeText="Visual"
              BadgeIcon={Film}
              buttonText="Use Movie Trailer Poster Maker"
              buttonColor="bg-amber-600 hover:bg-amber-700"
              buttonShadow="shadow-[0_0_10px_#d97706,0_0_20px_#d97706]"
            />
            
            {/* StageMaster AI Suite Card */}
            <VersionCard
              title="StageMaster AI"
              description="Complete AI Creative Suite designed specifically for theater, stage production, and performing arts. From set design to choreography."
              features={[
                "Theater & Stage Set Design",
                "Costume Design for Stage",
                "Choreography Planning",
                "Stage Lighting & Production"
              ]}
              link="https://stagemasterai.lovable.app/"
              badgeText="Performing Arts"
              BadgeIcon={Theater}
              buttonColor="bg-fuchsia-600 hover:bg-fuchsia-700"
              buttonShadow="shadow-[0_0_10px_#c026d3,0_0_20px_#c026d3]"
              buttonText="🎭 StageMaster AI Suite for the Performing Arts"
            />
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-20 left-10 w-20 h-20 border border-white/10 rounded-full animate-rotate-slow opacity-20"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 border border-script-accent/20 rounded-full animate-rotate-slow opacity-30" style={{
            animationDirection: 'reverse'
          }}></div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
