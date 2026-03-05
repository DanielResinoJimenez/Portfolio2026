'use client';

import { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import { ExternalLink, Star, Folder } from 'lucide-react';

// Define data wanted from each repository

interface Repo {
    id: number;
    name: string;
    description: string;
    html_url: string;
    stargazers_count: number;
    language: string;
}

export default function Projects() {

    const [repos, setRepos] = useState<Repo[]>([]);

    useEffect(() => {

        fetch('https://api.github.com/users/DanielResinoJimenez/repos?sort=updated&per_page=6')
            .then(res => res.json())
            .then(data => {
                // Filter to exclude forks and keep only those with a description
                const filteredData = data.filter((repo: any) => !repo.fork);
                setRepos(filteredData);
            });

    }, []);

    return (
        <section id="projects" className="py-20 px-4 max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-10 flex items-center gap-3">
                <span className="text-neon-blue font-mono">02.</span> PROYECTOS_RECIENTES
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {repos.map((repo, index) => (
                    <motion.a
                        key={repo.id}
                        href={repo.html_url}
                        target="_blank"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative p-6 bg-dark-card border border-white/10 rounded-xl hover:border-neon-blue/50 transition-all duration-500 overflow-hidden"
                    >
                        {/* Light effect with mouse hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                        <div className="relative z-10">
                            <div className="flex justify-between items-start mb-4">
                                <Folder className="text-neon-blue w-8 h-8" />
                                <ExternalLink className="text-gray-500 group-hover:text-white transition-colors w-5 h-5" />
                            </div>

                            <h4 className="text-xl font-bold text-white group-hover:text-neon-blue transition-colors mb-2 uppercase tracking-tight">
                                {repo.name.replace(/-/g, ' ')}
                            </h4>

                            <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                                {repo.description || "Proyecto tecnológico desarrollado con arquitectura moderna. Sin descripción disponible."}
                            </p>

                            <div className="flex items-center gap-4 text-xs font-mono text-gray-500">
                                {repo.language && (
                                    <span className="flex items-center gap-1">
                                        <span className="w-2 h-2 rounded-full bg-neon-blue" />
                                        {repo.language}
                                    </span>
                                )}
                                <span className="flex items-center gap-1">
                                    <Star className="w-3 h-3" /> {repo.stargazers_count}
                                </span>
                            </div>
                        </div>
                    </motion.a>
                ))}
            </div>
        </section>
    );

};