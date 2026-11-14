import { brand } from '../data/menu.js'

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-hf-orange/20 bg-[#080502]">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-7 px-[max(18px,env(safe-area-inset-left))] pb-8 pt-12 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <div className="font-script text-3xl text-hf-honey">Hi Fries</div>
          <div className="mt-1 text-xs font-bold uppercase tracking-[0.2em] text-hf-muted">
            More Than Fries
          </div>
          <p className="mt-3 max-w-[36ch] text-sm text-hf-muted">
            Lahore's loaded burger &amp; fries joint in Parkview City — grilled, fried and sauced to
            order.
          </p>
        </div>

        <div>
          <h4 className="mb-3.5 font-display text-base uppercase">Order &amp; Visit</h4>
          <Ci icon="📞" k="UAN" v={<a href={`tel:${brand.uanRaw}`} className="hover:text-hf-honey">{brand.uan}</a>} />
          <Ci icon="💬" k="WhatsApp" v={<a href={`https://wa.me/${brand.whatsapp}`} target="_blank" rel="noreferrer" className="hover:text-hf-honey">{brand.whatsappDisplay}</a>} />
          <Ci icon="📍" k="Location" v={brand.address} />
          <Ci
            icon="🌐"
            k="Website"
            v={<a href={`https://${brand.website}`} target="_blank" rel="noreferrer" className="hover:text-hf-honey">{brand.website}</a>}
          />
        </div>

        <div>
          <h4 className="mb-3.5 font-display text-base uppercase">Hours</h4>
          <Ci icon="🕛" k="Open Daily" v="12:00 PM – 2:00 AM" />
          <Ci icon="🍟" k="Lunch Deal" v="1 PM – 6 PM" />
        </div>
      </div>
      <div className="border-t border-hf-orange/20">
        <div className="mx-auto max-w-6xl px-[max(18px,env(safe-area-inset-left))] py-4 text-center text-sm text-hf-muted/70">
          © {new Date().getFullYear()} Hi Fries · More Than Fries
        </div>
      </div>
    </footer>
  )
}

function Ci({ icon, k, v }) {
  return (
    <div className="mb-3.5 flex items-start gap-3">
      <span className="grid h-9 w-9 flex-none place-items-center rounded-xl border border-hf-orange/20 text-hf-honey">
        {icon}
      </span>
      <span>
        <span className="text-xs uppercase tracking-wide text-hf-muted">{k}</span>
        <br />
        <span className="font-semibold text-hf-cream">{v}</span>
      </span>
    </div>
  )
}
