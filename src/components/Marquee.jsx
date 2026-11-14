const text = (
  <span className="inline-flex items-center gap-6 whitespace-nowrap px-6 font-display text-base uppercase tracking-wide">
    🔥 Zinger Zinger Rs.930 <b className="text-hf-honey">•</b> Two Hot Two Handle Rs.1199{' '}
    <b className="text-hf-honey">•</b> Double Down Rs.1649 <b className="text-hf-honey">•</b> Free
    Home Delivery <b className="text-hf-honey">•</b> More Than Fries <b className="text-hf-honey">•</b>
  </span>
)

export default function Marquee() {
  return (
    <div className="overflow-hidden border-y border-hf-orange/20 bg-gradient-to-r from-hf-orange/10 to-hf-ember/5">
      <div className="flex w-max animate-marquee py-2.5">
        {text}
        {text}
      </div>
    </div>
  )
}
