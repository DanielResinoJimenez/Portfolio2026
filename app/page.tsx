'use client';

import Scene from "@/components/canvas/Scene";  // Import the Scene component
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import TechStack from "@/components/sections/TechStack";

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

  const scrollToProjects = () => {

    const element = document.getElementById('projects');
    element?.scrollIntoView({ behavior: 'smooth' });

  };

  return (
    <div>
      <main className="relative min-h-screen w-ful bg-[#050505] overflow-hidden">

        {/* LAYER 1: The 3D background (behind all)*/}

        <div className="absolute inset-0 z-0">

          <Scene />

        </div>

        {/* LAYER 2: The content (centered) */}

        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 gap-6">

          {/* Hero section */}

          <section className="h-screen flex flex-col items-center justify-center text-center px-4">
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

              <button
                onClick={scrollToProjects}
                className="px-8 py-3 bg-neon-blue text-white font-bold rounded-sm hover:text-black hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(0,243,255,0.4)]">
                VER PROYECTOS
              </button>

              <button
                onClick={scrollToAbout}
                className="px-8 py-3 border border-white/20 text-white hover:bg-white/10 transition-all rounded-sm backdrop-blur-md"
              >
                SOBRE MÍ
              </button>

            </div>
          </section>

          {/* About me section */}
          <section id="about" className="h-screen flex flex-col items-center justify-center">
            <About />
          </section>

          {/* Tech Stack section */}
          <section id="techstack">
            <TechStack />
          </section>

          {/* Projects section */}
          <section id="projects">
            <Projects />
          </section>

        </div>

      </main>
      <footer className="py-10 border-t border-white/5 text-center">
        <p className="text-gray-500 text-sm font-mono">
    // DISEÑADO Y DESARROLLADO POR <span className="text-neon-blue">DANIEL RESINO</span> — 2026
        </p>
        <div className="flex justify-center gap-6 mt-4">
          <a href="https://github.com/DanielResinoJimenez" className="text-gray-400 hover:text-white transition-colors">GitHub</a>
          <a href="https://linkedin.com/in/daniel-resino-jiménez-090968331" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
          <a href="mailto:dresinojimenez@gmail.com" className="text-gray-400 hover:text-white transition-colors">Email</a>
        </div>
      </footer>
    </div>
  );
}
