import { useMemo, useState } from 'react'
import SectionHead from './SectionHead.jsx'
import CategoryCard from './CategoryCard.jsx'
import Reveal from './Reveal.jsx'
import { categories } from '../data/menu.js'

export default function Menu() {
  const [active, setActive] = useState('all')
  const [query, setQuery] = useState('')

  const shown = useMemo(() => {
    const q = query.trim().toLowerCase()
    let list = active === 'all' ? categories : categories.filter((c) => c.id === active)
    if (!q) return list

    const matchItem = (it) => it.name.toLowerCase().includes(q)
    return list
      .map((c) => {
        if (c.name.toLowerCase().includes(q)) return c
        if (c.groups) {
          const groups = c.groups
            .map((g) => ({ ...g, items: g.items.filter(matchItem) }))
            .filter((g) => g.items.length)
          return groups.length ? { ...c, groups, comingSoon: undefined } : null
        }
        if (c.items) {
          const items = c.items.filter(matchItem)
          return items.length ? { ...c, items, comingSoon: undefined } : null
        }
        return null
      })
      .filter(Boolean)
  }, [active, query])

  return (
    <section id="menu" className="bg-gradient-to-b from-transparent to-hf-orange/[0.03] py-14">
      <div className="mx-auto max-w-6xl px-[max(18px,env(safe-area-inset-left))]">
        <Reveal>
          <SectionHead
            kicker="The Full Spread"
            title="Our"
            highlight="Menu"
            sub="Everything off the Hi Fries grill, fryer and oven. Search or filter, then add to cart."
          />
        </Reveal>

        <div className="mx-auto mb-7 max-w-md">
          <div className="flex items-center gap-2 rounded-full border border-hf-orange/25 bg-hf-panel px-4 py-2.5 focus-within:border-hf-honey">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-hf-muted">
              <circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" strokeLinecap="round" />
            </svg>
            <input
              id="hf-search"
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search zinger, pizza, wings…"
              className="w-full bg-transparent text-hf-cream outline-none placeholder:text-hf-muted/70"
            />
            {query && (
              <button type="button" onClick={() => setQuery('')} aria-label="Clear" className="text-hf-muted hover:text-hf-cream">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
              </button>
            )}
          </div>
        </div>

        <div className="mb-9 flex flex-wrap justify-center gap-2.5">
          <Pill label="✨ All" active={active === 'all'} onClick={() => setActive('all')} />
          {categories.map((c) => (
            <Pill key={c.id} label={`${c.emoji} ${c.name}`} active={active === c.id} onClick={() => setActive(c.id)} />
          ))}
        </div>

        {shown.length === 0 ? (
          <div className="py-10 text-center text-hf-muted">
            <div className="mb-2 text-4xl">🔍</div>
            <p className="font-display text-lg uppercase text-hf-cream">No items match “{query}”</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {shown.map((c) => (
              <Reveal key={c.id} className={c.wide ? 'md:col-span-2' : ''}>
                <CategoryCard cat={c} />
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

function Pill({ label, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-bold uppercase tracking-wide transition duration-200 ${
        active
          ? 'border-hf-honey bg-gradient-to-br from-hf-honey to-hf-orange text-hf-bg'
          : 'border-hf-orange/25 bg-hf-panel text-hf-cream hover:-translate-y-0.5 hover:border-hf-honey hover:text-hf-honey'
      }`}
    >
      {label}
    </button>
  )
}
