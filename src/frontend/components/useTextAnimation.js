import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useTextAnimation(animationConfig, dependencies = []) {
    const ref = useRef(null);

    useLayoutEffect(() => {
        if (ref.current) {
            gsap.fromTo(
                ref.current,
                animationConfig.from,
                {
                    ...animationConfig.to,
                    scrollTrigger: {
                        trigger: ref.current,
                        start: "top bottom", // Adjust based on when you want the animation to start
                        end: "bottom 20%", // Adjust end position
                        toggleActions: "play none none reverse", // Controls play, pause, etc.
                    },
                }
            );
        }
    }, [location.pathname]);

    return ref;
}
