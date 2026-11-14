import { useItemModal } from '../context/ModalContext.jsx'

const BASE = import.meta.env.BASE_URL

export default function CategoryCard({ cat }) {
  const { open } = useItemModal()

  const addItem = (item, variant) => {
    const label = variant ? `${item.name} (${variant.label})` : item.name
    const id = `${cat.id}-${label}`
    open({ id, name: label, price: variant ? variant.price : item.price })
  }

  return (
    <article className={`overflow-hidden rounded-[22px] border border-hf-orange/20 bg-[linear-gradient(175deg,#1b140c,#0c0905)] transition duration-300 hover:-translate-y-1 hover:border-hf-honey/45 ${cat.wide ? 'lg:col-span-2' : ''}`}>
      <div className={`relative overflow-hidden ${cat.wide ? 'aspect-[40/9]' : 'aspect-[21/8]'}`}>
        <img src={BASE + cat.banner} alt={cat.name} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
        <div className="absolute inset-x-0 bottom-0 flex items-center gap-3 bg-gradient-to-t from-hf-bg/90 to-transparent px-5 py-3.5">
          <span className="text-xl">{cat.emoji}</span>
          <h3 className="font-display text-2xl uppercase text-white drop-shadow">{cat.name}</h3>
          {cat.pill && (
            <span className="ml-auto rounded-full bg-hf-honey px-2.5 py-1 text-[0.6rem] font-extrabold uppercase tracking-wide text-hf-bg">
              {cat.pill}
            </span>
          )}
        </div>
      </div>

      <div className="px-5 pb-5 pt-2.5">
        {cat.comingSoon ? (
          <div className="rounded-xl border border-dashed border-hf-orange/30 px-3 py-3 text-sm text-hf-muted">
            {cat.comingSoon}
          </div>
        ) : cat.groups ? (
          cat.groups.map((g) => (
            <div key={g.title}>
              <div className="mb-2 mt-3 border-b border-hf-orange/20 pb-1.5 font-display text-sm uppercase tracking-wide text-hf-honey">
                {g.title}
              </div>
              <div className={cat.wide ? 'grid grid-cols-1 gap-x-8 sm:grid-cols-2' : ''}>
                {g.items.map((it) => (
                  <Row key={it.name} item={it} onAdd={addItem} />
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className={cat.wide ? 'grid grid-cols-1 gap-x-8 sm:grid-cols-2' : ''}>
            {cat.items.map((it) => (
              <Row key={it.name} item={it} onAdd={addItem} grid={cat.wide} />
            ))}
          </div>
        )}

        {cat.note && (
          <div className="mt-3.5 rounded-xl bg-gradient-to-r from-hf-orange to-hf-honey px-3 py-2.5 text-center font-display text-sm uppercase tracking-wide text-hf-bg">
            {cat.note}
          </div>
        )}
      </div>
    </article>
  )
}

function Row({ item, onAdd }) {
  const hasVariants = Array.isArray(item.variants)
  return (
    <div className="flex items-start gap-3 border-b border-dashed border-hf-orange/15 py-2.5 last:border-b-0">
      <div className="min-w-0 flex-1">
        <div className="font-semibold text-hf-cream">{item.name}</div>
        {item.desc && <div className="mt-0.5 text-[0.82rem] leading-snug text-hf-muted">{item.desc}</div>}
        {hasVariants && (
          <div className="mt-1.5 flex flex-wrap gap-2">
            {item.variants.map((v) => (
              <button
                key={v.label}
                type="button"
                onClick={() => onAdd(item, v)}
                className="group flex items-center gap-1.5 rounded-full border border-hf-orange/25 bg-hf-panel px-3 py-1 text-sm font-semibold transition hover:border-hf-honey hover:bg-hf-honey/15"
              >
                <span className="text-[0.62rem] font-bold uppercase text-hf-muted group-hover:text-hf-honey">{v.label}</span>
                <span className="font-display text-hf-honey">{v.price}</span>
                <Plus />
              </button>
            ))}
          </div>
        )}
      </div>
      {!hasVariants && (
        <>
          <div className="whitespace-nowrap font-display text-lg text-hf-honey">{item.price}</div>
          <button
            type="button"
            onClick={() => onAdd(item)}
            aria-label={`Add ${item.name}`}
            className="grid h-7 w-7 flex-none place-items-center rounded-full bg-gradient-to-br from-hf-honey to-hf-orange text-hf-bg transition hover:brightness-110"
          >
            <Plus />
          </button>
        </>
      )}
    </div>
  )
}

const Plus = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
    <path d="M12 5v14M5 12h14" />
  </svg>
)
