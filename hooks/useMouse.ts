'use client';
import { useState, useEffect } from 'react';

export const useMouse = () => {

    const [mouse, setMouse] = useState({ x: 0, y: 0 });

    useEffect(() => {

        const handleMouseMove = (e: MouseEvent) => {

            // Normalize the value: 0 is the center, -1 left/up, 1 right/down

            const x = (e.clientX / window.innerWidth) * 2 - 1;
            const y = -(e.clientY / window.innerHeight) * 2 + 1;

            setMouse({ x, y });

        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => window.removeEventListener('mousemove', handleMouseMove)

    }, []);

    return mouse;

};