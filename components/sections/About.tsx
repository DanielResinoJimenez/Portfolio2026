import { cn } from '@/lib/utils';
import { motion } from 'framer-motion'

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

                    <h3 className="text-3xl font-bold text-neon-blue mb-6">SISTEMA // SOBRE_MÍ</h3>

                    <div className="grid md:grid-cols-2 gap-8 text-gray-300">

                        <p className="leading-relaxed">
                            Como especialista en <span className="text-white font-semibold">AI & Big Data</span>, me dedico a construir puentes entre el código puro y la inteligencia aplicada. Mi enfoque no es solo programar, sino optimizar cómo los sistemas procesan la realidad.
                        </p>

                        <div className="space-y-4">

                            <div className="flex justify-between border-b border-white/5 pb-2">

                                <span className="text-neon-blue font-mono">UBICACIÓN:</span>
                                <span>España</span>

                            </div>

                            <div className="flex justify-between border-b border-white/5 pb-2">

                                <span className="text-neon-blue font-mono">ESTADO:</span>
                                <span className="text-green-400">DISPONIBLE</span>

                            </div>

                        </div>

                    </div>

                </div>

            </section>
        </motion.div>
    );
}