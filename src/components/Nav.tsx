import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "#work", label: "work" },
  { href: "#skills", label: "skills" },
  { href: "#about", label: "about" },
  { href: "#contact", label: "contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-border-soft bg-bg/80 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <nav className="section-pad flex h-16 items-center justify-between">
        <a
          href="#top"
          className="focus-ring flex items-center gap-2 font-mono text-sm font-medium text-ink"
        >
          <span className="flex h-1.5 w-6 overflow-hidden rounded-full">
            <span className="h-full w-1/3 bg-rose" />
            <span className="h-full w-1/3 bg-indigo" />
            <span className="h-full w-1/3 bg-cyan" />
          </span>
          dg<span className="text-ink-dimmer">.dev</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="focus-ring font-mono text-[13px] tracking-wide text-ink-dim transition-colors hover:text-ink"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="focus-ring hidden rounded-full border border-border px-4 py-2 font-mono text-[13px] text-ink transition-colors hover:border-border-hover hover:bg-surface md:inline-block"
        >
          say hi ↗
        </a>

        <button
          className="focus-ring text-ink md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-b border-border-soft bg-bg/95 backdrop-blur-md md:hidden"
          >
            <ul className="section-pad flex flex-col gap-1 py-4">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="focus-ring block py-2 font-mono text-sm text-ink-dim hover:text-ink"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
