export default function SectionHeader({ file, title, note }) {
  return (
    <div className="mb-10">
      
      <h2 className="mt-2 font-display text-3xl font-semibold text-paper sm:text-4xl">
        {title}
      </h2>
      {note && <p className="mt-2 max-w-xl text-sm text-muted">{note}</p>}
      <span className="mt-4 block h-px w-16 bg-amber" />
    </div>
  );
}
