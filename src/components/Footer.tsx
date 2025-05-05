
import { animationTools, soundTools, lipsyncTools, editingTools } from "@/data/tools";
import AnimationSoundTools from "./header/AnimationSoundTools";

export default function Footer() {
  return <footer className="bg-script-paper border-t border-white/10 py-8 md:py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex flex-col items-start">
              <span className="text-lg sm:text-xl font-bold font-display tracking-tight group">
                Movie Script Writer <span className="text-script-accent group-hover:animate-pulse-glow">GPT</span>
              </span>
              <a 
                href="https://www.aiwebtools.ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs text-gray-400 hover:text-script-accent transition-colors"
              >
                Presented by AiWebTools.Ai
              </a>
            </div>
            <p className="text-xs sm:text-sm text-script-muted mt-2 max-w-md">
              The ultimate AI assistant for creating industry-standard movie scripts from concept to final draft.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
            {/* Animation & Sound Tools Accordion */}
            <div className="col-span-1">
              <h3 className="font-semibold mb-3 md:mb-4 text-white text-sm sm:text-base">Animation & Sound Tools</h3>
              <div className="bg-black/20 rounded-lg p-3 border border-white/5">
                <AnimationSoundTools 
                  animationTools={animationTools}
                  soundTools={soundTools}
                  lipsyncTools={lipsyncTools}
                  editingTools={editingTools}
                  isMobile={true}
                  onItemClick={() => {}}
                />
              </div>
            </div>

            <div className="col-span-1">
              <h3 className="font-semibold mb-3 md:mb-4 text-white text-sm sm:text-base">AI Writing & Image Creation</h3>
              <div className="grid grid-cols-1 gap-2.5">
                <a 
                  href="https://chatgpt.com/g/g-35psQsJil-movie-script-writer-gpt-original-version-1" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-4 py-2 rounded-md bg-gradient-to-r from-script-accent/80 to-script-accent hover:from-script-accent hover:to-script-accent/90 text-white text-xs sm:text-sm font-medium transition-all duration-300 hover:shadow-glow hover:scale-[1.02] flex items-center"
                >
                  <span className="mr-1.5">🎬</span> Movie Script Writer GPT V1
                </a>
                <a 
                  href="https://chatgpt.com/g/g-ZoZ12NUed-movie-script-writer-gpt" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-4 py-2 rounded-md bg-gradient-to-r from-[#9b87f5]/90 to-[#7E69AB] hover:from-[#9b87f5] hover:to-[#7E69AB]/90 text-white text-xs sm:text-sm font-medium transition-all duration-300 hover:shadow-glow hover:scale-[1.02] flex items-center"
                >
                  <span className="mr-1.5">🎥</span> Movie Script Writer GPT V2
                </a>
                <a 
                  href="https://moviescenemakergpt.lovable.app/?via=aiwebtools" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-4 py-2 rounded-md bg-gradient-to-r from-[#0EA5E9]/90 to-[#0EA5E9] hover:from-[#0EA5E9] hover:to-[#0EA5E9]/80 text-white text-xs sm:text-sm font-medium transition-all duration-300 hover:shadow-glow hover:scale-[1.02] flex items-center"
                >
                  <span className="mr-1.5">🎞️</span> Movie Scene Maker GPT
                </a>
                <a 
                  href="https://chatgpt.com/g/g-6814ab172de081918023593ce10d791d-movie-trailer-poster-gpt" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-4 py-2 rounded-md bg-gradient-to-r from-[#F97316]/90 to-[#F97316] hover:from-[#F97316] hover:to-[#F97316]/80 text-white text-xs sm:text-sm font-medium transition-all duration-300 hover:shadow-glow hover:scale-[1.02] flex items-center"
                >
                  <span className="mr-1.5">🎭</span> Movie Trailer Poster Maker
                </a>
                <a 
                  href="https://musicvideomakergpt.lovable.app/?via=aiwebtools" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-4 py-2 rounded-md bg-gradient-to-r from-[#EC4899]/90 to-[#EC4899] hover:from-[#EC4899] hover:to-[#EC4899]/80 text-white text-xs sm:text-sm font-medium transition-all duration-300 hover:shadow-glow hover:scale-[1.02] flex items-center"
                >
                  <span className="mr-1.5">🎵</span> Music Video Maker GPT
                </a>
                <a 
                  href="https://screenplaywritergpt.lovable.app/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-4 py-2 rounded-md bg-gradient-to-r from-[#D946EF]/90 to-[#D946EF] hover:from-[#D946EF] hover:to-[#D946EF]/80 text-white text-xs sm:text-sm font-medium transition-all duration-300 hover:shadow-glow hover:scale-[1.02] flex items-center"
                >
                  <span className="mr-1.5">📝</span> ScreenPlay Writer GPT
                </a>
                <a 
                  href="https://bookwritergpt.lovable.app/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-4 py-2 rounded-md bg-gradient-to-r from-[#8B5CF6]/90 to-[#8B5CF6] hover:from-[#8B5CF6] hover:to-[#8B5CF6]/80 text-white text-xs sm:text-sm font-medium transition-all duration-300 hover:shadow-glow hover:scale-[1.02] flex items-center"
                >
                  <span className="mr-1.5">📕</span> Book Writer GPT
                </a>
                <a 
                  href="https://stagemasterai.lovable.app/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-4 py-2 rounded-md bg-gradient-to-r from-[#6E59A5]/90 to-[#6E59A5] hover:from-[#6E59A5] hover:to-[#6E59A5]/80 text-white text-xs sm:text-sm font-medium transition-all duration-300 hover:shadow-glow hover:scale-[1.02] flex items-center"
                >
                  <span className="mr-1.5">🎭</span> StageMaster AI Suite for the Performing Arts
                </a>
              </div>
              <div className="mt-4">
                <a 
                  href="https://www.aiwebtools.ai" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center px-4 py-2 bg-script-accent text-white rounded-md text-xs font-medium hover:bg-script-accent/90 transition-all duration-300 hover:shadow-glow hover:scale-[1.02] justify-center"
                >
                  EXPLORE MORE AI TOOLS
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3 md:mb-4 text-white text-sm sm:text-base">Company</h3>
              <ul className="space-y-2">
                <li><a href="https://www.aiwebtools.ai" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm text-gray-300 hover:text-script-accent transition-colors">About Us</a></li>
                <li><a href="https://openai.com/policies/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm text-gray-300 hover:text-script-accent transition-colors">Privacy</a></li>
                <li><a href="https://aiwebtools.ai/terms-of-services" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm text-gray-300 hover:text-script-accent transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-8 md:mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs sm:text-sm text-gray-400">© 2025 AI WEB TOOLS LLC. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <a href="https://www.instagram.com/aiwebtools.ai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-script-accent">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            </a>
            <a href="https://www.tiktok.com/@aiwebtools" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-script-accent">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>;
}
