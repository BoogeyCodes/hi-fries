/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        hf: {
          bg: '#0e0a05',
          bg2: '#15100a',
          panel: '#1b140c',
          panel2: '#221a0f',
          orange: '#ff7e1a',
          honey: '#ffb62e',
          ember: '#ff4d2d',
          cream: '#f8efe2',
          muted: '#b2a48c',
        },
      },
      fontFamily: {
        display: ['Anton', 'Impact', 'sans-serif'],
        body: ['Barlow', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        script: ['Pacifico', 'cursive'],
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(26px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        floaty: {
          '0%,100%': { transform: 'translateY(0) rotate(2.5deg)' },
          '50%': { transform: 'translateY(-14px) rotate(2.5deg)' },
        },
        glow: { '0%,100%': { opacity: '0.5' }, '50%': { opacity: '1' } },
        spinbadge: {
          '0%,100%': { transform: 'rotate(-10deg)' },
          '50%': { transform: 'rotate(6deg)' },
        },
        marquee: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
        shine: {
          '0%': { transform: 'translateX(-120%) skewX(-18deg)' },
          '60%,100%': { transform: 'translateX(360%) skewX(-18deg)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s ease both',
        floaty: 'floaty 7s ease-in-out infinite',
        glow: 'glow 4s ease-in-out infinite',
        spinbadge: 'spinbadge 5s ease-in-out infinite',
        marquee: 'marquee 26s linear infinite',
        shine: 'shine 4.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
