import type { Project } from "../data/projects";

const SCREENSHOTS: Record<string, string> = {
  "aubade-web": "aubade.png",
  multifariousai: "multifariousai.png",
  "vartalap-app": "vartalap.png",
  cheatsheets: "cheatsheets.png",
};

/**
 * Real product screenshots where available; a generated abstract mark for
 * the two projects without one (twenty-twenty-twenty is Android-only,
 * p-stream has no live build — nothing to screenshot honestly).
 */
export default function ProjectVisual({ project, featured }: { project: Project; featured: boolean }) {
  const file = SCREENSHOTS[project.slug];

  return (
    <div
      className={`relative m-4 overflow-hidden rounded-xl border border-border-soft bg-bg-soft ${
        featured ? "lg:m-6 lg:ml-0" : ""
      }`}
      style={{ aspectRatio: featured ? "14 / 10" : "16 / 11" }}
    >
      {file ? (
        <>
          <img
            src={`${import.meta.env.BASE_URL}projects/${file}`}
            alt={`${project.title} — screenshot of the live site`}
            loading="lazy"
            className="h-full w-full origin-top object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg-soft via-transparent to-transparent opacity-60" />
        </>
      ) : (
        <AbstractMark slug={project.slug} accent={project.accent} />
      )}
    </div>
  );
}

function AbstractMark({ slug, accent }: { slug: string; accent: string }) {
  if (slug === "twenty-twenty-twenty") {
    return (
      <div className="relative flex h-full w-full items-center justify-center">
        <div
          className="absolute h-40 w-40 rounded-full opacity-20 blur-2xl"
          style={{ background: accent }}
        />
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" className="relative">
          <circle cx="60" cy="60" r="46" stroke={accent} strokeWidth="2" strokeDasharray="4 6" opacity="0.5" />
          <circle cx="60" cy="60" r="30" stroke={accent} strokeWidth="2" opacity="0.8" />
          <line x1="60" y1="60" x2="60" y2="34" stroke={accent} strokeWidth="3" strokeLinecap="round" />
          <line x1="60" y1="60" x2="78" y2="60" stroke={accent} strokeWidth="3" strokeLinecap="round" opacity="0.6" />
          <circle cx="60" cy="60" r="3.5" fill={accent} />
        </svg>
        <span className="absolute bottom-5 font-mono text-[11px] tracking-[0.25em] text-ink-dimmer">
          20&nbsp;·&nbsp;20&nbsp;·&nbsp;20
        </span>
      </div>
    );
  }

  // p-stream: commit-graph motif
  const nodes = [
    [16, 60],
    [40, 40],
    [40, 80],
    [64, 60],
    [64, 30],
    [88, 60],
    [104, 45],
  ];
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <div className="absolute h-40 w-40 rounded-full opacity-20 blur-2xl" style={{ background: accent }} />
      <svg width="140" height="100" viewBox="0 0 120 100" fill="none" className="relative">
        <path d="M16 60 H104" stroke={accent} strokeWidth="1.5" opacity="0.35" />
        <path d="M40 40 V80" stroke={accent} strokeWidth="1.5" opacity="0.35" />
        <path d="M64 30 V60" stroke={accent} strokeWidth="1.5" opacity="0.35" />
        {nodes.map(([x, y], i) => (
          <circle
            key={i}
            cx={x}
            cy={y}
            r={i === 0 || i === nodes.length - 1 ? 5 : 4}
            fill={i % 2 === 0 ? accent : "transparent"}
            stroke={accent}
            strokeWidth="2"
          />
        ))}
      </svg>
      <span className="absolute bottom-5 font-mono text-[11px] tracking-[0.25em] text-ink-dimmer">
        +30 COMMITS
      </span>
    </div>
  );
}
