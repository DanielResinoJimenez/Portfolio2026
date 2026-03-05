import { cn } from '@/lib/utils';
import { motion } from 'framer-motion'
import { Globe, Cpu } from 'lucide-react'

export default function About() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }} // Starts small and invisible
            whileInView={{ opacity: 1, scale: 1 }} // Get bigger and appears when scroll
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }} // Solo ocurre una vez
            className="max-w-4xl w-full bg-white/5 border border-white/10 backdrop-blur-xl p-8 md:p-12 rounded-2xl shadow-2xl"
        >
            <section id='about' className="py-20 flex flex-col items-center justify-center">

                {/* Card with glass effect */}

                <div className="max-w-4xl w-full bg-white/5 border border-white/10 backdrop-blur-xl p-8 md:p-12 rounded-2xl shadow-2xl">
                    <h3 className="text-3xl font-bold text-neon-blue mb-8 tracking-tighter">SISTEMA // SOBRE_MÍ</h3>

                    <div className="grid md:grid-cols-[1.5fr_1fr] gap-12 items-start">
                        <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
                            <p>
                                Mi trayectoria comenzó en el
                                <span className="text-white font-semibold"> Desarrollo de Aplicaciones Web (DAW)</span>,
                                donde aprendí a construir interfaces sólidas y funcionales. Sin embargo, mi curiosidad por la eficiencia de los sistemas me llevó a especializarme en
                                <span className="text-neon-blue"> Inteligencia Artificial y Big Data</span>.
                            </p>

                            <p>
                                Me apasiona la intersección entre el código y los datos: no solo desarrollo aplicaciones, sino que busco
                                <span className="text-white"> extraer valor de la información </span>
                                para crear soluciones inteligentes que se anticipen a las necesidades del usuario.
                            </p>

                            <p className="text-sm border-l-2 border-neon-blue/30 pl-4 italic text-gray-400">
                                Actualmente, me enfoco en desarrollar arquitecturas escalables y modelos de ML que transforman grandes volúmenes de datos en herramientas de decisión crítica.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4">

                            <div className="bg-white/5 border border-white/10 p-4 rounded-xl flex items-center gap-4 hover:bg-white/10 transition-all group">

                                <div className="p-2 bg-neon-blue/10 rounded-lg">
                                    <Globe className="w-5 h-5 text-neon-blue" />
                                </div>

                                <div>
                                    <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-mono">Ubicación</p>
                                    <p className="text-white font-medium">España</p>
                                </div>

                            </div>

                            <div className="bg-white/5 border border-white/10 p-4 rounded-xl flex items-center gap-4 hover:bg-white/10 transition-all group">

                                <div className="p-2 bg-green-400/10 rounded-lg">
                                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_#4ade80]" />
                                </div>

                                <div>
                                    <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-mono">Estado</p>
                                    <p className="text-green-400 font-bold tracking-tight">DISPONIBLE_V1.0</p>
                                </div>

                            </div>

                            <div className="bg-white/5 border border-white/10 p-4 rounded-xl flex items-center gap-4 hover:bg-white/10 transition-all group">

                                <div className="p-2 bg-purple-500/10 rounded-lg">
                                    <Cpu className="w-5 h-5 text-purple-400" />
                                </div>

                                <div>
                                    <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-mono">Core</p>
                                    <p className="text-white font-medium italic">IA & Big Data</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </motion.div>
    );
}