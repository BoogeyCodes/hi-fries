import { useEffect, useRef } from 'react'

/**
 * On-brand "starry heaven" background: white + amber twinkling stars that
 * slowly drift and parallax with the cursor, over the dark Hi Fries theme.
 * Fixed behind all content (z-index -1). Honors prefers-reduced-motion.
 */
export default function Starfield() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    const DPR = Math.min(window.devicePixelRatio || 1, 2)

    let w = 0
    let h = 0
    let stars = []
    let raf = 0
    let t = 0
    const mouse = { x: 0, y: 0, tx: 0, ty: 0 }

    const build = () => {
      const count = Math.min(220, Math.floor((w * h) / (9000 * DPR * DPR)))
      stars = Array.from({ length: count }, () => {
        const z = Math.random() // depth 0..1
        const amber = Math.random() < 0.16
        return {
          x: Math.random() * w,
          y: Math.random() * h,
          z,
          r: (0.3 + Math.random() * 1.4) * (0.6 + z) * DPR,
          tw: Math.random() * Math.PI * 2,
          sp: (0.04 + z * 0.14) * DPR,
          glow: Math.random() < 0.06,
          color: amber ? '255,182,46' : '255,248,236',
        }
      })
    }

    const resize = () => {
      w = canvas.width = Math.floor(window.innerWidth * DPR)
      h = canvas.height = Math.floor(window.innerHeight * DPR)
      canvas.style.width = window.innerWidth + 'px'
      canvas.style.height = window.innerHeight + 'px'
      build()
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      mouse.x += (mouse.tx - mouse.x) * 0.05
      mouse.y += (mouse.ty - mouse.y) * 0.05
      for (const s of stars) {
        const a = 0.35 + 0.65 * Math.abs(Math.sin(s.tw + t * (0.6 + s.z)))
        const px = s.x + mouse.x * s.z * 26
        const py = s.y + mouse.y * s.z * 26
        if (s.glow) {
          const g = ctx.createRadialGradient(px, py, 0, px, py, s.r * 6)
          g.addColorStop(0, `rgba(${s.color},${a * 0.5})`)
          g.addColorStop(1, 'rgba(0,0,0,0)')
          ctx.fillStyle = g
          ctx.beginPath()
          ctx.arc(px, py, s.r * 6, 0, Math.PI * 2)
          ctx.fill()
        }
        ctx.beginPath()
        ctx.arc(px, py, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${s.color},${(a * (0.4 + s.z * 0.6)).toFixed(3)})`
        ctx.fill()
        if (!reduced) {
          s.y -= s.sp
          if (s.y < -4) {
            s.y = h + 4
            s.x = Math.random() * w
          }
        }
      }
      t += 0.016
      raf = requestAnimationFrame(draw)
    }

    const onMouse = (e) => {
      mouse.tx = (e.clientX / window.innerWidth - 0.5) * 2
      mouse.ty = (e.clientY / window.innerHeight - 0.5) * 2
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    if (!reduced) window.addEventListener('mousemove', onMouse)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouse)
    }
  }, [])

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0"
      style={{ zIndex: -1 }}
    />
  )
}
