import { motion } from 'framer-motion'
import PixelDoodles from './PixelDoodles'

export default function ClosurePage() {
  return (
    <div
      className="page"
      style={{ background: '#080b1aff' }} // Dark, solemn background
    >
      <PixelDoodles colorOverride="rgba(255,255,255,0.08)" />

      <div className="relative z-10 w-full flex flex-col justify-center items-center text-center"
        style={{ maxWidth: 480, minHeight: '100%', padding: '0 1.5rem', margin: '0 auto' }}>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero-type" style={{ fontSize: 'clamp(2.5rem, 11vw, 4rem)', color: '#fff', lineHeight: 1.1 }}>
            Okay...<br />I understand.
          </div>

          <motion.p
            className="font-hand mt-6"
            style={{ fontSize: '1.35rem', color: 'rgba(255,255,255,0.5)', fontWeight: 600 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            thank you for your time
          </motion.p>
        </motion.div>
      </div>
    </div>
  )
}
