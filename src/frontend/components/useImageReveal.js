// hooks/useImageReveal.js
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useImageReveal(selector) {
    const scrollTriggersRef = useRef([]); // Use ref to persist scroll triggers across renders

    useEffect(() => {
        const revealContainers = document.querySelectorAll(selector);

        // Ensure to avoid setting up multiple ScrollTriggers unnecessarily
        if (scrollTriggersRef.current.length === 0) {
            revealContainers.forEach((container) => {
                const trigger = ScrollTrigger.create({
                    trigger: container,
                    start: window.innerWidth <= 768 ? 'top bottom' : 'top 80%',
                    toggleClass: { targets: container, className: 'active' },
                    once: true, // Trigger only once
                });

                // Store the ScrollTrigger instance in ref for cleanup
                scrollTriggersRef.current.push(trigger);
            });

            // Refresh ScrollTrigger calculations after initialization
            ScrollTrigger.refresh();
        }

        // Cleanup function to kill all ScrollTrigger instances
        return () => {
            scrollTriggersRef.current.forEach((trigger) => {
                trigger.kill(); // Kill each individual ScrollTrigger instance
            });
            scrollTriggersRef.current = []; // Clear the array to prevent memory leaks
        };
    }, [selector]); // This will trigger when the selector prop changes
}
