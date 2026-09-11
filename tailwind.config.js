/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0A0B0D',        // slightly lighter than pure black
        surface: '#121317',
        card: '#16181D',
        line: '#23252B',
        brand: {
          blue: '#7FDCFF',
          deep: '#1E5A8C',     // dark blue secondary
        },
        vault: {
          red: '#FF3B30',
        },
      },
      fontFamily: {
        sans: ['Oswald', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1120px',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.7s ease-out both',
      },
    },
  },
  plugins: [],
}
