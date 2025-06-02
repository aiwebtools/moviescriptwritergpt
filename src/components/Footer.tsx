import { animationTools, soundTools, lipsyncTools, editingTools } from "@/data/tools";
import AnimationSoundTools from "./header/AnimationSoundTools";

export default function Footer() {
  return <footer className="relative bg-gradient-to-br from-purple-900/20 via-script-paper to-indigo-900/30 border-t border-gradient-to-r from-purple-500/20 via-pink-500/20 to-indigo-500/20 py-8 md:py-12 px-4 overflow-hidden">
      {/* Divine Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_rgba(147,51,234,0.15),_transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(236,72,153,0.15),_transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,_rgba(99,102,241,0.1),_transparent_70%)]"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400/30 rounded-full animate-float"></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-pink-400/40 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-blue-400/30 rounded-full animate-float" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-1/4 left-1/2 w-1 h-1 bg-purple-300/30 rounded-full animate-float" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex flex-col items-start">
              <span className="text-lg sm:text-xl font-bold font-display tracking-tight group">
                Movie Script Writer <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 group-hover:animate-pulse-glow">GPT</span>
              </span>
              <a 
                href="https://www.aiwebtools.ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 transition-all duration-300"
              >
                Presented by AiWebTools.Ai
              </a>
            </div>
            <p className="text-xs sm:text-sm text-script-muted mt-2 max-w-md">
              The ultimate AI assistant for creating industry-standard movie scripts from concept to final draft.
            </p>
            <p className="text-xs text-gray-400 mt-2 max-w-md">
              <strong className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Disclaimer:</strong> This tool is for informational, educational and research purposes only.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
            {/* Animation & Sound Tools Accordion */}
            <div className="col-span-1">
              <h3 className="font-semibold mb-3 md:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 text-sm sm:text-base">Animation & Sound Tools</h3>
              <div className="bg-gradient-to-br from-black/30 via-purple-900/10 to-black/30 rounded-lg p-3 border border-purple-500/20 shadow-lg shadow-purple-500/10">
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
              <h3 className="font-semibold mb-3 md:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-300 text-sm sm:text-base">AI Writing & Image Creation</h3>
              <div className="grid grid-cols-1 gap-2.5">
                <a 
                  href="https://chatgpt.com/g/g-35psQsJil-movie-script-writer-gpt-original-version-1" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-4 py-2 rounded-md bg-gradient-to-r from-purple-600/80 via-pink-600/80 to-purple-600/80 hover:from-purple-500 hover:via-pink-500 hover:to-purple-500 text-white text-xs sm:text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 hover:scale-[1.02] flex items-center"
                >
                  <span className="mr-1.5">🎬</span> Movie Script Writer GPT V1
                </a>
                <a 
                  href="https://chatgpt.com/g/g-ZoZ12NUed-movie-script-writer-gpt" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-4 py-2 rounded-md bg-gradient-to-r from-[#9b87f5]/90 via-[#7E69AB]/90 to-[#9b87f5]/90 hover:from-[#9b87f5] hover:via-[#7E69AB] hover:to-[#9b87f5] text-white text-xs sm:text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-400/30 hover:scale-[1.02] flex items-center"
                >
                  <span className="mr-1.5">🎥</span> Movie Script Writer GPT V2
                </a>
                <a 
                  href="https://moviescenemakergpt.lovable.app/?via=aiwebtools" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-4 py-2 rounded-md bg-gradient-to-r from-[#0EA5E9]/90 via-cyan-500/90 to-[#0EA5E9]/90 hover:from-[#0EA5E9] hover:via-cyan-400 hover:to-[#0EA5E9] text-white text-xs sm:text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/30 hover:scale-[1.02] flex items-center"
                >
                  <span className="mr-1.5">🎞️</span> Movie Scene Maker GPT
                </a>
                <a 
                  href="https://chatgpt.com/g/g-6814ab172de081918023593ce10d791d-movie-trailer-poster-gpt" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-4 py-2 rounded-md bg-gradient-to-r from-[#F97316]/90 via-orange-500/90 to-[#F97316]/90 hover:from-[#F97316] hover:via-orange-400 hover:to-[#F97316] text-white text-xs sm:text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-orange-400/30 hover:scale-[1.02] flex items-center"
                >
                  <span className="mr-1.5">🎭</span> Movie Trailer Poster Maker
                </a>
                <a 
                  href="https://musicvideomakergpt.lovable.app/?via=aiwebtools" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-4 py-2 rounded-md bg-gradient-to-r from-[#EC4899]/90 via-pink-500/90 to-[#EC4899]/90 hover:from-[#EC4899] hover:via-pink-400 hover:to-[#EC4899] text-white text-xs sm:text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-pink-400/30 hover:scale-[1.02] flex items-center"
                >
                  <span className="mr-1.5">🎵</span> Music Video Maker GPT
                </a>
                <a 
                  href="https://screenplaywritergpt.lovable.app/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-4 py-2 rounded-md bg-gradient-to-r from-[#D946EF]/90 via-purple-500/90 to-[#D946EF]/90 hover:from-[#D946EF] hover:via-purple-400 hover:to-[#D946EF] text-white text-xs sm:text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-400/30 hover:scale-[1.02] flex items-center"
                >
                  <span className="mr-1.5">📝</span> ScreenPlay Writer GPT
                </a>
                <a 
                  href="https://chatgpt.com/g/g-681a201fe69c8191b99e1636be90139e-commercial-scene-maker-gpt" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-4 py-2 rounded-md bg-gradient-to-r from-[#8B5CF6]/90 via-violet-500/90 to-[#8B5CF6]/90 hover:from-[#8B5CF6] hover:via-violet-400 hover:to-[#8B5CF6] text-white text-xs sm:text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-violet-400/30 hover:scale-[1.02] flex items-center"
                >
                  <span className="mr-1.5">🎥</span> Commercial Scene Maker GPT
                </a>
                <a 
                  href="https://stagemasterai.lovable.app/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-4 py-2 rounded-md bg-gradient-to-r from-[#6E59A5]/90 via-indigo-500/90 to-[#6E59A5]/90 hover:from-[#6E59A5] hover:via-indigo-400 hover:to-[#6E59A5] text-white text-xs sm:text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-indigo-400/30 hover:scale-[1.02] flex items-center"
                >
                  <span className="mr-1.5">🎭</span> StageMaster AI Suite for the Performing Arts
                </a>
              </div>
              <div className="mt-4">
                <a 
                  href="https://www.aiwebtools.ai" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 hover:from-purple-500 hover:via-pink-500 hover:to-indigo-500 text-white rounded-md text-xs font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 hover:scale-[1.02] justify-center"
                >
                  EXPLORE MORE AI TOOLS
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3 md:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-indigo-300 text-sm sm:text-base">Company</h3>
              <ul className="space-y-2">
                <li><a href="https://www.aiwebtools.ai" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 transition-all duration-300">About Us</a></li>
                <li><a href="https://openai.com/policies/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 transition-all duration-300">Privacy</a></li>
                <li><a href="https://aiwebtools.lovable.app/disclaimers" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 transition-all duration-300">Terms & Disclaimers</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-8 md:mt-12 pt-6 border-t border-gradient-to-r from-purple-500/20 via-transparent to-pink-500/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs sm:text-sm text-gray-400">© 2025 AI WEB TOOLS LLC. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <a href="https://www.instagram.com/aiwebtools.ai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 transition-all duration-300 transform hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            </a>
            <a href="https://www.tiktok.com/@aiwebtools" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 transition-all duration-300 transform hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>;
}
