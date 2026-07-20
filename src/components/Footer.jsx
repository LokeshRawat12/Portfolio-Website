import { profile } from "../data/profile.js";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line px-4 py-8 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-mono text-xs text-muted">
          © {year} {profile.name} — built with React &amp; Tailwind CSS
        </p>
        <div className="flex gap-5 font-mono text-xs text-muted">
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-teal">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-teal">
            LinkedIn
          </a>
          <a href={profile.instagram} target="_blank" rel="noreferrer" className="hover:text-teal">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
