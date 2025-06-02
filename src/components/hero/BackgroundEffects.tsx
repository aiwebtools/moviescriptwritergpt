
import { useState, useEffect } from 'react';

interface BackgroundEffectsProps {
  cursorPosition: { x: number; y: number };
  isFacebookBrowser: boolean;
  isMobile: boolean;
  loaded: boolean;
}

export const BackgroundEffects = ({ 
  cursorPosition, 
  isFacebookBrowser, 
  isMobile,
  loaded 
}: BackgroundEffectsProps) => {
  const parallaxStyle = {
    transform: isFacebookBrowser || isMobile ? 'none' : `translate(${cursorPosition.x * -20}px, ${cursorPosition.y * -20}px)`
  };
  
  return (
    <>
      {/* Divine Moving Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-script-bg to-indigo-900/40 opacity-95 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-pink-900/20 via-transparent to-purple-900/30 opacity-80 z-0 animate-pulse-subtle"></div>
      
      {!isFacebookBrowser && !isMobile && (
        <>
          {/* Divine Radial Gradients */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(147,51,234,0.25),_transparent_800px)] opacity-90 z-0 animate-pulse-subtle"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,_rgba(236,72,153,0.2),_transparent_600px)] opacity-85 z-0" style={{animationDelay: '2s'}}></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(99,102,241,0.15),_transparent_900px)] opacity-80 z-0 animate-pulse-subtle" style={{animationDelay: '4s'}}></div>
          
          {/* Divine Paper Texture */}
          <div className="absolute inset-0 bg-paper-texture opacity-8 z-0"></div>
          
          {/* Divine Grid Pattern */}
          <div className="absolute inset-0 z-0 opacity-30">
            <div className="absolute h-full w-full bg-[radial-gradient(rgba(147,51,234,0.15)_1px,transparent_1px)] bg-[size:40px_40px] animate-pulse-subtle"></div>
            <div className="absolute h-full w-full bg-[radial-gradient(rgba(236,72,153,0.1)_1px,transparent_1px)] bg-[size:60px_60px] animate-pulse-subtle" style={{animationDelay: '3s'}}></div>
          </div>
          
          {/* Divine Floating Orbs */}
          <div 
            className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-purple-500/10 via-pink-500/15 to-indigo-500/10 blur-[120px] animate-float z-0"
            style={parallaxStyle}
          ></div>
          <div 
            className="absolute bottom-1/3 left-1/4 w-60 h-60 rounded-full bg-gradient-to-r from-blue-500/8 via-purple-500/12 to-pink-500/8 blur-[100px] animate-float z-0"
            style={{
              transform: isFacebookBrowser || isMobile ? 'none' : `translate(${cursorPosition.x * 30}px, ${cursorPosition.y * 30}px)`,
              animationDelay: '2s'
            }}
          ></div>
          <div 
            className="absolute top-1/2 left-1/2 w-40 h-40 rounded-full bg-gradient-to-r from-indigo-500/6 via-purple-500/10 to-cyan-500/8 blur-[80px] animate-float z-0"
            style={{
              transform: isFacebookBrowser || isMobile ? 'none' : `translate(${cursorPosition.x * -40}px, ${cursorPosition.y * -25}px)`,
              animationDelay: '4s'
            }}
          ></div>
          
          {/* Divine Particles */}
          <div className="absolute inset-0 overflow-hidden z-0">
            <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-purple-400/40 rounded-full animate-float blur-sm"></div>
            <div className="absolute top-3/4 right-1/3 w-2 h-2 bg-pink-400/50 rounded-full animate-float blur-sm" style={{animationDelay: '2s'}}></div>
            <div className="absolute top-1/2 left-3/4 w-2.5 h-2.5 bg-blue-400/40 rounded-full animate-float blur-sm" style={{animationDelay: '4s'}}></div>
            <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-indigo-300/40 rounded-full animate-float blur-sm" style={{animationDelay: '3s'}}></div>
            <div className="absolute top-1/6 right-1/4 w-1.5 h-1.5 bg-cyan-400/45 rounded-full animate-float blur-sm" style={{animationDelay: '1s'}}></div>
            <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-violet-400/40 rounded-full animate-float blur-sm" style={{animationDelay: '5s'}}></div>
          </div>
          
          {/* Divine Shimmer Lines */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-purple-400/20 to-transparent animate-pulse-subtle"></div>
            <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-pink-400/15 to-transparent animate-pulse-subtle" style={{animationDelay: '2s'}}></div>
            <div className="absolute top-0 left-2/3 w-px h-full bg-gradient-to-b from-transparent via-indigo-400/18 to-transparent animate-pulse-subtle" style={{animationDelay: '4s'}}></div>
          </div>
        </>
      )}
      
      {(isFacebookBrowser || isMobile) && (
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-script-bg to-indigo-900/30 z-0"></div>
      )}
    </>
  );
}
