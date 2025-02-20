import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useLocation } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

export function useImageReveal(selector) {
    const scrollTriggersRef = useRef([]);
    const location = useLocation();

    useEffect(() => {
        const revealContainers = document.querySelectorAll(selector);
        
        // Ensure elements exist before initializing GSAP
        if (revealContainers.length === 0) return;

        // Clear any existing ScrollTriggers before creating new ones
        scrollTriggersRef.current.forEach(trigger => trigger.kill());
        scrollTriggersRef.current = [];

        revealContainers.forEach(container => {
            const trigger = ScrollTrigger.create({
                trigger: container,
                start: window.innerWidth <= 768 ? 'top 95%' : 'top 80%',
                toggleClass: { targets: container, className: 'active' },
                // once: true,
                toggleActions: "play none none none", // Ensures restart on scroll in both directions
                scrub: true, // Smooth animation synced with scroll
            });

            scrollTriggersRef.current.push(trigger);
        });

        // Refresh GSAP to account for new elements
        ScrollTrigger.refresh();

        return () => {
            scrollTriggersRef.current.forEach(trigger => trigger.kill());
            scrollTriggersRef.current = [];
        };
    }, [selector, location.pathname]);

    return null;
}
