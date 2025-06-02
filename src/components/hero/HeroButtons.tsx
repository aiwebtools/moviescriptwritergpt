
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface HeroButtonsProps {
  loaded: boolean;
  isMobile: boolean;
}

export const HeroButtons = ({ loaded, isMobile }: HeroButtonsProps) => {
  return (
    <div className={`flex flex-row flex-wrap md:flex-nowrap justify-center gap-3 sm:gap-4 mt-6 sm:mt-8 transition-all delay-200 duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <Link to="/select-version">
        <Button 
          size={isMobile ? "default" : "lg"} 
          className="font-medium bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 hover:from-purple-500 hover:via-pink-500 hover:to-indigo-500 shadow-xl shadow-purple-500/30 hover:shadow-2xl hover:shadow-purple-400/40 transition-all duration-300 text-sm sm:text-base border border-purple-400/30 hover:scale-105"
        >
          Write Your Movie Script Now
        </Button>
      </Link>
      <a 
        href="https://moviescenemakergpt.lovable.app/?via=aiwebtools" 
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button 
          size={isMobile ? "default" : "lg"} 
          variant="outline" 
          className="font-medium border-purple-500/50 bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 hover:from-purple-400 hover:to-pink-400 hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20 transition-all duration-300 text-sm sm:text-base whitespace-normal md:whitespace-nowrap shadow-lg shadow-purple-500/20 hover:shadow-xl hover:shadow-purple-400/30 hover:scale-105"
        >
          Start Creating Your Movie Scene Visuals Click Here
        </Button>
      </a>
      <a 
        href="https://chatgpt.com/g/g-6814ab172de081918023593ce10d791d-movie-trailer-poster-gpt" 
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button 
          size={isMobile ? "default" : "lg"} 
          variant="outline" 
          className="font-medium border-cyan-500/50 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300 hover:from-cyan-400 hover:to-blue-400 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 transition-all duration-300 text-sm sm:text-base shadow-lg shadow-cyan-500/20 hover:shadow-xl hover:shadow-cyan-400/30 hover:scale-105"
        >
          Make Your Movie Trailer Poster
        </Button>
      </a>
    </div>
  );
}
