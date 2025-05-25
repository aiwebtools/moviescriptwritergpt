
import { useState, useEffect, useRef } from 'react';

interface VideoPreviewProps {
  loaded: boolean;
}

export const VideoPreview = ({ loaded }: VideoPreviewProps) => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Preload YouTube thumbnail for faster initial display
    const preloadLink = document.createElement('link');
    preloadLink.rel = 'preload';
    preloadLink.as = 'image';
    preloadLink.href = 'https://i.ytimg.com/vi/4e3Rkurt3-c/maxresdefault.jpg';
    document.head.appendChild(preloadLink);

    // Set up intersection observer for lazy loading
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (document.head.contains(preloadLink)) {
        document.head.removeChild(preloadLink);
      }
      observer.disconnect();
    };
  }, []);
  
  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  // Detect device capabilities for optimal video quality
  const getOptimalVideoParams = () => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const isSlowConnection = navigator.connection && (navigator.connection as any).effectiveType === 'slow-2g';
    
    let quality = 'hd1080';
    if (isMobile || isSlowConnection) {
      quality = 'hd720';
    }
    
    return {
      quality,
      autoplay: isMobile ? 0 : 1, // Disable autoplay on mobile to save bandwidth
      start: 0
    };
  };

  const videoParams = getOptimalVideoParams();
  
  return (
    <div 
      ref={containerRef}
      className={`mt-6 sm:mt-8 md:mt-10 w-full max-w-4xl transition-all delay-300 duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
    >
      <div className="relative w-full rounded-xl overflow-hidden shadow-glow border border-white/10 aspect-video transform hover:scale-[1.01] transition-all duration-300">
        {!videoLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-script-bg/80 z-20">
            <div className="animate-pulse flex flex-col items-center">
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full border-2 border-script-accent border-t-transparent animate-spin mb-3"></div>
              <span className="text-script-accent text-xs sm:text-sm">Loading video...</span>
            </div>
          </div>
        )}
        
        {/* Thumbnail for faster initial load */}
        {!videoLoaded && (
          <div 
            className="absolute inset-0 bg-cover bg-center z-10"
            style={{
              backgroundImage: 'url(https://i.ytimg.com/vi/4e3Rkurt3-c/maxresdefault.jpg)'
            }}
          />
        )}
        
        {isVisible && (
          <iframe 
            width="100%" 
            height="100%" 
            src={`https://www.youtube.com/embed/4e3Rkurt3-c?rel=0&autoplay=${videoParams.autoplay}&playsinline=1&enablejsapi=1&modestbranding=1&origin=${window.location.origin}&vq=${videoParams.quality}&playlist=4e3Rkurt3-c&controls=1&start=${videoParams.start}&preload=metadata&iv_load_policy=3&disablekb=1&fs=1&cc_load_policy=0&cc_lang_pref=en&hl=en`}
            title="ScriptWriter AI Demo Video"
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen; web-share" 
            allowFullScreen
            loading="lazy"
            className="z-30"
            onLoad={handleVideoLoad}
            style={{ 
              border: 'none',
              outline: 'none',
              background: 'transparent'
            }}
          />
        )}
      </div>
    </div>
  );
}
