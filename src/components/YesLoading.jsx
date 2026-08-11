import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const MESSAGES = [
  'bentar...',
  'bentarrrr...',
  'bentarrrrrr dikit lagi...',
  'nunggu bentar plisss...',
  'lastttttttttt bentarrrrrrrrrr!!',
]

/**
 * YES LOADING — Yellow full-bleed poster
 */
export default function YesLoading({ onComplete }) {
  const [msgIdx, setMsgIdx] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const int = setInterval(() => setMsgIdx(i => (i + 1) % MESSAGES.length), 1000)
    const tick = setInterval(() => setProgress(p => Math.min(p + 1, 100)), 34)
    const t = setTimeout(() => onComplete(), 3500)
    return () => { clearInterval(int); clearInterval(tick); clearTimeout(t) }
  }, [onComplete])

  return (
    <div
      className="page"
      style={{ background: '#00aaffff' }}
    >
      {/* Doodles — retro 16fps CSS */}
      <div className="sticker retro-float-alt" style={{ right: '8%', top: '10%' }}>
        <svg width="44" height="44" viewBox="0 0 48 48" fill="none">
          <path d="M24 4L29.5 18L44 24L29.5 30L24 44L18.5 30L4 24L18.5 18L24 4Z" fill="rgba(26,17,8,0.12)" />
        </svg>
      </div>
      <div className="sticker retro-spin" style={{ left: '5%', bottom: '25%' }}>
        <svg width="38" height="38" viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="16" stroke="rgba(26,17,8,0.12)" strokeWidth="3.5" strokeDasharray="6 4" />
        </svg>
      </div>
      <div className="sticker retro-float" style={{ right: '8%', bottom: '30%' }}>
        <svg width="32" height="40" viewBox="0 0 36 44" fill="none">
          <path d="M22 3L4 25H18L14 41L34 19H20L22 3Z" fill="rgba(26,17,8,0.08)" />
        </svg>
      </div>

      <div className="relative z-10 w-full flex flex-col justify-between"
        style={{ maxWidth: 480, height: '100dvh', padding: '0 1.5rem', margin: '0 auto' }}>

        <div className="flex-1 flex flex-col justify-center">
          {/* Stamp */}
          <div className="label-box mb-6 self-start" style={{ color: 'rgba(26,17,8,0.4)', borderColor: 'rgba(26,17,8,0.2)', fontSize: '0.62rem' }}>
            Loading...
          </div>

          {/* Headline */}
          <div className="hero-type" style={{ fontSize: 'clamp(3.5rem, 16vw, 6rem)', color: '#ffffffff', lineHeight: '0.9' }}>
            YAY!
          </div>
          <div style={{ display: 'inline-block', background: '#ffffffff', padding: '0 0.35rem', marginBottom: '0.15rem' }}>
            <span className="hero-type" style={{ fontSize: 'clamp(3.5rem, 16vw, 6rem)', color: '#ff005dff' }}>LETS GOO!!</span>
          </div>
          <div className="hero-type" style={{ fontSize: 'clamp(3.5rem, 16vw, 6rem)', color: '#ffffffff' }}>
            TAPI BENTAR
          </div>

          {/* Animated message */}
          <AnimatePresence mode="wait">
            <motion.p
              key={msgIdx}
              className="font-hand mt-6"
              style={{ fontSize: '1.25rem', color: 'rgba(26,17,8,0.55)', fontWeight: 600 }}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              {MESSAGES[msgIdx]}
            </motion.p>
          </AnimatePresence>

          {/* Progress bar */}
          <div className="progress-track mt-5" style={{ background: 'rgba(26,17,8,0.12)' }}>
            <div
              className="progress-fill"
              style={{ background: '#ffffffff', width: `${progress}%`, transition: 'width 0.1s linear' }}
            />
          </div>

          {/* Dots */}
          <div className="flex gap-3 mt-4">
            <span className="dot dot-1" style={{ background: '#ffffffff' }} />
            <span className="dot dot-2" style={{ background: '#ffffffff' }} />
            <span className="dot dot-3" style={{ background: '#ffffffff' }} />
          </div>
        </div>
      </div>
    </div>
  )
}
