import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PixelDoodles from './PixelDoodles'

const DAY_LABELS = {
  sabtu: 'Sabtu, 15 Agustus 2026',
  minggu: 'Minggu, 16 Agustus 2026',
}
const LOC_LABELS = {
  loc1: 'PIM',
  loc2: 'URBAN KITCHEN',
}

export default function FinalPage({ day, location, customNote, onFeedback }) {
  const [loading, setLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => {
      setLoading(false)
      setTimeout(() => setShowContent(true), 200)
    }, 2200)
    return () => clearTimeout(t)
  }, [])

  if (loading) {
    return (
      <div
        className="page flex flex-col items-center justify-center gap-5"
        style={{ background: '#ffffffff' }}
      >
        <PixelDoodles />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.4, repeat: Infinity, ease: 'linear' }}
          style={{
            width: 56, height: 56,
            border: '4px solid rgba(26,17,8,0.1)',
            borderTop: '4px solid #1A1108',
            borderRadius: '50%',
          }}
        />
        <h2 className="font-display font-bold text-xl tracking-widest uppercase" style={{ color: '#1A1108' }}>
          OKEYYYYY...
        </h2>
      </div>
    )
  }

  return (
    <div
      className="page"
      style={{ background: '#FF6B35' }} // Orange background like Classico
    >
      <PixelDoodles colorOverride="rgba(26,17,8,0.15)" />

      <div className="relative z-10 w-full flex flex-col justify-between"
        style={{ maxWidth: 480, height: '100dvh', padding: '0 1.5rem', margin: '0 auto' }}>

        {/* Top Header */}
        <div className="pt-6">
          <div className="flex justify-between items-center mb-6">
            <div className="label-box" style={{ color: '#1A1108', borderColor: '#1A1108', fontSize: '0.62rem' }}>
              CONFIRMED
            </div>
            <div className="font-display font-bold uppercase tracking-widest text-xs opacity-50">
              Eps 1
            </div>
          </div>

          <AnimatePresence>
            {showContent && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', damping: 20 }}
              >
                <div className="hero-type" style={{ fontSize: 'clamp(3rem, 13vw, 5rem)', color: '#1A1108' }}>IT'S</div>
                <div className="hero-type" style={{ fontSize: 'clamp(3rem, 13vw, 5rem)', color: '#F2EBE0' }}>A DATE.</div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Receipt Details Block */}
        <AnimatePresence>
          {showContent && (
            <motion.div
              className="mt-8 mb-auto"
              style={{ background: '#F2EBE0', padding: '1.5rem' }}
              initial={{ opacity: 0, scaleY: 0, originY: 0 }}
              animate={{ opacity: 1, scaleY: 1 }}
              transition={{ delay: 0.2, type: 'spring', damping: 24 }}
            >
              <div className="font-display font-bold uppercase tracking-widest text-xl mb-4 text-center border-b-2 border-dashed border-ink pb-4">
                RECEIPT
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-end border-b border-ink/20 pb-2">
                  <span className="font-display font-bold text-xs uppercase tracking-widest opacity-60">DATE</span>
                  <span className="font-display font-bold text-sm">{DAY_LABELS[day] || '—'}</span>
                </div>
                <div className="flex justify-between items-end border-b border-ink/20 pb-2">
                  <span className="font-display font-bold text-xs uppercase tracking-widest opacity-60">LOCATION</span>
                  <span className="font-display font-bold text-sm">{LOC_LABELS[location] || location || '—'}</span>
                </div>
                {customNote && (
                  <div className="flex justify-between items-end border-b border-ink/20 pb-2">
                    <span className="font-display font-bold text-xs uppercase tracking-widest opacity-60">NOTE</span>
                    <span className="font-hand text-sm opacity-80">"{customNote}"</span>
                  </div>
                )}
                <div className="flex justify-between items-end border-b border-ink/20 pb-2">
                  <span className="font-display font-bold text-xs uppercase tracking-widest opacity-60">STATUS</span>
                  <span className="font-display font-bold text-sm">RESERVED</span>
                </div>
              </div>

              {/* Barcode */}
              <div className="mt-8 flex flex-col items-center">
                <div style={{ display: 'flex', gap: '3px', height: 40, width: '100%', justifyContent: 'center' }}>
                  {Array.from({ length: 30 }, (_, i) => (
                    <div
                      key={i}
                      style={{
                        background: '#1A1108',
                        height: '100%',
                        width: `${[3, 2, 4, 1, 3, 2, 1, 4, 2, 3, 1, 2, 3, 4, 1, 2, 3, 1, 4, 2, 3, 1, 2, 3, 4, 1, 3, 2, 4, 1][i]}px`,
                      }}
                    />
                  ))}
                </div>
                <span className="font-display font-bold text-[0.55rem] tracking-[0.3em] opacity-50 mt-2">
                  see you later then
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom CTA */}
        <AnimatePresence>
          {showContent && (
            <motion.div
              className="pb-6 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <button
                className="btn-primary w-full"
                style={{ background: '#1A1108', color: '#F2EBE0', padding: '16px', fontSize: '1rem' }}
                onClick={onFeedback}
              >
                EKSPEKTASI?
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
