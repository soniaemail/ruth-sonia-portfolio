import { experience } from "@/data/content";
import AnimatedSection from "./AnimatedSection";

export default function ExperienceSection() {
  return (
    <section id="experience" className="border-b border-border/60 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <AnimatedSection>
          <h2 className="text-3xl font-semibold sm:text-4xl">
            My work experience
          </h2>
        </AnimatedSection>

        <div className="mt-12 space-y-6">
          {experience.map((job, index) => (
            <AnimatedSection key={job.company} delay={index * 100}>
              <article className="grid gap-4 rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent-via/60 sm:grid-cols-[1fr_2fr]">
                <div>
                  <h3 className="text-lg font-semibold">{job.company}</h3>
                  <p className="text-gradient text-sm font-medium">
                    {job.role}
                  </p>
                  <p className="mt-2 text-sm text-muted">{job.period}</p>
                  <p className="text-sm text-muted">{job.location}</p>
                </div>
                <ul className="space-y-2 text-sm text-muted">
                  {job.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-via" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
