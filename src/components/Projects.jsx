import SectionHeader from "./SectionHeader.jsx";
import { projects } from "../data/profile.js";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 px-4 py-20 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader  title="Projects" />

        <div className="space-y-6">
          {projects.map((p) => (
            <article
              key={p.id}
              className="group rounded-xl border border-line bg-panel p-6 transition-colors hover:border-amber/50 sm:p-8"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="font-display text-xl font-semibold text-paper sm:text-2xl">
                      {p.name}
                    </h3>
                    <span
                      className={`rounded-full border px-2.5 py-0.5 font-mono text-[11px] ${
                        p.status === "Shipped"
                          ? "border-teal/40 text-teal"
                          : "border-amber/40 text-amber"
                      }`}
                    >
                      {p.status}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-muted">{p.tagline}</p>
                </div>

                <div className="flex gap-2">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-md border border-line px-3 py-1.5 font-mono text-xs text-paper transition hover:border-teal hover:text-teal"
                    >
                      Project ↗
                    </a>
                  )}
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-md bg-amber px-3 py-1.5 font-mono text-xs text-ink transition hover:brightness-110"
                    >
                      Live ↗
                    </a>
                  )}
                </div>
              </div>

              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted">
                {p.description}
              </p>

              <ul className="mt-4 grid gap-1.5 sm:grid-cols-2">
                {p.highlights.map((h) => (
                  <li key={h} className="flex gap-2 text-[13px] leading-relaxed text-muted">
                    <span className="mt-0.5 text-amber">›</span>
                    {h}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-md border border-line bg-panel2 px-2.5 py-1 font-mono text-[11px] text-teal"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
