'use client';

import { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import { ExternalLink, Star, Folder } from 'lucide-react';

// Define data wanted from each repository

interface Repo {
    id: number;
    name: string;
    full_name: string;
    description: string;
    html_url: string;
    stargazers_count: number;
    language: string;
}

export default function Projects() {

    const [repos, setRepos] = useState<Repo[]>([]);

    useEffect(() => {

        fetch('https://api.github.com/users/DanielResinoJimenez/repos?sort=updated&per_page=9')
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
                PROYECTOS_RECIENTES
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {repos.map((repo, index) => (
                    <motion.a
                        key={repo.id}
                        href={repo.html_url}
                        target="_blank"
                        className="group relative bg-dark-card border border-white/10 rounded-xl overflow-hidden transition-all duration-500 hover:border-neon-blue/50"
                    >
                        {/* Image Container */}
                        <div className="relative h-48 w-full overflow-hidden bg-gray-900">
                            <img
                                src={`https://raw.githubusercontent.com/DanielResinoJimenez/${repo.name}/main/assets/images/preview.png`}
                                alt={repo.name}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src = `https://opengraph.githubassets.com/1/${repo.full_name}`;
                                }}
                            />

                            {/* Color Overlay to see text better*/}
                            <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-transparent to-transparent" />

                            {/* Badge of floating language */}
                            {repo.language && (
                                <span className="absolute top-3 right-3 px-2 py-1 text-[10px] font-mono bg-black/60 border border-neon-blue/30 text-neon-blue rounded-md backdrop-blur-md">
                                    {repo.language.toUpperCase()}
                                </span>
                            )}
                        </div>

                        {/* Card Content */}
                        <div className="p-6 relative z-10">
                            <h4 className="text-xl font-bold text-white group-hover:text-neon-blue transition-colors mb-2 uppercase tracking-tight">
                                {repo.name.replace(/-/g, ' ')}
                            </h4>
                            <p className="text-gray-400 text-sm line-clamp-2">
                                {repo.description || "Explora este repositorio para ver los detalles del desarrollo."}
                            </p>
                        </div>
                    </motion.a>
                ))}
            </div>
        </section>
    );

};