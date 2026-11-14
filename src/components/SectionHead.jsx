export default function SectionHead({ kicker, title, highlight, sub }) {
  return (
    <div className="mb-10 text-center">
      <div className="text-xs font-extrabold uppercase tracking-[0.24em] text-hf-honey">
        {kicker}
      </div>
      <h2 className="mt-2 font-display text-[clamp(2.3rem,6vw,3.6rem)] uppercase leading-none">
        {title}{' '}
        {highlight && (
          <span className="bg-gradient-to-r from-hf-honey to-hf-orange bg-clip-text text-transparent">
            {highlight}
          </span>
        )}
      </h2>
      {sub && <p className="mx-auto mt-3 max-w-[56ch] text-hf-muted">{sub}</p>}
    </div>
  )
}
