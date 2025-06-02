
interface HeroContentProps {
  loaded: boolean;
}

export const HeroContent = ({ loaded }: HeroContentProps) => {
  return (
    <div className={`transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <span className="inline-block px-4 py-2 text-xs font-medium bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-indigo-500/20 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 rounded-full mb-3 md:mb-4 border border-purple-500/30 shadow-lg shadow-purple-500/20">
        Industry Standard AI Script Writing
      </span>
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-display mb-4 md:mb-6 tracking-tight">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-white drop-shadow-2xl">
          Craft Award-Winning Movie Scripts <br className="hidden sm:block" />
        </span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 drop-shadow-lg animate-pulse-glow">
          with AI
        </span>
      </h1>
      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-purple-100 to-gray-200 max-w-2xl mx-auto leading-relaxed">
        The most sophisticated AI screenwriting assistant that guides you through every step of the script creation process, from concept to final draft.
      </p>
    </div>
  );
}
