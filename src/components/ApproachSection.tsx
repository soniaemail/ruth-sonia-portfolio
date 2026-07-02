import { approach } from "@/data/content";
import AnimatedSection from "./AnimatedSection";

export default function ApproachSection() {
  return (
    <section className="border-b border-border/60 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <AnimatedSection>
          <h2 className="text-3xl font-semibold sm:text-4xl">My approach</h2>
        </AnimatedSection>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {approach.map((step, index) => (
            <AnimatedSection key={step.phase} delay={index * 100}>
              <div className="h-full rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent-via/60">
                <span className="text-gradient text-sm font-semibold tracking-wide">
                  {step.phase}
                </span>
                <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm text-muted">{step.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
