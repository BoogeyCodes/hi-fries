import { useEffect, useState } from 'react'
import Tilt from './Tilt.jsx'
import { branches, fmtPrice } from '../data/menu.js'

export default function CheckoutModal({ open, onClose, items, total, orderNote }) {
  const [form, setForm] = useState({ name: '', address: '', block: '', street: '' })
  const [err, setErr] = useState('')

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  if (!open) return null

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const placeOrder = (branch) => {
    if (!form.name.trim() || !form.address.trim()) {
      setErr('Please enter your name and address first.')
      return
    }
    const addressParts = [form.address.trim()]
    if (form.block.trim()) addressParts.push(`Block ${form.block.trim()}`)
    if (form.street.trim()) addressParts.push(`Street ${form.street.trim()}`)

    const lines = items.map((i) => {
      let b = `- ${i.qty} x ${i.name} - ${fmtPrice(i.qty * i.price)}`
      if (i.addons?.length) b += `\n   Add-ons: ${i.addons.map((a) => a.name).join(', ')}`
      if (i.note) b += `\n   Note: ${i.note}`
      return b
    })

    // Plain-text message, Name & Address on top, encoded once so + & etc. survive
    let msg =
      `New Order - Hi Fries\n` +
      `Branch: ${branch.name}, ${branch.city}\n\n` +
      `Name: ${form.name.trim()}\n` +
      `Address: ${addressParts.join(', ')}\n\n` +
      `Order:\n` +
      lines.join('\n') +
      `\n\nTotal: ${fmtPrice(total)}`
    if (orderNote?.trim()) msg += `\n\nOrder note: ${orderNote.trim()}`

    window.open(`https://wa.me/${branch.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank')
    onClose()
  }

  return (
    <div
      className="fixed inset-0 z-[70] flex items-end justify-center bg-black/70 backdrop-blur-sm sm:items-center"
      onClick={onClose}
    >
      <div
        className="flex max-h-[94vh] w-full max-w-lg flex-col overflow-hidden rounded-t-3xl border border-hf-orange/25 bg-hf-bg2 shadow-2xl sm:rounded-3xl"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        style={{ perspective: '1200px' }}
      >
        <div className="flex items-center justify-between bg-gradient-to-r from-hf-panel to-hf-bg px-5 py-4">
          <div>
            <div className="font-display text-xl uppercase">Almost there! 🔥</div>
            <div className="text-sm text-hf-muted">Your details &amp; branch — {fmtPrice(total)}</div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="grid h-9 w-9 place-items-center rounded-lg text-hf-cream/70 transition hover:bg-white/10"
          >
            <X />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-5">
          {/* Customer details */}
          <h4 className="mb-3 font-display text-base uppercase text-hf-honey">Your details</h4>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <Field label="Name *" value={form.name} onChange={set('name')} placeholder="e.g. Ali Khan" full />
            <Field label="Address *" value={form.address} onChange={set('address')} placeholder="House / street address" full />
            <Field label="Block" value={form.block} onChange={set('block')} placeholder="e.g. B" />
            <Field label="Street" value={form.street} onChange={set('street')} placeholder="e.g. 12" />
          </div>
          {err && (
            <div className="mt-3 rounded-lg border border-hf-ember/40 bg-hf-ember/10 px-3 py-2 text-sm text-hf-ember">
              {err}
            </div>
          )}

          {/* Branch selection */}
          <h4 className="mb-1 mt-6 font-display text-base uppercase text-hf-honey">Choose your branch</h4>
          <p className="mb-3 text-xs text-hf-muted">
            Tap a branch — your order opens in WhatsApp to that branch.
          </p>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {branches.map((b) => (
              <Tilt
                key={b.id}
                max={14}
                scale={1.04}
                glare
                className="relative cursor-pointer overflow-hidden rounded-2xl"
              >
                <button
                  type="button"
                  onClick={() => placeOrder(b)}
                  className="flex w-full flex-col items-start gap-1 rounded-2xl border border-hf-orange/25 bg-gradient-to-br from-hf-panel to-hf-bg p-4 text-left transition hover:border-hf-honey"
                >
                  <span className="text-2xl" style={{ transform: 'translateZ(26px)' }}>{b.emoji}</span>
                  <span className="font-display text-lg uppercase leading-none text-hf-cream" style={{ transform: 'translateZ(18px)' }}>
                    {b.name}
                  </span>
                  <span className="text-xs text-hf-muted">{b.city}</span>
                  <span className="mt-1 inline-flex items-center gap-1.5 rounded-full bg-[#25D366]/15 px-2.5 py-1 text-sm font-semibold text-[#25D366]">
                    <WhatsApp /> {b.phone}
                  </span>
                </button>
              </Tilt>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function Field({ label, value, onChange, placeholder, full }) {
  return (
    <label className={`flex flex-col gap-1 ${full ? 'sm:col-span-2' : ''}`}>
      <span className="text-xs font-semibold uppercase tracking-wide text-hf-muted">{label}</span>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="rounded-xl border border-white/10 bg-hf-panel px-3.5 py-2.5 text-hf-cream outline-none transition placeholder:text-hf-muted/60 focus:border-hf-honey"
      />
    </label>
  )
}

const X = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
)
const WhatsApp = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.5 15.3L2 22l4.8-1.4A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-2.8.8.8-2.7-.2-.3A8 8 0 1 1 12 20zm4.4-6c-.2-.1-1.4-.7-1.6-.8s-.4-.1-.5.1-.6.8-.8 1-.3.2-.5.1a6.5 6.5 0 0 1-3.2-2.8c-.2-.4.2-.4.6-1.2a.4.4 0 0 0 0-.4l-.8-1.8c-.2-.5-.4-.4-.5-.4h-.5a.9.9 0 0 0-.7.3A2.8 2.8 0 0 0 6.5 9a4.9 4.9 0 0 0 1 2.6 11.2 11.2 0 0 0 4.3 3.8c1.6.6 1.9.5 2.3.5a2.5 2.5 0 0 0 1.6-1.1 2 2 0 0 0 .1-1.1c0-.1-.2-.2-.4-.3z" /></svg>
)
