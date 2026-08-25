import { motion } from "framer-motion";
import { MapPin, GraduationCap } from "lucide-react";
import { SectionHeading } from "./Projects";

const CREDENTIALS = [
  {
    title: "The Odin Project",
    detail: "Full Stack Web Development — JavaScript Track. Completed.",
  },
  {
    title: "Full Stack Open",
    detail:
      "University of Helsinki — open online course. React, Node.js, GraphQL, TypeScript, testing, CI/CD, containers.",
  },
];

export default function About() {
  return (
    <section id="about" className="section-pad relative py-28 sm:py-36">
      <SectionHeading index="§ 03" title="How I got here" />

      <div className="mt-14 grid grid-cols-1 gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="space-y-5 text-lg leading-relaxed text-ink-dim"
        >
          <p>
            No CS degree, no prior dev job — I taught myself by working
            through structured curricula and then getting out of the tutorial
            and building things that had to actually work: a music player
            that reads your filesystem, a chat app with real sockets, an
            Android app with a foreground service.
          </p>
          <p>
            Each project in the{" "}
            <a href="#work" className="text-ink underline decoration-border underline-offset-4 hover:decoration-ink">
              work section
            </a>{" "}
            is real, deployed, and something I'd walk you through line by
            line. That's the whole pitch: no inflated metrics, no client
            logos that don't exist — just code that ships.
          </p>
          <div className="flex items-center gap-2 pt-2 font-mono text-sm text-ink-dimmer">
            <MapPin size={15} />
            Indore, Madhya Pradesh, India — open to full remote
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl border border-border bg-surface/60 p-7"
        >
          <div className="mb-5 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-ink-dimmer">
            <GraduationCap size={14} />
            training log
          </div>
          <ol className="space-y-5">
            {CREDENTIALS.map((c, i) => (
              <li key={c.title} className="flex gap-4">
                <span className="mt-1 font-mono text-xs text-cyan">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="font-display font-medium text-ink">{c.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-ink-dim">{c.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </motion.div>
      </div>
    </section>
  );
}
