import { motion } from 'framer-motion'

/**
 * LOCATION PICKER — Red full-bleed poster (Classico orange-red style)
 */

const LOCATIONS = [
  {
    id: 'loc1',
    name: 'PIM',
    area: 'yaa di pim hehe',
    vibe: 'Ada yang pengen kuliat sih',
  },
  {
    id: 'loc2',
    name: 'Urban Kitchen ',
    area: 'Deket KI',
    vibe: 'Chilling di cafe, tempatnya cakep bgt',
  },
]

export default function LocationPicker({ selected, onSelect, customNote, onCustomNote, onNext, onBack }) {
  return (
    <div
      className="page"
      style={{ background: '#ff005dff' }}
    >
      {/* Doodles — retro 16fps CSS */}
      <div className="sticker retro-float-alt" style={{ right: '7%', top: '10%' }}>
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <path d="M24 4L29.5 18L44 24L29.5 30L24 44L18.5 30L4 24L18.5 18L24 4Z" fill="rgba(255,255,255,0.15)" />
        </svg>
      </div>
      <div className="sticker retro-float" style={{ left: '5%', top: '20%' }}>
        <svg width="40" height="50" viewBox="0 0 36 44" fill="none">
          <path d="M22 3L4 25H18L14 41L34 19H20L22 3Z" fill="rgba(255,255,255,0.12)" />
        </svg>
      </div>
      <div className="sticker retro-spin" style={{ right: '5%', bottom: '28%' }}>
        <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="16" stroke="rgba(255,255,255,0.15)" strokeWidth="3.5" strokeDasharray="6 4" />
        </svg>
      </div>
      <div className="sticker retro-float-3" style={{ left: '8%', bottom: '32%' }}>
        <svg width="28" height="28" viewBox="0 0 30 30" fill="none">
          <rect x="4" y="4" width="22" height="22" rx="2" stroke="rgba(255,255,255,0.12)" strokeWidth="3" />
        </svg>
      </div>

      <div className="relative z-10 w-full flex flex-col justify-between"
        style={{ maxWidth: 480, minHeight: '100%', padding: '0 1.5rem', margin: '0 auto' }}>

        {/* Top */}
        <div className="pt-6">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={onBack}
              className="font-display font-bold uppercase tracking-widest text-xs"
              style={{ color: 'rgba(255,255,255,0.45)', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
            >
              ← back
            </button>
            <div className="label-box" style={{ color: 'rgba(255,255,255,0.45)', borderColor: 'rgba(255,255,255,0.2)', fontSize: '0.62rem' }}>
              Step 02 / 02
            </div>
          </div>
          <div className="hero-type" style={{ fontSize: 'clamp(2.8rem, 12vw, 4.5rem)', color: '#fff' }}>WHERE</div>
          <div style={{ background: '#00aaffff', display: 'inline-block', padding: '0 0.35rem' }}>
            <span className="hero-type" style={{ fontSize: 'clamp(2.8rem, 12vw, 4.5rem)', color: '#ffffffff' }}>TO GO?</span>
          </div>
        </div>

        {/* Locations */}
        <div className="flex-1 flex flex-col justify-center gap-4 py-3">
          {LOCATIONS.map((loc, i) => {
            const isSelected = selected === loc.id
            return (
              <motion.button
                key={loc.id}
                onClick={() => onSelect(loc.id)}
                style={{
                  background: isSelected ? '#fff' : 'rgba(255,255,255,0.1)',
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
                whileHover={{ scale: 1.02, rotate: 0.5 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="hero-type" style={{
                  fontSize: 'clamp(1.7rem, 7.5vw, 2.8rem)',
                  color: isSelected ? '#ff005dff' : '#fff',
                  lineHeight: 1,
                }}>
                  {loc.name}
                </div>
                <div style={{ marginTop: 6, display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span className="font-display font-bold" style={{
                    fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase',
                    color: isSelected ? 'rgba(26,17,8,0.5)' : 'rgba(255,255,255,0.45)',
                  }}>
                    {loc.area}
                  </span>
                  <span style={{ width: 12, height: 1, background: isSelected ? 'rgba(0,0,0,0.15)' : 'rgba(255,255,255,0.2)' }} />
                  <span className="font-hand" style={{ fontSize: '1rem', color: isSelected ? 'rgba(26,17,8,0.55)' : 'rgba(255,255,255,0.45)', fontWeight: 600 }}>
                    {loc.vibe}
                  </span>
                </div>
              </motion.button>
            )
          })}

          {/* Custom note */}
          <div>
            <label className="font-hand block mb-2" style={{ fontSize: '1rem', color: 'rgba(255, 255, 255, 1)', fontWeight: 600 }}>
              atau ada tambahan lain?
            </label>
            <textarea
              className="txt-input"
              rows={1}
              style={{
                height: '42px',
                minHeight: '42px',
                padding: '8px 12px',
                background: 'rgba(255,255,255,0.1)',
                border: '2px solid rgba(255,255,255,0.2)',
                color: '#fff',
              }}
              placeholder="atau habis itu mau kemana gitu"
              value={customNote}
              onChange={e => onCustomNote(e.target.value)}
            />
          </div>
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
          >
            CONFIRM
          </motion.button>
        </div>
      </div>
    </div>
  )
}
