import { motion } from 'framer-motion'

const LOC_LABELS = {
  loc1: 'PIM',
  loc2: 'Urban Kitchen',
}
const DAY_LABELS = {
  sabtu: 'Sabtu, 15 Agustus 2026',
  minggu: 'Minggu, 16 Agustus 2026',
}

export default function ConfirmPopup({ day, location, customNote, onConfirm, onEdit }) {
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center">
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0"
        style={{ background: 'rgba(26,17,8,0.85)', backdropFilter: 'blur(4px)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onEdit}
      />

      {/* Slide up receipt/ticket */}
      <motion.div
        className="relative z-10 w-full"
        style={{ maxWidth: 480, background: '#ffffffff', padding: '2rem 1.5rem', maxHeight: '90vh', overflowY: 'auto' }}
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        transition={{ type: 'spring', damping: 24, stiffness: 200 }}
      >
        <div className="flex justify-between items-start mb-6">
          <div className="label-box" style={{ color: '#1A1108', borderColor: '#1A1108', fontSize: '0.62rem' }}>
            RECEIPT
          </div>
          <div className="font-display font-bold uppercase tracking-widest text-xs opacity-50">
            NO. 001
          </div>
        </div>

        <div className="hero-type mb-8" style={{ fontSize: 'clamp(2.5rem, 10vw, 4rem)', color: '#1A1108', lineHeight: 0.9 }}>
          UDAH BENER NIH?
        </div>

        <div className="flex flex-col gap-4 mb-8">
          <div style={{ borderBottom: '2px solid rgba(26,17,8,0.1)', paddingBottom: '0.5rem' }}>
            <span className="font-display font-bold text-xs tracking-widest uppercase block mb-1 opacity-50">When</span>
            <span className="font-display font-bold text-xl">{DAY_LABELS[day] || '—'}</span>
          </div>

          <div style={{ borderBottom: '2px solid rgba(26,17,8,0.1)', paddingBottom: '0.5rem' }}>
            <span className="font-display font-bold text-xs tracking-widest uppercase block mb-1 opacity-50">Where</span>
            <span className="font-display font-bold text-xl">{LOC_LABELS[location] || '—'}</span>
          </div>

          {customNote && (
            <div style={{ borderBottom: '2px solid rgba(26,17,8,0.1)', paddingBottom: '0.5rem' }}>
              <span className="font-display font-bold text-xs tracking-widest uppercase block mb-1 opacity-50">Note</span>
              <span className="font-hand text-lg" style={{ color: '#5C5040' }}>"{customNote}"</span>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-3">
          <button
            className="btn-primary w-full"
            style={{ background: '#ff005dff', color: '#fff', fontSize: '1.15rem', padding: '16px' }}
            onClick={onConfirm}
          >
            YAKINNN
          </button>
          <button
            className="btn-ghost w-full"
            style={{ fontSize: '0.9rem', color: '#1A1108', padding: '12px' }}
            onClick={onEdit}
          >
            keknya gajadi deh
          </button>
        </div>
      </motion.div>
    </div>
  )
}
