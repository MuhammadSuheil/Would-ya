import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * SPLASH — Full-bleed RED poster.
 * Click anywhere → onDismiss (App wrapper handles exit animation).
 */
export default function SplashScreen({ onDismiss }) {
  const [showHint, setShowHint] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setShowHint(true), 2000)
    return () => clearTimeout(t)
  }, [])

  return (
    <div
      className="page cursor-pointer select-none"
      style={{ background: '#ff005dff' }}
      onClick={onDismiss}
    >
      {/* Floating doodles — retro 16fps CSS */}
      <div className="sticker retro-float" style={{ left: '6%', top: '10%' }}>
        <svg width="44" height="44" viewBox="0 0 48 48" fill="none">
          <path d="M24 4L29.5 18L44 24L29.5 30L24 44L18.5 30L4 24L18.5 18L24 4Z" fill="rgba(255,255,255,0.25)" />
        </svg>
      </div>
      <div className="sticker retro-float-alt" style={{ right: '8%', top: '14%' }}>
        <svg width="38" height="46" viewBox="0 0 36 44" fill="none">
          <path d="M22 3L4 25H18L14 41L34 19H20L22 3Z" fill="rgba(255,255,255,0.2)" />
        </svg>
      </div>
      <div className="sticker retro-float-3" style={{ left: '5%', bottom: '18%' }}>
        <svg width="64" height="26" viewBox="0 0 100 38" fill="none">
          <path d="M4 20C14 6 26 34 38 20C50 6 62 34 74 20C86 6 96 28 96 20"
            stroke="rgba(255,255,255,0.2)" strokeWidth="5" strokeLinecap="round" />
        </svg>
      </div>
      <div className="sticker retro-spin" style={{ right: '6%', bottom: '22%' }}>
        <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="16" stroke="rgba(255,255,255,0.18)" strokeWidth="4" strokeDasharray="6 4" />
        </svg>
      </div>
      <div className="sticker retro-float-2" style={{ right: '12%', bottom: '40%' }}>
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
          <rect x="4" y="4" width="22" height="22" rx="2" stroke="rgba(245,230,66,0.35)" strokeWidth="3" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 flex flex-col items-center justify-center text-center pb-12"
        style={{ maxWidth: 480, height: '100dvh', margin: '0 auto' }}>

        <motion.div
          className="label-box mb-6"
          style={{ color: 'rgba(255,255,255,0.6)', borderColor: 'rgba(255,255,255,0.35)', fontSize: '0.62rem' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Apakah ini?
        </motion.div>

        <div aria-label="Hi Alicia!">
          {['HI', 'ALICIA!'].map((word, wi) => (
            <motion.div
              key={wi}
              className="hero-type"
              style={{
                fontSize: 'clamp(4.8rem, 22vw, 7.5rem)',
                color: '#ffffffff',
                display: 'block',
              }}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 + wi * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              {word}
            </motion.div>
          ))}
        </div>

        <motion.p
          className="font-hand mt-5"
          style={{ fontSize: '1.35rem', color: 'rgba(255,255,255,0.75)', fontWeight: 600 }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          Apa adanya sih webnya tapi lucu jadi gpp :D
        </motion.p>
      </div>

      {/* Bottom hint */}
      <motion.div
        className="absolute bottom-8 left-0 right-0 z-5"
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.55, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <AnimatePresence>
          {showHint && (
            <motion.span
              className="font-hand"
              style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.8)', fontWeight: 600 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2.2, repeat: Infinity }}
            >
              tap anywhere to continue
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
