const BASE = import.meta.env.BASE_URL

const stats = [
  { n: '30+', s: 'Menu Items' },
  { n: '4', s: 'Combo Deals' },
  { n: '930', s: 'Deals From Rs.' },
]

export default function Hero() {
  return (
    <section id="top">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-[max(18px,env(safe-area-inset-left))] py-12 lg:grid-cols-[1.05fr_0.95fr] lg:py-16">
        <div className="animate-fade-up">
          <span className="mb-4 inline-flex items-center gap-2.5 text-xs font-extrabold uppercase tracking-[0.24em] text-hf-honey">
            <span className="h-2.5 w-2.5 animate-glow rounded-full bg-hf-ember shadow-[0_0_12px_#ff4d2d]" />
            Parkview City · Lahore
          </span>
          <h1 className="font-display text-[clamp(3.1rem,10vw,6.2rem)] uppercase leading-[0.84]">
            <span className="[-webkit-text-stroke:2px_rgba(248,239,226,.42)] text-transparent">MORE</span>
            <br />
            <span className="text-hf-cream">THAN</span>{' '}
            <span className="bg-[linear-gradient(100deg,#ffb62e,#ff7e1a_55%,#ff4d2d)] bg-clip-text text-transparent">
              FRIES
            </span>
          </h1>
          <p className="mt-5 max-w-[44ch] text-lg text-hf-muted">
            Loaded zingers, double-injected smash burgers, fired-up wraps and saucy wings — stacked
            high, sauced right, and delivered hot.
          </p>
          <div className="mb-7 mt-7 flex flex-wrap gap-3">
            <a href="#menu" className="hf-btn">
              <span className="hf-sheen" />
              Explore Menu →
            </a>
            <a href="#deals" className="hf-btn-ghost">🔥 Hot Deals</a>
          </div>
          <div className="flex flex-wrap gap-7">
            {stats.map((s) => (
              <div key={s.s}>
                <div className="font-display text-2xl text-hf-honey">{s.n}</div>
                <div className="mt-0.5 text-xs uppercase tracking-wide text-hf-muted">{s.s}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative grid min-h-[340px] place-items-center">
          <div className="absolute aspect-square w-[82%] animate-glow rounded-full bg-[radial-gradient(circle,#ff7e1a,transparent_68%)] blur-[46px] opacity-60" />
          <div className="absolute right-[-2%] top-[4%] z-[3] grid h-24 w-24 animate-spinbadge place-items-center rounded-full bg-hf-ember text-center leading-[0.85] text-white shadow-[0_14px_34px_-8px_rgba(255,77,45,.85)]">
            <span>
              <b className="block font-display text-2xl">930</b>
              <small className="text-[0.6rem] tracking-[0.1em]">FROM RS.</small>
            </span>
          </div>
          <div className="relative z-[1] aspect-[3/4] w-[min(400px,86%)] animate-floaty overflow-hidden rounded-[26px] border-[3px] border-hf-honey/55 shadow-[0_44px_90px_-34px_#000,0_0_0_8px_rgba(255,126,26,.08)]">
            <span className="hf-sheen z-[2]" />
            <img
              src={BASE + 'images/food/hero.jpg'}
              alt="Loaded Hi Fries stacked burger"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
