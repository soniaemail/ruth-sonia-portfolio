"use client";

import { useEffect, useRef, useState } from "react";

type AnimatedSectionProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  id?: string;
};

// Progressive enhancement: content is fully visible by default (even before
// the JS bundle loads). Once hydrated, sections still below the viewport get
// hidden and fade in the first time they enter view. Sections already in view
// are never hidden, so the page never shows up blank.
export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  id,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<"initial" | "hidden" | "visible">(
    "initial"
  );

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Already (nearly) in view at hydration time: keep it visible, no animation.
    if (node.getBoundingClientRect().top < window.innerHeight * 0.9) {
      setState("visible");
      return;
    }

    setState("hidden");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("visible");
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const revealClass =
    state === "hidden" ? "reveal" : state === "visible" ? "reveal reveal-visible" : "";

  return (
    <div
      id={id}
      ref={ref}
      className={`${revealClass} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
