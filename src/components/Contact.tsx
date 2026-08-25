import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

const EMAIL = "divyanshuganeshwani@proton.me";

const LINKS = [
  { label: "GitHub", href: "https://github.com/workbydivyanshu", icon: GithubIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/divyanshugns", icon: LinkedinIcon },
];

export default function Contact() {
  return (
    <section id="contact" className="section-pad relative py-28 sm:py-40">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-3xl border border-border bg-surface/60 px-8 py-16 text-center sm:px-16 sm:py-24"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(179,75,246,0.14),_transparent_60%)]" />

        <span className="relative font-mono text-xs tracking-[0.2em] text-ink-dimmer">§ 04 — CONTACT</span>
        <h2 className="relative mx-auto mt-4 max-w-2xl font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
          Let's build <span className="text-spectrum">something real.</span>
        </h2>
        <p className="relative mx-auto mt-5 max-w-md text-ink-dim">
          Open to full remote, entry-to-junior full-stack roles. Reply within a day — usually faster.
        </p>

        <div className="relative mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${EMAIL}`}
            className="focus-ring group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 font-mono text-sm font-medium text-bg transition-transform hover:-translate-y-0.5"
          >
            <Mail size={16} />
            {EMAIL}
          </a>
        </div>

        <div className="relative mt-8 flex items-center justify-center gap-6">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex items-center gap-1.5 font-mono text-sm text-ink-dim transition-colors hover:text-ink"
            >
              <l.icon size={15} />
              {l.label}
              <ArrowUpRight size={13} />
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
