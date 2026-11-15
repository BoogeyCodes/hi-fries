import SectionHead from './SectionHead.jsx'
import Reveal from './Reveal.jsx'
import Tilt from './Tilt.jsx'
import { deals } from '../data/menu.js'
import { useItemModal } from '../context/ModalContext.jsx'

const BASE = import.meta.env.BASE_URL

export default function Deals() {
  const { open } = useItemModal()
  return (
    <section id="deals" className="py-14">
      <div className="mx-auto max-w-6xl px-[max(18px,env(safe-area-inset-left))]">
        <Reveal>
          <SectionHead
            kicker="Best Value"
            title="Loaded"
            highlight="Deals"
            sub="Real combos, real portions, real value — built for one or shared with the squad."
          />
        </Reveal>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {deals.map((d, i) => (
            <Reveal key={d.id} delay={(i % 4) * 80}>
              <Tilt max={14} scale={1.03} glare className="relative h-full rounded-[22px]">
              <article className="group relative flex min-h-[340px] w-full overflow-hidden rounded-[22px] border border-hf-orange/20 shadow-2xl shadow-black/60 transition duration-300 hover:border-hf-honey/60">
                <img
                  src={BASE + d.img}
                  alt=""
                  className="absolute inset-0 z-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="relative z-10 flex w-full flex-col justify-end gap-2 bg-gradient-to-b from-hf-bg/10 via-hf-bg/40 to-hf-bg/95 p-5">
                  <span className="mb-auto self-start rounded-full bg-hf-ember px-3 py-1 text-[0.62rem] font-extrabold uppercase tracking-wide text-white">
                    {d.tag}
                  </span>
                  <h3 className="font-display text-2xl uppercase leading-none">{d.name}</h3>
                  <ul className="flex flex-col gap-0.5">
                    {d.items.map((it) => (
                      <li key={it} className="flex gap-2 text-sm text-hf-cream/85">
                        <span className="mt-[0.5em] h-1.5 w-1.5 flex-none rounded-full bg-hf-honey" />
                        {it}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-1 flex items-end justify-between">
                    <div className="font-display text-[2rem] leading-none text-hf-honey">
                      <small className="mr-1 text-sm text-hf-cream/80">RS.</small>
                      {d.price}
                    </div>
                    <button
                      type="button"
                      onClick={() => open({ id: d.id, name: `${d.tag} — ${d.name}`, price: d.price })}
                      className="rounded-full bg-gradient-to-br from-hf-honey to-hf-orange px-4 py-2 font-display text-xs uppercase tracking-wide text-hf-bg shadow-lg shadow-hf-orange/40 transition hover:brightness-105"
                    >
                      + Add
                    </button>
                  </div>
                </div>
              </article>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
