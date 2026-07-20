import SectionHeader from "./SectionHeader.jsx";
import { education } from "../data/profile.js";

export default function Education() {
  return (
    <section id="education" className="scroll-mt-24 bg-panel/40 px-4 py-20 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader file="education.md" title="Education" />

        <div className="flex flex-col gap-4 rounded-xl border border-line bg-panel p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <h3 className="font-display text-xl font-semibold text-paper">
              {education.degree}
            </h3>
            <p className="mt-1 text-sm text-muted">{education.institution}</p>
          </div>
          <div className="flex gap-6 font-mono text-sm sm:text-right">
            <div>
              <p className="text-muted">Period</p>
              <p className="text-amber">{education.period}</p>
            </div>
            <div>
              <p className="text-muted">Status</p>
              <p className="text-teal">{education.detail}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
