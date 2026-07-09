// Browser environment checks shared by nav, splash, and any smooth-scroll
// callers. Safari's smooth scrolling stutters with react-scroll, so it gets
// instant jumps, as do users who prefer reduced motion.
export const isSafari: boolean =
    typeof window !== "undefined" &&
    /Safari/.test(window.navigator.userAgent) &&
    !/Chrome/.test(window.navigator.userAgent);

export const prefersReducedMotion: boolean =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const smoothScrollEnabled: boolean = !isSafari && !prefersReducedMotion;
