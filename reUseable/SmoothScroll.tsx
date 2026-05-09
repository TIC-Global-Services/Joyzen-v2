"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const rafRef = useRef<number>(0);

  useEffect(() => {
    // Reset scroll position on mount to prevent stuck states
    window.scrollTo(0, 0);

    // Force-reset body overflow — GSAP ScrollTrigger sometimes leaves it hidden
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    } as any);

    // Prevent Lenis from stopping when GSAP ScrollTrigger sets overflow hidden
    const observer = new MutationObserver(() => {
      if (document.body.style.overflow === "hidden") {
        document.body.style.overflow = "";
      }
      if (document.documentElement.style.overflow === "hidden") {
        document.documentElement.style.overflow = "";
      }
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["style"],
      subtree: true,
    });

    // Recalculate dimensions on resize to prevent layout issues
    const handleResize = () => lenis.resize();
    window.addEventListener("resize", handleResize);

    function raf(time: number) {
      lenis.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    }

    rafRef.current = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafRef.current);
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
