import SectionHeader from "./SectionHeader.jsx";
import { skillGroups } from "../data/profile.js";

const accentMap = {
  amber: { text: "text-amber", dot: "bg-amber", border: "hover:border-amber/60" },
  teal: { text: "text-teal", dot: "bg-teal", border: "hover:border-teal/60" },
  rose: { text: "text-rose", dot: "bg-rose", border: "hover:border-rose/60" },
};

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 bg-panel/40 px-4 py-20 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          title="Skills"
          note="Grouped the way I'd organize a project directory — by concern, not by buzzword."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => {
            const accent = accentMap[group.accent];
            return (
              <div
                key={group.file}
                className={`rounded-xl border border-line bg-panel p-5 transition-colors ${accent.border}`}
              >
                <div className="flex items-center gap-2">
                  <span className={`h-1.5 w-1.5 rounded-full ${accent.dot}`} />
                  <p className="font-mono text-xs text-muted">{group.file}</p>
                </div>
                <h3 className={`mt-2 font-display text-lg font-semibold ${accent.text}`}>
                  {group.label}
                </h3>
                <ul className="mt-4 space-y-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-2 font-mono text-[13px] text-paper"
                    >
                      <span className="text-muted">›</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
