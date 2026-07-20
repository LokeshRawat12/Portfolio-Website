import SectionHeader from "./SectionHeader.jsx";
import { interests } from "../data/profile.js";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 px-4 py-20 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader  title="About" />

        <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr]">
          <div className="space-y-4 text-[15px] leading-relaxed text-muted sm:text-base">
            <p>
              I'm a full stack developer based in Uttarakhand, working mainly in the{" "}
              <span className="text-paper">MERN stack</span> — React on the front end,
              Node.js and Express for the API layer, and MongoDB for storage. I like
              taking a product from an empty repo to something people can actually
              click through.
            </p>
            <p>
              Most of my recent work has centered on booking platforms, dashboards
              and AI-assisted tools — building responsive interfaces, wiring up REST
              APIs, and structuring databases so features stay easy to add later. I'm
              equally comfortable sketching a flow in Figma before writing a single
              line of code.
            </p>
            <p>
              Outside of shipping code, I'm currently pursuing a BCA and staying
              curious about new tools in the ecosystem — from AI API integration to
              React Native for mobile.
            </p>
          </div>

          <div className="rounded-xl border border-line bg-panel p-5">
            <p className="font-mono text-xs text-muted">interests.json</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {interests.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-line bg-panel2 px-3 py-1 font-mono text-xs text-paper"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
