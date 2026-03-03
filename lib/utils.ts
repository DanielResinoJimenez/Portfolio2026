// Tailwind CSS Configuration

import { ClassValue, clsx } from "clsx";    // Utility for construction class names
import { twMerge } from "tailwind-merge";    // Utility for resolve conflicts of Tailwind


/**
 * Function 'cn' (class name):
 * Link Tailwind classes for get a clean names removing 
 * duplicates and allowing conditional logic 
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

