const ACCENTS = ["#fb3d67", "#b34bf6", "#6f6df6", "#22d3ee", "#22c58d", "#f5a524"];

export default function Footer() {
  return (
    <footer className="section-pad border-t border-border-soft py-10">
      <div className="mb-6 flex h-1 overflow-hidden rounded-full">
        {ACCENTS.map((c) => (
          <span key={c} className="h-full flex-1" style={{ background: c }} />
        ))}
      </div>
      <div className="flex flex-col items-center justify-between gap-3 font-mono text-xs text-ink-dimmer sm:flex-row">
        <span>© {new Date().getFullYear()} Divyanshu Ganeshwani. Built from scratch, deployed on GitHub Pages.</span>
        <span>Indore, India → anywhere remote</span>
      </div>
    </footer>
  );
}
