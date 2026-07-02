import Image from "next/image";
import { hero, profile } from "@/data/content";
import AnimatedSection from "./AnimatedSection";

export default function Hero() {
  return (
    <section
      id="top"
      className="glow-grid relative flex min-h-[92vh] items-center overflow-hidden border-b border-border/60"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 py-28 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <AnimatedSection>
            <p className="mb-6 text-sm uppercase tracking-[0.3em] text-muted">
              {profile.role}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={80}>
            <h1 className="max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
              <span className="text-gradient">{hero.headline}</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={160}>
            <p className="mt-6 max-w-2xl text-lg text-muted">
              {hero.subheadline}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={220}>
            <div className="mt-6 flex flex-wrap gap-3">
              {hero.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border bg-surface px-4 py-1.5 text-xs tracking-wide text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-gradient-to-r from-accent-from via-accent-via to-accent-to px-6 py-3 text-sm font-medium text-background transition-transform hover:scale-[1.03]"
              >
                Show my work
              </a>
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-accent-via/60 hover:bg-surface"
              >
                View Resume
              </a>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={380}>
            <ul className="mt-16 flex max-w-3xl flex-col gap-2 text-sm text-muted sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-2">
              {hero.notes.map((note) => (
                <li key={note} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-via" />
                  {note}
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={120} className="flex justify-center lg:justify-end">
          <div className="relative h-56 w-56 shrink-0 rounded-full bg-gradient-to-br from-accent-from via-accent-via to-accent-to p-1 sm:h-72 sm:w-72">
            <div className="h-full w-full overflow-hidden rounded-full bg-background">
              <Image
                src={profile.photoUrl}
                alt={profile.name}
                width={400}
                height={400}
                priority
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
