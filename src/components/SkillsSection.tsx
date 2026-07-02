import { skills } from "@/data/content";
import AnimatedSection from "./AnimatedSection";

export default function SkillsSection() {
  return (
    <section id="skills" className="border-b border-border/60 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <AnimatedSection>
          <h2 className="text-3xl font-semibold sm:text-4xl">
            My Skills &amp; Technologies
          </h2>
        </AnimatedSection>

        <div className="mt-10 flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <AnimatedSection key={skill} delay={index * 40}>
              <span className="inline-flex items-center rounded-xl border border-border bg-surface px-5 py-3 text-sm text-foreground transition-colors hover:border-accent-via/60 hover:bg-surface-hover">
                {skill}
              </span>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
