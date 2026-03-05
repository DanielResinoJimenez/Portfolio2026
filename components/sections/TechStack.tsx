'use client';
import { motion } from 'framer-motion';
import { Database, Code2, Terminal, Cpu, Globe, Layers, Coffee } from 'lucide-react';

const skills = [
    { name: 'Python', category: 'Data & Backend', icon: <Terminal className="w-5 h-5" /> },
    { name: 'Java', category: 'Backend & Enterprise', icon: <Coffee className="w-5 h-5" /> },
    { name: 'TypeScript', category: 'Frontend', icon: <Code2 className="w-5 h-5" /> },
    { name: 'React / Next.js', category: 'Frontend', icon: <Globe className="w-5 h-5" /> },
    { name: 'SQL & NoSQL', category: 'Big Data', icon: <Database className="w-5 h-5" /> },
    { name: 'Machine Learning', category: 'AI', icon: <Cpu className="w-5 h-5" /> },
    { name: 'Docker / Cloud', category: 'Tools', icon: <Layers className="w-5 h-5" /> },
];

export default function TechStack() {
    return (
        <section className="py-20 px-4 max-w-6xl mx-auto">
            <div className="flex flex-col items-center mb-12">
                <h3 className="text-3xl font-bold text-white mb-2 tracking-tighter">STACK_TECNOLÓGICO</h3>
                <div className="h-1 w-20 bg-neon-blue rounded-full shadow-[0_0_10px_#00f3ff]" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {skills.map((skill, index) => (
                    <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -5, borderColor: 'rgba(0, 243, 255, 0.5)' }}
                        className="flex flex-col items-center p-6 bg-dark-card/50 border border-white/5 rounded-xl backdrop-blur-sm transition-all group"
                    >
                        <div className="text-gray-400 group-hover:text-neon-blue transition-colors mb-3">
                            {skill.icon}
                        </div>
                        <span className="text-white font-medium text-sm mb-1">{skill.name}</span>
                        <span className="text-[10px] text-gray-500 uppercase tracking-widest font-mono">
                            {skill.category}
                        </span>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}