import { contact, profile } from "@/data/content";
import AnimatedSection from "./AnimatedSection";

export default function ContactSection() {
  return (
    <section id="contact" className="glow-grid border-b border-border/60 py-28">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <AnimatedSection>
          <h2 className="text-3xl font-semibold sm:text-4xl">
            {contact.title}
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <p className="mt-4 text-muted">{contact.description}</p>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <a
            href={`mailto:${profile.email}`}
            className="mt-8 inline-block rounded-full bg-gradient-to-r from-accent-from via-accent-via to-accent-to px-8 py-3 text-sm font-medium text-background transition-transform hover:scale-[1.03]"
          >
            {contact.ctaLabel}
          </a>
        </AnimatedSection>

        <AnimatedSection delay={280}>
          <p className="mt-6 text-sm text-muted">{profile.email}</p>
        </AnimatedSection>
      </div>
    </section>
  );
}
