import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "../data/projects";
import ProjectVisual from "./ProjectVisual";
import { GithubIcon } from "./icons";

export default function ProjectCard({ project, i }: { project: Project; i: number }) {
  const featured = project.featured;

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: (i % 2) * 0.08 }}
      className={`group relative overflow-hidden rounded-2xl border border-border bg-surface/60 transition-colors hover:border-border-hover ${
        featured ? "md:col-span-2" : ""
      }`}
      style={{ ["--accent" as string]: project.accent }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(500px circle at 20% 0%, ${project.accentSoft}, transparent 60%)`,
        }}
      />

      <div className={`relative grid gap-0 ${featured ? "lg:grid-cols-[1.1fr_0.9fr]" : ""}`}>
        <div className="flex flex-col justify-between p-7 sm:p-9">
          <div>
            <div className="mb-5 flex items-center justify-between">
              <span className="font-mono text-xs text-ink-dimmer">{project.index}</span>
              <div className="flex items-center gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.title} on GitHub`}
                  className="focus-ring text-ink-dimmer transition-colors hover:text-ink"
                >
                  <GithubIcon size={17} />
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.title} live site`}
                    className="focus-ring text-ink-dimmer transition-colors hover:text-ink"
                  >
                    <ArrowUpRight size={17} />
                  </a>
                )}
              </div>
            </div>

            <h3
              className="font-display text-2xl font-semibold tracking-tight sm:text-3xl"
              style={{ color: "var(--accent)" }}
            >
              {project.title}
            </h3>
            <p className="mt-1 font-mono text-sm text-ink-dim">{project.tagline}</p>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-dim">{project.description}</p>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <span
                key={s}
                className="rounded-md border border-border-soft bg-bg-soft px-2.5 py-1 font-mono text-[11px] text-ink-dim"
              >
                {s}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-5">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex items-center gap-1.5 font-mono text-[13px] text-ink transition-opacity hover:opacity-70"
            >
              <GithubIcon size={14} /> source
            </a>
            {project.live ? (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="focus-ring inline-flex items-center gap-1.5 font-mono text-[13px] transition-opacity hover:opacity-70"
                style={{ color: "var(--accent)" }}
              >
                live site <ArrowUpRight size={14} />
              </a>
            ) : (
              <span className="font-mono text-[13px] text-ink-dimmer">no live demo — build issue upstream</span>
            )}
          </div>
        </div>

        <ProjectVisual project={project} featured={!!featured} />
      </div>
    </motion.article>
  );
}
