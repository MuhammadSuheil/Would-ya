import { motion } from 'framer-motion'

/**
 * DATE PICKER — Blue full-bleed poster
 * La House / Coffee Rave inspired: dominant color BG, big type,
 * date options as labeled color blocks (not outlined cards).
 */

const DAYS = [
  {
    id: 'sabtu',
    label: 'SABTU',
    date: '15 Agustus 2026',
    desc: '',
    accentBg: '#ff005dff',
    accentText: '#fff',
  },
  {
    id: 'minggu',
    label: 'MINGGU',
    date: '16 Agustus 2026',
    desc: '',
    accentBg: '#1A1108',
    accentText: '#fff',
  },
]

export default function DatePicker({ selected, onSelect, onNext, onBack }) {
  return (
    <div
      className="page"
      style={{ background: '#4361EE' }}
    >
      {/* Doodles — retro 16fps CSS animations */}
      <div className="sticker retro-float-alt" style={{ right: '7%', top: '9%' }}>
        <svg width="46" height="46" viewBox="0 0 48 48" fill="none">
          <path d="M24 4L29.5 18L44 24L29.5 30L24 44L18.5 30L4 24L18.5 18L24 4Z" fill="rgba(255,255,255,0.14)" />
        </svg>
      </div>
      <div className="sticker retro-float" style={{ left: '5%', top: '30%' }}>
        <svg width="40" height="48" viewBox="0 0 36 44" fill="none">
          <path d="M22 3L4 25H18L14 41L34 19H20L22 3Z" fill="rgba(255,255,255,0.12)" />
        </svg>
      </div>
      <div className="sticker retro-spin" style={{ right: '6%', bottom: '22%' }}>
        <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="16" stroke="rgba(255,255,255,0.12)" strokeWidth="3.5" strokeDasharray="6 4" />
        </svg>
      </div>
      <div className="sticker retro-float-3" style={{ left: '8%', bottom: '28%' }}>
        <svg width="28" height="28" viewBox="0 0 30 30" fill="none">
          <rect x="4" y="4" width="22" height="22" rx="2" stroke="rgba(255,255,255,0.12)" strokeWidth="3" />
        </svg>
      </div>

      <div className="relative z-10 w-full flex flex-col justify-between"
        style={{ maxWidth: 480, minHeight: '100%', padding: '0 1.5rem', margin: '0 auto' }}>

        {/* Top — header */}
        <div className="pt-6">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={onBack}
              className="font-display font-bold uppercase tracking-widest text-xs"
              style={{ color: 'rgba(255,255,255,0.4)', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
            >
              ← back
            </button>
            <div className="label-box" style={{ color: 'rgba(255,255,255,0.4)', borderColor: 'rgba(255,255,255,0.2)', fontSize: '0.62rem' }}>
              Step 01 / 02
            </div>
          </div>
          <div className="hero-type" style={{ fontSize: 'clamp(2.8rem, 12vw, 4.5rem)', color: '#fff' }}>
            WHICH
          </div>
          <div style={{ background: '#F5E642', display: 'inline-block', padding: '0 0.35rem' }}>
            <span className="hero-type" style={{ fontSize: 'clamp(2.8rem, 12vw, 4.5rem)', color: '#1A1108' }}>DAY?</span>
          </div>
        </div>

        {/* Middle — day options */}
        <div className="flex-1 flex flex-col justify-center gap-4 py-4">
          {DAYS.map((d, i) => {
            const isSelected = selected === d.id
            return (
              <motion.button
                key={d.id}
                onClick={() => onSelect(d.id)}
                style={{
                  background: isSelected ? d.accentBg : 'rgba(255,255,255,0.1)',
                  border: isSelected ? 'none' : '2px solid rgba(255,255,255,0.2)',
                  borderRadius: '4px',
                  padding: '1.25rem 1.5rem',
                  textAlign: 'left',
                  cursor: 'pointer',
                  width: '100%',
                  backdropFilter: 'blur(4px)',
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1, type: 'spring', stiffness: 180 }}
                whileHover={{ scale: 1.02, rotate: -0.5 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="hero-type" style={{
                  fontSize: 'clamp(2rem, 9vw, 3.2rem)',
                  color: isSelected ? d.accentText : '#fff',
                  lineHeight: 1,
                }}>
                  {d.label}
                </div>
                <div style={{ marginTop: 6, display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span
                    className="font-display font-bold"
                    style={{
                      fontSize: '0.72rem',
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color: isSelected ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.45)',
                    }}
                  >
                    {d.date}
                  </span>
                  {/* <span style={{ width: 30, height: 1, background: isSelected ? 'rgba(255,255,255,0.4)' : 'rgba(255,255,255,0.2)' }} /> */}
                  <span className="font-hand" style={{ fontSize: '1rem', color: isSelected ? 'rgba(255,255,255,0.75)' : 'rgba(255,255,255,0.4)', fontWeight: 600 }}>
                    {d.desc}
                  </span>
                </div>
              </motion.button>
            )
          })}
        </div>

        {/* Bottom */}
        <div className="pb-6">
          <motion.button
            className="btn-primary w-full"
            style={{
              background: selected ? '#F5E642' : 'rgba(255,255,255,0.15)',
              color: selected ? '#1A1108' : 'rgba(255,255,255,0.4)',
              fontSize: '1.05rem',
              padding: '16px',
              width: '100%',
              cursor: selected ? 'pointer' : 'not-allowed',
              border: 'none',
              boxShadow: selected ? '4px 4px 0 rgba(26,17,8,0.4)' : 'none',
            }}
            onClick={selected ? onNext : undefined}
            whileHover={selected ? { scale: 1.02, boxShadow: '6px 6px 0 rgba(26,17,8,0.4)' } : {}}
            whileTap={selected ? { scale: 0.97 } : {}}
          >
            OKAYY NEXTTT
          </motion.button>
        </div>
      </div>
    </div>
  )
}
