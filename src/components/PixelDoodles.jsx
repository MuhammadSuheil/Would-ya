/* ── Editorial doodle floaters — raw scrapbook marks, retro 16fps ── */

const ScribbleLine = ({ color = '#1A1108', size = 80 }) => (
  <svg width={size} height={size * 0.4} viewBox="0 0 100 38" fill="none">
    <path d="M4 20C14 6 26 34 38 20C50 6 62 34 74 20C86 6 96 28 96 20"
      stroke={color} strokeWidth="5" strokeLinecap="round" fill="none"/>
  </svg>
)

const ArrowCurved = ({ color = '#1A1108', size = 56 }) => (
  <svg width={size} height={size} viewBox="0 0 56 56" fill="none">
    <path d="M10 10C20 10 42 14 46 36M46 36L38 28M46 36L52 26"
      stroke={color} strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const StarFilled = ({ color = '#F5E642', size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M24 4L29.5 18L44 24L29.5 30L24 44L18.5 30L4 24L18.5 18L24 4Z"
      fill={color}/>
  </svg>
)

const BoltRaw = ({ color = '#F5E642', size = 36 }) => (
  <svg width={size} height={size * 1.2} viewBox="0 0 36 44" fill="none">
    <path d="M22 3L4 25H18L14 41L34 19H20L22 3Z" fill={color}/>
  </svg>
)

const CircleRaw = ({ color = '#E63329', size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
    <circle cx="20" cy="20" r="17" stroke={color} strokeWidth="4.5" fill="none"
      strokeDasharray="6 4"/>
  </svg>
)

const XMark = ({ color = '#1A1108', size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
    <path d="M5 5L27 27M27 5L5 27" stroke={color} strokeWidth="5.5" strokeLinecap="round"/>
  </svg>
)

const DotGrid = ({ color = '#1A1108', size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
    {[0,1,2].map(row => [0,1,2].map(col => (
      <circle key={`${row}-${col}`}
        cx={8 + col * 12} cy={8 + row * 12} r="3.5"
        fill={color} opacity="0.4"/>
    )))}
  </svg>
)

// Alternating retro animation classes for variety
const RETRO_CLASSES = [
  'retro-float',
  'retro-float-alt',
  'retro-float-2',
  'retro-spin',
  'retro-float-3',
  'retro-float-alt',
  'retro-float',
  'retro-float-3',
  'retro-float-2',
  'retro-spin',
]

const ITEMS = [
  { C: StarFilled,   color: '#F5E642', x: 4,  y: 6,  s: 52 },
  { C: BoltRaw,      color: '#F5E642', x: 84, y: 5,  s: 42 },
  { C: ScribbleLine, color: '#1A1108', x: 2,  y: 55, s: 70 },
  { C: ArrowCurved,  color: '#E63329', x: 80, y: 50, s: 52 },
  { C: CircleRaw,    color: '#F5E642', x: 45, y: 2,  s: 46 },
  { C: XMark,        color: '#E63329', x: 12, y: 82, s: 36 },
  { C: DotGrid,      color: '#1A1108', x: 78, y: 80, s: 44 },
  { C: ScribbleLine, color: '#E63329', x: 28, y: 90, s: 58 },
  { C: StarFilled,   color: '#F2A7C3', x: 70, y: 18, s: 36 },
  { C: BoltRaw,      color: '#4361EE', x: 90, y: 28, s: 38 },
]

export default function PixelDoodles({ colorOverride }) {
  return (
    <>
      {ITEMS.map((item, i) => (
        <div
          key={i}
          className={`sticker ${RETRO_CLASSES[i]}`}
          style={{ left: `${item.x}%`, top: `${item.y}%` }}
        >
          <item.C color={colorOverride || item.color} size={item.s} />
        </div>
      ))}
    </>
  )
}
