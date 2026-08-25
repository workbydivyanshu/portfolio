export interface Project {
  index: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  stack: string[];
  github: string;
  live: string | null;
  accent: string;
  accentSoft: string;
  featured?: boolean;
}

/**
 * Only real, shipped projects. Every link points at a workbydivyanshu repo.
 * Accent colors are drawn from each project's own shipped brand palette —
 * together they form the spectrum used across this site.
 */
export const projects: Project[] = [
  {
    index: "01",
    slug: "aubade-web",
    title: "Aubade",
    tagline: "A music player that never leaves your machine",
    description:
      "A client-side player for a local music library, no framework and no build step. It reads a folder straight off disk through the File System Access API, builds out albums and artists, synced lyrics, playlists, a live visualiser, and per-cover colour theming. No server, no account, nothing uploaded — ever.",
    stack: ["HTML", "CSS", "JavaScript", "File System Access API", "Playwright", "GitHub Actions"],
    github: "https://github.com/workbydivyanshu/aubade-web",
    live: "https://workbydivyanshu.github.io/aubade-web/",
    accent: "#fb3d67",
    accentSoft: "#fb3d6733",
    featured: true,
  },
  {
    index: "02",
    slug: "multifariousai",
    title: "MultifariousAI",
    tagline: "One inbox for every model",
    description:
      "A multi-AI chat platform authored from scratch with Next.js and TypeScript. It puts OpenRouter's free-tier models and local Ollama models side by side, streaming every response in real time regardless of where it's coming from.",
    stack: ["Next.js", "TypeScript", "React", "OpenRouter API", "Ollama"],
    github: "https://github.com/workbydivyanshu/multifariousAI",
    live: "https://multifarious-ai-j3zw.vercel.app",
    accent: "#b34bf6",
    accentSoft: "#b34bf633",
  },
  {
    index: "03",
    slug: "vartalap-app",
    title: "Vartalap",
    tagline: "Discord's UI, rebuilt from the socket up",
    description:
      "A real-time messaging app with a Discord-style interface — servers, channels, typing indicators — wired together over Socket.IO on top of a Node, Express, and MongoDB backend.",
    stack: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Socket.IO"],
    github: "https://github.com/workbydivyanshu/vartalap-app",
    live: "https://vartalap-app-vert.vercel.app",
    accent: "#6f6df6",
    accentSoft: "#6f6df633",
  },
  {
    index: "04",
    slug: "cheatsheets",
    title: "Cheatsheets",
    tagline: "Every syntax you forget, in one place",
    description:
      "A searchable developer reference spanning dozens of languages, built on Next.js 15 with Shiki-powered syntax highlighting and search fast enough to feel instant while you're mid-thought.",
    stack: ["Next.js 15", "TypeScript", "Tailwind CSS", "Shiki"],
    github: "https://github.com/workbydivyanshu/cheatsheets",
    live: "https://cheatsheets-kohl.vercel.app",
    accent: "#22d3ee",
    accentSoft: "#22d3ee33",
  },
  {
    index: "05",
    slug: "twenty-twenty-twenty",
    title: "Twenty Twenty Twenty",
    tagline: "A timer that actually gets you to look away",
    description:
      "An Android app enforcing the 20-20-20 eye-strain rule: session timers, break-compliance tracking, a foreground service with a notification-bar countdown, and weekly and monthly analytics. A companion web build shares the same core through Capacitor.",
    stack: ["Kotlin", "Jetpack Compose", "React", "Vite", "Capacitor"],
    github: "https://github.com/workbydivyanshu/twenty-twenty-twenty",
    live: "https://twenty-twenty-twenty.vercel.app",
    accent: "#22c58d",
    accentSoft: "#22c58d33",
  },
  {
    index: "06",
    slug: "p-stream",
    title: "P-Stream",
    tagline: "Thirty commits into someone else's codebase",
    description:
      "Feature work contributed to a personal build of the open-source P-Stream platform: fuzzy search, desktop download support, subtitle-persistence fixes, i18n updates, and bookmark-sync retry logic, across thirty real commits.",
    stack: ["React", "TypeScript", "Vite"],
    github: "https://github.com/workbydivyanshu/p-stream",
    live: null,
    accent: "#f5a524",
    accentSoft: "#f5a52433",
  },
];
