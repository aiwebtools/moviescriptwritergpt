
import { Film, Music, Mic, Edit, Trophy } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type Tool = {
  name: string;
  url: string;
  isTopRated?: boolean;
  badge?: string;
};

interface AnimationSoundToolsProps {
  animationTools: Tool[];
  soundTools: Tool[];
  lipsyncTools: Tool[];
  editingTools: Tool[];
  isMobile?: boolean;
  onItemClick?: () => void;
}

const ToolLink = ({ tool, isMobile, onItemClick, index, emoji }: { 
  tool: Tool; 
  isMobile: boolean; 
  onItemClick?: () => void; 
  index: number;
  emoji: string;
}) => (
  <a 
    key={tool.name}
    href={tool.url} 
    target="_blank" 
    rel="noopener noreferrer" 
    className={`
      ${isMobile ? 'text-sm' : 'px-3 py-2 rounded-md text-sm hover:bg-white/5'} 
      flex items-center transition-all duration-200 hover:translate-x-1 animate-fade-in
      ${tool.isTopRated 
        ? 'text-amber-400 font-semibold hover:text-amber-300' 
        : isMobile ? 'text-gray-300 hover:text-script-accent' : ''
      }
    `}
    onClick={onItemClick}
    style={{ 
      animationDelay: `${index * 50}ms`,
      ...(tool.isTopRated && { 
        textShadow: '0 0 10px rgba(251, 191, 36, 0.5), 0 0 20px rgba(251, 191, 36, 0.3)' 
      })
    }}
  >
    {tool.isTopRated ? (
      <Trophy className="h-4 w-4 mr-1 text-amber-400 animate-pulse" />
    ) : (
      <span className="mr-1">{emoji}</span>
    )}
    {tool.name}
    {tool.badge && (
      <span className="ml-2 text-xs bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded-full">
        {tool.badge}
      </span>
    )}
  </a>
);

export default function AnimationSoundTools({
  animationTools,
  soundTools,
  lipsyncTools,
  editingTools,
  isMobile = false,
  onItemClick,
}: AnimationSoundToolsProps) {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="animation" className="border-white/10">
        <AccordionTrigger className={isMobile ? "text-sm font-medium text-script-accent py-2" : "px-3 py-2 text-script-accent hover:text-script-accent/90 font-medium"}>
          <div className="flex items-center">
            <Film className="h-4 w-4 mr-2" /> Top Rated Video Generation Tools
          </div>
        </AccordionTrigger>
        <AccordionContent className={isMobile ? "" : "px-2"}>
          <div className={`flex flex-col space-y-${isMobile ? '3' : '1'} ${isMobile ? 'py-2' : ''}`}>
            {animationTools.map((tool, index) => (
              <ToolLink key={tool.name} tool={tool} isMobile={isMobile} onItemClick={onItemClick} index={index} emoji="🎬" />
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="sound" className="border-white/10">
        <AccordionTrigger className={isMobile ? "text-sm font-medium text-script-accent py-2" : "px-3 py-2 text-script-accent hover:text-script-accent/90 font-medium"}>
          <div className="flex items-center">
            <Music className="h-4 w-4 mr-2" /> Music & FX Generation
          </div>
        </AccordionTrigger>
        <AccordionContent className={isMobile ? "" : "px-2"}>
          <div className={`flex flex-col space-y-${isMobile ? '3' : '1'} ${isMobile ? 'py-2' : ''}`}>
            {soundTools.map((tool, index) => (
              <ToolLink key={tool.name} tool={tool} isMobile={isMobile} onItemClick={onItemClick} index={index} emoji="🎵" />
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="lipsync" className="border-white/10">
        <AccordionTrigger className={isMobile ? "text-sm font-medium text-script-accent py-2" : "px-3 py-2 text-script-accent hover:text-script-accent/90 font-medium"}>
          <div className="flex items-center">
            <Mic className="h-4 w-4 mr-2" /> Lipsync
          </div>
        </AccordionTrigger>
        <AccordionContent className={isMobile ? "" : "px-2"}>
          <div className={`flex flex-col space-y-${isMobile ? '3' : '1'} ${isMobile ? 'py-2' : ''}`}>
            {lipsyncTools.map((tool, index) => (
              <ToolLink key={tool.name} tool={tool} isMobile={isMobile} onItemClick={onItemClick} index={index} emoji="👄" />
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="editing" className="border-white/10">
        <AccordionTrigger className={isMobile ? "text-sm font-medium text-script-accent py-2" : "px-3 py-2 text-script-accent hover:text-script-accent/90 font-medium"}>
          <div className="flex items-center">
            <Edit className="h-4 w-4 mr-2" /> Editing Tools
          </div>
        </AccordionTrigger>
        <AccordionContent className={isMobile ? "" : "px-2"}>
          <div className={`flex flex-col space-y-${isMobile ? '3' : '1'} ${isMobile ? 'py-2' : ''}`}>
            {editingTools.map((tool, index) => (
              <ToolLink key={tool.name} tool={tool} isMobile={isMobile} onItemClick={onItemClick} index={index} emoji="✂️" />
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
