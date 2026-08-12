import { useState, useRef } from 'react'
import { motion } from 'framer-motion'

/**
 * MAIN SCREEN — plain <div> page (App.jsx wrapper handles transitions).
 * Headline: "GUESS YOU'RE FREE THIS WEEKEND"
 * Sub: "how about we go on a date?" with highlighted "date"
 * NO button escapes on hover (3x), then triggers noFinal.
 */

const ESCAPE_POSITIONS = [
  { x: 0, y: -110 },
  { x: 130, y: 40 },
  { x: -120, y: 60 },
  { x: 80, y: -80 },
  { x: -90, y: 90 },
]

// Smooth expo-out ease
const EASE = [0.22, 1, 0.36, 1]

export default function MainScreen({ onYes, onNoFinal }) {
  const [noCount, setNoCount] = useState(0)
  const [noBtnOffset, setNoBtnOffset] = useState({ x: 0, y: 0 })
  const noRef = useRef(null)

  function handleNoInteract() {
    const next = noCount + 1
    setNoCount(next)
    if (next >= 4) {
      setNoBtnOffset({ x: 0, y: 200 })
      setTimeout(() => onNoFinal(), 600)
      return
    }
    setNoBtnOffset(ESCAPE_POSITIONS[next % ESCAPE_POSITIONS.length])
  }

  return (
    <div className="page paper-texture" style={{ background: '#f1f7fbff' }}>

      {/* Floating doodles — retro 16fps CSS */}
      <div className="sticker retro-float-alt" style={{ right: '7%', top: '10%' }}>
        <svg width="50" height="50" viewBox="0 0 48 48" fill="none">
          <path d="M24 4L29.5 18L44 24L29.5 30L24 44L18.5 30L4 24L18.5 18L24 4Z" fill="#E63329" opacity="0.8" />
        </svg>
      </div>
      <div className="sticker retro-float" style={{ left: '4%', top: '22%' }}>
        <svg width="42" height="50" viewBox="0 0 36 44" fill="none">
          <path d="M22 3L4 25H18L14 41L34 19H20L22 3Z" fill="#F5E642" />
        </svg>
      </div>
      <div className="sticker retro-float-3" style={{ left: '6%', bottom: '20%' }}>
        <svg width="60" height="24" viewBox="0 0 100 38" fill="none">
          <path d="M4 20C14 6 26 34 38 20C50 6 62 34 74 20C86 6 96 28 96 20"
            stroke="#1A1108" strokeWidth="5" strokeLinecap="round" opacity="0.15" />
        </svg>
      </div>
      <div className="sticker retro-spin" style={{ right: '5%', bottom: '25%' }}>
        <svg width="38" height="38" viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="16" stroke="#E63329" strokeWidth="3.5" strokeDasharray="6 4" opacity="0.35" />
        </svg>
      </div>
      <div className="sticker retro-float-2" style={{ left: '50%', top: '8%' }}>
        <svg width="28" height="28" viewBox="0 0 30 30" fill="none">
          <rect x="5" y="5" width="20" height="20" rx="2" stroke="#4361EE" strokeWidth="3" strokeDasharray="4 3" opacity="0.3" />
        </svg>
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full flex flex-col justify-center"
        style={{ maxWidth: 480, minHeight: '100%', padding: '0 1.5rem', margin: '0 auto' }}>

        {/* Main section */}
        <div className="flex flex-col">

          {/* Stamp */}
          <motion.div
            className="label-box mb-5 self-start"
            style={{ color: '#1A1108', borderColor: 'rgba(26,17,8,0.25)', fontSize: '0.62rem' }}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5, ease: EASE }}
          >
            Question #01
          </motion.div>

          {/* Headline — smooth fade-up, no spring */}
          <div>
            <motion.div
              className="hero-type"
              style={{ fontSize: 'clamp(2.4rem, 10.5vw, 4.2rem)', color: '#1A1108' }}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18, duration: 0.62, ease: EASE }}
            >
              I HOPE
            </motion.div>

            <motion.div
              className="hero-type"
              style={{ fontSize: 'clamp(2.4rem, 10.5vw, 4.2rem)', color: '#1A1108' }}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28, duration: 0.62, ease: EASE }}
            >
              YOU'RE FREE
            </motion.div>

            {/* RED BLOCK — expands horizontally */}
            <motion.div
              style={{
                background: '#ff005dff',
                display: 'inline-block',
                padding: '0 0.35rem',
                marginBottom: '0.15rem',
                transformOrigin: 'left center',
              }}
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: 0.42, duration: 0.44, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="hero-type" style={{ fontSize: 'clamp(2.4rem, 10.5vw, 4.2rem)', color: '#fff' }}>
                THIS WEEKEND
              </span>
            </motion.div>
          </div>

          {/* Sub-headline with highlighted "date" */}
          <motion.div
            className="mt-5"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.55, ease: EASE }}
          >
            <span className="font-hand" style={{ fontSize: 'clamp(1.05rem, 4.5vw, 1.4rem)', color: 'rgba(26,17,8,0.55)', fontWeight: 600 }}>
              how about we go on a{' '}
            </span>
            <span
              className="font-hand"
              style={{
                fontSize: 'clamp(1.05rem, 4.5vw, 1.4rem)',
                color: '#fff',
                fontWeight: 700,
                background: '#ff005dff',
                padding: '1px 7px 2px',
                display: 'inline-block',
                transform: 'rotate(-1.5deg)',
              }}
            >
              date?
            </span>
          </motion.div>

          {/* Handwritten note */}
          <motion.p
            className="font-hand mt-3"
            style={{ fontSize: '1rem', color: 'rgba(26,17,8,0.32)', fontWeight: 600 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6, ease: EASE }}
          >
            (udh lama ga ketemu plis  T^T)
          </motion.p>
        </div>

        {/* Buttons — placed directly below main text */}
        <div className="mt-8">
          <div className="relative flex items-center gap-4 px-0 py-2" style={{ minHeight: 70 }}>
            {/* YES */}
            <motion.button
              onClick={onYes}
              className="btn-primary"
              style={{
                background: '#ff005dff',
                color: '#fff',
                fontSize: 'clamp(1rem, 4vw, 1.25rem)',
                padding: '16px 36px',
                zIndex: 20,
                flexShrink: 0,
                boxShadow: '4px 4px 0 #1A1108',
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5, ease: EASE }}
              whileHover={{ scale: 1.04, rotate: -1, boxShadow: '6px 6px 0 #1A1108' }}
              whileTap={{ scale: 0.96 }}
            >
              Mauu!
            </motion.button>

            {/* NO — escapable */}
            <motion.button
              ref={noRef}
              onMouseEnter={handleNoInteract}
              onClick={handleNoInteract}
              className="btn-ghost"
              style={{
                fontSize: 'clamp(0.85rem, 3.5vw, 1rem)',
                color: '#1A1108',
                border: '2px solid rgba(26,17,8,0.35)',
                padding: '14px 24px',
                zIndex: 15,
                pointerEvents: noCount >= 4 ? 'none' : 'auto',
                userSelect: 'none',
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: noCount >= 4 ? 0 : 1,
                y: noBtnOffset.y + (noCount >= 4 ? 20 : 0),
                x: noBtnOffset.x,
                scale: noCount >= 4 ? 0.6 : 1,
              }}
              transition={{ delay: noCount === 0 ? 0.95 : 0, type: 'spring', stiffness: 260, damping: 18 }}
            >
              no {noCount > 0 && `(${noCount})`}
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  )
}
