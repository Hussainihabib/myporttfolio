/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: '#0d1117',
        matte: '#161b22',
        panel: '#10141b',
        electric: '#38bdf8',
        emerald: '#10b981',
        slate: {
          150: '#dfe6ee',
        },
      },
      fontFamily: {
        display: ['"Sora"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      backgroundImage: {
        'mesh-gradient':
          'radial-gradient(at 20% 20%, rgba(56,189,248,0.16) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(16,185,129,0.14) 0px, transparent 50%), radial-gradient(at 50% 100%, rgba(56,189,248,0.10) 0px, transparent 50%)',
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(56,189,248,0.35)',
        'glow-emerald': '0 0 40px -10px rgba(16,185,129,0.35)',
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -40px) scale(1.05)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.97)' },
        },
      },
      animation: {
        blob: 'blob 14s infinite ease-in-out',
      },
    },
  },
  plugins: [],
}
