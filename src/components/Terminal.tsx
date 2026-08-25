import { useEffect, useRef, useState } from "react";

interface Line {
  prompt: string;
  output: string[];
}

const SCRIPT: Line[] = [
  { prompt: "whoami", output: ["divyanshu ganeshwani — full-stack developer"] },
  {
    prompt: "cat about.md",
    output: [
      "self-taught. The Odin Project + Full Stack Open (UH).",
      "6 shipped projects. based in indore, in.",
    ],
  },
  { prompt: "status --remote", output: ["open to full-remote roles ✓"] },
];

const TYPE_MS = 28;
const LINE_PAUSE_MS = 420;

export default function Terminal() {
  const [rendered, setRendered] = useState<{ prompt: string; output: string[] }[]>([]);
  const [typingPrompt, setTypingPrompt] = useState("");
  const [done, setDone] = useState(false);
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return;
    started.current = true;

    let cancelled = false;
    let timeouts: ReturnType<typeof setTimeout>[] = [];

    async function run() {
      for (let i = 0; i < SCRIPT.length; i++) {
        const { prompt, output } = SCRIPT[i];
        for (let c = 1; c <= prompt.length; c++) {
          if (cancelled) return;
          await wait(TYPE_MS);
          setTypingPrompt(prompt.slice(0, c));
        }
        await wait(LINE_PAUSE_MS);
        if (cancelled) return;
        setRendered((prev) => [...prev, { prompt, output }]);
        setTypingPrompt("");
        await wait(LINE_PAUSE_MS);
      }
      if (!cancelled) setDone(true);
    }

    function wait(ms: number) {
      return new Promise<void>((resolve) => {
        const t = setTimeout(resolve, ms);
        timeouts.push(t);
      });
    }

    run();
    return () => {
      cancelled = true;
      timeouts.forEach(clearTimeout);
    };
  }, []);

  return (
    <div className="w-full max-w-md rounded-xl border border-border bg-surface/80 shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_30px_80px_-20px_rgba(0,0,0,0.7)] backdrop-blur-sm">
      <div className="flex items-center gap-2 border-b border-border-soft px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#fb3d67]/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#f5a524]/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#22c58d]/70" />
        <span className="ml-2 font-mono text-[11px] tracking-wide text-ink-dimmer">
          divyanshu@portfolio: ~
        </span>
      </div>
      <div className="min-h-[188px] px-4 py-4 font-mono text-[13px] leading-relaxed sm:text-sm">
        {rendered.map((line, i) => (
          <div key={i} className="mb-2.5">
            <div className="flex gap-2">
              <span className="text-cyan">➜</span>
              <span className="text-ink-dim">{line.prompt}</span>
            </div>
            {line.output.map((o, j) => (
              <div key={j} className="pl-4 text-ink">
                <span className="text-ink-dimmer">{"// "}</span>
                {o}
              </div>
            ))}
          </div>
        ))}
        {!done && (
          <div className="flex gap-2">
            <span className="text-cyan">➜</span>
            <span className="text-ink-dim">
              {typingPrompt}
              <span className="ml-0.5 inline-block h-[1em] w-[7px] translate-y-[2px] animate-blink bg-cyan align-middle" />
            </span>
          </div>
        )}
        {done && (
          <div className="flex gap-2">
            <span className="text-cyan">➜</span>
            <span className="ml-0.5 inline-block h-[1em] w-[7px] translate-y-[2px] animate-blink bg-cyan align-middle" />
          </div>
        )}
      </div>
    </div>
  );
}
