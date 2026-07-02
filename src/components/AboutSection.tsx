import { about, profile } from "@/data/content";
import AnimatedSection from "./AnimatedSection";
import CopyEmailButton from "./CopyEmailButton";

export default function AboutSection() {
  return (
    <section id="about" className="border-b border-border/60 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <AnimatedSection>
          <h2 className="max-w-3xl text-3xl font-semibold sm:text-4xl">
            {about.title}
          </h2>
        </AnimatedSection>

        <div className="mt-8 max-w-2xl space-y-5 text-muted">
          {about.paragraphs.map((paragraph, index) => (
            <AnimatedSection key={paragraph} delay={index * 100}>
              <p>{paragraph}</p>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={200}>
          <div className="mt-10">
            <CopyEmailButton email={profile.email} label={about.ctaLabel} />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
