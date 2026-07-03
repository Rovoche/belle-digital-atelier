import { useEffect, useState } from "react";

export function RovocheModal() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => {
      setOpen(true);
      setMounted(true);
    }, 400);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!mounted) return null;

  return (
    <div
      aria-hidden={!open}
      className={`fixed inset-0 z-[100] transition-opacity duration-700 ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      <div className="absolute inset-0 bg-ink/85 backdrop-blur-md" onClick={() => setOpen(false)} />
      <div className="relative flex min-h-full items-center justify-center p-6">
        <div
          className={`relative w-full max-w-xl border border-line/40 bg-ivory p-10 md:p-16 text-center transition-transform duration-700 ${open ? "translate-y-0" : "translate-y-4"}`}
        >
          <p className="eyebrow text-mute">Rovoche Presents</p>
          <div className="mx-auto mt-6 h-px w-12 bg-gold" />
          <h2 className="display-lg mt-8 leading-[1.05]">
            A Digital Atelier <em className="font-light italic">Concept</em>
            <br /> for Belle By Essy
          </h2>
          <p className="mx-auto mt-6 max-w-sm text-sm leading-relaxed text-ink-soft">
            A curated demonstration of a luxury fashion experience — envisioned, composed and crafted as a study in brand elevation.
          </p>
          <button
            onClick={() => setOpen(false)}
            className="group mt-10 inline-flex items-center gap-4 border border-ink px-8 py-4 text-[0.7rem] uppercase tracking-[0.35em] text-ink transition-all duration-500 hover:bg-ink hover:text-ivory"
          >
            <span>Enter the Experience</span>
            <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
          </button>
          <p className="mt-8 text-[0.6rem] uppercase tracking-[0.3em] text-mute">
            Not affiliated · Concept study
          </p>
        </div>
      </div>
    </div>
  );
}
