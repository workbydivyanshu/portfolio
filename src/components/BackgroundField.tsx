/**
 * Ambient, site-wide backdrop: a few slow-drifting colour blobs pulled from
 * the six project accent colors, plus a static grain layer for texture.
 * Fixed and pointer-events-none so it never interferes with interaction.
 */
export default function BackgroundField() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-bg">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(179,75,246,0.10),_transparent_55%)]" />
      <div
        className="absolute -top-40 -left-40 h-[38rem] w-[38rem] rounded-full opacity-[0.16] blur-[120px] animate-[drift1_26s_ease-in-out_infinite]"
        style={{ background: "#fb3d67" }}
      />
      <div
        className="absolute top-1/3 -right-52 h-[34rem] w-[34rem] rounded-full opacity-[0.14] blur-[130px] animate-[drift2_32s_ease-in-out_infinite]"
        style={{ background: "#22d3ee" }}
      />
      <div
        className="absolute bottom-[-10rem] left-1/4 h-[30rem] w-[30rem] rounded-full opacity-[0.12] blur-[120px] animate-[drift3_38s_ease-in-out_infinite]"
        style={{ background: "#b34bf6" }}
      />
      <div
        className="absolute inset-0 opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 90%)",
        }}
      />
      <style>{`
        @keyframes drift1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(60px, 40px) scale(1.08); }
        }
        @keyframes drift2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-50px, 60px) scale(1.1); }
        }
        @keyframes drift3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(40px, -50px) scale(1.06); }
        }
      `}</style>
    </div>
  );
}
