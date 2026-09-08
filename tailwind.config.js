/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: '#08080a',
        charcoal: '#121214',
        graphite: '#1c1c20',
        ash: '#2a2a2e',
        fog: '#6a6a70',
        mist: '#9a9aa0',
        ivory: '#e8e2d4',
        bone: '#f0ebe0',
        parchment: '#d8d2c4',
        burgundy: {
          DEFAULT: '#3d1518',
          light: '#5c1f24',
          dark: '#2a0e10',
        },
        blood: '#4a1a1e',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-xl': '0.3em',
        'widest-2xl': '0.4em',
      },
      animation: {
        'fade-in': 'fadeIn 1.2s ease forwards',
        'fade-up': 'fadeUp 1s ease forwards',
        'slow-zoom': 'slowZoom 20s ease-out forwards',
        'grain': 'grain 0.4s steps(2) infinite',
        'flicker': 'flicker 4s ease-in-out infinite',
        'draw-line': 'drawLine 1.5s ease forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slowZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.12)' },
        },
        grain: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(-5%, 5%)' },
          '50%': { transform: 'translate(5%, -5%)' },
          '75%': { transform: 'translate(-5%, -5%)' },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '48%': { opacity: '1' },
          '50%': { opacity: '0.85' },
          '52%': { opacity: '1' },
          '70%': { opacity: '0.95' },
          '72%': { opacity: '1' },
        },
        drawLine: {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
      },
    },
  },
  plugins: [],
};
