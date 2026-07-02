import { projects } from "@/data/content";
import AnimatedSection from "./AnimatedSection";

export default function ProjectsSection() {
  return (
    <section id="projects" className="border-b border-border/60 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <AnimatedSection>
          <h2 className="text-3xl font-semibold sm:text-4xl">
            A small selection of recent projects
          </h2>
        </AnimatedSection>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {projects.map((project, index) => (
            <AnimatedSection key={project.title} delay={index * 80}>
              <article className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent-via/60 hover:bg-surface-hover">
                <span className="text-xs uppercase tracking-wide text-accent-via">
                  {project.tag}
                </span>
                <h3 className="mt-3 text-xl font-semibold">
                  {project.title}
                </h3>
                <p className="mt-3 flex-1 text-sm text-muted">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border px-3 py-1 text-xs text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-medium text-foreground transition-colors group-hover:text-accent-to"
                >
                  Live
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
