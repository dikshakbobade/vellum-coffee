/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './styles/**/*.css',
  ],
  theme: {
    extend: {
      colors: {
        espresso:       '#080402',
        'espresso-card':'#110907',
        'espresso-mid': '#1e1008',
        gold:           '#c4903a',
        'gold-light':   '#e8b55a',
        'gold-pale':    '#f5c96e',
        cream:          '#f4e8d4',
        'cream-muted':  '#a08468',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        sans:    ['var(--font-sans)',    'Trebuchet MS', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient':    'linear-gradient(135deg, #c4903a, #e8b55a)',
        'espresso-radial':  'radial-gradient(ellipse 80% 70% at 60% 50%, #2d1408 0%, #1a0905 40%, #060402 100%)',
      },
      animation: {
        'glow-pulse': 'glowPulse 4s ease infinite',
        'float':      'floatY 5s ease infinite',
        'steam':      'steamUp 2.8s ease infinite',
        'gold-shimmer': 'goldShimmer 4s linear infinite',
        'spin-slow':  'spin 22s linear infinite',
      },
      keyframes: {
        glowPulse: {
          '0%,100%': { opacity: '0.22' },
          '50%':     { opacity: '0.55' },
        },
        floatY: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%':     { transform: 'translateY(-14px)' },
        },
        steamUp: {
          '0%':   { opacity: '0.75', transform: 'translateY(0) scaleX(1)' },
          '100%': { opacity: '0',    transform: 'translateY(-50px) scaleX(1.6)' },
        },
        goldShimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition:  '200% center' },
        },
      },
      transitionTimingFunction: {
        luxury: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
