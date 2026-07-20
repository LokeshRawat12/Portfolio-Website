import { useEffect, useState } from "react";

const tabs = [
  { id: "about", file: "about" },
  { id: "skills", file: "skills" },
  { id: "projects", file: "projects" },
  { id: "education", file: "education" },
  { id: "contact", file: "contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("about");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = tabs.map((t) => document.getElementById(t.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const goTo = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/90 backdrop-blur">
      {/* window chrome bar */}
      <div className="flex items-center gap-2 px-4 pt-2.5 pb-1">
        <span className="h-2.5 w-2.5 rounded-full bg-rose/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-teal/70" />
        <span className="ml-3 font-mono text-[11px] text-muted">
          lokesh-rawat — portfolio
        </span>

        <button
          onClick={() => setOpen(!open)}
          className="ml-auto rounded border border-line px-2 py-1 font-mono text-xs text-muted sm:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? "close" : "menu"}
        </button>
      </div>

      {/* tab strip */}
      <nav
        className={`${
          open ? "flex" : "hidden"
        } flex-col border-t border-line sm:flex sm:flex-row sm:items-end sm:overflow-x-auto`}
      >
        {tabs.map((t) => {
          const isActive = active === t.id;
          return (
            <button
              key={t.id}
              onClick={() => goTo(t.id)}
              className={`group relative flex items-center gap-2 whitespace-nowrap border-r border-line px-4 py-2.5 font-mono text-[13px] transition-colors sm:py-2 ${
                isActive
                  ? "bg-panel text-paper"
                  : "text-muted hover:bg-panel/60 hover:text-paper"
              }`}
            >
              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  isActive ? "bg-amber" : "bg-line group-hover:bg-muted"
                }`}
              />
              {t.file}
              {isActive && (
                <span className="absolute inset-x-0 -bottom-px hidden h-[2px] bg-amber sm:block" />
              )}
            </button>
          );
        })}
      </nav>
    </header>
  );
}
