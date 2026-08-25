import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Terminal from "./Terminal";

const STACK = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Express",
  "MongoDB",
  "Socket.IO",
  "Tailwind CSS",
  "Docker",
  "Kotlin",
  "Playwright",
  "GitHub Actions",
];

export default function Hero() {
  const spotlightRef = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = spotlightRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--y", `${e.clientY - rect.top}px`);
  }

  return (
    <section
      id="top"
      ref={spotlightRef}
      onMouseMove={handleMouseMove}
      className="relative flex min-h-svh flex-col justify-center overflow-hidden pt-16"
      style={{
        // @ts-expect-error custom property
        "--x": "50%",
        "--y": "40%",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-70 transition-opacity"
        style={{
          background:
            "radial-gradient(600px circle at var(--x) var(--y), rgba(179,75,246,0.10), transparent 70%)",
        }}
      />

      <div className="section-pad relative grid flex-1 grid-cols-1 items-center gap-14 py-24 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 font-mono text-xs text-ink-dim"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald" />
            open to full-remote roles
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="font-display text-[13vw] font-semibold leading-[0.98] tracking-tight sm:text-[8vw] lg:text-[4.6vw]"
          >
            Divyanshu
            <br />
            <span className="text-spectrum">Ganeshwani.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="mt-7 max-w-lg text-lg leading-relaxed text-ink-dim sm:text-xl"
          >
            Self-taught full-stack developer in Indore, India. I teach myself
            by shipping — six real products, from a local-first music player
            to a Discord-style chat app, built end to end and put in front of
            real users.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#work"
              className="focus-ring group relative overflow-hidden rounded-full bg-ink px-6 py-3 font-mono text-sm font-medium text-bg transition-transform hover:-translate-y-0.5"
            >
              view the work
            </a>
            <a
              href="#contact"
              className="focus-ring rounded-full border border-border px-6 py-3 font-mono text-sm text-ink-dim transition-colors hover:border-border-hover hover:text-ink"
            >
              get in touch
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex justify-center lg:justify-end"
        >
          <Terminal />
        </motion.div>
      </div>

      <div className="relative overflow-hidden border-t border-border-soft py-4">
        <div className="animate-marquee flex w-max gap-10 font-mono text-xs uppercase tracking-[0.2em] text-ink-dimmer">
          {[...STACK, ...STACK].map((s, i) => (
            <span key={i} className="flex items-center gap-10">
              {s}
              <span className="text-border">/</span>
            </span>
          ))}
        </div>
      </div>

      <a
        href="#work"
        aria-label="Scroll to work"
        className="focus-ring absolute bottom-24 left-1/2 hidden -translate-x-1/2 text-ink-dimmer transition-colors hover:text-ink lg:block"
      >
        <ArrowDown size={18} className="animate-bounce" />
      </a>
    </section>
  );
}
