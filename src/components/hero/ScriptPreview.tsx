
interface ScriptPreviewProps {
  loaded: boolean;
  cursorPosition: { x: number; y: number };
  isFacebookBrowser: boolean;
  isMobile: boolean;
}

export const ScriptPreview = ({ loaded, cursorPosition, isFacebookBrowser, isMobile }: ScriptPreviewProps) => {
  return (
    <div 
      className={`mt-8 sm:mt-10 w-full max-w-3xl transition-all delay-500 duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      style={(isFacebookBrowser || isMobile) ? {} : {
        transform: `perspective(1000px) rotateX(${cursorPosition.y * 5}deg) rotateY(${cursorPosition.x * -5}deg)`
      }}
    >
      <div className="relative script-page transform rotate-[-1deg] mx-auto max-w-2xl hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 bg-gradient-to-br from-script-paper via-purple-900/5 to-script-paper border border-purple-500/20">
        {/* Divine Corner Effects */}
        <div className="absolute -top-3 -left-3 w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-br from-purple-400 via-pink-400 to-indigo-400 rounded-full animate-pulse-glow shadow-lg shadow-purple-400/50"></div>
        <div className="absolute -bottom-3 -right-3 w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-br from-pink-400 via-indigo-400 to-purple-400 rounded-full animate-pulse-glow delay-150 shadow-lg shadow-pink-400/50"></div>
        <div className="absolute -top-2 -right-2 w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-br from-indigo-400 to-cyan-400 rounded-full animate-float delay-300"></div>
        <div className="absolute -bottom-2 -left-2 w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-br from-cyan-400 to-purple-400 rounded-full animate-float delay-500"></div>
        
        {/* Divine Border Glow */}
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-indigo-500/20 blur-sm -z-10"></div>
        
        <div className="scene-heading text-sm sm:text-base">INT. STUDIO APARTMENT - NIGHT</div>
        <div className="action-text text-xs sm:text-sm">A dim-lit room. ALEX (30s, disheveled but determined) hunches over a laptop, the blue glow illuminating their exhausted face. Empty coffee cups surround them.</div>
        <div className="character-name text-xs sm:text-sm">ALEX</div>
        <div className="dialogue text-xs sm:text-sm">This time... this time it's going to be perfect.</div>
        <div className="action-text text-xs sm:text-sm">The cursor blinks on a blank document titled "BREAKTHROUGH - Final Draft v23."</div>
        <div className="transition text-xs sm:text-sm">FADE TO BLACK.</div>
      </div>
    </div>
  );
}
