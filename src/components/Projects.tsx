import { motion } from "framer-motion";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="work" className="section-pad relative py-28 sm:py-36">
      <SectionHeading index="§ 01" title="Selected work" lede="Six shipped projects. No fillers, no fabricated case studies." />

      <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
        {projects.map((p, i) => (
          <ProjectCard key={p.slug} project={p} i={i} />
        ))}
      </div>
    </section>
  );
}

export function SectionHeading({
  index,
  title,
  lede,
}: {
  index: string;
  title: string;
  lede?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      <span className="font-mono text-xs tracking-[0.2em] text-ink-dimmer">{index}</span>
      <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      {lede && <p className="mt-3 max-w-xl text-ink-dim">{lede}</p>}
    </motion.div>
  );
}
