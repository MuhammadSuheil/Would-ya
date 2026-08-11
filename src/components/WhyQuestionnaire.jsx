import { useState } from 'react'
import { motion } from 'framer-motion'

/**
 * WHY QUESTIONNAIRE — Dark ink full-bleed poster
 */
export default function WhyQuestionnaire({ onYesAja, onBack, onSorry }) {
  const [reason, setReason] = useState('')

  return (
    <div
      className="page"
      style={{ background: '#080b1aff' }}
    >
      {/* Ghost doodles — retro 16fps CSS */}
      <div className="sticker retro-float-alt" style={{ right: '8%', top: '12%' }}>
        <svg width="44" height="44" viewBox="0 0 48 48" fill="none">
          <path d="M24 4L29.5 18L44 24L29.5 30L24 44L18.5 30L4 24L18.5 18L24 4Z" fill="rgba(255,255,255,0.06)" />
        </svg>
      </div>
      <div className="sticker retro-float-3" style={{ left: '5%', bottom: '20%' }}>
        <svg width="58" height="24" viewBox="0 0 100 38" fill="none">
          <path d="M4 20C14 6 26 34 38 20C50 6 62 34 74 20C86 6 96 28 96 20"
            stroke="rgba(255,255,255,0.07)" strokeWidth="5" strokeLinecap="round" />
        </svg>
      </div>
      <div className="sticker retro-spin" style={{ right: '6%', bottom: '35%' }}>
        <svg width="34" height="34" viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="16" stroke="rgba(255,255,255,0.07)" strokeWidth="3" strokeDasharray="5 4" />
        </svg>
      </div>

      <div className="relative z-10 w-full flex flex-col justify-between"
        style={{ maxWidth: 480, height: '100dvh', padding: '0 1.5rem', margin: '0 auto' }}>

        {/* Back button */}
        <div className="pt-14">
          <button
            onClick={onBack}
            className="font-display font-bold uppercase tracking-widest text-xs"
            style={{ color: 'rgba(255,255,255,0.35)', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
          >
            ← back
          </button>
        </div>

        {/* Main content */}
        <div className="flex-1 flex flex-col justify-center">
          {/* Stamp */}
          <div className="label-box mb-5 self-start" style={{ color: 'rgba(255,255,255,0.3)', borderColor: 'rgba(255,255,255,0.15)', fontSize: '0.62rem' }}>
            hold on
          </div>

          {/* Headline */}
          <motion.div
            className="hero-type"
            style={{ fontSize: 'clamp(3rem, 13vw, 5rem)', color: '#fff' }}
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
          >
            WHY
          </motion.div>
          <motion.div
            style={{ display: 'inline-block', background: '#00aaffff', padding: '0 0.35rem', marginBottom: '0.1rem', transformOrigin: 'left center' }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.22, duration: 0.44, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="hero-type" style={{ fontSize: 'clamp(3rem, 13vw, 5rem)', color: '#1A1108' }}>NO??</span>
          </motion.div>

          <motion.p
            className="font-hand mt-4 mb-6"
            style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.45)', fontWeight: 600 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
          >
            (be honest, let me know why...)
          </motion.p>

          {/* Input area */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <textarea
              className="txt-input mb-4"
              style={{
                minHeight: '110px',
                background: 'rgba(255,255,255,0.07)',
                border: '2px solid rgba(255,255,255,0.15)',
                color: '#fff',
              }}
              placeholder="pour your heart out here..."
              value={reason}
              onChange={e => setReason(e.target.value)}
            />
            <button
              className="btn-primary w-full mb-3"
              style={{
                background: 'transparent',
                border: '2px solid rgba(255,255,255,0.4)',
                color: 'rgba(255,255,255,0.8)',
                fontSize: '1.05rem',
                padding: '16px',
                width: '100%',
              }}
              onClick={() => onSorry(reason)}
            >
              I'm sorry
            </button>
            <button
              className="btn-primary w-full"
              style={{
                background: '#ff005dff',
                color: '#1A1108',
                fontSize: '1.05rem',
                padding: '16px',
                width: '100%',
              }}
              onClick={() => onYesAja(reason)}
            >
              CANDAAAA
            </button>
            <p className="font-hand text-center mt-3" style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.25)', fontWeight: 600 }}>
              one of these might be the wrong choice...
            </p>
          </motion.div>
        </div>

        {/* Bottom band removed */}
      </div>
    </div>
  )
}
