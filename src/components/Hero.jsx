import { useEffect, useState } from "react";
import { profile } from "../data/profile.js";

const roles = ["Full Stack Developer", "MERN Stack Engineer", "React Native Explorer"];

function useTypewriter(words, speed = 70, pause = 1400) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), speed);
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), speed / 2);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setWordIndex((i) => i + 1);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, speed, pause]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(roles);

  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-14 sm:px-8 sm:pt-20">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div className="animate-rise">
          
          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.1] text-paper sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>
          <div className="mt-4 h-8 font-mono text-lg text-amber sm:text-xl">
            {typed}
            <span className="ml-0.5 inline-block h-5 w-2 translate-y-0.5 animate-blink bg-amber align-middle" />
          </div>

          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted sm:text-base">
            {profile.summary}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={profile.resumePath}
              download
              className="rounded-md bg-amber px-5 py-2.5 font-mono text-sm font-medium text-ink transition hover:brightness-110"
            >
              ↓ Download CV
            </a>
            <a
              href="#projects"
              className="rounded-md border border-line px-5 py-2.5 font-mono text-sm text-paper transition hover:border-teal hover:text-teal"
            >
              View projects
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-line px-5 py-2.5 font-mono text-sm text-paper transition hover:border-teal hover:text-teal"
            >
              GitHub ↗
            </a>
          </div>
        </div>

        {/* code window mock */}
        <div className="animate-rise rounded-xl border border-line bg-panel shadow-glow [animation-delay:150ms]">
          <div className="flex items-center gap-2 border-b border-line px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-rose/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-teal/70" />
            <span className="ml-2 font-mono text-xs text-muted">developer.js</span>
          </div>
          <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-6 text-muted sm:text-sm">
<code>
<span className="text-teal">const</span> <span className="text-paper">developer</span> = {"{"}
{"\n  "}<span className="text-amber">name</span>: <span className="text-teal">"Lokesh Rawat"</span>,
{"\n  "}<span className="text-amber">role</span>: <span className="text-teal">"Full Stack Developer"</span>,
{"\n  "}<span className="text-amber">stack</span>: [<span className="text-teal">"React"</span>, <span className="text-teal">"Node"</span>, <span className="text-teal">"Express"</span>, <span className="text-teal">"MongoDB"</span>],
{"\n  "}<span className="text-amber">location</span>: <span className="text-teal">"Uttarakhand, India"</span>,
{"\n  "}<span className="text-amber">currentlyBuilding</span>: <span className="text-teal">"Speakify"</span>,
{"\n  "}<span className="text-amber">availableFor</span>: <span className="text-teal">"opportunities"</span>,
{"\n"}{"}"};
</code>
          </pre>
        </div>
      </div>
    </section>
  );
}
