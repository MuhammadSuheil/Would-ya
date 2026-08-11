/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body:    ['"Syne"', 'sans-serif'],
        hand:    ['"Caveat"', 'cursive'],
      },
      colors: {
        red:     '#E63329',  // editorial accent red
        yellow:  '#F5E642',  // neon butter
        blue:    '#4FC3F7',  // sky blue
        ink:     '#1A1108',  // near-black warm
        cream:   '#FFF9EF',  // card cream
        bg:      '#E8E0D5',  // newsprint beige
        pink:    '#FFAECB',  // soft pink for love
        'ink-m': '#5C5040',  // mid text warm
        'ink-s': '#A09080',  // subtle text
      },
      animation: {
        'float-a':    'floatY 5.5s ease-in-out infinite',
        'float-b':    'floatY 7s ease-in-out 1.2s infinite',
        'float-c':    'floatY 6s ease-in-out 2.4s infinite',
        'float-d':    'floatY 8s ease-in-out 0.6s infinite',
        'spin-slow':  'spin 18s linear infinite',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
        'wobble':     'wobble 3s ease-in-out infinite',
        'stamp-in':   'stampIn 0.4s cubic-bezier(0.34,1.56,0.64,1) forwards',
        'pop-in':     'popIn 0.35s cubic-bezier(0.34,1.56,0.64,1) forwards',
        'fade-up':    'fadeUp 0.55s cubic-bezier(0.16,1,0.3,1) both',
        'bounce-dot': 'bounceDot 1.2s ease-in-out infinite',
      },
      keyframes: {
        floatY: {
          '0%,100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%':     { transform: 'translateY(-12px) rotate(2deg)' },
        },
        wobble: {
          '0%,100%': { transform: 'rotate(-3deg)' },
          '50%':     { transform: 'rotate(3deg)' },
        },
        pulseSoft: {
          '0%,100%': { opacity: '0.7', transform: 'scale(1)' },
          '50%':     { opacity: '1',   transform: 'scale(1.06)' },
        },
        stampIn: {
          '0%':   { opacity: '0', transform: 'scale(1.8) rotate(-8deg)' },
          '60%':  { opacity: '1', transform: 'scale(0.9) rotate(2deg)' },
          '100%': { opacity: '1', transform: 'scale(1) rotate(0deg)' },
        },
        popIn: {
          '0%':   { opacity: '0', transform: 'scale(0.75)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(22px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        bounceDot: {
          '0%,80%,100%': { transform: 'translateY(0)', opacity: '0.4' },
          '40%':         { transform: 'translateY(-12px)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
