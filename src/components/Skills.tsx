import { motion } from "framer-motion";
import { SectionHeading } from "./Projects";

const GROUPS = [
  {
    label: "Languages",
    accent: "var(--color-rose)",
    items: ["JavaScript (ES6+)", "TypeScript", "Kotlin"],
  },
  {
    label: "Frontend",
    accent: "var(--color-purple)",
    items: ["React", "Next.js", "Tailwind CSS", "Jetpack Compose"],
  },
  {
    label: "Backend & Data",
    accent: "var(--color-cyan)",
    items: ["Node.js", "Express.js", "REST APIs", "MongoDB", "Socket.IO"],
  },
  {
    label: "Tooling & CI/CD",
    accent: "var(--color-emerald)",
    items: ["Git", "Docker", "GitHub Actions", "Playwright"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-pad relative py-28 sm:py-36">
      <SectionHeading
        index="§ 02"
        title="What I reach for"
        lede="Learned by shipping, not by certificate — every line here backs at least one project above."
      />

      <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {GROUPS.map((group, gi) => (
          <motion.div
            key={group.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: gi * 0.06 }}
            className="bg-surface p-7"
          >
            <span
              className="font-mono text-[11px] uppercase tracking-[0.2em]"
              style={{ color: group.accent }}
            >
              {group.label}
            </span>
            <ul className="mt-5 space-y-3">
              {group.items.map((item) => (
                <li key={item} className="flex items-center gap-2 text-[15px] text-ink-dim">
                  <span
                    className="h-1 w-1 shrink-0 rounded-full"
                    style={{ background: group.accent }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
