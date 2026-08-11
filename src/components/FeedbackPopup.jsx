import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function FeedbackPopup({ onSubmit, onClose }) {
  const [feedback, setFeedback] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit() {
    if (!feedback.trim()) return
    setSubmitted(true)
    // Show "NOTED." for 1.5s, then auto-submit and close
    setTimeout(() => onSubmit(feedback), 1500)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center">
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0"
        style={{ background: 'rgba(26,17,8,0.5)', backdropFilter: 'blur(2px)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={!submitted ? onClose : undefined}
      />

      {/* Slide up panel */}
      <motion.div
        className="relative z-10 w-full"
        style={{ background: '#F5E642', padding: '2rem 1.5rem', maxWidth: 480 }}
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        transition={{ type: 'spring', damping: 24, stiffness: 200 }}
      >
        {/* X button */}
        {!submitted && (
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '1.25rem',
              right: '1.25rem',
              background: 'rgba(26,17,8,0.12)',
              border: '2px solid rgba(26,17,8,0.2)',
              borderRadius: '4px',
              width: 36,
              height: 36,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: '1rem',
              color: '#1A1108',
              lineHeight: 1,
            }}
          >
            ✕
          </button>
        )}

        <div className="label-box mb-4" style={{ color: '#1A1108', borderColor: '#1A1108', fontSize: '0.62rem' }}>
          FINAL STEP
        </div>

        <h4 className="hero-type mb-2" style={{ fontSize: '2.5rem', color: '#1A1108', lineHeight: 1 }}>
          EKSPEKTASI?
        </h4>
        <p className="font-hand text-lg mb-6" style={{ color: '#5C5040' }}>
          it's my first time asking a girl out soo
        </p>

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="noted"
              className="py-8 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            >
              <div className="hero-type" style={{ fontSize: '3.5rem', color: '#1A1108' }}>NOTED.</div>
              <div className="font-hand mt-2" style={{ fontSize: '1.1rem', color: '#5C5040', fontWeight: 600 }}>
                akan kuusahakan
              </div>
              {/* retro loading dots to signal auto-closing */}
              <div className="flex gap-3 justify-center mt-4">
                <span className="dot dot-1" style={{ background: '#E63329' }} />
                <span className="dot dot-2" style={{ background: '#1A1108' }} />
                <span className="dot dot-3" style={{ background: '#4361EE' }} />
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              className="flex flex-col gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <textarea
                className="txt-input"
                style={{ minHeight: '100px', background: '#F2EBE0', border: 'none', borderRadius: 0 }}
                placeholder="e.g., allergic to peanuts..."
                value={feedback}
                onChange={e => setFeedback(e.target.value)}
              />
              <button
                className="btn-primary w-full"
                style={{
                  fontSize: '1rem',
                  background: '#1A1108',
                  color: '#F2EBE0',
                  padding: '16px',
                  borderRadius: 0,
                  boxShadow: '4px 4px 0 rgba(26,17,8,0.25)',
                }}
                onClick={handleSubmit}
              >
                ITU AJA
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
