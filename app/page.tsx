'use client';

import Scene from "@/components/canvas/Scene";  // Import the Scene component
import About from "@/components/sections/About";

/**
 * Home component
 * It is organized by "layers" using Tailwind's Z-index
 */

export default function Home() {

  // Function to do smooth scroll

  const scrollToAbout = () => {

    const element = document.getElementById('about');
    element?.scrollIntoView({ behavior: 'smooth' });

  };

  return (
    <main className="relative min-h-screen w-ful bg-[#050505] overflow-hidden">

      {/* LAYER 1: The 3D background (behind all)*/}

      <div className="absolute inset-0 z-0">

        <Scene />

      </div>

      {/* LAYER 2: The content (centered) */}

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 gap-6">

        <span className="text-neon-blue text-xs tracking-[0.3em] uppercase mb-4 opacity-80 animate-pulse">
          System Status: Online
        </span>

        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white">
          PORTFOLIO <span className="text-neon-blue drop-shadow-[0_0_15px_rgba(0,243,255,0.5)]">2026</span>
        </h1>

        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
          Daniel <span className="text-neon-blue drop-shadow-[0_0_15px_rgba(0,243,255,0.5)]">Resino</span> Jiménez
        </h2>

        <h3 className="mt-2 text-xl md:text-2xl font-light text-gray-300 tracking-wide">
          Desarrollador Fullstack
          <span className="font-bold text-neon-blue drop-shadow-[0_0_15px_rgba(0,243,255,0.5)] ml-2">
            Especializado en IA y Big Data
          </span>
        </h3>

        <p className="mt-6 text-gray-400 max-w-2xl text-base md:text-lg leading-relaxed font-light">
          Usando la tecnología para dar vida a las ideas.
        </p>

        <div className="flex gap-4 mt-10">

          <button className="px-8 py-3 bg-neon-blue text-white font-bold rounded-sm hover:text-black hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(0,243,255,0.4)]">
            VER PROYECTOS
          </button>

          <button
            onClick={scrollToAbout}
            className="px-8 py-3 border border-white/20 text-white hover:bg-white/10 transition-all rounded-sm backdrop-blur-md"
          >
            SOBRE MÍ
          </button>

        </div>

        {/* About me section */}
        <About />

      </div>

    </main>
  );
}
